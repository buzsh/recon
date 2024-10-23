import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StartupList from './StartupList';
import DetailView from './DetailView';
import { Industry, Startup } from '../data/types';
import { IoChevronBackOutline } from "react-icons/io5";

interface MobileLayoutProps {
  industries: Industry[];
  startups: Startup[];
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ industries, startups }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<number | null>(null);
  const [selectedStartupId, setSelectedStartupId] = useState<number | null>(null);
  const [view, setView] = useState<'industries' | 'startups' | 'detail'>('industries');

  const handleSelectIndustry = (industryId: number | null) => {
    setSelectedIndustryId(industryId);
    setView('startups');
  };

  const handleSelectStartup = (startupId: number) => {
    setSelectedStartupId(startupId);
    setView('detail');
  };

  const handleBack = () => {
    if (view === 'detail') {
      setView('startups');
    } else if (view === 'startups') {
      setView('industries');
      setSelectedIndustryId(null);
    }
  };

  const filteredStartups = selectedIndustryId !== null
    ? industries.find(ind => ind.id === selectedIndustryId)?.startups || []
    : startups;

  const selectedStartup = selectedStartupId
    ? startups.find(s => s.id === selectedStartupId) || null
    : null;

  const selectedIndustryName = selectedIndustryId !== null
    ? industries.find(ind => ind.id === selectedIndustryId)?.name || "All Industries"
    : "All Industries";

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <header className="bg-gray-100 dark:bg-gray-900 p-4 flex items-center border-b border-gray-200 dark:border-gray-800">
        {view !== 'industries' && (
          <button onClick={handleBack} className="mr-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            <IoChevronBackOutline className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl font-semibold">
          {view === 'industries' && 'Industries'}
          {view === 'startups' && selectedIndustryName}
          {view === 'detail' && selectedStartup?.name}
        </h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        {view === 'industries' && (
          <Sidebar
            industries={industries}
            selectedIndustryId={selectedIndustryId}
            onSelectIndustry={handleSelectIndustry}
          />
        )}
        {view === 'startups' && (
          <StartupList
            startups={filteredStartups}
            selectedStartupId={selectedStartupId}
            onSelectStartup={handleSelectStartup}
            selectedIndustryName={selectedIndustryName}
          />
        )}
        {view === 'detail' && <DetailView startup={selectedStartup} />}
      </main>
    </div>
  );
};

export default MobileLayout;
