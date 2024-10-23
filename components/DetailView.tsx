import React, { useState, useEffect } from "react";
import { Startup, FundingRound } from "../data/types";
import FundingRoundPill from "./FundingRoundPill";
import { formatCurrency } from "../app/utils/formatCurrency";

interface DetailViewProps {
  startup: Startup | null;
  fundingRoundId?: number;
}

const DetailView: React.FC<DetailViewProps> = ({ startup, fundingRoundId }) => {
  const [selectedFundingRound, setSelectedFundingRound] = useState<FundingRound | null>(null);

  useEffect(() => {
    if (startup) {
      setSelectedFundingRound(startup.fundingRounds[0] || null);
    }
  }, [startup]);

  useEffect(() => {
    if (fundingRoundId && startup) {
      const foundRound = startup.fundingRounds.find(
        (round) => round.id === fundingRoundId
      );
      if (foundRound) {
        setSelectedFundingRound(foundRound);
      }
    }
  }, [fundingRoundId, startup]);

  if (!startup) {
    return (
      <div className="flex-1 p-4">
        <p>Select a startup to view details.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{startup.name}</h1>
        <h2 className="text-xl font-semibold mb-4">Funding Rounds</h2>
        <ul className="mb-4">
          {startup.fundingRounds.map((round) => (
            <li key={round.id}>
              <button
                onClick={() => setSelectedFundingRound(round)}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                  selectedFundingRound?.id === round.id
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FundingRoundPill type={round.type} />
                  <span>{formatCurrency(round.amountRaised)}</span>
                </div>
                {round.valuation && (
                  <span className="text-sm text-gray-500">
                    Valuation: {formatCurrency(round.valuation)}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {selectedFundingRound && selectedFundingRound.aiSummary && (
          <div>
            <h3 className="text-lg font-semibold mb-2">AI Summary</h3>
            <p>{selectedFundingRound.aiSummary.content}</p>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Copy URL
            </button>
          </div>
        )}

        {selectedFundingRound && selectedFundingRound.articles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Articles</h3>
            {selectedFundingRound.articles.map((article) => (
              <details key={article.id} className="mb-2">
                <summary className="cursor-pointer">{article.title}</summary>
                <p className="mt-2">{article.content}</p>
              </details>
            ))}
          </div>
        )}

        {startup.articles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Other Articles</h3>
            {startup.articles.map((article) => (
              <details key={article.id} className="mb-2">
                <summary className="cursor-pointer">{article.title}</summary>
                <p className="mt-2">{article.content}</p>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailView;
