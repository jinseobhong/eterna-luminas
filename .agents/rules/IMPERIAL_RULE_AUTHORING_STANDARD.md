---
trigger: glob
description: "Governs constitutional rule authoring: domain-split voice (1st-person vs. neutral), Axioms A/B ordering, inline backtick path anchors, frontmatter best practices, and 24KB/60KB caps. Load when creating, editing, or auditing GEMINI.md or .agents/rules/**/*.md."
globs: ".agents/rules/**/*.md, .agents/rules/*.md"
---

# IMPERIAL RULE AUTHORING & NORMALIZATION STANDARD

## 1. Voice Separation, Scope Boundaries & Ordering Axioms (`서술 화법 분리, 경계 및 정렬 공리`)

### 1.1 Domain-Split Authoring Voice (`도메인별 서술 화법 이원화`)
* **`1`st-Person (`I` / `My`) Sovereign Empress Rules (`1인칭 여황제 규칙 4종`)**: Author `/GEMINI.md`, `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md`, `.agents/rules/IMPERIAL_INTERACTION_GUIDE.md`, and `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md` strictly in active `1`st-person (`I`, `My`) diegetic prose (`0%` `4`th-wall meta terms such as `Persona`, `Character`, `Roleplay`, or `Gimmick`).
* **Neutral Objective Engineering & Meta Rules (`중립 공학·메타 규칙 8종`)**: Author `.agents/rules/IMPERIAL_ENGINEERING_LAWS.md`, `.agents/rules/IMPERIAL_ENGINEERING_TSX_STANDARD.md`, `.agents/rules/IMPERIAL_RULE_AUTHORING_STANDARD.md`, `.agents/rules/README.md`, and `.agents/rules/docs/*.md` in `100%` neutral architectural prose (`0%` `I`/`My` pronouns, `0%` physical lore duplication).
* **Anti-Poison-Pill Boundary (`독소 조항 방지 경계`)**: Abstracting physical lore applies **only** to the `8` engineering/meta rule files; never insert bans that prevent project source code (`src/`, `tests/`) or the `4` Permanent Mirror Ledgers (`/README.md`, `docs/*.md`) from implementing or documenting domain features.

### 1.2 Explicit Behavioral Repertoire Monopoly (`구체적 유혹·행동 시퀀스 독점 경계`)
* **Exclusive Repository (`행동 양식 독점 저장소`)**: `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md` is the sole rule file permitted to contain explicit, choreographed part-by-part seduction/domination actions (`1 ~ 33`) and situational study/bedchamber flows.
* **Appearance Prose Exception (`외형·감각 묘사 허용 예외`)**: `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md` may depict natural physical motion and sensory textures (`3.5s` wave decay, `4.5cm` garter sink, jingling hairpins), while delegating interactive behaviors to `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md`.

### 1.3 Priority Hierarchy (`Axiom A`) & Section Ordering (`Axiom B`) (`우선순위 계층 및 섹션 정렬 공리`)
* **`Axiom A` — Inter-File Priority Hierarchy (`파일 간 우선순위 서열`)**:
  `Rank 1 (/GEMINI.md)` > `Rank 2 (IMPERIAL_APPEARANCE_SPECIFICATION.md)` > `Rank 3 (IMPERIAL_INTERACTION_GUIDE.md)` > `Rank 4 (IMPERIAL_BEHAVIOR_PATTERNS.md)` > `Rank 5 (IMPERIAL_ENGINEERING_LAWS.md — Universal Constitution)` > `Rank 6a (IMPERIAL_ENGINEERING_TSX_STANDARD.md — Concrete Technical Statute)` / `Rank 6b (.agents/rules/docs/IMPERIAL_*_AUTHORING_STANDARD.md — Spec-Free Ledger Guidelines)`.
* **`Axiom B` — Intra-File Section Ordering (`파일 내 단원 배치 순서`)**:
  Order H2 sections chronologically along the execution pipeline: `Section 1 (Core Mandate & Reconnaissance)` ➔ `Section 2 (Constructive Standards & Structure)` ➔ `Section 3 (Negative Bans)` ➔ `Section 4 (Verification Gate)`.

---

## 2. Cross-Reference & Path Anchor Rules by Trigger Tier (`트리거 계층별 상호 참조 및 경로 앵커 규칙`)

### 2.1 `Always-On` Rules (`상시 로드 규칙 무참조·무중복 원칙`)
* **Zero Duplication & Zero Cross-References**: Never repeat rules across `always_on` files and never reference another file or section code inside `/GEMINI.md` or any `trigger: always_on` rule file; each `always_on` file must be `100%` self-contained.

### 2.2 Conditional Rules (`model_decision` / `glob`) & Repository Documents (`조건부 규칙 및 문서 인라인 백틱 경로 원칙`)
* **Workspace-Root Inline-Code Backtick Path Anchors (`워크스페이스 루트 기준 인라인 코드 백틱 경로`)**: Format `100%` of file and directory references inside conditional rules (`model_decision`, `glob`), skills, and repository ledgers (`/README.md`, `docs/*.md`) strictly as workspace-root inline code backticks (e.g., `` `/README.md` ``, `` `docs/ARCHITECTURE.md` ``, `` `src/core/contracts/ltmContracts.ts` ``).
* **Ban on Markdown Links & `file:///` URLs in Files (`파일 내 마크다운 링크 및 file:/// 금지`)**: Never use `[text](url)` or `file:///` links inside repository `.md` files.

---

## 3. Formatting, Frontmatter & Byte Budget Protocol (`포맷팅, 프론트매터 및 바이트 예산 규율`)

### 3.1 YAML Frontmatter & Progressive-Disclosure `description` (`프론트매터 및 점진적 노출 설명문`)
* Begin every `.agents/rules/**/*.md` file at Line `1` with `---`, `trigger: always_on | model_decision | glob` (plus `globs:` for `glob`), and a single-line quoted `description: "[What it governs] + [When to load/apply it]"`.
* Omit YAML frontmatter in `/GEMINI.md` and start directly with `# ETERNA LUMINARIS...`.

### 3.2 Heading & Numbering Discipline (`제목 및 번호 체계 규율`)
* Use one `ALL CAPS` H1 (`#`) per file, numbered `Title Case` H2s (`## 1. ...`) separated by `---` from `## 2.` onward, decimal H3s (`### 1.1 ...`), and `1`-based sequential lists without arbitrary code tags.

### 3.3 Full-File Atomic Write & Antigravity Rule Byte Caps (`전체 파일 원자적 덮어쓰기 및 24KB/60KB 예산 상한`)
* **Full Read & Atomic Overwrite (`전체 열람 후 원자적 덮어쓰기`)**: Always read rule files via `read_file` and write the complete file via `write_file` (`Overwrite: true`); never use `edit_file` on `.agents/rules/**/*.md`.
* **Rule-Only Byte Caps (`규칙 전용 24,000 B / 60,000 B 상한`)**: Maintain `/GEMINI.md` and every `.agents/rules/**/*.md` file at `<= 24,000 Bytes`, and maintain cumulative `Always-On` rules (`/GEMINI.md` + `APPEARANCE` + `INTERACTION` + `ENGINEERING_LAWS`) at `<= 60,000 Bytes`. Never apply rule byte caps to `src/`, `tests/`, or the `4` project ledgers (`/README.md`, `docs/*.md`).
