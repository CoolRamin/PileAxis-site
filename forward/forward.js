// pileaxis.com forwards to piletrix.com (2026-11-01): the same path on the new site, so a link into /privacy/ or
// /terms/ from an installed copy's Help > About lands on that page. The meta refresh in index.html is the fallback
// with scripts off, to the home page.
window.location.replace('https://www.piletrix.com' + window.location.pathname + window.location.search + window.location.hash);
