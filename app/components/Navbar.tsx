'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'ACHIEVEMENTS', href: '/achievements' },
    { name: 'FOUNDERS', href: '/founders' },
    { name: 'IMPACT', href: '/impact' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="relative grid grid-cols-3 items-center px-6 lg:px-12 py-5 border-b border-[#2C3834] z-30 bg-[#1A2421]">
      {/* Desktop Links Left */}
      <nav className="hidden xl:flex items-center space-x-5 text-[11px] font-semibold tracking-wider text-[#D1C9BE]">
        {navLinks.slice(0, 4).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${pathname === link.href ? 'text-[#C5A880]' : 'hover:text-white'}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Brand Logo / Centered */}
      <div className="col-span-2 xl:col-span-1 flex justify-start xl:justify-center items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image src="/logo.png" alt="Logo" width={28} height={28} />
          <span className="font-serif italic text-xl lg:text-2xl tracking-wide text-[#E6D5C3] group-hover:opacity-95 transition">
            Vardaan Enterprises
          </span>
        </Link>
      </div>

      {/* Desktop Links Right + Socials + Order */}
      <div className="hidden xl:flex items-center justify-end space-x-5 text-[11px] font-semibold tracking-wider text-[#D1C9BE]">
        {navLinks.slice(4).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${pathname === link.href ? 'text-[#C5A880]' : 'hover:text-white'}`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="flex items-center space-x-2.5 text-sm text-[#C5A880] pl-2 border-l border-[#2C3834]">
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaYoutube /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110"><FaInstagram /></a>
        </div>

        <Link 
          href="/order" 
          className="bg-[#C5A880] text-[#1A2421] px-4 py-2 rounded-full font-bold text-xs flex items-center space-x-2 hover:bg-[#b5956e] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
        >
          <FaWhatsapp />
          <span>ORDER</span>
        </Link>
      </div>

      {/* Professional Alternative Trigger (Replaces classic hamburger) */}
      <div className="flex justify-end xl:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="group flex items-center space-x-2 bg-[#2C3834]/60 hover:bg-[#2C3834] border border-[#3E4D47] text-[#C5A880] px-3.5 py-2 rounded-full transition-all duration-300 shadow-sm"
          aria-label="Toggle Menu"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#D1C9BE] group-hover:text-white transition-colors">
            {isOpen ? 'CLOSE' : 'MENU'}
          </span>
          <div className="text-lg">
            {isOpen ? <FaTimes /> : <HiOutlineMenuAlt4 />}
          </div>
        </button>
      </div>

      {/* Elegant Full-Screen Overlay Dropdown Menu */}
      <div className={`absolute top-full left-0 w-full bg-[#1A2421] border-b border-[#2C3834] py-8 px-8 flex flex-col space-y-5 xl:hidden z-50 shadow-2xl transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0 py-0 overflow-hidden'
      }`}>
        <div className="text-[10px] uppercase tracking-widest text-[#8C6D48] font-bold pb-2 border-b border-[#2C3834]">
          Navigation Menu
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`text-sm py-1.5 transition-colors ${pathname === link.href ? 'text-[#C5A880] font-semibold' : 'text-[#D1C9BE] hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="pt-4 border-t border-[#2C3834] flex items-center justify-between">
          <div className="flex items-center space-x-4 text-base text-[#C5A880]">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaInstagram /></a>
          </div>

          <Link 
            href="/order"
            onClick={() => setIsOpen(false)} 
            className="bg-[#C5A880] text-[#1A2421] px-5 py-2 rounded-full font-bold text-xs flex items-center space-x-2 hover:bg-[#b5956e] transition shadow-md"
          >
            <FaWhatsapp />
            <span>ORDER NOW</span>
          </Link>
        </div>
      </div>
    </header>
  );
}