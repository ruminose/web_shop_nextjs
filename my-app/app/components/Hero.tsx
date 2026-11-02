"use client";

import React from "react";
import FlaconVisual from "./FlaconVisual";
import { Fragrance } from "../data/fragrances";

interface HeroProps {
  flagship: Fragrance;
  onQuickView: (fragrance: Fragrance) => void;
}

export default function Hero({ flagship, onQuickView }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-radial from-[#15151c] via-[#08080a] to-[#030304]">
      {/* Background Ambient Lighting & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#d4af37]/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#5dc0de]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Eyebrow & Headline (Apple Keynote Style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="apple-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
              HAUTE PARFUMERIE • PARIS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08]">
            <span className="text-gradient-silver block">L&apos;ÉLIXIR TITANIUM</span>
            <span className="text-gradient-gold block font-serif italic text-3xl sm:text-5xl md:text-6xl mt-1 font-normal">
              The gravity of pure scent.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1a6] font-light max-w-2xl mx-auto leading-relaxed pt-2">
            หลอมรวมไม้กฤษณาอายุ 20 ปี เข้ากับเบอร์กามอตเย็นจัดจากคาลาเบรีย และ Florentine Orris Butter
            เข้มข้นที่สุดในประวัติศาสตร์ด้วยสัดส่วนน้ำมันหอมบริสุทธิ์ 54% Extrait de Parfum
          </p>

          {/* Pricing & CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onQuickView(flagship)}
              className="apple-button-gold w-full sm:w-auto"
            >
              <span>ดูรายละเอียดสินค้า (Quick View)</span>
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="#notes-pyramid"
              className="apple-button-secondary w-full sm:w-auto"
            >
              <span>สำรวจปิรามิดกลิ่น</span>
            </a>
          </div>

          <div className="text-xs text-[#86868b] tracking-wide pt-1">
            เริ่มต้นที่ $260 สำหรับ 50ml • ขวดซิกเนเจอร์ 100ml ราคา $390
          </div>
        </div>

        {/* Hero Flacon Presentation with Apple Bento-style Floating Specs */}
        <div className="mt-14 relative flex flex-col items-center">
          {/* Central Bottle Display */}
          <div className="relative group cursor-pointer" onClick={() => onQuickView(flagship)}>
            <FlaconVisual
              accentColor={flagship.accentColor}
              name="L'ÉLIXIR TITANIUM"
              size="hero"
              imageUrl={flagship.image}
            />

            {/* Click to open badge indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="bg-black/90 text-white text-xs px-4 py-1.5 rounded-full border border-[#d4af37]/60 shadow-xl flex items-center gap-2">
                <span>คลิกเพื่อดูรายละเอียดเชิงลึก</span>
                <span className="text-[#d4af37]">&gt;</span>
              </span>
            </div>
          </div>

          {/* Floating Apple-style Tech Specs surrounding the product */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {/* Spec 1 */}
            <div className="apple-card p-5 text-center flex flex-col items-center justify-center">
              <span className="text-3xl font-light tracking-tight text-white font-mono">
                54<span className="text-lg text-[#d4af37]">%</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a1a1a6] mt-1">
                Extrait Concentration
              </span>
              <span className="text-[11px] text-white/50 mt-1">
                สูงกว่าน้ำหอมมาตรฐานทั่วไป 3 เท่า
              </span>
            </div>

            {/* Spec 2 */}
            <div className="apple-card p-5 text-center flex flex-col items-center justify-center border-[#d4af37]/30">
              <span className="text-3xl font-light tracking-tight text-[#f3e5ab] font-mono">
                72<span className="text-lg">h</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mt-1">
                Magnetic Longevity
              </span>
              <span className="text-[11px] text-white/50 mt-1">
                ตรึงกลิ่นยาวนานด้วย Royal Ambergris แท้
              </span>
            </div>

            {/* Spec 3 */}
            <div className="apple-card p-5 text-center flex flex-col items-center justify-center">
              <span className="text-3xl font-light tracking-tight text-white font-mono">
                0.01<span className="text-lg text-[#d4af37]">mm</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a1a1a6] mt-1">
                Optical Glass Tolerance
              </span>
              <span className="text-[11px] text-white/50 mt-1">
                ขวดแก้วออปติคัลเจียระไนระดับไมครอน
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
