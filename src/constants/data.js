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
  'Kotlin Engineer',
  'Jetpack Compose Dev',
  'Mobile Architect',
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// Icons are passed as string identifiers – Skills.jsx maps them to actual icon components
export const SKILL_GROUPS = [
  {
    label: 'Mobile & Core Languages',
    color: 'var(--accent)',
    skills: [
      { icon: 'SiAndroid', name: 'Android', color: '#3DDC84' },
      { icon: 'SiKotlin', name: 'Kotlin', color: '#7F52FF' },
      { icon: 'SiFlutter', name: 'Flutter', color: '#54C5F8' },
      { icon: 'SiDart', name: 'Dart', color: '#0175C2' },
      { icon: 'FaJava', name: 'Java', color: '#ED8B00' },
    ],
  },
  {
    label: 'Backend & Data',
    color: 'var(--primary)',
    skills: [
      { icon: 'SiFirebase', name: 'Firebase / FCM', color: '#FFCA28' },
      { icon: 'SiSqlite', name: 'Room / SQLite', color: '#38bdf8' },
      { icon: 'FaCode', name: 'Retrofit / REST', color: '#34d399' },
      { icon: 'FaLayerGroup', name: 'Coroutines / Flow', color: '#818cf8' },
      { icon: 'FaGitAlt', name: 'Git / GitHub', color: '#f97316' },
    ],
  },
  {
    label: 'Architecture & Patterns',
    color: 'var(--secondary)',
    skills: [
      { icon: 'FaCubes', name: 'Clean Architecture', color: '#c084fc' },
      { icon: 'FaProjectDiagram', name: 'MVVM', color: '#818cf8' },
      { icon: 'FaCode', name: 'Jetpack Compose', color: '#38bdf8' },
      { icon: 'FaCubes', name: 'Hilt / DI', color: '#34d399' },
      { icon: 'FaProjectDiagram', name: 'BLoC / Riverpod', color: '#fb923c' },
    ],
  },
];

// ─── Currently Learning ────────────────────────────────────────────────────────
export const CURRENTLY_LEARNING = [
  { label: 'Flutter Advanced', desc: 'BLoC & Riverpod state management at scale', color: '#54C5F8' },
  { label: 'Jetpack Compose', desc: 'Custom animations, gestures & performance tuning', color: '#7F52FF' },
  { label: 'Kotlin Multiplatform', desc: 'Sharing business logic across Android & iOS', color: '#f97316' },
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
      'Built and maintained 3+ production Android apps live on the Google Play Store using Kotlin and Jetpack Compose.',
      'Integrated REST APIs with Retrofit and Kotlin Coroutines for proper error handling, caching, and async operations.',
      'Leveraged Kotlin Flow and WorkManager for reactive state management and reliable background task scheduling.',
      'Implemented MVVM + Clean Architecture across all modules for scalable, testable, and maintainable codebases.',
      'Built secure session management with single-session enforcement, OTP verification, and Firebase Firestore integration.',
      'Managed app releases on Google Play Console including version management, release tracks, and production updates.',
      'Collaborated with UI/UX designers and backend developers in cross-functional Agile teams.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'MVVM', 'Room', 'Retrofit', 'Firebase', 'WorkManager', 'Git'],
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
    desc: 'A real-time messaging platform built for professional team communication. Features role-based group management, Material Design 3 UI built entirely with Jetpack Compose, read receipts, push notifications with FCM, and offline message caching.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Retrofit', 'Coroutines / Flow', 'Hilt'],
    github: 'https://github.com/VikramRathodk',
    live: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.bcstep.prochat&hl=en_IN',
    features: [
      'Real-time messaging with read receipts',
      'Role-based group management & admin controls',
      'Material Design 3 UI — fully Jetpack Compose',
      'Firebase Cloud Messaging push notifications',
      'Offline message caching',
    ],
    featured: true,
    langIconKeys: ['SiKotlin', 'SiFirebase'],
  },
  {
    id: 1,
    title: 'Task Manager',
    subtitle: 'Cross-Platform Task & Productivity App',
    iconKey: 'FaMobileAlt',
    accentColor: '#54C5F8',
    desc: 'A cross-platform task management app for Android & iOS built with Flutter. Clean Architecture + BLoC pattern, secure session management with OTP verification, FCM push notifications for task alerts, and dynamic dark/light theming.',
    tags: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Clean Architecture', 'GetIt', 'Dio'],
    github: 'https://github.com/VikramRathodk',
    live: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.bcstep.tm&hl=en_IN',
    features: [
      'Cross-platform — Android & iOS from one codebase',
      'BLoC state management with Clean Architecture',
      'OTP-based secure session management',
      'Firebase push notifications for task alerts',
      'Dynamic dark / light theming via ThemeCubit',
    ],
    featured: false,
    langIconKeys: ['SiFlutter', 'SiFirebase', 'SiDart'],
  },
  {
    id: 2,
    title: 'BcStep HR',
    subtitle: 'Enterprise HR Management System',
    iconKey: 'FaUsers',
    accentColor: '#34d399',
    desc: 'A full-featured HR management app with a real-time analytics dashboard, GPS-based employee check-in/check-out, salary & overtime modules, and FCM notifications. Built with Java + Android for enterprise-grade reliability.',
    tags: ['Java', 'Android', 'Room DB', 'Firebase FCM', 'WorkManager', 'Volley'],
    github: 'https://github.com/VikramRathodk',
    live: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.bcstep.hr&hl=en_IN',
    features: [
      'Real-time HR analytics dashboard',
      'GPS-based auto check-in / check-out',
      'Salary, claims & overtime modules',
      'FCM push notifications & session management',
      'Room DB with schema migrations',
    ],
    featured: false,
    langIconKeys: ['FaJava', 'SiAndroid'],
  },
  {
    id: 3,
    title: 'Steveo',
    subtitle: 'Smart Personal Task Manager',
    iconKey: 'FaTasks',
    accentColor: '#a78bfa',
    desc: 'A self-initiated task management app built to explore modern Android architecture. Features calendar integration, productivity analytics, dark/light/dynamic themes, and an offline-first architecture with WorkManager-driven background sync.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'WorkManager', 'MVVM'],
    github: 'https://github.com/VikramRathodk/Strivoro',
    live: null,
    playStore: null,
    features: [
      'Calendar integration & deadline management',
      'Productivity analytics & task completion trends',
      'Dark / Light / Dynamic color themes',
      'Offline-first with Room database',
      'WorkManager background sync',
    ],
    featured: false,
    langIconKeys: ['SiKotlin'],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sagar Jadhav',
    role: 'Lead Developer',
    company: 'Comzent Technologies',
    text: 'Vikram consistently delivers high-quality mobile applications. His grasp on Clean Architecture and MVVM patterns in Flutter and Kotlin is outstanding. A true asset to the engineering team.',
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
