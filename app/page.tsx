"use client";

import Sidebar from "../components/Sidebar";
import StartupList from "../components/StartupList";
import DetailView from "../components/DetailView";
import { industries, startups } from "../data/sampleData";
import { useState } from "react";
import { Startup } from "../data/types";

export default function Home() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<number | null>(
    null
  );
  const [selectedStartupId, setSelectedStartupId] = useState<number | null>(
    null
  );

  const handleSelectIndustry = (industryId: number) => {
    setSelectedIndustryId(industryId);
    setSelectedStartupId(null);
  };

  const handleSelectStartup = (startupId: number) => {
    setSelectedStartupId(startupId);
  };

  const filteredStartups: Startup[] =
    selectedIndustryId !== null
      ? industries.find((ind) => ind.id === selectedIndustryId)?.startups || []
      : [];

  const selectedStartup: Startup | null =
    selectedStartupId !== null
      ? startups.find((s) => s.id === selectedStartupId) || null
      : null;

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
      />
      <DetailView startup={selectedStartup} />
    </div>
  );
}
