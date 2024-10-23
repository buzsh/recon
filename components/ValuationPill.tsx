import React from 'react';
import { formatCurrency } from '../app/utils/formatCurrency';
import { FundingRoundType } from '../data/types';

interface ValuationPillProps {
  valuation: number;
  amountRaised: number;
  fundingRoundType: FundingRoundType;
  isDarkMode?: boolean;
}

const getColorClasses = (percentage: number, fundingRoundType: FundingRoundType, isDarkMode: boolean): string => {
  const ranges = {
    'Pre-Seed': { veryBad: 30, slightlyBad: 25, common: 10, slightlyGood: 5 },
    'Seed': { veryBad: 30, slightlyBad: 25, common: 10, slightlyGood: 5 },
    'Series A': { veryBad: 30, slightlyBad: 25, common: 15, slightlyGood: 10 },
    'Series B': { veryBad: 25, slightlyBad: 20, common: 10, slightlyGood: 5 },
    'Series C': { veryBad: 20, slightlyBad: 15, common: 5, slightlyGood: 3 },
    'Series D': { veryBad: 15, slightlyBad: 10, common: 5, slightlyGood: 3 },
    'Series E': { veryBad: 15, slightlyBad: 10, common: 5, slightlyGood: 3 },
    'Series F': { veryBad: 15, slightlyBad: 10, common: 5, slightlyGood: 3 },
    'Series G': { veryBad: 15, slightlyBad: 10, common: 5, slightlyGood: 3 },
    'Series H': { veryBad: 15, slightlyBad: 10, common: 5, slightlyGood: 3 },
  };

  const range = ranges[fundingRoundType] || ranges['Series D'];

  if (percentage > range.veryBad) {
    return isDarkMode ? 'bg-red-900 text-red-100' : 'bg-red-100 text-red-800';
  } else if (percentage > range.slightlyBad) {
    return isDarkMode ? 'bg-orange-900 text-orange-100' : 'bg-orange-100 text-orange-800';
  } else if (percentage > range.common) {
    return isDarkMode ? 'bg-yellow-900 text-yellow-100' : 'bg-yellow-100 text-yellow-800';
  } else if (percentage > range.slightlyGood) {
    return isDarkMode ? 'bg-green-900 text-green-100' : 'bg-green-100 text-green-800';
  } else {
    return isDarkMode ? 'bg-emerald-900 text-emerald-100' : 'bg-emerald-100 text-emerald-800';
  }
};

const ValuationPill: React.FC<ValuationPillProps> = ({ valuation, amountRaised, fundingRoundType, isDarkMode = false }) => {
  const percentage = (amountRaised / valuation) * 100;
  const colorClasses = getColorClasses(percentage, fundingRoundType, isDarkMode);

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${colorClasses}`}>
      {formatCurrency(valuation)} / {percentage.toFixed(1)}%
    </span>
  );
};

export default ValuationPill;
