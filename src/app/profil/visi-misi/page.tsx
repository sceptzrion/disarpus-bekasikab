import Link from "next/link";

export default function VisiMisiPage() {
  return (
    <main className="  px-32 py-12  bg-white">
      {/* Breadcrumb */}
      {/*<nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#1895A2]">
          Beranda
        </Link>
        {" / "}
        <Link href="/profil" className="hover:text-[#1895A2]">
          Profil
        </Link>
        {" / "}
        <span className="text-[#012970] font-medium">Visi dan Misi</span>
      </nav>

      {/* Title */}
      <header className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1895A2]">
          VISI DAN MISI
        </h1>
        <p className="mt-2 text-lg font-semibold text-gray-700">
          KABUPATEN BEKASI 2025 – 2029
        </p>
      </header>

      {/* VISI */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-center text-[#1895A2] mb-6">
          VISI
        </h2>

        <p className="text-gray-700 text-center leading-relaxed mb-5">
          MEWUJUDKAN KABUPATEN BEKASI YANG MERDEKA,BERSATU,BERDAULAT ADIL DAN
          MAKMUR, YANG TERCANTUM DALAM PEMBUKAAN UUD NEGARA REPUBLIK INDONESIA
          TAHUN 1945 MENUJU KABUPATEN BEKASI BANGKIT, MAJU DAN SEJAHTERA.
        </p>

        <p className="text-gray-700 text-center font-semibold leading-relaxed mb-0.5">
          BANGKIT (Bangkitkan Potensi Daerah)
        </p>

        <p className="text-gray-700 text-justify leading-relaxed mb-4">
          Kabupaten Bekasi memiliki kekuatan besar di sektor industri,
          perdagangan, pertanian dan pesisir. Dengan optimalisasi sumber daya
          yang ada, daerah ini siap berkembang lebih pesat melalui inovasi dan
          sinergi semua pihak Tindakan aktif dan proaktif dari (Pemerintah) vang
          berawal dari keyakinan untuk membangun dan memBANGKITkan seluruh
          potensi yang ada agar berdaya guna untuk pembangunan dan kesejahteraan
          masyarakat Kabupaten Bekasi.
        </p>

        <p className="text-gray-700 text-center font-semibold leading-relaxed mb-0.5">
          MAJU ( Memajukan pembangunan Daerah )
        </p>

        <p className="text-gray-700 text-justify leading-relaxed mb-4">
          Pembangunan yang merata menjadi kunci untuk menjadikan Kabupaten
          Bekasi sebagai daerah maju, infrastruktur modern layanan
          publicberkualitas, serta tata kelola pemerintahan yang transparan
          serta optimalisasi pendapatan asli daerah menjadi focus utama
          memajukan Bekasi Kewajiban untuk mewujudkan dan meningkatkan keMAJUan
          pembangunan yang merata dan berkeadilan, serta mewujudkan keMAJUan
          sumber daya manusia Kabupaten Bekasi yang inovatif, unggul dan berdaya
          saing tinggi.
        </p>

        <p className="text-gray-700 text-center font-semibold leading-relaxed mb-0.5">
          SEJAHTERA ( Sejahterakan Masyarakatnya )
        </p>

        <p className="text-gray-700 text-justify leading-relaxed mb-4">
          Setiap kebijakan dan program pembangaunan diarahkan untuk meningkatkan
          kesejahteraan masyarakat. Pendidikan yang lebih baik, akses kesehatan
          yang mudah, serta lapangan kerja yang luas akan menciptakan kehidupan
          yang lebih sejahtera Berkomitmen untuk meningkatkan keSEJAHTERAan
          masyarakat secara lahir dan batin. KeSEJAHTERAan yang dimaksud adalah
          SEJAHTERA yang berbasis pada ketahanan pangan, sandang, papan,
          pendidikan, budaya, olahraga, kesehatan, pekerjaan penghidupan yang
          layak jaminan sosial, serta perlindungan hukum dan HAM
        </p>
      </section>

      {/* MISI */}
      <section>
        <h2 className="text-xl font-bold text-center text-[#1895A2] mb-6">
          MISI
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
          <li>
            MEWUJUDKAN SUMBER DAYA MANUSIA YANG BERKUALITAS DAN BERDAYA SAING
          </li>
          <li>
            MEWUJUDKAN KEMANDIRIAN EKONOMI DAERAH YANG TANGGUH DAN BERKEADILAN
          </li>
          <li>
            MEWUJUDKAN TATA KELOLA PEMERINTAHAN YANG BERSIH, AKUNTABEL DAN
            KOLABORATIF
          </li>
          <li>
            MEWUJUDKAN KETAHANAN KELUARGA, SOSIAL DAN BUDAYA YANG INKLUSIF
            MELALUI PENGEUATAN NILAI-NILAI LOKAL MASYARAKAT DAN INTEGRITAS
            SOSIAL YANG HARMONIS
          </li>
          <li>
            PEMBANGUNAN INFRASTRUKTUR YANG BERKUALITAS, MERATA, BERKEADILAN DAN
            BERWAWASAN LINGKUNGAN
          </li>
        </ul>
      </section>
    </main>
  );
}
