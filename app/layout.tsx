import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader, { TickerItem } from "../components/TopHeader";
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

const prepareTickerItems = (): TickerItem[] => {
  return startups
    .map(startup => {
      const latestRound = startup.fundingRounds[0];
      if (latestRound) {
        return {
          id: startup.id,
          name: startup.name,
          latestFundingRound: {
            type: latestRound.type,
            amountRaised: latestRound.amountRaised,
            valuation: latestRound.valuation
          }
        };
      }
      return null;
    })
    .filter((item): item is TickerItem => item !== null);
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
