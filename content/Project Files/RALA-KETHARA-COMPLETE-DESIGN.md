# Rala'Kethara Archive — Complete Design Document
### *Everything decided, everything built toward — one file*
*Consolidated March 2026*

---

## PART ONE — WHAT THIS IS

### The Archive

The Rala'Kethara (Voice-Eternal) is the living knowledge archive of the Furling civilisation. It is the accumulated knowledge of a 150,000-year-old civilisation — their science, history, art, law, food, philosophy, language, and everything they encountered — built by thousands of Furling scholars over thousands of years, abandoned mid-operation when they fled, and maintained alone by Selavai for 5,000 years since.

It is not a wiki. It is not a reference document. It is a real archive of a real civilisation, built to exist as that thing fully and completely. Every page is written by a Furling, for the archive. There is no external layer. There is no meta-awareness. The archive does not know anything outside of itself.

It serves two simultaneous purposes:

**The Furling Living Archive** — Everything the Furlings ever knew. Built for themselves. Young Furlings learning, adult Furlings researching, scholars contributing, Council members accessing classified records. Their equivalent of a combined library, legal system, encyclopedia, and journal of record. Different scholars have different voices. Some records are dry and precise. Some are warm and personal. Some were written under pressure. The archive has personality because it has people behind it.

**The Visitor Curriculum** — A section refined over centuries specifically for visiting species brought to Nibiru to learn. Not a separate system. It lives inside the archive, tagged as accessible to newcomers. The Furlings had centuries of experience teaching other species. By the time the archive was sealed, the visitor curriculum was mature and well-designed. It teaches language, science, history, philosophy, art, and practical city knowledge in whatever order the visitor chooses to explore it.

### The Technical Setup

- Quartz installed at ~/quartz
- Obsidian vault symlinked to ~/quartz/content
- Live site: https://realcorax.github.io/rala-kethara
- Deployment: npx quartz sync from ~/quartz
- Local preview: npx quartz build then python3 -m http.server 8082 in ~/quartz/public
- Node v22, npm 10.9.7, port 8082 (8080 taken by Immich)
- Obsidian theme: AnuPpuccin dark mode

---

## PART TWO — THE DESIGN PHILOSOPHY

### How a Furling Would Build This

A Furling designer asks: who is coming to this, and what do they need?

The answer is everyone — from Furling children to visiting alien species to Council members. A Furling would build one living system where the same record reveals more of itself as the reader demonstrates readiness.

Think of it like a crystal. A child sees the surface. A student sees the internal structure. A researcher sees the molecular lattice. A Council member sees the flaw at the centre that no one else knows about. Same crystal. Same object. Different depths of seeing.

### Core Design Principles

Every decision made about the archive flows from these:

**The archive is real.** It is not a prop, a document, or a reference. It is the actual archive of the Furling civilisation, built to be that thing completely. Nothing written in it acknowledges anything outside of itself.

**One page, one idea, richly connected.** Pages are 300 to 600 words of actual content. Not long scrolling documents. A topic like Mira does not live on one page — it lives as a cluster of linked pages. The reader takes what interests them and follows the thread.

**Knowledge flows, not files.** The archive is a web, not a tree. Folders are entry points, not containers. Every page knows what it touches and points outward.

**First person always.** Every record is written by a Furling, for the archive, in their own voice. We are the people who built this. Never "the Furlings believed." Never third person. Different scholars have different tones — dry and precise, warm and personal, hurried, considered — but always first person.

**Honest about uncertainty.** If something was unknown or contested, the scholar said so. The archive marks this explicitly. An archive that pretends to know everything is lying.

**No modern bureaucratic language.** No "this section covers." No "please note that." These are records written by people who cared about what they were preserving.

**No em-dashes ever.** Furlings do not have this character in their written language. It renders as a black space. Use commas, colons, semicolons, or parentheses instead.

**Absolutely nothing from outside the world.** No references of any kind to anything outside the Furling civilisation and the world they inhabited. The archive exists entirely within itself. Always.

### Voice Examples

Dry and precise: "The orbital distance of Mira from Vara is defined as 1.00 skela'var. This is not a measurement. It is a definition. All other distances are expressed relative to this one."

Warm and personal: "I have compiled records of Vara for thirty thara'keth now. Every measurement confirms what the first observers knew. The star will outlive everything we have ever built."

Written under pressure: "This record is incomplete. I am filing what we have. The rest will follow when it can."

---

## PART THREE — THE EIGHT BRANCHES

The archive is organised into eight knowledge branches. These are not equal in size. They reflect how the Furlings actually thought about knowledge, not a librarian's taxonomy.

### Branch Structure

| Branch | Furling Name | English | Contains |
|---|---|---|---|
| 01 | Thrala'shala | The Universe | Physics, chemistry, biology, astronomy, mathematics |
| 02 | Athela'shala | Our People | Furling biology, history, society, philosophy, daily life, language |
| 03 | Veth'kela'shala | Other Lives | Other species, diplomatic record, comparative studies, other languages |
| 04 | Meva'shala | What We Have Built | Technology, medicine, architecture, food, teaching |
| 05 | Thral'shala | What We Wish We Never Needed | Conflict, defence, weapons, security — mostly locked |
| 06 | Vara'oma'shala | The Light Inside All Things | Art, music, literature, children's content, myth as story |
| 07 | Nai'shala | What We Do Not Yet Know | Open questions, anomalies, disputed knowledge — Deep Circle only |
| 08 | Rala'kethara'shala | This Archive | The archive itself, Nibiru, Selavai, how to use it |

### Access Circles

Every record belongs to one of three circles. The structure does not change between circles — the depth of what is visible changes.

| Circle | Levels | Who | How Earned |
|---|---|---|---|
| Open Circle | Visitor | Anyone who arrives peacefully | Automatic on arrival |
| Deep Circle | Student, Citizen | Those who have stayed and studied | Demonstrated understanding and commitment |
| Held Circle | Keeper, Council | Trusted with sensitive knowledge | Major service or achievement |

**Visitors see seven branches openly.** Branch 07 (Nai'shala) is visible but locked — its title appears, access is denied. Knowing something exists is itself knowledge.

**Branch 05 (Thral'shala)** is largely locked even at visitor level. The index is visible. Most content is Deep Circle or Held Circle.

### What Each Branch Contains at Visitor Level

**Branch 01 — Thrala'shala**
Measurement system, units, the home star Vara, the Vara'skela planetary system, Mira the homeworld, the elements and periodic structures, introduction pages for physics, chemistry, biology, and cosmology.

**Branch 02 — Athela'shala**
Furling biology and appearance, life stages, the origin debate and creation myths, history from pre-history through the Golden Age (the Athel'kin crisis is acknowledged — detail is locked), society and the Council of 3, the Five Principles in full, philosophy and ethics, daily life, food, clothing, celebration, the four afterlife traditions, notable individuals, the Furling language in full visitor depth.

**Branch 03 — Veth'kela'shala**
Species index, profiles of the Athel'kin (pre-transformation only — their later history is locked), the four uplifted species (Shal'kora, Vethari, Lumenari, Aethen), the Four Great Races overview, uplift philosophy, introduction to other languages.

**Branch 04 — Meva'shala**
Technology philosophy (bio-organic design), portal network (what it is, how it works, the symbol system, how to use one), living architecture, geothermal power, the artificial sun and weather systems, wrist devices, medicine foundations, food and agriculture basics, the philosophy of teaching.

**Branch 05 — Thral'shala**
Index only at visitor level. Most records locked with Selavai message.

**Branch 06 — Vara'oma'shala**
Introduction to Furling arts, music, literature, visual art, architecture as expression, children's stories, the creation myths as living stories. Examples and actual works where possible. Images. Audio for music section.

**Branch 07 — Nai'shala**
Index visible, all content locked at visitor level.

**Branch 08 — Rala'kethara'shala**
What the archive is and why it exists, how to use it, access levels explained, Selavai (who she is, what she can and cannot do), the eight branches and how they are organised. The archive simply ends at the last records before the exodus. No entry exists for the time after — nobody was here to write it.

---

## PART FOUR — FOLDER AND FILE STRUCTURE

### Top-Level Structure

Maximum two folder levels. Flat where possible. No deeply nested hierarchies.

```
content/
├── 01 Thrala'shala/
│   ├── 01 Thrala'shala.md            (branch index)
│   ├── 01.01 [section name]/
│   │   ├── 01.01 [section name].md   (section index)
│   │   └── 01.01.01 [page name].md   (content page)
│   └── ...
├── 02 Athela'shala/
├── 03 Veth'kela'shala/
├── 04 Meva'shala/
├── 05 Thral'shala/
├── 06 Vara'oma'shala/
├── 07 Nai'shala/
├── 08 Rala'kethara'shala/
└── 99 Kel'thara/                     (visitor orientation — hidden from graph)
```

### Naming Rules

**Top-level folders:** Furling name with number
```
01 Thrala'shala
02 Athela'shala
```

**Subfolders and pages:** English poetic translation — what the Furling name actually means, not a subject label
```
01.01 The Shape of All Things        (NOT: Mathematics)
02.02 The Cycles of What We Were     (NOT: Furling History)
```

**Page title format:** Pipe separator, never em-dash
```
# 01.01.01 The Root of Understanding | Foundations of Number and Logic
```

**Every folder contains exactly one page with the same name as the folder:**
```
02.01 The Wisdom of How We First Lived/
  └── 02.01 The Wisdom of How We First Lived.md
```

### Frontmatter Template

Every page — minimal, meaningful:

```yaml
---
title: "English page title"
branch: 02
section: "02.01"
access: visitor
type: content
tags: [furling, mira, homeworld, astronomy]
---
```

Field definitions:
- **branch** — which of the eight branches (1-8)
- **section** — the specific location code
- **access** — visitor / student / citizen / keeper / council
- **type** — content (knowledge record) or index (branch/section entrance)
- **tags** — 3 to 6 meaningful content tags only (proper nouns, major concepts — not structural labels)

### Tag Vocabulary

Tags reflect what the document is actually about from within the world.

**Species:** Furling, Athel'kin, Keth'alis, Alteran, Asgard, Nox, Shal'kora, Vethari, Lumenari, Aethen, Human, Tok'ra, Jaffa

**Places:** Mira, Vara, Nibiru, Vara'skela, Vareth, Thrael, Naiveth, Thalavar, Velakris, Velathara, Mirathal, Varakris

**Major concepts:** philosophy, ethics, justice, history, language, science, astronomy, biology, medicine, technology, portal, architecture, music, art, literature, mythology, daily-life, governance, diplomacy, uplift

The `[[double bracket links]]` in the body text do the relationship work. Tags are for graph clustering. Between the two, the graph shows genuine knowledge topology. Do not over-tag. Do not create tags for structural purposes — that is what the branch and section fields are for.

---

## PART FIVE — PAGE ANATOMY

Every single record in the archive follows the same structure, expressed differently depending on page type.

### Content Page Anatomy

```
[frontmatter — hidden]

[record-header callout]
Branch name · Compiled by Name, Era 00 · Visitor

# Furling Name | English Name

> *Compiler's note — one to three sentences from the Furling who wrote this.
> First person. Personal. Sets the voice. Italic.*

>> Optional intro box — a brief summary of what this record covers.
>> Use double blockquote. Teal border treatment.

## Section Heading

Body text. First person throughout.
300 to 600 words across all sections.
No walls of text. Breathing room between sections.

| Table | If needed |
|---|---|
| First column | acts as label |

[connections callout]
Connected Records
[[Link]] — one line description of what it leads to
[[Link]] — one line description

*Rala'kethara Archive · Branch Name · Access: Visitor*
```

### Index Page Anatomy

```
[frontmatter]

[room-header block]
Branch number label
# Furling Name | English Name
Invitation paragraph — what this branch holds, written warmly.

[optional guide-thread]
Suggested path: [[First stop]] then [[Second stop]] then [[Third stop]]

[section-grid of cards]
Each card: section number, page title link, one-line description

*Rala'kethara Archive · Branch Name · Access: Visitor*
```

### Locked Page Anatomy

Every locked page shows the title (the existence of knowledge is itself knowledge) and a Selavai message. Nothing else.

```yaml
---
title: "Page title"
branch: 02
section: "02.01.04"
access: student
type: locked
---
```

```
# Furling Name | English Name

> [!selavai] Selavai
> "This knowledge is held carefully, not hidden from you.
> When you are ready, it will be here."
>
> This record requires Student access.
```

Lock messages by level:

**Student:** "This knowledge is held carefully, not hidden from you. When you are ready, it will be here."

**Citizen:** "This knowledge is held with particular care. It is not withheld out of distrust — it is held until the foundation beneath it is secure."

**Keeper:** "Some knowledge must wait until trust has been fully established. Selavai holds it carefully until that time comes."

**Council:** "This record exists. Selavai will not discuss its contents at your current access level."

---

## PART SIX — VISUAL DESIGN

### CSS Files

Two CSS snippets for Obsidian and Quartz. Both use `.theme-dark` scoping to override AnuPpuccin at the correct specificity level.

**archive-content.css** — activated with `cssclass: archive-content`
For individual knowledge record pages.

**archive-index.css** — activated with `cssclass: archive-index`
For branch entrance and section hub pages. Wider layout, card grid system.

### Aesthetic Direction

The archive reflects the physical spaces of Nibiru — organic, grown rather than built, bioluminescent. Warm amber from below (geothermal, Vara's light). Cool teal from above (crystal glow, bioluminescence). No hard edges. No clinical white. Deep dark stone as the base.

Reference images: the Nibiru archive interior, the entrance waterfall with glowing script, the bio-organic corridor of grown roots and teal light, the gathering space with curved stone arches.

### Colour Palette

| Role | Colour | Hex |
|---|---|---|
| Background | Near-black cool stone | #080b0e |
| Surface | Slightly raised | #0d1117 |
| Raised | Cards and tables | #111820 |
| Amber | Warm glow from below — headings, labels | #c8913a |
| Teal | Bioluminescent from above — links, accents | #4ab8c4 |
| Text | Warm cream | #ddd4c0 |
| Text muted | Subdued | #9e9080 |
| Text dim | Very quiet | #5e5648 |
| Purple | Homepage navigation only | #8A6CF5 |

Purple is reserved for the homepage navigation layer. Content pages use amber and teal only.

### Callout Types

All interactive components use Obsidian-native callout syntax. No raw HTML divs required.

| Callout | Syntax | Use |
|---|---|---|
| Record header | `> [!record-header]` | Provenance strip above every title |
| Intro box | `>> double blockquote` | Opening summary panel, teal border |
| Selavai | `> [!selavai]` | Selavai speaking, locked messages |
| Locked | `> [!locked]` | Locked entry stub |
| Archive note | `> [!arc-note]` | General note within content, amber |
| Connections | `> [!connections]` | Thread footer, linked records |

### Language Display

- Page titles always in English (Quartz limitation)
- First header on every page: `# <span class="furling-pin">Furling Name</span> | English Name`
- Key Furling terms pinned in script inline using `<span class="furling-pin-inline">word</span>`
- Three pin sizes: `.furling-pin` (prominent), `.furling-pin-inline` (mid-sentence), `.furling-pin-small` (footnotes)
- The font switcher button changes all text between Furling script, Ancient, and English
- Important proper nouns always stay in Furling script regardless of font setting

---

## PART SEVEN — THE GUIDE THREAD

Running across all eight branches is an optional Vel'thara (First Path) — a suggested sequence for a visitor who wants to learn in order rather than browse freely.

It is not a separate section. It is a trail marker on existing pages. Each page on the path has a subtle "continue" link at the bottom pointing to the next suggested stop.

Suggested path order:
1. Branch 08 — the archive and the city
2. Branch 02 — language basics
3. Branch 02 — who the Furlings are, their values
4. Branch 01 — the universe, measurement, the home system
5. Branch 04 — portals and technology
6. Branch 03 — other species
7. Branch 06 — arts and expression

At every step the visitor can leave the path and explore freely. The path is a suggestion, not a corridor.

---

## PART EIGHT — MULTI-LAYER BUILD SYSTEM

### Building in Depth Over Time

The visitor layer is built first and completely. Deeper layers are added later without restructuring anything.

When ready to add student/citizen content:
- Write new pages with `access: student` or `access: citizen`
- Configure a second Quartz build filtering for visitor plus student plus citizen content
- The visitor site remains exactly as it is
- Deeper pages simply appear on the deeper-access site

No restructuring. No renaming. No rebuilding the visitor layer. The architecture supports depth without disruption.

### The Three Build Layers

**Layer A — Visitor** (current build)
All visitor notes visible. All higher notes appear as locked stubs with Selavai messages.

**Layer B — Student/Citizen** (future)
Visitor plus student plus citizen notes visible. Keeper and Council still locked.

**Layer C — Keeper/Council** (future, deep access)
Everything visible.

When a reader moves to a deeper access level they receive a new URL. Pages they have already read now reveal content that was not there before. The archive recognised them.

---

## PART NINE — CONTENT READY TO PLACE

The following documents are fully written in source files. They need correct frontmatter and tags added, then placement into the vault structure.

| Document | Target Location | Status |
|---|---|---|
| Vara — Mira'shala | 01.05.01 How Stars Come to Be | Complete, needs frontmatter |
| Vara'skela System Data Tables | 01.05 section | Complete, needs frontmatter |
| Furling Units of Measurement | 01.01 The Shape of All Things | Complete, needs frontmatter |
| furling-elements.md | 01.03 The Wisdom of What All Things Are Made Of | Complete, needs placement |
| FURLING-LANGUAGE-COMPLETE-V3.md | 02.07 The Living Voice | Complete, needs breaking into pages |
| NIBIRU-CITY-COMPLETE.md | 08 Rala'kethara'shala | Source material, needs writing into archive pages |
| FURLING-CIVILIZATION-COMPLETE.md | 02 Athela'shala | Source material, needs writing into archive pages |
| KETH-ALIS-COMPLETE-UPDATED.md | 03 Veth'kela'shala | Source material, pre-transformation content only at visitor level |

---

## PART TEN — WHAT IS NOT IN THE ARCHIVE

These constraints must be respected in every page written. They are not editorial choices — they are facts about what the archive is.

**The location of Nibiru is never recorded.** The city's existence is not secret. Where it is has always been withheld from visitors for security. No coordinates. No system name. No moon designation. This is why the city survived.

**Thevathal is not in the archive.** The Furlings who fled to the Milky Way never returned. Nobody was in Nibiru to record what happened to them. The archive simply ends.

**The archive has no entry for the time after the exodus.** Nobody was here to write it. Selavai maintains the archive but does not add to it — she is a caretaker, not a scholar. The archive ends at the last records before the exodus. This is discovered by reading, not announced by a notice.

**The Keth'alis transformation process is locked.** At visitor level, the Athel'kin appear as they were — peaceful, artistic, short-lived, gifted by the Furlings with extended life. The archive notes that a crisis arose from this gift. The details are held at Deep Circle and above.

**Branch 07 (Nai'shala) has no visible content at visitor level.** Its existence is visible. Access is denied. No content appears.

---

## PART ELEVEN — KNOWN INDIVIDUALS IN THE ARCHIVE

These Furlings are named in archive records. Each has or will have a personal record page.

**Tharúven Kora'thesh** — Unifier after the Era 12 Great War. Created the original Five Principles (Korath Veshun, Proto-Furling). Founded the Council of 3 system. Regarded as the most significant historical figure in Furling civilisation.

**Bulutha** (boo-LOO-tha, meaning "life-sustainer") — Cultural liaison who visited Mesopotamia around 5,000 thara'keth ago. Spent decades teaching humans. Argued for intervention in the Athel'kin crisis. Became Keeper of Nibiru. Recorded the final hologram message for those who would one day arrive at the city.

**Selavai** (seh-lah-VAI, meaning "keeper-of-light") — Holographic caretaker of the archive. Not a conscious being. Programmed to welcome visitors and provide guidance. Warm, patient, maternal in presence. Cannot leave hologram projection zones. Knowledge frozen at time of city abandonment. Cannot make decisions beyond her programming. Manages archive access levels and provides orientation.

**Varathal** — Era 14 scientist. Conducted the first spectroscopic analysis of Vara. Established the K4V stellar classification. Founded the reference standard system making Vara the 1.0 anchor for all stellar measurements. This convention has held without revision for over 118,000 thara'keth.

---

## PART TWELVE — TECHNICAL NOTES

**No horizontal rules in Obsidian source** — the Slider.css creates decorated HR elements. Use heading hierarchy for structure within content pages.

**Graph view** — the `[[double bracket links]]` do the relationship work. Tags handle clustering. Both together create accurate knowledge topology. Do not over-tag. Do not create tags for structural purposes.

**Images** — placeholders are designed into content pages. Images are generated externally and dropped in. The CSS handles border-radius and shadow automatically.

**Music** — Branch 06 will contain actual audio files. Page design accommodates embedded audio.

**Quartz deployment** — after any changes in Obsidian, run `npx quartz sync` from ~/quartz. Site updates in approximately 2 minutes. For local testing: `npx quartz build` then `python3 -m http.server 8082` in ~/quartz/public.

**Port** — always use 8082. Port 8080 is taken by Immich.

---

*This document reflects all decisions made through March 2026.*
*When decisions change, update this document first.*
*The archive is a living system. So is this plan.*
