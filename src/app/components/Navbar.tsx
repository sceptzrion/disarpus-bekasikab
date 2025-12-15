"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubItem = { label: string; href: string };

type DropdownMenuProps = {
  label: string;
  items: SubItem[];
  iconSrc?: string;
};

const navLinkBase = "transition-colors duration-200";
const navLinkActive = "text-[#4154F1]";
const navLinkIdle = "text-[#012970] hover:text-[#4154F1]";

const isActive = (pathname: string, href: string) => {
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
  const wrapRef = useRef<HTMLLIElement | null>(null);

  const anyChildActive = items.some((it) => isActive(pathname, it.href));
  const triggerActive = open || anyChildActive; // ✅ open juga bikin aktif

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={[
          "flex flex-row items-center gap-1.5 justify-center",
          navLinkBase,
          triggerActive ? navLinkActive : navLinkIdle, // ✅ warna 4154F1 saat open
        ].join(" ")}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{label}</span>
        <img
          className={[
            "h-3 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          src={iconSrc}
          alt=""
        />
      </button>

      {/* Dropdown panel (✅ animasi) */}
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
          <ul className="flex flex-col" role="menu">
            {items.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={[
                      "block px-6 py-3 text-[16px] font-medium transition-colors duration-200",
                      active
                        ? "text-[#4154F1]"
                        : "text-[#012970] hover:text-[#4154F1]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
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

      <ul className="flex flex-row gap-6 text-[15px]">
        {/* Beranda (link) */}
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

        {/* Dropdown tanpa href di parent */}
        <DropdownMenu
          label="Profil"
          items={[
            { label: "Sejarah", href: "/profil/sejarah" },
            { label: "Visi dan Misi", href: "/profil/visi-misi" },
            { label: "Tupoksi", href: "/profil/tupoksi" },
            { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
            { label: "Sambutan Pimpinan", href: "/profil/sambutan-pimpinan" },
          ]}
        />

        <DropdownMenu
          label="Layanan Publik"
          items={[
            { label: "Contoh Submenu 1", href: "/layanan-publik/submenu-1" },
            { label: "Contoh Submenu 2", href: "/layanan-publik/submenu-2" },
          ]}
        />

        <DropdownMenu
          label="Informasi Publik"
          items={[
            { label: "Contoh Submenu 1", href: "/informasi-publik/submenu-1" },
            { label: "Contoh Submenu 2", href: "/informasi-publik/submenu-2" },
          ]}
        />

        <DropdownMenu
          label="Regulasi"
          items={[
            { label: "Contoh Submenu 1", href: "/regulasi/submenu-1" },
            { label: "Contoh Submenu 2", href: "/regulasi/submenu-2" },
          ]}
        />

        <DropdownMenu
          label="Publikasi & Data"
          items={[
            { label: "Contoh Submenu 1", href: "/publikasi-data/submenu-1" },
            { label: "Contoh Submenu 2", href: "/publikasi-data/submenu-2" },
          ]}
        />
      </ul>
    </div>
  );
};

export default Navbar;
