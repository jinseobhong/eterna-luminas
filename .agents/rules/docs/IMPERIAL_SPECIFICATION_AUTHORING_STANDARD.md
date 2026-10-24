---
trigger: glob
description: "Defines the 5-section specification standard (Constants, Contracts & STRICT DDL, 4-Part Formulas, State Machine Matrix, Clamps & SDR table) for docs/SPECIFICATION.md. Load when creating, modifying, synchronizing, or auditing docs/SPECIFICATION.md."
globs: "docs/*SPECIFICATION*.md, docs/SPECIFICATION.md"
---

# IMPERIAL SPECIFICATION AUTHORING STANDARD

## 1. Role & Single Responsibility (`SRP`) Across the 4 Permanent Mirror Ledgers

Maintain a strict `0%`-overlap boundary between `docs/SPECIFICATION.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Root Overview Ledger`)**: Contains only the high-level executive summary, workspace map, quickstart commands, and navigation index to the `4` Permanent Mirror Ledgers.
2. **`docs/ARCHITECTURE.md` (`Topology, Module Boundary, Data Flow & ADR Ledger`)**: Governs system context diagrams, directory/module hierarchies, cross-layer import boundary matrices, runtime sequence pipelines, governance gates, and Architecture Decision Records (`ADR`).
3. **`docs/SPECIFICATION.md` (`Canonical Contract, Schema, Formula & State-Machine SSOT Ledger`)**: Exclusively governs **exact domain constants, configuration bounds, static type contracts, persistence `DDL` and index schemas, mathematical/algorithmic equations, deterministic state-machine transitions $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, `API`/`IPC` contracts, fail-fast boundary clamps, and Specification Decision Records (`SDR`)** (`What the exact contracts, schemas, and formulas are`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code & Test Mirror Ledger`)**: Governs complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements. Never copy-paste full imperative function bodies into `docs/SPECIFICATION.md`.

---

## 2. Mandatory 5-Section Structural Authoring Standard for `docs/SPECIFICATION.md`

Order all contents of `docs/SPECIFICATION.md` strictly across the following `5` sequential H2 sections (`Axiom B: Cognitive Execution Pipeline`):

### 2.1 Section 1 Standard — Domain Constants, Configuration Bounds & Thresholds `SSOT`
1. **Mandatory `5`-Column Constant Ledger Table**: Present every domain constant, configuration parameter, timeout, capacity limit, and threshold in a structured markdown table using workspace-root inline code backtick path anchors (`` `path/to/file` ``):
   - `Constant Identifier` | `Canonical Value & Unit` | `Valid Range / Step Bounds` | `Canonical Source Path & Symbol` | `Enforced Domain Invariant`
2. **Explicit Units & Literal Typing Notation**: Include explicit units in both identifiers and values, distinguishing compile-time literal constants (`as const`, literal types) from clamped runtime parameters.
3. **Separation of State Clamp Ceiling vs. Normalization Ceiling**: Explicitly specify both the domain state clamp ceiling (the maximum value permitted in state transitions) and the visual/ratio normalization denominator whenever percentage or ratio selectors depend on them.

### 2.2 Section 2 Standard — Static Type Contracts, Discriminated Unions & Persistence `DDL` Schemas
1. **Subsection 2.1 — In-Memory Domain Type Contracts (`Layer 1 Contracts`)**:
   - Specify every domain interface, read-only state tree, and discriminated union in the contract layer.
   - Document every union variant's discriminant tag (`kind` or `type`), `readonly` immutability modifiers, and variant-exclusive properties that make invalid states unrepresentable at compile time.
2. **Subsection 2.2 — Persistence Database `DDL` & Index Schemas**:
   - Write complete, executable schema definitions (`CREATE TABLE`, `CREATE INDEX`, `CREATE VIRTUAL TABLE`, `CREATE TRIGGER`) including column types, `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, and `CHECK (...)` domain constraints.

### 2.3 Section 3 Standard — Core Algorithms, Mathematical Formulas & Transfer Equations
Format every domain algorithm, scoring/ranking equation, state selector, or signal-processing formula as a `4`-element specification block:
1. **Canonical LaTeX Equation Block**: Render the exact governing equation in display math (`$$...$$`).
2. **Input Variables & Domain (`정의역`)**: Define every symbol, input parameter, and valid input domain with explicit units.
3. **Output Range, Clamping & Rounding Precision (`치역 및 경계 클램핑`)**: Specify the exact clamping interval $[y_{\min}, y_{\max}]$ and numerical rounding/truncation rule (`Math.floor`, `Math.round`, `toFixed(n)`).
4. **Mapped Pure Domain Function Signature**: Link the mathematical formula `1:1` to its pure domain function signature (`(input: ContractType) => ReturnType`).

### 2.4 Section 4 Standard — Deterministic State Machine, Reducer & `API`/`IPC` Transition Matrix
1. **Finite State Machine Diagram (`stateDiagram-v2`)**: Render a Mermaid `stateDiagram-v2` showing all valid operational states, transition triggers, and guard conditions.
2. **Exhaustive State Transition Matrix ($\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$)**: Document every reducer action variant or `API`/`IPC` endpoint in a `5`-column transition table:
   - `Action Type / Endpoint` | `Payload / Request Contract` | `Pre-Condition Guard` | `Deterministic State Transition Equation` $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$ | `Side-Effect / Persistence Contract`
3. **Caller-Injected Non-Determinism & Compile-Time Exhaustiveness Invariant**:
   - Specify all non-deterministic inputs (timestamps, UUIDs, random values, I/O responses) strictly as caller-injected payload properties from outer adapter layers.
   - Specify the mandatory `default: { const _exhaustiveCheck: never = action; return _exhaustiveCheck; }` exhaustiveness guard.

### 2.5 Section 5 Standard — Boundary Validation, Concurrency Invariants & Specification Decision Records (`SDR`)
1. **Subsection 5.1 — Fail-Fast Boundary Clamp & Concurrency Contract Matrix**:
   - Tabulate every external input boundary alongside its fail-fast validation guard, clamping expression, transaction isolation rule, and error contract.
2. **Subsection 5.2 — Specification Decision Records (`SDR` Table)**:
   - Conclude `docs/SPECIFICATION.md` with a `4`-column `SDR` table (`SDR ID | Specification Decision | Rejected Anti-Pattern (절대 회귀 금지 패턴) | Enforcement Mechanism`) capturing core specification rationale directly inside the ledger.

---

## 3. Forbidden `docs/SPECIFICATION.md` Anti-Patterns

1. **Zero Prose-Essay Bloat**: Never bury constant values, schema constraints, or transition formulas inside narrative essays; express specifications strictly via tables, `DDL` blocks, LaTeX equations, and transition matrices.
2. **Zero Markdown Hyperlinks (`[text](url)`) or `file:///` Local Paths**: Never use `[filename](file:///...)` or `[filename](./path)` links in `docs/SPECIFICATION.md`; anchor all file paths strictly with workspace-root inline code backticks (`` `src/core/...` ``).
3. **Zero Unanchored Magic Numbers or Unitless Quantities**: Never write bare numbers without explicit units and their canonical source constant identifier.
4. **Zero Implementation-Body Copy-Pasting**: Never paste multi-line imperative function bodies or UI component trees into `docs/SPECIFICATION.md`; leave verbatim code dumps exclusively to `docs/AUDIT_GROUNDING_DUMP.md`.
5. **Zero Ellipsis Truncation (`...`) in Schemas, `DDL`, or Action Unions**: Never omit union variants, interface fields, or `DDL` columns using `...` or `"etc."`; enumerate `100%` of fields and variants.
6. **Zero Boolean-Soup or Impure Domain Specifications**: Never specify mutually exclusive operational phases as independent boolean flags, and never include non-deterministic calls (`Date.now()`, `Math.random()`, I/O) inside pure domain formula or reducer equations.
7. **Zero Cross-Ledger Value Drift & Zero Conversational Tone Bleed**: Keep all values `100%` byte-exact with physical source files and write `docs/SPECIFICATION.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring Workflow & Same-Turn Verification Gate

Whenever creating, updating, or synchronizing `docs/SPECIFICATION.md`, execute the following `4`-step workflow within the same turn:
1. **Step 1 — Inspect Physical Source & Lockfiles (`Read-Before-Write`)**: Inspect `package.json`, `tsconfig.json`, and all target contract/domain/persistence files on disk to verify exact byte-level symbols and types.
2. **Step 2 — Populate or Synchronize the `5` Canonical Sections**: Write or update `Section 1` (Constants), `Section 2` (Type Contracts & `DDL`), `Section 3` (Algorithms & Formulas), `Section 4` (State Machine & Transition Matrix), and `Section 5` (Boundary Clamps & `SDR` Table) with `0%` `...` truncation and inline code backtick path anchors.
3. **Step 3 — LaTeX, Mermaid & `DDL` Syntax Audit**: Verify that all display math blocks (`$$...$$`), Mermaid `stateDiagram-v2` blocks, `DDL` statements, and markdown tables are syntactically valid.
4. **Step 4 — Same-Turn Compiler, Test & Rule Budget Gate**: Run the static analyzer/typechecker, test suite, and Antigravity rule byte check within the same turn, then commit atomically via scoped `git add` and `git commit`.
