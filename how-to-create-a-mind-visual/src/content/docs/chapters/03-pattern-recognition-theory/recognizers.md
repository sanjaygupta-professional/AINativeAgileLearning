---
title: "3.2 The Pattern Recognizer Module"
description: "The structure and function of each neocortical pattern recognizer"
---

# The Pattern Recognizer Module

> "The operating principle of the neocortex is arguably the most important idea in the world, as it is capable of representing all knowledge and skills as well as creating new knowledge."

## The Core Insight

Each of the ~300 million pattern recognizers in the neocortex follows the same basic structure. Understanding this structure is key to understanding how the brain thinks.

## Anatomy of a Pattern Recognizer

```mermaid
flowchart TB
    subgraph Module["Pattern Recognition Module"]
        direction TB

        subgraph Inputs["INPUTS (from below)"]
            I1["Input 1<br/>importance: 0.8<br/>expected size: large"]
            I2["Input 2<br/>importance: 0.9<br/>expected size: short"]
            I3["Input 3<br/>importance: 0.4<br/>expected size: variable"]
        end

        subgraph Process["PROCESSING"]
            Prob["Compute probability<br/>pattern is present"]
            Threshold["Check against<br/>threshold"]
        end

        subgraph Output["OUTPUT (to above)"]
            Axon["Axon fires:<br/>'Pattern recognized!'"]
        end

        subgraph Feedback["FEEDBACK"]
            Expect["From above:<br/>'Expect this pattern'"]
            Inhibit["Inhibition signals<br/>(positive or negative)"]
        end

        Inputs --> Process
        Process --> Output
        Feedback --> Process
    end

    style Inputs fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Process fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Output fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Feedback fill:#f3e5f5,stroke:#805ad5,color:#1a365d
```

## The Parameters

Each input to a pattern recognizer has three parameters:

### 1. Importance (Weight)

How critical is this input for recognizing the pattern?

```mermaid
flowchart LR
    subgraph Example["Recognizing 'STEEP'"]
        S["[s] sound<br/>importance: HIGH"]
        T["[t] sound<br/>importance: HIGH"]
        E["[E] sound<br/>importance: MEDIUM"]
        P["[p] sound<br/>importance: HIGH"]
    end

    S --> STEEP["'STEEP'<br/>recognizer"]
    T --> STEEP
    E --> STEEP
    P --> STEEP

    style Example fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style STEEP fill:#38a169,stroke:#68d391,color:#fff
```

### 2. Expected Size

What magnitude (duration, spatial extent, etc.) should this input have?

| Phoneme | Type | Expected Duration |
|---------|------|-------------------|
| [t] | Dental consonant | Very short |
| [p] | Plosive consonant | Very short |
| [s] | Sibilant | Short to medium |
| [E] | Long vowel | Long |

### 3. Size Variability

How much can the size vary while still being recognized?

```mermaid
flowchart LR
    subgraph Variability["Size Variability Example"]
        T_var["[t] in 'steep'<br/>Low variability<br/>(always quick)"]
        E_var["[E] in 'steep'<br/>High variability<br/>(can be drawn out)"]
    end

    style T_var fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style E_var fill:#fff3e0,stroke:#ed8936,color:#1a365d
```

## Probability Computation

The pattern recognizer computes the probability that its pattern is present:

```mermaid
flowchart TB
    subgraph Computation["Computing Recognition Probability"]
        Inputs["Check which inputs<br/>are active"]
        Weights["Apply importance<br/>weights"]
        Sizes["Compare actual vs.<br/>expected sizes"]
        Threshold["Apply threshold<br/>(with feedback adjustment)"]
        Decision{"Fire?"}

        Inputs --> Weights --> Sizes --> Threshold --> Decision
        Decision --> |"Yes"| Fire["Signal: Pattern found!"]
        Decision --> |"No"| Wait["Continue waiting..."]
    end

    style Computation fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Fire fill:#38a169,stroke:#68d391,color:#fff
    style Wait fill:#ffcdd2,stroke:#e57373,color:#1a365d
```

## Bidirectional Signals

### Bottom-Up: Recognition

When lower-level patterns are recognized, they send signals up:

```mermaid
flowchart BT
    A["'A' recognized"] --> Apple["APPLE<br/>recognizer"]
    P["'P' recognized"] --> Apple
    L["'L' recognized"] --> Apple

    Apple --> |"Increases<br/>probability"| Decision{"Pattern<br/>complete?"}

    style Apple fill:#fff3e0,stroke:#ed8936,color:#1a365d
```

### Top-Down: Prediction

When a pattern is likely, it sends predictions down:

```mermaid
flowchart TB
    subgraph Prediction["Prediction Example"]
        Apple["APPLE recognizer<br/>(sees A-P-P-L)"]
        E["'E' recognizer"]

        Apple --> |"'Expect E soon!'<br/>(lowers threshold)"| E
    end

    style Apple fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style E fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

This is why we can read degraded or ambiguous text—our expectations fill in the gaps!

## Inhibitory Signals

Not all signals are positive. Inhibitory signals say "this pattern is LESS likely":

```mermaid
flowchart TB
    subgraph Inhibition["Inhibition Example"]
        Mustache["Mustache<br/>recognized"]
        Wife["'My Wife'<br/>recognizer"]

        Mustache --> |"INHIBITS<br/>(raises threshold)"| Wife
    end

    style Mustache fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Wife fill:#ffcdd2,stroke:#e57373,color:#1a365d
```

Inhibition can come from:
- **Below**: Conflicting features (mustache → probably not wife)
- **Above**: Contextual knowledge (wife is on a trip → person can't be her)

## The Full Picture

```mermaid
flowchart TB
    subgraph Module["Complete Pattern Recognition Module"]
        direction TB

        HighAbove["Signals from<br/>higher levels"] --> |"Expectations<br/>(lower threshold)"| Recognition
        HighAboveInhibit["Inhibition from<br/>higher context"] --> |"Context conflicts<br/>(raise threshold)"| Recognition

        subgraph Recognition["Recognition Process"]
            direction LR
            Inputs["Inputs with<br/>weights & sizes"] --> Compute["Compute<br/>probability"] --> Threshold["Apply<br/>threshold"] --> Fire{"Fire?"}
        end

        LowBelow["Signals from<br/>lower levels"] --> |"Component patterns<br/>recognized"| Recognition
        LowBelowInhibit["Inhibition from<br/>conflicting patterns"] --> |"Conflicts<br/>(raise threshold)"| Recognition

        Fire --> |"Yes"| OutputUp["Signal up to<br/>higher patterns"]
        Fire --> |"Yes"| OutputDown["Predictions down to<br/>expected inputs"]
    end

    style HighAbove fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style LowBelow fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Recognition fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style OutputUp fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style OutputDown fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

## Hidden Markov Models

Kurzweil notes that this computation is mathematically similar to **Hierarchical Hidden Markov Models (HMMs)**, which he used in his speech recognition work. The brain and successful AI systems use similar mathematical approaches!

## Key Takeaways

1. **Three parameters per input** — Importance, expected size, size variability
2. **Probability-based decisions** — Not binary; computes likelihood
3. **Bidirectional flow** — Recognition up, prediction down
4. **Inhibition matters** — Conflicting evidence raises thresholds
5. **Threshold adjustment** — Expectations lower thresholds; conflicts raise them
6. **Same algorithm everywhere** — This module is repeated 300 million times

## Think About It

- How does prediction (top-down) help us function in noisy environments?
- Why is probability-based recognition better than exact matching?
- How might inhibition prevent hallucinations and false recognitions?

## Related

- **Previous:** [Hierarchy of Patterns](/chapters/03-pattern-recognition-theory/hierarchy/)
- **Next:** [Learning](/chapters/03-pattern-recognition-theory/learning/)
- **Concept:** [Pattern Recognition Theory](/concepts/prtm/)
