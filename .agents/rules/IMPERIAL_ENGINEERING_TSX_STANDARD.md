---
trigger: glob
description: "Enforces concrete TypeScript 7, React 19 (.tsx), Vite 8, and 4-Layer unidirectional architecture rules (Contracts -> Domain -> Hooks -> Surface). Load when inspecting, writing, refactoring, or verifying .ts, .tsx, tsconfig.json, vite.config.ts, or package.json."
globs: "**/*.tsx, **/*.ts, **/*.{ts,tsx}, /**/*.tsx, ../**/*.ts, ../**/*.{ts,tsx}, */**/*.{ts,tsx}, **/tsconfig*.json, **/vite.config.*, **/package.json"
---

# IMPERIAL ENGINEERING TSX & WEB PLATFORM STANDARD

## 1. File-Type & Layer Boundary Matrix (`파일 유형 및 4계층 경계 매트릭스`)

| Target Path Pattern | Architectural Role | Mandatory Constraints |
| :--- | :--- | :--- |
| **`package.json`** | Dependency & Script Manifest (`패키지·스크립트 매니페스트`) | Verify installed packages (`React 19`, `Vite 8`, `Tailwind v4`) before adding imports. |
| **`tsconfig.json`** | TypeScript `7` Compiler Gate (`정적 타입 컴파일러 게이트`) | Enforce `"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true`, `"noFallthroughCasesInSwitch": true`, and `"jsx": "react-jsx"`. |
| **`vite.config.ts`** | Vite `8` Bundler Config (`번들러 설정`) | Use native ESM `import.meta.dirname` and preserve `@` alias resolution (`path.resolve(import.meta.dirname, '.')`). |
| **`src/core/contracts/*.ts`** | **Layer 1**: Strict Type Contracts (`엄격 정적 계약 계층`) | Declare only `readonly` interfaces, literal unions, and discriminated unions (`0` runtime code, `0` external imports). |
| **`src/core/domain/*.ts`** | **Layer 2**: Pure Domain Engine (`순수 도메인 코어 계층`) | Pure deterministic functions (`< 1ms`); ban `react`, `DOM`, `node:sqlite`, `node:fs`, `Date.now()`, `Math.random()`, and `console.log`. |
| **`src/adapters/*.ts`**<br/>**`src/hooks/*.ts`** | **Layer 3**: Persistence, CLI & Hooks (`영속성·CLI·훅 어댑터 계층`) | Isolate `node:sqlite`, file I/O, timers, and `useReducer`/`useCallback` bindings; never compute synchronous derived state inside `useEffect`. |
| **`src/components/*.tsx`**<br/>**`src/App.tsx`** | **Layer 4**: Stateless React `19` Surface (`무상태 표면 렌더러 계층`) | Enforce `Props-In, Intent-Out` presentational components; ban raw domain math and multi-`useState` boolean soup. |

---

## 2. 4-Layer Implementation Rules (`4계층 구체 구현 수칙`)

### 2.1 Layer 1 & Layer 2 (`src/core/` 순수 도메인 규칙)
1. **Zero Untyped Escapes (`타입 우회 금지`)**: Never use `any`, `object`, `Function`, `@ts-ignore`, or `@ts-expect-error`.
2. **Discriminated Union State & Exhaustive Reducers (`판별 공용체 및 완전성 검증 리듀서`)**: Key state variants on literal `kind` / `type` properties and terminate every `switch (action.type)` with `default: { const _exhaustiveCheck: never = action; return _exhaustiveCheck; }`.
3. **Caller-Injected Non-Determinism (`외부 비결정성 주입`)**: Pass timestamps (`timestampIso`), IDs, and fetched records from `Layer 3` into `Layer 2` via action payloads.

### 2.2 Layer 3 & Layer 4 (`src/adapters/`, `src/hooks/`, `src/components/` 표면·어댑터 규칙)
1. **Resource & Effect Cleanup (`리소스 및 이펙트 결정론적 해제`)**: Always close SQLite connections (`try / finally`) and return cleanup callbacks from `useEffect` timers or listeners.
2. **Named Component Exports & Explicit Props (`기명 컴포넌트 및 명시적 Props 인터페이스`)**: Export components as named functions (`export function Name(...)`) with an explicit `export interface NameProps` above.
3. **Accessible & Stable JSX (`안정적 Key 및 접근성 준수`)**: Use domain IDs (`key={item.id}`) instead of array indices, set `type="button"` on non-submit buttons, and provide `aria-label` on icon-only controls.

---

## 3. Same-Turn Verification Gates (`동일 턴 3대 검증 게이트`)

Run and pass all `3` gates in the same turn whenever modifying TypeScript or configuration files:
1. **Typecheck Gate (`정적 타입 검증`)**: `npm run lint` (`tsc --noEmit` ➔ `0 Errors / 0 Warnings`).
2. **Test Symmetry Gate (`1:1 대칭 테스트 검증`)**: `npm test` (`100%` Green across `1:1` mirrored `tests/**/*` suites).
3. **Single-Chunk Ceiling Gate (`모듈 250줄 상한 검증`)**: Keep every `.ts` and `.tsx` file in `src/` strictly `<= 250 lines`.
