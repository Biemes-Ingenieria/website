import type { Metadata } from "next";
import { neueHaas } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biemes",
  description: "Sitio en construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={neueHaas.variable}>
      <body>{children}</body>
    </html>
  );
}
