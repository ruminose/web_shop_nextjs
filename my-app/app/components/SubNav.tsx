"use client";

import React from "react";

interface SubNavProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: "all", label: "ทั้งหมด", en: "All Creations" },
  { id: "Woody", label: "วูดดี้ & กฤษณา", en: "Woody & Oud" },
  { id: "Floral", label: "ฟลอรัล & กุหลาบ", en: "Floral Absolutes" },
  { id: "Fresh", label: "ซิตรัส & สดชื่น", en: "Fresh Citrus" },
  { id: "Gourmand", label: "กูร์มองด์ & สไปซ์", en: "Warm Gourmand" },
  { id: "Extrait", label: "Extrait 50%+", en: "Ultra Concentration" },
];

export default function SubNav({ selectedCategory, onSelectCategory }: SubNavProps) {
  return (
    <div className="apple-glass-subnav sticky top-12 z-40 w-full overflow-x-auto no-scrollbar py-3">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-start sm:justify-center gap-2 min-w-max">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-white text-black shadow-lg shadow-white/10 scale-105"
                  : "bg-white/[0.04] text-[#a1a1a6] hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] ${isActive ? "text-black/60" : "text-white/40"}`}>
                • {cat.en}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
