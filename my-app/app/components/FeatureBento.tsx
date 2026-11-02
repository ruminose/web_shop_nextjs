"use client";

import React from "react";

export default function FeatureBento() {
  return (
    <section id="craft" className="py-24 bg-[#08080b] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="apple-badge">THE ARCHITECTURE OF SCENT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            วิศวกรรมความหอม <br />
            <span className="text-gradient-gold font-serif italic font-normal">
              ในระดับไมครอนและโมเลกุล
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1a6] font-light leading-relaxed">
            เราสร้างสรรค์น้ำหอมด้วยวิธีคิดแบบการออกแบบอุตสาหกรรมไฮเอนด์ ผสานกับความประณีตของช่างปรุงน้ำหอมชั้นครูแห่งเมืองกราสส์
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Large Featured Span 2 cols */}
          <div className="apple-card md:col-span-2 p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative min-h-[360px]">
            {/* Background luxury gradient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#d4af37]/20 via-[#c2956c]/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-lg space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Rare Grasse Harvest
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug">
                การเก็บเกี่ยวกลีบดอกไม้ในเวลา 05:00 น. ก่อนแสงแรกแห่งโพรวองซ์
              </h3>
              <p className="text-sm text-[#a1a1a6] leading-relaxed">
                กุหลาบ Centifolia และมะลิ Grandiflorum ถูกคัดเก็บด้วยมือทีละดอกในช่วงเวลาที่น้ำมันหอมระเหยมีความบริสุทธิ์สูงสุด
                เพื่อให้ได้สารสกัด Absolu ที่คงกลิ่นดั้งเดิมของธรรมชาติอย่างสมบูรณ์แบบ
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-mono text-white/60">
                <span>✓ 1,000 KG D’OR POUR 1L ABSOLU</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">100% TRACEABLE ORIGIN</span>
              </div>
              <span className="text-xs text-[#d4af37] font-medium tracking-wide">
                Grasse, France &gt;
              </span>
            </div>
          </div>

          {/* Card 2: Flacon Engineering */}
          <div className="apple-card p-8 flex flex-col justify-between relative overflow-hidden min-h-[360px]">
            <div className="relative z-10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#5dc0de] font-semibold">
                Haptic Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                ฝาครอบแม่เหล็ก Neodymium Snap
              </h3>
              <p className="text-sm text-[#a1a1a6] leading-relaxed">
                ออกแบบน้ำหนักและองศาแรงดึงดูดของแม่เหล็กนีโอไดเมียมอย่างแม่นยำ เพื่อให้ทุกครั้งที่ปิดฝาเกิดเสียงคลิก “Aura Haptic Sound” อันนุ่มนวลและเป็นเอกลักษณ์
              </p>
            </div>

            <div className="relative z-10 mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
              <div className="text-center font-mono">
                <div className="text-2xl font-bold text-white tracking-wider">350g</div>
                <div className="text-[10px] text-[#a1a1a6] tracking-widest uppercase mt-0.5">
                  Solid Titanium Cap Weight
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Ultrasonic Extraction */}
          <div className="apple-card p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#e05675] font-semibold">
                Clean Extraction
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                การสกัดเย็นด้วยคลื่นเสียง Ultrasonic
              </h3>
              <p className="text-sm text-[#a1a1a6] leading-relaxed">
                ปราศจากความร้อนที่อาจทำลายโมเลกุลกลิ่น ทำให้ได้กลิ่นท็อปโน้ตที่สดฉ่ำคมชัดราวกับเพิ่งเด็ดผลและใบจากต้น
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center gap-2 text-xs text-[#a1a1a6]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Zero Thermal Degradation</span>
            </div>
          </div>

          {/* Card 4: 72h Fixation */}
          <div className="apple-card md:col-span-2 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 max-w-xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Organic Fixation
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                อำพันทองสกัดบริสุทธิ์เพื่อการตรึงกลิ่นเหนือระดับ
              </h3>
              <p className="text-sm text-[#a1a1a6] leading-relaxed">
                แทนที่จะใช้สารเคมีสังเคราะห์ราคาประหยัด AURA ผสาน Royal Ambergris แท้ที่บ่มข้ามทศวรรษ เพื่อสร้างสะพานเชื่อมโมเลกุลน้ำหอมให้เกาะกับอุณหภูมิผิวของมนุษย์ เปล่งประกายกลิ่นหอมเฉพาะบุคคลได้ยาวนานข้ามวัน
              </p>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-center font-mono">
              <div>
                <div className="text-lg text-white font-semibold">0%</div>
                <div className="text-[10px] text-white/50">Phthalates & Parabens</div>
              </div>
              <div>
                <div className="text-lg text-[#d4af37] font-semibold">54%</div>
                <div className="text-[10px] text-white/50">Active Perfume Oil</div>
              </div>
              <div>
                <div className="text-lg text-white font-semibold">IFRA</div>
                <div className="text-[10px] text-white/50">Certified Standards</div>
              </div>
              <div>
                <div className="text-lg text-white font-semibold">100%</div>
                <div className="text-[10px] text-white/50">Refillable Flacons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
