const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ClipboardIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/><path d="M9 11h6M9 15h6"/></svg>
)
export const FlameIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 2c1 3-2 4-2 7a4 4 0 108 0c0-1-.5-2-1-2 .5 2-1 3-1 3 .5-3-2-4-2-6-1 1-2 2-2 4-1-1-1-3 0-6z"/></svg>
)
export const WrenchIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M14.7 6.3a4 4 0 10-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2-2z"/></svg>
)
export const AlarmIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="13" r="7"/><path d="M12 9v4l2.5 2.5M9 3l-2 2M15 3l2 2"/></svg>
)
export const DesignIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 21l3.5-1L18 8.5a2 2 0 000-2.8l-.7-.7a2 2 0 00-2.8 0L3 16.5z"/><path d="M13 5l3 3"/></svg>
)
export const ShieldIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>
)
export const AwardIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="8" r="5"/><path d="M8 12.5L6 21l6-3 6 3-2-8.5"/></svg>
)
export const UsersIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6"/><circle cx="18" cy="9" r="2.5"/><path d="M22 20c0-2.5-2-4.5-4.5-5"/></svg>
)
export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 6L9 17l-5-5"/></svg>
)
export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2C9.5 21 3 14.5 3 6a2 2 0 012-2z"/></svg>
)
export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
)
export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
)
export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
)
export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>
)
export const ArrowRightIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
)
export const BoxIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>
)

export const iconMap = {
  ClipboardIcon, FlameIcon, WrenchIcon, AlarmIcon, DesignIcon, ShieldIcon,
  AwardIcon, UsersIcon, CheckIcon, PhoneIcon, MailIcon, PinIcon, BoxIcon,
}