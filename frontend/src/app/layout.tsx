import type { Metadata, Viewport } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anithium.in"),
  title: {
    default: "ANITHIUM — Technology & Innovation",
    template: "%s | ANITHIUM",
  },
  description:
    "ANITHIUM is an independent technology and innovation company shaped by curiosity, independent thinking, and the possibilities of technology.",
  applicationName: "ANITHIUM",
  openGraph: {
    title: "ANITHIUM — Technology & Innovation",
    description:
      "An independent technology and innovation company driven by curiosity, guided by intent, and focused on what could be possible next.",
    url: "https://anithium.in",
    siteName: "ANITHIUM",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ANITHIUM — Technology & Innovation",
    description:
      "An independent technology and innovation company driven by curiosity, guided by intent, and focused on what could be possible next.",
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
