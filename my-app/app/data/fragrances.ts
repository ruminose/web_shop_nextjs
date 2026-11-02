export interface Fragrance {
  id: string;
  name: string;
  frenchName: string;
  subtitle: string;
  family: string;
  concentration: string;
  concentrationPercent: number;
  price: number;
  sizes: { ml: number; price: number; label: string }[];
  description: string;
  accentColor: string;
  tagColor: string;
  badge?: string;
  image: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  metrics: {
    longevity: string; // e.g. "24h+"
    sillage: string; // e.g. "Intense & Enveloping"
    projectionScore: number; // 1 - 5
    complexityScore: number; // 1 - 5
  };
  story: string;
  character: string;
  idealOccasion: string;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "elixir-titanium",
    name: "L'ÉLIXIR TITANIUM",
    frenchName: "Extrait de Parfum Rare",
    subtitle: "The gravity of midnight oud and frozen metallic bergamot.",
    family: "Woody Ambery",
    concentration: "Extrait de Parfum",
    concentrationPercent: 54,
    price: 390,
    sizes: [
      { ml: 50, price: 260, label: "50ml Travel Flacon" },
      { ml: 100, price: 390, label: "100ml Signature Edition" },
      { ml: 250, price: 680, label: "250ml Maison Decanter" },
    ],
    description:
      "รังสรรค์ขึ้นจากแก่นไม้กฤษณาเขมรหมักบ่มกว่า 20 ปี ผสานกับเบอร์กามอตเย็นจัดจากคาลาเบรีย และโอริสบัตเตอร์ชั้นสูง ให้กลิ่นที่ทรงพลัง ลุ่มลึก และมีเอกลักษณ์เฉพาะตัวดั่งโลหะไทเทเนียม",
    accentColor: "#d4af37",
    tagColor: "border-amber-500/30 text-amber-300",
    badge: "FLAGSHIP MASTERPIECE",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
    notes: {
      top: ["Frozen Calabrian Bergamot", "Pink Peppercorn", "Silver Frankincense"],
      heart: ["20-Year Aged Cambodian Oud", "Florentine Orris Butter", "Smoked Plum"],
      base: ["Royal Ambergris", "Ebony Wood", "Cashmeran Noir", "Haitian Vetiver"],
    },
    metrics: {
      longevity: "36+ ชั่วโมง",
      sillage: "กว้างขวางและทรงพลัง (Room-filling)",
      projectionScore: 5,
      complexityScore: 5,
    },
    story:
      "เกิดจากแรงบันดาลใจในการผสมผสานความแม่นยำทางสถาปัตยกรรมสมัยใหม่เข้ากับศาสตร์การปรุงน้ำหอมโบราณแห่งเมือง Grasse แต่ละหยดคือความเข้มข้นระดับ 54% สูงสุดในวงการสุคนธภัณฑ์ชั้นสูง",
    character: "Mysterious • Powerful • Avant-Garde",
    idealOccasion: "งานกาล่าค่ำคืน, ค่ำคืนพิเศษ, สภาพแวดล้อมที่ต้องการความโดดเด่นสูงสุด",
  },
  {
    id: "rose-nocturne",
    name: "ROSE NOCTURNE",
    frenchName: "Absolu de Rose Obscure",
    subtitle: "Velvet midnight rose dipped in dark cacao and black truffle.",
    family: "Chypre Floral",
    concentration: "Extrait de Parfum",
    concentrationPercent: 42,
    price: 340,
    sizes: [
      { ml: 50, price: 230, label: "50ml Travel Flacon" },
      { ml: 100, price: 340, label: "100ml Signature Edition" },
      { ml: 250, price: 590, label: "250ml Maison Decanter" },
    ],
    description:
      "กุหลาบ Centifolia พันธุ์หายากแห่งทุ่งหญ้าเมือง Grasse เก็บเกี่ยวก่อนแสงแรกของวัน ผสานกลิ่นช็อกโกแลตดำดิบ ทรัฟเฟิลดำ และพิมเสนหมัก ให้สัมผัสเย้ายวนชวนหลงใหล",
    accentColor: "#e05675",
    tagColor: "border-rose-500/30 text-rose-300",
    badge: "HARVEST 2026",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=80",
    notes: {
      top: ["Crimson Damask Rose", "Wild Blackberry", "Sparkling Mandarin"],
      heart: ["Grasse Centifolia Absolu", "Périgord Black Truffle", "Raw Cacao"],
      base: ["Aged Patchouli", "Bourbon Vanilla Pods", "Soft Musk", "Benzoin"],
    },
    metrics: {
      longevity: "24+ ชั่วโมง",
      sillage: "นุ่มนวลแต่ตราตรึง (Magnetic Velvet)",
      projectionScore: 4,
      complexityScore: 5,
    },
    story:
      "กุหลาบหนึ่งตันใช้สกัดน้ำมันหอมระเหยบริสุทธิ์ได้เพียงไม่กี่หยด ถูกนำมาจับคู่กับความดิบเท่ของทรัฟเฟิลดำเพื่อลบภาพจำกุหลาบแบบดั้งเดิม สู่ความลักชัวรีร่วมสมัย",
    character: "Sensual • Enigmatic • Opulent",
    idealOccasion: "ดินเนอร์สุดหรู, บรรยากาศโรแมนติกสองต่อสอง, งานศิลปะ",
  },
  {
    id: "santal-obsidienne",
    name: "SANTAL OBSIDIENNE",
    frenchName: "Bois d'Ombre et de Pierre",
    subtitle: "Creamy Mysore sandalwood balanced by volcanic obsidian smoke.",
    family: "Smoky Woody",
    concentration: "Extrait de Parfum",
    concentrationPercent: 48,
    price: 360,
    sizes: [
      { ml: 50, price: 240, label: "50ml Travel Flacon" },
      { ml: 100, price: 360, label: "100ml Signature Edition" },
      { ml: 250, price: 620, label: "250ml Maison Decanter" },
    ],
    description:
      "แก่นไม้จันทน์หอมแห่งไมซอร์อันศักดิ์สิทธิ์ ปรุงด้วยควันไม้ซีดาร์สีขาว เมล็ดกระวานเขียว และไอริสบัตเตอร์ ให้กลิ่นครีมมี่นุ่มละมุน ลึกลับ และสง่างามดั่งหินออบซิเดียน",
    accentColor: "#c2956c",
    tagColor: "border-amber-600/30 text-amber-200",
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80",
    notes: {
      top: ["Green Cardamom", "Nutmeg Essence", "Cypress Needles"],
      heart: ["Mysore Sandalwood Heart", "Florentine Iris", "Cedar Flakes"],
      base: ["Incense Tears", "Amber Resin", "White Leather", "Dry Birch"],
    },
    metrics: {
      longevity: "28+ ชั่วโมง",
      sillage: "อบอุ่นและมีภูมิฐาน (Warm Architectural)",
      projectionScore: 4,
      complexityScore: 4,
    },
    story:
      "สรรค์สร้างความสงบเหนือกาลเวลาด้วยไม้จันทน์หอมแท้ที่หายากยิ่ง ผสานความทันสมัยด้วยกลิ่นควันไอริส ให้ความรู้สึกเหมือนกำลังเดินเข้าสู่แกลเลอรีสถาปัตยกรรมหินอ่อนสีดำ",
    character: "Sophisticated • Serene • Architectural",
    idealOccasion: "การประชุมสำคัญ, งานบริหารระดับสูง, การพักผ่อนอย่างมีระดับ",
  },
  {
    id: "neroli-celeste",
    name: "NÉROLI CÉLESTE",
    frenchName: "Aqua Florale Cristalline",
    subtitle: "High-altitude bitter orange blossoms over sparkling mineral sea salt.",
    family: "Fresh Citrus Floral",
    concentration: "Eau de Parfum Intense",
    concentrationPercent: 32,
    price: 290,
    sizes: [
      { ml: 50, price: 195, label: "50ml Travel Flacon" },
      { ml: 100, price: 290, label: "100ml Signature Edition" },
      { ml: 250, price: 510, label: "250ml Maison Decanter" },
    ],
    description:
      "ดอกส้มเนโรลีเกรดพิเศษจากเทือกเขาแอตลาส ผสานความโปร่งสะอาดของเกลือสมุทรเมดิเตอร์เรเนียน และ Ambroxan บริสุทธิ์ ให้ความสดชื่นไร้ที่ติประหนึ่งสายลมเหนือหน้าผาริมทะเล",
    accentColor: "#5dc0de",
    tagColor: "border-cyan-500/30 text-cyan-300",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80",
    notes: {
      top: ["Moroccan Neroli", "Calabrian Petitgrain", "Crisp Bergamot Zest"],
      heart: ["Orange Blossom Absolute", "Solar Jasmine", "Sea Salt Crystals"],
      base: ["Crystal Ambroxan", "Clean Cedarwood", "Sun-dried Driftwood"],
    },
    metrics: {
      longevity: "18+ ชั่วโมง",
      sillage: "สดใส สะอาด ปลอดโปร่ง (Airy & Radiant)",
      projectionScore: 4,
      complexityScore: 4,
    },
    story:
      "นิยามใหม่ของกลิ่นสดชื่นที่ไม่ระเหยหายไปในพริบตา ด้วยเทคนิคการสกัดเย็นแบบพิเศษรักษาอนุภาคกลิ่นน้ำมันหอมระเหยให้ติดทนนานตลอดวัน",
    character: "Luminous • Clean • Effortless Luxury",
    idealOccasion: "เช้าวันสบายๆ, ทริปเรือยอชต์, บรรยากาศกลางแจ้ง, ออฟฟิศระดับหรู",
  },
  {
    id: "vanille-imperiale",
    name: "VANILLE IMPÉRIALE",
    frenchName: "Or Liquide et Épices",
    subtitle: "Smoked bourbon vanilla infused with saffron threads and vintage rum.",
    family: "Gourmand Oriental",
    concentration: "Extrait de Parfum",
    concentrationPercent: 50,
    price: 380,
    sizes: [
      { ml: 50, price: 250, label: "50ml Travel Flacon" },
      { ml: 100, price: 380, label: "100ml Signature Edition" },
      { ml: 250, price: 650, label: "250ml Maison Decanter" },
    ],
    description:
      "ฝักวานิลลาแท้จากมาดากัสการ์หมักบ่มในถังไม้โอ๊ค ผสานกลิ่นเหล้ารัมวินเทจ เกสรหญ้าฝรั่นสีทอง และทองก้าบีน ให้กลิ่นหวานลุ่มลึก อบอุ่น นุ่มนวล ไม่เลี่ยน",
    accentColor: "#dfa745",
    tagColor: "border-yellow-600/30 text-yellow-300",
    badge: "LIMITED EDITION",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
    notes: {
      top: ["Spanish Saffron Threads", "Aged Caribbean Rum", "Bitter Almond"],
      heart: ["Smoked Bourbon Vanilla Caviar", "Heliotrope", "Roasted Tonka Bean"],
      base: ["Golden Amber", "White Sandalwood", "Musk Absolu"],
    },
    metrics: {
      longevity: "30+ ชั่วโมง",
      sillage: "อบอุ่น เย้ายวน สะกดใจ (Intoxicating Sillage)",
      projectionScore: 5,
      complexityScore: 5,
    },
    story:
      "นำฝักวานิลลาคุณภาพระดับ Grand Cru มาบ่มอย่างพิถีพิถันนาน 18 เดือน เพื่อดึงน้ำมันหอมกลิ่นเหล้ารัมและคาราเมลรมควันอันเป็นเอกลักษณ์เฉพาะของจักรพรรดิ",
    character: "Decadent • Warm • Hypnotic",
    idealOccasion: "ค่ำคืนในฤดูหนาว, ดินเนอร์ใต้แสงเทียน, ช่วงเวลาผ่อนคลายในเลานจ์ส่วนตัว",
  },
  {
    id: "soleil-de-grasse",
    name: "SOLEIL DE GRASSE",
    frenchName: "Éclat Solaire de Provence",
    subtitle: "Golden honeyed jasmine enveloped in solar white amber.",
    family: "Solar Floral",
    concentration: "Extrait de Parfum",
    concentrationPercent: 40,
    price: 320,
    sizes: [
      { ml: 50, price: 215, label: "50ml Travel Flacon" },
      { ml: 100, price: 320, label: "100ml Signature Edition" },
      { ml: 250, price: 550, label: "250ml Maison Decanter" },
    ],
    description:
      "การจำลองแสงอาทิตย์สีทองยามบ่าย ณ แคว้นโพรวองซ์ ดอกมะลิดับเบิลแจสมิน ผสานน้ำผึ้งป่าสีอำพันและไวท์มัสก์ ให้กลิ่นหอมอบอุ่น กระจ่างใส และเปี่ยมด้วยชีวิตชีวา",
    accentColor: "#f4a261",
    tagColor: "border-orange-500/30 text-orange-200",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=80",
    notes: {
      top: ["Golden Bergamot", "Ylang-Ylang Extra", "White Peach Nectar"],
      heart: ["Grasse Jasmine Grandiflorum", "Solar Blossom Accord", "Wild Honey"],
      base: ["Solar White Amber", "Sheer Sandalwood", "Silk Musk"],
    },
    metrics: {
      longevity: "22+ ชั่วโมง",
      sillage: "เปล่งประกาย สว่างไสว (Radiant Aura)",
      projectionScore: 4,
      complexityScore: 4,
    },
    story:
      "เฉลิมฉลองประเพณีการเก็บเกี่ยวมะลิด้วยมือในเมือง Grasse ถ่ายทอดพลังของแสงแดดอบอุ่นที่สะท้อนผ่านขวดแก้วคริสตัลอย่างวิจิตรบรรจง",
    character: "Radiant • Uplifting • Regal",
    idealOccasion: "งานเลี้ยงกลางวัน, วันฉลองความสำเร็จ, วันท่องเที่ยวระดับเฟิร์สคลาส",
  },
];
