"use client";

import React, { useState } from "react";

interface NavbarProps {
  onOpenDiscovery?: () => void;
  savedCount?: number;
}

export default function Navbar({ onOpenDiscovery, savedCount = 0 }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Luxury Ribbon (Apple Announcement Banner style) */}
      <div className="bg-[#0f0f14] border-b border-white/[0.06] text-center py-2 px-4 text-xs text-[#a1a1a6]">
        <span className="text-[#f5f5f7] font-medium mr-2">AURA Private Salon:</span>
        รับสิทธิ์รับชุดทดลองกลิ่น 3 ชิ้น (Discovery Vial 3x2ml) ในทุกการสำรองสินค้า
        <a
          href="#collection"
          className="ml-2 text-[#d4af37] hover:underline inline-flex items-center gap-1 font-medium transition-colors"
        >
          สำรวจคอลเลกชัน &gt;
        </a>
      </div>

      {/* Main Apple Frosted Glass Navbar */}
      <nav className="apple-glass-nav w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#f5f5f7] hover:opacity-80 transition-opacity"
          >
            {/* Minimalist Aura Perfume Monogram */}
            <svg
              className="w-5 h-5 text-[#f3e5ab]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12" />
              <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
            </svg>
            <span className="text-sm tracking-[0.25em] font-light uppercase font-serif text-white">
              AURA <span className="text-[10px] text-[#c6a87d] font-sans font-normal">PARIS</span>
            </span>
          </a>

          {/* Desktop Links (Apple-style 12px light gray links) */}
          <div className="hidden md:flex items-center space-x-8 text-[12px] font-normal tracking-wide text-[#a1a1a6]">
            <a href="#collection" className="hover:text-white transition-colors">
              น้ำหอมทั้งหมด
            </a>
            <a href="#craft" className="hover:text-white transition-colors">
              ศาสตร์แห่งการปรุง
            </a>
            <a href="#notes-pyramid" className="hover:text-white transition-colors">
              ปิรามิดกลิ่น (Olfactive)
            </a>
            <a href="#compare" className="hover:text-white transition-colors">
              เปรียบเทียบรุ่น
            </a>
            <a href="#maison" className="hover:text-white transition-colors">
              เกี่ยวกับแบรนด์
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-5 text-[#a1a1a6]">
            {/* Quick Scent Discovery Button */}
            <button
              onClick={onOpenDiscovery}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#f3e5ab] bg-white/[0.06] hover:bg-white/[0.12] border border-[#d4af37]/40 px-3 py-1 rounded-full transition-all"
            >
              <span>ขวดไฮไลท์</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            </button>

            {/* Simulated Collection Bag / Counter */}
            <button
              onClick={onOpenDiscovery}
              aria-label="คอลเลกชันส่วนตัว"
              className="relative p-1 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#d4af37] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-6 bg-[#0a0a0d]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col space-y-4 text-sm font-medium">
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a1a1a6] hover:text-white py-1"
            >
              น้ำหอมทั้งหมด (All Fragrances)
            </a>
            <a
              href="#craft"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a1a1a6] hover:text-white py-1"
            >
              ศาสตร์แห่งการปรุง (The Craft)
            </a>
            <a
              href="#notes-pyramid"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a1a1a6] hover:text-white py-1"
            >
              ปิรามิดกลิ่น (Olfactive Pyramid)
            </a>
            <a
              href="#compare"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a1a1a6] hover:text-white py-1"
            >
              เปรียบเทียบรุ่น (Compare)
            </a>
            <a
              href="#maison"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#a1a1a6] hover:text-white py-1"
            >
              เรื่องราวของแบรนด์ (Maison)
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
