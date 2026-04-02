import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const displayFont = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"]
});

const bodyFont = Public_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Academia - Smart Academic Tools for Students",
  description: "Empowering your academic journey with precision tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
