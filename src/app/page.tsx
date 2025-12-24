import Image from "next/image";
import QuickAccessCard from "../components/QuickAccessCard";
import ArticleCard from "../components/ArticleCard";

const QUICK_ACCESS = [
  { title: "Informasi Layanan", subtitle: "Dinas Perpustakaan dan Arsip" },
  { title: "Informasi Pengaduan", subtitle: "Dinas Perpustakaan dan Arsip" },
  { title: "Informasi Arsip", subtitle: "Dinas Perpustakaan dan Arsip" },
];

const ARTICLES = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: "Lorem Ipsum",
  views: "Dilihat xx kali",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus.",
}));

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-8 sm:mb-10 lg:mb-12">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1895A2]">
      {title}
    </h1>
    <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600">
      {description}
    </p>
  </div>
);

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white">
      {/* ================= BANNER ================= */}
      <section className="w-full">
        <Image
          src="/banner_disarpus.jpg"
          alt="Banner Dinas Perpustakaan dan Arsip Kabupaten Bekasi"
          width={1920}
          height={720}
          priority
          className="w-full h-auto"
        />
      </section>

      {/* ================= AKSES CEPAT ================= */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="AKSES CEPAT"
            description="Agenda dan jadwal kegiatan resmi kegiatan Pemerintah Kabupaten Bekasi."
          />

          <div className="grid grid-cols-1 gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
            {QUICK_ACCESS.map((item) => (
              <QuickAccessCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BERITA & ARTIKEL ================= */}
      <section className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Berita dan Artikel"
            description="Agenda dan jadwal kegiatan resmi kegiatan Pemerintah Kabupaten Bekasi."
          />

          <div className="rounded-2xl bg-[#E9F6F7] p-5 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#012970]">
                ARTIKEL
              </h2>
              <p className="mt-1 text-sm sm:text-base text-gray-700">
                Lihat. Berita, Artikel &amp; Press Release.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
              {ARTICLES.map((a) => (
                <ArticleCard
                  key={a.id}
                  title={a.title}
                  views={a.views}
                  excerpt={a.excerpt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
