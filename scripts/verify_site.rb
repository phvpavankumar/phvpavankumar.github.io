# Verify generated routes and the publication boundary without network requests.
require 'pathname'
require 'uri'
require_relative 'content_index'

repo = File.expand_path('..', __dir__)
output = File.expand_path(ARGV.fetch(0, '_site'), repo)
raise 'Build output missing' unless File.file?(File.join(output, 'index.html'))
records = ContentIndex.records(File.join(repo, 'site'))
ContentIndex.validate!(records)
routes = %w[/ /about/ /experience/ /projects/ /weekly/ /writing/ /contributions/ /archive/ /thank-you/ /demos/aurevia/ /prototypes/enterprise-analytics/]
routes += records.map { |r| r.fetch('permalink') }
routes += ContentIndex.years(records).map { |year| "/archive/#{year}/" }
routes.each do |route|
  raise "Missing route: #{route}" unless File.file?(File.join(output, route.delete_prefix('/'), 'index.html'))
end
%w[docs scripts content-templates vendor .github _projects _layouts _includes pages README.md CLAUDE.md Gemfile].each do |path|
  raise "Nonpublic source leaked: #{path}" if File.exist?(File.join(output, path))
end
demo = '/prototypes/enterprise-analytics/'
pages = Dir.glob(File.join(output, '**/*.html'))
pages.each do |file|
  html = File.read(file)
  route = '/' + Pathname.new(file).relative_path_from(Pathname.new(output)).to_s.sub(/index\.html\z/, '')
  raise "Unrendered Liquid: #{route}" if html.match?(/\{%|\{\{/)
  if route == demo
    raise 'Missing unlisted robots directive' unless html.include?('noindex, nofollow')
  else
    raise "Unexpected noindex: #{route}" if html.include?('noindex')
    raise "Public demo link: #{route}" if html.match?(/href=["'][^"']*\/prototypes\/enterprise-analytics\//)
  end
  html.scan(/(?:href|src)=["']([^"']+)["']/).flatten.each do |url|
    next unless url.start_with?('/') && !url.start_with?('//')
    path = URI::DEFAULT_PARSER.unescape(url.split(/[?#]/).first)
    target = File.join(output, path.delete_prefix('/'))
    raise "Broken local link #{url} on #{route}" unless File.file?(target) || File.file?(File.join(target, 'index.html'))
  end
end
Dir.glob(File.join(repo, 'site/assets/**/*')).select { |p| File.file?(p) }.each do |source|
  target = File.join(output, source.delete_prefix(File.join(repo, 'site/')))
  raise "Changed or missing asset: #{target}" unless File.file?(target) && File.binread(source) == File.binread(target)
end
puts "Verified #{pages.length} HTML pages, #{routes.uniq.length} required routes, local links, assets and unlisted demo."
