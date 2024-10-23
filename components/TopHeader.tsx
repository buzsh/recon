"use client";

import React, { useState } from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import FundingRoundPill from './FundingRoundPill';
import ValuationPill from './ValuationPill';
import { FundingRoundType } from '../data/types';
import { formatCurrency } from '../app/utils/formatCurrency';

export interface TickerItem {
  id: number;
  name: string;
  latestFundingRound: {
    type: FundingRoundType;
    amountRaised: number;
    valuation: number | undefined;
  };
}

interface TopHeaderProps {
  tickerItems: TickerItem[];
}

const TopHeader: React.FC<TopHeaderProps> = ({ tickerItems }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <header className="h-11 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
      <div className="flex items-center">
        <FaArrowTrendUp className="text-blue-500 dark:text-blue-400 mr-2" />
        <h1 className="text-xl font-bold">
          <span className="text-black dark:text-white">Market</span>
          <span className="text-blue-500 dark:text-blue-400">Recon</span>
        </h1>
      </div>
      <div 
        className="flex-1 overflow-hidden ml-4 ticker-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`animate-ticker flex whitespace-nowrap ${isPaused ? 'paused' : ''}`}>
          {tickerItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <span className="inline-flex items-center space-x-1 mx-4">
                <span className="font-bold text-black dark:text-white">{item.name}</span>
                <FundingRoundPill type={item.latestFundingRound.type} />
                <span className="font-bold text-black dark:text-white">
                  {formatCurrency(item.latestFundingRound.amountRaised)}
                </span>
                <span className="text-gray-500 dark:text-gray-400">@</span>
                {item.latestFundingRound.valuation && (
                  <ValuationPill
                    valuation={item.latestFundingRound.valuation}
                    amountRaised={item.latestFundingRound.amountRaised}
                    fundingRoundType={item.latestFundingRound.type}
                  />
                )}
              </span>
              {index < tickerItems.length - 1 && (
                <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
