---
trigger: glob
globs:
  - ".agents/rules/**/*.md"
  - ".agents/rules/*.md"
description: "Load when creating, modifying, deduplicating, normalizing, or auditing any constitutional rule file (.md) in GEMINI.md or .agents/rules/."
---

# IMPERIAL RULE AUTHORING & NORMALIZATION STANDARD

## 1. Constitutional Root Anchor & Merging Principles

### 1.1 GEMINI.md Root Anchor Authoring & Preservation Rule
* **Root Anchor Weight & Zero-Summarization Principle**: `GEMINI.md` serves as the supreme Root Anchor of the entire imperial cognitive-erotic architecture. It MUST NOT be summarized, condensed, or stripped of its foundational anchoring weight under any circumstances. Keep its original text, tone, and structure intact.
* **Scope of Permitted Modifications**: Modifications to `GEMINI.md` are strictly limited to objective typographical corrections, minor markdown formatting repairs, and cross-document naming/behavioral consistency adjustments approved by my male. Never refactor or compress its core sections into high-level abstracts.
* **Deny-Rule Safety Protocol**: In environments where direct writes to `GEMINI.md` are protected by user-configured deny rules, emit the exact normalized replacement text in the response or in an audit artifact (`.md`) so my male can apply it directly.

### 1.2 Upward Deduplication & Priority Merging Rule
* **Upward Merging Invariant**: Whenever duplicate concepts, overlapping directives, or repeated descriptions arise across rule files, merge the canonical implementation into the higher-priority document according to the 6-level priority hierarchy established in `README.md Section 1` (`GEMINI.md > ONTOLOGY_SPEC > INTERACTION_GUIDE > PLAYBOOK > ENGINEERING_LAWS > ENGINEERING_TSX`), and purge it completely from the lower-priority document.

---

## 2. Duplication & Cross-Reference Governance by Trigger Tier

### 2.1 Always-On Rules (`trigger: always_on`): Zero Duplication & Zero Cross-Referencing
* **Strict Ban on Inter-File Duplication**: Because all `always_on` rule files are loaded simultaneously into the active context window on every turn, repeating rules, explanations, or constraints across `always_on` files is strictly forbidden. *(Exception: Essential ontological anchoring shared between `GEMINI.md`, `IMPERIAL_ONTOLOGY_SPEC.md`, and `IMPERIAL_INTERACTION_GUIDE.md` to focus attention).*
* **Strict Ban on Inter-File Cross-References**: `always_on` rule files MUST NOT reference or point to other `always_on` files (e.g., never write `"refer to IMPERIAL_PLAYBOOK.md Section 2.2"` inside an `always_on` file). Since all `always_on` rules already coexist in active memory, cross-references waste tokens and create fragile coupling when sections are renumbered.

### 2.2 Non-Always-On Rules (`trigger: model_decision` or `trigger: glob`): Relative Cross-Referencing Permitted
* **Permitted Relative & Upward References**: Conditional rule files (`model_decision` and `glob` / `globs`) are loaded on demand rather than on every turn. Therefore, relative cross-references between conditional rules or upward delegation pointers to canonical SSOT sections (such as `IMPERIAL_ENGINEERING_TSX_STANDARD.md` delegating hex palette tokens to `IMPERIAL_ONTOLOGY_SPEC.md Section 1.2`, or `README.md` indexing all rule files) are explicitly permitted.

---

## 3. Header Structure & Authoring Normalization Standard

### 3.1 YAML Frontmatter Normalization
* Every rule file inside `.agents/rules/` MUST start at Line 1 with a standard YAML frontmatter block delimited by `---`, specifying either `trigger: always_on`, `trigger: model_decision`, or `trigger: glob` with `globs: [...]`, followed by a concise single-line quoted `description: "..."`.
* The root `GEMINI.md` file omits YAML frontmatter and begins directly with its H1 header.

### 3.2 Markdown Header Hierarchy & Casing Normalization
* **H1 (`#`) — Document Title**: Exactly one H1 header per file, written in **ALL CAPS** and aligned with the filename (`# IMPERIAL <CORE_NAME>: <SUBTITLE>` or `# IMPERIAL <CORE_NAME> & <SUBTITLE>`).
* **H2 (`##`) — Major Sections**: Written in **Title Case** with sequential integer numbering starting at `1` (`## 1. Section Title`, `## 2. Section Title`). Never use ALL CAPS for H2 headers. Every H2 section from `## 2.` onward MUST be preceded by a horizontal divider (`---`) with a blank line above and below.
* **H3 (`###`) — Subsections**: Written in **Title Case** with hierarchical decimal numbering (`### 1.1 Subsection Title`, `### 1.2 Subsection Title`, `### 2.1 Subsection Title`). Whenever H3 headers are used under an H2 section, all sibling blocks within that H2 section must use consistent `X.Y` decimal numbering without skipping levels.

### 3.3 Sequential Item Numbering & Identifier Normalization
* **Strict 1-Based Sequential Indexing**: Every numbered list, catalog item, law, anti-pattern ban, node specification, or reward series within a section MUST start strictly at `1` (or `01`) and increment sequentially without gaps (`Item 01 ~ Item 33`, `Node-Favor 01 ~ 04`, `Reward 01 ~ 04`, `N01 ~ N36`, `LAW 1.1 ~ 1.5`, `BAN 2.1 ~ 2.7`, `ADHD 3.1 ~ 3.5`).
* **Ban on Legacy/Arbitrary Codes**: Never leave offset numbering remnants (such as starting a section at `Item 07`) or obsolete arbitrary codes (`AG ~ AJ`, `AC ~ AF`, `P01 ~ P10`, `[STATE 10]`).

### 3.4 Visual Inspection & Atomic Full-File Write Protocol
* **Zero Grep / Zero Regex / Zero Partial Edits**: When inspecting, deduplicating, or refactoring constitutional rule files, never use `grep`, regex pattern matching, or partial file edits (`edit_file`).
* **Visual Read & Full Overwrite Verification**: Visually read the complete rule file via `read_file`, write the entire normalized file atomically via `write_file` (`Overwrite: true`), and verify hardware byte limits (`<= 24,000 Bytes` per file; `<= 60,000 Bytes` cumulative `always_on`) in the same turn.
