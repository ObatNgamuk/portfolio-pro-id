import projectNlp from "@/assets/project-nlp.jpg";
import projectData from "@/assets/project-data.jpg";
import projectMl from "@/assets/project-ml.jpg";
import projectWeb from "@/assets/project-web.jpg";

export const profile = {
  name: "Arya Pratama",
  title: "Mahasiswa Teknik Informatika | Data Analyst | NLP Enthusiast",
  tagline:
    "Saya membangun solusi berbasis data dan NLP untuk membantu organisasi mengubah teks dan angka menjadi keputusan yang berarti. Saat ini fokus pada analisis sentimen Bahasa Indonesia, machine learning, dan pengembangan web modern.",
  location: "Jakarta, Indonesia",
  email: "arya.pratama@example.com",
  github: "https://github.com/aryapratama",
  linkedin: "https://www.linkedin.com/in/aryapratama",
  availability: "Terbuka untuk magang & full-time mulai Q3 2026",
};

export const stats = [
  { label: "Proyek Selesai", value: "18+" },
  { label: "Sertifikasi", value: "12" },
  { label: "Pengalaman Organisasi", value: "5" },
  { label: "Teknologi Dikuasai", value: "20+" },
];

export type SkillCategory = {
  name: string;
  description: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    description: "Bahasa pemrograman utama untuk pengembangan dan analisis.",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript / TypeScript", level: 82 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    name: "Data Science",
    description: "Eksplorasi, analisis, dan pemodelan data terstruktur.",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Matplotlib / Seaborn", level: 80 },
    ],
  },
  {
    name: "Natural Language Processing",
    description: "Fokus penelitian pada NLP Bahasa Indonesia.",
    skills: [
      { name: "IndoBERT", level: 86 },
      { name: "IndoBERTweet", level: 82 },
      { name: "Sentiment Analysis", level: 88 },
      { name: "Text Classification", level: 85 },
    ],
  },
  {
    name: "Database",
    description: "Perancangan skema dan query untuk aplikasi produksi.",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    name: "Web Development",
    description: "Pengembangan antarmuka web modern dan responsif.",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3 / Tailwind", level: 88 },
      { name: "React", level: 84 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Machine Learning" | "NLP" | "Data Analysis" | "Web Development";
  summary: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  background: string;
  goal: string;
  dataset: string;
  methodology: string[];
  results: string[];
  challenges: string;
  lessons: string;
};

export const projects: Project[] = [
  {
    slug: "analisis-sentimen-indobert",
    title: "Analisis Sentimen Ulasan E-Commerce dengan IndoBERT",
    category: "NLP",
    summary:
      "Model klasifikasi sentimen tiga kelas untuk ulasan marketplace berbahasa Indonesia dengan akurasi 91%.",
    image: projectNlp,
    tech: ["Python", "PyTorch", "IndoBERT", "Hugging Face", "FastAPI"],
    github: "https://github.com/aryapratama/indobert-sentiment",
    demo: "https://sentimen-demo.example.com",
    background:
      "Tim produk e-commerce kesulitan menyaring puluhan ribu ulasan harian. Sentimen pelanggan tertinggal beberapa hari sehingga isu kualitas terlambat ditangani.",
    goal: "Membangun pipeline NLP end-to-end yang dapat mengklasifikasikan ulasan menjadi positif, netral, dan negatif secara real-time.",
    dataset:
      "20.000 ulasan marketplace berbahasa Indonesia, dikumpulkan dari sumber publik dan dilabeli ulang oleh 3 annotator independen dengan Cohen's Kappa 0.82.",
    methodology: [
      "Cleaning teks, normalisasi slang, dan penanganan emoji",
      "Fine-tuning IndoBERT base dengan strategi gradual unfreezing",
      "Evaluasi dengan stratified k-fold cross validation",
      "Deploy sebagai REST API menggunakan FastAPI dan Docker",
    ],
    results: [
      "Accuracy 91.2%, Macro F1 0.89",
      "Latensi inferensi rata-rata 120ms per request",
      "Mengurangi waktu triase ulasan tim CX dari 2 hari menjadi <1 jam",
    ],
    challenges:
      "Distribusi kelas tidak seimbang dan banyak campur kode Bahasa Indonesia–Inggris. Diatasi dengan oversampling terkontrol dan pre-processing slang dictionary.",
    lessons:
      "Kualitas anotasi jauh lebih menentukan performa dibanding kompleksitas model. Investasi pada data berkualitas tinggi memberi ROI paling besar.",
  },
  {
    slug: "dashboard-penjualan-retail",
    title: "Dashboard Penjualan Retail Multi-Cabang",
    category: "Data Analysis",
    summary:
      "Dashboard interaktif untuk memonitor 32 cabang retail dengan deteksi anomali penjualan otomatis.",
    image: projectData,
    tech: ["Python", "Pandas", "PostgreSQL", "Streamlit", "Plotly"],
    github: "https://github.com/aryapratama/retail-dashboard",
    background:
      "Manajemen retail mengandalkan laporan Excel bulanan yang lambat dan rawan kesalahan saat mengambil keputusan stok.",
    goal: "Menyediakan dashboard real-time dengan KPI per cabang serta peringatan dini saat penjualan menyimpang dari forecast.",
    dataset:
      "Transaksi POS 2 tahun (±4.5 juta baris) dari 32 cabang, terintegrasi melalui ETL harian.",
    methodology: [
      "Perancangan star schema di PostgreSQL",
      "ETL incremental dengan Airflow",
      "Forecasting baseline menggunakan Prophet",
      "Deteksi anomali berbasis Z-score dan IQR",
    ],
    results: [
      "Refresh data dari bulanan menjadi setiap 15 menit",
      "Akurasi forecast MAPE 7.4% pada level cabang",
      "Mengidentifikasi kebocoran stok senilai Rp420 juta dalam kuartal pertama",
    ],
    challenges:
      "Kualitas data POS tidak konsisten antar cabang. Diatasi dengan layer kontrak data dan validasi otomatis sebelum loading.",
    lessons:
      "Visualisasi yang baik harus didukung definisi metrik yang seragam. Glossary KPI adalah artefak yang sering terlupakan.",
  },
  {
    slug: "prediksi-churn-telco",
    title: "Prediksi Churn Pelanggan Telekomunikasi",
    category: "Machine Learning",
    summary:
      "Model klasifikasi churn dengan AUC 0.89 dan rekomendasi retensi berbasis SHAP.",
    image: projectMl,
    tech: ["Python", "Scikit-Learn", "XGBoost", "SHAP", "MLflow"],
    github: "https://github.com/aryapratama/telco-churn",
    background:
      "Provider telekomunikasi mengalami churn 18% per tahun tanpa pemahaman segmen mana yang paling rentan.",
    goal: "Memprediksi probabilitas churn 30 hari ke depan dan menjelaskan faktor pendorongnya untuk tim retensi.",
    dataset:
      "Data pelanggan 100.000 baris dengan 42 fitur perilaku, billing, dan demografis.",
    methodology: [
      "EDA dan feature engineering berbasis recency-frequency",
      "Benchmark Logistic Regression, Random Forest, XGBoost",
      "Hyperparameter tuning dengan Optuna",
      "Eksperimen tracking via MLflow",
    ],
    results: [
      "ROC-AUC 0.89, Recall kelas churn 0.81",
      "Top-3 driver: keluhan billing, downgrade paket, drop call",
      "Pilot kampanye retensi menurunkan churn 4.2 ppt",
    ],
    challenges:
      "Leakage dari fitur turunan billing. Diatasi dengan time-based split yang ketat.",
    lessons:
      "Model terbaik tidak berguna jika output tidak actionable. Integrasi SHAP membuat tim bisnis percaya pada rekomendasi model.",
  },
  {
    slug: "portfolio-website-react",
    title: "Sistem Manajemen Tugas Mahasiswa",
    category: "Web Development",
    summary:
      "Aplikasi web full-stack untuk manajemen tugas kuliah dengan notifikasi dan kolaborasi tim.",
    image: projectWeb,
    tech: ["React", "TypeScript", "Tailwind", "PostgreSQL", "Node.js"],
    github: "https://github.com/aryapratama/task-manager",
    demo: "https://tugaskita.example.com",
    background:
      "Mahasiswa kesulitan melacak deadline tugas yang tersebar di banyak grup chat dan platform LMS.",
    goal: "Menyediakan satu tempat terpusat untuk mengelola tugas, deadline, dan kolaborasi kelompok.",
    dataset: "Tidak menggunakan dataset eksternal — data pengguna real-time.",
    methodology: [
      "Riset pengguna dengan 12 mahasiswa lintas jurusan",
      "Desain sistem komponen berbasis Tailwind",
      "Implementasi API REST dengan Node.js & PostgreSQL",
      "Testing E2E dengan Playwright",
    ],
    results: [
      "Dipakai oleh 240+ mahasiswa di tiga fakultas",
      "Rata-rata waktu setup tugas turun dari 5 menit menjadi 40 detik",
      "NPS 62 pada survey pengguna pertama",
    ],
    challenges:
      "Sinkronisasi real-time antar anggota tim. Diatasi dengan WebSocket dan optimistic UI updates.",
    lessons:
      "Iterasi cepat berbasis feedback nyata jauh lebih berharga dibanding fitur yang diasumsikan penting.",
  },
];

export const experiences = [
  {
    role: "Data Analyst Intern",
    org: "PT Teknologi Nusantara",
    period: "Jun 2025 – Sep 2025",
    type: "Magang",
    responsibilities: [
      "Membangun pipeline ETL harian untuk data transaksi 30+ merchant",
      "Menyusun dashboard eksekutif yang dipakai dalam weekly review",
      "Berkolaborasi dengan tim produk untuk eksperimen A/B",
    ],
    achievements: [
      "Mempercepat refresh laporan 6x lipat",
      "Menemukan insight kategori produk yang menambah revenue 8%",
    ],
    tech: ["Python", "Airflow", "PostgreSQL", "Metabase"],
  },
  {
    role: "Research Assistant – NLP Lab",
    org: "Laboratorium AI Kampus",
    period: "Feb 2025 – Sekarang",
    type: "Proyek Akademik",
    responsibilities: [
      "Riset fine-tuning IndoBERT untuk klasifikasi multi-label",
      "Menyusun dataset internal beranotasi 15.000 dokumen",
      "Mempresentasikan hasil pada seminar internal bulanan",
    ],
    achievements: [
      "Co-author 1 paper yang submit ke konferensi nasional",
      "Memenangkan hibah riset internal kampus",
    ],
    tech: ["Python", "PyTorch", "Hugging Face", "Weights & Biases"],
  },
  {
    role: "Ketua Divisi Riset & Pengembangan",
    org: "Himpunan Mahasiswa Teknik Informatika",
    period: "Sep 2024 – Agt 2025",
    type: "Organisasi",
    responsibilities: [
      "Memimpin tim 8 orang untuk program studi banding",
      "Mengelola roadmap kegiatan akademik tahunan",
      "Memfasilitasi mentoring antar angkatan",
    ],
    achievements: [
      "Meluncurkan program mentoring yang diikuti 120 mahasiswa",
    ],
    tech: ["Notion", "Figma", "Public Speaking"],
  },
  {
    role: "Freelance Web Developer",
    org: "Berbagai Klien UMKM",
    period: "Jan 2024 – Sekarang",
    type: "Freelance",
    responsibilities: [
      "Membangun landing page dan company profile untuk UMKM",
      "Optimasi SEO dan performance Lighthouse",
      "Maintenance dan training pemilik bisnis",
    ],
    achievements: [
      "Menyelesaikan 9 proyek dengan rating 5/5",
    ],
    tech: ["React", "Tailwind", "Vite", "Vercel"],
  },
  {
    role: "Koordinator Acara Tech Fair",
    org: "Kepanitiaan Fakultas",
    period: "Mar 2024 – Jun 2024",
    type: "Kepanitiaan",
    responsibilities: [
      "Mengkoordinasi 25 panitia lintas divisi",
      "Mengundang 6 perusahaan teknologi sebagai sponsor",
    ],
    achievements: ["Acara dihadiri 600+ peserta, oversubscribed 30%"],
    tech: ["Project Management", "Sponsorship"],
  },
];

export const certifications = [
  { name: "IBM Data Science Professional Certificate", issuer: "Coursera × IBM", date: "Agt 2025", category: "Data Science", credential: "ABCD-1234", url: "#" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", date: "Mei 2025", category: "Machine Learning", credential: "TF-9876", url: "#" },
  { name: "Natural Language Processing Specialization", issuer: "DeepLearning.AI", date: "Mar 2025", category: "Artificial Intelligence", credential: "NLP-5512", url: "#" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2025", category: "Cloud Computing", credential: "AWS-CP-7781", url: "#" },
  { name: "Python for Everybody", issuer: "University of Michigan", date: "Okt 2024", category: "Programming", credential: "PY4E-2024", url: "#" },
  { name: "SQL for Data Science", issuer: "UC Davis", date: "Sep 2024", category: "Data Science", credential: "SQL-3344", url: "#" },
  { name: "Machine Learning A-Z", issuer: "Udemy", date: "Jul 2024", category: "Machine Learning", credential: "ML-AZ-8821", url: "#" },
  { name: "Google Data Analytics Certificate", issuer: "Google", date: "Apr 2024", category: "Data Science", credential: "GDA-1122", url: "#" },
];

export const timeline = [
  { year: "2023", title: "Memulai Kuliah Teknik Informatika", desc: "Diterima sebagai mahasiswa Teknik Informatika dan mulai mendalami fondasi pemrograman." },
  { year: "2024", title: "Fokus pada Data & Web", desc: "Menyelesaikan sertifikasi Google Data Analytics dan mulai freelance web development." },
  { year: "2025", title: "Riset NLP & Magang", desc: "Bergabung dengan NLP Lab kampus dan menjalani magang sebagai Data Analyst." },
  { year: "2026", title: "Persiapan Karier Profesional", desc: "Membangun portofolio dan studi kasus untuk peluang full-time di industri teknologi." },
];

export const testimonials = [
  {
    name: "Dr. Sinta Wijaya",
    role: "Dosen Pembimbing — NLP Lab",
    quote:
      "Arya menunjukkan kombinasi langka antara kemampuan teknis yang kuat, rasa ingin tahu yang tinggi, dan kemampuan komunikasi yang sangat baik kepada tim non-teknis.",
  },
  {
    name: "Rudi Hartanto",
    role: "Engineering Manager — PT Teknologi Nusantara",
    quote:
      "Selama magang, Arya cepat beradaptasi dengan kompleksitas pipeline data kami dan memberikan kontribusi nyata terhadap keputusan bisnis tim.",
  },
];
