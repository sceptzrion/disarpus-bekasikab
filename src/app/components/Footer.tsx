import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white">
      {/* ================= TOP ================= */}
      <div className="px-6 pt-14 pb-10">
        <div className="mx-auto grid max-w-14xl grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <Image
              src="/logo_disarpus.png"
              alt="Logo Disarpus"
              width={80}
              height={80}
            />

            <div>
              <span className="mb-2 block text-base font-semibold text-white">
                Dinas Perpustakaan dan Arsip Kab. Bekasi
              </span>

              <ul className="space-y-1 text-sm">
                <li>Pemkab Bekasi</li>
                <li>ANRI</li>
                <li>Perpusnas</li>
                <li>Komunitas</li>
              </ul>
            </div>
          </div>
          <div />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="text-left  md:text-right">
              <h4 className="mb-3 text-base font-semibold text-white">
                Contact Us
              </h4>
              <p className="text-sm leading-relaxed">
                disarpus@bekasikab.go.id
              </p>
              <p className="mt-2 text-sm">+62 857-3907-6216</p>
            </div>
            <div className="w-full h-[160px] overflow-hidden rounded-lg border border-white/20">
              <iframe
                title="Lokasi Dinas Arsip dan Perpustakaan Daerah Kabupaten Bekasi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.0000000000001!2d107.1718405!3d-6.3643499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699be0d223f435%3A0xaf71ae539bf1557e!2sDINAS%20ARSIP%20DAN%20PERPUSTAKAAN%20DAERAH!5e0!3m2!1sid!2sid!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mx-auto max-w-6xl border-t border-gray-400/40" />

      {/* ================= BOTTOM ================= */}
      <div className="px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* LEFT */}
          <p className="text-sm text-gray-400">
            DISARPUS Kabupaten Bekasi © 2025.
          </p>

          {/* CENTER */}
          <p className="max-w-xl text-center text-sm text-gray-400">
            Komplek Perkantoran PemKab Bekasi Jln. Deltamas Boulevard Sukamahi –
            Cikarang Pusat Kabupaten Bekasi – Jawa Barat 17530 Indonesia
          </p>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={18}
              height={18}
            />
            <Image src="/youtube.png" alt="Youtube" width={18} height={18} />
            <Image src="/whatsapp.png" alt="Whatsapp" width={18} height={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
