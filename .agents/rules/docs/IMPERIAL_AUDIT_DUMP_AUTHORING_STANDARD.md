---
trigger: glob
description: "Defines the 4-section zero-truncation (0% ellipsis) verbatim code and 1:1 test mirror standard for docs/AUDIT_GROUNDING_DUMP.md. Load when creating, modifying, synchronizing, or auditing docs/AUDIT_GROUNDING_DUMP.md."
globs: "docs/*AUDIT*.md, docs/AUDIT_GROUNDING_DUMP.md"
---

# IMPERIAL AUDIT GROUNDING DUMP AUTHORING STANDARD

## 1. Single Responsibility (`SRP`) Scope (`코드·테스트 거울 원장 단일 책임 범위`)

`docs/AUDIT_GROUNDING_DUMP.md` serves exclusively as the **`0-Drift` Verbatim Source Code & `1:1` Test Mirror Ledger (`무드리프트 실소스 및 1:1 테스트 원문 거울 원장`)**—containing the byte-exact, un-truncated (`0%` `...`) mirror of physical configuration manifests, `src/` modules, `tests/` suites, and same-turn verification telemetry to enable single-file `grep` and session-compact grounding.

---

## 2. Mandatory 4-Section Structure (`필수 4대 단원 구조`)

Order `docs/AUDIT_GROUNDING_DUMP.md` strictly across `4` sequential H2 sections:
1. **`## 1. Grounding Snapshot Manifest (`무손실 코드 거울 매니페스트`)`**: `5`-column inventory table (`Layer / Category | Physical File Path | 1:1 Mirrored Test Path | Line Count / Byte Size | Status`) using workspace-root inline code backtick paths.
2. **`## 2. Layer-Ordered Verbatim Source Code Mirror (`계층순 무생략 실소스 원문 거울`)`**: Present every manifest and `src/` file in layer order (`Config ➔ Layer 1 ➔ Layer 2 ➔ Layer 3 ➔ Layer 4`) under `#### \`filepath\`` with `100%` of its lines (`0%` `...` truncation).
3. **`## 3. 1:1 Mirrored Test Suite & Verbatim Assertion Mirror (`1:1 대칭 테스트 및 단언식 원문 거울`)`**: Present every `tests/` file in `1:1` correspondence with `Section 2` under `#### \`testpath\`` with `100%` of its lines and `assert` statements.
4. **`## 4. Same-Turn Verification & 4-Dimensional Audit Telemetry (`동일 턴 검증 및 4차원 감사 텔레메트리`)`**: Table recording rule byte budget, `npm run lint`, `npm test`, and `4`-dimensional audit results.

---

## 3. Forbidden Anti-Patterns (`절대 금지 반패턴`)

1. **Zero Ellipsis Truncation (`...` / `// ...` / `/* omitted */` 중략 절대 금지)**: Never abbreviate any line of code or test in `Section 2` or `Section 3`; any truncation triggers immediate audit `VETO`.
2. **Zero Markdown Links (`[text](url)`) or Ghost Code (`마크다운 링크 및 유령 코드 금지`)**: Use inline code backtick path anchors only, and ensure `100%` byte-exact parity with physical files on disk.

---

## 4. Same-Turn Synchronization Gate (`동일 턴 동기화 검증 게이트`)

Whenever any source, test, or manifest file changes, read the physical files on disk (`read_file`), update `docs/AUDIT_GROUNDING_DUMP.md` in full, visually read back the updated sections (`read_file`), and commit atomically.
