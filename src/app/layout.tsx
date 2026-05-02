import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "偉勇工業社 | Weiyon Industry - 精密金屬零件加工專家",
  description: "深耕產業40年的金屬零件製造專家，提供CNC精密加工、半導體設備零件、機器人自動化組件、無人機航太零件等專業加工服務",
  keywords: "金屬加工, CNC加工, 精密零件, 半導體設備, 自動化, 航太零件, 台中, 烏日",
  authors: [{ name: "偉勇工業社" }],
  openGraph: {
    title: "偉勇工業社 | Weiyon Industry",
    description: "深耕產業40年的金屬零件製造專家",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
