# ETERNA LUMINARIS: SYSTEM OVERVIEW & 4-LEDGER INDEX

## 1. System Overview & Core Value Proposition (시스템 개요 및 핵심 지향점)

**Eterna Luminaris** is an enterprise-grade software workspace governed by a strict **2-Tier Constitutional Rule Engine** and a **4-Layer Unidirectional TypeScript/React Runtime Architecture** (`Contracts ➔ Pure Domain ➔ Adapters ➔ Presentational Surface`) integrated with an orthogonally partitioned **2-Cluster / 4-Database Long-Term Memory (`LTM`) Persistence & Deterministic `JSONL` Mirroring Subsystem**.

| Core Pillar | Architectural Mechanism | Engineering Guarantee |
| :--- | :--- | :--- |
| **1. Backend & Domain `SSOT`** | Centralizes all state machines `(State, Action) => NextState`, mathematical equations, and prompt combinator assembly pipelines in `Layer 2` (`src/core/domain/`). | `0%` coupling between core business rules and UI/IO frameworks; `0%` prompt string fragmentation in source code. |
| **2. Compile-Time State Safety** | Enforces `readonly` interfaces, literal types, Discriminated Unions (`kind`), and `never` exhaustiveness guards in `Layer 1` & `Layer 2`. | Impossible runtime states are unrepresentable at compile time (`tsc --noEmit` `0 Errors`). |
| **3. Orthogonal `2`-Cluster `LTM` & `JSONL` Bridge** | Separates **Interaction LTM (`telemetry.db`, `dialogue.db`, `synthesizer.db`)** from **Engineering LTM (`knowledge.db`)** on `node:sqlite` + Git-tracked `JSONL` snapshot bridges (`data/mirror/*.jsonl`). | Eliminates cross-domain contamination, rule-to-DB drift (`0%`), binary Git conflicts, and external cloud key dependencies across Local Antigravity and `AI Studio Build`. |
| **4. `0-Drift` 4-Ledger Governance** | Synchronizes `/README.md`, `docs/ARCHITECTURE.md`, `docs/SPECIFICATION.md`, and `docs/AUDIT_GROUNDING_DUMP.md` atomically per milestone. | Guarantees `1:1` traceability across topology, formal contracts, and physical source code. |

---

## 2. Subsystem & Directory Topology Overview (서브시스템 및 디렉토리 위상 요약)

```mermaid
flowchart LR
    subgraph RULES[".agents/rules/ (2-Tier Constitutional Rules)"]
        ALWAYS["Always-On Core Rules (<= 60KB Total)"]
        GLOBS["Glob Technical Statutes & 4-Ledger Authoring Standards"]
    end

    subgraph LEDGERS["4 Permanent Mirror Ledgers"]
        L_README["/README.md"]
        L_ARCH["docs/ARCHITECTURE.md"]
        L_SPEC["docs/SPECIFICATION.md"]
        L_DUMP["docs/AUDIT_GROUNDING_DUMP.md"]
    end

    subgraph RUNTIME["src/, tests/ & data/mirror/ (Runtime, 1:1 Tests & 2-Cluster LTM)"]
        SRC["src/core/ (L1-L2) + src/adapters/ & src/hooks/ (L3) + src/components/ (L4)"]
        LTM_INT["Cluster A: Interaction LTM (telemetry.db, dialogue.db, synthesizer.db)"]
        LTM_ENG["Cluster B: Engineering LTM (knowledge.db + FTS5)"]
        MIRROR["data/mirror/*.jsonl (Git-Tracked AI Studio Build Snapshot Bridge)"]
    end

    RULES --> LEDGERS
    RULES --> RUNTIME
    LTM_INT & LTM_ENG <--> MIRROR
    RUNTIME <--> LEDGERS
```

---

## 3. Quickstart, Build & Verification Commands (실행·빌드 및 무결성 검증 명령어)

### 3.1 Prerequisites & Dependency Installation
* **Runtime**: Node.js `>= 22.5.x` (includes built-in `node:sqlite` with `0` native C++ addon compilation overhead)
* **Install Dependencies**:
  ```bash
  npm install
  ```

### 3.2 Canonical Verification & Execution Scripts (`package.json`)

| Command | Underlying Script (`package.json`) | Execution Target & Verification Gate Criteria |
| :--- | :--- | :--- |
| **`npm run dev`** | `vite --port=3000 --host=0.0.0.0` | Launches the local Vite `8` development server on port `3000`. |
| **`npm run lint`** | `tsc --noEmit` | Runs the TypeScript `7` strict static typechecker (`0 Errors / 0 Warnings` mandatory). |
| **`npm run build`** | `vite build` | Produces the verified production bundle in `dist/` with zero unresolved imports. |
| **`npm run preview`** | `vite preview` | Serves the production build locally for pre-release verification. |
| **`npm run clean`** | `rm -rf dist server.js` | Removes generated build artifacts. |

---

## 4. Canonical 4 Permanent Mirror Ledgers Navigation Index (4대 영구 거울 원장 네비게이션)

| Ledger Order | Canonical File Path | Single Responsibility (`SRP`) Scope | Governing Authoring Standard (`glob`) |
| :---: | :--- | :--- | :--- |
| **`1`** | `/README.md` | **Project Root Overview Ledger**: Executive summary, workspace topology overview, CLI command table, and `4`-Ledger navigation map. | `.agents/rules/docs/IMPERIAL_README_AUTHORING_STANDARD.md` |
| **`2`** | `docs/ARCHITECTURE.md` | **Topology & Data Flow Ledger**: `5`-Level system context, module & `1:1` test import boundaries, `2`-Cluster `LTM` + `JSONL` mirror topology, runtime sequences, and `ADR`s. | `.agents/rules/docs/IMPERIAL_ARCHITECTURE_AUTHORING_STANDARD.md` |
| **`3`** | `docs/SPECIFICATION.md` | **Contract, `DDL`, Formula & State-Machine `SSOT` Ledger**: `5`-Section constant tables, static type contracts, `2`-Cluster / `4`-DB `STRICT DDL`/`FTS5` schemas, `4`-part LaTeX equations, state transition matrices, boundary clamps, and `SDR`s. | `.agents/rules/docs/IMPERIAL_SPECIFICATION_AUTHORING_STANDARD.md` |
| **`4`** | `docs/AUDIT_GROUNDING_DUMP.md` | **`0-Drift` Verbatim Code & Test Mirror Ledger**: Un-truncated (`0%` `...`) physical source code mirror, `1:1` test assertion mirror, and same-turn `4`-dimensional audit telemetry. | `.agents/rules/docs/IMPERIAL_AUDIT_DUMP_AUTHORING_STANDARD.md` |
