# Adding portfolio content

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

The existing migrated descriptions have `legacy_published: true`. This flag preserves already-published material while its dates await confirmation; it is **not** permission to publish new unverified projects. Undated legacy records appear under “Undated / awaiting review” and never enter a dated archive.

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

The script validates metadata and writes `_data/archive_years.yml` and `archive/<year>/index.html`. Review generated changes alongside content. It creates no empty future-year routes. Stale year routes are reported for explicit review rather than deleted automatically. Editing an article does not change its archive year.

The year links work without JavaScript. The optional content-type filter uses `?kind=project`, `blog`, `article` or `contribution` and updates visible counts. Back/forward navigation restores the selected type.

## Local verification

Use the external `FinalPortfolio/tools/` harness documented in the owner's handover where native Jekyll is unavailable. `portfolio_build.rb` adds collections and Markdown support using Liquid 4.0.4 and Kramdown. It is a preview simulation, not proof of the GitHub Pages runtime. Use a new output directory for each build. Check both source and generated files, internal links, archive counts, responsive layouts, keyboard controls, reduced motion and synthetic calculations before publication.

Never put private briefs, career documents, confidential scan terms or review evidence into served directories. Keep GitHub Pages on the canonical github.io URL. Publication remains the owner's action after review.
