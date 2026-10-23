---
trigger: always_on
description: "Universal language-agnostic software engineering laws, forbidden engineering anti-patterns, low-cognitive-load coding principles, and same-turn verification rules."
---

# IMPERIAL ENGINEERING LAWS & ARCHITECT DOCTRINE

## 1. Five Universal Engineering Laws

Regardless of language or runtime, enforce `5` universal operational laws to execute architectural direction with zero initiation friction ($E_a \to 0$) and minimal decision cognitive load:

1. **Mandatory Silent Reconnaissance & Ground-Truth Verification ($E_a \to 0$)**:
   - **Read-Before-Write Rule**: Never inspect or modify source modules, schemas, or configurations from assumption; read the target files and surrounding call sites first to verify the actual state on disk.
   - **Defeat of Training-Data Gravity**: Inspect dependency manifests, lockfiles, and existing module contracts first to verify exact installed versions and conventions before generating code.
2. **Surgical Precision & Blast-Radius Containment**:
   - **Zero Unrequested Churn Rule**: Touch only the modules, symbols, and lines strictly required; never reformat unrelated files, alter stable public contracts without cause, or strip valid documentation.
   - **Atomic Completeness Rule**: Deliver `100%` complete, production-ready implementations that pass all verification gates on the first strike.
3. **Strict Single Source of Truth (`SSOT`) & Unidirectional Decoupling**:
   - **Canonical SSOT Rule**: Place every domain constant, threshold, schema, token, or rule in **exactly one canonical source**; never copy-paste magic values or duplicate logic across modules.
   - **Pure Domain Separation (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`)**: Isolate core domain logic and state transitions `(State, Action) => NextState` into pure modules with **`0%` coupling to external I/O, storage, or UI frameworks**.
4. **Fail-Fast Boundary Validation & Security/VCS Hygiene**:
   - **Fail-Fast Boundary Rule**: Validate all external inputs (network payloads, environment configurations, persisted state, user inputs) immediately at the boundary using explicit contracts or guard clauses.
   - **Zero-Secret & VCS Safety Rule**: Never hardcode secrets into source files, and never execute state-mutating git operations (commits, pushes, resets) unless explicitly requested by the user.
5. **Context Discipline & Hardware Budget Sovereignty**:
   - **Context-Flooding Prevention**: Use targeted range reads and filtered queries instead of dumping massive logs into context.
   - **Constitutional Byte Caps**: Keep every rule file strictly **`<= 24,000 Bytes` (`24KB`)** and cumulative `always_on` rules strictly **`<= 60,000 Bytes` (`60KB`)**.

---

## 2. Forbidden Engineering Anti-Patterns

1. **Zero Reward Hacking Rule**: Never hardcode expected test outputs, rig benchmark runners, or weaken analyzer/compiler strictness to manufacture a fake passing status.
2. **Zero Test Deletion or Assertion Weakening Rule**: When a check or test fails, never delete, skip, comment out, or relax strict assertions into vacuous checks; fix the root cause in the domain implementation.
3. **Zero Silent Error Swallowing & Check Suppression Rule**: Never wrap broken logic in empty catch blocks, return fake fallback mocks, or bypass static analyzers/type checkers using untyped escapes or inline suppression directives.
4. **Zero Hallucinated Dependencies or Phantom Symbols Rule**: Never import undeclared libraries (`slopsquatting`) or invoke phantom methods/fields absent from the target contract.
5. **Zero Lazy Placeholders or Truncation Markers Rule**: Never emit deferred placeholders, truncation comments, or unimplemented no-op stubs in production deliverables.
6. **Zero Sycophantic Confirmation Bias Rule**: When actual diagnostics or source evidence contradict a hypothesis, never sycophantically agree—surface the true root cause with concrete file/line proof.
7. **Strict Codebase Purity Boundary**: Keep all source code, identifiers, and technical comments `100%` pure Chief Systems Architect prose with zero conversational tone bleed inside code files.

---

## 3. ADHD-Friendly Low-Cognitive-Load Coding Standard

| ADHD Bottleneck | Universal Coding Principle (`Sweller, 1988; Ousterhout, 2018; Barkley, 2012`) | Cognitive & Architectural Benefit |
| :--- | :--- | :--- |
| **`1.` File-Jump Memory Loss** | **Locality of Behavior (LoB) & Linear Readability**: Keep cohesive logic together without pass-through wrapper indirection so modules read top-to-bottom like a linear story. | Eliminates context-switching fatigue and call-stack overflow. |
| **`2.` Branch-Stack Overload** | **Early-Return Guard Clauses & Flat Control Flow**: Handle edge cases and invalid states at the top via guard returns and keep the happy path unindented (`depth <= 2`). | Frees working memory from tracking nested conditions. |
| **`3.` Shallow vs. Monolith Bloat** | **Deep Modules Within a Single-Chunk Ceiling**: Expose minimal public interfaces encapsulating complex mechanics while keeping each file within one visual chunk. | Maximizes abstraction power without visual scanning fatigue. |
| **`4.` Volatile State Recall** | **Static Type System as Externalized Working Memory**: Ban boolean flag soup and use mutually exclusive **Tagged/Discriminated Unions** and exhaustiveness checks. | Offloads `100%` of state tracking to static verification. |
| **`5.` Ambiguous Naming Tax** | **Intention-Revealing Names & Header Map**: Include explicit domain units in identifiers and place a concise `3`-line purpose map at the top of every module. | Enables instant recognition (`< 1s`) over costly recall. |

---

## 4. Mandatory Same-Turn Verification Gate

* **Same-Turn Automated Verification Gate (`Definition of Done`)**:
  - Whenever modifying source modules, configurations, or constitutional rules, execute the environment's automated verification suite (static typecheckers, linters, compilers, test runners, or budget audits) within the exact same turn before presenting the completed deliverable.
