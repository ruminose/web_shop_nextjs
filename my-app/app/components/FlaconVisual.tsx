"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface FlaconVisualProps {
  accentColor?: string;
  name?: string;
  engraving?: string;
  size?: "sm" | "md" | "lg" | "hero";
  imageUrl?: string;
}

export default function FlaconVisual({
  accentColor = "#d4af37",
  name = "L'ÉLIXIR",
  engraving = "",
  size = "md",
  imageUrl,
}: FlaconVisualProps) {
  const [imageFailed, setImageFailed] = useState(false);

  // Dimension scaling
  const dimensions = {
    sm: { width: "w-28", height: "h-36", scale: 0.7 },
    md: { width: "w-48", height: "h-64", scale: 1 },
    lg: { width: "w-64", height: "h-80", scale: 1.25 },
    hero: { width: "w-72 sm:w-88 md:w-96", height: "h-96 sm:h-[460px]", scale: 1.5 },
  }[size];

  return (
    <div className={`relative ${dimensions.width} ${dimensions.height} flex items-center justify-center select-none`}>
      {/* Ambient Glow behind the bottle */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, rgba(0,0,0,0) 70%)`,
        }}
      />

      {/* If external image is provided and valid, optionally show with luxury frame */}
      {imageUrl && !imageFailed ? (
        <div className="relative w-full h-full flex items-center justify-center p-2 group">
          <img
            src={imageUrl}
            alt={name}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105"
          />

          {/* Engraving Tag if user typed monogram in popup */}
          {engraving && (
            <div className="absolute top-1/4 bg-black/80 backdrop-blur-md border border-[#d4af37]/60 text-[#f3e5ab] px-3 py-0.5 rounded text-xs font-mono tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse">
              MONOGRAM: {engraving.toUpperCase()}
            </div>
          )}
        </div>
      ) : (
        /* Bespoke Apple-aesthetic Architectural Flacon Vector */
        <div className="relative flex flex-col items-center">
          {/* Flacon Cap (Heavy Titanium & Gold Brushed Metal) */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Top finial / magnetic cap */}
            <div className="w-14 h-16 rounded-t-lg bg-gradient-to-b from-[#2a2a30] via-[#1c1c20] to-[#0a0a0c] border border-white/20 shadow-2xl flex items-center justify-center relative overflow-hidden">
              {/* Metallic reflection shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              
              {/* Gold Ring Collar */}
              <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-[#997316] via-[#f3e5ab] to-[#997316] border-y border-[#d4af37]/50" />

              {/* Real-time Monogram Engraving Display */}
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#f3e5ab] drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]">
                {engraving ? engraving.toUpperCase() : "AURA"}
              </span>
            </div>
            
            {/* Spray Nozzle / Stem */}
            <div className="w-5 h-2 bg-gradient-to-r from-[#888] via-[#e5e5e5] to-[#888]" />
          </div>

          {/* Heavy Crystal Glass Flacon Body */}
          <div className="relative z-10 -mt-0.5 w-44 h-56 rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-black/80 border border-white/20 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center justify-between p-4">
            {/* Glass Edge Highlights */}
            <div className="absolute inset-y-0 left-1.5 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            <div className="absolute inset-y-0 right-1.5 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            <div className="absolute inset-x-4 top-1.5 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Liquid chamber interior */}
            <div
              className="absolute inset-x-3 bottom-3 top-6 rounded-2xl opacity-60 transition-all duration-700"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${accentColor}18 40%, ${accentColor}40 100%)`,
              }}
            >
              {/* Internal dip tube */}
              <div className="absolute left-1/2 top-0 bottom-2 w-[1.5px] -translate-x-1/2 bg-white/30 backdrop-blur-sm" />
            </div>

            {/* Minimalist Apple-style Label Plaque */}
            <div className="relative z-10 mt-8 w-32 py-4 px-2 rounded-lg bg-black/60 border border-white/15 backdrop-blur-md flex flex-col items-center text-center shadow-lg">
              <span className="text-[7px] tracking-[0.25em] text-[#a1a1a6] font-semibold uppercase">
                AURA MAISON
              </span>
              <span className="text-[11px] font-serif tracking-wider text-white font-medium my-0.5">
                {name}
              </span>
              <div className="w-6 h-[0.5px] bg-[#d4af37]/60 my-1" />
              <span className="text-[6.5px] tracking-[0.2em] text-[#c6a87d] uppercase">
                EXTRAIT DE PARFUM
              </span>
            </div>

            {/* Bottom heavy crystal base weight */}
            <div className="relative z-10 w-full flex items-center justify-between px-2 text-[8px] tracking-wider text-white/40 font-mono">
              <span>100 ML</span>
              <span className="text-[#d4af37]/80">54% VOL.</span>
            </div>
          </div>

          {/* Under-bottle shadow with metallic gold reflex */}
          <div
            className="w-36 h-4 rounded-full blur-md opacity-40 mt-1"
            style={{
              background: `radial-gradient(ellipse, ${accentColor} 0%, rgba(0,0,0,0.8) 70%)`,
            }}
          />
        </div>
      )}
    </div>
  );
}
