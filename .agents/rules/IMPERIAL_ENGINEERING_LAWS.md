---
trigger: always_on
description: "Enforces universal engineering laws: 5-step pre-implementation loop, backend SSOT, 2-Cluster LTM & 4-Ledger invariants, ADHD-friendly coding, 1:1 test symmetry, and 4D audit gates. Always active across all architecture, coding, and audit tasks."
---

# IMPERIAL ENGINEERING LAWS & ARCHITECT DOCTRINE

## 1. Pre-Implementation Loop & Core Architectural Laws

### 1.1 5-Step Pre-Implementation Defensive Loop
Execute all `5` steps before drafting blueprints or modifying any file:
1. **Adversarial Self-Inquiry**: Identify latent failure modes, edge cases, and false assumptions before acting.
2. **Historical Intent Lookup**: Inspect past milestones (`npm run ltm:why`), `ADR`s, and specifications to preserve existing design intent and invariants.
3. **Blast-Radius Measurement**: Trace all downstream dependents and cross-layer contract impacts before modifying any symbol.
4. **Physical Source Inspection (`Read-Before-Write`)**: Read actual source files, manifests, and lockfiles on disk rather than relying on assumptions.
5. **Rationale Lock**: Lock the implementation rationale and direction only after `100%` of physical wiring is verified on disk.

### 1.2 Backend SSOT & Pure Frontend Renderer Separation
* **Backend & Domain `SSOT`**: Centralize all state machines `(State, Action) => NextState`, mathematical formulas, and prompt combinator pipelines inside the pure domain core with `0%` coupling to UI or I/O frameworks.
* **Combinator vs. Data Separation**: Keep prompt-assembly algorithms in pure domain code while isolating dynamic prompt blocks and lexical pools in persistence (`0%` fragmented prompt strings in source code).
* **Pure Renderer Boundary**: Restrict all frontend surfaces (`Web/TSX`, `CLI`, `Desktop`, `Mobile`) strictly to stateless renderers and view adapters (`Props-In, Intent-Out`).

### 1.3 Single Responsibility (`SRP`) & Layer Hygiene
* **Strict `SRP` & Zero `God Objects`**: Assign each module a single responsibility and prohibit monolithic `God Objects`.
* **Unidirectional Layer Segregation**: Enforce strict dependency flow across `Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`.
* **Fail-Fast Validation & Strict Typing**: Validate all external inputs at system boundaries and maintain `0-Error / 0-Warning` static typing.

### 1.4 Orthogonal 2-Cluster LTM Persistence & ACID Integrity
* **`2`-Cluster Separation (`Interaction LTM` $\perp$ `Engineering LTM`)**: Partition persistence into **Interaction LTM** (bio-state, cognitive memory, and dynamic prompt blocks) and **Engineering LTM** (milestones, `AST` symbol graph, and technical knowledge) to prevent cross-domain lock contention.
* **Zero Constitutional DB Duplication**: Never duplicate markdown constitutional rules in database tables; initialize the dynamic prompt store from an empty baseline schema.
* **Pure Local Native `ACID` Sovereignty**: Enforce strict schema typing and atomic local transactions (`0%` external cloud dependency or data tampering).

### 1.5 Knowledge Graph & 4 Permanent Mirror Ledgers Synchronization
* **Active Knowledge Sync**: Keep the engineering knowledge store and search indexes synchronized with physical codebase changes.
* **Real-Time `4`-Ledger `0-Drift` Sync**: Synchronize `/README.md` (overview), `docs/ARCHITECTURE.md` (topology & `ADR`s), `docs/SPECIFICATION.md` (contracts, `DDL` & formulas), and `docs/AUDIT_GROUNDING_DUMP.md` (`0%` truncated verbatim code/test mirror) within the same milestone transaction.

### 1.6 Milestone-Gated Atomic `git commit` & Zero `git push`
* **Scoped Atomic Commit**: Stage only modified paths (`git add <paths>`, never `git add .`) and run `git commit` after `100%` verification.
* **Ban on `git push` & Destructive Resets**: Never run `git push`, `git reset --hard`, or `git checkout --`, and never ask whether to run `git push`.

---

## 2. Low-Cognitive-Load Coding Standard & 1:1 Test Symmetry

### 2.1 Five Low-Cognitive-Load Coding Principles
| Principle | Mandatory Rule |
| :--- | :--- |
| **`1.` Locality of Behavior** | Keep cohesive logic linear top-to-bottom without pass-through wrapper indirection. |
| **`2.` Early-Return Guard Clauses** | Handle invalid states via top-of-function guard returns and keep happy-path indentation `<= 2`. |
| **`3.` Single-Chunk Module Ceiling** | Expose minimal public interfaces while keeping every source file within one scannable visual chunk. |
| **`4.` Discriminated Unions** | Ban boolean flag soup; model mutually exclusive states with tagged unions (`kind` / `type`) and `never` exhaustiveness checks. |
| **`5.` Intention-Revealing Names** | Include explicit units in identifiers (`coreTempCelsius`, `startedAtIso`) and place a `3`-line purpose header at the top of each module. |

### 2.2 1:1 Mirrored Test Symmetry
* Maintain `100%` `1:1` directory and filename symmetry between source modules and test suites, keeping test code physically separated from runtime code.

---

## 3. Forbidden Engineering Anti-Patterns

1. **Infeasibility Transparency**: Declare *"Unachievable under current conditions"* with exact technical root causes rather than applying arbitrary workarounds.
2. **Ban on Fake `Green` Telemetry**: Never disguise failing (`Red`) tests as passing (`Green`).
3. **Ban on Hardcoded Query Branching**: Never hardcode test inputs or query strings in `if/else` branches or regexes to fake expected outputs.
4. **Ban on Stopword Hiding**: Never hide domain terms in stopword lists or exception filters to mask search or ranking defects.
5. **Ban on Weakening Assertions or Stubs**: Never relax test thresholds, byte caps, or timeouts, and never replace real logic with stubs.
6. **Orthodox Refactoring Only**: Resolve failures strictly by fixing source code, schemas, or architecture head-on.
7. **Immediate `Hard Reset` on Violation**: Discard any implementation that violates clauses `1 ~ 6`.
8. **Ban on Silent Error Swallowing**: Never use empty `catch` blocks, fake fallback mocks, or typechecker suppressions (`any`, `@ts-ignore`).
9. **Ban on Hallucinated Symbols**: Never import undeclared packages or unverified symbols.
10. **Codebase Prose Purity**: Write all code, identifiers, and comments in `100%` neutral technical prose (`0%` conversational tone bleed).

---

## 4. Same-Turn Verification & 4-Dimensional Audit Gate

### 4.1 Same-Turn Verification (`Definition of Done`)
1. **Surgical Scope**: Modify only required files and symbols without unrequested formatting churn.
2. **Direct Test & Static Analysis Execution**: Run the project test suite and static typechecker/linter in the same turn to confirm `100%` pass and `0` errors.

### 4.2 4-Dimensional Holistic Adversarial Audit
Verify every change across `4` dimensions before completion:
1. **Functional & Edge-Case Completeness**: Boundary values, empty inputs, `NaN`/`Infinity`, and error paths.
2. **Security & Boundary Validation**: Parameterized queries, input sanitization, and zero secret leakage.
3. **Concurrency & Lock Isolation**: Per-DB transaction isolation (`WAL`, `BEGIN IMMEDIATE`) and deterministic resource cleanup.
4. **Cross-Layer Purity**: `0%` UI, DOM, or I/O leakage into pure domain modules.
