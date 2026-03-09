// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Stack', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Works', href: '#projects', id: 'projects' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Open Source', href: '#github', id: 'github' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

// ─── Social / contact ─────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  github: 'https://github.com/VikramRathodk',
  linkedin: 'https://www.linkedin.com/in/vikram-rathod-438442289/',
  email: 'mailto:rathodvikramk382@gmail.com',
  whatsapp: 'https://wa.me/919921120829',
  resume: 'https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view',
};

// ─── Typewriter roles (Hero) ───────────────────────────────────────────────────
export const HERO_ROLES = [
  'Android Developer',
  'Flutter Developer',
  'Mobile Architect',
  'Kotlin Engineer',
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// Icons are passed as string identifiers – Skills.jsx maps them to actual icon components
export const SKILL_GROUPS = [
  {
    label: 'Mobile & Web Core',
    color: 'var(--accent)',
    skills: [
      { icon: 'SiAndroid', name: 'Android', color: '#3DDC84' },
      { icon: 'SiKotlin', name: 'Kotlin', color: '#7F52FF' },
      { icon: 'SiFlutter', name: 'Flutter', color: '#54C5F8' },
      { icon: 'SiTypescript', name: 'TypeScript', color: '#3178C6' },
      { icon: 'FaJava', name: 'Java / Dart', color: '#ED8B00' },
    ],
  },
  {
    label: 'Backend & Data',
    color: 'var(--primary)',
    skills: [
      { icon: 'SiSpringboot', name: 'Spring Boot', color: '#6DB33F' },
      { icon: 'SiNodedotjs', name: 'Node.js', color: '#339933' },
      { icon: 'SiFirebase', name: 'Firebase', color: '#FFCA28' },
      { icon: 'SiMongodb', name: 'MongoDB', color: '#47A248' },
      { icon: 'SiSqlite', name: 'Room DB / SQLite', color: '#38bdf8' },
    ],
  },
  {
    label: 'Architecture & Patterns',
    color: 'var(--secondary)',
    skills: [
      { icon: 'FaCubes', name: 'Clean Arch', color: '#c084fc' },
      { icon: 'FaProjectDiagram', name: 'MVVM', color: '#818cf8' },
      { icon: 'FaLayerGroup', name: 'Jetpack Compose', color: '#38bdf8' },
      { icon: 'FaCode', name: 'Hilt / DI', color: '#34d399' },
      { icon: 'FaGitAlt', name: 'Git / GitHub', color: '#f97316' },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    type: 'work',
    role: 'Mobile Application Developer',
    company: 'Comzent Technologies Pvt. Ltd',
    location: 'Mumbai, India',
    period: 'Jan 2024 – Present',
    bullets: [
      'Worked on 2+ enterprise-grade Android applications for B2B clients.',
      'Integrated 20+ REST APIs with Retrofit, including pagination and offline-first caching using Room.',
      'Implemented MVVM + Clean Architecture across all modules, reducing bug reports significantly.',
      'Optimized app performance — cold start, list rendering, and memory management.',
      'Delivered projects ahead of deadlines while collaborating with cross-functional teams.',
      'Used Git workflows (branching, PRs, code reviews) for team-based development.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'MVVM', 'Room', 'Retrofit', 'Firebase', 'Git'],
  },
  {
    type: 'education',
    role: 'Master of Computer Applications (MCA)',
    company: 'Sardar Patel Institute of Technology',
    location: 'Andheri, Mumbai',
    period: '2020 – 2024',
    cgpa: '8.0',
    bullets: [],
    tech: [],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 0,
    title: 'ProChat',
    subtitle: 'Professional Communication Platform',
    iconKey: 'FaComments',
    accentColor: '#38bdf8',
    desc: 'A high-concurrency real-time messaging ecosystem built for professional teams. Features role-based group management, sub-100ms message latency via WebSockets, read receipts, push notifications, offline sync, and secure file sharing.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'WebSocket', 'Hilt', 'Material Design 3'],
    github: 'https://github.com/VikramRathodk',
    features: [
      'Real-time messaging via WebSocket',
      'Role-based group management',
      'Material Design 3 UI',
      'Read receipts & Push notifications',
      'Offline sync & File sharing',
    ],
    featured: true,
    langIconKeys: ['SiKotlin', 'SiFirebase'],
  },
  {
    id: 1,
    title: 'Steveo',
    subtitle: 'Smart Task Management',
    iconKey: 'FaTasks',
    accentColor: '#a78bfa',
    desc: 'An intelligent task manager with calendar integration, productivity analytics, and offline-first architecture. Supports dark/light theming and complex sync orchestration using WorkManager and Room DB triggers.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'WorkManager', 'MVVM'],
    github: 'https://github.com/VikramRathodk',
    features: [
      'Task management & Calendar integration',
      'Productivity analytics dashboard',
      'Dark / Light mode support',
      'Offline-first architecture',
      'WorkManager background sync',
    ],
    featured: false,
    langIconKeys: ['SiKotlin'],
  },
  {
    id: 2,
    title: 'Food Delivery App',
    subtitle: 'Cross-Platform Delivery Engine',
    iconKey: 'FaHamburger',
    accentColor: '#fb923c',
    desc: 'A cross-platform (Android & iOS) food delivery application with real-time logistics tracking, RazorPay payment integration, and a responsive UI. Built with Flutter for maximum platform coverage.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'RazorPay'],
    github: 'https://github.com/VikramRathodk',
    features: [
      'Cross-platform (Android & iOS)',
      'Real-time GPS order tracking',
      'CRUD operations & menu management',
      'RazorPay payment integration',
      'Responsive adaptive UI',
    ],
    featured: false,
    langIconKeys: ['SiFlutter', 'SiDart', 'SiFirebase'],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sagar Jadhav (Proxy)',
    role: 'Lead Developer',
    company: 'Comzent Technologies',
    text: 'Vikram consistently delivers high-quality mobile applications. His grasp on Clean Architecture and MVP patterns in Flutter and Kotlin is outstanding. A true asset to the engineering team.',
    avatar: 'https://ui-avatars.com/api/?name=Sagar+Jadhav&background=0284c7&color=fff',
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'Product Manager',
    company: 'Comzent Technologies',
    text: 'Working with Vikram has been a breeze. He bridges the gap perfectly between development and product requirements, always ensuring the user experience on Android and iOS is smooth and performant.',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=818cf8&color=fff',
  },
];

// ─── Github ───────────────────────────────────────────────────────────────────
export const GITHUB_USERNAME = 'VikramRathodk';
