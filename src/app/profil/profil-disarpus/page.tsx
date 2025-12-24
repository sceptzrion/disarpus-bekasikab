import Link from "next/link";

export default function ProfilDisarpusPage() {
  return (
    <main className="bg-white px-20 py-12  mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#1895A2]">
          Beranda
        </Link>
        {" / "}
        <Link href="/profil" className="hover:text-[#1895A2]">
          Profil
        </Link>
        {" / "}
        <span className="text-[#012970] font-medium">Profil DISARPUS</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#1895A2] text-center mb-10">
        PROFIL DINAS ARSIP DAN PERPUSTAKAAN
        <br />
        KABUPATEN BEKASI
      </h1>

      {/* Pendahuluan */}
      <section className="mb-10 text-gray-700 leading-relaxed text-justify">
        <p>
          Dinas Arsip dan Perpustakaan Kabupaten Bekasi memiliki peran pokok
          dalam penyelenggaraan urusan pemerintahan di bidang kearsipan dan
          perpustakaan, serta mendukung urusan pemerintahan lainnya yang
          berkaitan dengan pengelolaan informasi, pelestarian arsip, dan
          peningkatan budaya literasi masyarakat.
        </p>
      </section>

      {/* Dasar Hukum */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-[#1895A2] mb-4">
          Dasar Hukum dan Kewenangan
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Sebagaimana diatur dalam Peraturan Bupati Kabupaten Bekasi Nomor 92
          Tahun 2021 tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi
          Dinas Arsip dan Perpustakaan Kabupaten Bekasi, pada Pasal 2 ayat (1)
          dijelaskan bahwa Dinas Arsip dan Perpustakaan Kabupaten Bekasi
          menyelenggarakan urusan pemerintahan di bidang kearsipan dan
          perpustakaan, serta menunjang urusan pemerintahan lainnya sesuai
          ketentuan peraturan perundang-undangan.
        </p>
      </section>

      {/* Kewenangan */}
      <section className="space-y-8">
        {/* Kearsipan */}
        <div>
          <h3 className="text-lg font-semibold text-[#1895A2] mb-3">
            1. Bidang Kearsipan
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Pengelolaan arsip dinamis.</li>
            <li>
              Pembinaan kearsipan pada perangkat daerah dan instansi terkait.
            </li>
            <li>Pengelolaan arsip statis dan layanan informasi kearsipan.</li>
            <li>Pelaksanaan pengawasan kearsipan daerah.</li>
            <li>Penyelamatan, pelestarian, dan penyusutan arsip.</li>
          </ul>
        </div>

        {/* Perpustakaan */}
        <div>
          <h3 className="text-lg font-semibold text-[#1895A2] mb-3">
            2. Bidang Perpustakaan
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Pengembangan perpustakaan dan budaya literasi masyarakat.</li>
            <li>Pengelolaan perpustakaan daerah dan layanan sirkulasi.</li>
            <li>Peningkatan akses layanan melalui perpustakaan keliling.</li>
            <li>
              Pengembangan koleksi, layanan digital, dan literasi informasi.
            </li>
          </ul>
        </div>

        {/* Penunjang */}
        <div>
          <h3 className="text-lg font-semibold text-[#1895A2] mb-3">
            3. Urusan Penunjang Lainnya
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Pengelolaan perencanaan, evaluasi, ketatausahaan, dan kehumasan.
            </li>
            <li>Pengelolaan sumber daya manusia, keuangan, dan aset dinas.</li>
            <li>
              Koordinasi dengan instansi pemerintah pusat, provinsi, dan lembaga
              terkait.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
