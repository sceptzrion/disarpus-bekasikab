"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubItem = {
  label: string;
  href?: string;
  children?: SubItem[];
};

type DropdownMenuProps = {
  label: React.ReactNode;
  items: SubItem[];
  iconSrc?: string;
  isMobile?: boolean;
  onNavigate?: () => void;
};

const navLinkBase = "transition-colors duration-200";
const navLinkActive = "text-[#1895A2]";
const navLinkIdle = "text-[#012970] hover:text-[#1895A2]";

const isActive = (pathname: string, href?: string) => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
};

const ResponsiveLabel = ({
  full,
  short,
}: {
  full: string;
  short: string;
}) => (
  <>
    <span className="hidden lg:inline">{full}</span>
    <span className="inline lg:hidden">{short}</span>
  </>
);

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  iconSrc = "/dropdown_navbar.png",
  isMobile = false,
  onNavigate,
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState<string | null>(null);

  const wrapRef = useRef<HTMLLIElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ✅ auto align supaya dropdown tidak keluar viewport (dan bikin putih kanan)
  const [align, setAlign] = useState<"center" | "left" | "right">("center");

  const anyChildActive = items.some(
    (item) =>
      isActive(pathname, item.href) ||
      item.children?.some((child) => isActive(pathname, child.href))
  );

  const triggerActive = open || anyChildActive;

  // klik luar => tutup
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setOpenChild(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // ✅ hitung align sebelum paint (biar tidak “loncat”)
  useLayoutEffect(() => {
    if (!open || isMobile) return;
    const el = panelRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const pad = 12;

    if (rect.right > vw - pad) setAlign("right");
    else if (rect.left < pad) setAlign("left");
    else setAlign("center");
  }, [open, isMobile]);

  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "right"
      ? "right-0 left-auto translate-x-0"
      : "left-0 translate-x-0";

  const handleNavigate = () => {
    setOpen(false);
    setOpenChild(null);
    onNavigate?.();
  };

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={
        !isMobile
          ? () => {
              setOpen(false);
              setOpenChild(null);
            }
          : undefined
      }
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={[
          "flex items-center gap-1.5",
          navLinkBase,
          triggerActive ? navLinkActive : navLinkIdle,
        ].join(" ")}
      >
        {label}
        <img
          src={iconSrc}
          alt=""
          className={`h-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop dropdown */}
      {!isMobile && (
        <div
          ref={panelRef}
          className={[
            // tetap ada jarak 16px seperti sebelumnya
            "absolute top-full z-50 pt-4",
            // ✅ tidak pernah melebar melewati viewport
            "w-72 max-w-[calc(100vw-24px)]",
            alignClass,
            "transition-all duration-200 ease-out",
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
          ].join(" ")}
        >
          {/* ✅ hover-bridge: menutup “gap” pt-4 biar tidak flicker saat kursor turun */}
          <div className="absolute -top-4 left-0 right-0 h-4" />

          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-4">
            <ul className="flex flex-col">
              {items.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpenChild = openChild === item.label;

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenChild(item.label)}
                    onMouseLeave={() => setOpenChild(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={handleNavigate}
                        className={[
                          "flex items-center justify-between px-6 py-3 text-[16px] font-medium",
                          isActive(pathname, item.href)
                            ? navLinkActive
                            : navLinkIdle,
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="flex items-center justify-between px-6 py-3 text-[16px] font-medium text-[#012970]">
                        {item.label}
                        {hasChildren && (
                          <img
                            src={iconSrc}
                            alt=""
                            className={`h-3 transition-transform duration-200 ${
                              isOpenChild ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                    )}

                    {hasChildren && (
                      <div
                        className={[
                          "absolute left-full top-0 pl-2 w-64",
                          "transition-all duration-200 ease-out",
                          isOpenChild
                            ? "opacity-100 translate-x-0 pointer-events-auto"
                            : "opacity-0 -translate-x-2 pointer-events-none",
                        ].join(" ")}
                      >
                        <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-3">
                          <ul>
                            {item.children!.map((child, index) => (
                              <li key={`${child.label}-${index}`}>
                                <Link
                                  href={child.href!}
                                  onClick={handleNavigate}
                                  className={[
                                    "block px-5 py-2 text-[15px]",
                                    isActive(pathname, child.href)
                                      ? navLinkActive
                                      : navLinkIdle,
                                  ].join(" ")}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile dropdown */}
      {isMobile && (
        <div
          className={[
            "mt-2 overflow-hidden",
            "transition-all duration-200 ease-out",
            open ? "max-h-[999px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2">
            <ul className="flex flex-col">
              {items.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpenChild = openChild === item.label;

                return (
                  <li key={item.label} className="px-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={handleNavigate}
                        className={[
                          "flex items-center justify-between px-4 py-2 text-[15px] font-medium",
                          isActive(pathname, item.href)
                            ? navLinkActive
                            : navLinkIdle,
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          hasChildren
                            ? setOpenChild((v) =>
                                v === item.label ? null : item.label
                              )
                            : undefined
                        }
                        className="w-full flex items-center justify-between px-4 py-2 text-[15px] font-medium text-[#012970]"
                      >
                        {item.label}
                        {hasChildren && (
                          <img
                            src={iconSrc}
                            alt=""
                            className={`h-3 transition-transform duration-200 ${
                              isOpenChild ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>
                    )}

                    {hasChildren && (
                      <div
                        className={[
                          "pl-3 pr-1 overflow-hidden",
                          "transition-all duration-200 ease-out",
                          isOpenChild
                            ? "max-h-[999px] opacity-100"
                            : "max-h-0 opacity-0",
                        ].join(" ")}
                      >
                        <ul className="py-1">
                          {item.children!.map((child, index) => (
                            <li key={`${child.label}-${index}`}>
                              <Link
                                href={child.href!}
                                onClick={handleNavigate}
                                className={[
                                  "block px-4 py-2 text-[14px]",
                                  isActive(pathname, child.href)
                                    ? navLinkActive
                                    : navLinkIdle,
                                ].join(" ")}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!mobileOpen) return;
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [mobileOpen]);

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50 flex items-center justify-center px-6 py-2 md:px-10 md:py-4 font-medium bg-white shadow-sm"
    >
      <div className="flex items-center justify-between w-full max-w-[1200px] gap-4 md:gap-6 lg:gap-10">
        <a href="/" className="shrink-0">
          <img
            className="w-9 md:w-12"
            src="/logo_disarpus.png"
            alt="logo"
          />
        </a>

        <ul className="hidden md:flex gap-6 text-[15px]">
          <li>
            <Link
              href="/"
              className={[
                navLinkBase,
                isActive(pathname, "/") ? navLinkActive : navLinkIdle,
              ].join(" ")}
            >
              Beranda
            </Link>
          </li>

          <DropdownMenu
            label="Profil"
            items={[
              { label: "Profil DISARPUS", href: "/profil/profil-disarpus" },
              { label: "Visi dan Misi", href: "/profil/visi-misi" },
              { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
              { label: "Tugas dan Fungsi", href: "/profil/tugas-dan-fungsi" },
              { label: "Lokasi & Kontak", href: "/profil/lokasi-kontak" },
            ]}
          />

          <DropdownMenu
            label={<ResponsiveLabel full="Layanan Publik" short="Layanan" />}
            items={[
              {
                label: "Layanan Perpustakaan",
                children: [
                  { label: "Pendaftaran Anggota Online", href: "/layanan-publik/perpustakaan/peminjaman" },
                  { label: "Katalog Online (OPAC)", href: "/layanan-publik/perpustakaan/keanggotaan" },
                  { label: "Perpustakaan Digital (e-Pusdas / Apk Daerah)", href: "/layanan-publik/perpustakaan/keanggotaan" },
                  { label: "Layanan Peminjaman, pengembalian, Perpanjangan", href: "/layanan-publik/perpustakaan/keanggotaan" },
                  { label: "Informasi Ruang Baca dan Fasilitas", href: "/layanan-publik/perpustakaan/keanggotaan" },
                ],
              },
              {
                label: "Layanan Kearsipan",
                children: [
                  { label: "Intergrasi Sistem SRIKANDI", href: "/layanan-publik/kearsipan/permohonan" },
                  { label: "Layanan Penyerahan Arsip Inakttif", href: "/layanan-publik/kearsipan/konsultasi" },
                  { label: "Akses Arsip Statis", href: "/layanan-publik/kearsipan/permohonan" },
                  { label: "Pembinaan Kearsipan Untuk OPD", href: "/layanan-publik/kearsipan/konsultasi" },
                ],
              },
            ]}
          />

          <DropdownMenu
            label={<ResponsiveLabel full="Informasi Publik" short="Informasi" />}
            items={[
              { label: "Prosedur Permohonan Informasi", href: "/informasi-publik/prosedur-permohonan-informas" },
              { label: "Prosedur Kebaratan Informasi", href: "/informasi-publik/prosedur-kebaratan-informasi" },
              { label: "Daftar Informasi Publik (DIP)", href: "/informasi-publik/daftar-informasi-publik" },
              { label: "Laporan Akses Informasi", href: "/informasi-publik/laporan-akses-informasi" },
              { label: "Berita & Pengumuman", href: "/informasi-publik/berita-&-pengumuman" },
              { label: "Agenda Kegiatan", href: "/informasi-publik/agenda-kegiatan" },
            ]}
          />

          <DropdownMenu
            label="Regulasi"
            items={[
              { label: "UU Kearsipan", href: "/regulasi/uu-kearsipan" },
              { label: "UU Perpustakaan", href: "/regulasi/submenu-2" },
            ]}
          />

          <DropdownMenu
            label={<ResponsiveLabel full="Publikasi & Data" short="Publikasi" />}
            items={[
              { label: "Laporan Kinerja (LKIP, IKU)", href: "/publikasi-data/submenu-1" },
              { label: "Renstra & Renja", href: "/publikasi-data/submenu-2" },
              { label: "Data Statitstik Kunjungan & Koleksi", href: "/publikasi-data/submenu-1" },
              { label: "Brosur, Leaflet, dan Publikasi Lainya", href: "/publikasi-data/submenu-2" },
            ]}
          />
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={[
          "md:hidden absolute left-0 right-0 top-full bg-white shadow-sm",
          "transition-all duration-200 ease-out",
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="px-10 py-4">
          <ul className="flex flex-col gap-4 text-[15px]">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={[
                  navLinkBase,
                  isActive(pathname, "/") ? navLinkActive : navLinkIdle,
                ].join(" ")}
              >
                Beranda
              </Link>
            </li>

            <DropdownMenu
              isMobile
              label="Profil"
              onNavigate={() => setMobileOpen(false)}
              items={[
                { label: "Profil DISARPUS", href: "/profil/profil-disarpus" },
                { label: "Visi dan Misi", href: "/profil/visi-misi" },
                { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
                { label: "Tugas dan Fungsi", href: "/profil/tugas-dan-fungsi" },
                { label: "Lokasi & Kontak", href: "/profil/sambutan-pimpinan" },
              ]}
            />

            <DropdownMenu
              isMobile
              label="Layanan Publik"
              onNavigate={() => setMobileOpen(false)}
              items={[
                {
                  label: "Layanan Perpustakaan",
                  children: [
                    { label: "Pendaftaran Anggota Online", href: "/layanan-publik/perpustakaan/peminjaman" },
                    { label: "Katalog Online (OPAC)", href: "/layanan-publik/perpustakaan/keanggotaan" },
                    { label: "Perpustakaan Digital (e-Pusdas / Apk Daerah)", href: "/layanan-publik/perpustakaan/keanggotaan" },
                    { label: "Layanan Peminjaman, pengembalian, Perpanjangan", href: "/layanan-publik/perpustakaan/keanggotaan" },
                    { label: "Informasi Ruang Baca dan Fasilitas", href: "/layanan-publik/perpustakaan/keanggotaan" },
                  ],
                },
                {
                  label: "Layanan Kearsipan",
                  children: [
                    { label: "Intergrasi Sistem SRIKANDI", href: "/layanan-publik/kearsipan/permohonan" },
                    { label: "Layanan Penyerahan Arsip Inakttif", href: "/layanan-publik/kearsipan/konsultasi" },
                    { label: "Akses Arsip Statis", href: "/layanan-publik/kearsipan/permohonan" },
                    { label: "Pembinaan Kearsipan Untuk OPD", href: "/layanan-publik/kearsipan/konsultasi" },
                  ],
                },
              ]}
            />

            <DropdownMenu
              isMobile
              label="Informasi Publik"
              onNavigate={() => setMobileOpen(false)}
              items={[
                { label: "Prosedur Permohonan Informasi", href: "/informasi-publik/prosedur-permohonan-informas" },
                { label: "Prosedur Kebaratan Informasi", href: "/informasi-publik/prosedur-kebaratan-informasi" },
                { label: "Daftar Informasi Publik (DIP)", href: "/informasi-publik/daftar-informasi-publik" },
                { label: "Laporan Akses Informasi", href: "/informasi-publik/laporan-akses-informasi" },
                { label: "Berita & Pengumuman", href: "/informasi-publik/berita-&-pengumuman" },
                { label: "Agenda Kegiatan", href: "/informasi-publik/agenda-kegiatan" },
              ]}
            />

            <DropdownMenu
              isMobile
              label="Regulasi"
              onNavigate={() => setMobileOpen(false)}
              items={[
                { label: "UU Kearsipan", href: "/regulasi/uu-kearsipan" },
                { label: "UU Perpustakaan", href: "/regulasi/submenu-2" },
              ]}
            />

            <DropdownMenu
              isMobile
              label="Publikasi & Data"
              onNavigate={() => setMobileOpen(false)}
              items={[
                { label: "Laporan Kinerja (LKIP, IKU)", href: "/publikasi-data/submenu-1" },
                { label: "Renstra & Renja", href: "/publikasi-data/submenu-2" },
                { label: "Data Statitstik Kunjungan & Koleksi", href: "/publikasi-data/submenu-1" },
                { label: "Brosur, Leaflet, dan Publikasi Lainya", href: "/publikasi-data/submenu-2" },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
