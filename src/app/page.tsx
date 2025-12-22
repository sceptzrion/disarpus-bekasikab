import QuickAccessCard from "../components/QuickAccessCard";
import ArticleCard from "../components/ArticleCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full  bg-white">
      {/* ================= BANNER FULL BLEED =================   */}
      <section className="">
        <img src="banner_disarpus.jpg" />
      </section>

      {/* ================= AKSES CEPAT ================= */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-[#1895A2]">AKSES CEPAT</h1>
            <p className="mt-2  text-lg text-gray-600">
              Agenda dan jadwal kegiatan resmi kegiatan Pemerintah Kabupaten
              Bekasi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            <QuickAccessCard
              title="Informasi Layanan"
              subtitle="Dinas Perpustakaan dan Arsip"
            />
            <QuickAccessCard
              title="Informasi Pengaduan"
              subtitle="Dinas Perpustakaan dan Arsip"
            />
            <QuickAccessCard
              title="Informasi Arsip"
              subtitle="Dinas Perpustakaan dan Arsip"
            />
          </div>
        </div>
      </section>

      {/* ================= BERITA & ARTIKEL ================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#1895A2]">
              Berita dan Artikel
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Agenda dan jadwal kegiatan resmi kegiatan Pemerintah Kabupaten
              Bekasi.
            </p>
          </div>

          {/* Box Artikel */}
          <div className="rounded-2xl bg-[#E9F6F7] p-8">
            <div className="mb-8 justify-items-center">
              <h2 className="text-2xl font-bold text-[#012970]">ARTIKEL</h2>
              <p className="text-gray-700">
                Lihat. Berita, Artikel & Press Release.
              </p>
            </div>

            {/* Grid Artikel */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ArticleCard
                title="Lorem Ipsum"
                views="Dilihat xx kali"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus."
              />
              <ArticleCard
                title="Lorem Ipsum"
                views="Dilihat xx kali"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus."
              />
              <ArticleCard
                title="Lorem Ipsum"
                views="Dilihat xx kali"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus."
              />
              <ArticleCard
                title="Lorem Ipsum"
                views="Dilihat xx kali"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus."
              />
              <ArticleCard
                title="Lorem Ipsum"
                views="Dilihat xx kali"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus."
              />
              <ArticleCard
                title="Lorem Ipsum"
                views="Dilihat xx kali"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula eu mauris id congue. Nam diam neque, consequat sodales elementum ut, laoreet in metus."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
