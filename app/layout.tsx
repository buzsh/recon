import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TrendingUp } from 'react-feather'; // Correct import for react-feather

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MarketRecon",
  description: "Market intelligence and startup funding data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="h-11 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
            <h1 className="text-lg font-semibold">
              <span className="text-black dark:text-white">Market</span>
              <span className="text-blue-500 dark:text-blue-400">Recon</span>
            </h1>
          </div>
        </header>
        <main className="h-[calc(100vh-44px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
