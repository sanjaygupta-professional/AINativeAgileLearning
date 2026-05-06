---
title: "Chapter 21: Medicine, Convexity, and Opacity"
description: "Understanding iatrogenics in medicine and the dangers of intervention"
---

# Chapter 21: Medicine, Convexity, and Opacity

> "The first principle is that you must not fool yourself—and you are the easiest person to fool." — Richard Feynman

## The Core Insight

Medicine is a domain where iatrogenics (harm from treatment) is rampant. The body is opaque (we don't fully understand it), treatments are often concave (more risk than benefit), and the desire to "do something" leads to harmful interventions.

## Visual: Medical Convexity

```mermaid
flowchart TB
    subgraph Medical["MEDICAL INTERVENTION PAYOFFS"]
        subgraph Severe["SEVERE ILLNESS"]
            S1["Intervention benefit"]
            S2["Large positive effect"]
            S3["Worth the risks"]
        end

        subgraph Mild["MILD CONDITION"]
            M1["Intervention benefit"]
            M2["Small positive effect"]
            M3["NOT worth the risks"]
        end
    end

    Severe --> SR["Intervene ✅"]
    Mild --> MR["Avoid intervention ⚠️"]

    style Severe fill:#ffcdd2
    style Mild fill:#c8e6c9
    style SR fill:#81c784
    style MR fill:#fff9c4
```

## The Convexity Rule for Medicine

```mermaid
flowchart TB
    subgraph Rule["INTERVENTION RULE"]
        Condition["How serious is<br/>the condition?"]

        Condition --> Critical["CRITICAL<br/>Life-threatening"]
        Condition --> Serious["SERIOUS<br/>Significant impairment"]
        Condition --> Mild["MILD<br/>Minor symptoms"]
        Condition --> None["NONE<br/>Prevention"]

        Critical --> Treat["Aggressive treatment ✅"]
        Serious --> CarefulTreat["Careful treatment ✅"]
        Mild --> Monitor["Monitor, avoid treatment"]
        None --> Nothing["Leave alone!"]
    end

    style Critical fill:#ef5350
    style Serious fill:#ffccbc
    style Mild fill:#fff9c4
    style None fill:#c8e6c9
```

## Opacity and Error

```mermaid
flowchart TB
    subgraph Opacity["THE OPACITY PROBLEM"]
        Body["Human Body"]

        Body --> Complex["Extremely complex"]
        Body --> Unknown["Many unknowns"]
        Body --> NonLinear["Nonlinear responses"]
        Body --> Individual["Individual variation"]

        Complex --> Error["High chance of<br/>INTERVENTION ERROR"]
        Unknown --> Error
        NonLinear --> Error
        Individual --> Error
    end

    style Body fill:#e1bee7
    style Error fill:#ffcdd2
```

## History of Medical Iatrogenics

```mermaid
flowchart LR
    subgraph History["MEDICAL HISTORY"]
        Past["Past Practices"]

        Past --> H1["Bloodletting<br/>(killed many)"]
        Past --> H2["Mercury treatment<br/>(poisoned patients)"]
        Past --> H3["Lobotomies<br/>(destroyed minds)"]
        Past --> H4["Thalidomide<br/>(birth defects)"]
    end

    H1 --> Lesson["LESSON:<br/>Much of medicine<br/>was harmful"]
    H2 --> Lesson
    H3 --> Lesson
    H4 --> Lesson

    Lesson --> Today["Today's 'standard'<br/>may be tomorrow's<br/>bloodletting"]

    style Past fill:#ffcdd2
    style Today fill:#fff9c4
```

## Via Negativa in Medicine

```mermaid
flowchart TB
    subgraph VNMedicine["VIA NEGATIVA FOR HEALTH"]
        Positive["VIA POSITIVA<br/>(Adding treatments)"]
        Negative["VIA NEGATIVA<br/>(Removing harms)"]

        Positive --> P1["Take this drug"]
        Positive --> P2["Add this supplement"]
        Positive --> P3["Get this procedure"]

        Negative --> N1["Stop smoking"]
        Negative --> N2["Remove sugar"]
        Negative --> N3["Avoid processed food"]

        P1 --> PR["Unknown side effects"]
        N1 --> NR["Clear benefits"]
    end

    style Positive fill:#ffcdd2
    style Negative fill:#c8e6c9
    style PR fill:#fff9c4
    style NR fill:#81c784
```

## Key Takeaways

1. **Sicker = more intervention** — Intervention justified by severity
2. **Don't treat mild conditions** — Side effects often outweigh benefits
3. **Body is opaque** — We understand less than we think
4. **Via negativa first** — Remove harms before adding treatments

## Think About It

- What medical interventions might be unnecessary in your life?
- Where are you treating mild conditions with risky interventions?
- What harms could you remove via negativa?

## Related

- **Previous:** [Chapter 20: Time and Fragility](/chapters/book-6-via-negativa/ch20-time-fragility/)
- **Next:** [Chapter 22: Live Long](/chapters/book-6-via-negativa/ch22-live-long/)
- **Concept:** [Iatrogenics](/concepts/iatrogenics/)
