/** Solvable components. Load React 18, tokens.css, bundle.css, then bundle.js; everything sits on window.Solvable. */
import type { ReactNode } from 'react';

export type IconName = 'tick' | 'plus' | 'arrow-right' | 'arrow-curve' | 'ring' | 'book' | 'calendar' | 'clock' | 'pin' | 'cup' | 'flask' | 'chat' | 'people' | 'chart-down';

export interface LogoProps {
  /** "full" (mark + wordmark with highlight), "mark" (the ticked box alone), "mono" (one ink, no highlight). Default "full". */
  variant?: 'full' | 'mark' | 'mono';
  /** Rendered height in px. Default 40. Keep at least 24. */
  height?: number;
  className?: string;
}

export interface IconProps {
  name: IconName;
  /** px. Default 20. Draws in currentColor. */
  size?: number;
  /** Accessible name. Leave out for decorative icons next to text. */
  label?: string;
  className?: string;
}

export interface ButtonProps {
  /** "primary" pen-blue fill (one per view), "secondary" ink outline, "quiet" underlined pen text. Default "primary". */
  variant?: 'primary' | 'secondary' | 'quiet';
  /** Renders a link when set. */
  href?: string;
  /** Trailing icon, usually "arrow-right". */
  icon?: IconName;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export interface HighlightProps { children: ReactNode; className?: string }

export interface LabelProps {
  /** "muted" metadata, "pen" for the next session, "solved" for finished things. Default "muted". */
  tone?: 'muted' | 'pen' | 'solved';
  icon?: IconName;
  children: ReactNode;
}

export interface MarginNoteProps {
  /** Which side the arrow points to. Default "left". */
  direction?: 'left' | 'right';
  children: ReactNode;
}

export interface GraphPaperProps { as?: string; style?: object; className?: string; children?: ReactNode }

export interface SessionCardProps {
  week: number;
  /** The session title, written as a question. */
  question: string;
  /** "Author, title" of the reading. */
  reading?: string;
  minutes?: number;
  date?: string;
  place?: string;
  /** "upcoming" (default), "next" (pen-soft card with a button), "done" (muted, with a tick). */
  status?: 'upcoming' | 'next' | 'done';
  /** Sign-up link; shown only when status is "next". */
  href?: string;
  cta?: string;
}

export interface StatLineProps {
  from: string;
  to: string;
  caption: string;
  source?: string;
}

export interface FaqItemProps { question: string; open?: boolean; children: ReactNode }

export interface SignupFormProps {
  submitLabel?: string;
  doneText?: string;
  /** Prefix for input ids when two forms share a page. Default "sv". */
  idPrefix?: string;
  /** Called with { name, email, interest } after validation. Send it to your form service here. */
  onSubmit?: (values: { name: string; email: string; interest: string }) => void;
  /** Preview only: start in "done". */
  initialState?: 'idle' | 'done';
}

export interface SiteHeaderProps {
  homeHref?: string;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}
