import React from "react";
import { Startup } from "../data/types";

interface StartupListProps {
  startups: Startup[];
  selectedStartupId: number | null;
  onSelectStartup: (startupId: number) => void;
}

const StartupList: React.FC<StartupListProps> = ({
  startups,
  selectedStartupId,
  onSelectStartup,
}) => {
  return (
    <div className="w-full md:w-96 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-[21px] font-semibold text-gray-500 mb-4 pl-2 leading-[25px] tracking-[0.23px]">
          Startups
        </h2>
        <ul className="space-y-1">
          {startups.map((startup) => {
            const latestFundingRound = startup.fundingRounds[0];
            const aiSummary = latestFundingRound?.aiSummary?.content || "";
            return (
              <li key={startup.id}>
                <button
                  onClick={() => onSelectStartup(startup.id)}
                  className={`w-full text-left p-3 rounded-lg ${
                    selectedStartupId === startup.id
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[17px] font-semibold tracking-[-0.37px] leading-[21px] truncate">
                      {startup.name}
                    </span>
                    {latestFundingRound && (
                      <span className="text-[14px] tracking-[-0.22px] leading-[18px] truncate">
                        {latestFundingRound.series}: ${latestFundingRound.amountRaised.toLocaleString()}
                        {latestFundingRound.valuation && ` - Valuation: $${latestFundingRound.valuation.toLocaleString()}`}
                      </span>
                    )}
                    <p className="text-[14px] tracking-[-0.22px] leading-[18px] text-gray-500 line-clamp-2">
                      {aiSummary}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StartupList;