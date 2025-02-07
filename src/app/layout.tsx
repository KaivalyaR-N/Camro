import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "./lib/util";
import { Inter } from 'next/font/google';
import Navbar from "./components/Navbar";
import Providers from "@/components/providers";


const inter = Inter({
  subsets: ['latin'], // This defines the subsets you want (usually 'latin')
  weight: ['400', '500', '700'], // Optional: Define the font weights you need
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <Providers>
      <body
        className={cn(
          'min-h-screen font-sans antialiased grainy',
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body></Providers>
    </html>
  );
}
