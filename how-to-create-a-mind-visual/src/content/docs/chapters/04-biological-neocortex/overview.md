---
title: "Chapter 4: The Biological Neocortex"
description: "The physical structure of the brain's thinking layer"
---

# Chapter 4: The Biological Neocortex

> "The brain is just the weight of God—For—Heft them—Pound for Pound" — Emily Dickinson

This chapter examines the actual biological structure of the neocortex—the thin layer responsible for all higher thought.

## Chapter Overview

```mermaid
flowchart TB
    subgraph Chapter4["Chapter 4: The Biological Neocortex"]
        Central["Central Question:<br/>What is the physical structure<br/>that implements pattern recognition?"]

        Central --> Structure["Physical Structure<br/>Layers, columns, neurons"]
        Central --> Connectivity["Connectivity<br/>How neurons link"]
        Central --> Validation["Evidence<br/>Supporting PRTM"]
    end

    style Chapter4 fill:#1a365d,stroke:#63b3ed,color:#e2e8f0
    style Structure fill:#3182ce,stroke:#63b3ed,color:#fff
    style Connectivity fill:#38a169,stroke:#68d391,color:#fff
    style Validation fill:#805ad5,stroke:#b794f4,color:#fff
```

## Neocortex Anatomy

```mermaid
flowchart TB
    subgraph Anatomy["Neocortex Physical Structure"]
        direction TB

        subgraph Dimensions["Dimensions"]
            Thickness["Thickness: ~2.5mm"]
            Area["Area: ~2500 cm²<br/>(if unfolded)"]
            Weight["80% of brain weight"]
        end

        subgraph Layers["Six Layers (I-VI)"]
            L1["Layer I: Molecular"]
            L2["Layer II: External granular"]
            L3["Layer III: External pyramidal"]
            L4["Layer IV: Internal granular"]
            L5["Layer V: Internal pyramidal"]
            L6["Layer VI: Multiform"]
        end

        subgraph Columns["Cortical Columns"]
            Cols["~500,000 columns"]
            Each["~60,000 neurons each"]
            PR["~100 neurons per<br/>pattern recognizer"]
        end
    end

    style Dimensions fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Layers fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style Columns fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

## The Key Numbers

| Measure | Value |
|---------|-------|
| Neocortex thickness | ~2.5 mm |
| Cortical columns | ~500,000 |
| Neurons per column | ~60,000 |
| Total neocortex neurons | ~30 billion |
| Pattern recognizers | ~300 million |
| Neurons per recognizer | ~100 |

## Layer Functions

```mermaid
flowchart LR
    subgraph LayerFlow["Information Flow Through Layers"]
        direction TB

        External["External Input<br/>(from thalamus)"]
        L4_in["Layer IV<br/>Receives input"]
        L2_3["Layers II & III<br/>Project to other<br/>cortex areas"]
        L5_6["Layers V & VI<br/>Project outside<br/>cortex"]

        External --> L4_in
        L4_in --> L2_3
        L4_in --> L5_6
    end

    style External fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style L4_in fill:#fff3e0,stroke:#ed8936,color:#1a365d
    style L2_3 fill:#e8f5e9,stroke:#38a169,color:#1a365d
    style L5_6 fill:#f3e5f5,stroke:#805ad5,color:#1a365d
```

## Mountcastle's Discovery

Vernon Mountcastle made a crucial observation in 1978: **the neocortex has remarkably uniform structure**.

```mermaid
flowchart LR
    subgraph Discovery["Mountcastle's Key Insight"]
        Observation["Same basic structure<br/>everywhere in neocortex"]
        Hypothesis["One algorithm,<br/>repeated everywhere"]
        Implication["Vision, hearing, language,<br/>abstract thought—<br/>all same mechanism"]
    end

    Observation --> Hypothesis --> Implication

    style Discovery fill:#e8f5e9,stroke:#38a169,color:#1a365d
```

## Neurons and Connections

```mermaid
flowchart TB
    subgraph Neuron["Neuron Structure"]
        Dendrites["Dendrites<br/>(receive input)"]
        Body["Cell Body<br/>(processes signals)"]
        Axon["Axon<br/>(sends output)"]
        Synapses["Synapses<br/>(connection points)"]

        Dendrites --> Body --> Axon --> Synapses
    end

    subgraph Connections["Connection Properties"]
        Weight["Synaptic strength<br/>(adjustable)"]
        Direction["One-way signaling"]
        Plasticity["Changes with learning"]
    end

    Neuron --> Connections

    style Neuron fill:#e3f2fd,stroke:#3182ce,color:#1a365d
    style Connections fill:#fff3e0,stroke:#ed8936,color:#1a365d
```

## Evidence for PRTM

Kurzweil presents multiple lines of evidence:

1. **Uniformity** — Same structure suggests same algorithm
2. **Plasticity** — Cortex regions can take over other functions
3. **Hierarchy** — Information flows up through layers
4. **Timing** — Recognition takes ~100ms (time for signals to traverse layers)

## Key Takeaways

1. **Thin but powerful** — 2.5mm layer does all higher thinking
2. **Uniform structure** — Same algorithm everywhere
3. **Six layers** — With distinct input/output roles
4. **300 million recognizers** — Each with ~100 neurons
5. **Plasticity** — Regions can adapt to new functions

## Think About It

- Why would evolution favor uniform structure over specialized circuits?
- How does the thinness of the neocortex affect its processing?
- What does plasticity suggest about the nature of the algorithm?

## Related

- **Previous:** [Chapter 3: Learning](/chapters/03-pattern-recognition-theory/learning/)
- **Next:** [Chapter 5: The Old Brain](/chapters/05-old-brain/overview/)
- **Concept:** [The Neocortex](/concepts/neocortex/)
