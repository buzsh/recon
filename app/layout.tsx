import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "../components/TopHeader";
import { startups } from "../data/sampleData";

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

const prepareTickerItems = () => {
  return startups.map(startup => ({
    id: startup.id,
    name: startup.name,
    latestFundingRound: startup.fundingRounds[0] ? {
      type: startup.fundingRounds[0].type,
      amountRaised: startup.fundingRounds[0].amountRaised,
      valuation: startup.fundingRounds[0].valuation
    } : undefined
  })).filter(item => item.latestFundingRound);
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tickerItems = prepareTickerItems();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader tickerItems={tickerItems} />
        <main className="h-[calc(100vh-44px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
