---
trigger: glob
description: "Defines the 5-level structural blueprint standard (Context, 1:1 Module/Test Matrix, Contracts, Sequences, Governance & ADR table) for docs/ARCHITECTURE.md. Load when creating, modifying, synchronizing, or auditing docs/ARCHITECTURE.md."
globs: "docs/*ARCHITECTURE*.md, docs/ARCHITECTURE.md"
---

# IMPERIAL ARCHITECTURE AUTHORING STANDARD

## 1. Single Responsibility (`SRP`) Scope (`아키텍처 원장 단일 책임 범위`)

`docs/ARCHITECTURE.md` serves exclusively as the **System Topology, Module Boundary, Data Flow & ADR Ledger (`시스템 토폴로지, 모듈 경계, 데이터 흐름 및 ADR 원장`)**. Delegate exact constants, `SQL DDL`, and mathematical formulas to `docs/SPECIFICATION.md`, and delegate verbatim source code to `docs/AUDIT_GROUNDING_DUMP.md`.

---

## 2. Mandatory 5-Level Blueprint Structure (`필수 5단계 청사진 구조`)

Order `docs/ARCHITECTURE.md` strictly across `5` hierarchical H2 sections:
1. **`## 1. Level 1: System Context & Subsystem Topology (`시스템 컨텍스트 및 서브시스템 토폴로지`)`**: Brief subsystem summary + end-to-end Mermaid `flowchart TB`.
2. **`## 2. Level 2: Module & 1:1 Test Boundary Matrix (`모듈 및 1:1 테스트 경계 매트릭스`)`**: `6`-column table (`Layer | Source Path | 1:1 Test Path | Allowed Imports | Forbidden Imports | Single Responsibility`) using workspace-root inline code backtick paths.
3. **`## 3. Level 3: Contract & Persistence Topology (`계약 및 영속성 토폴로지`)`**: Mermaid `classDiagram` or `erDiagram` illustrating cross-layer contracts and `2`-Cluster `LTM` relationships.
4. **`## 4. Level 4: Runtime Execution Sequence (`런타임 실행 및 트랜잭션 시퀀스`)`**: `autonumber` Mermaid `sequenceDiagram` tracing end-to-end execution and transaction boundaries.
5. **`## 5. Level 5: Governance Gates & Architecture Decision Records (`거버넌스 게이트 및 ADR`)`**: Governance gate table followed by a concise `ADR` table (`ADR ID | Decision | Enforcement Mechanism`).

---

## 3. Forbidden Anti-Patterns (`절대 금지 반패턴`)

1. **Zero Schema, Formula, or Code Duplication (`DDL·수식·실소스 복붙 금지`)**: Never paste `SQL DDL`, LaTeX equations, or verbatim source code into `docs/ARCHITECTURE.md`.
2. **Zero Markdown Links (`[text](url)`) or `file:///` Paths (`마크다운 링크 및 file:/// 금지`)**: Anchor all file paths strictly with workspace-root inline code backticks (`` `src/core/...` ``).
3. **Zero Stale Modules or Broken Mermaid Syntax (`유령 모듈 및 깨진 다이어그램 금지`)**: Keep `0` deleted paths in diagrams/tables, use only supported Mermaid diagrams (`flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram-v2`, `erDiagram`), and wrap special-character labels in double quotes (`id["Label (Detail)"]`).

---

## 4. Same-Turn Synchronization Gate (`동일 턴 동기화 검증 게이트`)

When updating `docs/ARCHITECTURE.md`, inspect the physical directory and import graph on disk first (`Read-Before-Write`), synchronize all `5` levels, verify `npm run lint` and `npm test`, and commit atomically.
