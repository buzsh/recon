import React, { useRef, useState, useEffect } from 'react';
import { FundingRound, FundingRoundType } from '../data/types';
import { formatCurrency } from '../app/utils/formatCurrency';

interface FundingHistoryGraphProps {
  fundingRounds: FundingRound[];
}

const pillColors = {
  'Pre-Seed': '#FED7E2',
  'Seed': '#FEF3C7',
  'Series A': '#DBEAFE',
  'Series B': '#D1FAE5',
  'Series C': '#E9D5FF',
  'Series D': '#E5E7EB',
  'Series E': '#E5E7EB',
  'Series F': '#E5E7EB',
  'Series G': '#E5E7EB',
  'Series H': '#E5E7EB',
};

const FundingHistoryGraph: React.FC<FundingHistoryGraphProps> = ({ fundingRounds }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 400
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const sortedRounds = [...fundingRounds].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const cumulativeFunding = sortedRounds.reduce((acc, round, index) => {
    const previousTotal = index > 0 ? acc[index - 1].total : 0;
    return [...acc, { ...round, total: previousTotal + round.amountRaised }];
  }, [] as (FundingRound & { total: number })[]);

  const maxAmount = Math.max(
    cumulativeFunding[cumulativeFunding.length - 1].total,
    Math.max(...cumulativeFunding.map(round => round.valuation || 0))
  );

  const margin = { top: 20, right: 20, bottom: 60, left: 60 };
  const chartWidth = dimensions.width - margin.left - margin.right;
  const chartHeight = dimensions.height - margin.top - margin.bottom;

  const xScale = (index: number) => (index / (cumulativeFunding.length - 1)) * chartWidth;
  const yScale = (value: number) => chartHeight - (value / maxAmount) * chartHeight;

  const fundingLine = cumulativeFunding.map((round, index) => 
    `${xScale(index)},${yScale(round.total)}`
  ).join(' ');

  const valuationLine = cumulativeFunding.map((round, index) => 
    round.valuation ? `${xScale(index)},${yScale(round.valuation)}` : ''
  ).filter(Boolean).join(' ');

  return (
    <div ref={containerRef} style={{ width: '100%', height: '400px' }} className="text-gray-900 dark:text-gray-100">
      <svg width={dimensions.width} height={dimensions.height} className="bg-white dark:bg-black">
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Y-axis */}
          <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="currentColor" />
          {[0, 0.25, 0.5, 0.75, 1].map((tick, index) => (
            <g key={index} transform={`translate(0, ${chartHeight * (1 - tick)})`}>
              <line x1={-5} y1={0} x2={0} y2={0} stroke="currentColor" />
              <text x={-10} y={5} textAnchor="end" fontSize="12" fill="currentColor">
                {formatCurrency(maxAmount * tick)}
              </text>
            </g>
          ))}

          {/* X-axis */}
          <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="currentColor" />
          {cumulativeFunding.map((round, index) => (
            <g key={index} transform={`translate(${xScale(index)}, ${chartHeight})`}>
              <text x={0} y={20} textAnchor="middle" fontSize="12" transform="rotate(-45)" fill="currentColor">
                {round.type}
              </text>
              <text x={0} y={35} textAnchor="middle" fontSize="10" transform="rotate(-45)" fill="currentColor">
                {new Date(round.date).toLocaleDateString()}
              </text>
            </g>
          ))}

          {/* Cumulative Funding Line */}
          <polyline
            points={fundingLine}
            fill="none"
            stroke="#4299E1"
            strokeWidth="2"
          />

          {/* Valuation Line */}
          <polyline
            points={valuationLine}
            fill="none"
            stroke="#48BB78"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Data Points */}
          {cumulativeFunding.map((round, index) => (
            <g key={index}>
              <circle
                cx={xScale(index)}
                cy={yScale(round.total)}
                r="4"
                fill={pillColors[round.type as FundingRoundType]}
                stroke="#4299E1"
                strokeWidth="2"
              />
              <text
                x={xScale(index)}
                y={yScale(round.total) - 10}
                textAnchor="middle"
                fontSize="10"
                fill="currentColor"
              >
                {formatCurrency(round.amountRaised)}
              </text>
              {round.valuation && (
                <>
                  <circle
                    cx={xScale(index)}
                    cy={yScale(round.valuation)}
                    r="4"
                    fill="#48BB78"
                    stroke="#48BB78"
                    strokeWidth="2"
                  />
                  <text
                    x={xScale(index)}
                    y={yScale(round.valuation) - 10}
                    textAnchor="middle"
                    fontSize="10"
                    fill="currentColor"
                  >
                    {formatCurrency(round.valuation)}
                  </text>
                </>
              )}
            </g>
          ))}
        </g>

        {/* Legend */}
        <g transform={`translate(${margin.left}, ${dimensions.height - 20})`}>
          <line x1={0} y1={-5} x2={20} y2={-5} stroke="#4299E1" strokeWidth="2" />
          <text x={25} y={0} fontSize="12" fill="currentColor">Cumulative Funding</text>
          <line x1={150} y1={-5} x2={170} y2={-5} stroke="#48BB78" strokeWidth="2" strokeDasharray="5,5" />
          <text x={175} y={0} fontSize="12" fill="currentColor">Valuation</text>
        </g>
      </svg>
    </div>
  );
};

export default FundingHistoryGraph;
