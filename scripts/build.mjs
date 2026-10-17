// Builds public/ from the two design systems (Solvable, Social Ambition Labs) and src/content.mjs.
// The design system's React components are rendered once, here, to static HTML,
// so the live page ships no JavaScript.
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import vm from 'node:vm';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as c from '../src/content.mjs';

const OUT = 'public';
const tokens = JSON.parse(readFileSync('design-system/tokens.json', 'utf8'));

// Load the component bundle (a classic script that sets window.Solvable).
const sandbox = { window: { React }, String, Object, Array };
vm.runInNewContext(readFileSync('design-system/bundle.js', 'utf8'), sandbox);
const S = sandbox.window.Solvable;
const h = React.createElement;

// ---------- tokens.css ----------
function tokensCss(tokens, source) {
  const [light, dark] = tokens.color.themes.map((t) => t.id);
  const colors = (theme) => tokens.color.tokens.map((t) => `  --${t.name}: ${t.value[theme] ?? t.value[light]};`).join('\n');
  const families = Object.entries(tokens.type.families).map(([k, v]) => `  --font-${k}: ${v};`).join('\n');
  const lengths = [...tokens.spacing.tokens, ...tokens.radius.tokens].map((t) => `  --${t.name}: ${t.value};`).join('\n');
  const faces = tokens.type.fonts.map((f) =>
    `@font-face { font-family: "${f.family}"; src: url("/${f.file}") format("woff2"); font-weight: ${f.weight}; font-style: normal; font-display: swap; }`).join('\n');
  return `/* ${tokens.name} — generated from ${source} by scripts/build.mjs */
${faces}

:root {
  color-scheme: light dark;
${colors(light)}
${families}
${lengths}
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${colors(dark).replace(/^/gm, '  ')}
  }
}
:root[data-theme="dark"] {
${colors(dark)}
}
`;
}

// ---------- page ----------
const { Logo, Icon, Button, Highlight, Label, MarginNote, GraphPaper, SessionCard, StatLine, FaqItem, SiteHeader } = S;
const ext = { target: '_blank', rel: 'noopener' };

function Section({ id, className, eyebrow, title, intro, children }) {
  return h('section', { id, className: ['section', className].filter(Boolean).join(' '), 'aria-labelledby': title ? `${id}-title` : undefined },
    h('div', { className: 'wrap' },
      eyebrow ? h(Label, null, eyebrow) : null,
      title ? h('h2', { id: `${id}-title`, className: 'title' }, title) : null,
      intro ? h('p', { className: 'intro' }, intro) : null,
      children));
}

function Page() {
  const { hero, scene, steps, season, how, faq, join, footer, links, nav } = c;
  return h(React.Fragment, null,
    h('a', { className: 'skip', href: '#main' }, 'Skip to content'),
    h('div', { id: 'top' }, h(GraphPaper, { as: 'div', className: 'hero-band' },
      h('div', { className: 'wrap' },
        h(SiteHeader, { homeHref: '#top', links: nav, cta: { label: 'Join', href: '#join' } })),
      h('main', { id: 'main' },
        h('div', { className: 'wrap hero' },
          h(Label, { tone: 'pen', icon: 'calendar' }, hero.eyebrow),
          h('h1', { className: 'display' }, hero.before, h(Highlight, null, hero.highlight)),
          h('p', { className: 'lede' }, hero.lede),
          h('div', { className: 'hero-actions' },
            h(Button, { href: links.luma, icon: 'arrow-right' }, hero.cta),
            h(MarginNote, { direction: 'right', className: 'hero-note' }, hero.note)))))),

    h('div', { className: 'page' },
      h(Section, { id: 'why', className: 'scene', eyebrow: scene.eyebrow },
        h('div', { className: 'scene-grid' },
          h('div', { className: 'prose' }, scene.paragraphs.map((p, i) => h('p', { key: i }, p))),
          h('div', { className: 'stat-card' }, h(StatLine, scene.stat)))),

      h(Section, { id: 'what', className: 'steps-section' },
        h('ol', { className: 'steps' },
          steps.map((s) => h('li', { key: s.title, className: 'step' },
            h('span', { className: 'step-icon' }, h(Icon, { name: s.icon, size: 28 })),
            h('h3', { className: 'heading' }, s.title),
            h('p', null, s.text))))),

      h(Section, { id: 'season', eyebrow: season.eyebrow, title: season.title, intro: season.intro },
        season.parts.map((part) => h('div', { key: part.name, className: 'part' },
          h('h3', { className: 'part-title' }, part.name),
          h('div', { className: 'cards' },
            part.sessions.map((s) => h(SessionCard, {
              key: s.week, week: s.week, question: s.question, reading: s.reading,
              ...(s.week === 1
                ? { status: 'next', date: 'Tuesday, 7:30pm', place: season.nextNote, href: links.luma, cta: 'Save a seat' }
                : {}),
            })))))),

      h(Section, { id: 'how', className: 'how', eyebrow: how.eyebrow, title: how.title },
        h('div', { className: 'how-grid' },
          h('dl', { className: 'facts' },
            how.facts.map((f) => h('div', { key: f.label, className: 'fact' },
              h('dt', null, h(Label, { icon: f.icon }, f.label)),
              h('dd', null, f.text)))),
          h('div', { className: 'agenda' },
            h('h3', { className: 'heading' }, 'A session'),
            h('ol', null, how.agenda.map(([t, text]) => h('li', { key: t },
              h('span', { className: 'agenda-time' }, t), h('span', null, text)))),
            h('h3', { className: 'heading who-title' }, how.who.title),
            h('p', null, how.who.text)))),

      h(Section, { id: 'faq', eyebrow: 'Questions', title: 'Questions people ask' },
        h('div', { className: 'faq-list' },
          faq.map((f, i) => h(FaqItem, { key: f.question, question: f.question, open: i === 0 }, h('p', null, f.answer))))),

      h(Section, { id: 'join', className: 'join' },
        h('div', { className: 'join-card' },
          h(Label, { tone: 'pen' }, join.eyebrow),
          h('h2', { id: 'join-title', className: 'title' }, join.title),
          h('p', null, join.text),
          h('div', { className: 'join-actions' },
            h(Button, { href: links.luma, icon: 'arrow-right' }, join.cta),
            links.whatsapp ? h(Button, { href: links.whatsapp, variant: 'quiet', icon: 'chat' }, join.whatsappText) : null)))),

    h('footer', { className: 'footer' },
      h('div', { className: 'wrap footer-inner' },
        h(Logo, { variant: 'mono', height: 28 }),
        h('p', { className: 'footer-line' }, footer.line),
        h('nav', { className: 'footer-links', 'aria-label': 'Elsewhere' },
          h('a', { href: links.luma, ...ext }, 'Luma'),
          links.whatsapp ? h('a', { href: links.whatsapp, ...ext }, 'WhatsApp') : null,
          links.instagram ? h('a', { href: links.instagram, ...ext }, 'Instagram') : null),
        h('p', { className: 'about' }, footer.about))));
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const body = renderToStaticMarkup(h(Page));
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.site.title)}</title>
<meta name="description" content="${esc(c.site.description)}">
<meta property="og:title" content="${esc(c.site.title)}">
<meta property="og:description" content="${esc(c.site.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(c.site.url)}">
<meta name="theme-color" content="${tokens.color.tokens.find((t) => t.name === 'paper').value.light}">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preload" href="fonts/BricolageGrotesque-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/SourceSerif4-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="styles/tokens.css">
<link rel="stylesheet" href="styles/bundle.css">
<link rel="stylesheet" href="styles/site.css">
</head>
<body>
${body}
</body>
</html>
`;

// The mark (ticked box) as a favicon, same geometry as the Logo component.
const color = Object.fromEntries(tokens.color.tokens.map((t) => [t.name, t.value]));
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<style>.b{stroke:${color.ink.light}}.t{stroke:${color.pen.light}}@media (prefers-color-scheme:dark){.b{stroke:${color.ink.dark}}.t{stroke:${color.pen.dark}}}</style>
<g transform="translate(4 0)" fill="none"><rect class="b" x="4" y="12" width="44" height="44" rx="5" stroke-width="4.5"/><path class="t" d="M14 35 L24 45 L54 8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>
</svg>
`;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/styles`, { recursive: true });
cpSync('design-system/fonts', `${OUT}/fonts`, { recursive: true });
cpSync('design-system/bundle.css', `${OUT}/styles/bundle.css`);
cpSync('src/site.css', `${OUT}/styles/site.css`);
writeFileSync(`${OUT}/styles/tokens.css`, tokensCss(tokens, 'design-system/tokens.json'));
writeFileSync(`${OUT}/favicon.svg`, favicon);
writeFileSync(`${OUT}/solvable.html`, html);

// ---------- Social Ambition Labs: coming-soon page ----------
// Served at the root of socialambitionlabs.com (see vercel.json). Built from design-system-labs/.
const labsTokens = JSON.parse(readFileSync('design-system-labs/tokens.json', 'utf8'));
const labsSandbox = { window: { React }, String, Object, Array, Promise };
vm.runInNewContext(readFileSync('design-system-labs/bundle.js', 'utf8'), labsSandbox);
const L = labsSandbox.window.SAL;
const lc = Object.fromEntries(labsTokens.color.tokens.map((t) => [t.name, t.value]));

const labsBody = renderToStaticMarkup(
  h(L.DotGrid, { className: 'labs' },
    h('header', { className: 'labs-top' }, h(L.Logo, { height: 36 })),
    h('main', { className: 'labs-main' },
      h(L.Label, { tone: 'signal' }, c.labs.eyebrow),
      h('h1', { className: 'labs-display' }, c.labs.headline),
      h('p', { className: 'labs-lead' }, c.labs.lead)),
    h('footer', { className: 'labs-foot' }, h(L.Label, null, c.labs.footer))));

const labsHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.labs.title)}</title>
<meta name="description" content="${esc(c.labs.lead)}">
<meta property="og:title" content="${esc(c.labs.title)}">
<meta property="og:description" content="${esc(c.labs.lead)}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://socialambitionlabs.com">
<meta name="theme-color" content="${lc.paper.light}">
<link rel="icon" href="/labs/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/BricolageGrotesque-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/SourceSerif4-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles/labs-tokens.css">
<link rel="stylesheet" href="/styles/labs-bundle.css">
<style>
${readFileSync('src/labs.css', 'utf8')}</style>
</head>
<body>
${labsBody}
</body>
</html>
`;

// The mark (2x2 tiles, top-right broken out in signal), same geometry as the Logo component.
const tiles = [[4, 35], [29, 35], [4, 10]].map(([x, y]) => `<rect class="l" x="${x}" y="${y}" width="19" height="19" rx="3" fill="none" stroke-width="4"/>`).join('');
const labsFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<style>.l{stroke:${lc.ink.light}}.s{fill:${lc.signal.light}}@media (prefers-color-scheme:dark){.l{stroke:${lc.ink.dark}}.s{fill:${lc.signal.dark}}}</style>
<g transform="translate(4 0)">${tiles}<rect class="s" x="33" y="2" width="21" height="21" rx="3"/></g>
</svg>
`;

mkdirSync(`${OUT}/labs`, { recursive: true });
writeFileSync(`${OUT}/styles/labs-tokens.css`, tokensCss(labsTokens, 'design-system-labs/tokens.json'));
cpSync('design-system-labs/bundle.css', `${OUT}/styles/labs-bundle.css`);
writeFileSync(`${OUT}/labs/index.html`, labsHtml);
writeFileSync(`${OUT}/labs/favicon.svg`, labsFavicon);
console.log(`Built ${OUT}/solvable.html and ${OUT}/labs/index.html`);
