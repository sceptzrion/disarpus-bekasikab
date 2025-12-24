import HeroPage from "@/components/HeroPage";

const BREADCRUMBS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "#" },
  { label: "Visi dan Misi" },
];

const VISION_MAIN =
  "MEWUJUDKAN KABUPATEN BEKASI YANG MERDEKA,BERSATU,BERDAULAT ADIL DAN MAKMUR, YANG TERCANTUM DALAM PEMBUKAAN UUD NEGARA REPUBLIK INDONESIA TAHUN 1945 MENUJU KABUPATEN BEKASI BANGKIT, MAJU DAN SEJAHTERA.";

const VISION_POINTS = [
  {
    label: "BANGKIT (Bangkitkan Potensi Daerah)",
    description:
      "Kabupaten Bekasi memiliki kekuatan besar di sektor industri, perdagangan, pertanian dan pesisir. Dengan optimalisasi sumber daya yang ada, daerah ini siap berkembang lebih pesat melalui inovasi dan sinergi semua pihak. Tindakan aktif dan proaktif dari pemerintah yang berawal dari keyakinan untuk membangun dan membangkitkan seluruh potensi yang ada agar berdaya guna untuk pembangunan dan kesejahteraan masyarakat Kabupaten Bekasi.",
  },
  {
    label: "MAJU (Memajukan Pembangunan Daerah)",
    description:
      "Pembangunan yang merata menjadi kunci untuk menjadikan Kabupaten Bekasi sebagai daerah maju. Infrastruktur modern, layanan publik berkualitas, serta tata kelola pemerintahan yang transparan dan optimalisasi pendapatan asli daerah menjadi fokus utama memajukan Bekasi. Kewajiban untuk mewujudkan dan meningkatkan kemajuan pembangunan yang merata dan berkeadilan, serta mewujudkan kemajuan sumber daya manusia Kabupaten Bekasi yang inovatif, unggul dan berdaya saing tinggi.",
  },
  {
    label: "SEJAHTERA (Sejahterakan Masyarakatnya)",
    description:
      "Setiap kebijakan dan program pembangunan diarahkan untuk meningkatkan kesejahteraan masyarakat. Pendidikan yang lebih baik, akses kesehatan yang mudah, serta lapangan kerja yang luas akan menciptakan kehidupan yang lebih sejahtera. Berkomitmen untuk meningkatkan kesejahteraan masyarakat secara lahir dan batin. Kesejahteraan yang dimaksud adalah sejahtera yang berbasis pada ketahanan pangan, sandang, papan, pendidikan, budaya, olahraga, kesehatan, pekerjaan/penghidupan yang layak, jaminan sosial, serta perlindungan hukum dan HAM.",
  },
];

const MISSIONS = [
  "MEWUJUDKAN SUMBER DAYA MANUSIA YANG BERKUALITAS DAN BERDAYA SAING",
  "MEWUJUDKAN KEMANDIRIAN EKONOMI DAERAH YANG TANGGUH DAN BERKEADILAN",
  "MEWUJUDKAN TATA KELOLA PEMERINTAHAN YANG BERSIH, AKUNTABEL DAN KOLABORATIF",
  "MEWUJUDKAN KETAHANAN KELUARGA, SOSIAL DAN BUDAYA YANG INKLUSIF MELALUI PENGUATAN NILAI-NILAI LOKAL MASYARAKAT DAN INTEGRITAS SOSIAL YANG HARMONIS",
  "PEMBANGUNAN INFRASTRUKTUR YANG BERKUALITAS, MERATA, BERKEADILAN DAN BERWAWASAN LINGKUNGAN",
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg sm:text-xl font-bold text-center text-[#1895A2] mb-6">
    {children}
  </h2>
);

export default function VisiMisiPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        backgroundSrc="/heropage.png"
        backgroundAlt="Visi dan Misi"
        breadcrumbs={BREADCRUMBS}
        title="VISI DAN MISI"
      />

      {/* CONTENT */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-10">
          {/* Subheading */}
          <header className="text-center">
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700">
              KABUPATEN BEKASI 2025 – 2029
            </p>
          </header>

          {/* VISI */}
          <section>
            <SectionTitle>VISI</SectionTitle>

            <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
              {VISION_MAIN}
            </p>

            <div className="flex flex-col gap-6">
              {VISION_POINTS.map((p) => (
                <div key={p.label} className="flex flex-col gap-2">
                  <p className="text-gray-700 text-center font-semibold text-sm sm:text-base">
                    {p.label}
                  </p>
                  <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* MISI */}
          <section>
            <SectionTitle>MISI</SectionTitle>

            <ul className="list-disc pl-5 sm:pl-6 space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              {MISSIONS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
