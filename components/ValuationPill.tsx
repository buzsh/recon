import React from 'react';
import { formatCurrency } from '../app/utils/formatCurrency';

interface ValuationPillProps {
  valuation: number;
  amountRaised: number;
}

const ValuationPill: React.FC<ValuationPillProps> = ({ valuation, amountRaised }) => {
  const percentage = ((amountRaised / valuation) * 100).toFixed(1);

  return (
    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
      {formatCurrency(valuation)} / {percentage}%
    </span>
  );
};

export default ValuationPill;
