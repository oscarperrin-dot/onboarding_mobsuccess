import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MobSuccess Onboarding",
  description: "Serious game d'onboarding pour MobSuccess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
