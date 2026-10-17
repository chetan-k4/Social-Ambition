# Solvable

The one-page website for Solvable, a weekly reading group in Dubai on how science and technology make the world better.

## Editing

- **Words, links, sessions:** `src/content.mjs`. The Luma, WhatsApp and Instagram links are at the top; WhatsApp and Instagram stay hidden until they are filled in.
- **Layout:** `src/site.css`.
- **Design system:** `design-system/` is a copy of the [Solvable design system](https://claude.ai/artifact/AR9H36WyVr6N4CsX4tVd3s) (tokens, components, fonts). Re-copy it from there when the system changes; `tokens.css` is generated from `tokens.json`.

## Building

```
npm install
npm run build   # renders the design system's components to static HTML in public/
npm run check   # brief sections, voice rules, contrast in both themes, assets
```

The live page ships no JavaScript: the React components are rendered once at build time.

## Pages and domains

- `solvable.socialambitionlabs.com` (and any other host): Solvable, built to `public/solvable.html`.
- `socialambitionlabs.com` and `www.`: the Social Ambition Labs landing page, `src/labs.html`.

`vercel.json` picks the page for `/` by host. There is deliberately no `public/index.html`: a file at `/` would override those rules.

## Deploying

Import the repo in Vercel; `vercel.json` sets the build command and the `public/` output folder. Any static host works after `npm run build`.
