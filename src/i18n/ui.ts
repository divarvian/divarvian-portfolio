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
    nav: { work: 'Project', stack: 'Teknologi', about: 'Tentang', contact: 'Kontak', uses: 'Setup', github: 'GitHub', contactCta: 'Hubungi' },
    langLabel: 'EN',
    langAria: 'Ganti ke bahasa Inggris',
    hero: {
      role: 'Mobile Engineer', sub: 'PTI FILKOM UB · Raion Community',
      lead: 'Suka bikin antarmuka mobile yang rapi. Perhatiin detail, interaksi yang halus, dan UX yang nyaman. Sehari-hari pakai Kotlin dengan Jetpack Compose dan Flutter, lagi mendalami Java dan C++ biar paham sistem lebih dalam.',
      openBadge: 'Terbuka untuk magang', sayHi: 'Say Hi!', viewWork: 'Lihat karya', copyEmail: 'Salin email',
      meta: { location: 'Malang, Indonesia', focus: 'Kotlin Compose, Flutter', domain: 'divarvian.my.id' },
      metaLabels: { location: 'Lokasi', focus: 'Fokus', domain: 'Domain' },
      sideLabel: 'Saat ini', sideTitle: 'Kuliah di Malang', sideText: 'Mahasiswa Pendidikan Teknologi Informasi, FILKOM UB, aktif di Raion Community sebagai Mobile Engineer.',
      sideList: [{ k: 'Prodi', v: 'PTI, FILKOM UB' }, { k: 'Peran', v: 'Mobile Engineer' }, { k: 'Kota', v: 'Malang' }],
      sideNote: 'Terbuka untuk kolaborasi mobile.', viewProject: 'Lihat project →',
    },
    work: {
      eyebrow: 'Portfolio', title: 'Featured Projects', desc: 'Beberapa project yang aku kerjakan bareng tim, dari intern sampai hackjam.',
      bingoTag1: 'Raion Intern · Mobile Engineer', bingoTag2: 'Tim 2 Mobile Engineer',
      bingoTitle: 'BinGo', bingoText: 'Aku bikin antarmuka dan alur pakai Jetpack Compose, bareng satu Mobile Engineer lain. Fokus ke UI yang rapi dan nyaman dipakai.',
      bingoCheck: ['UI dan navigasi dengan Jetpack Compose', 'Kolaborasi lintas peran di tim', 'Struktur project yang rapi dan mudah dirawat'],
      bingoPill: 'Kotlin, Jetpack Compose', bingoNote: 'Repo internal Raion',
      visualCaption: 'Gambaran alur aplikasi',
      kawalTag: 'Raion Hackjam · 1 minggu', kawalTitle: 'Kawal.Z',
      kawalText: 'Dibuat dalam seminggu untuk Raion Hackjam. Satu tim berisi 3 orang: Product Manager, UI/UX, dan aku sebagai Mobile Engineer. Di sini aku pakai Flutter dari workshop Raion.',
      kawalPill: 'Flutter', kawalPillMuted: 'Workshop Raion',
      kawalList: ['Product Manager · arah dan scope', 'UI/UX · alur dan desain', 'Mobile Engineer · implementasi Flutter'],
    },
    activity: { eyebrow: 'Aktivitas', title: 'Kontribusi GitHub', loading: 'Memuat kontribusi...', contributions: 'contributions in the last year', less: 'Less', more: 'More', retry: 'Coba lagi', openGithub: 'Buka GitHub', errorText: 'Gagal memuat data GitHub. Coba lagi atau buka profil langsung.' },
    stack: {
      eyebrow: 'Tech Stack', title: 'Skills & Technologies', desc: 'Teknologi yang aku pakai sehari-hari untuk bikin aplikasi yang modern dan enak dipakai.',
      mobileTitle: 'Mobile', mobileItems: [{ l: 'Kotlin, Jetpack Compose', r: 'UI dan navigasi' }, { l: 'Flutter, Dart', r: 'Dari workshop Raion' }],
      systemTitle: 'Sistem', systemItems: [{ l: 'Java', r: 'Android' }, { l: 'C++', r: 'Eksplorasi alur sistem' }],
      backendTitle: 'Backend & OS', backendItems: [{ l: 'Supabase', r: 'Backend project' }, { l: 'Fedora Linux', r: 'Daily driver' }],
      countLabel: '2 skills',
    },
    about: {
      eyebrow: 'Tentang', title: 'Kenapa betah di komunitas',
      p1: 'Aku enjoy bikin antarmuka yang modern, merhatiin detail, interaksi yang halus, dan UX yang nyaman. Selalu penasaran sama tools baru dan cara yang lebih baik buat bikin sesuatu.',
      p2: 'Di Raion belajarnya langsung praktik. Workshop jadi bekal hackjam, intern jadi latihan kerja bareng PM dan UI/UX. Aku betah ngulik sampai paham kenapa sesuatu jalan, baru dirapikan. Makanya senang di tim kecil, cepat coba dan cepat perbaiki.',
      links: { github: 'Lihat GitHub →', linkedin: 'Sapa di LinkedIn →' },
      cardLabel: 'Sekilas', cardItems: [{ dt: 'Prodi', dd: 'PTI, FILKOM UB' }, { dt: 'Komunitas', dd: 'Raion Community' }, { dt: 'Peran', dd: 'Mobile Engineer' }, { dt: 'Email', dd: 'divarvian@gmail.com', href: 'mailto:divarvian@gmail.com' }],
    },
    contact: { eyebrow: 'Available for work', title: 'Get In Touch', desc: 'Punya project di kepala atau cuma mau sapa? Feel free to reach out, aku terbuka untuk magang dan kolaborasi baru.', copyEmail: 'Salin email', copyOk: 'Alamat email tersalin', copyFail: 'Salin manual: divarvian@gmail.com' },
    uses: {
      eyebrow: 'Uses', title: 'Setup yang aku pakai', desc: 'Perangkat dan tools sehari-hari buat ngoding, kuliah, dan ngulik. Selalu Fedora.',
      mobileItems: [{ l: 'Kotlin, Jetpack Compose' }, { l: 'Flutter, Dart' }, { l: 'Java' }, { l: 'C++' }],
      backendItems: [{ l: 'Supabase' }, { l: 'Git' }],
    },
    footer: { note: 'Portfolio Diva Arviansyah, PTI FILKOM UB, Mobile Engineer di Raion Community. Dibuat pakai Astro.', pages: 'Halaman', links: 'Tautan', copyright: '© 2026 Diva Arviansyah. All rights reserved.', built: 'Dibuat dengan' },
    notFound: { badge: '404 — Halaman tidak ada', title: 'Nyasar ya', lead: 'Tautan yang kamu buka tidak ditemukan. Mungkin salah ketik atau halaman sudah dipindah. Balik ke beranda, atau langsung hubungi aku.', back: 'Kembali ke beranda', contact: 'Hubungi', orTry: 'Atau coba ke', sideTitle: 'Masih di sekitar sini', sideText: 'Portfolio Diva Arviansyah, PTI FILKOM UB, Mobile Engineer di Raion Community.', sideList: [{ k: 'Email', v: 'divarvian@gmail.com' }, { k: 'GitHub', v: 'github.com/divarvian' }, { k: 'Lokasi', v: 'Malang' }] },
  },
  en: {
    skip: 'Skip to content',
    nav: { work: 'Work', stack: 'Stack', about: 'About', contact: 'Contact', uses: 'Setup', github: 'GitHub', contactCta: 'Contact' },
    langLabel: 'ID',
    langAria: 'Switch to Indonesian',
    hero: {
      role: 'Mobile Engineer', sub: 'PTI FILKOM UB · Raion Community',
      lead: 'I enjoy building polished mobile interfaces. I care about details, smooth interactions, and comfortable UX. Day to day I use Kotlin with Jetpack Compose and Flutter, while diving into Java and C++ to understand systems more deeply.',
      openBadge: 'Open for internship', sayHi: 'Say Hi!', viewWork: 'View work', copyEmail: 'Copy email',
      meta: { location: 'Malang, Indonesia', focus: 'Kotlin Compose, Flutter', domain: 'divarvian.my.id' },
      metaLabels: { location: 'Location', focus: 'Focus', domain: 'Domain' },
      sideLabel: 'Now', sideTitle: 'Studying in Malang', sideText: 'Information Technology Education student at FILKOM UB, active in Raion Community as a Mobile Engineer.',
      sideList: [{ k: 'Program', v: 'ITE, FILKOM UB' }, { k: 'Role', v: 'Mobile Engineer' }, { k: 'City', v: 'Malang' }],
      sideNote: 'Open for mobile collaboration.', viewProject: 'View project →',
    },
    work: {
      eyebrow: 'Portfolio', title: 'Featured Projects', desc: 'A few projects I built with the team, from intern to hackjam.',
      bingoTag1: 'Raion Intern · Mobile Engineer', bingoTag2: 'Team of 2 Mobile Engineers',
      bingoTitle: 'BinGo', bingoText: 'I built the interface and flows with Jetpack Compose alongside another Mobile Engineer. Focused on clean and usable UI.',
      bingoCheck: ['UI and navigation with Jetpack Compose', 'Cross-role collaboration', 'Clean and maintainable project structure'],
      bingoPill: 'Kotlin, Jetpack Compose', bingoNote: 'Internal Raion repo',
      visualCaption: 'App flow preview',
      kawalTag: 'Raion Hackjam · 1 week', kawalTitle: 'Kawal.Z',
      kawalText: 'Built in one week for Raion Hackjam. A team of three: Product Manager, UI/UX, and me as Mobile Engineer. Here I used Flutter from the Raion workshop.',
      kawalPill: 'Flutter', kawalPillMuted: 'Raion Workshop',
      kawalList: ['Product Manager · direction and scope', 'UI/UX · flow and design', 'Mobile Engineer · Flutter implementation'],
    },
    activity: { eyebrow: 'Activity', title: 'GitHub Contributions', loading: 'Loading contributions...', contributions: 'contributions in the last year', less: 'Less', more: 'More', retry: 'Try again', openGithub: 'Open GitHub', errorText: 'Failed to load GitHub data. Try again or open the profile directly.' },
    stack: {
      eyebrow: 'Tech Stack', title: 'Skills & Technologies', desc: 'Technologies I use day to day to build modern, delightful apps.',
      mobileTitle: 'Mobile', mobileItems: [{ l: 'Kotlin, Jetpack Compose', r: 'UI and navigation' }, { l: 'Flutter, Dart', r: 'From Raion workshop' }],
      systemTitle: 'System', systemItems: [{ l: 'Java', r: 'Android' }, { l: 'C++', r: 'System exploration' }],
      backendTitle: 'Backend & OS', backendItems: [{ l: 'Supabase', r: 'Backend project' }, { l: 'Fedora Linux', r: 'Daily driver' }],
      countLabel: '2 skills',
    },
    about: {
      eyebrow: 'About', title: 'Why I enjoy the community',
      p1: 'I enjoy building modern interfaces, caring about details, smooth interactions, and comfortable UX. Always curious about new tools and better ways to build things.',
      p2: 'At Raion, learning is hands-on. Workshops become fuel for hackjams, and the intern program is practice working alongside PMs and UI/UX. I like digging in until I understand why something works, then cleaning it up. That is why I enjoy small teams: try fast and fix fast.',
      links: { github: 'View GitHub →', linkedin: 'Connect on LinkedIn →' },
      cardLabel: 'At a glance', cardItems: [{ dt: 'Program', dd: 'ITE, FILKOM UB' }, { dt: 'Community', dd: 'Raion Community' }, { dt: 'Role', dd: 'Mobile Engineer' }, { dt: 'Email', dd: 'divarvian@gmail.com', href: 'mailto:divarvian@gmail.com' }],
    },
    contact: { eyebrow: 'Available for work', title: 'Get In Touch', desc: 'Have a project in mind or just want to say hi? Feel free to reach out. I am open for internships and new collaborations.', copyEmail: 'Copy email', copyOk: 'Email copied', copyFail: 'Copy manually: divarvian@gmail.com' },
    uses: {
      eyebrow: 'Uses', title: 'My Setup', desc: 'Everyday tools for coding, studying, and tinkering. Fedora all the way.',
      mobileItems: [{ l: 'Kotlin, Jetpack Compose' }, { l: 'Flutter, Dart' }, { l: 'Java' }, { l: 'C++' }],
      backendItems: [{ l: 'Supabase' }, { l: 'Git' }],
    },
    footer: { note: 'Portfolio of Diva Arviansyah, PTI FILKOM UB, Mobile Engineer at Raion Community. Built with Astro.', pages: 'Pages', links: 'Links', copyright: '© 2026 Diva Arviansyah. All rights reserved.', built: 'Built with' },
    notFound: { badge: '404 — Page not found', title: 'Looks lost', lead: 'The link you opened was not found. Maybe a typo or the page was moved. Head back home or get in touch.', back: 'Back to home', contact: 'Contact', orTry: 'Or try', sideTitle: 'Still around here', sideText: 'Portfolio of Diva Arviansyah, PTI FILKOM UB, Mobile Engineer at Raion Community.', sideList: [{ k: 'Email', v: 'divarvian@gmail.com' }, { k: 'GitHub', v: 'github.com/divarvian' }, { k: 'Location', v: 'Malang' }] },
  },
} as const;
export type Ui = typeof ui[Lang];
