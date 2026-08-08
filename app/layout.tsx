import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeevan Aryal — IT Analyst",
  description:
    "Portfolio of Jeevan Aryal, an IT Analyst with a focus on cybersecurity, systems, and data.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
