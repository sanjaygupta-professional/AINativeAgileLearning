---
title: "Law of Accelerating Returns"
description: "Why technology grows exponentially, not linearly"
---

# Law of Accelerating Returns (LOAR)

The Law of Accelerating Returns is Kurzweil's principle that evolutionary processes—including technological development—inherently accelerate, leading to exponential rather than linear growth.

## Concept Overview

```mermaid
mindmap
  root((LOAR))
    Core Idea
      Technology builds on technology
      Each advance enables faster advances
      Exponential, not linear
    Evidence
      Moore's Law computing
      Genome sequencing
      Communication bandwidth
    Implications
      Brain simulation feasible
      Human-level AI predictable
      Singularity approaching
    Misconceptions
      Not about individual technologies
      Applies to information technology
      Obstacles don't stop the trend
```

## Linear vs Exponential

```mermaid
flowchart LR
    subgraph Comparison["Linear vs Exponential Growth"]
        direction TB

        subgraph Linear["Linear (what we expect)"]
            L1["Year 1: 1"]
            L2["Year 2: 2"]
            L3["Year 3: 3"]
            L10["Year 10: 10"]
            L30["Year 30: 30"]
        end

        subgraph Exponential["Exponential (what happens)"]
            E1["Year 1: 1"]
            E2["Year 2: 2"]
            E3["Year 3: 4"]
            E10["Year 10: 1,024"]
            E30["Year 30: 1 billion"]
        end
    end

    style Linear fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Exponential fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

## Why It Accelerates

```mermaid
flowchart TB
    subgraph Feedback["Positive Feedback Loop"]
        Current["Current technology"]
        Tools["Creates better tools"]
        Research["Enables faster research"]
        Next["Creates next generation faster"]

        Current --> Tools --> Research --> Next
        Next --> |"becomes"| Current
    end

    style Feedback fill:#fff3e0,stroke:#ed8936,color:#1a365d
```

## Examples

### Computing Power

| Year | Computing (FLOPS/$) |
|------|---------------------|
| 1950 | 0.0001 |
| 1970 | 0.01 |
| 1990 | 1 |
| 2010 | 100,000 |
| 2020 | 10,000,000 |

### Genome Sequencing

| Year | Cost per Genome |
|------|-----------------|
| 2001 | $100,000,000 |
| 2007 | $10,000,000 |
| 2010 | $10,000 |
| 2020 | $300 |

## Implications for AI

```mermaid
flowchart TB
    subgraph Timeline["AI Timeline (Based on LOAR)"]
        direction LR

        Now["Now: Narrow AI<br/>(speech, vision, games)"]
        Soon["2030s: Human-level<br/>computing capacity affordable"]
        After["2040s+: Superintelligence<br/>(far beyond human)"]

        Now --> Soon --> After
    end

    style Now fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Soon fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style After fill:#f3e5f5,stroke:#805ad5,color:#1a365d
```

## Where This Appears in the Book

| Chapter | Context | Key Insight |
|---------|---------|-------------|
| Introduction | Book's foundation | Technology accelerates |
| [Ch 7](/chapters/07-digital-neocortex/overview/) | AI progress | Steady advances in AI |
| [Ch 10](/chapters/10-law-accelerating-returns/overview/) | **Main coverage** | Full LOAR argument |

## Common Misconceptions

```mermaid
flowchart TB
    subgraph Misconceptions["What LOAR Does NOT Mean"]
        M1["❌ Every technology grows forever"]
        M2["❌ No obstacles or setbacks"]
        M3["❌ Linear extrapolation of current trends"]
    end

    subgraph Reality["What LOAR DOES Mean"]
        R1["✓ Information technology accelerates"]
        R2["✓ New paradigms replace old ones"]
        R3["✓ Overall trend continues despite individual failures"]
    end

    style Misconceptions fill:#ffcdd2,stroke:#e57373,color:#1a365d
    style Reality fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

## Related Concepts

- [Pattern Recognition Theory](/concepts/prtm/) — What AI is learning to do
- [The Neocortex](/concepts/neocortex/) — The target of brain simulation
- [Consciousness](/concepts/consciousness/) — Will AI become conscious?

## Learn More

- **Chapter**: [Law of Accelerating Returns](/chapters/10-law-accelerating-returns/overview/)
- **Path**: [AI & Neuroscience](/paths/ai-neuroscience/)
