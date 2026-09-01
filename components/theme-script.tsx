/**
 * Applies the stored (or system) colour scheme before first paint, so a dark
 * reader never sees a white flash. Runs blocking in <head> — it is a handful of
 * bytes and must not be deferred.
 */
const script = `(function(){try{var s=localStorage.getItem('dna-theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
