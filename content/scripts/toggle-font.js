const fonts = ["font-inter", "font-furling", "font-anquietas"];
const names = ["Inter", "Furling", "Anquietas"];
const current = fonts.findIndex(f => app.customCss.enabledSnippets.has(f));
const next = (current + 1) % fonts.length;

fonts.forEach(f => app.customCss.enabledSnippets.delete(f));
app.customCss.enabledSnippets.add(fonts[next]);
app.customCss.requestLoadSnippets();

new Notice("Font: " + names[next]);
