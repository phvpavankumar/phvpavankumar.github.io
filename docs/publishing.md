# Publishing and migration

Build from the repository root: `_config.yml` selects `source: site` and writes
to `_site`. Only `_site` is uploaded as a Pages artifact.

## Owner setup before pushing this migration

In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
Branch publishing cannot use `site/` as its source. Leaving the old branch mode
enabled when pushing this migration can produce a missing homepage.

After pushing and reviewing, open **Actions → Portfolio Pages → Run workflow** on
the default branch. Leave `publish` unchecked for build/verification only. Check
it only when ready to deploy. There are no automatic push or PR deployments.
Local restructuring does not change remote settings or the live website.

## Preserved routes and privacy

The enterprise demo source moved to `site/demos/enterprise-analytics/`, but its
URL remains `/prototypes/enterprise-analytics/`. It stays unlisted with
`noindex, nofollow`, no public inbound links, and illustrative-content disclosures.
This is discoverability control, not authentication or legal clearance.

## Maintenance

Run `bundle exec ruby scripts/content_index.rb` after content changes and review
generated archives. Run the README checks before publication. Commit the lockfile,
not `_site/`, `vendor/` or `.bundle/`. Historical external preview tools are not
part of the build; the native Jekyll commands replace them.
