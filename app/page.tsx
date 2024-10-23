"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import StartupList from "../components/StartupList";
import DetailView from "../components/DetailView";
import MobileLayout from "../components/MobileLayout";
import { industries, startups } from "../data/sampleData";
import { Startup, Industry } from "../data/types";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState<number | null>(null);
  const [selectedStartupId, setSelectedStartupId] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectIndustry = (industryId: number | null) => {
    setSelectedIndustryId(industryId);
    setSelectedStartupId(null);
    const industry = industryId !== null ? industries.find(ind => ind.id === industryId) : null;
    setSelectedIndustry(industry || null);
  };

  const handleSelectStartup = (startupId: number) => {
    setSelectedStartupId(startupId);
  };

  const filteredStartups: Startup[] =
    selectedIndustryId !== null
      ? industries.find((ind) => ind.id === selectedIndustryId)?.startups || []
      : startups;

  const selectedStartup: Startup | null =
    selectedStartupId !== null
      ? startups.find((s) => s.id === selectedStartupId) || null
      : null;

  if (isMobile) {
    return <MobileLayout industries={industries} startups={startups} />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar
        industries={industries}
        selectedIndustryId={selectedIndustryId}
        onSelectIndustry={handleSelectIndustry}
      />
      <StartupList
        startups={filteredStartups}
        selectedStartupId={selectedStartupId}
        onSelectStartup={handleSelectStartup}
        selectedIndustryName={selectedIndustry?.name || null}
      />
      <DetailView startup={selectedStartup} />
    </div>
  );
}
