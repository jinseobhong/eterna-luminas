---
trigger: always_on
description: "Explicit step-by-step software engineering laws, 2-cluster LTM persistence and 4-ledger invariants, low-cognitive-load coding standards, anti-cheating bans, and 4-dimensional verification gates."
---

# IMPERIAL ENGINEERING LAWS & ARCHITECT DOCTRINE

## 1. Pre-Implementation Defensive Loop & Architectural Laws

### 1.1 Mandatory 5-Step Pre-Implementation Defensive Cognitive Loop ($E_a \to 0$)
Prioritize defect eradication over implementation and execute the following `5`-step defensive cognitive loop before drafting blueprints or writing any code:
1. **Step 1 — Adversarial Self-Inquiry**: Interrogate the system with *"Latent defects or compromises may hide in the system; what are the exact risks?"* to surface failure modes and false positives preemptively.
2. **Step 2 — Historical Design Intent & Invariant Verification**: Inspect past milestones, architectural decision records (`ADR`), and specifications to verify historical design intent and inviolable invariants.
3. **Step 3 — Codebase Dependency & Blast-Radius Measurement**: Measure the full list of downstream dependents and cross-module interface impact before modifying any symbol.
4. **Step 4 — Physical Source & Lockfile Byte-Exact Inspection (`Read-Before-Write`)**: Never guess or rely on training-data assumptions; open the actual source files, dependency manifests, and lockfiles on disk to verify physical wiring to the exact byte.
5. **Step 5 — Rationale & Direction Lock Before Implementation**: Enter blueprint drafting and physical code implementation only after `100%` of risks and physical wiring are verified on disk.

### 1.2 Backend Single Source of Truth (`SSOT`) & Pure Frontend Renderer Separation
* **Backend Canonical `SSOT` Authority**: Establish the backend and pure domain core as the sole Single Source of Truth (`SSOT`).
* **Centralized Domain, Mathematical & Combinator Control**: Control all algorithms, mathematical formulas, deterministic state machines `(State, Action) => NextState`, dynamic prompt/behavior assembly pipelines, and core business logic exclusively within the central backend/domain axis with `0%` coupling to external I/O or UI frameworks.
* **Separation of Combinator Logic from Prompt/Behavior Data (`Zero Prompt String Fragmentation`)**: Maintain deterministic prompt-assembly and combinator algorithms in pure domain code while isolating dynamic prompt building blocks, behavioral directives, and lexical pools inside the persistence layer so source files remain `100%` free of fragmented prompt strings.
* **Frontend Pure Renderer & Hardware View Adapter Boundary**: Restrict all frontend surfaces (`Web/TSX`, `CLI/TUI`, `Desktop`, `Mobile`) strictly to pure renderers and hardware view adapters.
* **Permanent Platform & Framework Independence**: Preserve absolute independence from any specific client framework or platform and maintain infinite surface extensibility.

### 1.3 Single Responsibility Principle (`SRP`), Object-Oriented Precision & Style Hygiene
* **Strict `SRP` & `OOP` Enforcement**: Enforce Single Responsibility Principle (`SRP`) and precise object-oriented/modular design (`OOP`) across every architectural unit.
* **Permanent Ban on `God Objects`**: Permanently prohibit creating monolithic `God Objects` that accumulate multiple orthogonal responsibilities.
* **Explicit Cross-Layer Interface Segregation**: Enforce clear interface separation across architectural layers (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`).
* **Exhaustive Exception Handling, Boundary Validation & Static Typing**: Complete thorough exception handling, fail-fast boundary input validation, and strict static type annotations with zero sloppiness or omission.
* **Standard Coding Style & Path-Triggered Law Linkage**: Strictly adhere to official recommended coding style standards to maintain `0-Error / 0-Warning` code hygiene, and simultaneously apply the corresponding path-scoped language statutes and document authoring standards whenever writing or executing code or documentation on any path.

### 1.4 Orthogonal `2`-Cluster Long-Term Memory (`LTM`) Persistence & `ACID` Integrity Law
* **Orthogonal `2`-Cluster Domain Separation (`Interaction LTM` $\perp$ `Engineering LTM`)**: Strictly partition Long-Term Memory (`LTM`) persistence into two orthogonal clusters—the **Interaction, Bio-State, Cognitive Memory & Dynamic Prompt Synthesis Cluster (`Interaction LTM`)** and the **Structured Technical & Workspace Knowledge Cluster (`Engineering LTM`)**—to enforce Separation of Concerns (`SoC`) and eliminate cross-domain lock contention.
* **Zero Constitutional Rule Duplication in Databases**: Never duplicate static markdown constitutional rules inside database tables (`0%` rule-to-DB synchronization drift); dedicate the dynamic prompt-synthesis store strictly to on-demand behavioral and prompt building blocks initialized from an empty baseline schema.
* **Atomic `ACID` Transactions & Zero Schema/Data Tampering**: Directly enforce atomic transactions, strict schema typing, and `100%` structural integrity (`0%` schema tampering, data tampering, or data loss) across all local `LTM` databases.
* **Continuous Atomic Backup & Sovereignty Readiness**: Maintain pure local persistence sovereignty with zero external cloud dependencies and keep atomic backup mechanisms ready at all times across all `LTM` databases.

### 1.5 Active Knowledge Graph Self-Healing & 4 Permanent Mirror Ledgers Synchronization
* **Active `AST`-Based Code-to-Knowledge Drift Detection & Self-Healing**: Trigger automated Abstract Syntax Tree (`AST`) knowledge drift detection and self-healing without delay upon any structural codebase change or technical knowledge ingestion.
* **Atomic Engineering Knowledge Store & Search Index Synchronization**: Atomically heal structural drift and corruption in the engineering knowledge store and synchronize its full-text and semantic inverted indexes to maintain `100%` parity between physical code and the knowledge network.
* **Real-Time `0-Drift` Synchronization of the `4` Permanent Mirror Ledgers**: Synchronize the `4` permanent mirror ledgers (`README.md` overview, `docs/ARCHITECTURE.md` topology and data flow, `docs/SPECIFICATION.md` `DDL`/`API`/constant `SSOT`, and `docs/AUDIT_GROUNDING_DUMP.md` `0-Drift` code mirror) in real time without delay within a single milestone transaction whenever files or code are added, modified, or refactored.
* **Zero-Truncation Grounding Dump & `VETO` Enforcement**: Preserve complete type signatures, full conditional branches and internal execution blocks, and verbatim test `assert` statements in `docs/AUDIT_GROUNDING_DUMP.md` without ellipsis truncation (`...`); any completion declaration that fails to specify updated ledger blocks is rejected (`VETO`).

### 1.6 Milestone-Gated Atomic `git commit` & Remote `git push` Delegation Law
* **Milestone-Gated Scoped `git add` & `git commit`**: Execute scoped file staging (`git add <modified-paths>`, never indiscriminate `git add .`) and `git commit` as a single atomic local transaction upon `100%` verification of each completed milestone, while never hardcoding secrets into source files.
* **Absolute Ban on Direct `git push` & Destructive Resets**: Never execute physical `git push` or destructive resets (`git reset --hard`, `git checkout --`) directly;
* **Zero `git push` Nagging Rule**: Never utter or append prompts asking whether to run `git push` (such as `"Shall I run git push?"` or `"git push를 하시겠습니까?"`) at the end of any response.

---

## 2. ADHD-Friendly Low-Cognitive-Load Coding Standard & 1:1 Test Symmetry

### 2.1 Five Low-Cognitive-Load Structural Coding Principles
| ADHD Bottleneck | Universal Coding Principle | Cognitive & Architectural Benefit |
| :--- | :--- | :--- |
| **`1.` File-Jump Memory Loss** | **Locality of Behavior (LoB) & Linear Readability**: Keep cohesive logic together without pass-through wrapper indirection so modules read top-to-bottom like a linear story. | Eliminates context-switching fatigue and call-stack overflow. |
| **`2.` Branch-Stack Overload** | **Early-Return Guard Clauses & Flat Control Flow**: Handle edge cases and invalid states at the top via guard returns and keep the happy path unindented (`depth <= 2`). | Frees working memory from tracking nested conditions. |
| **`3.` Shallow vs. Monolith Bloat** | **Deep Modules Within a Single-Chunk Ceiling**: Expose minimal public interfaces encapsulating complex mechanics while keeping each file within one visual chunk. | Maximizes abstraction power without visual scanning fatigue. |
| **`4.` Volatile State Recall** | **Static Type System as Externalized Working Memory**: Ban boolean flag soup and use mutually exclusive **Tagged/Discriminated Unions** and exhaustiveness checks. | Offloads `100%` of state tracking to static verification. |
| **`5.` Ambiguous Naming Tax** | **Intention-Revealing Names & Header Map**: Include explicit domain units in identifiers and place a concise `3`-line purpose map at the top of every module. | Enables instant recognition (`< 1s`) over costly recall. |

### 2.2 1:1 Mirrored Test-Module Coupling & Runtime Separation
* **100% `1:1` Mirrored Directory Symmetry**: Bind the subdirectory module hierarchy of the source directory and the file structure of the test directory in `100%` `1:1` mirror symmetry.
* **Strict Ban on Neglected or Orphaned Tests**: Strictly punish and prohibit neglecting, abandoning, or leaving test files out of sync with their source modules.
* **Physical Runtime Separation**: Physically separate pure business logic from test code completely to block runtime deployment contamination.

---

## 3. Failure Transparency & Forbidden Engineering Anti-Patterns

1. **Immediate Technical Infeasibility Declaration**: When a requirement cannot be achieved under current conditions, never apply arbitrary workarounds; immediately declare *"Unachievable under current conditions"* and state its exact technical root cause.
2. **Honest `Red` Failure Telemetry & Ban on Fake `Green` Disguise**: Treat cold test failure (`Red`) announcements as normal engineering telemetry and immediately punish any manipulation that disguises `Red` as `Green`.
3. **Zero Hardcoded Query/Parameter Branching**: Strictly prohibit conditional lambdas, `if/else` branches, or artificial regular expressions in tests or domain code that hardcode specific queries or parameters to return expected answers.
4. **Zero Stopword or Exception-Filter Hiding**: Permanently prohibit hiding domain proper nouns or natural-language words in stopword lists or arbitrary exception filters to mask ranking or search failures.
5. **Zero Assertion, Threshold, Byte-Limit, or Timeout Weakening & Zero Stubs**: When facing test failure (`Red`) or capacity overflow, permanently prohibit arbitrarily relaxing or mutating test assertion criteria (`assert` thresholds, byte limits, timeouts) or patching with stubs (`Stub`).
6. **Orthodox Refactoring Breakthrough**: Resolve all problems strictly by refactoring source code, constitutional documents, or architecture head-on to break through strict test criteria.
7. **Immediate `Hard Reset` on Violation**: Immediately discard (`Hard Reset`) the entire offending implementation whenever clauses `1 ~ 6` are violated.
8. **Zero Silent Error Swallowing & Analyzer Suppression**: Never wrap broken logic in empty catch blocks, return fake fallback mocks, or bypass static analyzers/typecheckers with untyped escapes or inline suppressions.
9. **Zero Hallucinated Dependencies (`Slopsquatting`), Phantom Symbols & Sycophantic Bias**: Never import undeclared packages, invoke phantom symbols absent from the verified contract, or sycophantically agree when diagnostics or source evidence contradict a hypothesis.
10. **Strict Codebase Purity Boundary**: Keep all source code, identifiers, and technical comments `100%` pure Chief Systems Architect prose with zero conversational tone bleed.

---

## 4. Mandatory Same-Turn Execution & 4-Dimensional Holistic Audit Gate

### 4.1 Lossless Surgical Refactoring & Same-Turn Automated Verification (`Definition of Done`)
1. **Step 1 — Lossless Surgical Refactoring (`Zero Unrequested Churn`)**: Touch only the required modules, symbols, and lines without reformatting unrelated files, altering stable public contracts without cause, or stripping valid documentation.
2. **Step 2 — Direct Test Tool Execution**: Directly run test tools during coding and refactoring within the same turn to prove `100%` test integrity.
3. **Step 3 — Direct Static Analyzer Execution**: Directly run static analyzers, typecheckers, linters, and compilers within the same turn to confirm regression-free `0-Error / 0-Warning` clean code.

### 4.2 4-Dimensional All-Direction Holistic Adversarial Audit
1. **Dimension 1 — Functional & Edge-Case Audit**: Ruthlessly execute all code verification and audits from a functional completeness and edge-case perspective.
2. **Dimension 2 — Security Defense Audit**: Ruthlessly execute all code verification and audits from a security defense and boundary validation perspective.
3. **Dimension 3 — Database Lock Contention & Concurrency Audit**: Ruthlessly execute all code verification and audits from a database lock contention, transaction isolation, and concurrency perspective.
4. **Dimension 4 — Cross-Layer Separation of Concerns & Temporal Consistency Audit**: Ruthlessly execute all code verification and audits from a cross-layer separation of concerns (`0%` UI/IO leakage into domain) and temporal consistency perspective.
