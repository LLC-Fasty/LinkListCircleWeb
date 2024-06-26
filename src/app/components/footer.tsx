import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaDribbble, FaDiscord, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-[#F2ECBE] mt-[50px] '>
      <div className='grid grid-cols-1 md:grid-cols-5 h-auto '>
        {/* Left Side with Quick Links */}
        <div className='col-span-1 md:col-start-1 md:col-end-3 p-10 flex flex-col justify-center items-start bg-[#9A3B3B] rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[300px] md:rounded-bl-[50px]'>
          <h1 className='text-[#E2C799] text-[30px] font-bold mb-2'>Quick Links</h1>
          <ul className="">
            <Link href="#about">
            <li className='p-[2px] text-[24px] text-[#F2ECBE] hover:text-[#9A3B3B] hover:bg-[#F2ECBE] hover:rounded-2xl cursor-pointer'>About</li>
            </Link>
            <Link href="#services">
            <li className='p-[2px] text-[24px] text-[#F2ECBE] hover:text-[#9A3B3B] hover:bg-[#F2ECBE] hover:rounded-2xl cursor-pointer'>Services</li>
            </Link>
            <Link href="https://forms.gle/y9TANNUWuVWQVyat8">
            <li className='p-[2px] text-[24px] text-[#F2ECBE] hover:text-[#9A3B3B] hover:bg-[#F2ECBE] hover:rounded-2xl cursor-pointer'>Join Us</li>
            </Link>
            <Link href="#contact">
            <li className='p-[2px] text-[24px] text-[#F2ECBE] hover:text-[#9A3B3B] hover:bg-[#F2ECBE] hover:rounded-2xl cursor-pointer'>Contact Us</li>
            </Link>
          </ul>
        </div>
        {/* Center with Logo */}
        <div className='col-span-1 md:col-start-3 md:col-end-4 flex justify-center items-center py-6 md:py-0'>
          <Image 
            src="/ImgLogo.png"
            alt='Logo'
            width={150}
            height={150}
            className="md:w-[200px] md:h-[200px]"
          />
        </div>
        {/* Right Side with Social Media Links */}
        <div className='col-span-1 md:col-start-4 md:col-end-6 p-10 flex flex-col justify-center items-end bg-[#9A3B3B] rounded-tl-[50px] rounded-br-[50px] md:rounded-tr-[50px] md:rounded-br-[50px] md:rounded-tl-[300px]'>
          <h1 className='text-[#E2C799] text-[30px] font-bold mb-2'>Follow Us</h1>
          <div className='flex space-x-4'>
            <Link href="https://www.instagram.com/linklistcircle/">
            <FaInstagram className='p-[2px] text-[#F2ECBE] hover:animate-spin hover:text-[#9A3B3B] hover:bg-[#F2ECBE] text-3xl md:text-[50px] hover:rounded-2xl cursor-pointer' />
            </Link>
            <Link href="https://www.linkedin.com/company/linklistcircle/">
            <FaLinkedin className='p-[2px] text-[#F2ECBE] hover:animate-spin hover:text-[#9A3B3B] hover:bg-[#F2ECBE] text-3xl md:text-[50px] hover:rounded-2xl cursor-pointer' />
            </Link>
            <Link href="">
            <FaDribbble className='p-[2px] text-[#F2ECBE] hover:animate-spin hover:text-[#9A3B3B] hover:bg-[#F2ECBE] text-3xl md:text-[50px] hover:rounded-2xl cursor-pointer' />
            </Link>
            <Link href="">
            <FaDiscord className='p-[2px] text-[#F2ECBE] hover:animate-spin hover:text-[#9A3B3B] hover:bg-[#F2ECBE] text-3xl md:text-[50px] hover:rounded-2xl cursor-pointer' />
            </Link>
            <Link href="">
            <FaGithub className='p-[2px] text-[#F2ECBE] hover:animate-spin hover:text-[#9A3B3B] hover:bg-[#F2ECBE] text-3xl md:text-[50px] hover:rounded-2xl cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-6 text-center border-t-2 border-[#C08261] py-4">
        <p className="md:text-[20px] text-[14px] text-[#9A3B3B] font-medium tracking-wider">&copy; {new Date().getFullYear()} LinkListCircle LLP. All rights reserved.</p>
      </div>
    </div>
  )
}
