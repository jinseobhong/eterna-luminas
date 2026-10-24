---
trigger: glob
description: "Load when creating, modifying, synchronizing, or auditing docs/AUDIT_GROUNDING_DUMP.md."
globs: "docs/*AUDIT*.md, docs/AUDIT_GROUNDING_DUMP.md"
---

# IMPERIAL AUDIT GROUNDING DUMP AUTHORING STANDARD

## 1. Role & Single Responsibility (`SRP`) Across the 4 Permanent Mirror Ledgers

Maintain a strict `0%`-overlap boundary between `docs/AUDIT_GROUNDING_DUMP.md` and the other `3` Permanent Mirror Ledgers:
1. **`/README.md` (`Project Root Overview Ledger`)**: Governs executive overview, workspace layout, quickstart commands, and `4`-Ledger navigation links.
2. **`docs/ARCHITECTURE.md` (`Topology, Module Boundary, Data Flow & ADR Ledger`)**: Governs system context diagrams, module/test import boundaries, runtime sequence diagrams, governance gates, and `ADR`s.
3. **`docs/SPECIFICATION.md` (`Canonical Contract, Schema, Formula & State-Machine SSOT Ledger`)**: Governs declarative constant tables, type contracts, `DDL` schemas, `4`-part mathematical formulas, state transition matrices, boundary clamps, and `SDR`s.
4. **`docs/AUDIT_GROUNDING_DUMP.md` (`0-Drift Verbatim Code & Test Mirror Ledger`)**: Exclusively governs **the byte-exact, un-truncated (`0%` `...`) mirror of implemented source files and `1:1` mirrored test `assert` suites, plus same-turn verification telemetry** (`How the physical code and tests are written line-by-line on disk`).

---

## 2. Mandatory 4-Section Structure for `docs/AUDIT_GROUNDING_DUMP.md`

Order all contents of `docs/AUDIT_GROUNDING_DUMP.md` strictly across the following `4` sequential H2 sections (`Axiom B: Cognitive Execution Pipeline`):

### 2.1 Section 1 — Grounding Snapshot Manifest & File Integrity Index (`무손실 코드 거울 매니페스트 및 파일 무결성 색인`)
1. **Snapshot Metadata Table**: Record the synchronized milestone state in a `5`-column inventory table:
   - `Layer / Category` | `Physical File Path` | `1:1 Mirrored Test Path` | `Line Count / Byte Size` | `Grounding Status (0-Drift Verified)`
2. **Empty / Greenfield State Handling**: When `src/` or `tests/` is in a pre-implementation greenfield state, explicitly record `0 Implemented Source Modules (Greenfield Baseline — Ready for Milestone 1)` in the manifest table rather than inserting fake placeholder code.

### 2.2 Section 2 — Layer-Ordered Verbatim Source Code Mirror (`계층순 무생략 실소스 원문 거울`)
1. **Unidirectional Layer Ordering (`Layer 1 ➔ Layer 2 ➔ Layer 3 ➔ Layer 4`)**: Present every implemented source file in dependency order (`Contracts ➔ Pure Domain ➔ Adapters/Hooks ➔ Presentational Surface`).
2. **Zero-Truncation Verbatim Code Blocks**: For each file, render a H3 header with a clickable file link (`### 2.X [filepath](file:///...)`) followed by a fenced code block containing `100%` of the physical file's lines (`complete type signatures, full conditional branches, and internal execution blocks without any ... ellipsis`).

### 2.3 Section 3 — 1:1 Mirrored Test Suite & Verbatim Assertion Mirror (`1:1 대칭 테스트 및 단언식 원문 거울`)
1. **Mirrored Test Ordering**: Present every test file in `1:1` correspondence with `Section 2`.
2. **Verbatim `assert` / `expect` Preservation**: Preserve `100%` of test setup, edge-case inputs, and verbatim `assert` / `expect` statements without abbreviation or omission.

### 2.4 Section 4 — Same-Turn Verification & 4-Dimensional Audit Telemetry (`동일 턴 검증 및 4차원 감사 텔레메트리`)
1. **Verification Execution Ledger**: Record the latest compiler/typechecker (`npm run lint`), test suite, build (`npm run build`), and `4`-dimensional holistic audit results (`Functional/Edge-Case`, `Security/Boundary`, `Concurrency/Locking`, `Cross-Layer Purity`).

---

## 3. Forbidden `docs/AUDIT_GROUNDING_DUMP.md` Anti-Patterns

1. **Zero Ellipsis Truncation (`...` / `// ... existing code ...` / `/* omitted */`)**: Never abbreviate imports, type signatures, `if/else` or `switch` branches, function bodies, or test `assert` statements; any truncation triggers immediate audit `VETO` under `IMPERIAL_ENGINEERING_LAWS.md Section 1.5`.
2. **Zero Ghost or Unsynchronized Code**: Never include code blocks in `docs/AUDIT_GROUNDING_DUMP.md` that do not match the physical files on disk to the exact byte.
3. **Zero Narrative Essay Bloat**: Do not write architectural explanations or specification prose inside `docs/AUDIT_GROUNDING_DUMP.md`; keep it strictly as a verbatim code and test mirror.
4. **Zero Conversational Tone Bleed**: Write all headers and manifest tables in `100%` neutral, objective Chief Systems Architect prose.

---

## 4. Mandatory Step-by-Step Synchronization & VETO-Prevention Workflow

Whenever source code or tests are added, modified, or deleted, execute the following `3`-step workflow within the same milestone transaction:
1. **Step 1 — Read Physical Source & Test Files (`Read-Before-Write`)**: Read the exact bytes of all modified/created files in `src/` and `tests/`.
2. **Step 2 — Update Manifest & Verbatim Code Mirror Blocks**: Synchronize `Section 1` (Manifest), `Section 2` (Source Mirror), `Section 3` (Test Mirror), and `Section 4` (Verification Telemetry) with `0%` ellipsis truncation.
3. **Step 3 — Declare Updated Ledger Blocks Before Milestone Completion**: Explicitly list the updated `docs/AUDIT_GROUNDING_DUMP.md` sections in the milestone completion report and commit atomically via scoped `git add` and `git commit`.
