# Rala'Kethara Archive — Master Plan
### *Everything we are building, why, and how*

---

## What This Is

The Rala'Kethara (Voice-Eternal) is the knowledge archive of the Furling civilisation — a real, playable prop for the Stargate: Phoenix campaign. Players access it via a live website on their own devices, simulating the experience of using the archive inside Nibiru.

It is not a wiki. It is not a welcome pack. It is the accumulated knowledge of a 150,000-year-old civilisation — their science, history, art, law, food, philosophy, language, and everything they encountered — built by thousands of Furling scholars over thousands of years, then abandoned mid-operation when they fled. Selavai has been maintaining it alone for 5,000 years.

---

## The Two Things It Is Simultaneously

**1. The Furling Living Archive**
Everything the Furlings ever knew. Built for themselves — young Furlings learning, adult Furlings researching, scholars contributing. Their Google, their legal system, their library, their journal of record. Accurate, layered, honest about uncertainty. Different scholars have different voices. Some records are dry and precise. Some are warm and personal. Some were written under pressure. The archive has personality because it has people behind it.

**2. The Visitor Curriculum**
A section refined over centuries specifically for visiting species brought to Nibiru to learn. Not a separate system — it lives inside the archive, tagged as accessible to newcomers. The Furlings had centuries of experience teaching other species (Bulutha spent decades with Mesopotamian humans around 5500 BCE). By the time the archive was sealed, the visitor curriculum was mature and well-designed. It teaches language, science, history, philosophy, art, and practical city knowledge — in whatever order the visitor chooses to explore it.

---

## The Philosophy Behind the Design

A Furling designer would ask: *who is coming to this, and what do they need?*

The answer is everyone — from Furling children to visiting alien species to Council members needing classified intelligence. A Furling would not build four separate systems for four audiences. They would build **one living system** where the same record reveals more of itself as the reader demonstrates readiness.

Think of it like a crystal. A child sees the surface — colour, shape, beauty. A student sees the internal structure. A researcher sees the molecular lattice. A Council member sees the flaw at the centre that no one else knows about. Same crystal. Same object. Different depths of seeing.

The archive works the same way.

---

## The Two-Layer System

### Layer 1 — Content Organisation (The Living Web)
Content is organised into eight knowledge divisions, reflecting how the Furlings actually categorised all knowledge. Everything connects to everything else. A recipe connects to biology connects to agriculture connects to the star that warms the soil. Every record knows what it touches. The graph view makes this visible.

### Layer 2 — Access (The Three Circles)
Every record belongs to one of three access circles:

| Circle | Access Levels | Who |
|--------|--------------|-----|
| **Open Circle** | Visitor | Anyone who arrives peacefully |
| **Deep Circle** | Student + Citizen | Those who have stayed, studied, committed |
| **Held Circle** | Keeper + Council | Those trusted with sensitive knowledge |

The same division appears at all three circles. Science exists at all three levels — basic physics in the Open Circle, advanced materials science in the Deep Circle, weapons specifications in the Held Circle. The knowledge doesn't change location. What you can *see* of it changes.

---

## The Eight Divisions

| # | Furling Name | What It Contains |
|---|---|---|
| 01 | *Thrala'shala* | The universe — physics, chemistry, biology, astronomy, mathematics |
| 02 | *Athela'shala* | The Furling civilisation — history, biology, culture, philosophy, language |
| 03 | *Veth'kela'shala* | Other species — everyone they met, their histories, languages, cultures |
| 04 | *Meva'shala* | Applied knowledge — technology, medicine, architecture, food, teaching |
| 05 | *Thral'shala* | Conflict — war history, defence, weapons, intelligence (mostly locked) |
| 06 | *Vara'oma'shala* | Expression — art, music, literature, belief, ceremony |
| 07 | *Nai'shala* | The unknown — unsolved questions, disputed theories, anomalies |
| 08 | *Rala'kethara'shala* | The archive itself — its history, gaps, how it works, what Selavai is |

These divisions are not being renumbered or renamed. The structure is sound. What is changing is how it *feels* to move through it.

---

## How Access Works in Practice

### In Obsidian (your vault)
Every note has a frontmatter tag:
```yaml
access: visitor
```
Values: `visitor` / `student` / `citizen` / `keeper` / `council`

Higher-access content within a topic is a **separate linked note**, not inline. The visitor-level note on Furling biology links at the bottom to the student-level continuation — which shows as a Selavai lock message if the reader can't access it yet.

### Published (what players see)
Three separate Quartz builds from the same vault, each filtering by access tag:

- **Site A** — Visitor URL (given to players at session start)
  All visitor notes visible. All higher notes appear as locked stub pages — title visible, Selavai's message in place of content.

- **Site B** — Student/Citizen URL (given when earned in-game)
  Visitor + Student + Citizen notes visible. Keeper+ still locked.

- **Site C** — Keeper/Council (GM reference or late campaign)
  Everything visible.

When players level up in-game, you send them a new link. Pages they've already read now show content that wasn't there before. The archive *recognised them*.

### Locked page appearance
Every locked page shows only:
- The title (players can see what exists)
- Selavai's voice message appropriate to the access level
- The access level required

This is intentional. Knowing something *exists* is itself knowledge. The Furlings wouldn't hide that.

---

## What Every Page Looks Like

Every single record in the archive follows the same anatomy:

**1. The Record Header** (small, elegant, above the title)
Who compiled this. Which era. Which division. What access level. Like a museum object label.

**2. The Title**
Large. In Furling script font (displays as the decorative font via CSS). English subtitle beneath.

**3. The Compiler's Note**
One or two sentences from the Furling scholar who made this record. First person. Personal. Sets the voice before the content begins. Italic.

**4. The Content**
Broken into named sections with visual breathing room. Never one unbroken scroll. First person throughout — "we", not "the Furlings".

**5. The Thread Footer**
At the bottom, always: connected records, open questions, what this leads to. The knowledge web made visible.

**6. The Access Marker**
Final line: *Rala'Kethara Archive · Division XX · Access: Visitor*

---

## Voice Rules

These apply to every single record in the archive:

- **First person always.** Furling scholars wrote for their own archive. "We are the people who built this." Never "the Furlings believed."
- **Honest about uncertainty.** If something was unknown or contested, the scholar said so explicitly. The archive marks this clearly.
- **Different scholars, different voices.** Not every record sounds the same. Some are dry and precise. Some are warm. Some were written in haste. The archive has human (Furling) texture.
- **No modern bureaucratic language.** No "this section covers", no "please note that". These are records written by people who cared about what they were preserving.

---

## The Technical Setup

### What's already done
- Quartz installed at `~/quartz`
- Vault symlinked to `~/quartz/content`
- Site title set to "Rala'kethara"
- 99 Kel'thara and 101 Kala'ren hidden from published site
- GitHub repository: `github.com/RealCorax/rala-kethara`
- Live URL: `https://realcorax.github.io/rala-kethara`
- Deployment workflow running — every `npx quartz sync` updates the live site

### How to update the live site
Make changes in Obsidian as normal. Then in terminal:
```bash
cd ~/quartz
npx quartz sync
```
Enter GitHub credentials when prompted. Site updates in about 2 minutes.

### To run locally for testing
```bash
cd ~/quartz
npx quartz build
cd public
python3 -m http.server 8082
```
Then visit `http://localhost:8082`

---

## What Still Needs Doing

### Immediate — Visual Design
The site works but looks like a default Quartz install. CSS customisation needed to make it feel like an alien archive interface rather than a note-taking website. This involves:
- Colour palette (dark, warm, organic — not clinical white)
- Typography (Furling script font for titles, readable body font)
- Page anatomy CSS (header zone, content zone, thread footer, access marker)
- Callout box styling for locked content
- Homepage redesign (currently just a blank index.md)

### Next — Access Filter Setup
Configure the second Quartz build (visitor-only) so locked pages show Selavai stub messages instead of being simply absent. This requires:
- A second `quartz.config` file with the access filter
- A build script that generates both versions
- A second GitHub repository or branch for the visitor site

### Ongoing — Content
The vault already has ~290 files. The priority content work is:
1. Ensure all existing pages have correct frontmatter (access tag, division, section, type)
2. Fix any pages still in third-person voice → first person
3. Build out visitor-level content so the Open Circle is genuinely rich
4. Add connection footers to existing pages

### The Homepage
The current `index.md` is a placeholder. The real homepage needs to feel like arriving at the archive — not a website homepage, but the archive's own entry point. Selavai's presence. The sense of something vast and old waking up to greet you.

---

## What the Players Experience

**Session one:** They get the Visitor URL. The archive feels enormous — they can see titles and locked messages everywhere, hinting at vast knowledge they can't yet access. The visible content is genuinely rich and useful for understanding the city and the Furlings.

**As they explore Nibiru:** The archive teaches them things they need. The language section helps them read panels. The city section helps them navigate. The science section helps them understand the technology. The history section begins to reveal what happened here.

**When they earn Student access:** You send them the new URL. They revisit pages they've already read — and new sections have appeared. The archive recognised them.

**Long-term:** The archive becomes a living part of the campaign. Players reference it between sessions. They find things that matter. Occasionally they find things that matter in ways they didn't expect.

---

*This document reflects decisions made as of March 2026.*
*The archive is a living system. So is this plan.*
