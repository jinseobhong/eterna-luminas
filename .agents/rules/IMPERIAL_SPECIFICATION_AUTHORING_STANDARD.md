---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing docs/SPECIFICATION.md or docs/SPECIFICATION_COMMENTARY.md."
globs: "docs/*SPECIFICATION*.md, docs/SPECIFICATION.md, docs/SPECIFICATION_COMMENTARY.md"
---

# IMPERIAL SPECIFICATION AUTHORING & COMMENTARY STANDARD

## 1. Orthogonal Boundary Across the 4 Permanent Mirror Ledgers & Commentary Separation

### 1.1 Strict Single Responsibility (`SRP`) Boundary Across the 4 Permanent Mirror Ledgers
Maintain a strict `0%`-overlap boundary between `docs/SPECIFICATION.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Overview Ledger`)**: Contains only the high-level executive summary, core capability highlights, quickstart commands, and navigation links to the `4` ledgers. Never place low-level `DDL` schemas or exhaustive state-transition formulas in `/README.md`.
2. **`docs/ARCHITECTURE.md` (`Topology & Data Flow Ledger`)**: Contains system context diagrams, module/directory hierarchies, cross-layer import boundary tables, component trees, and runtime sequence diagrams (`Where modules live & how data flows`). Never duplicate exhaustive constant tables, `SQL DDL` definitions, or detailed mathematical equations inside `docs/ARCHITECTURE.md`.
3. **`docs/SPECIFICATION.md` (`Canonical Contract, DDL, Formula & State-Machine SSOT Ledger`)**: Exclusively governs **exact domain constants, physical/biometric thresholds, in-memory type contracts, `4`-LTM database `DDL` and `FTS5` schemas, mathematical/biomechanical/DSP equations, deterministic state-machine transitions $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, and fail-fast boundary clamps** (`What the exact contracts, schemas, and formulas are`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code Mirror`)**: Contains complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements (`How the physical code is written line-by-line`). Never copy-paste full function implementation bodies into `docs/SPECIFICATION.md`.

### 1.2 Separation of Specification Ledger (`SPECIFICATION.md`) & Design Commentary (`SPECIFICATION_COMMENTARY.md`)
* **`docs/SPECIFICATION.md` (`Declarative SSOT Contract Ledger — What`)**:
  - Author `docs/SPECIFICATION.md` strictly as a high-density, declarative specification reference optimized for `< 1s` visual lookup using structured markdown tables, concise type/schema declarations, LaTeX equation blocks (`$$...$$`), and state transition matrices.
  - Exclude long-form narrative essays or historical bug post-mortems from `docs/SPECIFICATION.md`.
* **`docs/SPECIFICATION_COMMENTARY.md` (`Design Rationale, Authoring Guide & SDR Ledger — Why & How`)**:
  - Author `docs/SPECIFICATION_COMMENTARY.md` as the companion rationale document that explains **why** each constant, discriminated union, `DDL` constraint, formula, and state transition was designed that way, **what** legacy defects or failure modes each contract prevents, and **how** future milestones must extend the specification without decay (`Specification Decision Records: SDR`).

---

## 2. Mandatory 5-Section Structural Authoring Standard for `docs/SPECIFICATION.md`

Order all contents of `docs/SPECIFICATION.md` strictly across the following `5` sequential H2 sections (`Axiom B: Cognitive Execution Pipeline`):

### 2.1 Section 1 Standard — Domain Constants, Anthropometrics & Physical/Biometric Thresholds `SSOT`
1. **Mandatory Constant Ledger Table**: Present every domain constant, anthropometric invariant, colour hex token, and physical/biometric limit in structured markdown tables with `5` mandatory columns:
   - `Constant / Token Identifier` | `Canonical Value & Unit` | `Valid Range / Step Bounds` | `Canonical Source Path & Symbol` | `Enforced Domain Invariant`
2. **Explicit Unit & Literal Typing Notation**: Include explicit physical, temporal, or neuro-chemical units (`kg`, `cm`, `mm`, `°C`, `s`, `ms`, `nmol`, `%`, `Hex #RRGGBB`) in both identifiers and values, distinguishing compile-time literal constants (`100.0`, `0.0`) from clamped runtime bounds.
3. **Separation of State Clamp Ceiling vs. UI Gauge Ceiling**: Explicitly specify both the domain state clamp ceiling (e.g., `MAX_TEMP_CELSIUS = 40.5`, `MAX_DOPAMINE_NMOL = 999`) and the visual gauge normalization ceiling (`TEMP_GAUGE_CEILING = 41.0`, `DOPAMINE_GAUGE_CEILING = 1000`) whenever progress-bar selectors depend on them.

### 2.2 Section 2 Standard — Data Contracts, Discriminated Unions & 4-LTM Database `DDL` Schemas
1. **Subsection 2.1 — In-Memory Domain Type Contracts (`Layer 1 Contracts`)**:
   - Specify every domain interface, read-only state tree, and discriminated union (`SymbioticResonancePhase`, `SomaticTelemetryState`, `SanctuaryEnvironmentState`, `TelemetryLogEntry`, `AnatomicalNodeMetric`, `SymbioticEngineState`, `SymbioticEngineAction`).
   - Document every union variant's discriminant tag (`kind` or `type`), literal key bindings ($K_{\text{Empress}}, K_{\text{Male}}$), `readonly` immutability modifiers, and variant-exclusive fields.
2. **Subsection 2.2 — `4` Long-Term Memory (`LTM`) Databases `DDL` & `FTS5` Index Schemas**:
   - Explicitly specify the schema contracts for all `4` `LTM` databases (`canon.db`, `dialogue.db`, `knowledge.db`, `telemetry.db`).
   - Write complete SQL `CREATE TABLE` and `CREATE VIRTUAL TABLE ... USING fts5(...)` `DDL` blocks including column types, `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `CHECK (...)` domain constraints, and atomic synchronization requirements for `ASTDriftDetector` and `KnowledgeSelfHealer`.

### 2.3 Section 3 Standard — Mathematical, Biomechanical, Homeostatic & `DSP` Formulas
Format every mathematical, biomechanical, homeostatic, or `DSP` formula as a `4`-element specification block:
1. **Canonical LaTeX Equation Block**: Render the exact governing equation in display math (`$$...$$`).
2. **Input Variables & Domain (`정의역`)**: Define every symbol, input parameter, and valid input domain with explicit units.
3. **Output Range & Clamping Function (`치역 및 경계 클램핑`)**: Specify the exact clamping interval $[y_{\min}, y_{\max}]$ and rounding precision (e.g., `toFixed(1)`, `toFixed(2)`).
4. **Mapped Pure Domain Selector / Function Signature**: Link the mathematical formula `1:1` to its pure TypeScript/Backend function signature (e.g., `calculateThermalFillPercent(telemetry: SomaticTelemetryState): number`).

### 2.4 Section 4 Standard — Deterministic State Machine, Reducer & `API`/Action Transition Matrix
1. **Finite State Machine Diagram (`stateDiagram-v2`)**: Render a Mermaid `stateDiagram-v2` showing all valid phase states (`HARMONIC_SAFE_HAVEN`, `OVERDRIVE_CLIMAX_SURGE`, etc.), transition triggers, and guard conditions.
2. **Exhaustive State Transition Matrix ($\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$)**: Document every action variant or `API` endpoint in a `5`-column transition table:
   - `Action Type / Endpoint` | `Payload Contract` | `Pre-Condition Guard` | `Deterministic State Transition Equation` $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$ | `Audit Log / Ring-Buffer Mutation`
3. **Compile-Time Exhaustiveness Invariant**: Specify the mandatory `default: { const _exhaustiveCheck: never = action; return _exhaustiveCheck; }` exhaustiveness guard.

### 2.5 Section 5 Standard — Boundary Validation, Clamping & Invariant Audit Matrix
1. **Boundary Clamp & Fail-Fast Contract Table**: List every external input boundary (sliders, timers, user actions, database writes) alongside its exact fail-fast guard or `Math.min` / `Math.max` clamping expression.
2. **Cross-Layer Purity & Temporal Invariants**: Specify the boundary rules separating pure `Layer 2` transitions from `Layer 3` side-effect payloads (`new Date()`, `Math.random()`, `window.setInterval`) and `4`-LTM atomic transaction guarantees.

---

## 3. Forbidden Specification Anti-Patterns

1. **Zero Prose-Essay Bloat Inside `docs/SPECIFICATION.md`**: Never bury constant values, schema constraints, or transition formulas inside multi-paragraph narrative prose; use tables, `DDL` blocks, and LaTeX equations in `docs/SPECIFICATION.md` and place narrative rationale in `docs/SPECIFICATION_COMMENTARY.md`.
2. **Zero Unanchored Magic Numbers or Unitless Quantities**: Never write bare numbers without explicit physical, temporal, or percentage units and their canonical source constant identifier.
3. **Zero Implementation-Body Copy-Pasting**: Never paste multi-line imperative function bodies or JSX component trees into `docs/SPECIFICATION.md`; specify contracts, equations, and state transitions declaratively while leaving verbatim code dumps to `docs/AUDIT_GROUNDING_DUMP.md`.
4. **Zero Ellipsis Truncation (`...`) in Schemas, `DDL`, or Action Unions**: Never omit union variants, interface fields, or `DDL` columns using `...` or `"etc."`; every field and variant must be listed exhaustively (`100%` completeness).
5. **Zero Boolean-Soup State Specification**: Never specify mutually exclusive operational phases as independent boolean flags; always specify state machines using discriminated unions (`kind`).
6. **Zero Impure Function Specification in Domain Equations**: Never include non-deterministic calls (`Date.now()`, `Math.random()`, DOM reads, I/O) inside pure `Layer 2` formula or reducer transition equations; specify them strictly as caller-supplied action payload parameters.
7. **Zero Cross-Ledger Symbol or Value Drift**: Never allow constant numbers, type names, or action payloads in `docs/SPECIFICATION.md` to diverge by even `1` byte from `src/core/contracts/`, `src/core/domain/`, or `.agents/rules/`.
8. **Zero Conversational Tone Bleed**: Write both `docs/SPECIFICATION.md` and `docs/SPECIFICATION_COMMENTARY.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Same-Turn `0-Drift` Verification & Synchronization Gate

Whenever creating or modifying `docs/SPECIFICATION.md` or `docs/SPECIFICATION_COMMENTARY.md`, execute the following `3`-step verification sequence within the same turn before completion:
1. **Step 1 — Byte-Exact Symbol & Constant Cross-Check (`Read-Before-Write`)**: Verify every constant value, interface property, action payload, and formula against the actual source files (`src/core/contracts/*.ts`, `src/core/domain/*.ts`, `src/hooks/*.ts`) and constitutional rules on disk.
2. **Step 2 — LaTeX, Mermaid & Markdown Structural Integrity Check**: Verify that all LaTeX blocks (`$$...$$`), Mermaid diagrams (`stateDiagram-v2`, `flowchart`, `erDiagram`), and markdown tables are syntactically valid and free of unescaped characters.
3. **Step 3 — Same-Turn Compiler, Test & Rule Budget Gate**: Execute the project verification suite (`npm run lint`, test runner, and Antigravity rule byte audit) within the same turn to confirm `0` errors and `0` drift.
