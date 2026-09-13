export const defaultLang = 'id' as const;
export type Lang = 'id' | 'en';
export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'id';
}
export function prefixFor(lang: Lang) {
  return lang === 'en' ? '/en' : '';
}

export const ui = {
  id: {
    skip: 'Loncat ke konten',
    nav: { work: 'Karya', stack: 'Teknologi', about: 'Tentang', contact: 'Kontak', uses: 'Setup', github: 'GitHub', contactCta: 'Hubungi' },
    langLabel: 'EN',
    langAria: 'Ganti ke bahasa Inggris',
    hero: {
      role: 'Mobile Engineer', sub: 'PTI FILKOM UB · Raion Community',
      lead: 'Membangun aplikasi mobile yang rapi, cepat, dan nyaman digunakan. Sehari hari menggunakan Kotlin dengan Jetpack Compose dan Flutter, sambil mendalami Java dan C++ untuk memahami sistem secara lebih mendalam.',
      openBadge: 'Terbuka untuk magang', sayHi: 'Sapa Saya', viewWork: 'Lihat Karya', copyEmail: 'Salin email',
      meta: { location: 'Malang, Indonesia', focus: 'Kotlin Compose, Flutter', domain: 'divarvian.my.id' },
      metaLabels: { location: 'Lokasi', focus: 'Fokus', domain: 'Domain' },
      sideLabel: 'Saat Ini', sideTitle: 'Kuliah di Malang', sideText: 'Mahasiswa Pendidikan Teknologi Informasi FILKOM UB, aktif di Raion Community sebagai Mobile Engineer.',
      sideList: [{ k: 'Prodi', v: 'PTI, FILKOM UB' }, { k: 'Peran', v: 'Mobile Engineer' }, { k: 'Kota', v: 'Malang' }],
      sideNote: 'Terbuka untuk kolaborasi mobile.', viewProject: 'Lihat proyek →',
    },
    work: {
      eyebrow: 'Karya Pilihan', title: 'Proyek Pilihan', desc: 'Dua proyek yang saya kerjakan bersama tim, dari program intern hingga hackathon satu minggu.',
      bingoTag1: 'Raion Intern · Mobile Engineer', bingoTag2: 'Tim 2 Mobile Engineer',
      bingoTitle: 'BinGo', bingoText: 'Aplikasi edukasi lingkungan berbasis gamifikasi untuk anak usia Sekolah Dasar. Bersama maskot dinosaurus Gobi, anak belajar memilah sampah, menyelesaikan misi harian, membaca cerita lingkungan, dan mengerjakan kuis sambil mengumpulkan XP, koin, dan naik level. Saya membangun antarmuka dan alur utama dengan Jetpack Compose bersama satu Mobile Engineer lain.',
      bingoCheck: ['Navigasi type safe dengan Jetpack Compose', 'Gamifikasi XP, koin, dan level', 'Struktur modular yang mudah dirawat'],
      bingoPill: 'Kotlin, Jetpack Compose', bingoNote: 'Repositori internal Raion',
      visualCaption: 'Belajar memilah sampah bersama Gobi',
      bingoStats: [{ v: '4', k: 'alur utama' }, { v: '3', k: 'sistem gamifikasi' }],
      kawalTag: 'Raion Hackjam 2026 · 1 minggu', kawalTitle: 'Kawal.Z',
      kawalText: 'Aplikasi yang membantu Gen Z Indonesia memahami dan mengawal kebijakan publik. Menyediakan ringkasan kebijakan yang mudah dipahami dengan AI TLDR, gamifikasi untuk meningkatkan engagement, serta wadah diskusi komunitas dengan voting interaktif dan leaderboard untuk isu sosial, ekonomi, hukum, dan politik. Dibuat dalam satu minggu bersama PM dan UI/UX dengan Flutter dan meraih penghargaan Best Implementation.',
      kawalPill: 'Flutter', kawalPillMuted: 'Workshop Raion', kawalAward: 'Best Implementation',
      kawalList: ['PM: arah dan ruang lingkup fitur', 'UI/UX: alur dan desain', 'Mobile Engineer: implementasi Flutter'],
      kawalStats: [{ v: '4', k: 'kategori isu' }, { v: '3', k: 'peran kolaborasi' }],
      kawalQuote: { text: 'Implementasi rapi dan sesuai desain. Kolaborasi berjalan lancar dan aplikasi siap didemokan tepat waktu.', author: 'Catatan tim Kawal.Z' },
    },
    activity: { eyebrow: 'Aktivitas', title: 'Kontribusi GitHub', loading: 'Memuat kontribusi...', contributions: 'kontribusi dalam setahun terakhir', less: 'Sedikit', more: 'Banyak', retry: 'Coba lagi', openGithub: 'Buka GitHub', errorText: 'Gagal memuat data GitHub. Coba lagi atau buka profil secara langsung.' },
    stack: {
      eyebrow: 'Teknologi', title: 'Teknologi dan Tools', desc: 'Teknologi yang saya gunakan setiap hari untuk membangun aplikasi yang cepat dan nyaman digunakan.',
      mobileTitle: 'Mobile', mobileItems: [{ l: 'Kotlin, Jetpack Compose', r: 'UI dan navigasi' }, { l: 'Flutter, Dart', r: 'Dari workshop Raion' }],
      systemTitle: 'Sistem', systemItems: [{ l: 'Java', r: 'Android' }, { l: 'C++', r: 'Eksplorasi alur sistem' }],
      backendTitle: 'Backend dan OS', backendItems: [{ l: 'Supabase', r: 'Backend untuk proyek' }, { l: 'Fedora Linux', r: 'Sistem harian' }],
      countLabel: '2 keahlian',
    },
    about: {
      eyebrow: 'Tentang', title: 'Tentang Saya',
      p1: 'Berfokus pada antarmuka yang detail, halus, dan konsisten. Saya senang mengeksplorasi tools baru dan mencari solusi paling sederhana untuk setiap masalah.',
      p2: 'Di Raion, pembelajaran dilakukan secara langsung lewat praktik. Workshop menjadi bekal untuk hackathon dan program intern menjadi latihan kolaborasi bersama Product Manager dan UI/UX. Saya senang mengulik hingga memahami cara kerja sesuatu sebelum merapikannya. Karena itu saya nyaman bekerja dalam tim kecil yang bergerak cepat dan terus memperbaiki hasil.',
      links: { github: 'Lihat GitHub →', linkedin: 'Hubungi di LinkedIn →' },
      cardLabel: 'Sekilas', cardItems: [{ dt: 'Prodi', dd: 'PTI, FILKOM UB' }, { dt: 'Komunitas', dd: 'Raion Community' }, { dt: 'Peran', dd: 'Mobile Engineer' }, { dt: 'Email', dd: 'divarvian@gmail.com', href: 'mailto:divarvian@gmail.com' }],
    },
    contact: { eyebrow: 'Terbuka untuk Kolaborasi', title: 'Hubungi Saya', desc: 'Punya ide proyek atau sekadar ingin menyapa? Silakan hubungi saya. Saya terbuka untuk program magang dan kolaborasi baru.', copyEmail: 'Salin email', copyOk: 'Alamat email tersalin', copyFail: 'Salin manual: divarvian@gmail.com', downloadCV: 'Unduh CV', generatingCV: 'Menyiapkan CV...', cvFileName: 'CV-Diva-Arviansyah.pdf' },
    uses: {
      eyebrow: 'Setup', title: 'Setup yang Saya Gunakan', desc: 'Perangkat dan tools sehari hari untuk coding, kuliah, dan eksplorasi. Selalu menggunakan Fedora.',
      mobileItems: [{ l: 'Kotlin' }, { l: 'Jetpack Compose' }, { l: 'Flutter' }, { l: 'Dart' }, { l: 'Java' }, { l: 'C++' }, { l: 'JavaScript' }, { l: 'Laravel' }, { l: 'Go' }, { l: 'Astro' }],
      backendItems: [{ l: 'Supabase' }, { l: 'MySQL' }, { l: 'PostgreSQL' }, { l: 'Git' }, { l: 'Android Studio' }, { l: 'VS Code' }, { l: 'Figma' }, { l: 'Fedora' }],
    },
    footer: { note: 'Portofolio Diva Arviansyah, PTI FILKOM UB, Mobile Engineer di Raion Community.', pages: 'Halaman', links: 'Tautan', copyright: '© 2026 Diva Arviansyah. Seluruh hak dilindungi.', built: 'Dibuat dengan' },
    notFound: { badge: '404 Halaman Tidak Ditemukan', title: 'Halaman Tidak Ditemukan', lead: 'Tautan yang Anda buka tidak ditemukan. Mungkin ada kesalahan penulisan atau halaman telah dipindahkan. Silakan kembali ke beranda atau hubungi saya.', back: 'Kembali ke Beranda', contact: 'Hubungi', orTry: 'Atau coba', sideTitle: 'Tetap di Sekitar Sini', sideText: 'Portofolio Diva Arviansyah, PTI FILKOM UB, Mobile Engineer di Raion Community.', sideList: [{ k: 'Email', v: 'divarvian@gmail.com' }, { k: 'GitHub', v: 'github.com/divarvian' }, { k: 'Lokasi', v: 'Malang' }] },
  },
  en: {
    skip: 'Skip to content',
    nav: { work: 'Work', stack: 'Stack', about: 'About', contact: 'Contact', uses: 'Setup', github: 'GitHub', contactCta: 'Contact' },
    langLabel: 'ID',
    langAria: 'Switch to Indonesian',
    hero: {
      role: 'Mobile Engineer', sub: 'PTI FILKOM UB · Raion Community',
      lead: 'Building polished mobile apps that are fast and comfortable to use. I work daily with Kotlin and Jetpack Compose and Flutter, while deepening my knowledge of Java and C++ to understand systems more thoroughly.',
      openBadge: 'Open for internship', sayHi: 'Say Hi', viewWork: 'View Work', copyEmail: 'Copy email',
      meta: { location: 'Malang, Indonesia', focus: 'Kotlin Compose, Flutter', domain: 'divarvian.my.id' },
      metaLabels: { location: 'Location', focus: 'Focus', domain: 'Domain' },
      sideLabel: 'Now', sideTitle: 'Studying in Malang', sideText: 'Information Technology Education student at FILKOM UB, active in Raion Community as a Mobile Engineer.',
      sideList: [{ k: 'Program', v: 'ITE, FILKOM UB' }, { k: 'Role', v: 'Mobile Engineer' }, { k: 'City', v: 'Malang' }],
      sideNote: 'Open for mobile collaboration.', viewProject: 'View project →',
    },
    work: {
      eyebrow: 'Selected Work', title: 'Selected Projects', desc: 'Two projects I built with the team, from an internship program to a one week hackathon.',
      bingoTag1: 'Raion Intern · Mobile Engineer', bingoTag2: 'Team of 2 Mobile Engineers',
      bingoTitle: 'BinGo', bingoText: 'A gamified environmental education app for elementary school children. With Gobi the dinosaur mascot, kids learn to sort waste, complete daily missions, read environmental stories, and take quizzes while earning XP, coins, and leveling up. I built the core interface and flows with Jetpack Compose alongside another Mobile Engineer.',
      bingoCheck: ['Type safe navigation with Jetpack Compose', 'Gamification with XP, coins, and levels', 'Modular structure that is easy to maintain'],
      bingoPill: 'Kotlin, Jetpack Compose', bingoNote: 'Internal Raion repository',
      visualCaption: 'Learning to sort waste with Gobi',
      bingoStats: [{ v: '4', k: 'main flows' }, { v: '3', k: 'gamification systems' }],
      kawalTag: 'Raion Hackjam 2026 · 1 week', kawalTitle: 'Kawal.Z',
      kawalText: 'An app that helps Indonesian Gen Z understand and track public policy. It provides easy to understand policy summaries with AI TLDR, gamification to boost engagement, and a community discussion space with interactive voting and leaderboards for social, economic, legal, and political issues. Built in one week with a PM and UI/UX using Flutter and awarded Best Implementation.',
      kawalPill: 'Flutter', kawalPillMuted: 'Raion Workshop', kawalAward: 'Best Implementation',
      kawalList: ['PM: direction and scope', 'UI/UX: flows and design', 'Mobile Engineer: Flutter implementation'],
      kawalStats: [{ v: '4', k: 'issue categories' }, { v: '3', k: 'collaborating roles' }],
      kawalQuote: { text: 'Clean implementation that matched the design. Collaboration ran smoothly and the app was demo ready on time.', author: 'Kawal.Z team note' },
    },
    activity: { eyebrow: 'Activity', title: 'GitHub Contributions', loading: 'Loading contributions...', contributions: 'contributions in the last year', less: 'Less', more: 'More', retry: 'Try again', openGithub: 'Open GitHub', errorText: 'Failed to load GitHub data. Please try again or open the profile directly.' },
    stack: {
      eyebrow: 'Tech Stack', title: 'Technologies and Tools', desc: 'Technologies I use every day to build fast and delightful apps.',
      mobileTitle: 'Mobile', mobileItems: [{ l: 'Kotlin, Jetpack Compose', r: 'UI and navigation' }, { l: 'Flutter, Dart', r: 'From Raion workshop' }],
      systemTitle: 'System', systemItems: [{ l: 'Java', r: 'Android' }, { l: 'C++', r: 'System exploration' }],
      backendTitle: 'Backend and OS', backendItems: [{ l: 'Supabase', r: 'Backend for projects' }, { l: 'Fedora Linux', r: 'Daily driver' }],
      countLabel: '2 skills',
    },
    about: {
      eyebrow: 'About', title: 'About Me',
      p1: 'Focused on detailed, smooth, and consistent interfaces. I enjoy exploring new tools and finding the simplest solution for every problem.',
      p2: 'At Raion, learning happens through hands on practice. Workshops prepare us for hackathons and the internship program trains collaboration with Product Managers and UI/UX. I like to dig deep until I understand how something works before refining it. That is why I feel comfortable in small teams that move quickly and keep improving.',
      links: { github: 'View GitHub →', linkedin: 'Connect on LinkedIn →' },
      cardLabel: 'At a glance', cardItems: [{ dt: 'Program', dd: 'ITE, FILKOM UB' }, { dt: 'Community', dd: 'Raion Community' }, { dt: 'Role', dd: 'Mobile Engineer' }, { dt: 'Email', dd: 'divarvian@gmail.com', href: 'mailto:divarvian@gmail.com' }],
    },
    contact: { eyebrow: 'Open for Collaboration', title: 'Get In Touch', desc: 'Have a project in mind or just want to say hello? Feel free to reach out. I am open for internships and new collaborations.', copyEmail: 'Copy email', copyOk: 'Email copied', copyFail: 'Copy manually: divarvian@gmail.com', downloadCV: 'Download CV', generatingCV: 'Preparing CV...', cvFileName: 'CV-Diva-Arviansyah.pdf' },
    uses: {
      eyebrow: 'Uses', title: 'My Setup', desc: 'Everyday tools for coding, studying, and exploring. Always on Fedora.',
      mobileItems: [{ l: 'Kotlin' }, { l: 'Jetpack Compose' }, { l: 'Flutter' }, { l: 'Dart' }, { l: 'Java' }, { l: 'C++' }, { l: 'JavaScript' }, { l: 'Laravel' }, { l: 'Go' }, { l: 'Astro' }],
      backendItems: [{ l: 'Supabase' }, { l: 'MySQL' }, { l: 'PostgreSQL' }, { l: 'Git' }, { l: 'Android Studio' }, { l: 'VS Code' }, { l: 'Figma' }, { l: 'Fedora' }],
    },
    footer: { note: 'Portfolio of Diva Arviansyah, PTI FILKOM UB, Mobile Engineer at Raion Community.', pages: 'Pages', links: 'Links', copyright: '© 2026 Diva Arviansyah. All rights reserved.', built: 'Built with' },
    notFound: { badge: '404 Page Not Found', title: 'Page Not Found', lead: 'The link you opened could not be found. It may be a typo or the page has been moved. Please return to the home page or get in touch.', back: 'Back to Home', contact: 'Contact', orTry: 'Or try', sideTitle: 'Still Around Here', sideText: 'Portfolio of Diva Arviansyah, PTI FILKOM UB, Mobile Engineer at Raion Community.', sideList: [{ k: 'Email', v: 'divarvian@gmail.com' }, { k: 'GitHub', v: 'github.com/divarvian' }, { k: 'Location', v: 'Malang' }] },
  },
} as const;
export type Ui = typeof ui[Lang];
