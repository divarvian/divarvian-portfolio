export function generateCV(lang: string){
  // @ts-ignore
  var jsPDF = window.jspdf && window.jspdf.jsPDF ? window.jspdf.jsPDF : null;
  if(!jsPDF) throw new Error('jspdf not loaded');
  var isEn = lang === 'en';
  var doc = new jsPDF({ unit: 'mm', format: 'a4' });
  var W = 210, H = 297, M = 15, usable = W - M*2;
  var y = 12, lineH = 3.8;

  function ensure(h: number){
    if(y + h > H - 12){
      doc.addPage();
      y = 12;
    }
  }
  function textBlock(txt: string, size: number, style: string, color: number[], gap: number, align?: any){
    doc.setFont('helvetica', style as any);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    var lines = doc.splitTextToSize(txt, usable);
    ensure(lines.length * gap + 1);
    doc.text(lines, M, y, align ? { align: align } : undefined as any);
    y += lines.length * gap + (style === 'bold' ? 0.5 : 0);
  }
  function section(title: string){
    ensure(10);
    y += 2.5;
    doc.setDrawColor(194,65,12);
    doc.setLineWidth(0.45);
    doc.line(M, y, W - M, y);
    y += 4;
    doc.setFont('helvetica','bold'); doc.setFontSize(7);
    doc.setTextColor(194,65,12);
    doc.text(title.toUpperCase(), M, y);
    y += 4.2;
    doc.setDrawColor(232,228,221);
    doc.setLineWidth(0.22);
    doc.line(M, y, W - M, y);
    y += 4;
  }
  function item(title: string, sub: string, date: string, bullets: string[]){
    ensure(10);
    doc.setFont('helvetica','bold'); doc.setFontSize(9);
    doc.setTextColor(20,24,30);
    doc.text(title, M, y);
    var dateW = doc.getTextWidth(date);
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5);
    doc.setTextColor(94,92,88);
    doc.text(date, W - M - dateW, y);
    y += 3.6;
    if(sub){
      doc.setFont('helvetica','italic'); doc.setFontSize(7.5);
      doc.setTextColor(94,92,88);
      var subLines = doc.splitTextToSize(sub, usable);
      ensure(subLines.length * 3.2 + 1);
      doc.text(subLines, M, y);
      y += subLines.length * 3.2 + 1;
    }
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5);
    doc.setTextColor(43,50,59);
    bullets.forEach(function(b){
      var bul = '•  ' + b;
      var lines = doc.splitTextToSize(bul, usable - 3);
      ensure(lines.length * 3.2 + 0.5);
      doc.text(lines, M + 2, y);
      y += lines.length * 3.2 + 0.5;
    });
    y += 1.5;
  }

  var profileTitle = isEn ? 'PROFILE' : 'PROFIL';
  var expTitle = isEn ? 'EXPERIENCE' : 'PENGALAMAN';
  var eduTitle = isEn ? 'EDUCATION' : 'PENDIDIKAN';
  var stackTitle = isEn ? 'TECH STACK' : 'TEKNOLOGI';
  var langTitle = isEn ? 'LANGUAGES' : 'BAHASA';
  var contactTitle = isEn ? 'CONTACT' : 'KONTAK';

  doc.setFont('helvetica','bold'); doc.setFontSize(20);
  doc.setTextColor(20,24,30);
  doc.text('DIVA ARVIANSYAH', M, y); y += 5.2;
  doc.setFont('helvetica','normal'); doc.setFontSize(9);
  doc.setTextColor(194,65,12);
  doc.text('Mobile Engineer', M, y); y += 3.2;
  doc.setFont('helvetica','normal'); doc.setFontSize(7.2);
  doc.setTextColor(94,92,88);
  doc.text('Malang, Indonesia  |  divarvian@gmail.com  |  github.com/divarvian  |  linkedin.com/in/divarvian  |  divarvian.my.id', M, y);
  y += 2.8;
  doc.setDrawColor(232,228,221); doc.setLineWidth(0.3);
  doc.line(M, y, W - M, y); y += 4;

  section(profileTitle);
  textBlock(
    isEn
      ? 'Mobile Engineer and Information Technology Education student at FILKOM UB, active in Raion Community. Daily work with Kotlin and Jetpack Compose and Flutter, with focus on polished UI, type safe navigation, and modular architecture. Comfortable working with PM and UI/UX in small teams.'
      : 'Mobile Engineer dan mahasiswa Pendidikan Teknologi Informasi FILKOM UB, aktif di Raion Community. Sehari hari menggunakan Kotlin dengan Jetpack Compose dan Flutter, fokus pada UI yang rapi, navigasi type safe, dan arsitektur modular. Nyaman bekerja bersama PM dan UI/UX dalam tim kecil.',
    7.5, 'normal', [43,50,59], 3.25
  );

  section(expTitle);
  item(
    'BinGo ' + (isEn ? '- Raion Intern, Mobile Engineer' : '- Raion Intern, Mobile Engineer'),
    'Kotlin, Jetpack Compose  |  ' + (isEn ? 'Team of 2 Mobile Engineers' : 'Tim 2 Mobile Engineer'),
    '2025',
    isEn ? [
      'Built core interface and flows with Jetpack Compose, including 4 main flows with type safe navigation.',
      'Implemented gamification with XP, coins, and level progression for elementary school users.',
      'Collaborated daily with PM and UI/UX and maintained a modular project structure.'
    ] : [
      'Membangun antarmuka dan alur utama dengan Jetpack Compose, termasuk 4 alur utama dengan navigasi type safe.',
      'Menerapkan gamifikasi XP, koin, dan level untuk pengguna usia Sekolah Dasar.',
      'Kolaborasi harian dengan PM dan UI/UX serta menjaga struktur project yang modular.'
    ]
  );
  item(
    'Kawal.Z ' + (isEn ? '- Raion Hackjam 2026, Mobile Engineer - Best Implementation' : '- Raion Hackjam 2026, Mobile Engineer - Best Implementation'),
    'Flutter, Dart  |  ' + (isEn ? 'Team: PM, UI/UX, Mobile Engineer' : 'Tim: PM, UI/UX, Mobile Engineer'),
    '2026',
    isEn ? [
      'Built an app for Indonesian Gen Z to understand and track public policy, with AI TLDR summaries and gamification.',
      'Implemented interactive voting, leaderboard, and 4 issue categories: social, economic, legal, and political.',
      'Delivered a demo ready app within one week from idea to implementation.'
    ] : [
      'Membangun aplikasi untuk Gen Z Indonesia memahami dan mengawal kebijakan publik dengan ringkasan AI TLDR dan gamifikasi.',
      'Menerapkan voting interaktif, leaderboard, dan 4 kategori isu: sosial, ekonomi, hukum, dan politik.',
      'Menyelesaikan aplikasi siap demo dalam satu minggu dari ide hingga implementasi.'
    ]
  );

  section(eduTitle);
  item(
    isEn ? 'Universitas Brawijaya - FILKOM, Information Technology Education' : 'Universitas Brawijaya - FILKOM, Pendidikan Teknologi Informasi',
    isEn ? 'Active in Raion Community as Mobile Engineer' : 'Aktif di Raion Community sebagai Mobile Engineer',
    '2023 - ' + (isEn ? 'Present' : 'Sekarang'),
    []
  );

  section(stackTitle);
  var stacks = [
    'Kotlin, Jetpack Compose, Flutter, Dart, Java, C++',
    'JavaScript, Laravel, Go, Astro, Supabase',
    'MySQL, PostgreSQL, Git, Android Studio, VS Code, Figma',
    'Fedora Linux'
  ];
  doc.setFont('helvetica','normal'); doc.setFontSize(7.5);
  doc.setTextColor(43,50,59);
  stacks.forEach(function(s){
    var lines = doc.splitTextToSize('•  ' + s, usable - 3);
    ensure(lines.length * 3.2 + 0.5);
    doc.text(lines, M + 2, y);
    y += lines.length * 3.2 + 0.5;
  });
  y += 1;

  section(langTitle);
  textBlock(isEn ? 'Indonesian: Native  |  English: Professional working proficiency' : 'Indonesia: Penutur asli  |  Inggris: Mahir profesional', 7.5, 'normal', [43,50,59], 3.2);

  section(contactTitle);
  var contacts = [
    'Email: divarvian@gmail.com',
    'GitHub: github.com/divarvian',
    'LinkedIn: linkedin.com/in/divarvian',
    'Website: divarvian.my.id',
    'Location: Malang, Indonesia'
  ];
  doc.setFont('helvetica','normal'); doc.setFontSize(7.5);
  doc.setTextColor(43,50,59);
  contacts.forEach(function(c){
    var lines = doc.splitTextToSize(c, usable);
    ensure(lines.length * 3.2 + 0.5);
    doc.text(lines, M, y);
    y += lines.length * 3.2 + 0.5;
  });

  var pad = 6;
  var footY = H - 7;
  doc.setFillColor(253,252,248);
  doc.rect(0, H - 10, W, 10, 'F');
  doc.setFont('helvetica','normal'); doc.setFontSize(6.2);
  doc.setTextColor(140,138,135);
  doc.text('Generated from divarvian.my.id  |  ' + new Date().toISOString().slice(0,10), M, footY);

  return doc;
}
