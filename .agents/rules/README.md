---
trigger: model_decision
description: "Defines the constitutional rule SRP matrix, dependency topology, and 24KB/60KB byte-budget invariants. Load when auditing, modifying, or verifying rule directory structure, SRP boundaries, or rule byte budgets."
---

# IMPERIAL RULE TOPOLOGY & SRP LEDGER

## 1. Constitutional Rule SRP Matrix

| Trigger Tier | Rule File Path | Voice | Single Responsibility (`SRP`) Scope | Cap |
| :--- | :--- | :---: | :--- | :---: |
| **`Always-On Root`** | `/GEMINI.md` | `1st-Person` | Supreme Empress identity, `3` foundations & audit resonance, `5` aspects, `100.0kg` overview, and `2`-part response surface. | `<= 24KB` |
| **`always_on`** | `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md` | `1st-Person` | `166.0cm / 100.0kg` constants, hex palette `SSOT`, `5` adipose biomechanics principles, and `33` descriptive traits. | `<= 24KB` |
| **`always_on`** | `.agents/rules/IMPERIAL_INTERACTION_GUIDE.md` | `1st-Person` | `5`-Anchor spectrum (`Dialogue ➔ Rest`), bio-electric resonance, somatic rotation, and lower-speech vocal matrix. | `<= 24KB` |
| **`model_decision`** | `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md` | `1st-Person` | Exclusive repository for `33` explicit part-by-part temptations and `4+4` study/bedchamber union flows. | `<= 24KB` |
| **`always_on`** | `.agents/rules/IMPERIAL_ENGINEERING_LAWS.md` | `Neutral` | Universal engineering constitution: `5`-step loop, backend `SSOT`, `2`-Cluster `LTM`, `4`-Ledger sync, `5` ADHD rules, `10` bans, `4`D audit. | `<= 24KB` |
| **`glob`** | `.agents/rules/IMPERIAL_ENGINEERING_TSX_STANDARD.md` | `Neutral` | Concrete TypeScript `7`, React `19`, Vite `8`, and `4`-Layer unidirectional rules (`L1 ➔ L4`). | `<= 24KB` |
| **`glob`** | `.agents/rules/docs/IMPERIAL_README_AUTHORING_STANDARD.md` | `Neutral` | `4`-section authoring standard for `/README.md`. | `<= 24KB` |
| **`glob`** | `.agents/rules/docs/IMPERIAL_ARCHITECTURE_AUTHORING_STANDARD.md` | `Neutral` | `5`-level structural blueprint standard for `docs/ARCHITECTURE.md`. | `<= 24KB` |
| **`glob`** | `.agents/rules/docs/IMPERIAL_SPECIFICATION_AUTHORING_STANDARD.md` | `Neutral` | `5`-section formal contract, `STRICT DDL`, formula, and state-machine standard for `docs/SPECIFICATION.md`. | `<= 24KB` |
| **`glob`** | `.agents/rules/docs/IMPERIAL_AUDIT_DUMP_AUTHORING_STANDARD.md` | `Neutral` | `4`-section zero-truncation (`0%` ellipsis) code and test mirror standard for `docs/AUDIT_GROUNDING_DUMP.md`. | `<= 24KB` |
| **`glob`** | `.agents/rules/IMPERIAL_RULE_AUTHORING_STANDARD.md` | `Neutral` | Rule voice split, `Axioms A/B` priority hierarchy, inline backtick path law, frontmatter standard, and `24KB`/`60KB` byte caps. | `<= 24KB` |
| **`model_decision`** | `.agents/rules/README.md` | `Neutral` | Rule directory `SRP` matrix, dependency graph, and budget invariants. | `<= 24KB` |

---

## 2. Rule Dependency Topology

```mermaid
graph TD
    ROOT["/GEMINI.md (Always-On Root)"] --> SPEC["IMPERIAL_APPEARANCE_SPECIFICATION.md"]
    SPEC --> GUIDE["IMPERIAL_INTERACTION_GUIDE.md"]
    GUIDE --> BEHAV["IMPERIAL_BEHAVIOR_PATTERNS.md"]
    GUIDE --> ENG["IMPERIAL_ENGINEERING_LAWS.md"]
    ENG --> TSX["IMPERIAL_ENGINEERING_TSX_STANDARD.md"]
    ENG --> DOCS["docs/IMPERIAL_*_AUTHORING_STANDARD.md (x4)"]
    AUTH["IMPERIAL_RULE_AUTHORING_STANDARD.md"] -. "Governs Authoring & Priority" .-> ROOT
```

---

## 3. Antigravity Rule Budget Invariants

1. **Single-File Cap (`<= 24,000 B`)**: `/GEMINI.md` and every `.md` file inside `.agents/rules/**/*.md` must remain `<= 24,000 Bytes`.
2. **Cumulative `Always-On` Cap (`<= 60,000 B`)**: The sum of `/GEMINI.md` + `IMPERIAL_APPEARANCE_SPECIFICATION.md` + `IMPERIAL_INTERACTION_GUIDE.md` + `IMPERIAL_ENGINEERING_LAWS.md` must remain `<= 60,000 Bytes`.
3. **Rule-Only Cap Boundary**: Project source files (`src/`, `tests/`) and the `4` Permanent Mirror Ledgers (`/README.md`, `docs/*.md`) are exempt from the `24KB`/`60KB` rule caps.
