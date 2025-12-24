import React from "react";
import Image from "next/image";
import HeroPage from "@/components/HeroPage";

const ARTICLE = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue.",
  dateText: "Minggu, 6 Juli 2025",
  viewsText: "Dilihat xxx kali",
  coverImage: {
    src: "/foto_artikel.png",
    alt: "Gambar artikel",
    caption: "Deskripsi gambar",
  },
  content: `KABUPATEN BANDUNG – Pemerintah Kabupaten Bandung menggelar pelantikan 7.550 Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) Paruh Waktu pada hari Senin, 8 Desember 2025. Pelantikan ini berlangsung di Lapangan Upakarti, Soreang dan menjadi bukti komitmen Pemkab Bandung dalam memperkuat pengelolaan pemerintah daerah. Bupati Bandung, Dadang Supriatna dalam sambutannya mengungkapkan rasa syukur dan optimisme terhadap para PPPK Paruh Waktu yang baru saja dilantik.

"Hari ini, bapak/ibu wajib bersyukur kepada Allah SWT dan kedua orang tua bapak/ibu karena berkat restu mereka, kita bisa hadir di sini. Perlu saya sampaikan, perjuangan ini belum selesai. Kami, Pemerintah Kabupaten Bandung berkomitmen untuk memperjuangkan bapak/ibu semua agar bisa menjadi PPPK penuh, sesuai dengan rencana yang telah kami sampaikan kepada Kemenpan-RB dan BKN," ujar Kang DS, sapaan akrab orang nomor satu di Kabupaten Bandung ini. Kata-kata Kang DS yang penuh harapan ini disambut dengan tepuk tangan meriah dari para peserta pelantikan. Hal ini menandakan dukungan para peserta terhadap komitmen Pemkab Bandung untuk memperjuangkan hak mereka. Namun, Kang DS juga menyoroti kekhawatiran yang lebih besar terhadap potensi kekurangan ASN di masa depan. Jika dalam lima tahun ke depan tidak ada rekrutmen CPNS atau penetapan PPPK menjadi PNS maka jumlah PNS di Kabupaten Bandung bisa berkurang drastis menjadi hanya sekitar 650 orang.`,
};

const IsiArtikel = () => {
  return (
    <div className="bg-white">
      <HeroPage
        backgroundSrc="/heropage.png"
        backgroundAlt="Artikel"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Selengkapnya" },
        ]}
        title={ARTICLE.title}
      />

      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12 text-black">
        <div className="mx-auto max-w-6xl flex flex-col gap-6 sm:gap-7">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 sm:gap-8 text-[#4B4B4B] text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <Image src="/clock.png" width={18} height={18} alt="" className="sm:w-5 sm:h-5" />
              {ARTICLE.dateText}
            </span>

            <span className="flex items-center gap-2">
              <Image
                src="/eye_article.png"
                width={18}
                height={18}
                alt=""
                className="sm:w-5 sm:h-5"
              />
              {ARTICLE.viewsText}
            </span>
          </div>

          {/* Cover image + caption */}
          <div className="flex flex-col gap-3">
            <Image
              src={ARTICLE.coverImage.src}
              alt={ARTICLE.coverImage.alt}
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <div className="text-center text-[#4B4B4B] text-xs sm:text-sm lg:text-base">
              {ARTICLE.coverImage.caption}
            </div>
          </div>

          {/* Content */}
          <article className="whitespace-pre-line text-justify text-black text-sm sm:text-base leading-relaxed">
            {ARTICLE.content}
          </article>
        </div>
      </section>
    </div>
  );
};

export default IsiArtikel;
