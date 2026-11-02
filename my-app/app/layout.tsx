import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA HAUTE PARFUMERIE — The Art of Olfactive Luxury",
  description: "Crafted in Grasse. Designed for eternity. Experience the pinnacle of luxury perfumery inspired by modern architectural design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#000000] text-[#f5f5f7] selection:bg-[#c6a87d]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
