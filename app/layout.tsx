import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/nav/top-nav";
import EndSlate from "@/components/footer/end-slate";

// single-typeface discipline: Archivo carries display, UI, and micro-labels.
// Closest free analog to LamboType — Neo-Grotesk, variable weights 100–900,
// and actual width axes. Loaded once, aliased three times.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LONGFRAME — A CALGARY FILM CREW",
  description:
    "A three-person production crew out of Calgary. Commercials, documentaries, and the occasional short that shouldn't exist but does.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body
        style={{
          fontFamily:
            "var(--font-archivo), 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <TopNav />
        {children}
        <EndSlate />
      </body>
    </html>
  );
}
