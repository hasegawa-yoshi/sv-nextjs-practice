import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from "/public/metadata/onepiece13_crocodile.png";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.jsを学ぶ",
  description: "Next.jsを学び一人前を目指します",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
