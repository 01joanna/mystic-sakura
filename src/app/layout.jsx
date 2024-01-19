"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SakuraProvider from "./context";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SakuraProvider>{children}</SakuraProvider>
      </body>
    </html>
  );
}
