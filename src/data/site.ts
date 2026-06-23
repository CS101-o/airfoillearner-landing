// Single source of truth for outbound links and shared copy.
// DEMO_URL: today the live demo sits at the Netlify URL (and apex airfoillearner.com).
// Once the landing takes the apex domain, repoint the demo to demo.airfoillearner.com
// and change DEMO_URL to 'https://demo.airfoillearner.com'.
export const DEMO_URL = 'https://airfoillearner.netlify.app';

export const CONTACT_EMAIL = 'hello@airfoillearner.com';
export const WAITLIST_URL = `mailto:${CONTACT_EMAIL}?subject=AirfoilLearner%20waitlist`;

export const NAV_LINKS = [
  { label: 'how it works', href: '#how-it-works' },
  { label: 'the science', href: '#science' },
  { label: 'the team', href: '#footer' },
];
