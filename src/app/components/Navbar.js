import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between py-5 px-8 items-center'>
      <h1 className='font-[family-name:var(--font-libre-franklin)] font-black text-2xl bg-[#FF4E14] text-black px-2 py-1 rounded-sm'><a href="">DESGIN WIZARDS</a></h1>
      <nav>
        <ul className='flex gap-7'>
            <li><a href="">Home</a></li>
            <li><Link href="/images/artist.png" />Shop</li>
            <li>About us</li>
        </ul>
      </nav>
      <button className='bg-[#FF4E14] text-black font-bold py-1 px-2 rounded-sm cursor-pointer'>Login</button>
    </div>
  )
}
