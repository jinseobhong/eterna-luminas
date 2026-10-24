---
trigger: glob
description: "Defines the 5-section specification standard (Constants, Contracts & STRICT DDL, 4-Part Formulas, State Machine Matrix, Clamps & SDR table) for docs/SPECIFICATION.md. Load when creating, modifying, synchronizing, or auditing docs/SPECIFICATION.md."
globs: "docs/*SPECIFICATION*.md, docs/SPECIFICATION.md"
---

# IMPERIAL SPECIFICATION AUTHORING STANDARD

## 1. Single Responsibility (`SRP`) Scope (`명세서 원장 단일 책임 범위`)

`docs/SPECIFICATION.md` serves exclusively as the **Canonical Contract, Schema, Formula & State-Machine SSOT Ledger (`정적 계약, 스키마, 수학 공식 및 상태 기계 SSOT 원장`)**—governing domain constants, static type contracts, `STRICT SQL DDL` schemas, mathematical equations, state transition matrices $\delta(\mathcal{S}, \mathcal{A}) \to \mathcal{S}'$, boundary clamps, and `SDR`s. Delegate verbatim function bodies to `docs/AUDIT_GROUNDING_DUMP.md`.

---

## 2. Mandatory 5-Section Structure (`필수 5대 단원 구조`)

Order `docs/SPECIFICATION.md` strictly across `5` sequential H2 sections:
1. **`## 1. Domain Constants & Configuration Bounds (`도메인 상수 및 설정 경계`)`**: `5`-column table (`Constant | Value & Unit | Valid Range | Source Path & Symbol | Enforced Invariant`).
2. **`## 2. Static Type Contracts & Persistence DDL Schemas (`정적 타입 계약 및 STRICT DDL 스키마`)`**: `Layer 1` discriminated union/interface contracts + executable SQLite `STRICT` / `FTS5` `DDL` schemas.
3. **`## 3. Core Mathematical Formulas & Transfer Equations (`핵심 수학 공식 및 전이 방정식`)`**: For each formula, specify: (1) display LaTeX equation (`$$...$$`), (2) input domain, (3) output clamp & rounding rule, and (4) mapped pure function signature.
4. **`## 4. State Machine & Transition Matrix (`상태 기계 및 결정론적 전이 매트릭스`)`**: Mermaid `stateDiagram-v2` + `5`-column transition table (`Action / Command | Payload | Guard | Deterministic Transition | Side-Effect Contract`).
5. **`## 5. Boundary Validation, Concurrency & Specification Decision Records (`경계 검증, 동시성 및 SDR`)`**: Boundary clamp/concurrency matrix + concise `SDR` table (`SDR ID | Decision | Enforcement Mechanism`).

---

## 3. Forbidden Anti-Patterns (`절대 금지 반패턴`)

1. **Zero Prose Essays or Verbatim Function Bodies (`서술형 수필 및 함수 본문 복붙 금지`)**: Express specifications strictly via tables, `DDL` blocks, LaTeX equations, and transition matrices; never paste imperative function bodies.
2. **Zero Ellipsis Truncation (`...` 중략 절대 금지)**: Enumerate `100%` of union variants, contract fields, and `DDL` columns without `...` abbreviations.
3. **Zero Markdown Links (`[text](url)`) or Unitless Numbers (`마크다운 링크 및 무단위 숫자 금지`)**: Use workspace-root inline code backtick paths (`` `src/core/...` ``) and explicit units on all constants.

---

## 4. Same-Turn Synchronization Gate (`동일 턴 동기화 검증 게이트`)

When updating `docs/SPECIFICATION.md`, verify physical source constants and schemas on disk first (`Read-Before-Write`), synchronize all `5` sections with `0%` drift, verify `npm run lint` and `npm test`, and commit atomically.
