import Link from "next/link";
import Image from "next/image";

export default function StrukturOrganisasiPage() {
  return (
    <main className=" px-8 py-12 max  bg-white">
      {/* Breadcrumb }
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#1895A2]">
          Beranda
        </Link>
        {" / "}
        <Link href="/profil" className="hover:text-[#1895A2]">
          Profil
        </Link>
        {" / "}
        <span className="text-[#012970] font-medium">Struktur Organisasi</span>
      </nav>

      {/* Title */}
      <header className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1895A2]">
          STRUKTUR ORGANISASI
        </h1>
      </header>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/struktur_organisasi.jpg"
          alt="Struktur Organisasi DISARPUS Kabupaten Bekasi"
          width={1200}
          height={1600}
          className="w-5xl h-auto object-contain"
          priority
        />
      </div>
    </main>
  );
}
