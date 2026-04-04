// ============================================================
// FONT TOGGLE — watches Quartz body class changes
// ============================================================
function rkApplyFontState() {
  var dict = document.getElementById('rk-dict');
  if (!dict) return;
  dict.classList.remove('rk-state-0','rk-state-1','rk-state-2');
  if (document.body.classList.contains('rk-furling') ||
      document.body.classList.contains('font-furling')) {
    dict.classList.add('rk-state-1');
  } else if (document.body.classList.contains('rk-ancient') ||
             document.body.classList.contains('font-ancient')) {
    dict.classList.add('rk-state-2');
  } else {
    dict.classList.add('rk-state-0');
  }
}
new MutationObserver(rkApplyFontState)
  .observe(document.body, {attributes:true, attributeFilter:['class']});

// ============================================================
// KEYBOARD DATA
// ============================================================
var RK_KBD = {
  consonants: [
    {g:'l',ins:'l'},{g:'m',ins:'m'},{g:'n',ins:'n'},{g:'r',ins:'r'},
    {g:'v',ins:'v'},{g:'h',ins:'h'},{g:'s',ins:'s'},{g:'k',ins:'k'},
    {g:'t',ins:'t'},{g:'w',ins:'w'},{g:'y',ins:'y'}
  ],
  compound: [
    {g:'L',ins:'lh',sp:true},{g:'R',ins:'rh',sp:true},{g:'V',ins:'vh',sp:true},
    {g:'H',ins:'hl',sp:true},{g:'N',ins:'ng',sp:true},{g:'\u00f1',ins:'\u00f1',sp:true}
  ],
  vowels: [
    {g:'a',ins:'a'},{g:'e',ins:'e'},{g:'i',ins:'i'},{g:'o',ins:'o'},{g:'u',ins:'u'},
    {g:'\u0101',ins:'\u0101'},{g:'\u0113',ins:'\u0113'},
    {g:'\u014d',ins:'\u014d'},{g:'\u016b',ins:'\u016b'},
    {g:"'",ins:"'"}
  ],
  numbers: [
    {g:'1',ins:'1'},{g:'2',ins:'2'},{g:'3',ins:'3'},{g:'4',ins:'4'},{g:'5',ins:'5'},
    {g:'6',ins:'6'},{g:'7',ins:'7'},{g:'8',ins:'8'},{g:'9',ins:'9'},{g:'0',ins:'0'},
    {g:'\u2395',ins:' ',wide:true,ui:true},{g:'\u2190',ins:'BACK',wide:true,ui:true}
  ]
};

// ============================================================
// WORD TYPE LABELS — Furling script
// ============================================================
var RK_TYPES = {
  root:     "vel'rala",
  phrase:   "rala'vel",
  noun:     "vel'skela",
  pronoun:  "vel'no",
  particle: "thara'rala",
  name:     "skela'rala",
  borrowed: "athel'rala"
};

// ============================================================
// DICTIONARY DATA
// ============================================================
var RK_GROUPS = [
  {
    id:'vetha', type:'root', furling:'vetha', sublabel:'life, aliveness, living movement',
    entries:[
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
        compounds:[] }
    ]
  },
  {
    id:'skela', type:'root', furling:'skela', sublabel:'home, place, belonging',
    entries:[
      { furling:"skela", english:"home, place, belonging", type:"root",
        rootNote:"core root",
        detail:"Skela is not simply location. It is the state of belonging somewhere — the feeling of a place that holds you rather than merely contains you. Skar'skelan (to be without belonging) is considered one of the most painful states in the Furling emotional vocabulary.",
        compounds:["skela'oma","skelavel","skar'skelan"] },
      { furling:"skela'oma", english:"home-peace — the welcome greeting", type:"phrase",
        rootNote:"skela (home) + oma (peace)",
        detail:"Used when welcoming someone to a place. Where Vetha'mai wishes life, Skela'oma says this place receives you — the place itself extends belonging to the visitor.",
        compounds:[] }
    ]
  },
  {
    id:'particles', type:'other', furling:"Thara'rala", sublabel:'structure — grammar words and particles',
    entries:[
      { furling:"la", english:"flows, moves toward — the primary relational particle", type:"particle",
        rootNote:"unanalysable — the language's core connective",
        detail:"La is the particle that carries the meaning of movement, flow, and directed connection between two things. It appears in almost every Furling sentence. Where another language uses verbs of action, Furling uses la to show the nature of what flows between subject and object.",
        compounds:[] },
      { furling:"no", english:"I, me — first person singular", type:"pronoun",
        rootNote:"unanalysable — core pronoun",
        detail:"The first person singular pronoun. Its single syllable gives the self a particular lightness in a language where most words are multi-syllable compounds.",
        compounds:[] }
    ]
  },
  {
    id:'names', type:'other', furling:"Skela'rala", sublabel:'proper names — places, people, things',
    entries:[
      { furling:"Selavai", english:"keeper-of-light — the archive's holographic caretaker", type:"name",
        rootNote:"sela (keeper, tender) + vai (of light, toward light)",
        detail:"The name of the holographic system that tends this archive. Warm, patient, responsive. Cannot add to the archive — only maintain and guide.",
        compounds:[] },
      { furling:"Vara", english:"the Furling sun — also the common root for light and star", type:"name",
        rootNote:"var / vara (star, light) — the sun kept the common noun",
        detail:"The Furling sun was not given a separate proper name. It kept the common noun for light as other suns were encountered and the word generalised. Every compound containing vara carries both meanings: that star, and light itself.",
        compounds:["vara'kela","vara'skela"] }
    ]
  },
  {
    id:'borrowed', type:'other', furling:"Athel'rala", sublabel:'borrowed words — terms from other languages',
    entries:[
      { furling:"Astria Porta", english:"stargate — the portal network (Alteran name)", type:"borrowed",
        rootNote:"from Alteran — astria (star) + porta (gate, door)",
        detail:"The Alteran name for the portal network, used alongside the Furling term Venath'kela by those who work across both civilisations' systems. In formal archive records the Furling term is preferred.",
        compounds:[] }
    ]
  }
];

// ============================================================
// STATE
// ============================================================
var rkSearchQ    = '';
var rkActiveGroup = 'all';
var rkExpanded   = null;
var rkKbdOpen    = false;

// ============================================================
// BUILD KEYBOARD
// ============================================================
function rkBuildKeyboard() {
  var sections = [
    ['rk-kbd-consonants', RK_KBD.consonants],
    ['rk-kbd-compound',   RK_KBD.compound],
    ['rk-kbd-vowels',     RK_KBD.vowels],
    ['rk-kbd-numbers',    RK_KBD.numbers]
  ];
  sections.forEach(function(pair) {
    var row = document.getElementById(pair[0]);
    if (!row) return;
    pair[1].forEach(function(k) {
      var btn = document.createElement('button');
      btn.className = 'rk-kbd-key' +
        (k.wide ? ' rk-kbd-key-wide'    : '') +
        (k.sp   ? ' rk-kbd-key-special' : '') +
        (k.ui   ? ' rk-kbd-key-ui'      : '');
      var span = document.createElement('span');
      span.className = 'rk-kbd-glyph';
      span.textContent = k.g;
      btn.appendChild(span);
      btn.addEventListener('mousedown', function(e) {
        e.preventDefault();
        var inp = document.getElementById('rk-search');
        if (!inp) return;
        inp.value = (k.ins === 'BACK') ? inp.value.slice(0,-1) : inp.value + k.ins;
        rkOnSearch(inp.value);
      });
      row.appendChild(btn);
    });
  });
}

// ============================================================
// BUILD FILTERS
// ============================================================
function rkBuildFilters() {
  var c = document.getElementById('rk-group-filters');
  if (!c) return;
  RK_GROUPS.forEach(function(g) {
    var btn = document.createElement('button');
    btn.className = 'rk-filter-btn';
    btn.setAttribute('data-group', g.id);
    btn.addEventListener('click', function() { rkSetGroup(g.id); });
    var pill = document.createElement('span');
    pill.className = 'rk-filter-pill rk-pin';
    pill.textContent = g.furling;
    btn.appendChild(pill);
    c.appendChild(btn);
  });
}

// ============================================================
// FILTER
// ============================================================
function rkSetGroup(id) {
  rkActiveGroup = id;
  document.querySelectorAll('.rk-filter-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-group') === id);
  });
  rkRender();
}

// ============================================================
// SEARCH
// ============================================================
function rkOnSearch(val) {
  rkSearchQ = val.toLowerCase().trim();
  var clr = document.getElementById('rk-search-clear');
  if (clr) clr.classList.toggle('visible', val.length > 0);
  rkRender();
}

function rkClearSearch() {
  var inp = document.getElementById('rk-search');
  if (inp) inp.value = '';
  rkOnSearch('');
}

// ============================================================
// KEYBOARD TOGGLE
// ============================================================
function rkToggleKbd() {
  rkKbdOpen = !rkKbdOpen;
  var panel   = document.getElementById('rk-kbd-panel');
  var trigger = document.getElementById('rk-kbd-trigger');
  if (panel)   panel.classList.toggle('open', rkKbdOpen);
  if (trigger) trigger.classList.toggle('active', rkKbdOpen);
  if (rkKbdOpen) {
    var inp = document.getElementById('rk-search');
    if (inp) inp.focus();
  }
}

// ============================================================
// HIGHLIGHT
// ============================================================
function rkHl(text, q) {
  if (!q) return text;
  var esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp('(' + esc + ')', 'gi'), '<mark>$1</mark>');
}

// ============================================================
// RENDER
// ============================================================
function rkRender() {
  var container = document.getElementById('rk-entries');
  if (!container) return;

  var groups = (rkActiveGroup === 'all')
    ? RK_GROUPS
    : RK_GROUPS.filter(function(g) { return g.id === rkActiveGroup; });

  var total = 0;
  var html  = '';

  groups.forEach(function(grp) {
    var entries = grp.entries.filter(function(e) {
      if (!rkSearchQ) return true;
      return (
        e.furling.toLowerCase().indexOf(rkSearchQ) >= 0 ||
        e.english.toLowerCase().indexOf(rkSearchQ) >= 0 ||
        e.detail.toLowerCase().indexOf(rkSearchQ)  >= 0 ||
        e.rootNote.toLowerCase().indexOf(rkSearchQ) >= 0
      );
    });
    if (!entries.length) return;
    total += entries.length;

    html += '<div class="rk-group">' +
      '<div class="rk-group-header">' +
        '<span class="rk-group-furling rk-pin">' + grp.furling + '</span>' +
        '<span class="rk-group-sublabel">' + grp.sublabel + '</span>' +
      '</div>';

    entries.forEach(function(e, i) {
      var id  = 'rke-' + grp.id + '-' + i;
      var exp = (rkExpanded === id);
      var typeFur = RK_TYPES[e.type] || e.type;

      var compounds = e.compounds.length
        ? '<div class="rk-detail-sublabel">appears in</div>' +
          '<div class="rk-compound-list">' +
          e.compounds.map(function(c) {
            return '<span class="rk-compound-tag rk-pin" onclick="rkSearchFor(\'' + c + '\')">' + c + '</span>';
          }).join('') + '</div>'
        : '<div class="rk-no-compounds">no listed compounds</div>';

      html +=
        '<div class="rk-entry' + (exp ? ' expanded' : '') + '" onclick="rkToggleEntry(\'' + id + '\')">' +
          '<div class="rk-entry-main">' +
            '<div class="rk-entry-left">' +
              '<div class="rk-word rk-pin">' + rkHl(e.furling, rkSearchQ) + '</div>' +
            '</div>' +
            '<div class="rk-entry-center">' +
              '<div class="rk-english">' + rkHl(e.english, rkSearchQ) + '</div>' +
            '</div>' +
            '<div class="rk-entry-type rk-pin">' + typeFur + '</div>' +
          '</div>' +
          '<div class="rk-entry-detail">' +
            '<div class="rk-detail-inner">' +
              '<div class="rk-detail-left">' + compounds + '</div>' +
              '<div class="rk-detail-right">' +
                '<div class="rk-detail-root">' + e.rootNote + '</div>' +
                '<div class="rk-detail-note">' + e.detail + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

    html += '</div>';
  });

  if (!total) {
    html = '<div class="rk-empty">' +
      '<span class="rk-empty-glyph rk-pin">nai</span>' +
      'no words found' + (rkSearchQ ? ' for &ldquo;' + rkSearchQ + '&rdquo;' : '') +
      '</div>';
  }

  container.innerHTML = html;
  var rc = document.getElementById('rk-result-count');
  if (rc) rc.textContent = total + (total === 1 ? ' entry' : ' entries') +
    (rkSearchQ ? ' matching "' + rkSearchQ + '"' : '');
}

function rkToggleEntry(id) {
  rkExpanded = (rkExpanded === id) ? null : id;
  rkRender();
}

function rkSearchFor(term) {
  var inp = document.getElementById('rk-search');
  if (inp) inp.value = term;
  rkOnSearch(term);
}

// ============================================================
// INIT
// ============================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    rkApplyFontState();
    rkBuildKeyboard();
    rkBuildFilters();
    rkRender();
  });
} else {
  rkApplyFontState();
  rkBuildKeyboard();
  rkBuildFilters();
  rkRender();
}
</script>
}
document.addEventListener('nav', function() {
  if (!document.getElementById('rk-dict')) return;
  rkApplyFontState();
  rkBuildKeyboard();
  rkBuildFilters();
  rkRender();
});
