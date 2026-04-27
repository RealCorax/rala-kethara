# RALA'KETHARA ARCHIVE — CONTENT CREATION GUIDE
### Complete reference for building archive pages in Quartz and Obsidian
*Compiled April 2026 — for use by any chat continuing this project*

---

## WHAT IS DONE

| Branch | Folder | Status |
|---|---|---|
| Homepage | `index.md` (root) | Done |
| Branch 01 | `01-Thralashala/index.md` | Index done, content pages needed |
| Branch 02 | `02-Athelashala/index.md` | Done (described as a hack job — review quality) |
| Branch 03 | `03-Vethkelashala/index.md` + 15 pages | Done |
| Branch 04 | `04-Mevashala/index.md` | Index done, content pages needed |
| Branch 05 | `05-Thralshala/index.md` | Index done, locked stubs needed |
| Branch 06 | `06-Varaomashala/index.md` | Index done, content pages needed |
| Branch 07 | `07-Naishala/index.md` + 8 section files | Done |
| Branch 08 | `08-Ralaketharashala/index.md` + content pages | Done |

---

## VAULT STRUCTURE — ABSOLUTE RULES

**Folder names:** Number prefix, no apostrophes, no spaces, hyphens only.

```
01-Thralashala/
02-Athelashala/
03-Vethkelashala/
04-Mevashala/
05-Thralshala/
06-Varaomashala/
07-Naishala/
08-Ralaketharashala/
99-Kelthara/
```

**Every branch folder uses `index.md` as its entrance page.** Quartz navigates to `index.md` when a folder is clicked. This is non-negotiable.

**Sub-page filenames:** No apostrophes, no spaces, hyphens only. No number prefix required.

```
03-Vethkelashala/Athel-kin-Profile.md        CORRECT
03-Vethkelashala/Athel'kin Profile.md        WRONG
```

**The `href` in HTML links must match the filename exactly, without `.md`.**

---

## LINKING RULES — CRITICAL FOR QUARTZ

Quartz does not process `[[wikilinks]]` inside raw HTML `<div>` blocks. They render as plain text. This is the most common mistake to avoid.

**Two different link syntaxes depending on context.**

### Inside any `<div>` block — HTML anchors only

Same folder (page to page within a branch):
```html
<a href="./Vel-rala-keth" class="internal">Vel'rala'keth</a>
```

Another branch index:
```html
<a href="../02-Athelashala/" class="internal">Athela'shala</a>
```

Root homepage:
```html
<a href="../" class="internal">Return to the archive entrance</a>
```

In guide-thread (inside a div):
```html
<span>Begin with</span> <a href="./Vel-rala-keth" class="internal">how this voice came to be</a>
<span class="gt-sep">then</span> <a href="./Skela-rala-keth" class="internal">how to find your way</a>
```

In section-card sc-title (inside a div):
```html
<div class="sc-title"><a href="./Vel-rala-keth" class="internal">Vel'rala'keth</a></div>
```

### In plain markdown text — wikilinks work fine

In callouts (outside divs), wikilinks resolve correctly:
```markdown
> [!connections] Connected Records
> [[Vel-rala-keth|Vel'rala'keth]] — how this voice came to be
> [[02-Athelashala/index|Athela'shala]] — the civilisation branch
```

When linking to another branch index in markdown, always use:
```markdown
[[02-Athelashala/index|Athela'shala]]
```

---

## PAGE STRUCTURE — INDEX PAGES

CSS class: `archive-index`. Used for every `index.md` branch and section entrance page.

```markdown
---
title: "Furling Name — English Subtitle"
cssclass: archive-index
branch: 4
section: "04"
access: visitor
type: index
tags: [tag1, tag2, tag3]
---

<div class="room-header">
<div class="rh-number">Branch 04</div>
<h1><span class="furling-pin">Meva'shala</span> | Wisdom Made Into Use</h1>
<p class="rh-description">One paragraph. Warm, first person. What this branch holds and why it matters to a visitor.</p>
</div>

<div class="guide-thread">
<span class="gt-label">Suggested path</span>
<span>Begin with</span> <a href="./Vel-thevan-shala" class="internal">why we build the way we do</a>
<span class="gt-sep">then</span> <a href="./Thevan-skela-vel" class="internal">how to use a portal</a>
<span class="gt-sep">then</span> <a href="./Vetha-meva-shala" class="internal">medicine</a>
</div>

<div class="section-grid">

<div class="section-card">
<div class="sc-label">04.01</div>
<div class="sc-title"><a href="./Thevan-shala" class="internal">Thevan'shala</a></div>
<div class="sc-desc">The Wisdom of Making — technology and engineering. One sentence description.</div>
</div>

<div class="section-card">
<div class="sc-label">04.02</div>
<div class="sc-title"><a href="./Vetha-meva-shala" class="internal">Vetha'meva'shala</a></div>
<div class="sc-desc">The Wisdom of Giving Life Back to the Living — medicine and healing. One sentence description.</div>
</div>

</div>

> [!arc-note] Optional note
> One note if needed. Amber callout.

> [!connections] Connected Branches
> [[02-Athelashala/index|Athela'shala]] — one line description
> [[01-Thralashala/index|Thrala'shala]] — one line description

*Rala'kethara Archive · Meva'shala · Access: Visitor*
```

**Critical rules for index pages:**
- `<div class="room-header">` always comes first, before the guide-thread
- `<h1>` is inside the room-header div, not standalone
- Only the Furling name goes inside `<span class="furling-pin">` — the pipe and English name are outside it
- No `meta-bind-button` blocks anywhere
- No `#` markdown headings as the page title — the room-header h1 does that job
- No duplicate title at top of page
- The `sc-title` div wraps an anchor tag, not a wikilink
- The `guide-thread` and `section-grid` divs use HTML anchors, never wikilinks

---

## PAGE STRUCTURE — CONTENT PAGES

CSS class: `archive-content`. Used for the majority (~80%) of knowledge record pages.

```markdown
---
title: "Furling Name — English Subtitle"
cssclass: archive-content
branch: 4
section: "04.01.01"
access: visitor
type: record
tags: [tag1, tag2, tag3]
---

> [!record-header]
> Meva'shala · Compiled by Scholar Name, Era 00 · Visitor

# <span class="furling-pin">Vel'thevan'shala</span> | Why We Build the Way We Do

> *Compiler's note. One to three sentences. First person. Personal. Sets the voice before
> content begins. Italic. This is the human moment behind the record, not a summary.*

>> Optional intro box. Double blockquote. 2-3 sentences summarising what this record covers.
>> Gets teal border from CSS. Use when the title alone is not enough orientation.

## Section Heading

Body text. First person throughout (we, our, us). Never "the Furlings believed."
No em-dashes anywhere. Use commas, colons, semicolons, or parentheses instead.
300 to 600 words total across all sections.
Use [[Filename|Display Text]] for wikilinks to named things with their own pages.
Use <span class="furling-pin-inline">word</span> for key Furling terms mid-sentence.

## Second Section Heading

Continue. Each section can stand alone if someone links directly to it.

> [!arc-note] Optional amber note
> Use for important caveats or things the scholar wants to flag.

> [!connections] Connected Records
> [[Thevan-vetha-shala|Thevan'vetha'shala]] — building with living things
> [[02-Athelashala/index|Athela'shala]] — the philosophy this practice grew from
> [[04-Mevashala/index|Meva'shala]] — return to the branch index

*Rala'kethara Archive · Meva'shala · Access: Visitor*
```

**Critical rules for content pages:**
- `> [!record-header]` comes before the H1, no room-header div on content pages
- H1 uses `# <span class="furling-pin">Furling Name</span> | English Name` — only the Furling name inside the span
- First person always. Never third person. Never "the Furlings."
- No em-dashes. None. Ever. Not a single one.
- No modern bureaucratic language ("this section covers," "please note that")
- Nothing from outside the Furling world
- Selavai does not author records. She maintains but never writes.
- Wikilinks in body text and callouts work fine (they are outside divs)
- Internal links to same folder: `[[Filename-no-apostrophes|Display Text With Apostrophes]]`
- Internal links to branch indexes: `[[04-Mevashala/index|Meva'shala]]`

---

## PAGE STRUCTURE — LOCKED PAGES

```markdown
---
title: "Furling Name — English Subtitle"
cssclass: archive-content
branch: 4
section: "04.01.07"
access: student
type: locked
tags: [tag1, tag2]
---

# <span class="furling-pin">Thevan'vel'shala</span> | Vessels for the Space Between Stars

> [!selavai] Selavai
> "This knowledge is held carefully, not hidden from you. When you are ready, it will be here."
>
> This record requires Student access.

*Rala'kethara Archive · Meva'shala · Access: Student*
```

**Lock messages by access level — use exactly these:**

**Student:** "This knowledge is held carefully, not hidden from you. When you are ready, it will be here."

**Citizen:** "This knowledge is held with particular care. It is not withheld out of distrust — it is held until the foundation beneath it is secure."

**Keeper:** "Some knowledge must wait until trust has been fully established. Selavai holds it carefully until that time comes."

**Council:** "This record exists. Selavai will not discuss its contents at your current access level."

---

## CSS LAYOUT CLASSES

Set in frontmatter `cssclass` field.

| Class | When to use |
|---|---|
| `archive-index` | All `index.md` branch and section entrance pages |
| `archive-content` | Standard knowledge record (~80% of all pages) |
| `archive-species` | Species or civilisation profile pages |
| `archive-person` | Individual named Furling record |
| `archive-data` | Data-heavy pages with tables (system data, elements, units) |
| `archive-gallery` | Arts branch image collections |
| `archive-media` | Audio or video as primary content |
| `archive-language` | Language reference, dictionary, roots |
| `archive-interactive` | Embedded HTML tools (periodic table, maps) |
| `archive-wide` | Modifier — add to widen content for data-heavy pages |
| `archive-split` | Modifier — enables multi-column callout styling |

Stack modifiers: `cssclass: archive-content archive-data`

---

## FRONTMATTER FIELDS

```yaml
---
title: "English page title only"
cssclass: archive-content
branch: 4
section: "04.01.01"
access: visitor
type: record
tags: [Furling, technology, Nibiru]
---
```

- `title` — English only (Quartz displays this in browser tab and graph)
- `branch` — number 1-8
- `section` — quoted string matching the section code e.g. "04.01.01"
- `access` — exactly one of: `visitor` / `student` / `citizen` / `keeper` / `council`
- `type` — exactly one of: `index` / `record` / `locked` / `species-profile` / `historical-account` / `technical-spec` / `philosophical-text` / `creative-work` / `recipe` / `personal-log`
- `tags` — 3 to 6 only, from canonical list

**Canonical tag vocabulary:**

Species: `Furling` `Athel-kin` `Keth-alis` `Alteran` `Asgard` `Nox` `Shal-kora` `Vethari` `Lumenari` `Aethen` `Human`

Places: `Mira` `Vara` `Nibiru` `Vara-skela`

Concepts: `philosophy` `ethics` `history` `language` `science` `astronomy` `biology` `medicine` `technology` `portal` `architecture` `music` `art` `literature` `mythology` `daily-life` `governance` `diplomacy` `uplift` `war` `exodus`

---

## CALLOUT TYPES

All use Obsidian-native callout syntax.

| Callout | Syntax | Use |
|---|---|---|
| Record header | `> [!record-header]` | Provenance strip before every content page title |
| Intro box | `>> double blockquote` | Opening summary panel — teal border |
| Selavai | `> [!selavai] Selavai` | Selavai speaking, locked messages |
| Archive note | `> [!arc-note]` | General note within content — amber |
| Connections | `> [!connections]` | Linked records footer at bottom of every content page |
| Species card | `> [!species-card]` | Floating profile card (archive-species pages only) |
| Person portrait | `> [!person-portrait]` | Centred portrait (archive-person pages only) |

---

## WHAT NEVER APPEARS IN THE ARCHIVE

These constraints must be respected in every page written.

- **Nibiru's location is never recorded** — not the system name, not the moon designation, not the coordinates. The city's existence is not secret. Where it is has always been withheld for security.
- **No content after the exodus** — nobody was here to write it. The archive simply ends at Era 147.
- **Selavai does not author records** — she maintains and guides but has never written a page. Any page requiring a Furling author but having no real author either does not exist at visitor level or is a locked stub.
- **Keth'alis transformation is locked at visitor level** — the Athel'kin appear at visitor level as who they were. The crisis is acknowledged. Details are Deep Circle.
- **Branch 07 has no visible content at visitor level** — section indexes visible, everything inside locked.
- **No em-dashes** — not a single one, in any context, anywhere.
- **No third person** — never "the Furlings believed." Always we, our, us.
- **No modern bureaucratic language** — never "this section covers," "please note that," "the purpose of this page is."
- **Nothing from outside the world** — no references to anything outside Furling civilisation.

---

## DOCUMENT PRECEDENCE

When source documents conflict, trust in this order:

1. `NIBIRU-LORE-UPDATES.md` — always current, supersedes everything on topics it covers
2. `FURLING-PORTAL-NETWORK-COMPLETE.md`
3. `FURLING-VISITOR-LORE-ADDITIONS.md`
4. `KIGAL-GALAXY-LOCATION-REFERENCE.md`
5. `CONSOLIDATION-REPORT.md`
6. Everything else — mostly correct but some known overrides

**Key overrides — never get these wrong:**

| Topic | Wrong | Correct |
|---|---|---|
| Nibiru districts | 7 districts | 10 districts |
| Portal symbols | 38 | 35 |
| Furling skin | Earth tones, amber, bronze | Blues and greens, deep teal to pale aquamarine |
| Selavai | Sentient, lonely, waiting | Holographic system, inactive when no visitors, cannot author records |
| Community duty unit | tael | thaeli |
| All timing | Earth years | thara'keth only |
| Five Principles | Multiple old versions | Canonical text in NIBIRU-LORE-UPDATES.md only |
| Nibiru status | Sealed/locked | Purposely abandoned — not sealed |
| Command centre code | 57349 | 61709 |

---

## CONTENT TO WRITE — BY BRANCH

### Branch 01 — Thrala'shala (The Universe)
Priority: 3

**Three source files ready to place — just need correct frontmatter:**
- `Vara___Mira_shala.md` → `01-Thralashala/Vara-Mira-shala.md` — section 01.05.01, cssclass: archive-data
- `Vara_skela___System_Data_Tables.md` → `01-Thralashala/Varaskela-System-Data.md` — section 01.05, cssclass: archive-data
- `Furling_Units_of_Measurement.md` → `01-Thralashala/Furling-Units-of-Measurement.md` — section 01.01, cssclass: archive-data

**Pages to write from scratch at visitor level:**
- `01-Thralashala/01.01-Thael-shala/index.md` — Mathematics section index
- `01-Thralashala/Vel-shala.md` — Foundations of Number and Logic (01.01.01)
- `01-Thralashala/Mira-thael.md` — Geometry and Spatial Reasoning (01.01.02)
- `01-Thralashala/01.02-Thralavetha-shala/index.md` — Physics section index
- `01-Thralashala/Mira-thrala.md` — Classical Mechanics (01.02.01)
- `01-Thralashala/01.03-Miravel-shala/index.md` — Chemistry section index
- `01-Thralashala/Keth-mira-shala.md` — Materials Science (01.03.04, visitor — living crystal)
- `01-Thralashala/01.04-Vethathrala-shala/index.md` — Biology section index
- `01-Thralashala/Vel-vetha-shala.md` — Foundations of Biology (01.04.01)
- `01-Thralashala/Veth-thara-shala.md` — Evolutionary Biology (01.04.02)
- `01-Thralashala/Vethara-skela.md` — Ecology and Ecosystem Dynamics (01.04.05)
- `01-Thralashala/01.05-Skelavara-shala/index.md` — Cosmography section index
- `01-Thralashala/Varavel-shala.md` — Stellar Classification intro (01.05.01)
- `01-Thralashala/Mirashala-veth.md` — Planetary Science intro (01.05.02)
- Plus locked stubs for all Student/Citizen/Keeper sections

**Source documents:** `Vara___Mira_shala.md`, `Vara_skela___System_Data_Tables.md`, `Furling_Units_of_Measurement.md`, `furling-elements.md` (future interactive periodic table), `FURLING-LANGUAGE-COMPLETE-V3.md` (units)

---

### Branch 04 — Meva'shala (Applied Knowledge)
Priority: 1 — players need portal and technology knowledge to function in Nibiru

**Pages to write at visitor level:**
- `04-Mevashala/04.01-Thevan-shala/index.md` — Technology section index
- `04-Mevashala/Vel-thevan-shala.md` — Technology Philosophy (04.01.01, philosophical-text)
- `04-Mevashala/Thevan-vetha-shala.md` — Bio-organic Technology (04.01.02)
- `04-Mevashala/Thevan-keth-shala.md` — Crystal-Lattice Technology (04.01.03)
- `04-Mevashala/Thevan-vara-shala.md` — Energy Systems (04.01.04)
- `04-Mevashala/Thevan-rala-shala.md` — Communication and Translation (04.01.05)
- `04-Mevashala/Thevan-skela-shala.md` — Portal Network Operations (04.01.06)
- `04-Mevashala/Thevan-skela-vel.md` — Portal User Guide (04.01.06a, CRITICAL)
- `04-Mevashala/Rala-skela-thael.md` — 35 Portal Symbols Reference (04.01.06b, archive-data)
- `04-Mevashala/04.02-Vetha-meva-shala/index.md` — Medicine section index
- `04-Mevashala/Vel-vetha-meva.md` — Medical Foundations (04.02.01)
- `04-Mevashala/Vetha-meva-vel.md` — General Treatment and Healing (04.02.02)
- `04-Mevashala/Vetha-meva-shala-vel.md` — Mental Health (04.02.06, visitor)
- `04-Mevashala/Vetha-meva-thrala.md` — Emergency Medicine (04.02.08, visitor)
- `04-Mevashala/04.03-Skela-meva-shala/index.md` — Architecture section index
- `04-Mevashala/Vel-skela-meva.md` — Architectural Principles (04.03.01, philosophical-text)
- `04-Mevashala/Skela-vetha-meva.md` — Bio-organic Construction (04.03.02)
- `04-Mevashala/Skela-keth-meva.md` — Materials (04.03.03)
- `04-Mevashala/04.04-Mira-meva-shala/index.md` — Agriculture section index
- `04-Mevashala/Vel-mira-meva.md` — Agricultural Foundations (04.04.01)
- `04-Mevashala/Mira-oma-meva.md` — Ecosystem Management (04.04.04)
- `04-Mevashala/Mira-meva-vel.md` — Recipes — all species (04.04.05, recipe type)
- `04-Mevashala/04.05-Shala-meva-shala/index.md` — Teaching section index
- `04-Mevashala/Vel-shala-meva.md` — Philosophy of Teaching (04.05.01, philosophical-text)
- Plus locked stubs for all Student/Citizen/Keeper entries

**Source documents:** `FURLING-PORTAL-NETWORK-COMPLETE.md` (35 symbols — NOT 38), `NIBIRU-LORE-UPDATES.md`, `FURLING-CIVILIZATION-COMPLETE.md`, `NIBIRU-CITY-COMPLETE.md`

---

### Branch 05 — Thral'shala (Conflict)
Priority: 4 — almost entirely locked stubs

The branch index already exists. Only section indexes and locked stubs needed. Almost no visible content at visitor level.

**Pages to write:**
- `05-Thralshala/05.01-Vel-thral-shala/index.md` — Military History section index (visitor, shows locked stubs)
- `05-Thralshala/Vel-thral-thara.md` — Era 12 Great War (student lock)
- `05-Thralshala/Thral-thara-vel.md` — Era 56 Unknown Aggressor (student lock)
- `05-Thralshala/Thral-athel-thara.md` — Keth'alis War (keeper lock)
- `05-Thralshala/Thral-oma-veth.md` — Minor Conflicts (citizen lock)
- `05-Thralshala/Thral-vel-veth.md` — Other Species Military Histories (student lock)
- `05-Thralshala/05.02-Thral-shala-vel/index.md` — Military Science section index (visitor)
- Locked stubs for all 05.02 content pages
- `05-Thralshala/05.03-Thevan-thral-shala/index.md` — Weapons section index (visitor)
- Locked stubs for all 05.03 content pages
- `05-Thralshala/05.04-Nai-thral-shala/index.md` — Intelligence section index (visitor)
- Locked stubs for all 05.04 content pages

---

### Branch 06 — Vara'oma'shala (Expression, Belief, Culture)
Priority: 2

**Pages to write at visitor level:**
- `06-Varaomashala/06.01-Vara-athela-shala/index.md` — Furling Creative Works section index
- `06-Varaomashala/Vara-rala-athela.md` — Literature (06.01.01, archive-gallery)
- `06-Varaomashala/Vara-luma-athela.md` — Music (06.01.02, archive-media — will have audio later)
- `06-Varaomashala/Vara-mira-athela.md` — Visual Art (06.01.03, archive-gallery)
- `06-Varaomashala/Vara-veth-athela.md` — Children's Works (06.01.05, archive-gallery — actual example content, most humanising page in archive)
- `06-Varaomashala/06.02-Vara-veth-shala/index.md` — Other Species Creative Works section index
- `06-Varaomashala/Vara-athel-veth.md` — Athel'kin Creative Works Pre-Transformation (06.02.04, archive-gallery, visitor)
- `06-Varaomashala/06.03-Thara-mai-shala/index.md` — Mythology section index
- `06-Varaomashala/Vel-thara-mai.md` — Creation Myths and Origin Stories (06.03.01)
- `06-Varaomashala/Thara-mai-vel.md` — Planetary Mythology (06.03.02)
- `06-Varaomashala/Thara-mai-veth.md` — Legendary Figures (06.03.03, archive-person)
- `06-Varaomashala/Thara-mai-keth.md` — The Four Afterlife Traditions (06.03.05)
- `06-Varaomashala/06.04-Vetha-mai-shala/index.md` — Spirituality section index
- `06-Varaomashala/Vel-vetha-mai.md` — Spiritual Foundations (06.04.01, philosophical-text)
- `06-Varaomashala/Vetha-mai-vel.md` — Rituals and Ceremonies (06.04.02)
- `06-Varaomashala/Vetha-mai-skela.md` — Sacred Sites (06.04.03)
- `06-Varaomashala/Vetha-mai-shala-vel.md` — Contemplative Practice (06.04.05)
- `06-Varaomashala/06.05-Thara-mai-veth/index.md` — Other Species Mythology section index (student lock)
- `06-Varaomashala/Thara-athel-mai.md` — Athel'kin Spiritual Tradition Pre-Transformation (06.05.04, visitor)
- Plus locked stubs for all Student entries in 06.01, 06.02, 06.03, 06.04, 06.05

**Source documents:** `FURLING-CIVILIZATION-COMPLETE.md`, `furling-composers-reference.md`, `furling-history-detail.md`, `FURLING-VISITOR-LORE-ADDITIONS.md`

---

## WRITING RULES — APPLY TO EVERY PAGE

**First person always.** We, our, us. Never "the Furlings believed." Never third person.

**Honest about uncertainty.** If something was unknown, say so. "We do not yet know." "This remains unresolved." The archive marks uncertainty explicitly.

**No em-dashes.** Not a single one. Use commas, colons, semicolons, or parentheses instead.

**No bureaucratic language.** Never "this section covers," "please note that," "the purpose of this page is," "in summary."

**Nothing from outside the world.** No references to anything outside Furling civilisation. No meta-awareness.

**300-600 words of actual content** on content pages. Not counting frontmatter, callouts, or footer.

**Vary the voice.** Different scholars have different registers: dry and precise for technical records, warm and personal for daily life, hurried or incomplete for records written near the exodus.

**Selavai does not write.** Any page that would need Selavai as author either does not exist at visitor level or is a locked stub. She maintains and guides but has never filed a record.

---

## DEPLOYMENT

```bash
cd ~/quartz && npx quartz sync
```

Local preview (always port 8082 — port 8080 is taken by Immich):
```bash
cd ~/quartz && npx quartz build --serve --port 8082
```

---

*Compiled April 2026 from transcript of previous build sessions.*
*All rules confirmed against working vault structure.*
*Trust NIBIRU-LORE-UPDATES.md over all other documents on any topic it covers.*
