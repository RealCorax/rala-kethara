(function() {
  const LABELS = ['Aa', 'speak', 'read'];
  const FONTS = ['inherit', 'Furling', 'Anquietas'];
  const BASE = location.hostname === 'localhost' ? '' : '/rala-kethara';

  function injectFonts() {
    if (document.getElementById('rk-fonts')) return;
    const style = document.createElement('style');
    style.id = 'rk-fonts';
    style.textContent = `
      @font-face { font-family:'Furling'; src:url('${BASE}/static/Furling.ttf') format('truetype'); }
      @font-face { font-family:'Anquietas'; src:url('${BASE}/static/Anquietas.ttf') format('truetype'); }
      .furling-pin { font-family:'Furling' !important; }
      body.rk-furling .center, body.rk-furling article, body.rk-furling .explorer, body.rk-furling .page-title, body.rk-furling .article-title, body.rk-furling .breadcrumb-container, body.rk-furling .page-listing, body.rk-furling .section, body.rk-furling .section-li, body.rk-furling .desc, body.rk-furling .folder-title, body.rk-furling .internal, body.rk-furling .graph-outer, body.rk-furling .backlinks, body.rk-furling .sidebar h2, body.rk-furling .toc, body.rk-furling .toc-content, body.rk-furling .search-button, body.rk-furling h2, body.rk-furling h3, body.rk-furling .right.sidebar, body.rk-furling .graph, body.rk-furling .backlinks, body.rk-furling footer, body.rk-furling h1 { font-family:'Furling' !important; }
      body.rk-furling .furling-pin { font-family:'Furling' !important; }
      body.rk-ancient .center, body.rk-ancient article, body.rk-ancient .explorer, body.rk-ancient .page-title, body.rk-ancient .article-title, body.rk-ancient .breadcrumb-container, body.rk-ancient .page-listing, body.rk-ancient .section, body.rk-ancient .section-li, body.rk-ancient .desc, body.rk-ancient .folder-title, body.rk-ancient .internal, body.rk-ancient .graph-outer, body.rk-ancient .backlinks, body.rk-ancient .sidebar h2, body.rk-ancient .toc, body.rk-ancient .toc-content, body.rk-ancient .search-button, body.rk-ancient h2, body.rk-ancient h3, body.rk-ancient .right.sidebar, body.rk-ancient .graph, body.rk-ancient .backlinks, body.rk-ancient footer, body.rk-ancient h1 { font-family:'Anquietas' !important; }
      body.rk-ancient .furling-pin { font-family:'Furling' !important; }
      #rk-font-btn {
        position:fixed; top:14px; right:72px; z-index:9999;
        background:rgba(74,184,196,0.08); border:1px solid rgba(74,184,196,0.3);
        border-radius:6px; color:#4ab8c4; font-size:16px;
        padding:5px 12px; cursor:pointer;
        transition:background 0.2s;
      }
      #rk-font-btn:hover { background:rgba(74,184,196,0.18); border-color:rgba(74,184,196,0.55); }
    `;
    document.head.appendChild(style);
  }

  // Default to Furling (1) if never set before
  function getState() {
    const stored = localStorage.getItem('rk-font');
    return stored === null ? 1 : parseInt(stored);
  }
  function setState(n) { localStorage.setItem('rk-font', n); }

  function applyFont(state) {
    document.body.classList.remove('rk-furling','rk-ancient');
    if (state === 1) document.body.classList.add('rk-furling');
    if (state === 2) document.body.classList.add('rk-ancient');
  }

  function updateButton(btn, state) {
    // Next state label shown in the CURRENT font
    const next = (state + 1) % 3;
    btn.textContent = LABELS[next];
    btn.style.fontFamily = FONTS[state];
    // Bump font size for Furling/Ancient since they render larger
    btn.style.fontSize = state === 0 ? '13px' : '18px';
  }

  function setupButton() {
    injectFonts();
    let btn = document.getElementById('rk-font-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'rk-font-btn';
      document.body.appendChild(btn);
      btn.addEventListener('click', function() {
        const state = (getState() + 1) % 3;
        setState(state);
        applyFont(state);
        updateButton(btn, state);
      });
    }
    const state = getState();
    applyFont(state);
    updateButton(btn, state);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupButton);
  } else {
    setupButton();
  }

  document.addEventListener('nav', setupButton);
})();
