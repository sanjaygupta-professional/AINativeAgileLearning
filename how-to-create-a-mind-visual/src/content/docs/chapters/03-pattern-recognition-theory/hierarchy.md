---
title: "3.1 Hierarchy of Patterns"
description: "How patterns build upon patterns to create meaning"
---

# Hierarchy of Patterns

> "Human beings have only a weak ability to process logic, but a very deep core capability of recognizing patterns."

## The Core Insight

Every pattern in the neocortex is composed of lower-level patterns. A word is made of letters; letters are made of shapes; shapes are made of edges. This hierarchy extends all the way from raw sensory data up to abstract concepts like "irony" and "justice."

## Visual: The Pattern Hierarchy

```mermaid
flowchart TB
    subgraph Hierarchy["Pattern Hierarchy Example: Reading 'APPLE'"]
        direction TB

        subgraph Level5["Level 5: Meaning"]
            Fruit["Concept: Fruit,<br/>Red/Green, Sweet,<br/>Health, Garden..."]
        end

        subgraph Level4["Level 4: Word"]
            Apple["APPLE"]
        end

        subgraph Level3["Level 3: Letters"]
            A["A"]
            P1["P"]
            P2["P"]
            L["L"]
            E["E"]
        end

        subgraph Level2["Level 2: Basic Shapes"]
            Triangle["△"]
            Curve["⌒"]
            Line["│"]
            Cross["─"]
        end

        subgraph Level1["Level 1: Edges"]
            Edges["Visual edge<br/>detectors"]
        end

        Edges --> Level2
        Level2 --> Level3
        Level3 --> Level4
        Level4 --> Level5
    end

    style Level5 fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style Level4 fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Level3 fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Level2 fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Level1 fill:#ffcdd2,stroke:#e57373,color:#1a365d
```

## How Pattern Recognizers Connect

Each pattern recognizer:
- Receives input from **lower-level** recognizers
- Sends output to **higher-level** recognizers
- Uses "web links" (axons and dendrites) to connect

```mermaid
flowchart TB
    subgraph HighLevel["Higher Level: Words"]
        Apple["APPLE<br/>recognizer"]
        Pear["PEAR<br/>recognizer"]
    end

    subgraph MidLevel["Mid Level: Letters"]
        A["'A' pattern"]
        P["'P' pattern"]
        L["'L' pattern"]
        E["'E' pattern"]
        R["'R' pattern"]
    end

    A --> Apple
    P --> Apple
    L --> Apple
    E --> Apple

    P --> Pear
    E --> Pear
    A --> Pear
    R --> Pear

    style HighLevel fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style MidLevel fill:#e3f2fd,stroke:#3182ce,color:#1a365d
```

**Key insight**: The letter "A" pattern doesn't repeat its description for every word that uses it. Instead, "APPLE" and "PEAR" both link to the same "A" pattern, like hyperlinks on the web.

## The Three Parts of Every Pattern

Each pattern recognition module has three components:

```mermaid
flowchart LR
    subgraph Pattern["Pattern Recognition Module"]
        direction TB
        Input["1. Input<br/>Lower-level patterns<br/>that compose this one"]
        Name["2. Name/Output<br/>Axon that fires when<br/>pattern is recognized"]
        Output["3. Higher Patterns<br/>Patterns this one<br/>is part of"]

        Input --> Name --> Output
    end

    style Input fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Name fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Output fill:#f3e5f5,stroke:#805ad5,color:#1a365d
```

### 1. Input: Lower-Level Patterns

- Dendrites receive signals from lower-level recognizers
- Not all inputs need to fire for recognition
- Each input has an "importance weight"

### 2. Name: Recognition Signal

- When the module recognizes its pattern, it fires its axon
- This is the pattern's "name" in brain language
- Signal says: "Hey, I just saw [my pattern]!"

### 3. Output: Higher-Level Patterns

- Axon connects to many higher-level recognizers
- Tells them: "Part of your pattern might be present"

## Redundancy: Multiple Copies

We don't have just one pattern for important things—we have many:

```mermaid
flowchart TB
    subgraph Redundancy["Redundancy for 'A'"]
        A1["'A' pattern #1<br/>(standard font)"]
        A2["'A' pattern #2<br/>(italic)"]
        A3["'A' pattern #3<br/>(handwritten)"]
        A4["'A' pattern #4<br/>(uppercase bold)"]
        A5["...hundreds more..."]
    end

    subgraph Words["Words using 'A'"]
        Apple["APPLE"]
        Pear["PEAR"]
    end

    A1 --> Apple
    A2 --> Apple
    A3 --> Apple
    A1 --> Pear
    A2 --> Pear

    style Redundancy fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Words fill:#f3e5f5,stroke:#805ad5,color:#1a365d
```

This redundancy allows us to:
- Recognize patterns from different angles and perspectives
- Handle variations (fonts, handwriting, accents)
- Maintain function even if some recognizers fail

## Example: Reading Speed

Kurzweil explains how Garry Kasparov, the chess grandmaster, could compete with IBM's Deep Blue despite analyzing less than one board position per second (versus Deep Blue's 200 million).

**The answer**: Kasparov had ~100,000 chess patterns stored in his neocortex, and he compared them **all simultaneously**.

```mermaid
flowchart LR
    subgraph DeepBlue["Deep Blue"]
        Sequential["200 million positions/sec<br/>(sequential analysis)"]
    end

    subgraph Kasparov["Kasparov's Brain"]
        Parallel["~100,000 patterns<br/>(all compared simultaneously)"]
    end

    DeepBlue --> |"vs"| Kasparov

    style DeepBlue fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Kasparov fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

This parallel pattern matching is why we can:
- Instantly recognize faces
- Understand spoken language in real-time
- Navigate complex environments effortlessly

## Key Takeaways

1. **Everything is hierarchical** — From edges to abstract concepts
2. **Patterns reference patterns** — Like hyperlinks, not copies
3. **Redundancy enables robustness** — Multiple versions of important patterns
4. **Parallel processing** — All 300 million recognizers work simultaneously
5. **~100,000 chunks of expertise** — The size of human expert knowledge

## Think About It

- How many levels of hierarchy might exist between raw pixels and "irony"?
- Why would the brain use redundancy instead of single, perfect templates?
- How does parallel processing change what's computationally feasible?

## Related

- **Previous:** [Chapter 3 Overview](/chapters/03-pattern-recognition-theory/overview/)
- **Next:** [Pattern Recognizers](/chapters/03-pattern-recognition-theory/recognizers/)
- **Concept:** [Hierarchical Learning](/concepts/hierarchical-learning/)
