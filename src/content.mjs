// Everything the page says, in one place. Edit here, then run `npm run build`.

export const links = {
  // The Luma calendar or next event. Claim lu.ma/solvable, or replace this link.
  luma: 'https://lu.ma/solvable',
  // WhatsApp community invite link. Leave empty to hide it until it exists.
  whatsapp: '',
  // Instagram profile. Leave empty to hide it.
  instagram: '',
};

export const site = {
  title: 'Solvable · A weekly reading group in Dubai',
  description:
    'A weekly reading group in Dubai on how science and technology make the world better, and where you fit in. Free. You buy your own coffee.',
  url: 'https://solvable.socialambitionlabs.com',
};

export const nav = [
  { label: 'This season', href: '#season' },
  { label: 'How it works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Tuesdays · 7:30pm · Central Dubai',
  before: 'The hardest problems are ',
  highlight: 'solvable.',
  lede: 'A weekly reading group in Dubai on how science and technology make the world better, and where you fit in.',
  cta: 'Join the next session',
  note: 'start here',
};

export const scene = {
  eyebrow: 'Why we meet',
  paragraphs: [
    'In October 1977, a hospital cook in Merca, Somalia became the last person to catch smallpox naturally. Ten years earlier it was killing about two million people a year.',
    'Vaccines, freezers, motorbikes and good data ended it. Every week we read about problems like this, the solved ones and the open ones.',
  ],
  stat: {
    from: '2,000,000',
    to: '0',
    caption: 'Smallpox deaths a year in the late 1960s, and after 1977.',
    source: 'WHO',
  },
};

export const steps = [
  { icon: 'book', title: 'Read', text: 'One short piece a week. About 20 minutes.' },
  { icon: 'chat', title: 'Talk', text: '75 minutes over coffee with people who read it too.' },
  { icon: 'flask', title: 'Explore', text: 'Careers, projects and giving, at your own pace.' },
];

export const season = {
  eyebrow: 'Season one',
  title: 'Twelve questions, one a week',
  intro: 'Each session starts from one question and one reading. You can join at any week.',
  parts: [
    {
      name: 'How the world got better',
      sessions: [
        { week: 1, question: 'How did we end smallpox?', reading: 'Our World in Data, “Smallpox”' },
        { week: 2, question: 'Is the world getting better?', reading: 'Max Roser, “The world is awful. The world is much better. The world can be much better.”' },
        { week: 3, question: 'How did we feed 8 billion people?', reading: 'Charles Mann on Norman Borlaug, The Atlantic' },
        { week: 4, question: 'What is the cheapest life-saving idea ever found?', reading: 'Our World in Data on oral rehydration therapy' },
      ],
    },
    {
      name: 'Tools for thinking',
      sessions: [
        { week: 5, question: 'Why are our mental pictures of the world out of date?', reading: 'Hans Rosling, Factfulness, chapter 1' },
        { week: 6, question: 'Why did solar get 90% cheaper?', reading: 'Max Roser, “Why did renewables become so cheap so fast?”' },
      ],
    },
    {
      name: 'Frontiers',
      sessions: [
        { week: 7, question: 'How did mRNA vaccines get made?', reading: 'Nobel Prize 2023 popular summary, Karikó and Weissman' },
        { week: 8, question: 'Can AI speed up science?', reading: 'DeepMind on AlphaFold' },
        { week: 9, question: 'Can we beat malaria?', reading: 'The story of the R21 malaria vaccine' },
        { week: 10, question: 'How do we live with extreme heat?', reading: 'Hannah Ritchie, Not the End of the World, one chapter' },
        { week: 11, question: 'Which risks are worth working on?', reading: '80,000 Hours on preventing pandemics' },
      ],
    },
    {
      name: 'Where do you fit?',
      sessions: [
        { week: 12, question: 'What would you do with your talent?', reading: 'Rutger Bregman, Moral Ambition, one chapter, and Paul Graham, “How to Do What You Love”' },
      ],
    },
  ],
  nextNote: 'First date and venue on Luma',
};

export const how = {
  eyebrow: 'How it works',
  title: 'One evening a week for the big questions',
  facts: [
    { icon: 'calendar', label: 'When', text: 'Tuesdays, 7:30pm. 75 minutes.' },
    { icon: 'pin', label: 'Where', text: 'A café in central Dubai, near a metro stop.' },
    { icon: 'cup', label: 'Cost', text: 'Free. You buy your own coffee.' },
    { icon: 'people', label: 'Size', text: 'About 12 people per table. We split tables as we grow.' },
  ],
  agenda: [
    ['10 min', 'Introductions'],
    ['50 min', 'Discussion on three prompts from that week’s host'],
    ['15 min', 'What surprised you? What would you look into?'],
  ],
  who: {
    title: 'Who comes',
    text: 'Engineers, bankers, doctors, founders, students. Curious people who like a good argument. No science background needed.',
  },
};

export const faq = [
  {
    question: 'Do I need a science background?',
    answer: 'No. The readings are written for curious people, and the best questions often come from someone outside the field.',
  },
  {
    question: 'What does it cost?',
    answer: 'Nothing. You buy your own coffee. We never ask for money.',
  },
  {
    question: 'Is this political or religious?',
    answer: 'No. We read about science, health and technology. People of every faith and none are welcome, and we keep politics out of it.',
  },
  {
    question: 'Do I have to come every week?',
    answer: 'No. Each session stands on its own. Save a seat for the weeks that interest you.',
  },
  {
    question: 'What happens after a session?',
    answer: 'Nothing you have to do. Some people pick a topic to read more about. Once a month we have a dinner where members share what they have been exploring, and once a quarter a “What now?” evening on careers, building and giving.',
  },
];

export const join = {
  eyebrow: 'Join',
  title: 'Save a seat at the next table',
  text: 'Sign-ups run on Luma. You get a confirmation straight away, then the reading and the venue a week before the session.',
  cta: 'Join the next session',
  whatsappText: 'Then say hello in the WhatsApp group',
};

export const footer = {
  line: 'A weekly reading group in Dubai.',
  about:
    'About: Solvable is run by Chetan. It grew out of the effective altruism community and is open to everyone, whatever their views.',
};
