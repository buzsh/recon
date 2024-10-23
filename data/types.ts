export interface Industry {
  id: number;
  name: string;
  startups: Startup[];
}

export interface Startup {
  id: number;
  name: string;
  industries: Industry[];
  fundingRounds: FundingRound[];
  articles: Article[];
  createdAt: string;
  updatedAt: string;
}

export interface FundingRound {
  id: number;
  startupId: number;
  series: string;
  amountRaised: number;
  valuation?: number;
  date: string;
  aiSummary?: AISummary;
  articles: Article[];
  createdAt: string;
  updatedAt: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  url: string;
  publicationDate: string;
  startupId?: number;
  fundingRoundId?: number;
  createdAt: string;
  updatedAt: string;
}

export interface AISummary {
  id: number;
  content: string;
  fundingRoundId: number;
  createdAt: string;
  updatedAt: string;
}
