"use client"

import Image from 'next/image'
import { useState } from 'react'

const fruits = [
  {
    name: 'Cherry',
    src: "/images/cherry.png",
  },
  {
    name: 'Orange',
    src: "/images/orange.png",
  },
  {
    name: 'Strawberry',
    src: "/images/strawberry.png",
  },
  {
    name: 'Broccoli',
    src: "/images/broccoli.png",
  },
];

export default function Home() {
  const [nameInput, setNameInput] = useState<string>('Thuan Dao');
  const [phoneInput, setPhoneInput] = useState<string>('090087656');

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center">
      <div className="border-gray-200 border-[1px] font-medium w-[480px]">

        {/* --------------- Banner ------------------- */}
        <div className="w-full h-48 bg-[url(/images/background.jpg)] bg-cover bg-no-repeat flex items-end">
          <div className="mb-0 ml-0 w-fit p-3 space-y-2.5">
            <div className="font-bold text-3xl">PANGO ENERGY</div>
            <div className="font-sacramento italic text-2xl">Energy and refresh drink</div>
          </div>
        </div>

        {/* --------------- Login ------------------- */}
        <div className="p-4 space-y-4">
          <div>Tham gia khảo sát để nhận ngay 01 Lon Pango Enery bạn nhé</div>
          <div className="space-y-5">
            <div className="space-y-2.5">
              <p>Tên bạn *</p>
              <div className='group relative'>
                <input 
                  className="w-full border-gray-200 border-[1px] pr-5 p-2 rounded focus:border-slate-200"
                  value={nameInput} 
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder='Nhập tên...' 
                />
                <button 
                  className={`rounded-full absolute text-white text-[8px] pl-[0.5px] bg-gray-500 right-1.5 top-3.5 w-3.5 h-3.5 ${!!nameInput ?'block' : 'hidden'}`}
                  onClick={() => setNameInput('')}
                >
                  x
                </button>
              </div>
            </div>
            <div className="space-y-2.5">
              <p>Số điện thoại nhận samples *</p>
              <div className='relative'>
                <input 
                  className="w-full border-gray-200 border-[1px] pr-5 p-2 rounded focus:border-slate-200"
                  value={phoneInput} 
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder='Nhập số điện thoại...' 
                />
                <button 
                  className={`rounded-full absolute text-white text-[8px] pl-[0.5px] bg-gray-500 right-1.5 top-3.5 w-3.5 h-3.5 ${!!phoneInput ?'block' : 'hidden'}`}
                  onClick={() => setPhoneInput('')}
                >
                  x
                </button>
              </div>
            </div>

            {/* ---------------- Images --------------------- */}
            <div className="space-y-2.5">
              <div>Bạn thích hương vị nào nhất? *</div>
              <div className="grid grid-cols-4 cursor-pointer">
                {fruits.map(({ name, src }) => (
                  <>
                    <div className="rounded-lg hover:bg-fuchsia-500 hover:text-white flex items-center justify-center flex-col gap-3 h-40 transition-colors duration-300">
                      <div className="w-12 h-12 relative">
                        <Image src={src} alt={name} fill className="object-contain"/>
                      </div>  
                      <div>{name}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <button className="bg-fuchsia-500 text-white w-full py-2.5 !mt-10 text-center rounded-lg">Gửi khảo sát của bạn</button>
        </div>
      </div>
    </main>
  )
}
