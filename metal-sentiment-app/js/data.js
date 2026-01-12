/**
 * Metal Stock Sentiment Analysis - Data Configuration
 *
 * Criteria Selection based on 90:10 Rule:
 * Focus on top 10% of factors driving 90% of metal stock movements
 *
 * Categories:
 * - MACRO: Global commodity prices, currency, rates
 * - INDUSTRY: Production, demand from key sectors
 * - COUNTRY: China demand, government policies
 * - COMPANY: Capacity, margins, order books
 */

const SENTIMENT_CRITERIA = {
    // IMMEDIATE IMPACT (0-1 Week) - These move stocks daily
    immediate: [
        {
            id: 'lme_prices',
            name: 'LME Base Metal Prices',
            type: 'MACRO',
            description: 'London Metal Exchange benchmark prices',
            currentValue: '↑ 2.3% WoW',
            score: 35,
            weight: 0.25,
            note: 'Steel, Aluminum, Zinc trending up on China stimulus hopes'
        },
        {
            id: 'usd_inr',
            name: 'USD/INR Exchange Rate',
            type: 'MACRO',
            description: 'Currency impact on import costs',
            currentValue: '₹83.45 (stable)',
            score: 10,
            weight: 0.15,
            note: 'Rupee stable, input cost pressure neutral'
        },
        {
            id: 'china_pmi',
            name: 'China Manufacturing PMI',
            type: 'COUNTRY',
            description: 'China is largest metal consumer globally',
            currentValue: '50.3 (expansion)',
            score: 25,
            weight: 0.20,
            note: 'Above 50 indicates manufacturing expansion'
        }
    ],

    // SHORT-TERM IMPACT (1-4 Weeks)
    shortTerm: [
        {
            id: 'auto_demand',
            name: 'Auto Sector Demand',
            type: 'INDUSTRY',
            description: 'Key demand driver for steel & aluminum',
            currentValue: '↑ 8% YoY sales',
            score: 40,
            weight: 0.15,
            note: 'Strong festive season demand supporting metal offtake'
        },
        {
            id: 'coking_coal',
            name: 'Coking Coal Prices',
            type: 'MACRO',
            description: 'Major input cost for steel production',
            currentValue: '$235/ton (↓5%)',
            score: 30,
            weight: 0.10,
            note: 'Declining coal prices positive for steel margins'
        },
        {
            id: 'infra_spending',
            name: 'Govt Infrastructure Push',
            type: 'COUNTRY',
            description: 'Steel demand from roads, railways, housing',
            currentValue: 'Capex on track',
            score: 45,
            weight: 0.10,
            note: 'PM Gati Shakti, Bharatmala driving steel consumption'
        }
    ],

    // MEDIUM-TERM IMPACT (1-3 Months)
    mediumTerm: [
        {
            id: 'import_duties',
            name: 'Import Duties & Tariffs',
            type: 'COUNTRY',
            description: 'Protection against cheap imports',
            currentValue: 'Status quo maintained',
            score: 20,
            weight: 0.03,
            note: 'No change in steel import duties expected'
        },
        {
            id: 'capacity_util',
            name: 'Capacity Utilization',
            type: 'COMPANY',
            description: 'Operating leverage and profitability',
            currentValue: '78% average',
            score: 15,
            weight: 0.02,
            note: 'Healthy utilization levels across major players'
        }
    ]
};

// Top Metal Stocks in India (NSE)
const METAL_STOCKS = [
    {
        symbol: 'TATASTEEL',
        name: 'Tata Steel Ltd',
        sector: 'Steel',
        sentiment: 'bullish',
        score: 42,
        keyDriver: 'Strong domestic demand + cost reduction'
    },
    {
        symbol: 'JSWSTEEL',
        name: 'JSW Steel Ltd',
        sector: 'Steel',
        sentiment: 'bullish',
        score: 38,
        keyDriver: 'Capacity expansion + export orders'
    },
    {
        symbol: 'HINDALCO',
        name: 'Hindalco Industries',
        sector: 'Aluminum',
        sentiment: 'bullish',
        score: 35,
        keyDriver: 'Novelis performance + aluminum prices'
    },
    {
        symbol: 'VEDL',
        name: 'Vedanta Ltd',
        sector: 'Diversified',
        sentiment: 'neutral',
        score: 12,
        keyDriver: 'Debt concerns offset by commodity uptick'
    },
    {
        symbol: 'SAIL',
        name: 'Steel Authority of India',
        sector: 'Steel',
        sentiment: 'neutral',
        score: 18,
        keyDriver: 'Govt capex + operational challenges'
    },
    {
        symbol: 'NATIONALUM',
        name: 'National Aluminium Co',
        sector: 'Aluminum',
        sentiment: 'bullish',
        score: 28,
        keyDriver: 'LME aluminum prices + low costs'
    },
    {
        symbol: 'JINDALSTEL',
        name: 'Jindal Steel & Power',
        sector: 'Steel',
        sentiment: 'bullish',
        score: 45,
        keyDriver: 'Best margins in sector + pellet sales'
    },
    {
        symbol: 'NMDC',
        name: 'NMDC Ltd',
        sector: 'Iron Ore',
        sentiment: 'neutral',
        score: 8,
        keyDriver: 'Iron ore prices soft, volume growth'
    },
    {
        symbol: 'HINDZINC',
        name: 'Hindustan Zinc',
        sector: 'Zinc',
        sentiment: 'bearish',
        score: -15,
        keyDriver: 'Zinc price weakness + royalty issues'
    },
    {
        symbol: 'COALINDIA',
        name: 'Coal India Ltd',
        sector: 'Coal',
        sentiment: 'neutral',
        score: 5,
        keyDriver: 'Volume growth offset by price concerns'
    }
];

// Calculate overall sentiment from weighted criteria
function calculateOverallSentiment() {
    let weightedSum = 0;
    let totalWeight = 0;

    const allCriteria = [
        ...SENTIMENT_CRITERIA.immediate,
        ...SENTIMENT_CRITERIA.shortTerm,
        ...SENTIMENT_CRITERIA.mediumTerm
    ];

    allCriteria.forEach(criterion => {
        weightedSum += criterion.score * criterion.weight;
        totalWeight += criterion.weight;
    });

    return Math.round(weightedSum / totalWeight);
}

// Export for use in app.js
window.SENTIMENT_CRITERIA = SENTIMENT_CRITERIA;
window.METAL_STOCKS = METAL_STOCKS;
window.calculateOverallSentiment = calculateOverallSentiment;
