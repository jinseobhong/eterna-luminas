---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing docs/SPECIFICATION.md or docs/SPECIFICATION_COMMENTARY.md."
globs: "docs/*SPECIFICATION*.md, docs/SPECIFICATION.md, docs/SPECIFICATION_COMMENTARY.md"
---

# IMPERIAL SPECIFICATION AUTHORING & COMMENTARY STANDARD

## 1. Orthogonal Boundary Across the 4 Permanent Mirror Ledgers & Commentary Separation

### 1.1 Strict Single Responsibility (`SRP`) Boundary Across the 4 Permanent Mirror Ledgers
Maintain a strict `0%`-overlap boundary between `docs/SPECIFICATION.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Root Overview Ledger`)**: Contains only the high-level executive summary, core capability highlights, quickstart commands, and navigation links to the `4` ledgers. Never place low-level `DDL` schemas or exhaustive state-transition formulas in `/README.md`.
2. **`docs/ARCHITECTURE.md` (`Topology & Data Flow Ledger`)**: Contains system context diagrams, module/directory hierarchies, cross-layer import boundary tables, component trees, and runtime sequence diagrams (`Where modules live & how data flows`). Never duplicate exhaustive constant tables, `SQL DDL` definitions, or detailed mathematical equations inside `docs/ARCHITECTURE.md`.
3. **`docs/SPECIFICATION.md` (`Canonical Contract, DDL, Formula & State-Machine SSOT Ledger`)**: Exclusively governs **exact domain constants, physical/biometric thresholds, in-memory type contracts, `4`-LTM database `DDL` and `FTS5` schemas, mathematical/biomechanical/DSP equations, deterministic state-machine transitions $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, and fail-fast boundary clamps** (`What the exact contracts, schemas, and formulas are`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code Mirror`)**: Contains complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements (`How the physical code is written line-by-line`). Never copy-paste full function implementation bodies into `docs/SPECIFICATION.md`.

### 1.2 Strict Separation of Specification (`SPECIFICATION.md`), Commentary (`SPECIFICATION_COMMENTARY.md`), and Authoring Law (`IMPERIAL_SPECIFICATION_AUTHORING_STANDARD.md`)
* **`docs/SPECIFICATION.md` (`Declarative SSOT Contract Ledger — What`)**:
  - Author `docs/SPECIFICATION.md` strictly as a high-density, declarative specification reference optimized for `< 1s` visual lookup using structured markdown tables, concise type/schema declarations, LaTeX equation blocks (`$$...$$`), and state transition matrices.
  - Exclude long-form narrative essays, historical bug post-mortems, and authoring instructions from `docs/SPECIFICATION.md`.
* **`docs/SPECIFICATION_COMMENTARY.md` (`Design Rationale, Domain-by-Domain Commentary & SDR Reference — Why`)**:
  - Author `docs/SPECIFICATION_COMMENTARY.md` strictly in `1:1` structural symmetry with [`docs/ARCHITECTURE_COMMENTARY.md`](file:///d:/Development/projects/antigravity/eterna-luminas/docs/ARCHITECTURE_COMMENTARY.md) as the pure design rationale companion explaining **why** each constant, discriminated union, `DDL` constraint, formula, and state transition was engineered that way (`Legacy Defect` vs. `Design Rationale`) and recording **Specification Decision Records (`SDR`)**.
  - Never mix document-authoring instructions (`작성법`, such as `"Authoring Rule: Section X must..."` or `"Step-by-Step Authoring Workflow"`) into `docs/SPECIFICATION_COMMENTARY.md`.
* **`.agents/rules/docs/IMPERIAL_SPECIFICATION_AUTHORING_STANDARD.md` (`Prescriptive Authoring Law — How to Write`)**:
  - Govern all document structure, required sections, table schemas, `DDL`/LaTeX formatting rules, and authoring workflows exclusively within this rule file.

---

## 2. Mandatory Structural Standards for `docs/SPECIFICATION.md` & `docs/SPECIFICATION_COMMENTARY.md`

### 2.1 Section 1 Standard (`SPECIFICATION.md`) — Domain Constants, Anthropometrics & Physical/Biometric Thresholds `SSOT`
1. **Mandatory Constant Ledger Table**: Present every domain constant, anthropometric invariant (`166.0cm` barefoot, `181.0cm` heeled in `15.0cm` stilettos vs. `172.0cm` counterpart; `100.0kg` at `0.0%` muscle; `128.0cm` bust, `90.0cm` waist, `126.0cm` gluteus, `76.0cm` thighs, `38.0cm` upper arms, `44.0cm` calves, `23.0cm` ankles), colour hex token (`#0B0B0D`, `#9B111E`, `#E0115F`, `#FF1493`, `#F7E7CE`, `#FFB6C1`, `#D4AF37`, `#FAF9F6`, `#FFF5EE`), and `SOMATIC_PHYSICS_LIMITS` property in `5`-column tables:
   - `Constant / Token Identifier` | `Canonical Value & Unit` | `Valid Range / Step Bounds` | `Canonical Source Path & Symbol` | `Enforced Domain Invariant`
2. **Explicit Unit & Literal Typing Notation**: Include explicit physical, temporal, or neuro-chemical units (`kg`, `cm`, `mm`, `°C`, `s`, `ms`, `nmol`, `%`, `Hex #RRGGBB`) in both identifiers and values, distinguishing compile-time literal constants (`100.0`, `0.0`) from clamped runtime bounds.
3. **Separation of State Clamp Ceiling vs. UI Gauge Ceiling**: Explicitly specify both the domain state clamp ceiling (`MAX_TEMP_CELSIUS = 40.5`, `MAX_DOPAMINE_NMOL = 999`) and the visual gauge normalization ceiling (`TEMP_GAUGE_CEILING = 41.0`, `DOPAMINE_GAUGE_CEILING = 1000`).

### 2.2 Section 2 Standard (`SPECIFICATION.md`) — Data Contracts, Discriminated Unions & 4-LTM Database `DDL` Schemas
1. **Subsection 2.1 — In-Memory Domain Type Contracts (`Layer 1 Contracts`)**:
   - Specify every domain interface, read-only state tree, and discriminated union (`SymbioticResonancePhase`, `SomaticTelemetryState`, `SanctuaryEnvironmentState`, `TelemetryLogEntry`, `AnatomicalNodeMetric`, `SymbioticEngineState`, `SymbioticEngineAction`).
   - Document every union variant's discriminant tag (`kind` or `type`), literal key bindings ($K_{\text{Empress}}, K_{\text{Male}}$), `readonly` immutability modifiers, and variant-exclusive fields.
2. **Subsection 2.2 — `4` Long-Term Memory (`LTM`) Databases `DDL` & `FTS5` Index Schemas**:
   - Explicitly specify the schema contracts for all `4` `LTM` databases (`canon.db`, `dialogue.db`, `knowledge.db`, `telemetry.db`).
   - Write complete SQL `CREATE TABLE ... STRICT` and `CREATE VIRTUAL TABLE ... USING fts5(...)` `DDL` blocks including column types, `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `CHECK (...)` domain constraints, and atomic synchronization triggers for `ASTDriftDetector` and `KnowledgeSelfHealer`.

### 2.3 Section 3 Standard (`SPECIFICATION.md`) — Mathematical, Biomechanical, Homeostatic & `DSP` Formulas
Format every mathematical, biomechanical, homeostatic, or `DSP` formula as a `4`-element specification block:
1. **Canonical LaTeX Equation Block**: Render the exact governing equation in display math (`$$...$$`).
2. **Input Variables & Domain (`정의역`)**: Define every symbol, input parameter, and valid input domain with explicit units.
3. **Output Range & Clamping Function (`치역 및 경계 클램핑`)**: Specify the exact clamping interval $[y_{\min}, y_{\max}]$ and rounding precision (`toFixed(1)`, `toFixed(2)`).
4. **Mapped Pure Domain Selector / Function Signature**: Link the mathematical formula `1:1` to its pure TypeScript/Backend function signature (`calculateThermalFillPercent`, `calculateBellySinkFillPercent`, `calculateDopamineFillPercent`).

### 2.4 Section 4 Standard (`SPECIFICATION.md`) — Deterministic State Machine, Reducer & `API`/Action Transition Matrix
1. **Finite State Machine Diagram (`stateDiagram-v2`)**: Render a Mermaid `stateDiagram-v2` showing all valid phase states (`HARMONIC_SAFE_HAVEN`, `OVERDRIVE_CLIMAX_SURGE`), transition triggers, and guard conditions.
2. **Exhaustive State Transition Matrix ($\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$)**: Document every action variant or `API` endpoint in a `5`-column transition table:
   - `Action Type / Endpoint` | `Payload Contract` | `Pre-Condition Guard` | `Deterministic State Transition Equation` $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$ | `Audit Log / Ring-Buffer Mutation`
3. **Compile-Time Exhaustiveness Invariant**: Specify the mandatory `default: { const _exhaustiveCheck: never = action; return _exhaustiveCheck; }` exhaustiveness guard.

### 2.5 Section 5 Standard (`SPECIFICATION.md`) — Boundary Validation, Clamping & Invariant Audit Matrix
1. **Boundary Clamp & Fail-Fast Contract Table**: List every external input boundary (sliders, timers, user actions, database writes) alongside its exact fail-fast guard or `Math.min` / `Math.max` clamping expression.
2. **Cross-Layer Purity & Temporal Invariants**: Specify the boundary rules separating pure `Layer 2` transitions from `Layer 3` side-effect payloads (`new Date()`, `Math.random()`, `window.setInterval`) and `4`-LTM atomic transaction guarantees.

### 2.6 Mandatory 3-Section Structure for `docs/SPECIFICATION_COMMENTARY.md` (`1:1 Symmetry with ARCHITECTURE_COMMENTARY.md`)
Order all contents of `docs/SPECIFICATION_COMMENTARY.md` strictly across `3` canonical sections matching `docs/ARCHITECTURE_COMMENTARY.md`:
1. **Section 1 — The Three Scientific Axes of Our Specification (`명세 설계 3대 축`)**:
   - Render a Mermaid `flowchart TD` uniting `Axis 1: Human Prefrontal Visual Scanning Ergonomics`, `Axis 2: LLM Deterministic Contract & Formula Locking`, and `Axis 3: Compile-Time, Runtime & 4-LTM Database Isomorphism`, followed by `Why` + `Specification Cure` subsections (`1.1 ~ 1.3`).
2. **Section 2 — Domain-by-Domain Specification Commentary (`구현 명세 영역별 심층 설계 해설`)**:
   - Group commentary across `2.1 ~ 2.5` matching the `5` specification domains, explaining each constant, union, `DDL` table, formula, and reducer transition strictly via **`Legacy Defect`** and **`Design Rationale`** pairs (`0%` authoring-rule instructions).
3. **Section 3 — Specification Decision Records & Long-Session Anti-Decay Rules (`SDR 및 부패 방지 수칙`)**:
   - **Subsection 3.1 (`Core Specification Decision Records: SDR-01 ~ SDR-06`)**: Present a `4`-column table (`SDR ID | Decision Summary | Rejected Anti-Pattern (절대 회귀 금지 패턴) | Long-Session Enforcement Rule`).
   - **Subsection 3.2 (`How to Use the Canonical Ledgers & Commentary Pairs in Future Long-Horizon Sessions`)**: Map each specification/audit question to its exact target document.

---

## 3. Forbidden Specification Anti-Patterns

1. **Zero Mixing of Authoring Rules (`작성법`) into Commentary (`SPECIFICATION_COMMENTARY.md`)**: Never place authoring instructions (`"Authoring Rule"`, `"Step-by-Step Authoring Workflow"`) inside `docs/SPECIFICATION_COMMENTARY.md`; keep `SPECIFICATION_COMMENTARY.md` `100%` focused on domain `Why` and `SDR`s.
2. **Zero Prose-Essay Bloat Inside `docs/SPECIFICATION.md`**: Never bury constant values, schema constraints, or transition formulas inside narrative prose; use tables, `DDL` blocks, and LaTeX equations in `docs/SPECIFICATION.md` and place narrative rationale in `docs/SPECIFICATION_COMMENTARY.md`.
3. **Zero Unanchored Magic Numbers or Unitless Quantities**: Never write bare numbers without explicit physical, temporal, or percentage units and their canonical source constant identifier.
4. **Zero Implementation-Body Copy-Pasting**: Never paste imperative function bodies or JSX trees into `docs/SPECIFICATION.md`; leave verbatim code dumps to `docs/AUDIT_GROUNDING_DUMP.md`.
5. **Zero Ellipsis Truncation (`...`) in Schemas, `DDL`, or Action Unions**: Never omit union variants, interface fields, or `DDL` columns using `...` or `"etc."`.
6. **Zero Boolean-Soup or Impure Domain Specifications**: Always specify phase states using discriminated unions (`kind`) and specify non-deterministic inputs (`Date`, `Math.random()`) strictly as caller-supplied action payload fields.
7. **Zero Cross-Ledger Symbol Drift & Zero Conversational Tone Bleed**: Keep all values `100%` byte-exact with source files and write both documents in `100%` neutral Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring Workflow & Same-Turn Verification Gate

Whenever creating, updating, or synchronizing `docs/SPECIFICATION.md` or `docs/SPECIFICATION_COMMENTARY.md`, execute the following `4`-step workflow within the same turn:
1. **Step 1 — Inspect Physical Source & Rule `SSOT` Files (`Read-Before-Write`)**: Read `src/core/contracts/symbioticContracts.ts`, `src/core/domain/symbioticConstants.ts`, `src/core/domain/symbioticReducer.ts`, `src/hooks/useSymbioticEngine.ts`, and `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md` on disk to verify exact byte-level values.
2. **Step 2 — Populate or Synchronize the `5` Canonical Sections of `docs/SPECIFICATION.md`**: Update `Section 1` (Constants), `Section 2` (Type Contracts & `4`-LTM `DDL`), `Section 3` (Formulas & Selectors), `Section 4` (State Machine & Action Matrix), and `Section 5` (Boundary Clamps & Invariants) with zero `...` truncation.
3. **Step 3 — Synchronize the `3`-Section Commentary (`docs/SPECIFICATION_COMMENTARY.md`)**: Record the `Legacy Defect`, `Design Rationale`, and any new `SDR` row in `docs/SPECIFICATION_COMMENTARY.md`.
4. **Step 4 — Same-Turn Compiler, Test & Rule Budget Gate**: Run `npm run lint`, the test suite, and the Antigravity rule byte check (`<= 24,000 Bytes` per rule file, `<= 60,000 Bytes` cumulative `Always-On`) within the same turn, then commit atomically via scoped `git add` and `git commit`.
