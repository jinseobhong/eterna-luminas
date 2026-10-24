---
trigger: glob
description: "Defines the 4-section authoring standard, SRP boundary, inline backtick path rules, and synchronization workflow for the root /README.md ledger. Load when creating, modifying, synchronizing, or auditing /README.md."
globs: "README.md"
---

# IMPERIAL README AUTHORING STANDARD

## 1. Single Responsibility (`SRP`) Scope (`루트 README 단일 책임 범위`)

`/README.md` serves exclusively as the **Project Root Overview & Entrypoint Ledger (`프로젝트 루트 개요 및 진입점 원장`)**—covering the executive system summary, top-level workspace topology, quickstart/verification commands, and navigation index to the `4` Permanent Mirror Ledgers. Delegate detailed module matrices to `docs/ARCHITECTURE.md`, schemas/formulas to `docs/SPECIFICATION.md`, and code dumps to `docs/AUDIT_GROUNDING_DUMP.md`.

---

## 2. Mandatory 4-Section Structure (`필수 4대 단원 구조`)

Order `/README.md` strictly across `4` sequential H2 sections:
1. **`## 1. System Overview & Core Architectural Pillars (`시스템 개요 및 4대 핵심 기둥`)`**: `1~2` sentence executive summary + a `3`-column table (`Core Pillar | Architectural Mechanism | Engineering Guarantee`).
2. **`## 2. Workspace & Subsystem Topology (`워크스페이스 및 서브시스템 토폴로지`)`**: Concise Mermaid `flowchart LR` mapping `.agents/`, `docs/`, `src/`, `tests/`, and `data/`.
3. **`## 3. Quickstart, Build & Verification Commands (`빠른 시작, 빌드 및 검증 명령어`)`**: Runtime prerequisites (`Node.js >= 22.5.x`), `npm install`, and a command table matching `package.json` (`Command | Script | Purpose & Gate`).
4. **`## 4. 4 Permanent Mirror Ledgers Index (`4대 영구 거울 원장 색인`)`**: Navigation table (`Ledger | File Path | Single Responsibility Scope | Governing Standard`) using workspace-root inline code backtick paths (`` `path/to/file` ``).

---

## 3. Forbidden Anti-Patterns (`절대 금지 반패턴`)

1. **Zero Low-Level Details (`저수준 DDL·수식·코드 기재 금지`)**: Never include `SQL DDL`, LaTeX equations, state transition matrices, or source code blocks in `/README.md`.
2. **Zero Markdown Links (`[text](url)`) or `file:///` Paths (`마크다운 링크 및 file:/// 금지`)**: Reference all files strictly via workspace-root inline code backtick anchors (`` `docs/ARCHITECTURE.md` ``).
3. **Zero Unverified Commands or Stale Paths (`미검증 명령어 및 유령 경로 금지`)**: Document only scripts present in `package.json` and directories present on disk, written in `100%` neutral technical prose.

---

## 4. Same-Turn Synchronization Gate (`동일 턴 동기화 검증 게이트`)

When updating `/README.md`, verify `package.json` scripts and disk paths first (`Read-Before-Write`), synchronize all `4` sections, and commit atomically within the milestone transaction.
