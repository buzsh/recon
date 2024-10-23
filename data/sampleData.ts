// data/sampleData.ts

import { Industry, Startup, FundingRound, Article, AISummary } from './types';

export const industries: Industry[] = [
  {
    id: 1,
    name: 'Technology',
    startups: [],
  },
  {
    id: 2,
    name: 'Healthcare',
    startups: [],
  },
  // Add more industries as needed
];

export const startups: Startup[] = [
  {
    id: 1,
    name: 'TechCorp',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2023-10-01T00:00:00Z',
    updatedAt: '2023-10-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'HealthInc',
    industries: [industries[1]],
    fundingRounds: [],
    articles: [],
    createdAt: '2023-10-02T00:00:00Z',
    updatedAt: '2023-10-02T00:00:00Z',
  },
  // Add more startups as needed
];

// Assign startups to industries
industries[0].startups.push(startups[0]);
industries[1].startups.push(startups[1]);

export const fundingRounds: FundingRound[] = [
  {
    id: 1,
    startupId: 1,
    series: 'Series A',
    amountRaised: 5000000,
    valuation: 20000000,
    date: '2023-09-15T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2023-09-15T00:00:00Z',
    updatedAt: '2023-09-15T00:00:00Z',
  },
  // Add more funding rounds as needed
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'TechCorp Raises $5M in Series A',
    content: 'TechCorp has successfully raised $5 million in a Series A funding round...',
    url: 'https://example.com/techcorp-series-a',
    publicationDate: '2023-09-16T00:00:00Z',
    startupId: 1,
    fundingRoundId: 1,
    createdAt: '2023-09-16T00:00:00Z',
    updatedAt: '2023-09-16T00:00:00Z',
  },
  // Add more articles as needed
];

export const aiSummaries: AISummary[] = [
  {
    id: 1,
    content: 'TechCorp has raised $5M in Series A to expand its technology solutions...',
    fundingRoundId: 1,
    createdAt: '2023-09-17T00:00:00Z',
    updatedAt: '2023-09-17T00:00:00Z',
  },
  // Add more AI summaries as needed
];

// Associate funding rounds with startups
startups[0].fundingRounds.push(fundingRounds[0]);

// Associate articles with startups and funding rounds
startups[0].articles.push(articles[0]);
fundingRounds[0].articles.push(articles[0]);

// Associate AI summaries with funding rounds
fundingRounds[0].aiSummary = aiSummaries[0];
