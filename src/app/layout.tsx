import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weronika Targońska | Portfolio",
  description: "Portfolio Weroniki Targońskiej - creative director, content creator, digital host z Polski.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable} ${bebas.variable} antialiased bg-wero-bg text-wero-accent min-h-screen font-sans`}>
        {children}
      </body>
    </html>
  );
}
