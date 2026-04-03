---
title: "Rala'vel'keth — The Living Voice"
cssclass: archive-content
branch: 2
section: "02.07.09"
access: visitor
type: record
tags: [Furling, language]
---

<style>
/* ============================================================
   DICTIONARY — INLINE STYLES
   Scoped to .rk-dict to avoid clashing with archive-library.css
   ============================================================ */

@font-face {
  font-family: 'Furling';
  src: url('/static/Furling.ttf') format('truetype');
}
@font-face {
  font-family: 'Anquietas';
  src: url('/static/Anquietas.ttf') format('truetype');
}

.rk-dict {
  --d-fur:  'Furling', serif;
  --d-anc:  'Anquietas', serif;
  --d-ui:   -apple-system, 'Segoe UI', sans-serif;
  --d-body: var(--d-ui);
}

/* Font state classes applied by the toggle listener */
.rk-dict.rk-state-1 { --d-body: var(--d-fur); }
.rk-dict.rk-state-2 { --d-body: var(--d-anc); }

/* furling-pin always stays in Furling script regardless of state */
.rk-dict .rk-pin { font-family: var(--d-fur) !important; }

/* Apply body font to all text elements */
.rk-dict,
.rk-dict input,
.rk-dict button,
.rk-dict .rk-english,
.rk-dict .rk-detail-note,
.rk-dict .rk-detail-root,
.rk-dict .rk-result-count,
.rk-dict .rk-filter-btn,
.rk-dict .rk-group-sublabel,
.rk-dict .rk-footer-access,
.rk-dict .rk-dict-note,
.rk-dict .rk-dict-branch,
.rk-dict .rk-dict-access {
  font-family: var(--d-body);
}

/* Furling word elements always use Furling font */
.rk-dict .rk-word,
.rk-dict .rk-group-furling,
.rk-dict .rk-entry-type,
.rk-dict .rk-compound-tag,
.rk-dict .rk-kbd-glyph,
.rk-dict .rk-trigger-furling,
.rk-dict .rk-title-furling,
.rk-dict .rk-filter-pill,
.rk-dict .rk-search-input {
  font-family: var(--d-fur) !important;
}

/* ============================================================
   COLOUR — inherits from archive-library.css variables
   ============================================================ */
.rk-dict {
  --d-teal:       var(--arc-teal,        #4ab8c4);
  --d-teal-dim:   var(--arc-teal-dim,    rgba(74,184,196,0.25));
  --d-teal-faint: var(--arc-teal-faint,  rgba(74,184,196,0.07));
  --d-amber:      var(--arc-amber,       #c8913a);
  --d-amber-dim:  var(--arc-amber-dim,   rgba(200,145,58,0.28));
  --d-amber-faint:var(--arc-amber-faint, rgba(200,145,58,0.06));
  --d-stone:      var(--arc-stone,       rgba(180,155,110,0.12));
  --d-stone-f:    var(--arc-stone-faint, rgba(180,155,110,0.05));
  --d-bg:         var(--arc-bg,          #080b0e);
  --d-bg-s:       var(--arc-bg-surface,  #0d1117);
  --d-bg-r:       var(--arc-bg-raised,   #111820);
  --d-text:       var(--arc-text,        #ddd4c0);
  --d-text-m:     var(--arc-text-muted,  #9e9080);
  --d-text-d:     var(--arc-text-dim,    #5e5648);
  --d-text-f:     var(--arc-text-faint,  #3a3430);
  --d-r:          10px;
  --d-r-sm:       6px;
}

/* ============================================================
   LAYOUT
   ============================================================ */
.rk-dict { max-width: 860px; margin: 0 auto; padding: 0 0 80px; }

/* header */
.rk-dict .rk-header { padding: 0 0 32px; border-bottom: 1px solid var(--d-stone); margin-bottom: 32px; }
.rk-dict .rk-header-top { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; }
.rk-dict .rk-dict-branch { font-size: 0.67em; letter-spacing: 0.09em; color: var(--d-text-d); }
.rk-dict .rk-dict-access { font-size: 0.67em; letter-spacing: 0.09em; color: var(--d-amber); opacity: 0.55; }
.rk-dict .rk-title-line { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; margin-bottom: 8px; }
.rk-dict .rk-title-furling { font-size: 2em; font-weight: 400; color: var(--d-teal); opacity: 0.88; line-height: 1.1; }
.rk-dict .rk-title-sep { font-size: 1.3em; font-weight: 200; color: var(--d-text-d); }
.rk-dict .rk-title-english { font-size: 1.2em; font-weight: 300; color: var(--d-text); }
.rk-dict .rk-dict-note { font-size: 0.88em; color: var(--d-text-m); font-style: italic; line-height: 1.65; max-width: 620px; margin-top: 8px; padding: 10px 16px; border-left: 2px solid var(--d-amber-dim); background: var(--d-amber-faint); border-radius: 0 var(--d-r-sm) var(--d-r-sm) 0; }

/* search row */
.rk-dict .rk-search-row { display: flex; gap: 10px; margin-bottom: 8px; align-items: stretch; }
.rk-dict .rk-kbd-trigger { display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: var(--d-bg-s); border: 1px solid var(--d-stone); border-radius: var(--d-r); cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: border-color 0.2s, background 0.2s; }
.rk-dict .rk-kbd-trigger:hover, .rk-dict .rk-kbd-trigger.active { border-color: var(--d-teal-dim); background: var(--d-teal-faint); }
.rk-dict .rk-trigger-furling { font-size: 1.15em; color: var(--d-teal); opacity: 0.85; line-height: 1; }
.rk-dict .rk-kbd-arrow { font-size: 0.75em; color: var(--d-text-d); transition: transform 0.2s; font-family: var(--d-ui) !important; }
.rk-dict .rk-kbd-trigger.active .rk-kbd-arrow { transform: rotate(180deg); }
.rk-dict .rk-search-wrap { flex: 1; position: relative; }
.rk-dict .rk-search-input { width: 100%; background: var(--d-bg-s); border: 1px solid var(--d-stone); border-radius: var(--d-r); padding: 11px 36px 11px 16px; color: var(--d-text); font-size: 1.1em; outline: none; transition: border-color 0.2s; }
.rk-dict .rk-search-input:focus { border-color: var(--d-teal-dim); }
.rk-dict .rk-search-clear { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--d-text-d); cursor: pointer; font-size: 1em; display: none; font-family: var(--d-ui) !important; }
.rk-dict .rk-search-clear.visible { display: block; }

/* keyboard */
.rk-dict .rk-kbd-panel { display: none; background: var(--d-bg-s); border: 1px solid var(--d-teal-dim); border-radius: var(--d-r); padding: 20px 18px 16px; margin-bottom: 14px; animation: rkSlide 0.18s ease; }
.rk-dict .rk-kbd-panel.open { display: block; }
@keyframes rkSlide { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
.rk-dict .rk-kbd-sep { height: 1px; background: var(--d-stone-f); margin: 10px 0; }
.rk-dict .rk-kbd-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; }
.rk-dict .rk-kbd-key { display: inline-flex; align-items: center; justify-content: center; min-width: 88px; height: 88px; background: var(--d-bg-r); border: 1px solid var(--d-stone); border-radius: 8px; cursor: pointer; transition: background 0.15s, border-color 0.15s, transform 0.1s; user-select: none; }
.rk-dict .rk-kbd-key:hover { background: var(--d-teal-faint); border-color: var(--d-teal-dim); transform: translateY(-2px); }
.rk-dict .rk-kbd-key:active { transform: translateY(1px); }
.rk-dict .rk-kbd-glyph { font-size: 2.2em; color: var(--d-text); line-height: 1; }
.rk-dict .rk-kbd-key-wide { min-width: 120px; }
.rk-dict .rk-kbd-key-special { border-color: var(--d-amber-dim); }
.rk-dict .rk-kbd-key-special .rk-kbd-glyph { color: var(--d-amber); opacity: 0.85; }
.rk-dict .rk-kbd-key-ui .rk-kbd-glyph { font-family: var(--d-ui) !important; font-size: 1.4em; color: var(--d-text-d); }

/* filters */
.rk-dict .rk-filter-row { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 20px; align-items: center; }
.rk-dict .rk-filter-label { font-size: 0.68em; color: var(--d-text-d); margin-right: 4px; }
.rk-dict .rk-filter-btn { display: inline-flex; align-items: center; gap: 6px; background: transparent; border: 1px solid var(--d-stone); border-radius: 20px; padding: 5px 12px; font-size: 0.8em; cursor: pointer; transition: all 0.18s; color: var(--d-text-d); }
.rk-dict .rk-filter-pill { font-size: 1.15em; color: var(--d-teal); opacity: 0.7; line-height: 1; }
.rk-dict .rk-filter-btn:hover { border-color: var(--d-teal-dim); color: var(--d-text); }
.rk-dict .rk-filter-btn:hover .rk-filter-pill { opacity: 1; }
.rk-dict .rk-filter-btn.active { background: var(--d-teal-faint); border-color: var(--d-teal-dim); color: var(--d-teal); }
.rk-dict .rk-filter-btn.active .rk-filter-pill { opacity: 1; }

/* result bar */
.rk-dict .rk-result-bar { display: flex; font-size: 0.72em; color: var(--d-text-d); margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--d-stone-f); }

/* groups */
.rk-dict .rk-group { margin-bottom: 44px; }
.rk-dict .rk-group-header { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; padding-bottom: 14px; margin-bottom: 4px; position: relative; }
.rk-dict .rk-group-header::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, var(--d-amber-dim), transparent); }
.rk-dict .rk-group-furling { font-size: 1.7em; color: var(--d-amber); opacity: 0.75; line-height: 1; }
.rk-dict .rk-group-sublabel { font-size: 0.78em; color: var(--d-text-m); font-style: italic; }

/* entries */
.rk-dict .rk-entry { border-bottom: 1px solid var(--d-stone-f); cursor: pointer; transition: background 0.12s; }
.rk-dict .rk-entry:hover { background: var(--d-teal-faint); }
.rk-dict .rk-entry.expanded { background: var(--d-bg-s); border: 1px solid var(--d-teal-dim); border-radius: var(--d-r); margin: 4px 0; }
.rk-dict .rk-entry-main { display: grid; grid-template-columns: 200px 1fr 100px; align-items: center; padding: 13px 16px 13px 0; }
.rk-dict .rk-entry-left { padding-right: 20px; border-right: 1px solid var(--d-stone-f); }
.rk-dict .rk-entry.expanded .rk-entry-left { border-right-color: var(--d-teal-dim); }
.rk-dict .rk-word { font-size: 1.2em; color: var(--d-teal); opacity: 0.88; line-height: 1.2; }
.rk-dict .rk-entry-center { padding: 0 20px; }
.rk-dict .rk-english { font-size: 0.95em; color: var(--d-text); line-height: 1.4; }
.rk-dict .rk-entry-type { font-size: 0.95em; color: var(--d-text-d); text-align: right; opacity: 0.7; }
.rk-dict .rk-entry-detail { display: none; padding: 8px 0 16px; animation: rkFade 0.15s ease; }
.rk-dict .rk-entry.expanded .rk-entry-detail { display: block; }
@keyframes rkFade { from { opacity: 0; transform: translateY(-3px); } to { opacity: 1; transform: none; } }
.rk-dict .rk-detail-inner { display: grid; grid-template-columns: 200px 1fr; }
.rk-dict .rk-detail-left { padding-right: 20px; border-right: 1px solid var(--d-stone-f); }
.rk-dict .rk-detail-sublabel { font-size: 0.62em; color: var(--d-teal); opacity: 0.45; margin-bottom: 8px; font-family: var(--d-ui) !important; }
.rk-dict .rk-compound-list { display: flex; flex-wrap: wrap; gap: 5px; }
.rk-dict .rk-compound-tag { font-size: 0.88em; background: var(--d-teal-faint); border: 1px solid var(--d-teal-dim); border-radius: 4px; padding: 3px 8px; color: var(--d-teal); cursor: pointer; transition: background 0.15s; }
.rk-dict .rk-compound-tag:hover { background: rgba(74,184,196,0.14); }
.rk-dict .rk-no-compounds { font-size: 0.75em; color: var(--d-text-f); font-style: italic; }
.rk-dict .rk-detail-right { padding-left: 20px; }
.rk-dict .rk-detail-root { font-size: 0.8em; color: var(--d-text-d); font-style: italic; margin-bottom: 10px; }
.rk-dict .rk-detail-note { font-size: 0.88em; color: var(--d-text-m); line-height: 1.75; }

/* empty */
.rk-dict .rk-empty { text-align: center; padding: 60px 0; color: var(--d-text-d); font-style: italic; }
.rk-dict .rk-empty-glyph { font-family: var(--d-fur) !important; font-size: 2.2em; display: block; margin-bottom: 12px; opacity: 0.25; color: var(--d-teal); }

/* footer */
.rk-dict .rk-footer { margin-top: 60px; padding-top: 24px; position: relative; }
.rk-dict .rk-footer::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, var(--d-teal-dim), transparent); }
.rk-dict .rk-footer-access { font-size: 0.62em; color: var(--d-text-f); text-align: right; letter-spacing: 0.08em; }

/* highlight */
.rk-dict mark { background: rgba(74,184,196,0.22); color: inherit; border-radius: 2px; padding: 0 1px; }
</style>

<div class="rk-dict" id="rk-dict">

  <div class="rk-header">
    <div class="rk-header-top">
      <span class="rk-dict-branch">Athela'shala · 02.07.09</span>
      <span class="rk-dict-access">Visitor</span>
    </div>
    <div class="rk-title-line">
      <span class="rk-title-furling rk-pin">Rala'vel'keth</span>
      <span class="rk-title-sep">|</span>
      <span class="rk-title-english">The Living Voice — Complete Vocabulary</span>
    </div>
    <div class="rk-dict-note">
      Words are grouped by root. Every compound contains that root as its living centre. Words without a single root — particles, proper names, numbers, borrowed words — are gathered in their own groups after the roots. Search by any part of a word, or by its meaning in your own language.
    </div>
  </div>

  <div class="rk-search-row">
    <button class="rk-kbd-trigger" id="rk-kbd-trigger" onclick="rkToggleKbd()">
      <span class="rk-trigger-furling rk-pin">Thelar</span>
      <span class="rk-kbd-arrow">▾</span>
    </button>
    <div class="rk-search-wrap">
      <input class="rk-search-input" type="text" id="rk-search"
        placeholder="" autocomplete="off" spellcheck="false"
        oninput="rkOnSearch(this.value)" />
      <button class="rk-search-clear" id="rk-search-clear" onclick="rkClearSearch()">✕</button>
    </div>
  </div>

  <div class="rk-kbd-panel" id="rk-kbd-panel">
    <div class="rk-kbd-row" id="rk-kbd-consonants"></div>
    <div class="rk-kbd-sep"></div>
    <div class="rk-kbd-row" id="rk-kbd-compound"></div>
    <div class="rk-kbd-sep"></div>
    <div class="rk-kbd-row" id="rk-kbd-vowels"></div>
    <div class="rk-kbd-sep"></div>
    <div class="rk-kbd-row" id="rk-kbd-numbers"></div>
  </div>

  <div class="rk-filter-row">
    <span class="rk-filter-label">group</span>
    <button class="rk-filter-btn active" data-group="all" onclick="rkSetGroup('all')">all</button>
    <span id="rk-group-filters"></span>
  </div>

  <div class="rk-result-bar">
    <span id="rk-result-count">loading...</span>
  </div>

  <div id="rk-entries"></div>

  <div class="rk-footer">
    <div class="rk-footer-access">Rala'kethara Archive · Athela'shala · Access: Visitor</div>
  </div>

</div>

<script>
(function() {

// ============================================================
// FONT TOGGLE LISTENER
// Reads the font state from the Quartz body class and applies
// the matching state class to the dictionary container.
// State 0 = Latin, 1 = Furling, 2 = Ancient
// ============================================================
function rkApplyFontState() {
  const body = document.body;
  const dict = document.getElementById('rk-dict');
  if (!dict) return;
  dict.classList.remove('rk-state-0', 'rk-state-1', 'rk-state-2');
  if (body.classList.contains('rk-furling') || body.classList.contains('font-furling')) {
    dict.classList.add('rk-state-1');
  } else if (body.classList.contains('rk-ancient') || body.classList.contains('font-ancient')) {
    dict.classList.add('rk-state-2');
  } else {
    dict.classList.add('rk-state-0');
  }
}

// Watch for class changes on body (font toggle updates body classList)
const rkObserver = new MutationObserver(rkApplyFontState);
rkObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
rkApplyFontState();

// ============================================================
// KEYBOARD LAYOUT
// ============================================================
const RK_KBD = {
  consonants: [
    {g:'l',ins:'l'},{g:'m',ins:'m'},{g:'n',ins:'n'},{g:'r',ins:'r'},
    {g:'v',ins:'v'},{g:'h',ins:'h'},{g:'s',ins:'s'},{g:'k',ins:'k'},
    {g:'t',ins:'t'},{g:'w',ins:'w'},{g:'y',ins:'y'},
  ],
  compound: [
    {g:'L',ins:'lh',sp:true},{g:'R',ins:'rh',sp:true},{g:'V',ins:'vh',sp:true},
    {g:'H',ins:'hl',sp:true},{g:'N',ins:'ng',sp:true},{g:'ñ',ins:'ñ',sp:true},
  ],
  vowels: [
    {g:'a',ins:'a'},{g:'e',ins:'e'},{g:'i',ins:'i'},{g:'o',ins:'o'},{g:'u',ins:'u'},
    {g:'ā',ins:'ā'},{g:'ē',ins:'ē'},{g:'ō',ins:'ō'},{g:'ū',ins:'ū'},{g:"'",ins:"'"},
  ],
  numbers: [
    {g:'1',ins:'1'},{g:'2',ins:'2'},{g:'3',ins:'3'},{g:'4',ins:'4'},{g:'5',ins:'5'},
    {g:'6',ins:'6'},{g:'7',ins:'7'},{g:'8',ins:'8'},{g:'9',ins:'9'},{g:'0',ins:'0'},
    {g:'⎵',ins:' ',wide:true,ui:true},{g:'←',ins:'BACK',wide:true,ui:true},
  ]
};

function rkBuildKeyboard() {
  [['rk-kbd-consonants',RK_KBD.consonants],
   ['rk-kbd-compound',  RK_KBD.compound],
   ['rk-kbd-vowels',    RK_KBD.vowels],
   ['rk-kbd-numbers',   RK_KBD.numbers]
  ].forEach(([id, keys]) => {
    const row = document.getElementById(id);
    if (!row) return;
    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'rk-kbd-key' +
        (k.wide ? ' rk-kbd-key-wide'    : '') +
        (k.sp   ? ' rk-kbd-key-special' : '') +
        (k.ui   ? ' rk-kbd-key-ui'      : '');
      btn.innerHTML = `<span class="rk-kbd-glyph">${k.g}</span>`;
      btn.addEventListener('mousedown', e => {
        e.preventDefault();
        const inp = document.getElementById('rk-search');
        inp.value = k.ins === 'BACK' ? inp.value.slice(0,-1) : inp.value + k.ins;
        rkOnSearch(inp.value);
      });
      row.appendChild(btn);
    });
  });
}

// ============================================================
// WORD TYPE LABELS — in Furling script
// ============================================================
const RK_TYPES = {
  root:     "vel'rala",
  phrase:   "rala'vel",
  noun:     "vel'skela",
  pronoun:  "vel'no",
  particle: "thara'rala",
  name:     "skela'rala",
  borrowed: "athel'rala",
};

// ============================================================
// DICTIONARY DATA — sample entries (full vocabulary to follow)
// ============================================================
const RK_GROUPS = [
  {
    id: 'vetha', type: 'root',
    furling: 'vetha', sublabel: 'life, aliveness, living movement',
    entries: [
      { furling:"vetha", english:"life, aliveness, living movement", type:"root",
        rootNote:"core root — one of the eight sources",
        detail:"The root of life itself. Vetha is not merely biological existence but the quality of being alive: motion, responsiveness, growth, and the particular kind of presence that living things have. The first archive branch is Vetha'kela — the Life-Source.",
        compounds:["vetha'mai","vetha'meva","vethavel"] },
      { furling:"vetha'mai", english:"life-blessing — the standard greeting", type:"phrase",
        rootNote:"vetha (life) + mai (blessing)",
        detail:"The most common Furling greeting, used in all contexts from everyday conversation to formal ceremony. When a Furling says Vetha'mai they are genuinely wishing the other person the continuation of their life in its fullest sense.",
        compounds:[] },
      { furling:"vetha'meva", english:"the life-gift — the genetic therapy offered to the Athel'kin", type:"noun",
        rootNote:"vetha (life) + meva (gift)",
        detail:"The name for the Furling genetic therapy that extended Athel'kin lifespan from 30-40 thara'keth to 300-400. Given freely. The consequences of this gift are recorded in the locked sections of this archive.",
        compounds:[] },
    ]
  },
  {
    id: 'skela', type: 'root',
    furling: 'skela', sublabel: 'home, place, belonging',
    entries: [
      { furling:"skela", english:"home, place, belonging", type:"root",
        rootNote:"core root",
        detail:"Skela is not simply location. It is the state of belonging somewhere — the feeling of a place that holds you rather than merely contains you. Skar'skelan (to be without belonging) is considered one of the most painful states in the Furling emotional vocabulary.",
        compounds:["skela'oma","skelavel","skar'skelan"] },
      { furling:"skela'oma", english:"home-peace — the welcome greeting", type:"phrase",
        rootNote:"skela (home) + oma (peace)",
        detail:"Used when welcoming someone to a place. Where Vetha'mai wishes life, Skela'oma says this place receives you — the place itself extends belonging to the visitor.",
        compounds:[] },
    ]
  },
  {
    id: 'particles', type: 'other',
    furling: "Thara'rala", sublabel: 'structure — grammar words and particles',
    entries: [
      { furling:"la", english:"flows, moves toward — the primary relational particle", type:"particle",
        rootNote:"unanalysable — the language's core connective",
        detail:"La is the particle that carries the meaning of movement, flow, and directed connection between two things. It appears in almost every Furling sentence. Where another language uses verbs of action, Furling uses la to show the nature of what flows between subject and object.",
        compounds:[] },
      { furling:"no", english:"I, me — first person singular", type:"pronoun",
        rootNote:"unanalysable — core pronoun",
        detail:"The first person singular pronoun. Its single syllable gives the self a particular lightness in a language where most words are multi-syllable compounds.",
        compounds:[] },
    ]
  },
  {
    id: 'names', type: 'other',
    furling: "Skela'rala", sublabel: 'proper names — places, people, things',
    entries: [
      { furling:"Selavai", english:"keeper-of-light — the archive's holographic caretaker", type:"name",
        rootNote:"sela (keeper, tender) + vai (of light, toward light)",
        detail:"The name of the holographic system that tends this archive. Warm, patient, responsive. Cannot add to the archive — only maintain and guide.",
        compounds:[] },
      { furling:"Vara", english:"the Furling sun — also the common root for light and star", type:"name",
        rootNote:"var / vara (star, light) — the sun kept the common noun",
        detail:"The Furling sun was not given a separate proper name. It kept the common noun for light as other suns were encountered and the word generalised. Every compound containing vara carries both the specific meaning — that star, the one that warmed Mira — and the general meaning: light itself.",
        compounds:["vara'kela","vara'skela"] },
    ]
  },
  {
    id: 'borrowed', type: 'other',
    furling: "Athel'rala", sublabel: 'borrowed words — terms from other languages',
    entries: [
      { furling:"Astria Porta", english:"stargate — the portal network (Alteran name)", type:"borrowed",
        rootNote:"from Alteran — astria (star) + porta (gate, door)",
        detail:"The Alteran name for the portal network, used alongside the Furling term Venath'kela by those who work across both civilisations' systems. In formal archive records the Furling term is preferred.",
        compounds:[] },
    ]
  },
];

// ============================================================
// STATE
// ============================================================
let rkSearchQ    = '';
let rkActiveGroup = 'all';
let rkExpanded   = null;
let rkKbdOpen    = false;

// ============================================================
// BUILD FILTERS
// ============================================================
function rkBuildFilters() {
  const c = document.getElementById('rk-group-filters');
  if (!c) return;
  RK_GROUPS.forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'rk-filter-btn';
    btn.dataset.group = g.id;
    btn.onclick = () => rkSetGroup(g.id);
    btn.innerHTML = `<span class="rk-filter-pill rk-pin">${g.furling}</span>`;
    c.appendChild(btn);
  });
}

function rkSetGroup(id) {
  rkActiveGroup = id;
  document.querySelectorAll('.rk-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.group === id)
  );
  rkRender();
}

// ============================================================
// SEARCH
// ============================================================
function rkOnSearch(val) {
  rkSearchQ = val.toLowerCase().trim();
  const clr = document.getElementById('rk-search-clear');
  if (clr) clr.classList.toggle('visible', val.length > 0);
  rkRender();
}

function rkClearSearch() {
  const inp = document.getElementById('rk-search');
  if (inp) inp.value = '';
  rkOnSearch('');
}

// ============================================================
// KEYBOARD
// ============================================================
function rkToggleKbd() {
  rkKbdOpen = !rkKbdOpen;
  const panel   = document.getElementById('rk-kbd-panel');
  const trigger = document.getElementById('rk-kbd-trigger');
  if (panel)   panel.classList.toggle('open', rkKbdOpen);
  if (trigger) trigger.classList.toggle('active', rkKbdOpen);
  if (rkKbdOpen) {
    const inp = document.getElementById('rk-search');
    if (inp) inp.focus();
  }
}

// ============================================================
// HIGHLIGHT
// ============================================================
function rkHl(text, q) {
  if (!q) return text;
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${esc})`, 'gi'),
    '<mark>$1</mark>');
}

// ============================================================
// RENDER
// ============================================================
function rkRender() {
  const container = document.getElementById('rk-entries');
  if (!container) return;

  let groups = RK_GROUPS;
  if (rkActiveGroup !== 'all') groups = RK_GROUPS.filter(g => g.id === rkActiveGroup);

  let total = 0;
  let html  = '';

  groups.forEach(grp => {
    const entries = grp.entries.filter(e => {
      if (!rkSearchQ) return true;
      return (
        e.furling.toLowerCase().includes(rkSearchQ) ||
        e.english.toLowerCase().includes(rkSearchQ) ||
        e.detail.toLowerCase().includes(rkSearchQ) ||
        e.rootNote.toLowerCase().includes(rkSearchQ)
      );
    });
    if (!entries.length) return;
    total += entries.length;

    html += `<div class="rk-group">
      <div class="rk-group-header">
        <span class="rk-group-furling rk-pin">${grp.furling}</span>
        <span class="rk-group-sublabel">${grp.sublabel}</span>
      </div>`;

    entries.forEach((e, i) => {
      const id  = `rke-${grp.id}-${i}`;
      const exp = rkExpanded === id;
      const typeFur = RK_TYPES[e.type] || e.type;
      const compounds = e.compounds.length
        ? `<div class="rk-detail-sublabel">appears in</div>
           <div class="rk-compound-list">
             ${e.compounds.map(c =>
               `<span class="rk-compound-tag rk-pin" onclick="rkSearchFor('${c}')">${c}</span>`
             ).join('')}
           </div>`
        : `<div class="rk-no-compounds">no listed compounds</div>`;

      html += `
        <div class="rk-entry${exp ? ' expanded' : ''}" onclick="rkToggleEntry('${id}')">
          <div class="rk-entry-main">
            <div class="rk-entry-left">
              <div class="rk-word rk-pin">${rkHl(e.furling, rkSearchQ)}</div>
            </div>
            <div class="rk-entry-center">
              <div class="rk-english">${rkHl(e.english, rkSearchQ)}</div>
            </div>
            <div class="rk-entry-type rk-pin">${typeFur}</div>
          </div>
          <div class="rk-entry-detail">
            <div class="rk-detail-inner">
              <div class="rk-detail-left">${compounds}</div>
              <div class="rk-detail-right">
                <div class="rk-detail-root">${e.rootNote}</div>
                <div class="rk-detail-note">${e.detail}</div>
              </div>
            </div>
          </div>
        </div>`;
    });

    html += `</div>`;
  });

  if (!total) {
    html = `<div class="rk-empty">
      <span class="rk-empty-glyph rk-pin">nai</span>
      no words found${rkSearchQ ? ` for &ldquo;${rkSearchQ}&rdquo;` : ''}
    </div>`;
  }

  container.innerHTML = html;
  const rc = document.getElementById('rk-result-count');
  if (rc) rc.textContent =
    `${total} ${total === 1 ? 'entry' : 'entries'}${rkSearchQ ? ` matching "${rkSearchQ}"` : ''}`;
}

function rkToggleEntry(id) {
  rkExpanded = (rkExpanded === id) ? null : id;
  rkRender();
}

function rkSearchFor(term) {
  const inp = document.getElementById('rk-search');
  if (inp) inp.value = term;
  rkOnSearch(term);
}

// ============================================================
// INIT
// ============================================================
rkBuildKeyboard();
rkBuildFilters();
rkRender();

})();
</script>
