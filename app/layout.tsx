import "./globals.css";
import { Outfit, Ovo } from "next/font/google";
import Navbar from "./components/Navbar"; // 👈 import here

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable}`}>
        <Navbar />   {/* 👈 use Navbar globally */}
        {children}
      </body>
    </html>
  );
}
