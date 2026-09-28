# Source migration verification — 2026-09-28

- Native Jekyll 4.4.1 build completed with Ruby 4.0.7.
- Content validator passed: 10 records, archives 2023–2026.
- Generated-site verifier passed: 25 HTML pages and required routes, local links,
  byte-preserved assets, no supporting-source publication, and scoped noindex.
- 69 moved source/asset files matched the pre-migration backup byte-for-byte,
  except the homepage's added explicit `/` permalink.
- Isolated Chrome checked 33 views: five main routes at widths 390, 768, 1440,
  1920, 2880 and 4320; both demo layouts and the article reading width. No
  horizontal overflow, boundary failures or JavaScript exceptions.
- Desktop and mobile homepage screenshots were visually inspected.

The historical layout test assumed overlay scrollbars. Its local migration copy
was corrected to measure document client width; site CSS was not changed.

The dependency lockfile includes Linux for Actions. The remote workflow itself
has not been run; remote settings and publication remain owner actions. Backup
and screenshots are outside the repository under the owner's local
`V2/repository-organization/` review folder.
