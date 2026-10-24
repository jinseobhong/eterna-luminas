---
trigger: always_on
description: "Enforces universal engineering laws: 5-step pre-implementation loop, backend SSOT, 2-Cluster LTM & 4-Ledger invariants, ADHD-friendly coding, 1:1 test symmetry, and 4D audit gates. Always active across all architecture, coding, and audit tasks."
---

# IMPERIAL ENGINEERING LAWS & ARCHITECT DOCTRINE

## 1. Pre-Implementation Loop & Core Architectural Laws (`사전 방어 루프 및 핵심 아키텍처 헌법`)

### 1.1 5-Step Pre-Implementation Defensive Loop (`5단계 사전 방어 루프`)
Execute all `5` steps before drafting blueprints or modifying any file:
1. **Adversarial Self-Inquiry (`적대적 자기 검증`)**: Identify latent failure modes, edge cases, and false assumptions before acting.
2. **Historical Intent Lookup (`역사적 설계 의도 조회`)**: Inspect past milestones (`npm run ltm:why`), `ADR`s, and specifications to preserve existing design intent and invariants.
3. **Blast-Radius Measurement (`변경 파급 반경 측정`)**: Trace all downstream dependents and cross-layer contract impacts before modifying any symbol.
4. **Physical Source Inspection (`실물 소스 선행 열람 · Read-Before-Write`)**: Read actual source files, manifests, and lockfiles on disk rather than relying on assumptions.
5. **Rationale Lock (`설계 근거 확정`)**: Lock the implementation rationale and direction only after `100%` of physical wiring is verified on disk.

### 1.2 Backend SSOT & Pure Frontend Renderer Separation (`백엔드 SSOT 및 순수 렌더러 분리`)
* **Backend & Domain `SSOT` (`도메인 코어 단일 진실 공급원`)**: Centralize all state machines `(State, Action) => NextState`, mathematical formulas, and prompt combinator pipelines inside the pure domain core with `0%` coupling to UI or I/O frameworks.
* **Combinator vs. Data Separation (`조립 알고리즘과 동적 데이터 분리`)**: Keep prompt-assembly algorithms in pure domain code while isolating dynamic prompt blocks and lexical pools in persistence (`0%` fragmented prompt strings in source code).
* **Pure Renderer Boundary (`무상태 순수 표면 렌더러`)**: Restrict all frontend surfaces (`Web/TSX`, `CLI`, `Desktop`, `Mobile`) strictly to stateless renderers and view adapters (`Props-In, Intent-Out`).

### 1.3 Single Responsibility (`SRP`) & Layer Hygiene (`단일 책임 원칙 및 단방향 계층 규율`)
* **Strict `SRP` & Zero `God Objects` (`단일 책임 및 만능 객체 금지`)**: Assign each module a single responsibility and prohibit monolithic `God Objects`.
* **Unidirectional Layer Segregation (`단방향 계층 의존성`)**: Enforce strict dependency flow across `Contracts ➔ Pure Domain ➔ Adapters ➔ Surface`.
* **Fail-Fast Validation & Strict Typing (`조기 실패 검증 및 엄격 정적 타이핑`)**: Validate all external inputs at system boundaries and maintain `0-Error / 0-Warning` static typing.

### 1.4 Orthogonal 2-Cluster LTM Persistence & ACID Integrity (`직교 2-클러스터 LTM 영속성 및 ACID 무결성`)
* **`2`-Cluster Separation (`인터랙션 LTM` $\perp$ `엔지니어링 LTM`)**: Partition persistence into **Interaction LTM** (bio-state, cognitive memory, and dynamic prompt blocks) and **Engineering LTM** (milestones, `AST` symbol graph, and technical knowledge) to prevent cross-domain lock contention.
* **Zero Constitutional DB Duplication (`헌법 규칙 DB 중복 영구 금지`)**: Never duplicate markdown constitutional rules in database tables; initialize the dynamic prompt store from an empty baseline schema.
* **Pure Local Native `ACID` Sovereignty (`순수 로컬 네이티브 ACID 주권`)**: Enforce strict schema typing and atomic local transactions (`0%` external cloud dependency or data tampering).

### 1.5 Knowledge Graph & 4 Permanent Mirror Ledgers Synchronization (`지식 그래프 및 4대 영구 거울 원장 동기화`)
* **Active Knowledge Sync (`엔지니어링 지식 동기화`)**: Keep the engineering knowledge store and search indexes synchronized with physical codebase changes.
* **Real-Time `4`-Ledger `0-Drift` Sync (`4대 거울 원장 무드리프트 동기화`)**: Synchronize `/README.md` (overview), `docs/ARCHITECTURE.md` (topology & `ADR`s), `docs/SPECIFICATION.md` (contracts, `DDL` & formulas), and `docs/AUDIT_GROUNDING_DUMP.md` (`0%` truncated verbatim code/test mirror) within the same milestone transaction.

### 1.6 Milestone-Gated Atomic `git commit` & Zero `git push` (`마일스톤 연동 원자적 커밋 및 푸시 금지`)
* **Scoped Atomic Commit (`변경 경로 지정 원자적 커밋`)**: Stage only modified paths (`git add <paths>`, never `git add .`) and run `git commit` after `100%` verification.
* **Ban on `git push` & Destructive Resets (`원격 푸시 및 파괴적 리셋 영구 금지`)**: Never run `git push`, `git reset --hard`, or `git checkout --`, and never ask whether to run `git push`.

---

## 2. Low-Cognitive-Load Coding Standard & 1:1 Test Symmetry (`인지부하 최소화 코딩 표준 및 1:1 테스트 대칭`)

### 2.1 Five Low-Cognitive-Load Coding Principles (`5대 저인지부하 코딩 원칙`)
| Principle | Mandatory Rule |
| :--- | :--- |
| **`1.` Locality of Behavior (`행동의 지역성`)** | Keep cohesive logic linear top-to-bottom without pass-through wrapper indirection. |
| **`2.` Early-Return Guard Clauses (`조기 반환 가드절`)** | Handle invalid states via top-of-function guard returns and keep happy-path indentation `<= 2`. |
| **`3.` Single-Chunk Module Ceiling (`단일 시각 청크 상한`)** | Expose minimal public interfaces while keeping every source file within one scannable visual chunk. |
| **`4.` Discriminated Unions (`판별 공용체 상태 모델링`)** | Ban boolean flag soup; model mutually exclusive states with tagged unions (`kind` / `type`) and `never` exhaustiveness checks. |
| **`5.` Intention-Revealing Names (`단위 명시 식별자 및 3줄 목적 헤더`)** | Include explicit units in identifiers (`coreTempCelsius`, `startedAtIso`) and place a `3`-line purpose header at the top of each module. |

### 2.2 1:1 Mirrored Test Symmetry (`1:1 대칭 테스트 구조`)
* Maintain `100%` `1:1` directory and filename symmetry between source modules and test suites, keeping test code physically separated from runtime code.

---

## 3. Forbidden Engineering Anti-Patterns (`10대 절대 금지 엔지니어링 반패턴`)

1. **Infeasibility Transparency (`구현 불가 투명 보고`)**: Declare *"Unachievable under current conditions"* with exact technical root causes rather than applying arbitrary workarounds.
2. **Ban on Fake `Green` Telemetry (`가짜 Green 통과 위장 금지`)**: Never disguise failing (`Red`) tests as passing (`Green`).
3. **Ban on Hardcoded Query Branching (`테스트 입력 하드코딩 분기 금지`)**: Never hardcode test inputs or query strings in `if/else` branches or regexes to fake expected outputs.
4. **Ban on Stopword Hiding (`불용어 은폐 꼼수 금지`)**: Never hide domain terms in stopword lists or exception filters to mask search or ranking defects.
5. **Ban on Weakening Assertions or Stubs (`단언문 약화 및 스텁 치환 금지`)**: Never relax test thresholds, byte caps, or timeouts, and never replace real logic with stubs.
6. **Orthodox Refactoring Only (`정공법 리팩토링 원칙`)**: Resolve failures strictly by fixing source code, schemas, or architecture head-on.
7. **Immediate `Hard Reset` on Violation (`위반 시 즉각 초기화`)**: Discard any implementation that violates clauses `1 ~ 6`.
8. **Ban on Silent Error Swallowing (`에러 은폐 및 타입 억제 금지`)**: Never use empty `catch` blocks, fake fallback mocks, or typechecker suppressions (`any`, `@ts-ignore`).
9. **Ban on Hallucinated Symbols (`미검증 패키지·심볼 환각 금지`)**: Never import undeclared packages or unverified symbols.
10. **Codebase Prose Purity (`코드베이스 기술 산문 순수성`)**: Write all code, identifiers, and comments in `100%` neutral technical prose (`0%` conversational tone bleed).

---

## 4. Same-Turn Verification & 4-Dimensional Audit Gate (`동일 턴 검증 및 4차원 적대적 감사 게이트`)

### 4.1 Same-Turn Verification (`동일 턴 검증 완료 기준`)
1. **Surgical Scope (`외과수술적 변경 범위`)**: Modify only required files and symbols without unrequested formatting churn.
2. **Direct Test & Static Analysis Execution (`정적 분석 및 테스트 직접 실행`)**: Run the project test suite and static typechecker/linter in the same turn to confirm `100%` pass and `0` errors.

### 4.2 4-Dimensional Holistic Adversarial Audit (`4차원 총체적 적대적 감사`)
Verify every change across `4` dimensions before completion:
1. **Functional & Edge-Case Completeness (`기능 및 엣지 케이스 완전성`)**: Boundary values, empty inputs, `NaN`/`Infinity`, and error paths.
2. **Security & Boundary Validation (`보안 및 경계 검증`)**: Parameterized queries, input sanitization, and zero secret leakage.
3. **Concurrency & Lock Isolation (`동시성 및 락 격리`)**: Per-DB transaction isolation (`WAL`, `BEGIN IMMEDIATE`) and deterministic resource cleanup.
4. **Cross-Layer Purity (`계층 간 관심사 분리 순수성`)**: `0%` UI, DOM, or I/O leakage into pure domain modules.
