# SYSTEM ARCHITECTURE BLUEPRINT

## 1. Level 1: System Context & Subsystem Topology (전체 시스템 컨텍스트 및 서브시스템 위상)

### 1.1 End-to-End System Context Diagram
The workspace is structured around four strictly decoupled architectural subsystems governed by Backend Single Source of Truth (`SSOT`), Unidirectional Dependency Inversion (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`), and Pure Local Native `2`-Cluster Long-Term Memory (`LTM`) Separation (`data/*.db`):
1. **Subsystem A — 2-Tier Constitutional Rule Engine & Regular-Track Skill (`/GEMINI.md`, `/.agents/rules/**/*.md`, `/.agents/skills/regular-track/SKILL.md`)**: Serves as the sole file-based Constitutional `SSOT` (`0%` duplication in database tables), separating `always_on` foundational/engineering rules from `model_decision` and path-scoped (`glob`) technical statutes, ledger authoring standards, and the `3`-Stage Regular-Track Operations Skill.
2. **Subsystem B — Pure Domain, State Reducer & Prompt Combinator Core (`src/core/`)**: Controls all state machines `(State, Action) => NextState`, bio-signal mathematical equations, milestone validation, and the deterministic **Prompt Combinator Pipeline (`synthesizeTurnPrompt`)** with `0%` hardcoded prompt string fragmentation and `0%` coupling to external UI or I/O frameworks.
3. **Subsystem C — Pure Local Native `2`-Cluster SQLite `LTM` (`node:sqlite`, `data/*.db`)**:
   - **Cluster C1 — Sovereign Interaction, Bio-State, Cognitive Memory & Prompt Synthesis LTM (`인터랙션·생체·기억·프롬프트 합성 축`)**: Isolates `data/telemetry.db` (`주인님 생체 신호·체온·도파민 상태 머신`), `data/dialogue.db` (`인간형 다계층 기억: 단기기억[STM]·해마 일화기억[Hippocampus]·장기 관계기억[LTM]`), and `data/synthesizer.db` (`온디맨드 행동 양식·프롬프트 조각 동적 합성 전용 DB — 초기 빈 스키마`). Supports both `Layer 3 ➔ Layer 2` sequential retrieval and read-only `ATTACH DATABASE` cross-DB joins within `Cluster C1` while keeping all writes isolated per DB (`BEGIN IMMEDIATE`).
   - **Cluster C2 — Engineering & Workspace Knowledge LTM (`엔지니어링·기술 지식·범용 마일스톤 축`)**: Isolates `data/knowledge.db` containing the universal `milestones` table (`RULE`, `LEDGER_DOC`, `LTM_SCHEMA`, `SOURCE_CODE`, `HYBRID` reverse-indexed by file path via `json_each`), `ast_symbols`, `technical_knowledge_nodes`, and `knowledge_fts` (`FTS5`).
4. **Subsystem D — Pure Frontend Renderer & View Adapter Surface (`src/hooks/`, `src/components/`, `src/App.tsx`)**: Operates strictly as a stateless renderer and hardware view adapter (`Props-In, Intent-Out`).

```mermaid
flowchart TB
    Auditor["System Architect & Auditor<br/>Architectural Direction, Adversarial Audits & Regular-Track CLI"]

    subgraph SUB_CONST["Subsystem A: 2-Tier File-Based Constitutional SSOT & Regular-Track Skill"]
        ROOT_RULES["Always-On Core Rules<br/>(/GEMINI.md + IMPERIAL_ENGINEERING_LAWS.md + Sovereign Rules)"]
        GLOB_RULES["Path-Scoped Glob Standards & Regular-Track Skill<br/>(IMPERIAL_ENGINEERING_TSX_STANDARD.md, docs/IMPERIAL_*_AUTHORING_STANDARD.md, regular-track/SKILL.md)"]
    end

    subgraph SUB_CORE["Subsystem B: Pure Domain & Prompt Combinator SSOT Core (src/core/)"]
        L1["Layer 1: Strict Type Contracts<br/>(src/core/contracts/ltmContracts.ts)"]
        L2["Layer 2: Pure Reducers, Bio-Math, Milestone Guards & Prompt Combinator<br/>(src/core/domain/ltmDomainEngine.ts)"]
    end

    subgraph SUB_LTM["Subsystem C: Pure Local Native 2-Cluster LTM (node:sqlite in data/*.db)"]
        subgraph CLUST_INT["Cluster C1: Sovereign Interaction & Bio-Cognitive LTM"]
            DB_TELE[("data/telemetry.db<br/>(Bio-Signals, 39.0~39.2°C Temp & Dopamine State)")]
            DB_DIAL[("data/dialogue.db<br/>(STM, Hippocampal Episodic & Cortical LTM)")]
            DB_SYNTH[("data/synthesizer.db<br/>(On-Demand Prompt & Behavior Synthesizer — Empty Baseline)")]
        end

        subgraph CLUST_ENG["Cluster C2: Engineering & Workspace Knowledge LTM"]
            DB_KNOW[("data/knowledge.db<br/>(Universal milestones, AST Symbols, Tech Nodes & FTS5)")]
        end
    end

    subgraph SUB_SURF["Subsystem D: Layer 3 Adapters, CLI & Layer 4 Surface"]
        L3["Layer 3: LtmDualClusterManager, Schema DDL & CLI Controller<br/>(src/adapters/ltmSchemaDdl.ts, src/adapters/ltmSqliteCluster.ts, src/adapters/ltmCli.ts)"]
        L4["Layer 4: Stateless Presentational Renderer<br/>(src/components/*.tsx, src/App.tsx)"]
    end

    Auditor -- "Direction & CLI (ltm:why / ltm:milestone)" --> L3
    Auditor -- "UI Intent" --> L4
    ROOT_RULES -. "Universal Engineering Laws" .-> GLOB_RULES
    GLOB_RULES -. "Enforces Layer & Ledger Standards" .-> SUB_CORE & SUB_LTM & SUB_SURF
    L4 -- "Invokes Intent Callback" --> L3
    L3 -- "L3->L2 Read or Read-Only ATTACH Join" --> DB_SYNTH & DB_DIAL & DB_TELE
    L3 -- "Dispatches Typed Action + Fetched Blocks" --> L2
    L1 --> L2 & L3 & L4
    L2 -- "Returns Immutable NextState & Synthesized Prompt" --> L3
    L3 -- "Isolated Per-DB BEGIN IMMEDIATE Commit" --> DB_TELE & DB_DIAL & DB_SYNTH & DB_KNOW
```

---

## 2. Level 2: Module Topology, 1:1 Test Symmetry & Unidirectional Dependency Matrix (모듈 구조·1:1 테스트 대칭 및 의존성 경계 지도)

### 2.1 Implemented Module & `1:1` Mirrored Test Matrix

| Architectural Layer | Physical Source Module Path | `1:1` Mirrored Test Path | Allowed Imports (`허용 참조`) | Forbidden Imports (`금지 참조`) | Single Responsibility (`SRP` 명세) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **L1: Contracts** | `src/core/contracts/ltmContracts.ts` | `tests/core/contracts/ltmContracts.test.ts` | `None` *(Zero external imports)* | `react`, `DOM`, `node:sqlite`, `L2`, `L3`, `L4` | Pure `readonly` interfaces, literal union types, and discriminated union contracts for `Cluster C1`, `Cluster C2` (`milestones`), and `DomainAction`. |
| **L2: Pure Domain** | `src/core/domain/ltmDomainEngine.ts` | `tests/core/domain/ltmDomainEngine.test.ts` | `src/core/contracts/ltmContracts.ts` | `react`, `DOM`, `window`, `node:sqlite`, `node:fs`, `L3`, `L4` | Pure bio-resonance math (`[39.0, 39.2]`), sequential `M-XXXX` milestone ID generator, 3-slot validator, `synthesizeTurnPrompt` combinator, and `reduceDomainState`. |
| **L3: Adapters (DDL)** | `src/adapters/ltmSchemaDdl.ts` | `tests/adapters/ltmSchemaDdl.test.ts` | `L1 Contracts` | `react`, `DOM`, `node:fs`, `L4` | Canonical `STRICT` SQLite & `FTS5` DDL definitions and pure row-to-contract mappers. |
| **L3: Adapters (Cluster)** | `src/adapters/ltmSqliteCluster.ts` | `tests/adapters/ltmSqliteCluster.test.ts` | `node:fs`, `node:path`, `node:sqlite`, `L1`, `L2`, `ltmSchemaDdl.ts` | `react`, `DOM`, `L4` | `LtmDualClusterManager`: direct `data/*.db` persistence, per-DB atomic writes, `Cluster C1` read-only `ATTACH DATABASE` cross-DB join, and `json_each` file-indexed `milestones` lookup. |
| **L3: Adapters (CLI)** | `src/adapters/ltmCli.ts` | `tests/adapters/ltmCli.test.ts` | `node:path`, `node:url`, `L1`, `ltmSqliteCluster.ts` | `react`, `DOM`, `L4` | Deterministic CLI controller (`runLtmCli`) powering `npm run ltm:init`, `ltm:why`, and `ltm:milestone`. |

---

## 3. Level 3: Cross-Layer Contract Hierarchy & 2-Cluster LTM Persistence Topology (계층 간 계약 위상 및 2원화 LTM 영속성 구조)

### 3.1 Unidirectional Contract & Orthogonal `2`-Cluster LTM Class Topology

```mermaid
classDiagram
    class DomainStateTree {
        <<Layer 1 Readonly Contract>>
        +readonly ExecutionPhase phase
        +readonly BioTelemetrySnapshot bioState
        +readonly SynthesizedTurnPrompt lastSynthesizedPrompt
    }

    class LtmDomainEngine {
        <<Layer 2 Pure Domain & Combinator>>
        +calculateNormalizedPercent(value: number, min: number, max: number) number
        +calculateResonanceTemperature(specificity: number, novelty: number) number
        +formatNextMilestoneId(existingIds: string[]) string
        +validateMilestoneInput(input: NewMilestoneInput) NewMilestoneInput
        +synthesizeTurnPrompt(bio: BioTelemetrySnapshot, memories: MemoryEngram[], blocks: PromptSynthesisBlock[]) SynthesizedTurnPrompt
        +reduceDomainState(state: DomainStateTree, action: DomainAction) DomainStateTree
    }

    class LtmDualClusterManager {
        <<Layer 3 Pure Local Native SQLite Adapter>>
        +telemetryDbPath: string
        +dialogueDbPath: string
        +synthesizerDbPath: string
        +knowledgeDbPath: string
        +upsertBioTelemetry(snapshot: BioTelemetrySnapshot) void
        +upsertMemoryEngram(engram: MemoryEngram) void
        +upsertPromptSynthesisBlock(block: PromptSynthesisBlock) void
        +queryPromptBlocks(anchor: SpectrumAnchor, temp: number) PromptSynthesisBlock[]
        +querySynthesizerWithAttachedContext(snapshotId: string, sessionId: string) PromptSynthesisBlock[]
        +recordMilestone(input: NewMilestoneInput, createdAtIso: string) MilestoneRecord
        +getMilestonesByFile(filePath: string) MilestoneRecord[]
    }

    class LtmCliController {
        <<Layer 3 Regular-Track CLI Adapter>>
        +runLtmCli(argv: string[], dbDir: string, nowIso: string) string
    }

    LtmDomainEngine ..> DomainStateTree : transitions & synthesizes
    LtmDualClusterManager ..> LtmDomainEngine : invokes pure validators & clamps
    LtmCliController --> LtmDualClusterManager : orchestrates init, why & milestone
```

---

## 4. Level 4: Runtime Execution & Transaction Sequence Pipeline (런타임 실행 및 원자적 트랜잭션 시퀀스 파이프라인)

### 4.1 Pure Local Native Prompt Synthesis & Universal Milestone Recording Sequence

```mermaid
sequenceDiagram
    autonumber
    actor User as System Architect / Regular-Track CLI
    participant CLI as L3: ltmCli.ts / Hook Adapter
    participant Cluster as L3: LtmDualClusterManager
    participant C1 as Cluster C1 (data/telemetry, dialogue, synthesizer)
    participant C2 as Cluster C2 (data/knowledge.db: milestones)
    participant Domain as L2: ltmDomainEngine.ts

    User->>CLI: Stage 0/1: npm run ltm:why -- <filePath>
    CLI->>Cluster: getMilestonesByFile(filePath)
    Cluster->>C2: SELECT m.* FROM milestones WHERE json_each(affected_files_json) = filePath
    C2-->>User: Return 3-Slot Chesterton's Fence Rationale (problem, whyRationale, invariants)

    User->>CLI: Runtime Turn: Synthesize Prompt from Bio + Memory + Synthesizer
    alt Default L3 -> L2 Sequential Fetch
        Cluster->>C1: Read telemetry.db + dialogue.db + synthesizer.db (< 0.1ms)
        Cluster->>Domain: synthesizeTurnPrompt(bio, memories, blocks)
    else Complex Cross-Condition Filter (Read-Only ATTACH)
        Cluster->>C1: ATTACH telemetry.db & dialogue.db -> Single SQL JOIN on synthesizer.db -> DETACH
    end
    Domain-->>CLI: Return Deterministic SynthesizedTurnPrompt

    User->>CLI: Stage 3: npm run ltm:milestone -- --scope HYBRID ...
    CLI->>Cluster: recordMilestone(input, nowIso)
    Cluster->>Domain: validateMilestoneInput(input) + formatNextMilestoneId(ids)
    Cluster->>C2: BEGIN IMMEDIATE -> INSERT INTO milestones -> COMMIT
    C2-->>User: Verified Milestone M-XXXX Persisted Directly in data/knowledge.db
```

---

## 5. Level 5: Governance Gates & Architecture Decision Records (품질 거버넌스 게이트 및 핵심 ADR)

### 5.1 Constitutional, Documentation & Compiler Governance Gates

| Governance Gate | Target Scope | Enforced Engineering Invariant |
| :--- | :--- | :--- |
| **Gate 1: Strict TypeScript (`npm run lint`)** | `tsconfig.json`, `src/**/*.ts(x)`, `tests/**/*.ts(x)` | `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`, `noFallthroughCasesInSwitch: true` (`0 Errors / 0 Warnings`). |
| **Gate 2: `1:1` Mirrored Test Symmetry (`npm test`)** | `src/**/*` ⇄ `tests/**/*` | `100%` `1:1` directory and module mirror between `src/` (`5` modules) and `tests/` (`5` test suites, `11/11 PASS`). |
| **Gate 3: Antigravity Rule Budget (`always_on` $\perp$ `glob`)** | `/GEMINI.md`, `/.agents/rules/**/*.md` | Every rule file in `/GEMINI.md` and `/.agents/rules/**/*.md` `<= 24,000 Bytes`; cumulative `Always-On` (`4` files) `<= 60,000 Bytes`. |
| **Gate 4: 4 Permanent Mirror Ledgers `0-Drift` Sync** | `/README.md`, `docs/ARCHITECTURE.md`, `docs/SPECIFICATION.md`, `docs/AUDIT_GROUNDING_DUMP.md` | Real-time synchronization of all `4` Permanent Mirror Ledgers within every milestone transaction (`0` separate `*_COMMENTARY.md` files). |

### 5.2 Core Architecture Decision Records (`ADR-01 ~ ADR-08`)

| ADR ID | Architectural Decision | Rejected Anti-Pattern (`절대 회귀 금지 패턴`) | Enforcement Mechanism |
| :--- | :--- | :--- | :--- |
| **`ADR-01`** | **Backend/Domain `SSOT` & Pure Frontend Renderer Separation** | Embedding business logic, math formulas, or state machines inside UI components | Isolate `100%` of state transitions, bio-math, and prompt assembly pipelines in `Layer 2` (`src/core/domain/`) with `0` React/DOM/SQLite imports. |
| **`ADR-02`** | **Discriminated Union State Machines + Exhaustive `never` Check** | Scattering multiple boolean flags (`isLoading`, `isError`, `isActive`) across components | Key all operational phases on literal `kind` tags in `Layer 1` and enforce `const _exhaustiveCheck: never = action` in `Layer 2`. |
| **`ADR-03`** | **Caller-Injected Entropy at the `Layer 3 ➔ Layer 2` Boundary** | Calling `new Date()`, `Date.now()`, `Math.random()`, or I/O inside `Layer 2` reducers | Capture all temporal, stochastic, and database I/O values in `Layer 3` adapters and pass them via immutable action payloads. |
| **`ADR-04`** | **Orthogonal `2`-Cluster LTM Separation (`Interaction LTM` $\perp$ `Engineering LTM`)** | Mixing persona bio-signals/memories with software engineering AST knowledge in a single undifferentiated cluster | Partition `Cluster C1` (`telemetry.db`, `dialogue.db`, `synthesizer.db`) strictly apart from `Cluster C2` (`knowledge.db`) in `Layer 3`. |
| **`ADR-05`** | **Separation of Universal Engineering Laws (`always_on`) vs. Path-Scoped Standards (`glob`)** | Hardcoding concrete DB names (`FTS5`, `canon.db`) in `IMPERIAL_ENGINEERING_LAWS.md` | Keep `IMPERIAL_ENGINEERING_LAWS.md` `100%` spec-abstracted and realize concrete DB/schema specs in `docs/ARCHITECTURE.md` and `docs/SPECIFICATION.md`. |
| **`ADR-06`** | **Consolidation into the `4` Permanent Mirror Ledgers (`Zero Commentary File Spawning`)** | Maintaining separate `*_COMMENTARY.md` files | Govern document authoring via `.agents/rules/docs/IMPERIAL_*_AUTHORING_STANDARD.md` and embed `ADR`/`SDR` tables directly inside `ARCHITECTURE.md` and `SPECIFICATION.md`. |
| **`ADR-07`** | **Replacement of `canon.db` with Empty-Baseline `synthesizer.db` & `L2` Combinator Separation** | Duplicating markdown constitutional rules in `canon.db` (causing rule-to-DB drift) or scattering prompt strings across `.ts` files | Treat `/GEMINI.md` + `/.agents/rules/**/*.md` as the sole Constitutional `SSOT`, store on-demand prompt/behavior blocks in `synthesizer.db` (initialized empty), and keep assembly logic in `Layer 2`. |
| **`ADR-08`** | **Pure Local Native `node:sqlite` (`data/*.db`), Hybrid `C1` `ATTACH` Join & Universal `milestones`** | Adding redundant `JSONL` mirror bridges for buggy web sandboxes (`AI Studio Build`) or restricting milestones to code-only changes | Operate directly on local `data/*.db` with isolated per-DB `BEGIN IMMEDIATE` writes, allow read-only `ATTACH DATABASE` joins inside `Cluster C1`, and track all `RULE`, `LEDGER_DOC`, `LTM_SCHEMA`, `SOURCE_CODE`, and `HYBRID` changes in `data/knowledge.db` (`milestones`). |
