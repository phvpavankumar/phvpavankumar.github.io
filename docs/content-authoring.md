# Adding portfolio content

All website paths below are relative to `site/` unless stated otherwise. Run
commands from the repository root. Main HTML pages live in `site/pages/`; shared
includes, layouts, data and content collections retain Jekyll's required names.
See [publishing](publishing.md) for the automatic GitHub Actions workflow.

The site uses Jekyll on GitHub Pages, native Liquid views and the existing feed plugin. No new deployment service or custom plugin is required. Shared colours and fonts live in `assets/css/style.css`.

## Canonical records

- `_projects/<slug>.md`: one project record, rendered by `_layouts/project.html`.
- `_posts/YYYY-MM-DD-<slug>.md`: owned writing, `kind: article` or `kind: blog`. Keep original publication dates and permalinks. Record edits separately in `updated_date`.
- `_contributions/<slug>.md`: external publication metadata plus a concise original summary, rendered by `_layouts/contribution.html`.

Each record needs a unique slug, title, kind, summary, visibility, tags and permalink. Set `visibility: published` only when approved for public inclusion. Drafts must stay **outside this repository**; changing visibility alone does not prevent static-file publication. The content validator rejects draft records in publishable collections.

Copy the relevant file from `content-templates/` into an external draft folder. Replace every unconfirmed field using evidence before moving it into a collection. These authoring templates and this guide are excluded from generated output.

## Add one project

Use `/projects/<slug>/` as its stable permalink. Supply `role`, `contribution`, `platform_context`, `tools` and public-safe evidence. Separate personal work from team/platform capability and scale. Do not infer project years from employment dates or a fictional demo year.

`years_active` is an explicit sorted list of verified integers. For example, a project confirmed active in two years gets both years in this one record and appears in both archives at the same URL. Exact `start_date`, `end_date` and `ongoing` remain null when unknown. Set `date_status: verified` and `sort_year` to the latest active year. The main Projects page sorts dated items by this year descending, then displays undated items alphabetically, without repeating records.

The existing migrated descriptions have `legacy_published: true`. This flag preserves already-published material while its dates await confirmation; it is **not** permission to publish new unverified projects. Public listing dates follow the separate verified-publication rules below. Undated legacy records appear under “Undated / awaiting review” and never enter a dated archive.

Project narratives may use plain Markdown or preserved HTML. The layout provides contribution/context on the left and an allowlisted visualization on the right. `visualization: enterprise-analytics` enables the shared synthetic analytics preview; `none` supplies a readable neutral panel. Add any new visualization explicitly to the layout allowlist and validator. Never inject arbitrary include paths or executable markup through metadata.

Use a separate local `demo_url`. Leave `source_url: null` and `source_verified: false` until the actual public source-file URL exists and has been checked. A general profile/repository link is not a substitute. Prototype figures must be synthetic and labelled, including CSV exports.

## Add one article or blog

Start from `content-templates/article.md` and place the approved record under `_posts` with the original date in the filename. Set `authorship` accurately. Existing weekly URLs remain `/weekly/<slug>/`; a different writing series may explicitly use `/writing/<slug>/`. The body remains owned writing, not copied external publisher text. The optional `week` and `category` fields are for Finance × AI Weekly.

## Add one external contribution

Start from `content-templates/contribution.md`. Confirm the original publication URL, original date, publication name and exact credited role (author, co-author, technical contributor or reviewer). Set `links_verified: true` only after checking the destination and credit. Write a short original summary; the shared layout links readers to the original. Do not invent an entry to fill the section.

## Generate and validate archives

From the repository root:

```sh
ruby scripts/content_index.rb
ruby scripts/content_index.rb --check
```

The script validates metadata and writes `site/_data/archive_years.yml` and `site/pages/archive/<year>/index.html`. Review generated changes alongside content. It creates no empty future-year routes. Stale year routes are reported for explicit review rather than deleted automatically. Editing an article does not change its archive year.

The year links work without JavaScript. The optional content-type filter uses `?kind=project`, `blog`, `article` or `contribution` and updates visible counts. Back/forward navigation restores the selected type.

## Local verification

### Unlisted analytics demo

The standalone `/prototypes/enterprise-analytics/` demo is retained for direct-link
access only. Its `unlisted: true` flag emits a robots `noindex, nofollow` directive;
`sitemap: false` excludes it if sitemap generation is enabled later. Keep it out
of navigation, project buttons and preview footer links. The public project record
and embedded illustrative preview remain available, with their main disclosures.
Do not add a robots.txt crawl block: crawlers need to read the noindex directive.
This is discoverability control, not authentication or legal clearance. The URL,
source repository and assets can still be accessed or shared publicly.

### Shared page boundaries

`assets/css/style.css` owns the outer width for `.phv-wrap` and `.profile-wrap`:
`--page-max-width: 1680px`, with responsive `--page-gutter` spacing. Keep headers,
footers and page content on this shared rule rather than adding page-specific caps.
The standalone Aurevia workspace explicitly opts out in `assets/css/aurevia.css`;
the analytics demo keeps its independent full-width layout. Article reading columns
remain capped at 760px. Check all five main navigation pages on desktop, mobile
and wide/zoomed-out viewports when changing this rule.

### Home and About components

The portrait-led design is enabled only by `profile_design: true` on `index.html`
and `about.html`. `_layouts/default.html` conditionally loads `assets/css/profile.css`
and `assets/js/profile.js`; other pages keep their existing presentation.

- `_data/profile.yml` owns the paired certification links and core-skill descriptions.
- `_includes/profile-credentials.html` renders credentials on both profile pages.
- `_includes/profile-skills.html` renders all skill content before JavaScript enhances
  it into selectable panels. Do not hide the default content in source markup.
- `_includes/project-featured.html` reads titles, summaries and order from `_projects/`.
  The Home filter groups existing featured `Enterprise AI` records as AI/retrieval
  and the current remaining featured records as vision. Revisit this mapping if a
  different discipline is featured; do not duplicate project facts in JavaScript.
- `assets/images/pavan-kumar-phv.jpg` is the owner's supplied, unmodified portrait.
  The profile caption is India; historical employment locations and the resume
  are managed separately.

Keep profile-specific styles and behavior in these focused assets, not inline
styles or new global overrides. No dependencies are required. Test keyboard input,
no-JavaScript content, reduced motion, narrow screens and wide/zoomed-out views.
The public pages do not include the A/B mockup controls or review artifacts.

### Build and content checks

Use the native Jekyll build and verification commands in [development](development.md). The old external preview harness expects the previous source layout and is historical, not part of this build. Check responsive layouts, keyboard controls, reduced motion and synthetic calculations before publication.

Never put private briefs, career documents, confidential scan terms or review evidence into served directories. Keep GitHub Pages on the canonical github.io URL. Publication remains the owner's action after review.

### Public portfolio projects and linked writing

When an existing public project has an evidenced listing date but no confirmed
active years, use `portfolio_published_date`, `publication_evidence` (an HTTPS
source), `publication_verified: true`, `date_status: publication_verified` and
`sort_year` equal to that publication year. Keep `years_active: []` and unknown
start/end dates null. These records appear in year filters and archives with the
label “Published in portfolio”; the listing date never becomes an active year.
Unverified new records still belong outside this repository.

`visualization: published-work` renders a shared HTML workflow and public links.
Supply `workflow` entries with `title` and `detail`, and `public_evidence` entries
with `label` and an HTTPS `url`. Use only supported steps and correctly credited
source links. Video links open the original recording without loading a player
or starting playback on the portfolio. Do not upload account screenshots or
promotional artwork as project evidence assets.

External articles live in `_contributions/` with original summaries, author
credits and links to the publisher. They also appear in Notes & Ideas and Writing.
For a republication, label the date of the linked edition explicitly with
`publication_date_label`; describe the earlier publication separately when known.
Do not infer an exact original date from a later portfolio listing.

### Project media previews

The project layout renders media above the right-hand visualization. Verified
YouTube watch links in `public_evidence` get a player that loads only on request;
closing it removes the iframe and restores keyboard focus. Direct links remain
available without JavaScript and when YouTube playback is restricted. No video
autoplays. Use canonical `https://www.youtube.com/watch?v=VIDEO_ID` URLs.

The two public local demos (`/work/shelf-vision/` and `/demos/aurevia/`) can also
be loaded in the panel, with their disclosures and a full-page alternative.
The unlisted analytics demo is deliberately excluded. `related_writing` URLs
resolve to canonical posts/contributions and render article preview cards using
the existing title, date and summary; external publisher pages are not embedded.
