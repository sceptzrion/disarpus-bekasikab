import React from 'react'
import Image from 'next/image'

 const Footer = () => {
  return (
    <footer className='flex flex-col py-8 px-35 bg-[#215D64] text-white'>
      <div className="flex flex-row justify-between border-b-2 border-white pb-10">
        <div className='flex flex-row gap-9'>
          <Image src="/logo_disarpus_white.png" width={68} height={68} alt="" className='aspect-square w-17 h-17'/>
          <div className='flex flex-col gap-2.5 text-[13px] font-base'>
            <h1 className='text-base font-semibold'>
              Dinas Perpustakaan dan Arsip Kab. Bekasi
            </h1>
            <a href="#">Pemkab Bekasi</a>
            <a href="#">ANRI</a>
            <a href="#">Perpusnas</a>
            <a href="#">Komunitas</a>
          </div>
        </div>

        <div className="flex flex-row gap-25">
          <div className='flex flex-col gap-2.5 text-[13px] font-base'>
            <h1 className='text-base font-semibold'>
              Navigasi
            </h1>
            <a href="#">Home</a>
            <a href="#">Tentang Kami</a>
            <a href="#">Pemberdayaan</a>
            <a href="#">Komunitas</a>
          </div>
          <div className='flex flex-col gap-2.5 text-[13px] font-base'>
            <h1 className='text-base font-semibold'>
              Layanan
            </h1>
            <a href="#">Frequently Asked Questions (FAQ)</a>
            <a href="#">Survey Kepuasan Masyarakat</a>
            <a href="#">Pengaduan Online</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-[13px] pt-3">
        <div className="flex flex-col gap-1">
          <p className='font-medium'>disarpus@bekasikab.go.id</p>
          <p>DISARPUS Kab. Bekasi © 2025</p>
        </div>

        <div className="flex flex-col text-center">
          <p>Komplek Perkantoran PemKab Bekasi Jln. Deltamas Boulevard Sukamahi - Cikarang Pusat</p>
          <p>Kabupaten Bekasi - Jawa Barat 17530</p>
          <p>Indonesia</p>
        </div>

        <div className="flex flex-row gap-6 place-self-center">
          <a href="">
            <Image src="/facebook.png" width={24} height={24} alt="" className='w-6 h-6' />
          </a>
          <a href="">
            <Image src="/instagram.png" width={24} height={24} alt="" className='w-6 h-6' />
          </a>
          <a href="">
            <Image src="/whatsapp.png" width={24} height={24} alt="" className='w-6 h-6' />
          </a>
          <a href="">
            <Image src="/youtube.png" width={24} height={24} alt="" className='w-6 h-6' />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer