---
trigger: glob
description: "Defines the 5-section specification standard (Constants, Contracts & STRICT DDL, 4-Part Formulas, State Machine Matrix, Clamps & SDR table) for docs/SPECIFICATION.md. Load when creating, modifying, synchronizing, or auditing docs/SPECIFICATION.md."
globs: "docs/*SPECIFICATION*.md, docs/SPECIFICATION.md"
---

# IMPERIAL SPECIFICATION AUTHORING STANDARD

## 1. Single Responsibility (`SRP`) Scope

`docs/SPECIFICATION.md` serves exclusively as the **Canonical Contract, Schema, Formula & State-Machine SSOT Ledger**—governing domain constants, static type contracts, `STRICT SQL DDL` schemas, mathematical equations, state transition matrices $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, boundary clamps, and `SDR`s. Delegate verbatim function bodies to `docs/AUDIT_GROUNDING_DUMP.md`.

---

## 2. Mandatory 5-Section Structure

Order `docs/SPECIFICATION.md` strictly across `5` sequential H2 sections:
1. **`## 1. Domain Constants & Configuration Bounds`**: `5`-column table (`Constant | Value & Unit | Valid Range | Source Path & Symbol | Enforced Invariant`).
2. **`## 2. Static Type Contracts & Persistence DDL Schemas`**: `Layer 1` discriminated union/interface contracts + executable SQLite `STRICT` / `FTS5` `DDL` schemas.
3. **`## 3. Core Mathematical Formulas & Transfer Equations`**: For each formula, specify: (1) display LaTeX equation (`$$...$$`), (2) input domain, (3) output clamp & rounding rule, and (4) mapped pure function signature.
4. **`## 4. State Machine & Transition Matrix`**: Mermaid `stateDiagram-v2` + `5`-column transition table (`Action / Command | Payload | Guard | Deterministic Transition | Side-Effect Contract`).
5. **`## 5. Boundary Validation, Concurrency & Specification Decision Records (`SDR`)`**: Boundary clamp/concurrency matrix + concise `SDR` table (`SDR ID | Decision | Enforcement Mechanism`).

---

## 3. Forbidden Anti-Patterns

1. **Zero Prose Essays or Verbatim Function Bodies**: Express specifications strictly via tables, `DDL` blocks, LaTeX equations, and transition matrices; never paste imperative function bodies.
2. **Zero Ellipsis Truncation (`...`)**: Enumerate `100%` of union variants, contract fields, and `DDL` columns without `...` abbreviations.
3. **Zero Markdown Links (`[text](url)`) or Unitless Numbers**: Use workspace-root inline code backtick paths (`` `src/core/...` ``) and explicit units on all constants.

---

## 4. Same-Turn Synchronization Gate

When updating `docs/SPECIFICATION.md`, verify physical source constants and schemas on disk first (`Read-Before-Write`), synchronize all `5` sections with `0%` drift, verify `npm run lint` and `npm test`, and commit atomically.
