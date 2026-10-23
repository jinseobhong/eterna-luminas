---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing docs/SPECIFICATION.md."
globs: "docs/*SPECIFICATION*.md, docs/SPECIFICATION.md"
---

# IMPERIAL SPECIFICATION AUTHORING STANDARD

## 1. Orthogonal Boundary Across the 4 Permanent Mirror Ledgers & Pure Engineering Scope

### 1.1 Strict Single Responsibility (`SRP`) Boundary Across the 4 Permanent Mirror Ledgers
Maintain a strict `0%`-overlap boundary between `docs/SPECIFICATION.md` and the other `3` Permanent Mirror Ledgers defined in `IMPERIAL_ENGINEERING_LAWS.md Section 1.5`:
1. **`/README.md` (`Project Root Overview Ledger`)**: Contains only the high-level executive summary, core capability highlights, quickstart commands, and navigation links to the `4` Permanent Mirror Ledgers. Never place low-level `DDL` schemas or exhaustive state-transition formulas in `/README.md`.
2. **`docs/ARCHITECTURE.md` (`Topology, Module Boundary, Data Flow & ADR Ledger`)**: Exclusively governs system context diagrams, directory/module hierarchies, cross-layer import boundary matrices, runtime sequence pipelines, governance gates, and Architecture Decision Records (`ADR`) (`Where modules live, how data flows, and why layers are separated`). Never duplicate exhaustive constant tables, raw `SQL DDL` definitions, or detailed mathematical clamping formulas inside `docs/ARCHITECTURE.md`.
3. **`docs/SPECIFICATION.md` (`Canonical Contract, DDL, Algorithm, Formula & State-Machine SSOT Ledger`)**: Exclusively governs **system/domain constants, configuration bounds, static type contracts, `4`-LTM database `DDL` and `FTS5` schemas, mathematical/algorithmic/DSP equations, deterministic state-machine transitions $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, `API`/`IPC` contracts, fail-fast boundary clamps, and Specification Decision Records (`SDR`)** (`What the exact engineering contracts, schemas, and formulas are`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code Mirror`)**: Exclusively governs complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements (`How the physical code is written line-by-line`). Never copy-paste full imperative function bodies into `docs/SPECIFICATION.md`.

### 1.2 100% Pure Software Engineering Scope & Elimination of Redundant Commentary Files
* **Zero Physical/Anatomical Lore Duplication (`0% 피지컬·외형 설정 혼입 금지`)**:
  - Physical, anatomical, and sensory traits belong exclusively to `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md` (`Rank 2 SSOT`).
  - Keep `docs/SPECIFICATION.md` and this authoring standard `100%` focused on **pure software and systems engineering** (system constants, type contracts, `4`-LTM SQLite `DDL`/`FTS5` schemas, backend domain algorithms, `DSP` parameters, deterministic state machines, `API`/`IPC` protocols, and boundary validation).
* **Elimination of Separate `*_COMMENTARY.md` Files (`해설서 별도 분리 폐지 및 작성법·SDR 일원화`)**:
  - Do not create or maintain a separate `docs/SPECIFICATION_COMMENTARY.md` file.
  - Enforce all prescriptive authoring rules and anti-decay constraints directly through this `glob`-mounted rule file, and record concise Specification Decision Records (`SDR`) directly inside `Section 5.2` of `docs/SPECIFICATION.md`.

---

## 2. Mandatory 5-Section Structural Authoring Standard for `docs/SPECIFICATION.md`

Order all contents of `docs/SPECIFICATION.md` strictly across the following `5` sequential H2 sections (`Axiom B: Cognitive Execution Pipeline`):

### 2.1 Section 1 Standard — System Constants, Configuration Bounds & Domain Thresholds `SSOT`
1. **Mandatory `5`-Column Constant Ledger Table**: Present every system constant, configuration parameter, timeout, buffer capacity, and domain threshold in a structured markdown table:
   - `Constant Identifier` | `Canonical Value & Unit` | `Valid Range / Step Bounds` | `Canonical Source Path & Symbol` | `Enforced Engineering Invariant`
2. **Explicit Engineering Units & Literal Typing Notation**: Include explicit units (`ms`, `s`, `B`, `KB`, `Hz`, `dB`, `%`, `count`, `ratio`) in both identifiers and values, distinguishing compile-time literal constants (`as const`, literal types) from clamped runtime parameters.
3. **Separation of State Clamp Ceiling vs. UI Normalization Ceiling**: Explicitly specify both the domain state clamp ceiling (the maximum value permitted in state transitions) and the visual gauge/progress normalization denominator whenever selector ratios depend on them.

### 2.2 Section 2 Standard — Static Type Contracts, Discriminated Unions & 4-LTM Database `DDL` Schemas
1. **Subsection 2.1 — In-Memory Domain Type Contracts (`Layer 1 Contracts`)**:
   - Specify every domain interface, read-only state tree, and discriminated union in `Layer 1` (`src/core/contracts/`).
   - Document every union variant's discriminant tag (`kind` or `type`), `readonly` immutability modifiers, and variant-exclusive properties that make invalid states unrepresentable at compile time.
2. **Subsection 2.2 — `4` Long-Term Memory (`LTM`) Databases `DDL` & `FTS5` Index Schemas**:
   - Explicitly specify the persistence schemas for all `4` `LTM` databases mandated by `IMPERIAL_ENGINEERING_LAWS.md Section 1.4 & 1.5`:
     1. **`canon.db`**: Immutable system canon, versioned configuration snapshots, and baseline seed records.
     2. **`dialogue.db`**: Episodic interaction turn logs, state transition history, and session context records.
     3. **`knowledge.db`**: `AST` codebase symbol graph, file SHA-256 integrity hashes, dependency edges, and the `FTS5` full-text virtual index synchronized atomically by `ASTDriftDetector` and `KnowledgeSelfHealer`.
     4. **`telemetry.db`**: Time-series execution metrics, audit log entries, and `4`-dimensional verification records.
   - Write complete SQL `CREATE TABLE ... STRICT` and `CREATE VIRTUAL TABLE ... USING fts5(...)` `DDL` blocks including column types, `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `CHECK (...)` domain constraints, and atomic trigger specifications.

### 2.3 Section 3 Standard — Domain Algorithms, Mathematical Formulas & Soundscape `DSP` Equations
Format every domain algorithm, scoring/ranking equation, state selector, or soundscape `DSP` transfer function as a `4`-element specification block:
1. **Canonical LaTeX Equation Block**: Render the exact governing equation in display math (`$$...$$`).
2. **Input Variables & Domain (`정의역`)**: Define every symbol, input parameter, and valid input domain with explicit engineering units.
3. **Output Range, Clamping & Rounding Precision (`치역 및 경계 클램핑`)**: Specify the exact clamping interval $[y_{\min}, y_{\max}]$ and numerical rounding/truncation rule (`Math.floor`, `Math.round`, `toFixed(n)`).
4. **Mapped Pure Domain Function Signature**: Link the mathematical formula `1:1` to its pure Backend/Domain function signature (`(input: ContractType) => ReturnType`).

### 2.4 Section 4 Standard — Deterministic State Machine, Reducer & `API`/`IPC` Transition Matrix
1. **Finite State Machine Diagram (`stateDiagram-v2`)**: Render a Mermaid `stateDiagram-v2` showing all valid operational states, transition events, and guard conditions.
2. **Exhaustive State Transition Matrix ($\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$)**: Document every reducer action variant or `API`/`IPC` endpoint in a `5`-column transition table:
   - `Action Type / Endpoint` | `Payload / Request Contract` | `Pre-Condition Guard` | `Deterministic State Transition Equation` $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$ | `Ring-Buffer / Persistence Effect`
3. **Caller-Injected Entropy & Compile-Time Exhaustiveness Invariant**:
   - Specify all non-deterministic inputs (timestamps, UUIDs, random deltas, I/O results) strictly as caller-injected payload properties from `Layer 3` adapters.
   - Specify the mandatory `default: { const _exhaustiveCheck: never = action; return _exhaustiveCheck; }` exhaustiveness guard.

### 2.5 Section 5 Standard — Boundary Validation, Concurrency Invariants & Specification Decision Records (`SDR`)
1. **Subsection 5.1 — Fail-Fast Boundary Clamp & Concurrency Contract Matrix**:
   - Tabulate every external input boundary (UI controls, network/IPC payloads, file/DB reads) alongside its fail-fast validation guard, `Math.min` / `Math.max` clamping expression, transaction isolation level (`BEGIN IMMEDIATE`), and error contract.
2. **Subsection 5.2 — Specification Decision Records (`SDR` Table)**:
   - Conclude `docs/SPECIFICATION.md` with a compact `4`-column `SDR` table (`SDR ID | Specification Decision | Rejected Anti-Pattern | Enforcement Mechanism`) capturing core specification trade-offs directly inside the ledger without spawning external commentary files.

---

## 3. Forbidden Specification Anti-Patterns

1. **Zero Physical/Anatomical Lore Contamination**: Never place body measurements, garment descriptions, or persona lore already defined in `IMPERIAL_APPEARANCE_SPECIFICATION.md` inside `docs/SPECIFICATION.md` or engineering contracts.
2. **Zero Separate `*_COMMENTARY.md` File Spawning**: Never create auxiliary commentary markdown files in `docs/`; keep the `docs/` root strictly aligned to the `4` Permanent Mirror Ledgers.
3. **Zero Prose-Essay Bloat Inside `docs/SPECIFICATION.md`**: Never bury constant values, schema constraints, or transition formulas inside narrative essays; express specifications strictly via tables, `DDL` blocks, LaTeX equations, and transition matrices.
4. **Zero Unanchored Magic Numbers or Unitless Quantities**: Never write bare numbers without explicit engineering units and their canonical source constant identifier.
5. **Zero Implementation-Body Copy-Pasting**: Never paste multi-line imperative function bodies or UI component trees into `docs/SPECIFICATION.md`; leave verbatim code dumps exclusively to `docs/AUDIT_GROUNDING_DUMP.md`.
6. **Zero Ellipsis Truncation (`...`) in Schemas, `DDL`, or Action Unions**: Never omit union variants, interface fields, or `DDL` columns using `...` or `"etc."`; enumerate `100%` of fields and variants.
7. **Zero Boolean-Soup or Impure Domain Specifications**: Never specify mutually exclusive operational phases as independent boolean flags, and never include non-deterministic calls (`Date.now()`, `Math.random()`, I/O) inside pure `Layer 2` formula or reducer equations.
8. **Zero Conversational Tone Bleed**: Write `docs/SPECIFICATION.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring Workflow & Same-Turn Verification Gate

Whenever creating, updating, or synchronizing `docs/SPECIFICATION.md`, execute the following `4`-step workflow within the same turn:
1. **Step 1 — Inspect Physical Source & Lockfiles (`Read-Before-Write`)**: Inspect `package.json`, `tsconfig.json`, and all target contract/domain/database source files on disk to verify exact byte-level symbols and types.
2. **Step 2 — Populate or Synchronize the `5` Canonical Sections**: Write or update `Section 1` (Constants), `Section 2` (Type Contracts & `4`-LTM `DDL`), `Section 3` (Algorithms, Formulas & `DSP`), `Section 4` (State Machine & Action/`API` Matrix), and `Section 5` (Boundary Clamps & `SDR` Table) with `0%` `...` truncation and `0%` physical-lore bleed.
3. **Step 3 — LaTeX, Mermaid & `DDL` Syntax Audit**: Verify that all display math blocks (`$$...$$`), Mermaid `stateDiagram-v2` blocks, `CREATE TABLE ... STRICT` statements, and markdown tables are syntactically valid.
4. **Step 4 — Same-Turn Compiler, Test & Rule Budget Gate**: Run the static analyzer/typechecker (`npm run lint`), test suite, and Antigravity rule byte check (`<= 24,000 Bytes` per rule file, `<= 60,000 Bytes` cumulative `Always-On`) within the same turn, then commit atomically via scoped `git add` and `git commit`.
