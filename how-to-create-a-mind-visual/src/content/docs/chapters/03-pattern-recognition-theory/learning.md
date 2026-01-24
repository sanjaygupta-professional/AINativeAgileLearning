---
title: "3.3 Learning"
description: "How the neocortex learns and stores new patterns"
---

# Learning

> "The principal activities of brains are making changes in themselves."
> — Marvin Minsky

## The Core Insight

We are not born with patterns in our neocortex. The ability to recognize faces, understand language, appreciate irony—all of this is learned through experience. Learning and recognition happen simultaneously, using the same mechanisms.

## Learning from Birth

```mermaid
flowchart TB
    subgraph Timeline["Learning Timeline"]
        Fetus["Third Trimester<br/>Basic sounds (heartbeat)<br/>Patterns of light/dark"]
        Birth["Birth<br/>Neocortex mostly blank<br/>Ready to learn"]
        Infant["Infancy<br/>Shapes, sounds, faces<br/>Basic patterns"]
        Child["Childhood<br/>Language, concepts<br/>Abstract patterns"]
        Adult["Adulthood<br/>Professional expertise<br/>Complex abstractions"]
    end

    Fetus --> Birth --> Infant --> Child --> Adult

    style Fetus fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Birth fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Infant fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Child fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style Adult fill:#ffcdd2,stroke:#ed64a6,color:#1a365d
```

Even in the womb, the fetus begins learning:
- **Heart rhythm** — Why music with heartbeat-like tempo is universal
- **Light patterns** — Eyes partially open at 26 weeks
- **Sound patterns** — Mother's voice becomes familiar

## The Learning Process

```mermaid
flowchart TB
    subgraph Process["How Learning Happens"]
        Input["New sensory input<br/>arrives"]
        Try["Try to recognize with<br/>existing patterns"]
        Decision{"Recognized?"}

        Decision --> |"Yes"| Strengthen["Strengthen existing<br/>connections"]
        Decision --> |"Partial"| Adjust["Store as new<br/>perspective/variation"]
        Decision --> |"No"| New["Store as completely<br/>new pattern"]

        Strengthen --> Continue["Continue processing"]
        Adjust --> Continue
        New --> Continue

        Input --> Try --> Decision
    end

    style Input fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Decision fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Strengthen fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Adjust fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style New fill:#ffcdd2,stroke:#e57373,color:#1a365d
```

## One Level at a Time

An important constraint: **we can only learn one or two conceptual levels at a time**.

```mermaid
flowchart TB
    subgraph Levels["Learning Levels Sequentially"]
        L1["Level 1: Basic shapes<br/>(must be stable first)"]
        L2["Level 2: Letters<br/>(builds on shapes)"]
        L3["Level 3: Words<br/>(builds on letters)"]
        L4["Level 4: Sentences<br/>(builds on words)"]
        L5["Level 5: Abstract concepts<br/>(builds on sentences)"]

        L1 --> |"stabilize"| L2 --> |"stabilize"| L3 --> |"stabilize"| L4 --> |"stabilize"| L5
    end

    style L1 fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style L2 fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style L3 fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style L4 fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style L5 fill:#ffcdd2,stroke:#ed64a6,color:#1a365d
```

This is why:
- Infants must master basic sounds before words
- Students learn arithmetic before algebra
- Expertise takes years to develop

## Optimal Redundancy

The brain faces an optimization problem: how to allocate limited pattern recognizers?

```mermaid
flowchart LR
    subgraph Problem["The Optimization Problem"]
        Common["Common patterns<br/>(like 'the')<br/>need redundancy"]
        Rare["Rare patterns<br/>(like 'syzygy')<br/>need less"]
        Balance["Balance storage<br/>across all patterns"]
    end

    Common --> Balance
    Rare --> Balance

    style Common fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Rare fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style Balance fill:#fff3e0,stroke:#ed8936,color:#1a365d
```

The brain uses something like **linear programming** to optimally allocate:
- Very common patterns → high redundancy (thousands of copies)
- Brand new patterns → low redundancy (single digits)
- Routine patterns → enough for reliable recognition, no more

## Memory and Forgetting

```mermaid
flowchart TB
    subgraph Memory["Why We Remember and Forget"]
        New["New experience<br/>creates pattern(s)"]
        Redundancy["Initial redundancy<br/>based on novelty"]

        subgraph Fate["What Happens Over Time"]
            Reinforce["Repeated exposure<br/>increases redundancy"]
            Fade["No repetition<br/>recognizers reassigned"]
        end

        New --> Redundancy
        Redundancy --> Fate

        Reinforce --> Strong["Strong memory<br/>(high redundancy)"]
        Fade --> Forgotten["Forgotten<br/>(no remaining copies)"]
    end

    style New fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Redundancy fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Strong fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style Forgotten fill:#ffcdd2,stroke:#e57373,color:#1a365d
```

This explains:
- **Why repetition helps memory** — Builds redundancy
- **Why we forget unused memories** — Recognizers get reassigned
- **Why trauma is memorable** — High emotional salience creates instant redundancy

## Thinking Modes

The neocortex has two modes of thought:

```mermaid
flowchart LR
    subgraph Modes["Two Modes of Thinking"]
        direction TB

        subgraph Undirected["Undirected Thinking"]
            U1["Patterns trigger other patterns"]
            U2["Non-logical associations"]
            U3["Dreams, daydreaming, meditation"]
        end

        subgraph Directed["Directed Thinking"]
            D1["Deliberate problem-solving"]
            D2["Following learned procedures"]
            D3["Working through hierarchies"]
        end
    end

    style Undirected fill:#f3e5f5,stroke:#805ad5,color:#1a365d
    style Directed fill:#e3f2fd,stroke:#3182ce,color:#1a365d
```

Both modes use the same pattern-triggering mechanism—they just differ in how constrained the triggering is.

## Dreams and Creativity

Dreams are undirected thinking with **relaxed cultural taboos**:

```mermaid
flowchart TB
    subgraph Awake["Awake Thinking"]
        Taboos["Cultural/professional<br/>taboos active"]
        Fear["Amygdala triggers fear<br/>for 'forbidden' thoughts"]
        Constrained["Thinking constrained<br/>to acceptable patterns"]
    end

    subgraph Dreams["Dream Thinking"]
        Relaxed["Taboos relaxed"]
        Free["Brain 'knows' we're<br/>not acting in world"]
        Creative["Novel combinations<br/>explored freely"]
    end

    style Awake fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Dreams fill:#f3e5f5,stroke:#805ad5,color:#1a365d
```

Kurzweil uses this for creative problem-solving:
1. Think about a problem before sleep
2. Let dreams explore without constraints
3. Access dream thoughts during lucid dreaming
4. Harvest creative solutions!

## Key Takeaways

1. **Learning and recognition are the same process** — Both use pattern matching
2. **One level at a time** — Must master basics before abstractions
3. **Optimal redundancy** — Brain balances storage across patterns
4. **Memories fade without reinforcement** — Recognizers get reassigned
5. **Two thinking modes** — Directed and undirected, same mechanism
6. **Dreams relax constraints** — Enabling creative exploration

## Think About It

- Why can't we learn calculus before arithmetic?
- How does the brain decide which memories to keep vs. forget?
- How might understanding this help us learn more effectively?

## Related

- **Previous:** [Pattern Recognizers](/chapters/03-pattern-recognition-theory/recognizers/)
- **Next:** [Chapter 4: The Biological Neocortex](/chapters/04-biological-neocortex/overview/)
- **Concept:** [Hierarchical Learning](/concepts/hierarchical-learning/)
