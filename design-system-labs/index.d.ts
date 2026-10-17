/** Social Ambition Labs components on window.SAL. Load React 18, tokens.css, bundle.css, then bundle.js. */
import type { ReactNode } from 'react';
export type IconName = 'tick'|'plus'|'arrow-right'|'arrow-up-right'|'arrow-curve'|'ring'|'book'|'calendar'|'clock'|'pin'|'cup'|'flask'|'chat'|'people'|'chart-down'|'globe'|'layers';
export interface LogoProps { /** "full" (default), "mark", "mono". */ variant?: 'full'|'mark'|'mono'; /** px, default 40, minimum 28 for full. */ height?: number; className?: string }
export interface IconProps { name: IconName; size?: number; label?: string; className?: string }
export interface ButtonProps { /** "primary" signal fill (one per view), "secondary" ink outline, "quiet" underlined. */ variant?: 'primary'|'secondary'|'quiet'; href?: string; icon?: IconName; type?: 'button'|'submit'; disabled?: boolean; onClick?: () => void; children: ReactNode }
export interface LabelProps { tone?: 'muted'|'signal'; icon?: IconName; children: ReactNode }
export interface FocusTagProps { icon?: IconName; children: ReactNode }
export interface DotGridProps { as?: string; style?: object; className?: string; children?: ReactNode }
export interface SiteHeaderProps { homeHref?: string; cta?: { label: string; href: string; onClick?: () => void } }
export interface InterestFormProps {
  submitLabel?: string; doneText?: string; idPrefix?: string;
  /** Called with the values after validation. Return a promise to show "Sending…"; a rejected promise shows a retry message. */
  onSubmit?: (v: { name: string; email: string; role: string; place: string; note: string }) => void | Promise<unknown>;
  initialState?: 'idle'|'done';
}
