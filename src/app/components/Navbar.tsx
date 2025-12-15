"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubItem = {
  label: string;
  href?: string;
  children?: SubItem[];
};

type DropdownMenuProps = {
  label: string;
  items: SubItem[];
  iconSrc?: string;
};

const navLinkBase = "transition-colors duration-200";
const navLinkActive = "text-[#4154F1]";
const navLinkIdle = "text-[#012970] hover:text-[#4154F1]";

const isActive = (pathname: string, href?: string) => {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  iconSrc = "/dropdown_navbar.png",
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState<string | null>(null);
  const wrapRef = useRef<HTMLLIElement | null>(null);

  const anyChildActive = items.some(
    (item) =>
      isActive(pathname, item.href) ||
      item.children?.some((child) => isActive(pathname, child.href))
  );

  const triggerActive = open || anyChildActive;

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

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setOpenChild(null);
      }}
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

      <div
        className={[
          "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4",
          "transition-all duration-200 ease-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
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
                        "absolute left-full top-0 ml-2 w-64",
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
    </li>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center px-10 gap-20 py-4 font-medium bg-white">
      <div>
        <img className="w-12" src="/logo_disarpus.png" alt="logo" />
      </div>

      <ul className="flex gap-6 text-[15px]">
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
            { label: "Sejarah", href: "/profil/sejarah" },
            { label: "Visi dan Misi", href: "/profil/visi-misi" },
            {
              label: "Struktur Organisasi",
              href: "/profil/struktur-organisasi",
            },
            { label: "Tugas dan Fungsi", href: "/profil/tugas-dan-fungsi" },
            { label: "Lokasi & Kontak", href: "/profil/sambutan-pimpinan" },
          ]}
        />

        <DropdownMenu
          label="Layanan Publik"
          items={[
            {
              label: "Layanan Perpustakaan",
              children: [
                {
                  label: "Pendaftaran Anggota Online",
                  href: "/layanan-publik/perpustakaan/peminjaman",
                },
                {
                  label: "Katalog Online (OPAC)",
                  href: "/layanan-publik/perpustakaan/keanggotaan",
                },
                {
                  label: "Perpustakaan Digital (e-Pusdas / Apk Daerah)",
                  href: "/layanan-publik/perpustakaan/keanggotaan",
                },
                {
                  label: "Layanan Peminjaman, pengembalian, Perpanjangan",
                  href: "/layanan-publik/perpustakaan/keanggotaan",
                },
                {
                  label: "Informasi Ruang Baca dan Fasilitas",
                  href: "/layanan-publik/perpustakaan/keanggotaan",
                },
              ],
            },
            {
              label: "Layanan Kearsipan",
              children: [
                {
                  label: "Intergrasi Sistem SRIKANDI",
                  href: "/layanan-publik/kearsipan/permohonan",
                },
                {
                  label: "Layanan Penyerahan Arsip Inakttif",
                  href: "/layanan-publik/kearsipan/konsultasi",
                },
                {
                  label: "Akses Arsip Statis",
                  href: "/layanan-publik/kearsipan/permohonan",
                },
                {
                  label: "Pembinaan Kearsipan Untuk OPD",
                  href: "/layanan-publik/kearsipan/konsultasi",
                },
              ],
            },
          ]}
        />

        <DropdownMenu
          label="Informasi Publik"
          items={[
            {
              label: "Prosedur Permohonan Informasi",
              href: "/informasi-publik/prosedur-permohonan-informas",
            },
            {
              label: "Prosedur Kebaratan Informasi",
              href: "/informasi-publik/prosedur-kebaratan-informasi",
            },
            {
              label: "Daftar Informasi Publik (DIP)",
              href: "/informasi-publik/daftar-informasi-publik",
            },
            {
              label: "Laporan Akses Informasi",
              href: "/informasi-publik/laporan-akses-informasi",
            },
            {
              label: "Berita & Pengumuman",
              href: "/informasi-publik/berita-&-pengumuman",
            },
            {
              label: "Agenda Kegiatan",
              href: "/informasi-publik/agenda-kegiatan",
            },
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
          label="Publikasi & Data"
          items={[
            {
              label: "Laporan Kinerja (LKIP, IKU)",
              href: "/publikasi-data/submenu-1",
            },
            { label: "Renstra & Renja", href: "/publikasi-data/submenu-2" },
            {
              label: "Data Statitstik Kunjungan & Koleksi",
              href: "/publikasi-data/submenu-1",
            },
            {
              label: "Brosur, Leaflet, dan Publikasi Lainya",
              href: "/publikasi-data/submenu-2",
            },
          ]}
        />
      </ul>
    </div>
  );
};

export default Navbar;
