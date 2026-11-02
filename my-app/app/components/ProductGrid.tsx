"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Fragrance } from "../data/fragrances";

interface ProductGridProps {
  fragrances: Fragrance[];
  selectedCategory: string;
  onQuickView: (fragrance: Fragrance) => void;
}

export default function ProductGrid({
  fragrances,
  selectedCategory,
  onQuickView,
}: ProductGridProps) {
  // Filter logic based on category
  const filteredFragrances = fragrances.filter((f) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "Woody") return f.family.includes("Woody");
    if (selectedCategory === "Floral") return f.family.includes("Floral");
    if (selectedCategory === "Fresh") return f.family.includes("Fresh");
    if (selectedCategory === "Gourmand") return f.family.includes("Gourmand");
    if (selectedCategory === "Extrait") return f.concentrationPercent >= 48;
    return true;
  });

  return (
    <section id="collection" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 pb-4 border-b border-white/[0.08] gap-4">
        <div>
          <span className="apple-badge mb-2">CURATED REPERTOIRE</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            คอลเลกชันน้ำหอมชั้นสูง
          </h2>
          <p className="text-xs sm:text-sm text-[#a1a1a6] mt-1">
            แต่ละกลิ่นผ่านการบ่มสกัดพิเศษในเมือง Grasse บรรจุในขวดแก้วคริสตัลออปติคัลเจียระไน
          </p>
        </div>

        <div className="text-xs font-mono text-[#a1a1a6]">
          แสดงผล {filteredFragrances.length} รายการจากทั้งหมด {fragrances.length} รายการ
        </div>
      </div>

      {/* Grid of Cards */}
      {filteredFragrances.length === 0 ? (
        <div className="text-center py-16 text-[#a1a1a6]">
          ไม่พบน้ำหอมในหมวดหมู่นี้ กรุณาเลือกดูหมวดหมู่อื่น
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFragrances.map((fragrance) => (
            <ProductCard
              key={fragrance.id}
              fragrance={fragrance}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      )}
    </section>
  );
}
