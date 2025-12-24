import React from "react";
import Image from "next/image";

const orgLinks = [
  { label: "Pemkab Bekasi", href: "#" },
  { label: "ANRI", href: "#" },
  { label: "Perpusnas", href: "#" },
  { label: "Komunitas", href: "#" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Tentang Kami", href: "#" },
  { label: "Pemberdayaan", href: "#" },
  { label: "Komunitas", href: "#" },
];

const serviceLinks = [
  { label: "Frequently Asked Questions (FAQ)", href: "#" },
  { label: "Survey Kepuasan Masyarakat", href: "#" },
  { label: "Pengaduan Online", href: "#" },
];

const socialLinks = [
  { icon: "/facebook.png", label: "Facebook", href: "#" },
  { icon: "/instagram.png", label: "Instagram", href: "#" },
  { icon: "/whatsapp.png", label: "WhatsApp", href: "#" },
  { icon: "/youtube.png", label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#215D64] text-white py-8 px-10 lg:px-32">
      {/* TOP */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 border-b-2 border-white pb-10">
        {/* LEFT: logo + org links */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5 md:gap-9">
          <Image
            src="/logo_disarpus_white.png"
            width={68}
            height={68}
            alt="Logo Disarpus"
            className="w-[68px] h-[68px] aspect-square"
          />

          <div className="flex flex-col gap-2.5 text-[13px] font-base">
            <h1 className="max-w-60 text-sm md:text-base font-semibold">
              Dinas Perpustakaan dan Arsip Kab. Bekasi
            </h1>

            {orgLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: navigation + layanan */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 text-center md:text-left">
          <div className="flex flex-col gap-2.5 text-[13px] font-base">
            <h1 className="text-base font-semibold">Navigasi</h1>
            {navLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 text-[13px] font-base">
            <h1 className="text-base font-semibold">Layanan</h1>
            {serviceLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="pt-3 text-[13px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* left info */}
          <div className="flex flex-col gap-1 text-center md:text-left md:shrink-0">
            <p className="font-medium">disarpus@bekasikab.go.id</p>
            <p>DISARPUS Kab. Bekasi © 2025</p>
          </div>

          {/* address */}
          <div className="flex flex-col text-center md:text-center md:flex-1 md:min-w-0">
            {/* ✅ batasi lebar biar ga “makan” kolom kanan */}
            <div className="mx-auto md:mx-auto max-w-[520px]">
              <p>
                Komplek Perkantoran PemKab Bekasi Jln. Deltamas Boulevard Sukamahi - Cikarang Pusat
              </p>
              <p>Kabupaten Bekasi - Jawa Barat 17530</p>
              <p>Indonesia</p>
            </div>
          </div>

          {/* socials */}
          <div className="flex flex-row gap-6 justify-center md:justify-end md:shrink-0">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="shrink-0">
                <Image
                  src={s.icon}
                  width={24}
                  height={24}
                  alt={s.label}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
