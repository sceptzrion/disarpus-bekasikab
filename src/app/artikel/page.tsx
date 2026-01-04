import HeroPage from "@/components/HeroPage";
import ArticleCardPage from "@/components/ArticleCardPage";
import Link from "next/link";

const BREADCRUMBS = [
  { label: "Beranda", href: "/" },
  { label: "Berita & Artikel" },
];

const ARTICLES = [
  {
    image: "/foto_artikel.png",
    date: "Minggu, 6 Juli 2025",
    title:
      "Meutya Viada Hafid, lulusan New South Wales University (2001) S1 Bidang Manufacturing Engineering",
    excerpt:
      "Meutya Viada Hafid memulai karier sebagai jurnalis sebelum terjun ke dunia politik. Pernah menjabat sebagai Ketua Komisi I DPR RI dan terus berkontribusi dalam bidang pertahanan negara...",
    category: "Sidang/Agenda",
    href: "/artikel/isi-artikel",
  },
  {
    image: "/berita1.jpeg",
    date: "Minggu, 6 Juli 2025",
    title:
      "Pertemuan penting membahas strategi peningkatan pelayanan publik di Kabupaten Bekasi",
    excerpt:
      "Pertemuan ini dihadiri oleh berbagai unsur pimpinan daerah yang berkomitmen meningkatkan kualitas layanan masyarakat berbasis digital serta memperkuat tata kelola pemerintahan...",
    category: "Pengumuman",
    href: "/artikel/isi-artikel",
  },
];

export default function BeritaPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        backgroundSrc="/heropage.png"
        backgroundAlt="Berita dan Artikel"
        breadcrumbs={BREADCRUMBS}
        title="BERITA DAN ARTIKEL"
      />

      {/* CONTENT */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-8">
          {/* Search */}
          <div className="w-full">
            <div className="flex items-center border border-[#44AD6C] rounded-full px-6 py-2 shadow-md ">
              <input
                placeholder="Cari berdasarkan judul..."
                className="flex-1 bg-transparent text-black placeholder-[#ABB7C2] outline-none text-sm"
              />
              <button className="p-2 rounded-full cursor-pointer bg-[#44AD6C] text-white">
                <img src="search.png" className="w-5 h-5" alt="" />
              </button>
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-6">
            {ARTICLES.map((a, i) => (
              <ArticleCardPage key={i} {...a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
