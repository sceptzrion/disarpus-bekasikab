"use client";

import { useState } from "react";
import HeroPage from "@/components/HeroPage";

type Status = "idle" | "success" | "error";

const BREADCRUMBS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "#" },
  { label: "Lokasi & Kontak" },
];

const OFFICE = {
  name: "Dinas Arsip dan Perpustakaan Daerah Kabupaten Bekasi",
  addressLines: [
    "Jln. Deltamas Boulevard Sukamahi",
    "Cikarang Pusat Kabupaten Bekasi",
    "Jawa Barat (17530), Indonesia",
  ],
  email: "disarpus@bekasikab.go.id",
  phoneLabel: "(021) 1234-5678",
  phoneTel: "+622112345678",
  socials: [
    {
      label: "Instagram",
      text: "@disarpusbekasi",
      href: "https://instagram.com/disarpusbekasi",
    },
    {
      label: "Facebook",
      text: "DISARPUS Kabupaten Bekasi",
      href: "https://facebook.com/disarpusbekasi",
    },
  ],
};

const ContactField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <h2 className="text-base sm:text-lg font-semibold text-[#012970] mb-2 sm:mb-3">
      {label}
    </h2>
    {children}
  </div>
);

export default function LokasiKontakPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdanjzgr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroPage
        backgroundSrc="/heropage.png"
        backgroundAlt="Lokasi & Kontak"
        breadcrumbs={BREADCRUMBS}
        title="LOKASI & KONTAK"
      />

      {/* CONTENT */}
      <section className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="mx-auto max-w-6xl">
          {/* MAPS */}
          <section className="mb-10 sm:mb-12 flex justify-center">
            <div className="w-full max-w-5xl h-[240px] sm:h-[300px] lg:h-[360px] rounded-lg overflow-hidden shadow">
              <iframe
                title="Lokasi DISARPUS Kabupaten Bekasi"
                src="https://www.google.com/maps?q=Dinas%20Arsip%20dan%20Perpustakaan%20Daerah%20Kabupaten%20Bekasi&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </section>

          {/* INFORMASI & FORM */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* LEFT — INFORMASI */}
            <div className="flex flex-col gap-8">
              <ContactField label="Alamat Kantor">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {OFFICE.name}
                  <br />
                  {OFFICE.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </ContactField>

              <ContactField label="Kontak">
                <div className="text-gray-700 text-sm sm:text-base space-y-2">
                  <p>
                    <span className="font-semibold">Email :</span>{" "}
                    <a
                      href={`mailto:${OFFICE.email}`}
                      className="text-[#1895A2] hover:underline"
                    >
                      {OFFICE.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Telepon :</span>{" "}
                    <a
                      href={`tel:${OFFICE.phoneTel}`}
                      className="text-[#1895A2] hover:underline"
                    >
                      {OFFICE.phoneLabel}
                    </a>
                  </p>
                </div>
              </ContactField>

              <ContactField label="Media Sosial">
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  {OFFICE.socials.map((s) => (
                    <li key={s.label}>
                      {s.label} :{" "}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1895A2] hover:underline"
                      >
                        {s.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContactField>
            </div>

            {/* RIGHT — FORM */}
            <div className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow">
              <h2 className="text-base sm:text-lg font-semibold text-[#012970] mb-4 sm:mb-5">
                Kirim Pesan / Pengaduan
              </h2>

              {/* NOTIFIKASI */}
              {status === "success" && (
                <div className="mb-4 rounded bg-green-100 text-green-800 px-4 py-2 text-sm">
                  Pesan berhasil dikirim. Terima kasih atas pengaduan Anda.
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 rounded bg-red-100 text-red-800 px-4 py-2 text-sm">
                  Terjadi kesalahan. Silakan coba kembali.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    required
                    className="w-full border rounded px-3 py-2 text-gray-900 bg-white
                               focus:outline-none focus:ring-1 focus:ring-[#1895A2]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border rounded px-3 py-2 text-gray-900 bg-white
                               focus:outline-none focus:ring-1 focus:ring-[#1895A2]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan / Pengaduan
                  </label>
                  <textarea
                    name="pesan"
                    rows={4}
                    required
                    className="w-full border rounded px-3 py-2 text-gray-900 bg-white
                               focus:outline-none focus:ring-1 focus:ring-[#1895A2]"
                  />
                </div>

                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" />

                <button
                  type="submit"
                  disabled={submitting}
                  className={[
                    "bg-[#1895A2] text-white px-6 py-2 rounded transition",
                    "hover:bg-[#147f8a]",
                    "disabled:opacity-60 disabled:cursor-not-allowed",
                  ].join(" ")}
                >
                  {submitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
