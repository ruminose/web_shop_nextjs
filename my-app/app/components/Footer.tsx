"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="maison" className="bg-[#050507] border-t border-white/[0.08] text-[#86868b] text-[11px] leading-relaxed pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Footnotes / Disclaimers (Signature Apple 11px Style) */}
        <div className="space-y-2 pb-8 border-b border-white/[0.06] text-[#6e6e73]">
          <p>
            1. สัดส่วนความเข้มข้น 54% Extrait de Parfum วัดตามมาตรฐานการวิเคราะห์ของ IFRA (International Fragrance Association)
            โดยใช้น้ำมันหอมระเหยบริสุทธิ์ไม่ผ่านการเจือจางด้วยน้ำหรือสารเติมแต่งเคมีสังเคราะห์ราคาต่ำ
          </p>
          <p>
            2. ประสิทธิภาพการติดทน 72 ชั่วโมงผ่านการทดสอบในสภาวะควบคุม และความยาวนานอาจแปรผันตามประเภทผิว อุณหภูมิ และระดับความชื้นของสิ่งแวดล้อม
          </p>
          <p>
            3. บริการสลักชื่อย่อ Monogram บนฝาขวดและชุดทดลอง Discovery Vial 3x2ml ไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับทุกการลงชื่อสำรองล่วงหน้า
          </p>
        </div>

        {/* Directory Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-medium text-white mb-3">คอลเลกชัน (Collection)</h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="hover:text-white transition-colors">L&apos;Élixir Titanium</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Rose Nocturne</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Santal Obsidienne</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Néroli Céleste</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Vanille Impériale</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Soleil de Grasse</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-white mb-3">ศาสตร์แห่งสุคนธภัณฑ์ (Craft)</h4>
            <ul className="space-y-2">
              <li><a href="#craft" className="hover:text-white transition-colors">ทุ่งดอกไม้แห่ง Grasse</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">การสกัดเย็น Ultrasonic</a></li>
              <li><a href="#notes-pyramid" className="hover:text-white transition-colors">ปิรามิดโน้ตน้ำหอม</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">วิศวกรรมฝาขวดแม่เหล็ก</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">การเปรียบเทียบรุ่น</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-white mb-3">บริการเอ็กซ์คลูซีฟ (Salon)</h4>
            <ul className="space-y-2">
              <li><a href="#collection" className="hover:text-white transition-colors">ชุดทดลอง Discovery Kit</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">บริการสลัก Monogram ฟรี</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">ปรึกษาด้านกลิ่นส่วนตัว</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">ระบบรีฟิลขวดแก้วคริสตัล</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-white mb-3">ความยั่งยืน & กฎหมาย (About)</h4>
            <ul className="space-y-2">
              <li><a href="#maison" className="hover:text-white transition-colors">จริยธรรมการเก็บเกี่ยวดอกไม้</a></li>
              <li><a href="#maison" className="hover:text-white transition-colors">มาตรฐานความปลอดภัย IFRA</a></li>
              <li><a href="#maison" className="hover:text-white transition-colors">ความเป็นกลางทางคาร์บอน 100%</a></li>
              <li><a href="#maison" className="hover:text-white transition-colors">สำนักงานใหญ่ ณ กรุงปารีส</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Copyright © 2026 AURA HAUTE PARFUMERIE Inc. สงวนลิขสิทธิ์ทั้งหมด
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[#6e6e73]">
            <a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">ข้อกำหนดการใช้งาน</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">นโยบายคุกกี้</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">แผนผังเว็บไซต์</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
