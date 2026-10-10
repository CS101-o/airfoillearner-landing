// Single source of truth for outbound links and shared copy.
// DEMO_URL: today the live demo sits at the Netlify URL (and apex airfoillearner.com).
// Once the landing takes the apex domain, repoint the demo to demo.airfoillearner.com
// and change DEMO_URL to 'https://demo.airfoillearner.com'.
export const DEMO_URL = '/demo';

export const CONTACT_EMAIL = 'hello@airfoillearner.com';

// {{PILOT_BOOKING_LINK}}: swap for a real scheduling link once the founders supply one.
export const PILOT_URL = `mailto:${CONTACT_EMAIL}?subject=Pilot%20enquiry`;
export const PARTNERS_URL = `mailto:${CONTACT_EMAIL}?subject=Partnership`;

export const NAV_LINKS = [
  { label: 'why airfoillearner', href: '/why' },
  { label: 'our solution', href: '/#solution' },
  { label: 'work with us', href: '/#pilot' },
  { label: 'the team', href: '/#team' },
];
