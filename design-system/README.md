# Solvable — design system

Solvable is a weekly reading group in Dubai about how science and technology make the world better, and where its members could help. People read one short piece, talk it through over coffee, and decide for themselves what to explore next.

The look is a working scientist's field notebook: graph paper, ballpoint ink, a highlighter swipe on the line that matters, and the odd note in the margin. It should feel curious and hopeful, like someone halfway through working something out.

## Voice

Write like a curious friend who has read the paper and wants to tell you about it.

- **Open with a scene.** A person, a place, a date. "In October 1977, a hospital cook in Merca, Somalia became the last person to catch smallpox naturally."
- **Title things as questions.** "How did we feed 8 billion people?" "Can AI speed up science?"
- **Use real numbers.** Set them in `data` style: 2,000,000 deaths a year, then zero.
- **Keep it hopeful and specific.** Talk about problems being solved and who solved them.
- **Plain words.** No insider vocabulary (effective altruism, longtermism, EV, x-risk, utilitarian). No guilt, no "you should".
- **Short sentences.** No exclamation marks, no emoji, and no "this, not that" contrasts.

Examples:

| Use | Avoid |
| --- | --- |
| Join the next session | Sign up now to change the world |
| Free. You buy your own coffee. | Completely free of charge!! |
| What surprised you? | Key takeaways |

## Colour

Eleven tokens in two themes: **Paper** (light, the default) and **Night lab** (dark).

- `paper` is the page. `paper-raised` lifts cards and form fields off it.
- `ink` for text, `ink-muted` for metadata. Both pass 4.5:1 on `paper`, `paper-raised` and `pen-soft` in both themes.
- `pen` is the only action colour: links, the primary button, the focus ring. One pen-blue action per view.
- `highlight` is a marker swipe behind **one key phrase per view**. Text on it is always `on-highlight`. Never use it for buttons or large fills on the website.
- `solved` is reserved for ticks and finished things: past sessions, a problem marked solved, a success message. It never decorates.
- `grid` draws the graph paper and hairlines. It never carries text.

## Type

Four open-licence families (SIL OFL), each with one job. The Latin font files ship with this system; Google Fonts also serves them.

- **Bricolage Grotesque** (`display`, `title`, `heading`): headlines, sentence case, questions where possible.
- **Source Serif 4** (`body`, `body-sm`): anything read at length. Lines near 65 characters.
- **IBM Plex Mono** (`label`, `data`): uppercase eyebrows like `WEEK 03 · 20 MIN READ`, dates, figures.
- **Caveat** (`annotation`): a handwritten margin note such as "← start here". At most one per section.

Load them with one stylesheet link:
`https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=IBM+Plex+Mono:wght@400;500&family=Caveat:wght@500&display=swap`

## Layout and surfaces

- The page background can carry a faint graph-paper grid in `grid` at the `grid-cell` pitch (24px). Keep it behind the hero or one band; text-heavy sections sit on plain `paper` or `paper-raised`.
- Spacing snaps to the cell: `space-6` inside cards, `space-12` between sections.
- Corners are mostly square. `radius-md` on buttons, cards and inputs, `radius-sm` on tags and the highlight swipe.
- Separate things with a `grid` hairline or a `paper-raised` card. No drop shadows, gradients or coloured side-bars on cards.

## Logo

The mark is a ticked box whose tick breaks out past the top corner: a problem checked off, and ambition that does not stay inside the box. The wordmark is "Solvable" in Bricolage Grotesque 700 with a highlighter swipe behind "able".

- **Full logo** (mark + wordmark) for the website header, event pages and slides.
- **Mark** alone for avatars, favicons and anything under 120px wide.
- **Mono** (one ink, no highlight) for single-colour print.
- Light and dark SVGs are in Assets → Logos. On web pages use the `Logo` component, which follows the theme.
- Clear space equals the height of the box. Minimum height 24px for the full logo, 16px for the mark. Never recolour the tick or stretch the logo.

## Icons

Fourteen pen-mark icons on a 24px grid: 1.5px round strokes, no fills, a little hand-drawn unevenness. They take the text colour (`ink`, `pen` in actions, `solved` for ticks on finished things). Pair each with a word. No emoji, no mascots, no stock photos of people pointing at whiteboards.

## Graphics

The visual language comes from marking up a printout:

- **Graph paper** behind one band per page (the `GraphPaper` component, or the tile in Assets → Graphics).
- **Highlighter swipe** behind one phrase per view (`Highlight`).
- **Pen ring and margin arrow** in `pen` to point at one thing (`MarginNote`, or the SVGs).
- **Progress line**: a hand-plotted line on graph paper falling to a highlighted zero, with a `solved` dot at the end. Use it beside real data only, and label the axes when it carries numbers.

## Components

Twelve components for the website and event pages, on `window.Solvable`: Logo, Icon, Button, Highlight, Label, MarginNote, GraphPaper, SessionCard, StatLine, FaqItem, SignupForm, SiteHeader. Each has its own guidelines. The sign-up form validates input and hands the values to your form service through `onSubmit`; it sends nothing by itself.

## Building with it

Colours, type, spacing and radii are tokens; refer to them by name (`var(--pen)`, `var(--space-6)`). Pair every text colour with a surface its usage note lists. Keyboard focus is a 2px `pen` outline with a 2px offset in both themes.
