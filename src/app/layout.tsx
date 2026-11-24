import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ANITHIUM — Technology & Innovation",
    template: "%s | ANITHIUM",
  },
  description:
    "ANITHIUM is an independent technology and innovation company building digital experiences, intelligent systems, and ventures.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
