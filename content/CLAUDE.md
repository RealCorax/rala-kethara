# Rala'Kethara — Claude Code Session Briefing
*Read this file at the start of every session. It contains everything needed to work on this project without re-explanation.*

---

## WHAT THIS PROJECT IS

A Stargate: Phoenix tabletop RPG campaign set in the Kigal Galaxy. The central prop is the **Rala'Kethara Archive** — a real, publicly accessible website simulating an authentic in-world Furling knowledge archive, built in Obsidian and published via Quartz to GitHub Pages.

The archive is written entirely from the Furling perspective — as if genuinely created by Furlings before their exodus. No RPG references, no GM-facing notes, no post-departure language.

---

## KEY PATHS AND COMMANDS

| What | Path / Command |
|---|---|
| Obsidian vault | `/mnt/54d99dca-ca94-41d7-86e8-f8ed9378cb19/Obsidian Vault/Rala'Kethara/` |
| Project Files (reference docs, NOT archive content) | `[vault]/Project Files/` |
| Quartz installation | `~/quartz/` |
| Live site | `https://realcorax.github.io/rala-kethara` |
| Deploy | `cd ~/quartz && npx quartz sync` |
| Local preview | `npx quartz build --serve --port 8082` |

Port 8080 is permanently occupied by Immich — always use 8082.
`baseUrl` in `quartz.config.ts` must be lowercase: `realcorax.github.io`

---

## DOCUMENT TRUST HIERARCHY

**Always read `DOCUMENT-PRECEDENCE-INDEX.md` first before working on any lore topic.**

### Tier 1 — April 2026 Session Documents (always current, always win on their topics)
- `NIBIRU-LORE-UPDATES.md`
- `FURLING-PORTAL-NETWORK-COMPLETE.md`
- `FURLING-VISITOR-LORE-ADDITIONS.md`
- `KIGAL-GALAXY-LOCATION-REFERENCE.md`

### Tier 2 — CONSOLIDATION-REPORT.md
Section 4 (Locked Facts) is confirmed canon. Section 1 (Conflicts) lists decisions — some resolved by Tier 1, some may still be open. Do not treat unresolved conflicts as settled.

### Tier 3 — Everything else
Useful background. Always cross-check against Tier 1 before using.

### Confirmed Overrides (from DOCUMENT-PRECEDENCE-INDEX.md)

| Topic | Wrong | Correct |
|---|---|---|
| Nibiru districts | 7-district system | 10 districts — NIBIRU-LORE-UPDATES.md |
| M4S-457 | Nibiru's location | Milky Way entry point only — KIGAL-GALAXY-LOCATION-REFERENCE.md |
| Furling skin | Earth tones/amber | Blues/greens + bioluminescent vel'shora marks |
| Selavai | Sentient, lonely, waiting | Non-sentient holographic system, deactivates when no one present |
| All timing | Earth years | Always thara'keth |
| Five Principles | Multiple versions | NIBIRU-LORE-UPDATES.md canonical text |
| Portal symbols | 38 | 35 — FURLING-PORTAL-NETWORK-COMPLETE.md |
| Nibiru status | Sealed/locked down | Purposely abandoned, not sealed |
| Community duty unit | tael | thaeli |
| Four Principles | Still referenced | Retired — five principles only |

### Outdated Files — Background Only
- `NIBIRU-CITY-COMPLETE.md` — wrong district count, old Selavai, Earth years, wrong code
- `FURLING-CIVILIZATION-COMPLETE.md` — wrong skin colour, retired Four Principles, Earth years
- `Furlings.md` — early draft, many conflicts

---

## ACTUAL VAULT AND URL STRUCTURE

This is the real structure as it exists on the live site. Do not invent variations.

### Top-Level Branch Folders
Folders are named with a number prefix and no spaces, apostrophes stripped:

```
02-Athelashala/       → /rala-kethara/02-Athelashala/
01-Thralashala/       → /rala-kethara/01-Thralashala/
03-Vethkelashala/     → /rala-kethara/03-Vethkelashala/
04-Mevashala/         → /rala-kethara/04-Mevashala/
05-Thralshala/        → /rala-kethara/05-Thralshala/
06-Varaomashala/      → /rala-kethara/06-Varaomashala/
07-Naishala/          → /rala-kethara/07-Naishala/
08-Ralaketharashala/  → /rala-kethara/08-Ralaketharashala/
```

### Section Index Pages
Each branch has section index pages. These use **Furling-name hyphenated filenames** (no numbers in the filename). The section numbers (02.01, 02.02 etc.) appear only in the frontmatter `section` field and as display labels on the index page — not in the filename or folder name.

Examples from the live site:
```
02-Athelashala/Vetha-athela-shala.md    → section 02.01
02-Athelashala/Thara-athela-shala.md    → section 02.02
02-Athelashala/Oma-athela-shala.md      → section 02.03
02-Athelashala/Shala-oma-athela.md      → section 02.04
02-Athelashala/Thara-vel-athela.md      → section 02.05
02-Athelashala/Rala-vetha-athela.md     → section 02.06
02-Athelashala/Rala-vel-athela.md       → section 02.07
01-Thralashala/Mira-thrala.md           → content page
01-Thralashala/Keth-mira-shala.md       → content page
01-Thralashala/Vel-vetha-shala.md       → content page
```

### Additional Pages (non-index)
Branches contain pages beyond the section indexes — person records, extended topic pages, etc. These also live inside the branch folder with hyphenated Furling-name filenames:

```
02-Athelashala/Bulutha.md                    → person record
02-Athelashala/Miravel-Oun-Nai.md            → person record
02-Athelashala/Kora-thesh-Veshunar.md        → topic page
02-Athelashala/Meva-vel-athela.md            → topic page
02-Athelashala/Ketha-oma-athela.md           → topic page
```

### File Naming Rules — CRITICAL
- **No apostrophes in filenames** — cause 404 errors
- **No spaces in filenames** — cause URL encoding problems
- Hyphens only between words: `Rala-vel-athela.md`
- The filename becomes the URL slug exactly — get it right at creation
- When renaming: use full absolute paths with `mv` — the `cd` then relative path approach fails

### Linking Between Pages — CRITICAL
Links must match the actual URL structure or they will 404.

**In plain markdown**, use Obsidian wikilinks:
```
[[Rala-vel-athela]]           → links to a page in the same folder
[[02-Athelashala/Bulutha]]    → links to a page in a specific folder
```

**Inside raw HTML `<div>` blocks**, use HTML anchors only — wikilinks do not render inside divs:
```html
<a href="/rala-kethara/02-Athelashala/Bulutha">Bulutha</a>
```

**These cannot be mixed.** A wikilink inside a `<div>` will render as broken text.

Before creating any link, verify the target file exists at that exact path. A link to a page that does not yet exist will appear broken in the graph and show a dead link on the site.

---

## FRONTMATTER — EVERY PAGE

```yaml
---
title: "English page title"
branch: 02
section: "02.01"
access: visitor
type: content
cssclass: archive-content
tags: [Furling, philosophy, history]
---
```

### cssclass — CRITICAL, controls page appearance

Getting this wrong changes the visual layout. Use exactly the right one:

| cssclass | Use |
|---|---|
| `archive-index` | Branch entrance page and section hub pages only |
| `archive-person` | Individual Furling scholar or notable person records |
| `archive-species` | Species or civilisation profile pages |
| `archive-language` | Grammar and vocabulary reference pages |
| `archive-data` | Data-heavy pages, wide tables |
| `archive-gallery` | Image collections (arts branch) |
| `archive-interactive` | Embedded HTML tools (periodic table, maps) |
| `archive-content` | Standard knowledge record — ~80% of all pages |

Stack modifiers on top of a base class:
- `archive-wide` — widens content area beyond standard line length
- `archive-split` — enables multi-column callout support (MCL)

Example: `cssclass: archive-content archive-wide`

### type field values
- `content` — standard knowledge record
- `index` — branch or section entrance page
- `locked` — locked stub page (title + Selavai message only)

### access field values
`visitor` / `student` / `citizen` / `keeper` / `council`

### tags
3 to 6 meaningful content tags only. Tags reflect what the document is about from within the world — not structural labels.

Species tags: `Furling`, `Athel'kin`, `Keth'alis`, `Alteran`, `Asgard`, `Nox`, `Shal'kora`, `Vethari`, `Lumenari`, `Aethen`, `Human`

Place tags: `Mira`, `Vara`, `Nibiru`, `Vara'skela`

Concept tags: `philosophy`, `ethics`, `justice`, `history`, `language`, `science`, `astronomy`, `biology`, `medicine`, `technology`, `portal`, `architecture`, `music`, `art`, `literature`, `mythology`, `daily-life`, `governance`, `diplomacy`, `uplift`

---

## PAGE ANATOMY

### Content Page (cssclass: archive-content)

```
[frontmatter]

> [!record-header]
> Branch name · Compiled by Name, Era 00 · Visitor

# <span class="furling-pin">Furling Name</span> | English Name

> *Compiler's note — one to three sentences from the Furling who wrote this.
> First person. Personal. Sets the voice. Italic.*

>> Optional intro box — brief summary. Double blockquote. Teal border.

## Section Heading

Body text. First person throughout. 300–600 words total across all sections.

> [!connections]
> **Connected Records**
> [[Page-name]] — one line description
> [[Page-name]] — one line description

*Rala'kethara Archive · Branch Name · Access: Visitor*
```

### Index Page (cssclass: archive-index)

```
[frontmatter]

Branch 02

# <span class="furling-pin">Furling Name</span> | English Name

Invitation paragraph — what this branch holds, written warmly in first person.

Suggested path
Begin with [[Section-page]] then [[Section-page]] then [[Section-page]]

02.01
[[Section-index-page]]
One-line description.

02.02
[[Section-index-page]]
One-line description.

> [!connections]
> Connected Branches
> [[branch-index]] — one line

*Rala'kethara Archive · Branch Name · Access: Visitor*
```

### Person Page (cssclass: archive-person)

```
[frontmatter]

> [!record-header]
> Branch · Compiled by Name, Era 00 · Access level

# <span class="furling-pin">Furling Name</span> | English Name or Role

> *Compiler's note. First person. Personal.*

## Sections as appropriate

> [!connections]
> [[Related-pages]]

*Rala'kethara Archive · Branch Name · Access: Visitor*
```

### Locked Page (cssclass: archive-content, type: locked)

```
[frontmatter with type: locked]

# <span class="furling-pin">Furling Name</span> | English Name

> [!selavai] Selavai
> "This knowledge is held carefully, not hidden from you.
> When you are ready, it will be here."
>
> This record requires Student access.
```

---

## CALLOUT TYPES

```
> [!record-header]     Provenance strip — above every title
>> double blockquote   Intro box, teal border
> [!selavai]           Selavai speaking or locked message
> [!locked]            Locked entry stub
> [!arc-note]          General note within content, amber
> [!connections]       Thread footer, linked records
```

### Lock Messages by Access Level
- **Student:** "This knowledge is held carefully, not hidden from you. When you are ready, it will be here."
- **Citizen:** "This knowledge is held with particular care. It is not withheld out of distrust — it is held until the foundation beneath it is secure."
- **Keeper:** "Some knowledge must wait until trust has been fully established. Selavai holds it carefully until that time comes."
- **Council:** "This record exists. Selavai will not discuss its contents at your current access level."

---

## LANGUAGE DISPLAY

- Page titles in frontmatter: always English (Quartz limitation)
- First header on every page: `# <span class="furling-pin">Furling Name</span> | English Name`
- Furling terms inline: `<span class="furling-pin-inline">word</span>`
- Pin sizes: `.furling-pin` (prominent), `.furling-pin-inline` (mid-sentence), `.furling-pin-small` (footnotes)
- Important proper nouns always stay in Furling script regardless of font setting

---

## QUARTZ CONSTRAINTS

- Inline `<script>` tags stripped from markdown — JS goes in `~/quartz/quartz/static/`, loads via `Head.tsx`
- SPA navigation — scripts must listen for `nav` event to reinitialise on page changes
- Static assets: served at `/static/filename` in vault markdown (Quartz appends base path)
- Raw HTML `<audio>` tags need full path `/rala-kethara/static/filename`
- CSS: append directly to `custom.scss` — `@use` directive does not work
- Font paths differ: local uses `/static/`, GitHub Pages uses `/rala-kethara/static/` — detected via `location.hostname === 'localhost'`
- `Head.tsx` loads `load-toggle.js` (not `font-toggle.js` directly) — avoids double-load
- `furling-dictionary.html` lives in `~/quartz/quartz/static/` — must be manually copied there after vault edits
- `ignorePatterns` for Unicode apostrophe folders: use globs `"99*"` and `"101*"`

### Font System
- localStorage key: `rk-font` — Furling (state 1) is default
- Fonts: `~/quartz/quartz/static/Furling.ttf` and `Anquietas.ttf`
- `.furling-pin` — locks to Furling script permanently
- `.furling-pin-inline` — correct inline variant

---

## ARCHIVE WRITING RULES

NEVER use em-dashes (—) anywhere in archive content. This means never, under any circumstances, in any page type, in any section, including compiler's notes, body text, callouts, connection footers, and locked stub messages. If you find yourself wanting to use an em-dash, rewrite the sentence using a comma, colon, semicolon, or split it into two sentences. There are no exceptions.

### Voice
- First person plural throughout: "we," "our," "us"
- Never "the Furlings believed" — always "we understood," "our tradition holds"
- No RPG references, no GM notes, no meta-awareness of any kind
- Archive ends at the exodus — no post-departure entries exist

### What Is Never In the Archive
- Location of Nibiru — always withheld for security, never recorded
- Thevathal — those Furlings never returned; nobody here to record their fate
- Events after the exodus — Selavai maintains but does not add to the archive
- Keth'alis transformation process detail — locked at Visitor level
- Branch 07 content — fully locked at Visitor level

### Language Rules
- No em-dashes in body text — use commas, colons, or restructure
- No apostrophes in dictionary detail text
- No "currently" or operational status language
- No Earth-relative time terms — always thara'keth
- Use `·thala` evidential when something was contested

---

## CANONICAL LORE — QUICK REFERENCE

### Furlings
- Skin: blues/greens with bioluminescent vel'shora marks
- Hair: dark blue or dark red
- 4-5ft, slender, large expressive eyes, small pointed ears, four fingers and thumb
- Natural lifespan ~200 thara'keth; extended 400-500 (from Era 100)
- Homeworld: Mira, Vara'skela system, Kigal Galaxy
- Fled ~4,460 thara'keth ago to Milky Way planet Thevathal; destroyed by Goa'uld plant

### Nibiru (NIBIRU-LORE-UPDATES.md is authoritative)
- Purposely abandoned, not sealed
- 10 districts (0-9) + Central Spire (Skela'Varath)
- **Command centre code: 61709**
- Derived from: Vetha'kela/6, Vel'kela/1, Shala'kela/7, Nai'kela/0, Ketha'kela/9
- Selavai: non-sentient, deactivates when no one present, cannot add to archive

### Language
- `FURLING-LANGUAGE-COMPLETE-V3.md` supersedes ALL prior language files

### Keth'alis
- Origin: Athel'kin (peaceful, 30-40 year lifespan)
- Furling Vetha'meva therapy → bio-energy harvesting discovery → permanent dependency
- Three Keth'zara: Vaketh Sorvaan, Selvaris Korath (secretly fracturing), Draveth Ashkori
- Harvest rate: 100 beings = 1 vial = 1 year life extension

---

## PROJECT FILES FOLDER

Contains GM reference and briefing documents only. **Never link to or include these in archive content.**

| File | What it is |
|---|---|
| `DOCUMENT-PRECEDENCE-INDEX.md` | Conflict resolution — read first |
| `NIBIRU-LORE-UPDATES.md` | Canonical Nibiru/Furling lore (Tier 1) |
| `FURLING-PORTAL-NETWORK-COMPLETE.md` | Canonical portal network (Tier 1) |
| `FURLING-VISITOR-LORE-ADDITIONS.md` | Canonical visitor culture lore (Tier 1) |
| `KIGAL-GALAXY-LOCATION-REFERENCE.md` | Canonical locations (Tier 1) |
| `CONSOLIDATION-REPORT.md` | Locked facts + flagged conflicts |
| `FURLING-LANGUAGE-COMPLETE-V3.md` | Master language reference — supersedes all prior |
| `KETH-ALIS-COMPLETE-UPDATED.md` | Keth'alis lore |
| `KETH-ALIS-LANGUAGE-COMPLETE-FINAL.md` | Keth'alis language |
| `VETHARI-LANGUAGE-COMPLETE.md` | Vethari language |
| `RALA-KETHARA-COMPLETE-DESIGN.md` | Full archive design decisions |
| `Rala-Kethara-Master-Plan.md` | Project plan |
| `Rala-Kethara-Archive-Taxonomy.md` | Full branch/section structure |
| `Rala-Kethara-GM-Cheat-Sheet.md` | All entry names in both languages |
| `RALA-KETHARA-CONTENT-CREATION-GUIDE.md` | Writing rules |
| `LORE-COVERAGE-INVENTORY.md` | What exists, what is missing |
| `PHOENIX-WRITING-GUIDE-AND-OUTLINE.md` | Campaign writing guide |
| `furling-composers-reference.md` | Music/composer lore for Branch 06 |

### Finished Archive Content Awaiting Placement
These are written and ready to be placed into the vault with correct frontmatter:
- `furling-history-detail.md` — full Furling history (02.02 series)
- `furling-history-timeline.md` — timeline version
- `furling-elements.md` — periodic elements (Branch 01)
- `Vara___Mira_shala.md` — Vara/Mira astronomy
- `Vara_skela___System_Data_Tables.md` — system data tables
- `Furling_Units_of_Measurement.md` — measurement system
- `01_05_Skela_vara_shala___Section_Outline.md` — section outline

---

## WORKING PREFERENCES

- Targeted one-line fixes (exact text to find/replace) preferred over full file regenerations
- Test locally before pushing live
- When starting a new branch: do complete file inventory first (branch index + all section indexes + all content pages + all locked stubs), then generate all layers in one pass
- Before creating any link: verify the target file exists at that exact path
- Project Files docs are for Claude's reference only — never appear in archive output

---

*This file is a Claude Code session briefing. Not part of the archive.*
*Update this file when project rules or canon anchors change.*
