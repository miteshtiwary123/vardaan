import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins, Alex_Brush } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

// Font Configurations
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins"
});

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alex-brush"
});

export const metadata: Metadata = {
  title: "Vardaan Enterprises",
  description: "Authentic Indian sweets, sacred cow dung crafts, and pure herbal remedies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${poppins.variable} ${alexBrush.variable} antialiased bg-[#F4EFE6] m-0 p-0`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}