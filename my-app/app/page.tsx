"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "./components/Navbar";
import SubNav from "./components/SubNav";
import Hero from "./components/Hero";
import FeatureBento from "./components/FeatureBento";
import ProductGrid from "./components/ProductGrid";
import OlfactivePyramid from "./components/OlfactivePyramid";
import ComparisonSection from "./components/ComparisonSection";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import { FRAGRANCES, Fragrance } from "./data/fragrances";

function StoreContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalFragrance, setActiveModalFragrance] = useState<Fragrance | null>(null);
  const [savedCount, setSavedCount] = useState(0);

  // Flagship fragrance for the Hero section
  const flagshipFragrance = FRAGRANCES[0];

  // Deep-link support: ?quickview=elixir-titanium
  useEffect(() => {
    const qv = searchParams.get("quickview");
    if (qv) {
      const found = FRAGRANCES.find((f) => f.id === qv);
      if (found) setActiveModalFragrance(found);
    }
  }, [searchParams]);

  const handleOpenModal = (fragrance: Fragrance) => {
    setActiveModalFragrance(fragrance);
  };

  const handleCloseModal = () => {
    setActiveModalFragrance(null);
  };

  const handleConfirmReservation = () => {
    setSavedCount((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#050507] text-[#f5f5f7]">
      {/* 1. Apple-style Navbar with frosted blur */}
      <Navbar
        onOpenDiscovery={() => handleOpenModal(flagshipFragrance)}
        savedCount={savedCount}
      />

      {/* 2. Secondary Sub-navigation category pills */}
      <SubNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. Apple Keynote Hero Presentation */}
      <Hero
        flagship={flagshipFragrance}
        onQuickView={handleOpenModal}
      />

      {/* 4. Luxury Perfume Showcase Grid (All 6 master fragrances) */}
      <ProductGrid
        fragrances={FRAGRANCES}
        selectedCategory={selectedCategory}
        onQuickView={handleOpenModal}
      />

      {/* 5. Apple Bento Grid Craftsmanship & Engineering Highlights */}
      <FeatureBento />

      {/* 6. Interactive Olfactive Notes Pyramid */}
      <OlfactivePyramid />

      {/* 7. Apple-style Model Comparison Matrix */}
      <ComparisonSection
        fragrances={FRAGRANCES}
        onSelect={handleOpenModal}
      />

      {/* 8. Apple-style 11px Legal & Directory Footer */}
      <Footer />

      {/* 9. Interactive Pop-up / Modal (No login / No payment - purely luxury showcase & reservation) */}
      <ProductModal
        key={activeModalFragrance?.id || "empty"}
        fragrance={activeModalFragrance}
        onClose={handleCloseModal}
        onConfirmReservation={handleConfirmReservation}
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050507]" />}>
      <StoreContent />
    </Suspense>
  );
}
