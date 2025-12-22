"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-1 px-4 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        {/* Left Links */}
        <nav className="hidden md:flex items-center gap-8 text-[20px] font-semibold text-green-600">
          <Link href="/" className="hover:text-green-800 transition">Home</Link>
          <Link href="/about" className="hover:text-green-800 transition">About Us</Link>
          <Link href="/products" className="hover:text-green-800 transition">Products</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex justify-center items-center mx-4">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Vardaan Enterprises Logo"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-7 text-[20px] font-semibold text-green-600">
          <Link href="#" className="hover:text-green-800 transition">Blog</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 mt-3 pb-4 border-t border-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
        </div>
      )}
    </header>
  );
}
