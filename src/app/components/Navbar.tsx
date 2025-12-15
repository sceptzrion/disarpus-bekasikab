export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-center">
          {/* Menu Navbar */}
          <ul className="flex space-x-10 text-sm font-semibold text-gray-800">
            <li className="cursor-pointer hover:text-[#44AD6C] hover:text-bold">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#44AD6C]">Berita</li>
            <li className="cursor-pointer hover:text-[#44AD6C]">Kegiatan</li>
            <li className="cursor-pointer hover:text-[#44AD6C]">
              Tentang DISARSPUS
            </li>
            <li className="cursor-pointer hover:text-[#44AD6C]">Layanan</li>
            <li className="cursor-pointer hover:text-[#44AD6C]">
              Download Dokumen
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
