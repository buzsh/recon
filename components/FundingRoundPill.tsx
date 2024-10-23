import React from 'react';
import { FundingRoundType } from '../data/types';

interface FundingRoundPillProps {
  type: FundingRoundType;
}

const pillColors = {
  'Pre-Seed': 'bg-pink-100 text-pink-800',
  'Seed': 'bg-yellow-100 text-yellow-800',
  'Series A': 'bg-blue-100 text-blue-800',
  'Series B': 'bg-green-100 text-green-800',
  'Series C': 'bg-purple-100 text-purple-800',
  'Series D': 'bg-gray-200 text-gray-800',
  'Series E': 'bg-gray-200 text-gray-800',
  'Series F': 'bg-gray-200 text-gray-800',
  'Series G': 'bg-gray-200 text-gray-800',
  'Series H': 'bg-gray-200 text-gray-800',
};

const FundingRoundPill: React.FC<FundingRoundPillProps> = ({ type }) => {
  const colorClasses = pillColors[type] || 'bg-gray-200 text-gray-800';

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${colorClasses}`}>
      {type.toUpperCase()}
    </span>
  );
};

export default FundingRoundPill;
