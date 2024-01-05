import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Canvas from "./ui/Canvas.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React three fiber Tshirt Customizer",
  description: "Created by R3F, ported to NextJS by Josh Lehman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <Canvas />
          {children}
        </div>
      </body>
    </html>
  );
}
