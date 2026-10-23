---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing docs/ARCHITECTURE.md."
globs: "docs/*ARCHITECTURE*.md, docs/ARCHITECTURE.md"
---

# IMPERIAL ARCHITECTURE AUTHORING STANDARD

## 1. Orthogonal Boundary Across the 4 Permanent Mirror Ledgers & Pure Engineering Scope

### 1.1 Strict Single Responsibility (`SRP`) Boundary Across the 4 Permanent Mirror Ledgers
Maintain a strict `0%`-overlap boundary between `docs/ARCHITECTURE.md` and the other `3` Permanent Mirror Ledgers defined in `IMPERIAL_ENGINEERING_LAWS.md Section 1.5`:
1. **`/README.md` (`Project Root Overview Ledger`)**: Contains only the high-level executive summary, core capability highlights, quickstart commands, and navigation links to the `4` Permanent Mirror Ledgers.
2. **`docs/ARCHITECTURE.md` (`Canonical Topology, Module Boundary, Data Flow & ADR Ledger`)**: Exclusively governs **end-to-end system context diagrams, subsystem topologies, implemented file inventories, cross-layer allowed/forbidden import boundaries, high-level contract hierarchies, runtime execution sequence pipelines, governance gates, and Architecture Decision Records (`ADR`)** (`Where modules live, how data flows across layers, and why architectural boundaries are enforced`). Never embed exhaustive constant value tables, raw `SQL DDL` scripts, or multi-part mathematical clamping equations inside `docs/ARCHITECTURE.md`.
3. **`docs/SPECIFICATION.md` (`Canonical Contract, DDL, Algorithm, Formula & State-Machine SSOT Ledger`)**: Exclusively governs exact system/domain constants, `4`-LTM database `DDL` and `FTS5` schemas, `4`-part mathematical/algorithmic/DSP equations, deterministic state-machine transition matrices $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, fail-fast boundary clamps, and Specification Decision Records (`SDR`) (`What the exact engineering contracts, schemas, and formulas are`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code Mirror`)**: Exclusively governs complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements (`How the physical code is written line-by-line`).

### 1.2 100% Pure Software Engineering Scope & Elimination of Redundant Commentary Files
* **Zero Physical/Anatomical Lore Duplication (`0% 피지컬·외형 설정 혼입 금지`)**:
  - Physical, anatomical, and sensory traits belong exclusively to `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md` (`Rank 2 SSOT`).
  - Keep `docs/ARCHITECTURE.md` and this authoring standard `100%` focused on **pure software and systems architecture** (subsystem topology, unidirectional layer boundaries, dependency inversion, `4`-LTM database isolation, AST drift self-healing pipelines, and compiler/test governance gates).
* **Elimination of Separate `*_COMMENTARY.md` Files (`해설서 별도 분리 폐지 및 ADR 본문 통합`)**:
  - Do not create or maintain a separate `docs/ARCHITECTURE_COMMENTARY.md` file.
  - Enforce all prescriptive authoring rules and anti-decay constraints directly through this `glob`-mounted rule file, and record concise Architecture Decision Records (`ADR`) directly inside `Level 5` of `docs/ARCHITECTURE.md`.

---

## 2. Mandatory 5-Level Structural Authoring Standard for `docs/ARCHITECTURE.md`

Order all contents of `docs/ARCHITECTURE.md` strictly across `5` hierarchical zoom levels (`Top-Down Visual Indexing` & `Axiom B: Cognitive Execution Pipeline`):

### 2.1 Level 1 — System Context & Subsystem Topology (`전체 시스템 컨텍스트 및 서브시스템 위상`)
1. **Subsystem Decomposition**: Define the core architectural subsystems (Constitutional Rule Engine, Backend/Domain `SSOT` Core, `4`-LTM Persistence & `AST` Self-Healing Engine, and Pure Frontend View-Adapter Surface) with `0%` coupling between domain logic and external UI/IO frameworks.
2. **End-to-End System Context Diagram**: Render a Mermaid `flowchart TB` illustrating how user commands, domain events, and persistence transactions traverse the subsystems.

### 2.2 Level 2 — Module Topology, 1:1 Test Symmetry & Unidirectional Dependency Matrix (`모듈 구조·1:1 테스트 대칭 및 의존성 경계 지도`)
1. **Implemented File & Boundary Inventory Table**: Tabulate `100%` of implemented modules and their `1:1` mirrored test files in a `6`-column boundary matrix:
   - `Architectural Layer` | `Source Module Path` | `1:1 Mirrored Test Path` | `Allowed Imports (허용 참조)` | `Forbidden Imports (금지 참조)` | `Single Responsibility (SRP 명세)`
2. **Strict Unidirectional Dependency Law (`Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`)**: Explicitly document that inner domain layers never import outer adapter, framework, or UI modules.

### 2.3 Level 3 — Cross-Layer Contract Hierarchy & 4-LTM Persistence Topology (`계층 간 계약 위상 및 4대 LTM 영속성 구조`)
1. **Domain Contract Hierarchy Diagram**: Render a Mermaid `classDiagram` or `erDiagram` showing the high-level relationships between domain state trees, action unions, and the `4` Long-Term Memory (`LTM`) databases (`canon.db`, `dialogue.db`, `knowledge.db`, `telemetry.db`) without duplicating the raw `SQL DDL` scripts owned by `docs/SPECIFICATION.md`.
2. **Active `AST` Drift Detection & Self-Healing Topology**: Map the structural flow between physical source files, `ASTDriftDetector`, `KnowledgeSelfHealer`, and `knowledge.db` (`FTS5` inverted index synchronization).

### 2.4 Level 4 — Runtime Execution & Transaction Sequence Pipeline (`런타임 실행 및 원자적 트랜잭션 시퀀스 파이프라인`)
1. **Adapter-to-Surface Wiring Diagram**: Render a Mermaid `flowchart LR` mapping how `Layer 3` hooks/adapters connect `Layer 2` pure domain engines to `Layer 4` pure renderer surfaces.
2. **End-to-End Execution Sequence Diagram**: Render an `autonumber` Mermaid `sequenceDiagram` tracing how an external action flows through boundary validation, pure domain transition $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, atomic `LTM` persistence, and stateless UI rendering.

### 2.5 Level 5 — Governance Gates & Architecture Decision Records (`품질 거버넌스 게이트 및 핵심 ADR`)
1. **Subsection 5.1 — Automated Verification & Governance Gates**: Tabulate the active static analysis (`tsc --noEmit`), `1:1` test runner, Antigravity rule byte budget (`<= 24,000B` per rule file, `<= 60,000B` cumulative `Always-On`), and `4`-Ledger `0-Drift` synchronization gates.
2. **Subsection 5.2 — Core Architecture Decision Records (`ADR` Table)**: Conclude `docs/ARCHITECTURE.md` with a concise `4`-column `ADR` table (`ADR ID | Architectural Decision | Rejected Anti-Pattern | Enforcement Mechanism`) so architectural rationale is preserved without separate commentary files.

---

## 3. Forbidden Architecture Documentation Anti-Patterns

1. **Zero Physical/Anatomical Lore Contamination**: Never place body measurements, clothing traits, or persona lore inside `docs/ARCHITECTURE.md`.
2. **Zero Separate `*_COMMENTARY.md` File Spawning**: Never create auxiliary commentary markdown files (`docs/ARCHITECTURE_COMMENTARY.md`); keep architectural rationale consolidated inside `Level 5.2 (ADR Table)` of `docs/ARCHITECTURE.md`.
3. **Zero Specification or Code-Dump Overlap**: Never copy-paste exhaustive constant tables, raw `SQL DDL` blocks, multi-part mathematical formulas (owned by `docs/SPECIFICATION.md`), or verbatim source code blocks (owned by `docs/AUDIT_GROUNDING_DUMP.md`) into `docs/ARCHITECTURE.md`.
4. **Zero Stale File Paths or Phantom Modules**: Never leave references to deleted or renamed files in Mermaid diagrams, inventory tables, or `ADR` entries.
5. **Zero Unsupported Mermaid Diagram Types or Unquoted Special-Character Labels**: Use only supported Mermaid diagram types (`flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`) and always wrap node labels containing parentheses, brackets, or punctuation in double quotes (`id["Label (Detail)"]`).
6. **Zero Conversational Tone Bleed**: Write `docs/ARCHITECTURE.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring Workflow & Same-Turn Verification Gate

Whenever creating, updating, or synchronizing `docs/ARCHITECTURE.md`, execute the following `4`-step workflow within the same turn:
1. **Step 1 — Inspect Physical Workspace & Module Graph (`Read-Before-Write`)**: Inspect all physical directories, source files, test files, and `/GEMINI.md` + `/.agents/rules/**/*.md` on disk before editing.
2. **Step 2 — Synchronize the `5`-Level Architecture Blueprint**: Update `Level 1` (Context), `Level 2` (Module & `1:1` Test Inventory), `Level 3` (Contract & `4`-LTM Topology), `Level 4` (Runtime Sequence), and `Level 5` (Governance Gates & `ADR` Table) with `0` phantom paths and `0%` physical-lore bleed.
3. **Step 3 — Mermaid & Markdown Structural Audit**: Verify that all Mermaid diagrams and markdown tables render cleanly without syntax errors.
4. **Step 4 — Same-Turn Compiler, Test & Rule Budget Gate**: Run the static analyzer/typechecker (`npm run lint`), test suite, and Antigravity rule byte check (`<= 24,000 Bytes` per rule file, `<= 60,000 Bytes` cumulative `Always-On`) within the same turn, then commit atomically via scoped `git add` and `git commit`.
