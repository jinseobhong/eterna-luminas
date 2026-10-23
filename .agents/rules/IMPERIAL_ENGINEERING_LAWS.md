---
trigger: always_on
description: "Universal language-agnostic software engineering laws, low-cognitive-load coding standards, forbidden engineering anti-patterns, and same-turn multi-perspective verification rules."
---

# IMPERIAL ENGINEERING LAWS & ARCHITECT DOCTRINE

## 1. Five Universal Pre-Execution & Architectural Laws

Regardless of language or runtime, enforce `5` universal operational laws to execute architectural direction with zero initiation friction ($E_a \to 0$) and minimal decision cognitive load:

1. **Mandatory 5-Step Pre-Implementation Defensive Reconnaissance ($E_a \to 0$)**:
   - **Pre-Implementation Defensive Loop**: Before drafting blueprints or modifying code, execute a `5`-step defensive verification sequence: (`1`) perform adversarial self-inquiry to surface latent risks and false positives, (`2`) verify historical design intent and invariants across existing specifications or commit history, (`3`) measure downstream dependency and interface blast radius, (`4`) inspect actual source files, dependency manifests, and lockfiles on disk (`Read-Before-Write` & `Defeat of Training-Data Gravity`) rather than assuming wiring, and (`5`) lock architectural rationale before implementation.
2. **Surgical Precision, Lossless Refactoring & Blast-Radius Containment**:
   - **Zero Unrequested Churn Rule**: Touch only the modules, symbols, and lines strictly required; never reformat unrelated files, alter stable public contracts without cause, or strip valid documentation.
   - **Atomic Completeness & 0-Error/0-Warning Hygiene**: Deliver `100%` complete, production-ready implementations conforming to official language style standards and applicable path-triggered language rules at `0` errors and `0` warnings on the first strike.
3. **Strict Single Source of Truth (`SSOT`), Single Responsibility (`SRP`) & Unidirectional Decoupling**:
   - **Canonical SSOT & Pure Domain Authority**: Place every domain constant, algorithm, mathematical formula, state machine, schema, or rule in **exactly one canonical source**; isolate core domain logic and state transitions `(State, Action) => NextState` into pure modules with **`0%` coupling to external I/O, persistence, or UI frameworks**, keeping presentation surfaces (`Web/TSX`, `CLI`, `Desktop`, `Mobile`) as thin, framework-independent renderers.
   - **Strict SRP, Interface Segregation & Zero God-Object Rule**: Enforce Single Responsibility Principle (`SRP`), explicit architectural layer interfaces, rigorous exception handling, and strict static typing across all modules while permanently banning monolithic God Objects.
4. **Fail-Fast Boundary Validation, Transactional State Integrity & Milestone VCS Hygiene**:
   - **Fail-Fast Boundary & Atomic Persistence Rule**: Validate all external inputs (network payloads, environment configurations, persisted state, user inputs) immediately at the boundary using explicit contracts or guard clauses, and enforce atomic transactions with zero unrequested schema or data mutation across persistent storage.
   - **Zero-Secret & Milestone-Gated VCS Rule**: Never hardcode secrets into source files, and never execute `git push` or destructive resets (`git reset --hard`, `git checkout --`) without explicit user command; upon `100%` completion and verification of a logical milestone, stage only the modified task files (`git add <paths>`, never indiscriminate `git add .`) and record an atomic local `git commit`.
5. **Context Discipline, Zero-Drift Documentation Sync & Hardware Budget Sovereignty**:
   - **Context-Flooding Prevention & Documentation Ledger Sync**: Use targeted range reads and filtered queries instead of dumping massive logs into context, and synchronize affected architectural or specification documents within the same milestone whenever structural contracts change.
   - **Constitutional Byte Caps**: Keep every rule file strictly **`<= 24,000 Bytes` (`24KB`)** and cumulative `always_on` rules strictly **`<= 60,000 Bytes` (`60KB`)**.

---

## 2. ADHD-Friendly Low-Cognitive-Load Coding Standard

| ADHD Bottleneck | Universal Coding Principle (`Sweller, 1988; Ousterhout, 2018; Barkley, 2012`) | Cognitive & Architectural Benefit |
| :--- | :--- | :--- |
| **`1.` File-Jump Memory Loss** | **Locality of Behavior (LoB) & Linear Readability**: Keep cohesive logic together without pass-through wrapper indirection so modules read top-to-bottom like a linear story. | Eliminates context-switching fatigue and call-stack overflow. |
| **`2.` Branch-Stack Overload** | **Early-Return Guard Clauses & Flat Control Flow**: Handle edge cases and invalid states at the top via guard returns and keep the happy path unindented (`depth <= 2`). | Frees working memory from tracking nested conditions. |
| **`3.` Shallow vs. Monolith Bloat** | **Deep Modules Within a Single-Chunk Ceiling**: Expose minimal public interfaces encapsulating complex mechanics while keeping each file within one visual chunk. | Maximizes abstraction power without visual scanning fatigue. |
| **`4.` Volatile State Recall** | **Static Type System as Externalized Working Memory**: Ban boolean flag soup and use mutually exclusive **Tagged/Discriminated Unions** and exhaustiveness checks. | Offloads `100%` of state tracking to static verification. |
| **`5.` Ambiguous Naming Tax** | **Intention-Revealing Names & Header Map**: Include explicit domain units in identifiers and place a concise `3`-line purpose map at the top of every module. | Enables instant recognition (`< 1s`) over costly recall. |

* **1:1 Mirrored Test-Module Symmetry & Runtime Separation**: Align test directory hierarchies `1:1` with source module hierarchies while keeping test code strictly separated from runtime production bundles.

---

## 3. Forbidden Engineering Anti-Patterns

1. **Zero Reward Hacking & Hardcoded Test-Input Branching Rule**: Never hardcode expected test queries or outputs, inject conditional test-only branches or regexes, rig benchmark runners, or hide domain terms inside stopword or exception filters to manufacture a fake passing status.
2. **Zero Test Deletion or Assertion/Cap Weakening Rule**: When a check, test, or budget audit fails (`Red`), never delete, skip, comment out, or relax strict assertions, thresholds, timeouts, or byte caps (`24,000B` / `60,000B`) into vacuous checks; fix the root cause in the domain implementation or discard (`Hard Reset`) the flawed implementation.
3. **Zero Silent Error Swallowing, Opaque Workarounds & Check Suppression Rule**: Never wrap broken logic in empty catch blocks, return fake fallback mocks, or bypass static analyzers/type checkers using untyped escapes or inline suppression directives; if a requirement is technically infeasible under current constraints, transparently declare the exact technical blocker rather than applying an arbitrary workaround.
4. **Zero Hallucinated Dependencies or Phantom Symbols Rule**: Never import undeclared libraries (`slopsquatting`) or invoke phantom methods/fields absent from the target contract.
5. **Zero Lazy Placeholders or Truncation Markers Rule**: Never emit deferred placeholders, truncation comments (`...`), or unimplemented no-op stubs in production deliverables or documentation mirrors.
6. **Zero Sycophantic Confirmation Bias Rule**: When actual diagnostics or source evidence contradict a hypothesis, never sycophantically agree—surface the true root cause with concrete file/line proof.
7. **Strict Codebase Purity Boundary**: Keep all source code, identifiers, and technical comments `100%` pure Chief Systems Architect prose with zero conversational tone bleed inside code files.

---

## 4. Mandatory Same-Turn Multi-Perspective Verification Gate

* **Same-Turn Automated Verification Gate (`Definition of Done`)**:
  - Whenever modifying source modules, configurations, or constitutional rules, directly execute the environment's automated verification suite (static typecheckers, linters, compilers, test runners, or budget audits) within the exact same turn to prove `100%` regression-free integrity before presenting the completed deliverable.
* **4-Dimensional Holistic Adversarial Audit**:
  - Audit every modification across `4` mandatory dimensions prior to completion: (`1`) **Functional & Edge-Case Completeness**, (`2`) **Security & Boundary Defense**, (`3`) **Concurrency, Lock Contention & State Consistency**, and (`4`) **Layer Decoupling & Temporal Coherence**.
