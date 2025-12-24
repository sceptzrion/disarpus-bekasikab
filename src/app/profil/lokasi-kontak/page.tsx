import Link from "next/link";

export default function LokasiKontakPage() {
  return (
    <main className=" bg-white px-8 py-12 ">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#1895A2]">
          Beranda
        </Link>
        {" / "}
        <Link href="/profil" className="hover:text-[#1895A2]">
          Profil
        </Link>
        {" / "}
        <span className="text-[#012970] font-medium">Lokasi & Kontak</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#1895A2] text-center mb-10">
        LOKASI & KONTAK
      </h1>

      {/* MAPS */}
      <section className="mb-12 flex justify-center">
        <div className="w-full max-w-5xl h-[300px] rounded-lg overflow-hidden shadow">
          <iframe
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {/* KIRI — INFORMASI */}
        <div>
          {/* ALAMAT */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#012970] mb-3">
              Alamat Kantor
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dinas Arsip dan Perpustakaan Daerah Kabupaten Bekasi <br />
              Jln. Deltamas Boulevard Sukamahi <br />
              Cikarang Pusat Kabupaten Bekasi
              <br />
              Jawa Barat (17530), Indonesia
            </p>
          </div>

          {/* KONTAK */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#012970] mb-3">
              Kontak
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Email :</strong>{" "}
              <a
                href="mailto:disarpus@bekasikab.go.id"
                className="text-[#1895A2] hover:underline"
              >
                disarpus@bekasikab.go.id
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Telepon :</strong>{" "}
              <a
                href="tel:+622112345678"
                className="text-[#1895A2] hover:underline"
              >
                (021) 1234-5678
              </a>
            </p>
          </div>

          {/* MEDIA SOSIAL */}
          <div>
            <h2 className="text-xl font-semibold text-[#012970] mb-3">
              Media Sosial
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                Instagram :{" "}
                <a
                  href="https://instagram.com/disarpusbekasi"
                  target="_blank"
                  className="text-[#1895A2] hover:underline"
                >
                  @disarpusbekasi
                </a>
              </li>
              <li>
                Facebook :{" "}
                <a
                  href="https://facebook.com/disarpusbekasi"
                  target="_blank"
                  className="text-[#1895A2] hover:underline"
                >
                  DISARPUS Kabupaten Bekasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* KANAN — FORM KIRIM PESAN */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#012970] mb-5">
            Kirim Pesan / Pengaduan
          </h2>

          <form
            action="mailto:staabhi71@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <input
                type="text"
                name="Nama"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1895A2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="Email"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1895A2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pesan / Pengaduan
              </label>
              <textarea
                name="Pesan"
                rows={4}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1895A2]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1895A2] text-white px-6 py-2 rounded hover:bg-[#147f8a] transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
