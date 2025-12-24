import HeroPage from "@/components/HeroPage";
import Image from "next/image";

const BREADCRUMBS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "#" },
  { label: "Struktur Organisasi" },
];

export default function StrukturOrganisasiPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        backgroundSrc="/heropage.png"
        backgroundAlt="Struktur Organisasi"
        breadcrumbs={BREADCRUMBS}
        title="STRUKTUR ORGANISASI"
      />

      {/* CONTENT */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <Image
              src="/struktur_organisasi.jpg"
              alt="Struktur Organisasi DISARPUS Kabupaten Bekasi"
              width={1400}
              height={1800}
              priority
              className="w-full max-w-5xl h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
