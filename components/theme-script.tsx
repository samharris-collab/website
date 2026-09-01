/**
 * Applies the stored (or system) colour scheme before first paint, so a dark
 * reader never sees a white flash. Runs blocking in <head> — it is a handful of
 * bytes and must not be deferred.
 */
// Also marks the document as scripted, which is what arms the scroll-reveal
// hidden state — without it the page renders fully visible, which is correct.
const script = `(function(){var e=document.documentElement;e.classList.add('js');try{var s=localStorage.getItem('dna-theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(x){}})();`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
