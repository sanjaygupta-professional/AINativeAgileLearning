# Metal Stock Sentiment Analysis - India Equity Market

A minimal web application for sentiment analysis of Metal stocks in the Indian Equity Market using the 90:10 rule for criteria selection.

## Overview

This application analyzes key sentiment drivers for the Indian metal sector, focusing on the top 10% of factors that drive 90% of stock movements.

## Key Criteria (90:10 Rule)

### Immediate Impact (0-1 Week)
| Criteria | Type | Weight | Why It Matters |
|----------|------|--------|----------------|
| LME Base Metal Prices | MACRO | 25% | Global benchmark for all metals |
| USD/INR Exchange Rate | MACRO | 15% | Affects import costs significantly |
| China Manufacturing PMI | COUNTRY | 20% | China consumes 50%+ of global metals |

### Short-term Impact (1-4 Weeks)
| Criteria | Type | Weight | Why It Matters |
|----------|------|--------|----------------|
| Auto Sector Demand | INDUSTRY | 15% | Key consumer of steel & aluminum |
| Coking Coal Prices | MACRO | 10% | Major input cost for steel |
| Govt Infrastructure Push | COUNTRY | 10% | Drives domestic steel demand |

### Medium-term Impact (1-3 Months)
| Criteria | Type | Weight | Why It Matters |
|----------|------|--------|----------------|
| Import Duties & Tariffs | COUNTRY | 3% | Protection against cheap imports |
| Capacity Utilization | COMPANY | 2% | Operating leverage indicator |

## Stocks Covered

- **Steel**: Tata Steel, JSW Steel, SAIL, Jindal Steel & Power
- **Aluminum**: Hindalco, National Aluminium
- **Diversified**: Vedanta
- **Mining**: NMDC, Coal India, Hindustan Zinc

## Usage

Simply open `index.html` in a web browser. No build process or server required.

```bash
# Open in default browser (Linux)
xdg-open index.html

# Or start a simple server
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## Scoring System

- **Score Range**: -100 (Extremely Bearish) to +100 (Extremely Bullish)
- **Bullish**: Score >= +30
- **Moderately Bullish**: Score +10 to +29
- **Neutral**: Score -9 to +9
- **Moderately Bearish**: Score -29 to -10
- **Bearish**: Score <= -30

## File Structure

```
metal-sentiment-app/
├── index.html          # Main dashboard
├── css/
│   └── style.css       # Styling
├── js/
│   ├── data.js         # Criteria & stock data
│   └── app.js          # Application logic
└── README.md           # Documentation
```

## Disclaimer

This is for educational purposes only. Not investment advice. Always do your own research before making investment decisions.

## Data Sources (for reference)

- LME Prices: London Metal Exchange
- Currency: RBI Reference Rate
- PMI Data: National Bureau of Statistics of China
- Industry Data: SIAM, JPC, Industry Reports
