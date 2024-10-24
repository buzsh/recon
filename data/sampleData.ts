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
  {
    id: 3,
    name: 'Fintech',
    startups: [],
  },
  {
    id: 4,
    name: 'E-commerce',
    startups: [],
  },
  // Add more industries as needed
];

export const startups: Startup[] = [
  {
    id: 1,
    name: 'TechCorp',
    description:
      'TechCorp is a cutting-edge technology company specializing in artificial intelligence and machine learning solutions for enterprise clients.',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-10-01T00:00:00Z',
    updatedAt: '2024-10-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'HealthInc',
    description:
      'HealthInc is revolutionizing healthcare with innovative telemedicine platforms and AI-driven diagnostic tools for improved patient care.',
    industries: [industries[1]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-10-02T00:00:00Z',
    updatedAt: '2024-10-02T00:00:00Z',
  },
  {
    id: 3,
    name: 'FinanceFlow',
    description:
      'FinanceFlow is a fintech startup that provides advanced analytics and blockchain-based solutions for secure and efficient financial transactions.',
    industries: [industries[2]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-10-03T00:00:00Z',
    updatedAt: '2024-10-03T00:00:00Z',
  },
  {
    id: 4,
    name: 'ShopSmart',
    description:
      'ShopSmart is an e-commerce platform that leverages AI and personalization to create unique shopping experiences for consumers worldwide.',
    industries: [industries[3]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-10-04T00:00:00Z',
    updatedAt: '2024-10-04T00:00:00Z',
  },
  // New startups
  {
    id: 5,
    name: 'DataGenius',
    description:
      'DataGenius provides advanced data analytics and visualization tools powered by AI to help businesses make informed decisions.',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-11-01T00:00:00Z',
    updatedAt: '2024-11-01T00:00:00Z',
  },
  {
    id: 6,
    name: 'CyberShield',
    description:
      'CyberShield is a cybersecurity firm specializing in AI-driven threat detection and prevention solutions for enterprises.',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-11-05T00:00:00Z',
    updatedAt: '2024-11-05T00:00:00Z',
  },
  {
    id: 7,
    name: 'GreenTech',
    description:
      'GreenTech develops sustainable energy solutions using innovative technology to reduce carbon footprint.',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-11-10T00:00:00Z',
    updatedAt: '2024-11-10T00:00:00Z',
  },
  {
    id: 8,
    name: 'VRWorld',
    description:
      'VRWorld creates immersive virtual reality experiences for entertainment and education sectors.',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-11-15T00:00:00Z',
    updatedAt: '2024-11-15T00:00:00Z',
  },
  {
    id: 9,
    name: 'CloudNet',
    description:
      'CloudNet offers cloud-based networking solutions for businesses to enhance connectivity and performance.',
    industries: [industries[0]],
    fundingRounds: [],
    articles: [],
    createdAt: '2024-11-20T00:00:00Z',
    updatedAt: '2024-11-20T00:00:00Z',
  },
  // Add more startups as needed
];

// Assign startups to industries
industries[0].startups.push(
  startups[0],
  startups[4],
  startups[5],
  startups[6],
  startups[7],
  startups[8]
);
industries[1].startups.push(startups[1]);
industries[2].startups.push(startups[2]);
industries[3].startups.push(startups[3]);

export const fundingRounds: FundingRound[] = [
  {
    id: 1,
    startupId: 1,
    type: 'Series A',
    amountRaised: 5000000,
    valuation: 20000000,
    date: '2024-10-15T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-10-15T00:00:00Z',
    updatedAt: '2024-10-15T00:00:00Z',
  },
  {
    id: 2,
    startupId: 2,
    type: 'Seed',
    amountRaised: 2000000,
    valuation: 8000000,
    date: '2024-10-20T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-10-20T00:00:00Z',
    updatedAt: '2024-10-20T00:00:00Z',
  },
  {
    id: 3,
    startupId: 3,
    type: 'Series B',
    amountRaised: 15000000,
    valuation: 100000000,
    date: '2024-10-25T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-10-25T00:00:00Z',
    updatedAt: '2024-10-25T00:00:00Z',
  },
  {
    id: 4,
    startupId: 4,
    type: 'Series A',
    amountRaised: 8000000,
    valuation: 40000000,
    date: '2024-10-30T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-10-30T00:00:00Z',
    updatedAt: '2024-10-30T00:00:00Z',
  },
  {
    id: 5,
    startupId: 1,
    type: 'Series B',
    amountRaised: 20000000,
    valuation: 100000000,
    date: '2025-03-15T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2025-03-15T00:00:00Z',
    updatedAt: '2025-03-15T00:00:00Z',
  },
  {
    id: 6,
    startupId: 2,
    type: 'Series A',
    amountRaised: 10000000,
    valuation: 40000000,
    date: '2025-05-20T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2025-05-20T00:00:00Z',
    updatedAt: '2025-05-20T00:00:00Z',
  },
  {
    id: 7,
    startupId: 3,
    type: 'Series C',
    amountRaised: 50000000,
    valuation: 500000000,
    date: '2025-08-10T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2025-08-10T00:00:00Z',
    updatedAt: '2025-08-10T00:00:00Z',
  },
  {
    id: 8,
    startupId: 4,
    type: 'Series B',
    amountRaised: 30000000,
    valuation: 200000000,
    date: '2025-11-05T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2025-11-05T00:00:00Z',
    updatedAt: '2025-11-05T00:00:00Z',
  },
  // New funding rounds
  {
    id: 9,
    startupId: 5,
    type: 'Series A',
    amountRaised: 10000000,
    valuation: 25000000,
    date: '2024-12-01T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 10,
    startupId: 6,
    type: 'Series B',
    amountRaised: 6000000,
    valuation: 200000000,
    date: '2024-12-05T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-12-05T00:00:00Z',
    updatedAt: '2024-12-05T00:00:00Z',
  },
  {
    id: 11,
    startupId: 7,
    type: 'Series A',
    amountRaised: 20000000,
    valuation: 50000000,
    date: '2024-12-10T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-12-10T00:00:00Z',
    updatedAt: '2024-12-10T00:00:00Z',
  },
  {
    id: 12,
    startupId: 8,
    type: 'Seed',
    amountRaised: 400000,
    valuation: 10000000,
    date: '2024-12-15T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-12-15T00:00:00Z',
    updatedAt: '2024-12-15T00:00:00Z',
  },
  {
    id: 13,
    startupId: 9,
    type: 'Series B',
    amountRaised: 30000000,
    valuation: 75000000,
    date: '2024-12-20T00:00:00Z',
    aiSummary: undefined,
    articles: [],
    createdAt: '2024-12-20T00:00:00Z',
    updatedAt: '2024-12-20T00:00:00Z',
  },
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'TechCorp Raises $5M in Series A',
    content:
      'TechCorp has successfully raised $5 million in a Series A funding round...',
    url: 'https://example.com/techcorp-series-a',
    publicationDate: '2024-10-16T00:00:00Z',
    startupId: 1,
    fundingRoundId: 1,
    createdAt: '2024-10-16T00:00:00Z',
    updatedAt: '2024-10-16T00:00:00Z',
  },
  {
    id: 2,
    title: 'HealthInc Secures $2M in Seed Funding',
    content:
      'HealthInc, a promising healthcare startup, has secured $2 million in seed funding...',
    url: 'https://example.com/healthinc-seed-funding',
    publicationDate: '2024-10-21T00:00:00Z',
    startupId: 2,
    fundingRoundId: 2,
    createdAt: '2024-10-21T00:00:00Z',
    updatedAt: '2024-10-21T00:00:00Z',
  },
  {
    id: 3,
    title: 'FinanceFlow Raises $15M in Series B',
    content:
      'FinanceFlow, a leading fintech startup, has raised $15 million in a Series B round...',
    url: 'https://example.com/financeflow-series-b',
    publicationDate: '2024-10-26T00:00:00Z',
    startupId: 3,
    fundingRoundId: 3,
    createdAt: '2024-10-26T00:00:00Z',
    updatedAt: '2024-10-26T00:00:00Z',
  },
  {
    id: 4,
    title: 'ShopSmart Closes $8M Series A Round',
    content:
      'ShopSmart, an innovative e-commerce platform, has closed an $8 million Series A round...',
    url: 'https://example.com/shopsmart-series-a',
    publicationDate: '2024-10-31T00:00:00Z',
    startupId: 4,
    fundingRoundId: 4,
    createdAt: '2024-10-31T00:00:00Z',
    updatedAt: '2024-10-31T00:00:00Z',
  },
  // New articles
  {
    id: 5,
    title: 'DataGenius Raises $10M in Series A Funding',
    content:
      'DataGenius has raised $10 million in a Series A funding round to expand its AI-powered analytics platform...',
    url: 'https://example.com/datagenius-series-a',
    publicationDate: '2024-12-02T00:00:00Z',
    startupId: 5,
    fundingRoundId: 9,
    createdAt: '2024-12-02T00:00:00Z',
    updatedAt: '2024-12-02T00:00:00Z',
  },
  {
    id: 6,
    title: 'CyberShield Secures $6M in Series B Round',
    content:
      'CyberShield has secured $6 million in Series B funding to enhance its AI-driven cybersecurity solutions...',
    url: 'https://example.com/cybershield-series-b',
    publicationDate: '2024-12-06T00:00:00Z',
    startupId: 6,
    fundingRoundId: 10,
    createdAt: '2024-12-06T00:00:00Z',
    updatedAt: '2024-12-06T00:00:00Z',
  },
  {
    id: 7,
    title: 'GreenTech Raises $20M in Series A to Promote Sustainable Energy',
    content:
      'GreenTech has raised $20 million in Series A funding to advance its sustainable energy technologies...',
    url: 'https://example.com/greentech-series-a',
    publicationDate: '2024-12-11T00:00:00Z',
    startupId: 7,
    fundingRoundId: 11,
    createdAt: '2024-12-11T00:00:00Z',
    updatedAt: '2024-12-11T00:00:00Z',
  },
  {
    id: 8,
    title: 'VRWorld Secures $400K in Seed Funding',
    content:
      'VRWorld has secured $400,000 in seed funding to develop immersive VR experiences...',
    url: 'https://example.com/vrworld-seed-funding',
    publicationDate: '2024-12-16T00:00:00Z',
    startupId: 8,
    fundingRoundId: 12,
    createdAt: '2024-12-16T00:00:00Z',
    updatedAt: '2024-12-16T00:00:00Z',
  },
  {
    id: 9,
    title: 'CloudNet Raises $30M in Series B Funding',
    content:
      'CloudNet has raised $30 million in a Series B funding round to expand its cloud networking solutions...',
    url: 'https://example.com/cloudnet-series-b',
    publicationDate: '2024-12-21T00:00:00Z',
    startupId: 9,
    fundingRoundId: 13,
    createdAt: '2024-12-21T00:00:00Z',
    updatedAt: '2024-12-21T00:00:00Z',
  },
  // New articles for the latest funding rounds
  {
    id: 10,
    title: 'TechCorp Raises $20M in Series B',
    content:
      'TechCorp has successfully raised $20 million in a Series B funding round to further develop its AI solutions...',
    url: 'https://example.com/techcorp-series-b',
    publicationDate: '2025-03-16T00:00:00Z',
    startupId: 1,
    fundingRoundId: 5,
    createdAt: '2025-03-16T00:00:00Z',
    updatedAt: '2025-03-16T00:00:00Z',
  },
  {
    id: 11,
    title: 'HealthInc Secures $10M in Series A',
    content:
      'HealthInc has secured $10 million in Series A funding to expand its telemedicine platform...',
    url: 'https://example.com/healthinc-series-a',
    publicationDate: '2025-05-21T00:00:00Z',
    startupId: 2,
    fundingRoundId: 6,
    createdAt: '2025-05-21T00:00:00Z',
    updatedAt: '2025-05-21T00:00:00Z',
  },
  {
    id: 12,
    title: 'FinanceFlow Raises $50M in Series C',
    content:
      'FinanceFlow has raised $50 million in a Series C round to enhance its blockchain solutions...',
    url: 'https://example.com/financeflow-series-c',
    publicationDate: '2025-08-11T00:00:00Z',
    startupId: 3,
    fundingRoundId: 7,
    createdAt: '2025-08-11T00:00:00Z',
    updatedAt: '2025-08-11T00:00:00Z',
  },
  {
    id: 13,
    title: 'ShopSmart Closes $30M Series B Round',
    content:
      'ShopSmart has closed a $30 million Series B round to expand its e-commerce platform...',
    url: 'https://example.com/shopsmart-series-b',
    publicationDate: '2025-11-06T00:00:00Z',
    startupId: 4,
    fundingRoundId: 8,
    createdAt: '2025-11-06T00:00:00Z',
    updatedAt: '2025-11-06T00:00:00Z',
  },
];

export const aiSummaries: AISummary[] = [
  {
    id: 1,
    content:
      'TechCorp has raised $5M in Series A to expand its technology solutions...',
    fundingRoundId: 1,
    createdAt: '2024-10-17T00:00:00Z',
    updatedAt: '2024-10-17T00:00:00Z',
  },
  {
    id: 2,
    content:
      'HealthInc has secured $2M in seed funding to develop its innovative healthcare solutions...',
    fundingRoundId: 2,
    createdAt: '2024-10-22T00:00:00Z',
    updatedAt: '2024-10-22T00:00:00Z',
  },
  {
    id: 3,
    content:
      'FinanceFlow has raised $15M in Series B to expand its fintech platform and enter new markets...',
    fundingRoundId: 3,
    createdAt: '2024-10-27T00:00:00Z',
    updatedAt: '2024-10-27T00:00:00Z',
  },
  {
    id: 4,
    content:
      'ShopSmart has closed an $8M Series A round to enhance its e-commerce technology and user experience...',
    fundingRoundId: 4,
    createdAt: '2024-10-02T00:00:00Z',
    updatedAt: '2024-10-02T00:00:00Z',
  },
  // New AI summaries
  {
    id: 5,
    content:
      'DataGenius has raised $10M in Series A to expand its AI analytics tools for businesses...',
    fundingRoundId: 9,
    createdAt: '2024-12-03T00:00:00Z',
    updatedAt: '2024-12-03T00:00:00Z',
  },
  {
    id: 6,
    content:
      'CyberShield secured $6M in Series B to enhance AI-driven cybersecurity solutions...',
    fundingRoundId: 10,
    createdAt: '2024-12-07T00:00:00Z',
    updatedAt: '2024-12-07T00:00:00Z',
  },
  {
    id: 7,
    content:
      'GreenTech raised $20M in Series A to promote sustainable energy technology...',
    fundingRoundId: 11,
    createdAt: '2024-12-12T00:00:00Z',
    updatedAt: '2024-12-12T00:00:00Z',
  },
  {
    id: 8,
    content:
      'VRWorld secured $400K in seed funding to develop immersive VR experiences...',
    fundingRoundId: 12,
    createdAt: '2024-12-17T00:00:00Z',
    updatedAt: '2024-12-17T00:00:00Z',
  },
  {
    id: 9,
    content:
      'CloudNet has raised $30M in Series B to expand cloud networking solutions...',
    fundingRoundId: 13,
    createdAt: '2024-12-22T00:00:00Z',
    updatedAt: '2024-12-22T00:00:00Z',
  },
  // New AI summaries for the latest funding rounds
  {
    id: 10,
    content: 'TechCorp has raised $20M in Series B to enhance its AI solutions.',
    fundingRoundId: 5,
    createdAt: '2025-03-16T00:00:00Z',
    updatedAt: '2025-03-16T00:00:00Z',
  },
  {
    id: 11,
    content: 'HealthInc secured $10M in Series A to expand its telemedicine platform.',
    fundingRoundId: 6,
    createdAt: '2025-05-21T00:00:00Z',
    updatedAt: '2025-05-21T00:00:00Z',
  },
  {
    id: 12,
    content: 'FinanceFlow raised $50M in Series C to enhance its blockchain solutions.',
    fundingRoundId: 7,
    createdAt: '2025-08-11T00:00:00Z',
    updatedAt: '2025-08-11T00:00:00Z',
  },
  {
    id: 13,
    content: 'ShopSmart closed a $30M Series B round to expand its e-commerce platform.',
    fundingRoundId: 8,
    createdAt: '2025-11-06T00:00:00Z',
    updatedAt: '2025-11-06T00:00:00Z',
  },
];

// Associate funding rounds with startups
startups[0].fundingRounds.push(fundingRounds[0], fundingRounds[4]);
startups[1].fundingRounds.push(fundingRounds[1], fundingRounds[5]);
startups[2].fundingRounds.push(fundingRounds[2], fundingRounds[6]);
startups[3].fundingRounds.push(fundingRounds[3], fundingRounds[7]);

// New funding rounds
startups[4].fundingRounds.push(fundingRounds[8]);
startups[5].fundingRounds.push(fundingRounds[9]);
startups[6].fundingRounds.push(fundingRounds[10]);
startups[7].fundingRounds.push(fundingRounds[11]);
startups[8].fundingRounds.push(fundingRounds[12]);

// Associate articles with startups and funding rounds
startups[0].articles.push(articles[0]);
fundingRounds[0].articles.push(articles[0]);
startups[1].articles.push(articles[1]);
fundingRounds[1].articles.push(articles[1]);
startups[2].articles.push(articles[2]);
fundingRounds[2].articles.push(articles[2]);
startups[3].articles.push(articles[3]);
fundingRounds[3].articles.push(articles[3]);

// New articles
startups[4].articles.push(articles[4]);
fundingRounds[8].articles.push(articles[4]);
startups[5].articles.push(articles[5]);
fundingRounds[9].articles.push(articles[5]);
startups[6].articles.push(articles[6]);
fundingRounds[10].articles.push(articles[6]);
startups[7].articles.push(articles[7]);
fundingRounds[11].articles.push(articles[7]);
startups[8].articles.push(articles[8]);
fundingRounds[12].articles.push(articles[8]);

// Associate AI summaries with funding rounds
fundingRounds[0].aiSummary = aiSummaries[0];
fundingRounds[1].aiSummary = aiSummaries[1];
fundingRounds[2].aiSummary = aiSummaries[2];
fundingRounds[3].aiSummary = aiSummaries[3];

// New AI summaries
fundingRounds[8].aiSummary = aiSummaries[4];
fundingRounds[9].aiSummary = aiSummaries[5];
fundingRounds[10].aiSummary = aiSummaries[6];
fundingRounds[11].aiSummary = aiSummaries[7];
fundingRounds[12].aiSummary = aiSummaries[8];

// Associate new articles with startups and funding rounds
startups[0].articles.push(articles[9]);
fundingRounds[4].articles.push(articles[9]);
startups[1].articles.push(articles[10]);
fundingRounds[5].articles.push(articles[10]);
startups[2].articles.push(articles[11]);
fundingRounds[6].articles.push(articles[11]);
startups[3].articles.push(articles[12]);
fundingRounds[7].articles.push(articles[12]);

// Associate new AI summaries with funding rounds
fundingRounds[4].aiSummary = aiSummaries[9];
fundingRounds[5].aiSummary = aiSummaries[10];
fundingRounds[6].aiSummary = aiSummaries[11];
fundingRounds[7].aiSummary = aiSummaries[12];
