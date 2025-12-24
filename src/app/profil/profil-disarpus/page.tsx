import HeroPage from "@/components/HeroPage";

const BREADCRUMBS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Profil DISARPUS" },
];

const AUTHORITY_GROUPS = [
  {
    title: "1. Bidang Kearsipan",
    items: [
      "Pengelolaan arsip dinamis.",
      "Pembinaan kearsipan pada perangkat daerah dan instansi terkait.",
      "Pengelolaan arsip statis dan layanan informasi kearsipan.",
      "Pelaksanaan pengawasan kearsipan daerah.",
      "Penyelamatan, pelestarian, dan penyusutan arsip.",
    ],
  },
  {
    title: "2. Bidang Perpustakaan",
    items: [
      "Pengembangan perpustakaan dan budaya literasi masyarakat.",
      "Pengelolaan perpustakaan daerah dan layanan sirkulasi.",
      "Peningkatan akses layanan melalui perpustakaan keliling.",
      "Pengembangan koleksi, layanan digital, dan literasi informasi.",
    ],
  },
  {
    title: "3. Urusan Penunjang Lainnya",
    items: [
      "Pengelolaan perencanaan, evaluasi, ketatausahaan, dan kehumasan.",
      "Pengelolaan sumber daya manusia, keuangan, dan aset dinas.",
      "Koordinasi dengan instansi pemerintah pusat, provinsi, dan lembaga terkait.",
    ],
  },
];

export default function ProfilDisarpusPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        backgroundSrc="/heropage.png"
        backgroundAlt="Profil DISARPUS"
        breadcrumbs={BREADCRUMBS}
        title="PROFIL DINAS ARSIP DAN PERPUSTAKAAN KABUPATEN BEKASI"
      />

      {/* CONTENT */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-8 sm:gap-10">
          {/* Pendahuluan */}
          <section className="text-gray-700 leading-relaxed text-justify">
            <p className="text-sm sm:text-base">
              Dinas Arsip dan Perpustakaan Kabupaten Bekasi memiliki peran pokok
              dalam penyelenggaraan urusan pemerintahan di bidang kearsipan dan
              perpustakaan, serta mendukung urusan pemerintahan lainnya yang
              berkaitan dengan pengelolaan informasi, pelestarian arsip, dan
              peningkatan budaya literasi masyarakat.
            </p>
          </section>

          {/* Dasar Hukum */}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1895A2]">
              Dasar Hukum dan Kewenangan
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              Sebagaimana diatur dalam Peraturan Bupati Kabupaten Bekasi Nomor
              92 Tahun 2021 tentang Kedudukan, Susunan Organisasi, Tugas dan
              Fungsi Dinas Arsip dan Perpustakaan Kabupaten Bekasi, pada Pasal 2
              ayat (1) dijelaskan bahwa Dinas Arsip dan Perpustakaan Kabupaten
              Bekasi menyelenggarakan urusan pemerintahan di bidang kearsipan
              dan perpustakaan, serta menunjang urusan pemerintahan lainnya
              sesuai ketentuan peraturan perundang-undangan.
            </p>
          </section>

          {/* Kewenangan */}
          <section className="flex flex-col gap-8">
            {AUTHORITY_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-[#1895A2]">
                  {group.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  {group.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
