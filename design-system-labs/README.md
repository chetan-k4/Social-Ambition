# Social Ambition Labs — design system

Social Ambition Labs is an impact-focused lab that uses reason, science and technology to work on societal-scale problems. It works with ambitious builders, researchers and professionals in Dubai and India. Its first programme is an entrepreneur-in-residence track.

The look is a working lab: a dot-grid bench, precise mono labels, calm ink, and one signal-orange block that has broken out of its grid. It is a sibling of the Solvable reading group, sharing its typefaces and grid thinking, and reads a notch more institutional: fewer hand-drawn marks, more structure.

## Voice

Write like a sharp founder explaining what they are building to a smart friend.

- **Lead with the problem and its scale.** "Air pollution cuts life expectancy in Delhi by years." Name real places and numbers.
- **Plain claims, short sentences.** Sentence case, no exclamation marks, no emoji, no "this, not that" contrasts.
- **Hopeful and specific.** Talk about what can be built and who could build it.
- **No insider vocabulary.** Keep out effective altruism, longtermism, EV, x-risk, theory of change. Keep out guilt and "you should".
- **Two markets.** Copy works for a reader in Dubai and in Bengaluru alike. Avoid local slang and currency unless the page is for one market.
- **Parent organisation.** Do not name the parent organisation on public materials yet.

| Use | Avoid |
| --- | --- |
| Register interest | Join the revolution |
| Problems that affect millions | World-changing moonshots |
| We will write back when there is something real to talk about | We will be in touch soon!! |

## Colour

Ten tokens in two themes: **Bench** (light, default) and **After hours** (dark).

- `paper` is the page, `paper-raised` lifts cards, tags and forms.
- `ink` and `ink-muted` carry text. Both pass 4.5:1 on `paper`, `paper-raised` and `signal-soft` in both themes.
- `signal` is the only action colour and the logo's breakout tile. One signal action per view.
- `signal-soft` fills hovers and tinted panels.
- `result` marks success only.
- `rule` and `dot` are decoration: borders and the dot grid. They never carry text.

## Type

Three open-licence families (SIL OFL), with the Latin font files included.

- **Bricolage Grotesque** (`display`, `title`, `heading`): headlines.
- **Source Serif 4** (`lead`, `body`): anything read at length. The hero's supporting line is `lead`.
- **IBM Plex Mono** (`label`, `data`): uppercase, tracked labels such as `DUBAI · INDIA`, and figures.

There is no handwriting face here. Solvable keeps Caveat; the Labs stay typeset.

## Layout and surfaces

- Spacing snaps to a 24px cell. `space-6` inside cards, `space-12` between sections.
- A `DotGrid` band can sit behind the hero; everything else is plain `paper`.
- Corners carry a small round: `radius-md` on buttons, cards and inputs, `radius-sm` on tags.
- Separate with `rule` hairlines or `paper-raised` cards. No shadows, gradients or coloured side-bars.

## Logo

A two-by-two grid of lab tiles, with the top-right tile broken out and filled in `signal`: structured work that lets one idea leave its box and scale. "Social Ambition" in Bricolage Grotesque 700 with LABS in tracked Plex Mono and a hairline rule.

- **Full** for the header, decks and documents. **Mark** for avatars and favicons. **Mono** for one-colour print.
- Clear space equals one tile. Minimum height 28px (full), 16px (mark).
- Light and dark SVGs are in Assets → Logos; on web pages use the `Logo` component.

## Icons and graphics

- Seventeen line icons (1.5px stroke, 24px grid), shared with Solvable plus arrow-up-right, globe and layers. Pair each with a word.
- **Dot grid**: the bench pattern.
- **Scale ruler**: a log scale from 1 to 1M with a signal arrow, for talking about reach.
- **Breakout**: the logo idea drawn large on the dot grid, for covers and social cards.

## Components

Eight components on `window.SAL`: Logo, Icon, Button, Label, FocusTag, DotGrid, SiteHeader, InterestForm. The interest form validates and hands its values to your handler through `onSubmit`; it sends nothing by itself.
