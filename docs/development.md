# Portfolio development

All publishable Jekyll source lives in `site/`. Supporting files stay outside the
published source.

## Repository map

| Path | Purpose |
| --- | --- |
| `site/pages/` | Main pages and generated year archives |
| `site/_projects/`, `site/_posts/`, `site/_contributions/` | Canonical content |
| `site/_layouts/`, `site/_includes/`, `site/_data/` | Shared Jekyll templates and data |
| `site/demos/` | Aurevia and unlisted enterprise analytics |
| `site/assets/` | Styles, scripts, portrait and public resume |
| `scripts/` | Content generation and build verification |
| `docs/` | Authoring and publishing instructions |
| `content-templates/` | Unpublished authoring starters |
| `.github/workflows/` | Automatic checks and deployment |

Underscore-prefixed source folders are Jekyll conventions, now contained together.
Explicit permalinks preserve existing URLs. Shared demo assets remain under
`/assets/` to avoid duplication and broken links.

## Local development

Use Ruby 4.0 and Bundler. From the repository root:

```sh
bundle install
bundle exec ruby scripts/content_index.rb --check
bundle exec jekyll build --config _config.yml
bundle exec ruby scripts/verify_site.rb _site
bundle exec jekyll serve --config _config.yml
```

`_site/` is disposable build output. Keep private documents, backups and review
screenshots outside `site/`. Keep `Gemfile.lock` in version control.

See [authoring](content-authoring.md) and [publishing](publishing.md).
Pushes to `main` automatically validate, build and deploy. Pull requests targeting
`main` run the same checks without deploying.
