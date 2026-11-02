"use client";

import React, { useState } from "react";

export default function OlfactivePyramid() {
  const [activeTab, setActiveTab] = useState<"top" | "heart" | "base">("heart");

  const notesData = {
    top: {
      title: "Head Notes (กลิ่นแรกสัมผัส)",
      timeframe: "0 - 30 นาทีแรกของการฉีด",
      description:
        "โมเลกุลขนาดเล็กที่ระเหยได้เร็วที่สุด สร้างความประทับใจแรกอันน่าตื่นเต้น สดชื่น และสว่างไสว",
      ingredients: [
        { name: "Calabrian Bergamot", origin: "อิตาลี", role: "ความสดชื่นแบบกรดซิตรัสบริสุทธิ์" },
        { name: "Pink Peppercorn", origin: "มาดากัสการ์", role: "กลิ่นสไปซ์ประกายระยิบระยับ" },
        { name: "Silver Frankincense", origin: "โอมาน", role: "ไอควันเย็นอันเงียบสงบ" },
        { name: "Crisp Petitgrain", origin: "โมร็อกโก", role: "ความเขียวสะอาดของใบส้ม" },
      ],
      intensity: 90,
    },
    heart: {
      title: "Heart Notes (หัวใจหลักของน้ำหอม)",
      timeframe: "30 นาที - 6 ชั่วโมง",
      description:
        "แกนกลางที่แท้จริงของกลิ่น บ่งบอกอัตลักษณ์และเรื่องราวของแต่ละขวด ปรากฏขึ้นเมื่อท็อปโน้ตเริ่มกลมกลืน",
      ingredients: [
        { name: "20-Year Cambodian Oud", origin: "เขมร", role: "ไม้กฤษณาบ่มนุ่มลึก มีมิติซับซ้อน" },
        { name: "Grasse Centifolia Rose", origin: "กราสส์, ฝรั่งเศส", role: "กุหลาบร้อยกลีบอันหรูหรา" },
        { name: "Florentine Orris Butter", origin: "ฟลอเรนซ์, อิตาลี", role: "กลิ่นแป้งกำมะหยี่มูลค่าสูงดั่งทองคำ" },
        { name: "Périgord Black Truffle", origin: "ฝรั่งเศส", role: "ความเย้ายวน ลึกลับ ดิบเท่" },
      ],
      intensity: 85,
    },
    base: {
      title: "Base Notes (ฐานกลิ่นตราตรึง)",
      timeframe: "6 - 72 ชั่วโมงบนผิวและเนื้อผ้า",
      description:
        "โมเลกุลขนาดใหญ่ที่สุด ตรึงน้ำหอมให้อยู่กับผิวกาย หลอมรวมกับกลิ่นธรรมชาติของแต่ละบุคคลจนเกิดกลิ่นซิกเนเจอร์เฉพาะตัว",
      ingredients: [
        { name: "Royal Ambergris", origin: "มหาสมุทรแอตแลนติก", role: "แอมเบอร์กริสแท้ ตรึงกลิ่นยาวนาน" },
        { name: "Bourbon Vanilla Caviar", origin: "มาดากัสการ์", role: "วานิลลาบ่มถังไม้โอ๊ค หวานลุ่มลึก" },
        { name: "Mysore Sandalwood", origin: "อินเดีย", role: "แก่นไม้จันทน์หอมครีมมี่นุ่มนวล" },
        { name: "Cashmeran Noir", origin: "โมเลกุลลักชัวรี", role: "สัมผัสอบอุ่นประหนึ่งผ้าแคชเมียร์สีดำ" },
      ],
      intensity: 95,
    },
  };

  const current = notesData[activeTab];

  return (
    <section id="notes-pyramid" className="py-24 bg-[#050508] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="apple-badge">OLFACTIVE ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            ทำความเข้าใจ <br />
            <span className="text-gradient-gold font-serif italic font-normal">
              ปิรามิดโน้ตน้ำหอมแบบอินเทอร์แอคทีฟ
            </span>
          </h2>
          <p className="text-sm text-[#a1a1a6]">
            เลือกแต่ละชั้นของปิรามิดเพื่อทำความเข้าใจการคลายตัวของโมเลกุลกลิ่นในแต่ละช่วงเวลา
          </p>
        </div>

        {/* Apple-style Segmented Control */}
        <div className="flex items-center justify-center mb-10">
          <div className="bg-[#14141a] p-1.5 rounded-full border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setActiveTab("top")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "top"
                  ? "bg-white text-black shadow-md"
                  : "text-[#a1a1a6] hover:text-white"
              }`}
            >
              1. Top Notes (กลิ่นแรก)
            </button>
            <button
              onClick={() => setActiveTab("heart")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "heart"
                  ? "bg-[#d4af37] text-black font-semibold shadow-md"
                  : "text-[#a1a1a6] hover:text-white"
              }`}
            >
              2. Heart Notes (หัวใจหลัก)
            </button>
            <button
              onClick={() => setActiveTab("base")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "base"
                  ? "bg-white text-black shadow-md"
                  : "text-[#a1a1a6] hover:text-white"
              }`}
            >
              3. Base Notes (ฐานกลิ่น)
            </button>
          </div>
        </div>

        {/* Content Box with Luxury Glass Styling */}
        <div className="apple-card p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                {current.timeframe}
              </span>
              <h3 className="text-2xl font-medium text-white mt-1">{current.title}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#a1a1a6] block">Diffusion Intensity</span>
              <div className="w-32 bg-white/10 h-2 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#d4af37] to-white h-full rounded-full transition-all duration-500"
                  style={{ width: `${current.intensity}%` }}
                />
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#a1a1a6] my-6 font-light leading-relaxed">
            {current.description}
          </p>

          {/* Key Botanicals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {current.ingredients.map((ing, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between group hover:border-[#d4af37]/40 transition-colors"
              >
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-[#f3e5ab] transition-colors">
                    {ing.name}
                  </div>
                  <div className="text-xs text-[#a1a1a6] mt-0.5">{ing.role}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-[#d4af37] border border-white/10">
                    {ing.origin}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
