// app/layout.tsx
import type { Metadata } from "next";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Next.js Web3 Boilerplate",
  description: "A Next.js boilerplate with Web3 and RainbowKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
