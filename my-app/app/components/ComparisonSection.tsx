"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Fragrance } from "../data/fragrances";

interface ComparisonProps {
  fragrances: Fragrance[];
  onSelect: (fragrance: Fragrance) => void;
}

export default function ComparisonSection({ fragrances, onSelect }: ComparisonProps) {
  // Select 3 standout fragrances to compare
  const featuredThree = fragrances.slice(0, 3);

  return (
    <section id="compare" className="py-24 bg-[#0a0a0e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="apple-badge">FIND YOUR SIGNATURE</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            เปรียบเทียบกลิ่นที่สะท้อนตัวตนของคุณ
          </h2>
          <p className="text-sm text-[#a1a1a6]">
            เลือกและเปรียบเทียบสเปกระดับสุคนธภัณฑ์ของทั้ง 3 รุ่นยอดนิยมแบบเคียงข้าง
          </p>
        </div>

        {/* Apple-style Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredThree.map((f) => (
            <div
              key={f.id}
              className="apple-card p-6 flex flex-col justify-between text-center"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="h-44 flex items-center justify-center p-2 mb-4">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-medium text-white">{f.name}</h3>
                  <p className="text-xs text-[#d4af37] font-serif italic">{f.frenchName}</p>
                  <p className="text-sm text-white/90 font-semibold mt-2">${f.price}</p>
                </div>

                <button
                  onClick={() => onSelect(f)}
                  className="apple-button-primary w-full mt-4 text-xs py-2"
                >
                  ดูรายละเอียด & สำรอง
                </button>

                {/* Specs Divider */}
                <div className="my-6 border-t border-white/10" />

                {/* Feature breakdown rows */}
                <div className="space-y-5 text-left text-xs">
                  <div>
                    <span className="text-[#86868b] block font-mono text-[10px] uppercase">
                      ความเข้มข้น (Concentration)
                    </span>
                    <span className="text-white font-medium text-sm">
                      {f.concentrationPercent}% Extrait de Parfum
                    </span>
                  </div>

                  <div>
                    <span className="text-[#86868b] block font-mono text-[10px] uppercase">
                      ความติดทน (Longevity)
                    </span>
                    <span className="text-white font-medium">{f.metrics.longevity}</span>
                  </div>

                  <div>
                    <span className="text-[#86868b] block font-mono text-[10px] uppercase">
                      การกระจายตัว (Sillage)
                    </span>
                    <span className="text-white">{f.metrics.sillage}</span>
                  </div>

                  <div>
                    <span className="text-[#86868b] block font-mono text-[10px] uppercase">
                      กลุ่มกลิ่น (Olfactive Family)
                    </span>
                    <span className="text-white">{f.family}</span>
                  </div>

                  <div>
                    <span className="text-[#86868b] block font-mono text-[10px] uppercase">
                      โอกาสที่เหมาะสมที่สุด
                    </span>
                    <span className="text-[#a1a1a6] text-[11px] leading-relaxed">
                      {f.idealOccasion}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-center">
                <span className="text-[11px] text-[#d4af37] font-serif italic">
                  &ldquo;{f.character}&rdquo;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
