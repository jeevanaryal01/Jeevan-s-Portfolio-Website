import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Jeevan Aryal — IT Analyst",
  description:
    "Jeevan Aryal is an IT Analyst in Sydney working across cybersecurity, threat intelligence, and AI systems. Highlight what interests you and send it over.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full ${archivo.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
