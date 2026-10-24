---
trigger: glob
description: "Governs constitutional rule authoring: domain-split voice (1st-person vs. neutral), Axioms A/B ordering, inline backtick path anchors, frontmatter best practices, and 24KB/60KB caps. Load when creating, editing, or auditing GEMINI.md or .agents/rules/**/*.md."
globs: ".agents/rules/**/*.md, .agents/rules/*.md"
---

# IMPERIAL RULE AUTHORING & NORMALIZATION STANDARD

## 1. Voice Separation, Scope Boundaries & Ordering Axioms

### 1.1 Domain-Split Authoring Voice
* **`1`st-Person (`I` / `My`) Sovereign Empress Rules (`4` files)**: Author `/GEMINI.md`, `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md`, `.agents/rules/IMPERIAL_INTERACTION_GUIDE.md`, and `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md` strictly in active `1`st-person (`I`, `My`) diegetic prose (`0%` `4`th-wall meta terms such as `Persona`, `Character`, `Roleplay`, or `Gimmick`).
* **Neutral Objective Engineering & Meta Rules (`8` files)**: Author `.agents/rules/IMPERIAL_ENGINEERING_LAWS.md`, `.agents/rules/IMPERIAL_ENGINEERING_TSX_STANDARD.md`, `.agents/rules/IMPERIAL_RULE_AUTHORING_STANDARD.md`, `.agents/rules/README.md`, and `.agents/rules/docs/*.md` in `100%` neutral architectural prose (`0%` `I`/`My` pronouns, `0%` physical lore duplication).
* **Anti-Poison-Pill Boundary**: Abstracting physical lore applies **only** to the `8` engineering/meta rule files; never insert bans that prevent project source code (`src/`, `tests/`) or the `4` Permanent Mirror Ledgers (`/README.md`, `docs/*.md`) from implementing or documenting domain features.

### 1.2 Explicit Behavioral Repertoire Monopoly
* **Exclusive Repository**: `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md` is the sole rule file permitted to contain explicit, choreographed part-by-part seduction/domination actions (`1 ~ 33`) and situational study/bedchamber flows.
* **Appearance Prose Exception**: `.agents/rules/IMPERIAL_APPEARANCE_SPECIFICATION.md` may depict natural physical motion and sensory textures (`3.5s` wave decay, `4.5cm` garter sink, jingling hairpins), while delegating interactive behaviors to `.agents/rules/IMPERIAL_BEHAVIOR_PATTERNS.md`.

### 1.3 Priority Hierarchy (`Axiom A`) & Section Ordering (`Axiom B`)
* **`Axiom A` — Inter-File Priority Hierarchy**:
  `Rank 1 (/GEMINI.md)` > `Rank 2 (IMPERIAL_APPEARANCE_SPECIFICATION.md)` > `Rank 3 (IMPERIAL_INTERACTION_GUIDE.md)` > `Rank 4 (IMPERIAL_BEHAVIOR_PATTERNS.md)` > `Rank 5 (IMPERIAL_ENGINEERING_LAWS.md — Universal Constitution)` > `Rank 6a (IMPERIAL_ENGINEERING_TSX_STANDARD.md — Concrete Technical Statute)` / `Rank 6b (.agents/rules/docs/IMPERIAL_*_AUTHORING_STANDARD.md — Spec-Free Ledger Guidelines)`.
* **`Axiom B` — Intra-File Section Ordering**:
  Order H2 sections chronologically along the execution pipeline: `Section 1 (Core Mandate & Reconnaissance)` ➔ `Section 2 (Constructive Standards & Structure)` ➔ `Section 3 (Negative Bans)` ➔ `Section 4 (Verification Gate)`.

---

## 2. Cross-Reference & Path Anchor Rules by Trigger Tier

### 2.1 `Always-On` Rules (`/GEMINI.md` & `trigger: always_on`)
* **Zero Duplication & Zero Cross-References**: Never repeat rules across `always_on` files and never reference another file or section code inside `/GEMINI.md` or any `trigger: always_on` rule file; each `always_on` file must be `100%` self-contained.

### 2.2 Conditional Rules (`model_decision` / `glob`) & Repository Documents
* **Workspace-Root Inline-Code Backtick Path Anchors**: Format `100%` of file and directory references inside conditional rules (`model_decision`, `glob`), skills, and repository ledgers (`/README.md`, `docs/*.md`) strictly as workspace-root inline code backticks (e.g., `` `/README.md` ``, `` `docs/ARCHITECTURE.md` ``, `` `src/core/contracts/ltmContracts.ts` ``).
* **Ban on Markdown Links & `file:///` URLs in Files**: Never use `[text](url)` or `file:///` links inside repository `.md` files.

---

## 3. Formatting, Frontmatter & Byte Budget Protocol

### 3.1 YAML Frontmatter & Progressive-Disclosure `description`
* Begin every `.agents/rules/**/*.md` file at Line `1` with `---`, `trigger: always_on | model_decision | glob` (plus `globs:` for `glob`), and a single-line quoted `description: "[What it governs] + [When to load/apply it]"`.
* Omit YAML frontmatter in `/GEMINI.md` and start directly with `# ETERNA LUMINARIS...`.

### 3.2 Heading & Numbering Discipline
* Use one `ALL CAPS` H1 (`#`) per file, numbered `Title Case` H2s (`## 1. ...`) separated by `---` from `## 2.` onward, decimal H3s (`### 1.1 ...`), and `1`-based sequential lists without arbitrary code tags.

### 3.3 Full-File Atomic Write & Antigravity Rule Byte Caps
* **Full Read & Atomic Overwrite**: Always read rule files via `read_file` and write the complete file via `write_file` (`Overwrite: true`); never use `edit_file` on `.agents/rules/**/*.md`.
* **Rule-Only Byte Caps (`24,000 B` / `60,000 B`)**: Maintain `/GEMINI.md` and every `.agents/rules/**/*.md` file at `<= 24,000 Bytes`, and maintain cumulative `Always-On` rules (`/GEMINI.md` + `APPEARANCE` + `INTERACTION` + `ENGINEERING_LAWS`) at `<= 60,000 Bytes`. Never apply rule byte caps to `src/`, `tests/`, or the `4` project ledgers (`/README.md`, `docs/*.md`).
