---
trigger: glob
description: "Defines the 5-level structural blueprint standard (Context, 1:1 Module/Test Matrix, Contracts, Sequences, Governance & ADR table) for docs/ARCHITECTURE.md. Load when creating, modifying, synchronizing, or auditing docs/ARCHITECTURE.md."
globs: "docs/*ARCHITECTURE*.md, docs/ARCHITECTURE.md"
---

# IMPERIAL ARCHITECTURE AUTHORING STANDARD

## 1. Role & Single Responsibility (`SRP`) Across the 4 Permanent Mirror Ledgers

Maintain a strict `0%`-overlap boundary between `docs/ARCHITECTURE.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Root Overview Ledger`)**: Contains only the high-level executive summary, workspace map, quickstart commands, and navigation index to the `4` Permanent Mirror Ledgers.
2. **`docs/ARCHITECTURE.md` (`Canonical Topology, Module Boundary, Data Flow & ADR Ledger`)**: Exclusively governs **end-to-end system context diagrams, subsystem topologies, implemented module/test inventories, cross-layer allowed/forbidden import boundaries, high-level contract hierarchies, runtime execution sequence pipelines, governance gates, and Architecture Decision Records (`ADR`)** (`Where modules live, how data flows across layers, and why architectural boundaries are enforced`).
3. **`docs/SPECIFICATION.md` (`Canonical Contract, Schema, Formula & State-Machine SSOT Ledger`)**: Exclusively governs exact domain constants, static type contracts, persistence `DDL` schemas, mathematical/algorithmic equations, deterministic state-machine transition matrices $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, fail-fast boundary clamps, and Specification Decision Records (`SDR`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code & Test Mirror Ledger`)**: Exclusively governs complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements.

---

## 2. Mandatory 5-Level Structural Authoring Standard for `docs/ARCHITECTURE.md`

Order all contents of `docs/ARCHITECTURE.md` strictly across `5` hierarchical zoom levels (`Top-Down Visual Indexing` & `Axiom B: Cognitive Execution Pipeline`):

### 2.1 Level 1 — System Context & Subsystem Topology (`전체 시스템 컨텍스트 및 서브시스템 위상`)
1. **Subsystem Decomposition**: Define the high-level subsystems that compose the architecture and state their orthogonal responsibilities (`0%` coupling between core domain logic and external UI/IO adapters).
2. **End-to-End System Context Diagram**: Render a Mermaid `flowchart TB` illustrating how external actors, commands, domain events, and persistence adapters interact across subsystems.

### 2.2 Level 2 — Module Topology, 1:1 Test Symmetry & Unidirectional Dependency Matrix (`모듈 구조·1:1 테스트 대칭 및 의존성 경계 지도`)
1. **Module & `1:1` Test Boundary Matrix**: Tabulate `100%` of architectural layers/modules and their `1:1` mirrored test paths in a `6`-column boundary matrix using workspace-root inline code backtick path anchors (`` `path/to/file` ``):
   - `Architectural Layer` | `Source Module Path` | `1:1 Mirrored Test Path` | `Allowed Imports (허용 참조)` | `Forbidden Imports (금지 참조)` | `Single Responsibility (SRP 명세)`
2. **Unidirectional Dependency Rule (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`)**: Explicitly document the dependency direction so inner layers never import outer adapter or presentation modules.

### 2.3 Level 3 — Cross-Layer Contract Hierarchy & Persistence Topology (`계층 간 계약 위상 및 영속성 구조`)
1. **Contract & Subsystem Class/ER Diagram**: Render a Mermaid `classDiagram` or `erDiagram` showing the structural relationships between domain state contracts, action unions, domain services, and persistence adapters without duplicating raw `SQL DDL` definitions owned by `docs/SPECIFICATION.md`.

### 2.4 Level 4 — Runtime Execution & Transaction Sequence Pipeline (`런타임 실행 및 트랜잭션 시퀀스 파이프라인`)
1. **Component / Adapter Wiring Diagram**: Render a Mermaid `flowchart LR` mapping how adapter hooks/services connect pure domain engines to presentation surfaces.
2. **End-to-End Execution Sequence Diagram**: Render an `autonumber` Mermaid `sequenceDiagram` tracing how an external event flows through boundary validation, deterministic domain transition $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, persistence, and stateless rendering.

### 2.5 Level 5 — Governance Gates & Architecture Decision Records (`품질 거버넌스 게이트 및 핵심 ADR`)
1. **Subsection 5.1 — Automated Verification & Governance Gates**: Tabulate the active compiler/typechecker, test symmetry, rule budget, and `4`-Ledger synchronization gates (`Governance Gate | Target Scope | Enforced Engineering Invariant`).
2. **Subsection 5.2 — Core Architecture Decision Records (`ADR` Table)**: Conclude `docs/ARCHITECTURE.md` with a `4`-column `ADR` table (`ADR ID | Architectural Decision | Rejected Anti-Pattern (절대 회귀 금지 패턴) | Enforcement Mechanism`) capturing enduring architectural decisions directly inside the blueprint.

---

## 3. Forbidden `docs/ARCHITECTURE.md` Anti-Patterns

1. **Zero Specification or Code-Dump Overlap**: Never copy-paste exhaustive constant tables, raw `SQL DDL` blocks, multi-part mathematical formulas (owned by `docs/SPECIFICATION.md`), or verbatim source code blocks (owned by `docs/AUDIT_GROUNDING_DUMP.md`) into `docs/ARCHITECTURE.md`.
2. **Zero Markdown Hyperlinks (`[text](url)`) or `file:///` Local Paths**: Never use `[filename](file:///...)` or `[filename](./path)` links in `docs/ARCHITECTURE.md`; anchor all file paths strictly with workspace-root inline code backticks (`` `src/core/...` ``).
3. **Zero Stale File Paths or Phantom Modules**: Never leave references to deleted or renamed files in Mermaid diagrams, module inventory tables, or `ADR` entries.
4. **Zero Unsupported Mermaid Diagram Types or Unquoted Special-Character Labels**: Use only supported Mermaid diagram types (`flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`) and always wrap node labels containing parentheses, brackets, or punctuation in double quotes (`id["Label (Detail)"]`).
5. **Zero Conversational Tone Bleed**: Write `docs/ARCHITECTURE.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring Workflow & Same-Turn Verification Gate

Whenever creating, updating, or synchronizing `docs/ARCHITECTURE.md`, execute the following `4`-step workflow within the same turn:
1. **Step 1 — Inspect Physical Workspace & Module Graph (`Read-Before-Write`)**: Inspect all physical directories, source files, test files, and configuration manifests on disk before editing.
2. **Step 2 — Synchronize the `5`-Level Architecture Blueprint**: Update `Level 1` (Context), `Level 2` (Module & `1:1` Test Inventory), `Level 3` (Contract & Persistence Topology), `Level 4` (Runtime Sequence), and `Level 5` (Governance Gates & `ADR` Table) with `0` phantom paths and inline code backtick path anchors.
3. **Step 3 — Mermaid & Markdown Structural Audit**: Verify that all Mermaid diagrams and markdown tables render cleanly without syntax errors.
4. **Step 4 — Same-Turn Compiler, Test & Rule Budget Gate**: Run the project verification suite and Antigravity rule byte check within the same turn, then commit atomically via scoped `git add` and `git commit`.
