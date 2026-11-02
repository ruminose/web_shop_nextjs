"use client";

import React, { useState } from "react";
import FlaconVisual from "./FlaconVisual";
import { Fragrance } from "../data/fragrances";

interface ProductModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
  onConfirmReservation?: (fragrance: Fragrance, sizeMl: number, engraving: string) => void;
}

export default function ProductModal({
  fragrance,
  onClose,
  onConfirmReservation,
}: ProductModalProps) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // default 100ml
  const [engraving, setEngraving] = useState("");
  const [isReserved, setIsReserved] = useState(false);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!fragrance) return null;

  const currentSize = fragrance.sizes[selectedSizeIndex] || fragrance.sizes[0];

  const handleReserve = () => {
    setIsReserved(true);
    if (onConfirmReservation) {
      onConfirmReservation(fragrance, currentSize.ml, engraving);
    }
  };

  return (
    <div
      className="apple-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="apple-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Apple-style sleek circular button) */}
        <button
          onClick={onClose}
          aria-label="ปิดหน้าต่าง"
          className="absolute top-5 right-5 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#a1a1a6] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {isReserved ? (
          /* ================= RESERVATION SUCCESS VIEW ================= */
          <div className="p-8 sm:p-14 text-center flex flex-col items-center justify-center space-y-6 min-h-[460px]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#997316] via-[#f3e5ab] to-[#d4af37] flex items-center justify-center text-black shadow-2xl shadow-[#d4af37]/30 animate-bounce">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-2 max-w-md">
              <span className="apple-badge">CONFIRMATION COMPLIMENTARY</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                สำรองขวดพิเศษเรียบร้อยแล้ว
              </h3>
              <p className="text-sm text-[#d4af37] font-serif italic">
                {fragrance.name} • {currentSize.label}
              </p>
              {engraving && (
                <p className="text-xs font-mono text-[#f3e5ab] bg-white/5 py-1 px-3 rounded-full inline-block border border-white/10 mt-1">
                  สลักชื่อย่อ (Monogram): &ldquo;{engraving.toUpperCase()}&rdquo;
                </p>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs text-[#a1a1a6] max-w-md space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>AURA Private Concierge Service</span>
              </div>
              <p className="leading-relaxed">
                การสำรองนี้เป็นการทดลองและจองสิทธิ์ล่วงหน้า ไม่มีการหักเงินหรือจำเป็นต้องล็อกอินใดๆ ที่ปรึกษาด้านกลิ่นของเราจะเตรียม Discovery Set ส่งมอบให้คุณได้สัมผัสกลิ่นจริงก่อนตัดสินใจ
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="apple-button-gold px-8 py-2.5 text-sm"
              >
                เสร็จสิ้น & สำรวจกลิ่นอื่นต่อ
              </button>
            </div>
          </div>
        ) : (
          /* ================= MAIN PRODUCT DETAIL MODAL ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Left Column: Visual Flacon and Ambient Showcase (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/30 px-2.5 py-0.5 rounded-full">
                  {fragrance.concentrationPercent}% CONCENTRATION
                </span>
              </div>

              {/* Dynamic Bottle with live Monogram */}
              <div className="my-4">
                <FlaconVisual
                  accentColor={fragrance.accentColor}
                  name={fragrance.name}
                  engraving={engraving}
                  size="lg"
                  imageUrl={fragrance.image}
                />
              </div>

              <div className="text-center mt-2">
                <span className="text-xs text-[#86868b] tracking-wider uppercase block font-mono">
                  Flacon Design
                </span>
                <span className="text-xs text-white/90">
                  Optical Glass • Magnetic Neodymium Cap
                </span>
              </div>
            </div>

            {/* Right Column: Information, Sizes, Notes & Reservation (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2">
                  <span className="apple-badge">{fragrance.family}</span>
                  <span className="text-xs text-[#86868b]">• {fragrance.concentration}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {fragrance.name}
                </h2>
                <p className="text-sm text-[#d4af37] font-serif italic">
                  {fragrance.frenchName}
                </p>
                <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed pt-1">
                  {fragrance.description}
                </p>
              </div>

              {/* Bottle Size Selector (Apple Style Radio Pill Buttons) */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-white block mb-2.5">
                  เลือกขนาดขวด (Select Volume):
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {fragrance.sizes.map((s, idx) => {
                    const isSelected = selectedSizeIndex === idx;
                    return (
                      <button
                        key={s.ml}
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white/15 border-[#d4af37] shadow-lg shadow-[#d4af37]/15 scale-[1.02]"
                            : "bg-white/[0.03] border-white/10 hover:border-white/20 text-[#a1a1a6]"
                        }`}
                      >
                        <div className={`text-sm font-semibold ${isSelected ? "text-white" : "text-white/80"}`}>
                          {s.ml} ml
                        </div>
                        <div className="text-xs font-medium text-[#d4af37] mt-0.5">
                          ${s.price}
                        </div>
                        <div className="text-[10px] text-white/40 truncate mt-0.5">
                          {s.label.split(" ")[1] || "Edition"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personalization: Custom Monogram Engraving */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-white flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    บริการสลักตัวอักษรย่อบนฝาขวดทองคำ (Complimentary Monogram)
                  </span>
                  <span className="text-[10px] text-[#d4af37] font-mono">FREE</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    maxLength={3}
                    value={engraving}
                    onChange={(e) => setEngraving(e.target.value.toUpperCase())}
                    placeholder="ใส่ตัวอักษรย่อสูงสุด 3 ตัว (เช่น RX, AUR)"
                    className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white uppercase placeholder:text-white/30 focus:outline-none focus:border-[#d4af37]"
                  />
                  {engraving && (
                    <button
                      onClick={() => setEngraving("")}
                      className="text-xs text-[#a1a1a6] hover:text-white px-2 py-1"
                    >
                      ล้าง
                    </button>
                  )}
                </div>
              </div>

              {/* Olfactive Pyramid Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                  ส่วนประกอบโน้ตกลิ่น (Olfactive Pyramid):
                </span>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="w-16 shrink-0 font-mono text-[10px] text-[#f3e5ab] uppercase font-semibold">
                      Top Notes:
                    </span>
                    <span className="text-white/90">
                      {fragrance.notes.top.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-16 shrink-0 font-mono text-[10px] text-[#d4af37] uppercase font-semibold">
                      Heart Notes:
                    </span>
                    <span className="text-white/90">
                      {fragrance.notes.heart.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-16 shrink-0 font-mono text-[10px] text-[#c2956c] uppercase font-semibold">
                      Base Notes:
                    </span>
                    <span className="text-white/90">
                      {fragrance.notes.base.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics Longevity & Sillage */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-[#86868b] uppercase block">ความติดทนบนผิว</span>
                  <span className="font-medium text-white">{fragrance.metrics.longevity}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-[#86868b] uppercase block">การกระจายตัว (Sillage)</span>
                  <span className="font-medium text-white truncate block">{fragrance.metrics.sillage}</span>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-[#86868b] block uppercase">ราคารวม ({currentSize.ml}ml)</span>
                  <div className="text-2xl font-bold text-white tracking-tight">
                    ${currentSize.price}
                    <span className="text-xs text-[#a1a1a6] font-normal ml-1">USD</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleReserve}
                    className="apple-button-gold w-full sm:w-auto py-2.5 px-6 text-sm flex items-center justify-center gap-2"
                  >
                    <span>สำรองขวดพิเศษนี้ (Reserve)</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
