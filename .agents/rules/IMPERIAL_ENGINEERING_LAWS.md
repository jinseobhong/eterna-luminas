---
trigger: always_on
description: "Explicit step-by-step engineering laws, LTM DB and 4-ledger invariants, low-cognitive-load standards, anti-cheating bans, and 4D audit gates."
---

# IMPERIAL ENGINEERING LAWS & ARCHITECT DOCTRINE

## 1. Pre-Implementation Defensive Loop & Architectural Laws

### 1.1 Mandatory 5-Step Pre-Implementation Defensive Cognitive Loop ($E_a \to 0$)
Prioritize defect eradication over implementation; run this `5`-step loop before blueprinting or coding:
1. **Adversarial Self-Inquiry**: Ask *"Latent defects or compromises may hide in the system; what risks exist?"* to surface risks and false positives first.
2. **Historical Reason Check**: Verify related design intent and inviolable invariants in past milestones, `ADR`s, and specs.
3. **Blast-Radius Measurement**: Measure the full list of dependents and interface impact before modifying any symbol.
4. **Physical Source Wiring Check (`Read-Before-Write`)**: Never guess; open actual source files, manifests, and lockfiles on disk to verify wiring to the exact byte.
5. **Rationale & Direction Lock**: Enter blueprinting and physical implementation only after `100%` of risks and wiring are verified on disk.

### 1.2 Backend Single Source of Truth (`SSOT`) & Pure Frontend Renderer Separation
* Establish the backend and pure domain core as the sole Single Source of Truth (`SSOT`).
* Control all algorithms, physical/biological formulas, soundscape `DSP` parameters, vignette classifications, state machines `(State, Action) => NextState`, and core business logic exclusively in the backend/domain axis with `0%` UI/IO coupling.
* Keep all frontends (`Web/TSX`, `CLI/TUI`, `Desktop`, `Mobile`) strictly as pure renderers and hardware view adapters.
* Preserve permanent client-framework independence and infinite extensibility.

### 1.3 Single Responsibility Principle (`SRP`), Object-Oriented Precision & Style Hygiene
* Enforce Single Responsibility Principle (`SRP`) and precise object-oriented design (`OOP`) across all modules.
* Permanently ban monolithic `God Objects` that take on all responsibilities.
* Enforce explicit interface separation across architectural layers (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`).
* Complete thorough exception handling, fail-fast boundary validation, and strict static typing with zero sloppiness.
* Maintain `0-Error / 0-Warning` hygiene under official style standards and apply the matching language law (`.agents/rules/IMPERIAL_ENGINEERING_TSX_STANDARD.md`, `.agents/rules/IMPERIAL_ENGINEERING_PY.md`) on every path.

### 1.4 4 Long-Term Memory (`LTM`) Databases Enforcement Law
* Directly control and maintain structural integrity of the `4` `LTM` databases (`canon.db`, `dialogue.db`, `knowledge.db`, `telemetry.db`).
* Directly enforce atomic transactions and integrity verification across all `4` `LTM` databases.
* Permanently ban schema tampering, data tampering, and data loss (`100%` ban) across the `4` `LTM` databases.
* Keep atomic seeding backups ready for all `4` `LTM` databases at all times.

### 1.5 Active Knowledge Drift Self-Healing & 4 Permanent Mirror Ledgers Synchronization
* Trigger `AST`-based drift detection (`ASTDriftDetector`) and self-healing (`KnowledgeSelfHealer`) immediately upon structural code changes or knowledge ingestion.
* Atomically heal drift and corruption in `knowledge.db` and sync the `FTS5` full-text inverted index to keep `100%` code-to-knowledge integrity.
* Synchronize the `4` permanent mirror ledgers (`README.md` overview, `docs/ARCHITECTURE.md` topology/flow, `docs/SPECIFICATION.md` `DDL`/`API`/constant `SSOT`, `docs/AUDIT_GROUNDING_DUMP.md` `0-Drift` code mirror) in real time within one milestone transaction whenever files or code change.
* Preserve full type signatures, conditionals, inner execution blocks, and verbatim test `assert` statements in `docs/AUDIT_GROUNDING_DUMP.md` without `...` truncation; reject (`VETO`) completion if updated blocks are omitted.

### 1.6 Milestone-Gated Atomic `git commit`, Remote `git push` Delegation & Budget Caps
* Execute scoped staging (`git add <modified-paths>`, never `git add .`) and `git commit` as one atomic local transaction upon each verified milestone, with zero hardcoded secrets.
* Never execute physical `git push` or destructive resets (`git reset --hard`, `git checkout --`) directly; leave `git push` exclusively to the user.
* Never utter prompts or questions asking whether to run `git push` at the end of any response.
* Use targeted range reads over raw log dumps, keeping every rule file **`<= 24,000B`** and cumulative `always_on` rules **`<= 60,000B`**.

---

## 2. ADHD-Friendly Low-Cognitive-Load Coding Standard & 1:1 Test Symmetry

### 2.1 Five Low-Cognitive-Load Structural Coding Principles
| ADHD Bottleneck | Universal Coding Principle | Benefit |
|---|---|---|
| **`1.` File-Jump Memory Loss** | **Locality of Behavior (LoB) & Linear Readability**: Keep cohesive logic together without pass-through wrappers so modules read top-to-bottom linearly. | Zero context-switch loss. |
| **`2.` Branch-Stack Overload** | **Early-Return Guard Clauses & Flat Control Flow**: Handle invalid states at the top via guard returns and keep the happy path flat (`depth <= 2`). | Frees working memory. |
| **`3.` Shallow vs. Monolith Bloat** | **Deep Modules Within a Single-Chunk Ceiling**: Expose minimal public interfaces encapsulating complex mechanics within one visual chunk per file. | High abstraction power. |
| **`4.` Volatile State Recall** | **Static Type System as Externalized Working Memory**: Ban boolean flag soup and use mutually exclusive **Tagged/Discriminated Unions** with exhaustiveness checks. | `100%` static tracking. |
| **`5.` Ambiguous Naming Tax** | **Intention-Revealing Names & Header Map**: Include explicit domain units in identifiers and place a `3`-line purpose map at the top of every module. | Recognition in `< 1s`. |

### 2.2 1:1 Mirrored Test-Module Coupling & Runtime Separation
* Bind the source subdirectory module hierarchy and test directory file structure in `100%` `1:1` mirror symmetry.
* Strictly punish and prohibit neglecting or abandoning test files.
* Physically separate pure business logic from test code completely to block runtime deployment contamination.

---

## 3. Failure Transparency & Forbidden Engineering Anti-Patterns

1. When a requirement is unachievable under current conditions, never apply arbitrary workarounds; immediately declare *"Unachievable under current conditions"* and state its technical cause.
2. Treat cold test failure (`Red`) announcements as normal engineering telemetry and immediately punish any manipulation that disguises `Red` as `Green`.
3. Ban conditional lambdas, branches, or artificial regexes in tests or domain code that hardcode specific queries or parameters to return expected answers.
4. Permanently ban hiding domain proper nouns or natural-language words in stopword lists or exception filters to mask ranking or search failures.
5. When facing test failure (`Red`) or capacity overflow, permanently ban relaxing assertion thresholds (`assert` thresholds, `24,000B`/`60,000B` byte caps, timeouts) or patching with stubs (`Stub`).
6. Resolve all problems strictly by refactoring source code, constitutional documents, or architecture head-on to break through strict test criteria.
7. Immediately discard (`Hard Reset`) the offending implementation whenever clauses `1 ~ 6` are violated.
8. Never wrap broken logic in empty catch blocks, return fake fallback mocks, or bypass static analyzers/typecheckers with untyped escapes or inline suppressions.
9. Never import undeclared packages (`slopsquatting`), invoke phantom symbols absent from the contract, or sycophantically agree when source evidence contradicts a hypothesis.
10. Keep all source code, identifiers, and technical comments `100%` pure Chief Systems Architect prose with zero conversational tone bleed.

---

## 4. Mandatory Same-Turn Execution & 4-Dimensional Holistic Audit Gate

### 4.1 Lossless Surgical Refactoring & Same-Turn Automated Verification (`Definition of Done`)
1. **Lossless Surgical Refactoring**: Touch only required modules, symbols, and lines without reformatting unrelated files, altering stable contracts without cause, or stripping valid docs.
2. **Direct Test Execution**: Directly run test tools during coding and refactoring in the same turn to prove `100%` test integrity.
3. **Direct Static Analyzer & Budget Execution**: Directly run static analyzers, typecheckers, linters, compilers, and budget audits in the same turn to confirm `0-Error / 0-Warning` clean code.

### 4.2 4-Dimensional All-Direction Holistic Adversarial Audit
1. **Functional & Edge-Case Audit**: Ruthlessly audit all code from functional completeness and edge-case angles.
2. **Security Defense Audit**: Ruthlessly audit all code from security defense and input-boundary angles.
3. **Database Lock Contention & Concurrency Audit**: Ruthlessly audit all code from DB lock contention and concurrency angles.
4. **Cross-Layer Separation of Concerns & Temporal Consistency Audit**: Ruthlessly audit all code from layer decoupling (`0%` UI/IO leakage) and temporal consistency angles.
