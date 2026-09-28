# Publishing and migration

Build from the repository root: `_config.yml` selects `source: site` and writes
to `_site`. Only `_site` is uploaded as a Pages artifact.

## Owner setup before pushing this migration

In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
Branch publishing cannot use `site/` as its source. Leaving the old branch mode
enabled when pushing this migration can produce a missing homepage.

Every push to `main` automatically runs **Portfolio Pages**: content validation,
the Jekyll build, generated-site verification, then deployment. A failed build or
check prevents deployment. Pull requests targeting `main` run checks only and
cannot deploy. There is no manual trigger or publishing checkbox.

Keep the `github-pages` environment restricted to `main`. For unattended releases,
it must not require reviewer approval or a wait timer; repository owners control
these settings. Editing the workflow locally does not change remote settings or
publish anything until it is pushed.

## Preserved routes and privacy

The enterprise demo source moved to `site/demos/enterprise-analytics/`, but its
URL remains `/prototypes/enterprise-analytics/`. It stays unlisted with
`noindex, nofollow`, no public inbound links, and illustrative-content disclosures.
This is discoverability control, not authentication or legal clearance.

## Maintenance

Run `bundle exec ruby scripts/content_index.rb` after content changes and review
generated archives. Run the [development checks](development.md) before publication. Commit the lockfile,
not `_site/`, `vendor/` or `.bundle/`. Historical external preview tools are not
part of the build; the native Jekyll commands replace them.
