import React, { useState } from 'react';
import StartupList from './StartupList';
import DetailView from './DetailView';
import { Industry, Startup } from '../data/types';
import { IoChevronBackOutline } from "react-icons/io5";
import { FaFolder, FaGlobe, FaInbox, FaEnvelope, FaPaperPlane, FaTrash } from 'react-icons/fa';

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
          {view === 'industries' && 'Dashboard'}
          {view === 'startups' && selectedIndustryName}
          {view === 'detail' && selectedStartup?.name}
        </h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        {view === 'industries' && (
          <div className="p-4">
            <h2 className="text-[21px] font-semibold text-gray-500 dark:text-gray-400 mb-4 pl-2 leading-[25px] tracking-[0.23px]">
              Industries
            </h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleSelectIndustry(null)}
                  className="w-full flex items-center px-4 py-3 rounded-md text-[17px] font-normal tracking-[-0.24px] leading-[20px] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2c2c2e]"
                >
                  <FaGlobe className="w-6 h-6 mr-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="truncate">All Industries</span>
                </button>
              </li>
              {industries.map((industry) => (
                <li key={industry.id}>
                  <button
                    onClick={() => handleSelectIndustry(industry.id)}
                    className="w-full flex items-center px-4 py-3 rounded-md text-[17px] font-normal tracking-[-0.24px] leading-[20px] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2c2c2e]"
                  >
                    <FaFolder className="w-6 h-6 mr-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span className="truncate">{industry.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            
            <h2 className="text-[21px] font-semibold text-gray-500 dark:text-gray-400 mt-8 mb-4 pl-2 leading-[25px] tracking-[0.23px]">
              Mailbox
            </h2>
            <ul className="space-y-2">
              {[
                { icon: FaInbox, name: "Inbox" },
                { icon: FaEnvelope, name: "Drafts" },
                { icon: FaPaperPlane, name: "Sent" },
                { icon: FaTrash, name: "Trash" },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full flex items-center px-4 py-3 rounded-md text-[17px] font-normal tracking-[-0.24px] leading-[20px] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2c2c2e]"
                  >
                    <item.icon className="w-6 h-6 mr-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
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
