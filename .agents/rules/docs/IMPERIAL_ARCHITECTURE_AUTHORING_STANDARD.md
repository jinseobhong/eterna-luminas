---
trigger: glob
description: "Defines the 5-level structural blueprint standard (Context, 1:1 Module/Test Matrix, Contracts, Sequences, Governance & ADR table) for docs/ARCHITECTURE.md. Load when creating, modifying, synchronizing, or auditing docs/ARCHITECTURE.md."
globs: "docs/*ARCHITECTURE*.md, docs/ARCHITECTURE.md"
---

# IMPERIAL ARCHITECTURE AUTHORING STANDARD

## 1. Single Responsibility (`SRP`) Scope

`docs/ARCHITECTURE.md` serves exclusively as the **System Topology, Module Boundary, Data Flow & ADR Ledger**. Delegate exact constants, `SQL DDL`, and mathematical formulas to `docs/SPECIFICATION.md`, and delegate verbatim source code to `docs/AUDIT_GROUNDING_DUMP.md`.

---

## 2. Mandatory 5-Level Blueprint Structure

Order `docs/ARCHITECTURE.md` strictly across `5` hierarchical H2 sections:
1. **`## 1. Level 1: System Context & Subsystem Topology`**: Brief subsystem summary + end-to-end Mermaid `flowchart TB`.
2. **`## 2. Level 2: Module & 1:1 Test Boundary Matrix`**: `6`-column table (`Layer | Source Path | 1:1 Test Path | Allowed Imports | Forbidden Imports | Single Responsibility`) using workspace-root inline code backtick paths.
3. **`## 3. Level 3: Contract & Persistence Topology`**: Mermaid `classDiagram` or `erDiagram` illustrating cross-layer contracts and `2`-Cluster `LTM` relationships.
4. **`## 4. Level 4: Runtime Execution Sequence`**: `autonumber` Mermaid `sequenceDiagram` tracing end-to-end execution and transaction boundaries.
5. **`## 5. Level 5: Governance Gates & Architecture Decision Records (`ADR`)`**: Governance gate table followed by a concise `ADR` table (`ADR ID | Decision | Enforcement Mechanism`).

---

## 3. Forbidden Anti-Patterns

1. **Zero Schema, Formula, or Code Duplication**: Never paste `SQL DDL`, LaTeX equations, or verbatim source code into `docs/ARCHITECTURE.md`.
2. **Zero Markdown Links (`[text](url)`) or `file:///` Paths**: Anchor all file paths strictly with workspace-root inline code backticks (`` `src/core/...` ``).
3. **Zero Stale Modules or Broken Mermaid Syntax**: Keep `0` deleted paths in diagrams/tables, use only supported Mermaid diagrams (`flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`), and wrap special-character labels in double quotes (`id["Label (Detail)"]`).

---

## 4. Same-Turn Synchronization Gate

When updating `docs/ARCHITECTURE.md`, inspect the physical directory and import graph on disk first (`Read-Before-Write`), synchronize all `5` levels, verify `npm run lint` and `npm test`, and commit atomically.
