---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing the project root README.md ledger."
globs: "README.md"
---

# IMPERIAL README AUTHORING STANDARD

## 1. Role & Single Responsibility (`SRP`) Across the 4 Permanent Mirror Ledgers

Maintain a strict `0%`-overlap boundary between `/README.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Root Overview & Entrypoint Ledger`)**: Exclusively governs the **executive system summary, core architectural pillars, quickstart/verification commands, and canonical navigation index to the `4` Permanent Mirror Ledgers** (`What the project is, how to run/verify it, and where each ledger lives`).
2. **`docs/ARCHITECTURE.md` (`Topology, Module Boundary, Data Flow & ADR Ledger`)**: Governs subsystem topologies, module/test boundaries, cross-layer import rules, runtime sequences, governance gates, and Architecture Decision Records (`ADR`).
3. **`docs/SPECIFICATION.md` (`Canonical Contract, Schema, Formula & State-Machine SSOT Ledger`)**: Governs exact domain constants, static type contracts, persistence `DDL` schemas, mathematical/algorithmic formulas, deterministic state transition matrices, boundary validation rules, and Specification Decision Records (`SDR`).
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code & Test Mirror Ledger`)**: Governs complete, un-truncated (`0%` `...`) source code and `1:1` mirrored test `assert` statements.

---

## 2. Mandatory 4-Section Structure for `/README.md`

Order all contents of `/README.md` strictly across the following `4` sequential H2 sections (`Axiom B: Cognitive Execution Pipeline`):

### 2.1 Section 1 — System Overview & Core Value Proposition (`시스템 개요 및 핵심 지향점`)
1. **Executive Summary**: State the project's purpose, architectural identity, and core operational scope in `1~2` concise paragraphs.
2. **Core Architectural Pillars Table**: Present a `3`-column summary table (`Pillar | Architectural Mechanism | Engineering Guarantee`) highlighting the system's foundational design strengths.

### 2.2 Section 2 — Subsystem & Directory Topology Overview (`서브시스템 및 디렉토리 위상 요약`)
1. **High-Level Workspace Map**: Render a concise directory tree or Mermaid `flowchart LR` illustrating the top-level repository layout (`.agents/rules/`, `docs/`, `src/`, `tests/`, configuration manifests).
2. **Layer & Subsystem Summary**: Briefly summarize the top-level division of responsibilities while delegating detailed module-level import matrices to `docs/ARCHITECTURE.md`.

### 2.3 Section 3 — Quickstart, Build & Verification Commands (`실행·빌드 및 무결성 검증 명령어`)
1. **Prerequisites & Installation**: List the required runtime/package-manager versions and installation commands.
2. **Canonical Command Table**: Tabulate all standard scripts defined in `package.json` (`Command | Execution Target | Verification Gate Criteria`) covering development server startup, static typechecking (`npm run lint`), test suite execution, and production builds (`npm run build`).

### 2.4 Section 4 — Canonical 4 Permanent Mirror Ledgers Navigation Index (`4대 영구 거울 원장 네비게이션`)
1. **4-Ledger Index Table**: Tabulate all `4` Permanent Mirror Ledgers (`/README.md`, `docs/ARCHITECTURE.md`, `docs/SPECIFICATION.md`, `docs/AUDIT_GROUNDING_DUMP.md`), their single-responsibility scopes, and their governing authoring standards using **workspace-root inline code backtick path anchors** (`` `path/to/file` ``).

---

## 3. Forbidden `/README.md` Anti-Patterns

1. **Zero Low-Level Schema, Formula, or Code Dumps**: Never place `SQL DDL` blocks, multi-part mathematical equations, exhaustive state-transition matrices, or verbatim source code inside `/README.md`; delegate them to `docs/SPECIFICATION.md` and `docs/AUDIT_GROUNDING_DUMP.md`.
2. **Zero Markdown Hyperlinks (`[text](url)`) or `file:///` Local Paths**: Never use `[filename](file:///...)` or `[filename](./path)` links in `/README.md`; reference all files strictly via workspace-root inline code backtick anchors (`` `docs/ARCHITECTURE.md` ``).
3. **Zero Unverified or Phantom CLI Commands**: Never document scripts or flags in `/README.md` that do not physically exist in `package.json`.
4. **Zero Stale Directory Trees & Zero Conversational Tone Bleed**: Never leave deleted directories in the workspace overview and write `/README.md` in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Authoring & Synchronization Workflow

Whenever creating, updating, or synchronizing `/README.md`, execute the following `3`-step workflow within the same turn:
1. **Step 1 — Inspect `package.json` & Top-Level Workspace (`Read-Before-Write`)**: Verify the exact scripts in `package.json` and the physical directory structure on disk.
2. **Step 2 — Synchronize the `4` Canonical Sections**: Update `Section 1` (Overview), `Section 2` (Workspace Topology), `Section 3` (Commands), and `Section 4` (`4`-Ledger Index) using inline code backtick path anchors without duplicating `ARCHITECTURE.md` or `SPECIFICATION.md` internals.
3. **Step 3 — Same-Turn Path & Command Verification**: Confirm that all inline code file path anchors exist on disk and commit atomically via scoped `git add` and `git commit`.
