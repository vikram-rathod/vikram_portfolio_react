# Vikram Rathod — Portfolio

A modern, interactive personal portfolio website for **Vikram Rathod**, a Mobile Application Developer specialising in Android (Kotlin / Jetpack Compose) and Flutter. Built with React 18 + Vite.

---

## About Vikram

- **Role:** Mobile Application Developer at Comzent Technologies Pvt. Ltd, Mumbai
- **Experience:** 2+ years building production-grade Android & Flutter apps
- **Play Store:** 3+ live apps used by real enterprise clients
- **Education:** MCA — Sardar Patel Institute of Technology (CGPA 8.0, Class of 2024)
- **Contact:** rathodvikramk382@gmail.com | [LinkedIn](https://www.linkedin.com/in/vikram-rathod-438442289/) | [GitHub](https://github.com/VikramRathodk)

---

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Animated name, typewriter role loop, floating particles, decorative rings, CTAs |
| **About** | Bio, animated stats (2+ years, 3+ Play Store apps), education, currently learning |
| **Skills** | Tech stack grouped into Mobile & Core Languages, Backend & Data, Architecture & Patterns |
| **Experience** | Work at Comzent Technologies + MCA from SPIT, Mumbai |
| **Projects** | 4 real apps — 3 live on Google Play Store |
| **Testimonials** | Colleague reviews from Comzent Technologies |
| **Open Source** | Live GitHub contribution calendar |
| **Contact** | Contact form (Formspree) + Email, WhatsApp, LinkedIn, GitHub links |

---

## Real Projects

| Project | Stack | Link |
|---|---|---|
| **ProChat** — Professional messaging platform | Kotlin, Jetpack Compose, Firebase, Hilt | [Play Store](https://play.google.com/store/apps/details?id=com.bcstep.prochat) |
| **Task Manager** — Cross-platform task app | Flutter, Dart, Firebase, BLoC, GetIt | [Play Store](https://play.google.com/store/apps/details?id=com.bcstep.tm) |
| **BcStep HR** — Enterprise HR management | Java, Android, Room, Firebase FCM, WorkManager | [Play Store](https://play.google.com/store/apps/details?id=com.bcstep.hr) |
| **Steveo** — Personal task manager | Kotlin, Jetpack Compose, Room, WorkManager | [GitHub](https://github.com/VikramRathodk/Strivoro) |

---

## Tech Stack (Website)

### Core
- **React 18** + **Vite 5**
- **Framer Motion** — animations, springs, staggered children

### UI / Interactions
- **react-icons** — Si* brand icons + Fa* icons
- **react-parallax-tilt** — 3-D tilt on project cards
- **react-draggable** — draggable terminal window
- **canvas-confetti** — Konami code easter egg
- **prism-react-renderer** — syntax-highlighted code blocks
- **react-github-calendar** — GitHub contribution heatmap

### Deployment
- **Docker** — multi-stage build (Node 20 Alpine → Nginx stable-alpine)
- **Nginx** — SPA routing + 1-year static asset cache
- **Docker Compose** — host port 8080

---

## Project Structure

```
src/
├── App.jsx
├── constants/data.js          # All content — edit here to update the site
├── context/ThemeContext.jsx
├── hooks/
│   ├── useScrollspy.js        # Active navbar tracking via IntersectionObserver
│   └── useTheme.js
├── utils/helpers.js
└── components/
    ├── layout/
    │   ├── navbar/Navbar.jsx
    │   └── footer/Footer.jsx
    ├── sections/
    │   ├── hero/              # Typewriter, particles, rings, Terminal launcher
    │   ├── about/             # Bento grid — bio, stats, education, currently learning
    │   ├── skills/            # SKILL_GROUPS with dynamic icon mapping
    │   ├── experience/
    │   ├── projects/          # 1 featured card + N small cards, Play Store badges
    │   ├── testimonials/
    │   ├── github/            # react-github-calendar
    │   └── contact/           # Formspree contact form + social links
    └── ui/
        ├── Button.jsx
        ├── Card.jsx
        ├── SectionHeader.jsx
        ├── custom-cursor/     # Hides automatically on touch devices
        ├── magnetic/          # Magnetic hover effect on CTAs
        ├── terminal/          # Draggable terminal emulator
        ├── code-view/         # Prism syntax highlighter
        └── konami/            # Konami code → confetti easter egg
```

---

## Special Features

### Interactive Terminal
Click **"init Terminal"** in the Hero section. Commands: `help`, `whoami`, `skills`, `projects`, `contact`, `clear`, `exit`.

### Konami Code Easter Egg
Type `↑ ↑ ↓ ↓ ← → ← → B A` anywhere on the page for a confetti burst.

### Scroll-spy Navbar
Active section tracked via `IntersectionObserver`.

### Custom Cursor
Replaces OS cursor on desktop. Auto-hidden on touch/mobile (`pointer: coarse`).

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build → /dist
npm run preview    # preview build locally
```

---

## Docker

```bash
docker compose up --build -d   # http://localhost:8080
```

---

## Content Updates

Everything lives in [src/constants/data.js](src/constants/data.js):

| Export | Controls |
|---|---|
| `HERO_ROLES` | Typewriter strings in the hero |
| `SOCIAL_LINKS` | GitHub, LinkedIn, Email, WhatsApp, Resume URLs |
| `SKILL_GROUPS` | Tech stack chips (icon keys map to react-icons) |
| `CURRENTLY_LEARNING` | "Currently Learning" cards in About |
| `EXPERIENCE` | Work & education timeline |
| `PROJECTS` | Project cards — set `playStore` for Play Store badge, `live` for Live Demo |
| `TESTIMONIALS` | Colleague quotes |
| `GITHUB_USERNAME` | GitHub contribution calendar username |

### Setting up the Contact Form

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form → copy the form ID (e.g. `xpwzabcd`)
3. In [Contact.jsx](src/components/sections/contact/Contact.jsx), replace `YOUR_FORM_ID`:
   ```
   https://formspree.io/f/xpwzabcd
   ```

---

## Contact

| Channel | |
|---|---|
| Email | rathodvikramk382@gmail.com |
| GitHub | [VikramRathodk](https://github.com/VikramRathodk) |
| LinkedIn | [vikram-rathod-438442289](https://www.linkedin.com/in/vikram-rathod-438442289/) |
| WhatsApp | +91 99211 20829 |
