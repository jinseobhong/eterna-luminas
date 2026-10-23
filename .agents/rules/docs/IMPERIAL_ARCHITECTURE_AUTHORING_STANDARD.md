---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing docs/ARCHITECTURE.md or docs/ARCHITECTURE_COMMENTARY.md."
globs: "docs/*ARCHITECTURE*.md, docs/ARCHITECTURE.md, docs/ARCHITECTURE_COMMENTARY.md"
---

# IMPERIAL ARCHITECTURE AUTHORING & COMMENTARY STANDARD

## 1. Orthogonal Boundary Across the 4 Permanent Mirror Ledgers & Commentary Separation

### 1.1 Strict Single Responsibility (`SRP`) Boundary Across the 4 Permanent Mirror Ledgers
Maintain a strict `0%`-overlap boundary between `docs/ARCHITECTURE.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Root Overview Ledger`)**: Contains only the high-level executive summary, core capability highlights, quickstart commands, and navigation links to the `4` ledgers.
2. **`docs/ARCHITECTURE.md` (`Canonical Topology, Module Boundary & Data Flow Ledger`)**: Exclusively governs **end-to-end system context diagrams, subsystem topologies, implemented file inventories, cross-layer allowed/forbidden import boundaries, high-level contract class hierarchies, component prop wiring trees, runtime execution sequence diagrams, and governance gates** (`Where modules live & how data flows across layers`). Never embed exhaustive constant value tables, raw `SQL DDL` scripts, or multi-part mathematical clamping equations inside `docs/ARCHITECTURE.md`.
3. **`docs/SPECIFICATION.md` (`Canonical Contract, DDL, Formula & State-Machine SSOT Ledger`)**: Exclusively governs exact domain constants, `4`-LTM database `DDL` and `FTS5` schemas, `4`-part mathematical/biomechanical/DSP equations, deterministic state-machine transition matrices $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, and fail-fast boundary clamps (`What the exact contracts, schemas, and formulas are`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code Mirror`)**: Exclusively governs complete, un-truncated (`0%` `...`) source code implementations and verbatim test `assert` statements (`How the physical code is written line-by-line`).

### 1.2 Strict Separation of Blueprint (`ARCHITECTURE.md`), Commentary (`ARCHITECTURE_COMMENTARY.md`), and Authoring Law (`IMPERIAL_ARCHITECTURE_AUTHORING_STANDARD.md`)
* **`docs/ARCHITECTURE.md` (`Declarative Structural Blueprint — What & Where`)**:
  - Author `docs/ARCHITECTURE.md` strictly as a clean structural topology map using Mermaid diagrams (`flowchart`, `classDiagram`, `sequenceDiagram`) and `3`-second visual boundary tables.
  - Exclude historical post-mortems, design rationale essays, and authoring meta-instructions from `docs/ARCHITECTURE.md`.
* **`docs/ARCHITECTURE_COMMENTARY.md` (`Design Rationale, File-by-File Commentary & ADR Reference — Why`)**:
  - Author `docs/ARCHITECTURE_COMMENTARY.md` strictly as the pure design rationale companion explaining **why** the architecture and each layer/file were engineered that way (`Legacy Defect` vs. `Design Rationale`) and recording **Architecture Decision Records (`ADR`)**.
  - Never mix document-authoring instructions (`작성법`) into `docs/ARCHITECTURE_COMMENTARY.md`.
* **`.agents/rules/docs/IMPERIAL_ARCHITECTURE_AUTHORING_STANDARD.md` (`Prescriptive Authoring Law — How to Write`)**:
  - Govern all document structure, required sections, table schemas, diagram standards, and synchronization workflows exclusively within this rule file.

---

## 2. Mandatory Structural Standards for `docs/ARCHITECTURE.md` & `docs/ARCHITECTURE_COMMENTARY.md`

### 2.1 Mandatory 5-Level Structure for `docs/ARCHITECTURE.md` (`Blueprint`)
Order all contents of `docs/ARCHITECTURE.md` strictly across `5` hierarchical zoom levels (`Top-Down Visual Indexing`):
1. **Level 1 — System Context & Dual-Subsystem Topology (`전체 시스템 컨텍스트 설계도`)**:
   - Define the high-level subsystems (`Subsystem A: Constitutional Rule Engine` and `Subsystem B: Unidirectional Runtime Engine`) and render an end-to-end Mermaid `flowchart TB` showing how user commands/interactions traverse both subsystems.
2. **Level 2 — Implemented File Topology & Unidirectional Dependency Map (`전체 파일 구조 및 의존성 지도`)**:
   - Tabulate `100%` of implemented files in a `6`-column boundary matrix:
     - `Subsystem / Layer` | `Implemented File Path` | `Lines / Size` | `Allowed Imports (허용 참조)` | `Forbidden Imports (금지 참조)` | `Single Responsibility (SRP 명세)`
3. **Level 3 — Cross-Layer Contract Hierarchy & State Flow Overview (`데이터 계약 위상 및 상태 흐름 개요`)**:
   - Render a Mermaid `classDiagram` of the `Layer 1` state tree and a high-level summary table of `Layer 2` reducer actions (delegating exhaustive mathematical formulas and `DDL` schemas to `docs/SPECIFICATION.md`).
4. **Level 4 — Runtime Component Wiring & Execution Sequence Pipeline (`런타임 컴포넌트 및 인터랙션 파이프라인`)**:
   - Render (`1`) a Mermaid `flowchart LR` mapping hook-to-component prop/callback wiring and (`2`) an `autonumber` Mermaid `sequenceDiagram` tracing end-to-end user action dispatch and state propagation.
5. **Level 5 — Constitutional, Documentation & Compiler Governance Gates (`품질 및 거버넌스 게이트`)**:
   - Tabulate the active compiler, build, rule-budget, and `4`-ledger synchronization gates (`Governance Gate | Target Files | Enforced Invariant`).

### 2.2 Mandatory 3-Section Structure for `docs/ARCHITECTURE_COMMENTARY.md` (`Commentary`)
Order all contents of `docs/ARCHITECTURE_COMMENTARY.md` strictly across `3` canonical sections:
1. **Section 1 — The Three Scientific Axes of Our Architecture (`핵심 설계 3대 축`)**:
   - Render a Mermaid `flowchart TD` uniting `Axis 1: Human Prefrontal Ergonomics`, `Axis 2: LLM Probability Distribution Control`, and `Axis 3: Enterprise Clean Architecture & Sustainability`, followed by `Why` + `Architectural Cure` subsections (`1.1 ~ 1.3`).
2. **Section 2 — File-by-File Architectural Commentary (`구현 파일별 심층 설계 해설`)**:
   - Group commentary by architectural layer (`2.1 Layer 1 Commentary`, `2.2 Layer 2 Commentary`, `2.3 Layer 3 Commentary`, `2.4 Layer 4 Commentary`), explaining each file's design choices via explicit **`Legacy Defect`** and **`Design Rationale`** pairs.
3. **Section 3 — Architecture Decision Records & Long-Session Anti-Decay Rules (`ADR 및 부패 방지 수칙`)**:
   - **Subsection 3.1 (`Core Architecture Decision Records: ADR-01 ~ ADR-06`)**: Present a `4`-column table (`ADR ID | Decision Summary | Rejected Anti-Pattern (절대 회귀 금지 패턴) | Long-Session Enforcement Rule`).
   - **Subsection 3.2 (`How to Use the Canonical Ledgers & Commentary Pairs in Future Long-Horizon Sessions`)**: Map each engineering question (`Where is X?`, `Why was X built this way?`, `What are the exact constants/DDL/formulas?`, `Why were those constants/schemas chosen?`, `What is the verbatim code?`) to its exact target document.

---

## 3. Forbidden Architecture Documentation Anti-Patterns

1. **Zero Mixing of Authoring Rules (`작성법`) into Commentary (`ARCHITECTURE_COMMENTARY.md`)**: Never place markdown formatting instructions, section-authoring rules, or authoring workflows inside `docs/ARCHITECTURE_COMMENTARY.md`; keep commentary `100%` focused on architectural `Why` and `ADR`s.
2. **Zero Mixing of Design Rationale Essays into Blueprint (`ARCHITECTURE.md`)**: Keep `docs/ARCHITECTURE.md` strictly declarative (`What & Where`) and place all `Why` explanations in `docs/ARCHITECTURE_COMMENTARY.md`.
3. **Zero Stale File Paths, Deleted Rule Names, or Outdated Line/Byte Metrics**: Never leave references to deleted or renamed files in Mermaid diagrams, inventory tables, or `ADR` entries.
4. **Zero Unsupported Mermaid Diagram Types or Unquoted Special-Character Labels**: Use only supported Mermaid diagram types (`flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`) and always wrap node labels containing parentheses, brackets, or mathematical symbols in double quotes (`id["Label (Detail)"]`).
5. **Zero Conversational Tone Bleed**: Write both `docs/ARCHITECTURE.md` and `docs/ARCHITECTURE_COMMENTARY.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring Workflow & Same-Turn Verification Gate

Whenever creating, updating, or synchronizing `docs/ARCHITECTURE.md` or `docs/ARCHITECTURE_COMMENTARY.md`, execute the following `4`-step workflow within the same turn:
1. **Step 1 — Inspect Physical Source & Rule Topology (`Read-Before-Write`)**: Measure exact line counts, byte sizes, and import graphs across `src/**/*`, `/GEMINI.md`, and `/.agents/rules/**/*.md` on disk before editing.
2. **Step 2 — Synchronize the `5`-Level Blueprint (`docs/ARCHITECTURE.md`)**: Update all affected Mermaid diagrams, the `Level 2` file inventory table, and the `Level 5` governance table so `0` phantom or deleted paths exist.
3. **Step 3 — Synchronize the `3`-Section Commentary (`docs/ARCHITECTURE_COMMENTARY.md`)**: Record the `Legacy Defect`, `Design Rationale`, and any new `ADR` row in `docs/ARCHITECTURE_COMMENTARY.md`.
4. **Step 4 — Same-Turn Compiler, Test & Rule Budget Gate**: Run `npm run lint`, the test suite, and the Antigravity rule byte check (`<= 24,000 Bytes` per rule file, `<= 60,000 Bytes` cumulative `Always-On`) within the same turn, then commit atomically via scoped `git add` and `git commit`.
