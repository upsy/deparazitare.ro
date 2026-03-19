import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deparazitare Naturală — Ghid pentru Părinți | deparazitare.ro",
    template: "%s | deparazitare.ro",
  },
  description:
    "Ghid complet de deparazitare naturală pentru copii 4+ ani și femei care alăptează. Informații validate despre paraziți intestinali, simptome, tratamente naturale și prevenție.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-bg text-text">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
