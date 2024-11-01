"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import StartupList from "../components/StartupList";
import DetailView from "../components/DetailView";
import MobileLayout from "../components/MobileLayout";
import { industries, startups } from "../data/sampleData";
import useIsMobile from "../hooks/useIsMobile";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileLayout industries={industries} startups={startups} />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar
        industries={industries}
        selectedIndustryId={null}
        onSelectIndustry={(industryId) => {
          if (industryId) {
            router.push(`/${industryId}`);
          } else {
            router.push('/');
          }
        }}
      />
      <StartupList
        startups={startups}
        selectedStartupId={null}
        onSelectStartup={(startupId) => router.push(`/all/${startupId}`)}
        selectedIndustryName={null}
      />
      <DetailView startup={null} />
    </div>
  );
}
