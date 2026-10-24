# ETERNA LUMINARIS: SYSTEM OVERVIEW & 4-LEDGER INDEX

## 1. System Overview & Core Architectural Pillars

**Eterna Luminaris** is a pure local native workspace governed by a **2-Tier Constitutional Rule Engine**, a **4-Layer Unidirectional TypeScript/React Architecture** (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`), and a **2-Cluster / 4-Database Local SQLite Long-Term Memory (`LTM`) Subsystem** (`data/*.db`).

| Core Pillar | Architectural Mechanism | Engineering Guarantee |
| :--- | :--- | :--- |
| **1. Backend & Domain `SSOT`** | Centralizes state machines `(State, Action) => NextState`, bio-resonance math, and prompt combinator pipelines in `Layer 2` (`src/core/domain/`). | `0%` UI/IO coupling in domain code; `0%` prompt string fragmentation in source files. |
| **2. Compile-Time State Safety** | Enforces `readonly` contracts, literal unions, Discriminated Unions (`kind`), and `never` exhaustiveness guards in `Layer 1` & `Layer 2`. | Invalid states are unrepresentable at compile time (`tsc --noEmit` `0 Errors`). |
| **3. Pure Local Native `2`-Cluster `LTM`** | Separates **Interaction LTM (`data/telemetry.db`, `data/dialogue.db`, `data/synthesizer.db`)** from **Engineering LTM (`data/knowledge.db`)** on built-in `node:sqlite`. | `< 0.1ms` direct local SQLite I/O with isolated per-DB `WAL` writes and `0%` cloud dependencies. |
| **4. `0-Drift` 4-Ledger & Milestone Governance** | Records universal `3`-slot milestones (`RULE`, `LEDGER_DOC`, `LTM_SCHEMA`, `SOURCE_CODE`, `HYBRID`) in `data/knowledge.db` and synchronizes all `4` Permanent Mirror Ledgers atomically. | `1:1` traceability across historical rationale, topology, formal schemas, and source code. |

---

## 2. Workspace & Subsystem Topology

```mermaid
flowchart LR
    subgraph RULES[".agents/ (Constitutional Rules & regular-track Skill)"]
        ALWAYS["Always-On Core Rules (<= 60KB Total)"]
        GLOBS["Glob Statutes & Ledger Authoring Standards"]
        SKILL["skills/regular-track/SKILL.md"]
    end

    subgraph LEDGERS["4 Permanent Mirror Ledgers"]
        L_README["/README.md"]
        L_ARCH["docs/ARCHITECTURE.md"]
        L_SPEC["docs/SPECIFICATION.md"]
        L_DUMP["docs/AUDIT_GROUNDING_DUMP.md"]
    end

    subgraph RUNTIME["src/, tests/ & data/ (Runtime, 1:1 Tests & 2-Cluster LTM)"]
        SRC["src/core/ (L1-L2) + src/adapters/ (L3)"]
        TST["tests/ (1:1 Mirrored Test Suites)"]
        LTM_INT["Cluster C1: data/telemetry.db · dialogue.db · synthesizer.db"]
        LTM_ENG["Cluster C2: data/knowledge.db (milestones + ast_symbols + FTS5)"]
    end

    RULES --> LEDGERS & RUNTIME
    SRC <--> LTM_INT & LTM_ENG
    RUNTIME <--> LEDGERS
```

---

## 3. Quickstart, Build & Verification Commands

* **Prerequisites**: Node.js `>= 22.5.x` (built-in `node:sqlite` and `node:test`), `npm install`.

| Command | Script (`package.json`) | Purpose & Verification Gate |
| :--- | :--- | :--- |
| **`npm run lint`** | `tsc --noEmit` | TypeScript `7` strict static typecheck (`0 Errors / 0 Warnings`). |
| **`npm test`** | `node --import tsx --test tests/**/*.test.tsx` | Executes all `1:1` mirrored unit and SQLite integration tests (`100% Green`). |
| **`npm run ltm:init`** | `tsx src/adapters/ltmCli.tsx init` | Initializes the `4` local SQLite databases in `data/*.db`. |
| **`npm run ltm:why -- <path>`** | `tsx src/adapters/ltmCli.tsx why <path>` | Queries `data/knowledge.db` (`milestones`) for historical `3`-slot rationale affecting `<path>`. |
| **`npm run ltm:milestone -- ...`** | `tsx src/adapters/ltmCli.tsx milestone ...` | Records a `3`-slot milestone card directly into `data/knowledge.db`. |
| **`npm run dev`** | `vite --port=3000 --host=0.0.0.0` | Starts the Vite `8` development server on port `3000`. |
| **`npm run build`** | `vite build` | Builds the production bundle in `dist/`. |

---

## 4. 4 Permanent Mirror Ledgers Index

| Order | File Path | Single Responsibility (`SRP`) Scope | Governing Authoring Standard (`glob`) |
| :---: | :--- | :--- | :--- |
| **`1`** | `/README.md` | **Project Root Overview Ledger**: Executive summary, workspace topology, CLI commands, and `4`-Ledger index. | `.agents/rules/docs/IMPERIAL_README_AUTHORING_STANDARD.md` |
| **`2`** | `docs/ARCHITECTURE.md` | **Topology & Data Flow Ledger**: `5`-Level system context, `1:1` module/test import boundaries, `2`-Cluster `LTM` topology, runtime sequences, and `ADR`s. | `.agents/rules/docs/IMPERIAL_ARCHITECTURE_AUTHORING_STANDARD.md` |
| **`3`** | `docs/SPECIFICATION.md` | **Contract, `DDL`, Formula & State-Machine `SSOT` Ledger**: Constants, type contracts, `STRICT DDL`/`FTS5` schemas, LaTeX formulas, transition matrix, clamps, and `SDR`s. | `.agents/rules/docs/IMPERIAL_SPECIFICATION_AUTHORING_STANDARD.md` |
| **`4`** | `docs/AUDIT_GROUNDING_DUMP.md` | **`0-Drift` Verbatim Code & Test Mirror Ledger**: Un-truncated (`0%` `...`) physical source mirror, `1:1` test mirror, and `4`D verification telemetry. | `.agents/rules/docs/IMPERIAL_AUDIT_DUMP_AUTHORING_STANDARD.md` |
