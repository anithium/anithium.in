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
    "ANITHIUM is an independent technology and innovation company building digital experiences, intelligent systems, and ventures.",
  applicationName: "ANITHIUM",
  openGraph: {
    title: "ANITHIUM — Technology & Innovation",
    description:
      "We turn ambitious ideas into meaningful digital experiences, intelligent systems, and ventures built for the future.",
    url: "https://anithium.in",
    siteName: "ANITHIUM",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ANITHIUM — Technology & Innovation",
    description:
      "We turn ambitious ideas into meaningful digital experiences, intelligent systems, and ventures built for the future.",
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
