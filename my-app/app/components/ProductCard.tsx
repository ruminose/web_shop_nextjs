"use client";

import React from "react";
import FlaconVisual from "./FlaconVisual";
import { Fragrance } from "../data/fragrances";

interface ProductCardProps {
  fragrance: Fragrance;
  onQuickView: (fragrance: Fragrance) => void;
}

export default function ProductCard({ fragrance, onQuickView }: ProductCardProps) {
  return (
    <div
      onClick={() => onQuickView(fragrance)}
      className="apple-card p-6 flex flex-col justify-between cursor-pointer group"
    >
      {/* Top Header Row in Card */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {fragrance.badge ? (
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab]">
              {fragrance.badge}
            </span>
          ) : (
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1a6]">
              {fragrance.family}
            </span>
          )}

          <span className="text-[10px] font-mono text-[#d4af37] border border-[#d4af37]/30 px-2 py-0.5 rounded-full">
            {fragrance.concentrationPercent}% EXTRAIT
          </span>
        </div>

        {/* Product Visual Centerpiece */}
        <div className="py-6 flex items-center justify-center relative">
          <div className="transform transition-transform duration-500 group-hover:scale-105">
            <FlaconVisual
              accentColor={fragrance.accentColor}
              name={fragrance.name}
              size="md"
              imageUrl={fragrance.image}
            />
          </div>
        </div>

        {/* Perfume Identity */}
        <div className="space-y-1 text-center">
          <h3 className="text-lg font-medium text-white tracking-tight group-hover:text-[#f3e5ab] transition-colors">
            {fragrance.name}
          </h3>
          <p className="text-xs text-[#d4af37] font-serif italic">
            {fragrance.frenchName}
          </p>
          <p className="text-xs text-[#a1a1a6] line-clamp-2 pt-1 font-light leading-relaxed">
            {fragrance.subtitle}
          </p>
        </div>

        {/* Olfactive Notes Tags (Global class used) */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {fragrance.notes.top.slice(0, 2).map((note, idx) => (
            <span key={idx} className="olfactive-tag">
              {note}
            </span>
          ))}
          {fragrance.notes.base.slice(0, 1).map((note, idx) => (
            <span key={idx} className="olfactive-tag">
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Pricing and Quick View Action */}
      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#a1a1a6] block uppercase tracking-wider">ราคาเริ่มต้น</span>
          <span className="text-base font-semibold text-white tracking-tight">
            ${fragrance.price}
            <span className="text-xs text-[#a1a1a6] font-normal ml-1">/ 100ml</span>
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(fragrance);
          }}
          className="apple-button-secondary text-xs py-1.5 px-3.5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all"
        >
          <span>ดูรายละเอียด</span>
        </button>
      </div>
    </div>
  );
}
