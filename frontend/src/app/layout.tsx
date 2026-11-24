import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ibm-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://anithium.in"),
  title: { default: "ANITHIUM Labs — Software & AI Engineering", template: "%s | ANITHIUM Labs" },
  description: "ANITHIUM Labs works with founders, teams and businesses on product engineering, custom software, applied AI systems and integrations.",
  applicationName: "ANITHIUM Labs",
  openGraph: {
    title: "ANITHIUM Labs — Software & AI Engineering",
    description: "Product engineering, applied AI and software systems built around real operational problems.",
    url: "https://anithium.in",
    siteName: "ANITHIUM Labs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ANITHIUM Labs — Software & AI Engineering",
    description: "Product engineering, applied AI and software systems built around real operational problems.",
  },
};

export const viewport: Viewport = { themeColor: "#151817", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>{children}</body></html>;
}
