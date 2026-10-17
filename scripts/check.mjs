// Checks the built page against the brief and the design system.
// Run after `npm run build`: `npm run check`. Exits non-zero on any failure.
import { readFileSync, existsSync } from 'node:fs';

const failures = [];
const fail = (msg) => failures.push(msg);

const html = existsSync('public/index.html') ? readFileSync('public/index.html', 'utf8') : '';
if (!html) fail('public/index.html is missing. Run npm run build first.');

const tokens = JSON.parse(readFileSync('design-system/tokens.json', 'utf8'));

// 1. Every section the brief lists, with its anchor.
for (const id of ['top', 'season', 'how', 'faq', 'join']) {
  if (!html.includes(`id="${id}"`)) fail(`Missing section #${id}`);
}
for (const text of [
  'The hardest problems are',
  'In October 1977',
  'Read', 'Talk', 'Explore',
  'How did we end smallpox?',
  'What would you do with your talent?',
  'Tuesdays',
  'Do I need a science background?',
  'What does it cost?',
  'Is this political or religious?',
  'What happens after a session?',
  'Join the next session',
]) {
  if (!html.includes(text)) fail(`Missing copy: "${text}"`);
}

// 2. Twelve weekly sessions.
const sessions = (html.match(/class="sv-session /g) || []).length;
if (sessions !== 12) fail(`Expected 12 session cards, found ${sessions}`);

// 3. Voice rules on visible text (the About line may name the community it grew from).
const visible = html
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<p class="about"[\s\S]*?<\/p>/, '')
  .replace(/<[^>]+>/g, ' ');
if (visible.includes('!')) fail('Exclamation mark in visible text');
if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(visible)) fail('Emoji in visible text');
for (const word of ['effective altruism', 'longtermism', 'x-risk', 'utilitarian', 'give back', 'rat race', 'golden cage', 'donate', 'you should']) {
  if (visible.toLowerCase().includes(word)) fail(`Banned phrase in visible text: "${word}"`);
}

// 4. No empty or placeholder links.
for (const m of html.matchAll(/href="([^"]*)"/g)) {
  if (!m[1] || m[1] === '#' && !html.includes('sv-header-home')) fail(`Empty link: href="${m[1]}"`);
}

// 5. One highlight swipe per view: hero, stat line and logo only.
const highlights = (html.match(/class="sv-highlight/g) || []).length;
if (highlights > 3) fail(`Too many highlight swipes (${highlights}); keep one per view`);

// 6. Contrast: every text/surface pair the token notes promise, in both themes.
const color = Object.fromEntries(tokens.color.tokens.map((t) => [t.name, t.value]));
const lum = (hex) => {
  const c = hex.replace('#', '').match(/../g).map((x) => parseInt(x, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const pairs = [
  ['ink', 'paper'], ['ink', 'paper-raised'], ['ink', 'pen-soft'],
  ['ink-muted', 'paper'], ['ink-muted', 'paper-raised'], ['ink-muted', 'pen-soft'],
  ['pen', 'paper'], ['pen', 'paper-raised'], ['pen', 'pen-soft'],
  ['on-pen', 'pen'], ['on-highlight', 'highlight'], ['solved', 'paper'], ['solved', 'paper-raised'],
];
for (const theme of ['light', 'dark']) {
  for (const [fg, bg] of pairs) {
    const r = ratio(color[fg][theme], color[bg][theme]);
    if (r < 4.5) fail(`Contrast ${fg} on ${bg} (${theme}) is ${r.toFixed(2)}:1, under 4.5:1`);
  }
}

// 7. Dark theme and assets wired up.
if (!html.includes('prefers-color-scheme: dark') && !existsSync('public/styles/tokens.css')) fail('No tokens.css');
const tokensCss = existsSync('public/styles/tokens.css') ? readFileSync('public/styles/tokens.css', 'utf8') : '';
if (!tokensCss.includes('prefers-color-scheme: dark')) fail('tokens.css has no dark theme');
for (const f of ['styles/bundle.css', 'styles/site.css', 'favicon.svg', 'fonts/BricolageGrotesque-700.woff2']) {
  if (!existsSync(`public/${f}`)) fail(`Missing public/${f}`);
  if (!html.includes(f)) fail(`index.html does not reference ${f}`);
}

// 8. Social Ambition Labs landing page, served on socialambitionlabs.com.
const labs = existsSync('public/labs/index.html') ? readFileSync('public/labs/index.html', 'utf8') : '';
if (!labs) fail('public/labs/index.html is missing');
for (const text of ['Social Ambition Labs', 'reason, science and technology', '<title>']) {
  if (!labs.includes(text)) fail(`Labs page missing: "${text}"`);
}
if (/impactful\s*giving/i.test(labs)) fail('Labs page mentions Impactful Giving');
if (/prefers-color-scheme: dark/.test(labs) === false) fail('Labs page has no dark theme');
const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const hosts = (vercel.rewrites || []).flatMap((r) => (r.has || []).map((x) => x.value));
for (const host of ['socialambitionlabs.com', 'www.socialambitionlabs.com']) {
  if (!hosts.includes(host)) fail(`vercel.json does not route ${host} to the labs page`);
}

if (failures.length) {
  console.error(`✗ ${failures.length} check(s) failed:\n- ` + failures.join('\n- '));
  process.exit(1);
}
console.log('✓ All checks passed');
