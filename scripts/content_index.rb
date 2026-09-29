# Validate canonical content and generate static year routes for GitHub Pages.
# Runs locally before review; no custom Jekyll plugin is required in production.
require 'date'
require 'yaml'
require 'fileutils'

module ContentIndex
  def self.read(path)
    raw = File.read(path)
    match = raw.match(/\A---\s*\n(.*?)\n---\s*\n/m)
    raise "Missing front matter: #{path}" unless match
    [YAML.safe_load(match[1], permitted_classes: [Date, Time]) || {}, raw[match.end(0)..-1]]
  end

  def self.records(root)
    %w[_projects _posts _contributions].flat_map do |folder|
      Dir.glob(File.join(root, folder, '*.{md,html,markdown}')).sort.map do |path|
        meta, body = read(path)
        meta.merge('_path' => path, '_body' => body)
      end
    end
  end

  def self.validate!(records)
    raise 'No canonical content found; check the site source path' if records.empty?
    ids, urls = [], []
    records.each do |item|
      id = item['slug']
      raise 'Missing or invalid slug' unless id.is_a?(String) && id.match?(/\A[a-z0-9]+(?:-[a-z0-9]+)*\z/)
      raise "Duplicate slug: #{id}" if ids.include?(id)
      ids << id
      %w[title kind summary visibility permalink tags].each { |key| raise "#{id}: missing #{key}" unless item.key?(key) && !item[key].nil? }
      raise "#{id}: empty title or summary" if item['title'].strip.empty? || item['summary'].strip.empty?
      raise "#{id}: tags must be an array" unless item['tags'].is_a?(Array)
      raise "#{id}: nonpublic content belongs outside the repository" unless item['visibility'] == 'published' && item['published'] != false
      url = item['permalink']
      raise "#{id}: invalid permalink" unless url.is_a?(String) && url.match?(/\A\/[a-z0-9\/-]+\/\z/) && !url.include?('//')
      raise "Duplicate permalink: #{url}" if urls.include?(url)
      urls << url
      raise "#{id}: unsupported kind" unless %w[project blog article contribution].include?(item['kind'])
      if item['kind'] == 'project'
        %w[start_date end_date ongoing years_active role contribution platform_context tools public_evidence demo_mode source_verified].each { |key| raise "#{id}: missing #{key}" unless item.key?(key) }
        years = item['years_active']
        raise "#{id}: invalid years" unless years.is_a?(Array) && years == years.uniq.sort && years.all? { |y| y.is_a?(Integer) && y.between?(1900, Date.today.year) }
        publication = item['portfolio_published_date'] && Date.iso8601(item['portfolio_published_date'].to_s)
        if publication
          raise "#{id}: future portfolio publication" if publication > Date.today
          raise "#{id}: portfolio publication needs verified evidence" unless item['publication_verified'] == true && item['publication_evidence'].to_s.start_with?('https://')
        end
        raise "#{id}: new undated projects must remain private drafts" if years.empty? && !publication && item['legacy_published'] != true
        expected_status = years.empty? ? (publication ? 'publication_verified' : 'unconfirmed') : 'verified'
        raise "#{id}: date status mismatch" unless item['date_status'] == expected_status && item['sort_year'] == (years.max || publication&.year || 0)
        dates = %w[start_date end_date].map { |key| item[key] && Date.iso8601(item[key].to_s) }
        raise "#{id}: reversed dates" if dates.all? && dates[0] > dates[1]
        dates.compact.each { |d| raise "#{id}: date is outside verified years" unless years.include?(d.year) }
        raise "#{id}: ongoing must be true, false or null" unless [true, false, nil].include?(item['ongoing'])
        raise "#{id}: ongoing project cannot have an end date" if item['ongoing'] && item['end_date']
        raise "#{id}: unapproved visualization" unless [nil, 'none', 'enterprise-analytics', 'process-intelligence', 'published-work', 'shelf-vision', 'veyra-vision'].include?(item['visualization'])
        if item['visualization'] == 'published-work'
          raise "#{id}: missing workflow" unless item['workflow'].is_a?(Array) && !item['workflow'].empty? && item['workflow'].all? { |step| step.is_a?(Hash) && %w[title detail].all? { |key| !step[key].to_s.strip.empty? } }
          raise "#{id}: missing public evidence" unless item['public_evidence'].is_a?(Array) && !item['public_evidence'].empty?
          item['public_evidence'].each do |evidence|
            raise "#{id}: invalid public evidence" unless evidence.is_a?(Hash) && !evidence['label'].to_s.strip.empty? && evidence['url'].to_s.start_with?('https://')
          end
        end
        if item['source_url']
          raise "#{id}: source link has not been verified" unless item['source_verified'] == true && item['source_url'].start_with?('https://github.com/')
        end
      else
        date = Date.iso8601(item.fetch('date').to_s[0, 10])
        raise "#{id}: future publication" if date > Date.today
        if item['updated_date']
          raise "#{id}: updated date predates publication" if Date.iso8601(item['updated_date'].to_s[0, 10]) < date
        end
        if item['kind'] == 'contribution'
          %w[publication contribution_role original_url].each { |key| raise "#{id}: missing #{key}" if item[key].to_s.empty? }
          raise "#{id}: original source not verified" unless item['links_verified'] == true && item['original_url'].start_with?('https://')
        else
          raise "#{id}: authorship required" if item['authorship'].to_s.empty?
        end
      end
    end
  end

  def self.years(records)
    records.flat_map do |item|
      if item['kind'] == 'project'
        item['date_status'] == 'publication_verified' ? [Date.iso8601(item['portfolio_published_date'].to_s).year] : item['years_active']
      else
        [Date.iso8601(item['date'].to_s[0, 10]).year]
      end
    end.uniq.sort.reverse
  end

  def self.generated(records)
    ys = years(records)
    result = { '_data/archive_years.yml' => ys.to_yaml }
    ys.each do |year|
      result["archive/#{year}/index.html"] = "---\nlayout: year\ntitle: \"#{year} Archive\"\narchive_year: #{year}\npermalink: /archive/#{year}/\ndescription: Projects and writing with documented activity or publication in #{year}.\n---\n<!-- Generated by scripts/content_index.rb; content stays in canonical records. -->\n"
    end
    result
  end
end

if $PROGRAM_NAME == __FILE__
  root = File.expand_path('../site', __dir__)
  items = ContentIndex.records(root)
  ContentIndex.validate!(items)
  generated = ContentIndex.generated(items).transform_keys { |path| path.start_with?('archive/') ? "pages/#{path}" : path }
  generated.each do |relative, body|
    path = File.join(root, relative)
    if ARGV.include?('--check')
      raise "Stale archive: #{relative}; run ruby scripts/content_index.rb" unless File.file?(path) && File.read(path) == body
    else
      FileUtils.mkdir_p(File.dirname(path))
      File.write(path, body) unless File.file?(path) && File.read(path) == body
    end
  end
  unexpected = Dir.glob(File.join(root, 'pages/archive/*/index.html')).map { |p| p.sub(root + '/', '') } - generated.keys
  raise "Obsolete year routes need explicit review: #{unexpected.join(', ')}" unless unexpected.empty?
  puts "Validated #{items.size} canonical records; years: #{ContentIndex.years(items).join(', ')}."
end
