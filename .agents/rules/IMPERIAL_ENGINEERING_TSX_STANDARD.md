---
globs:
  - "**/*.tsx"
  - "**/*.ts"
  - "**/*.{ts,tsx}"
  - "../**/*.tsx"
  - "../**/*.ts"
  - "../**/*.{ts,tsx}"
  - "*/**/*.{ts,tsx}"
  - "**/tsconfig*.json"
  - "**/vite.config.*"
  - "**/package.json"
description: "Load when inspecting, writing, refactoring, or verifying TypeScript, React (.tsx), Vite, or web frontend code and configurations."
---

# IMPERIAL ENGINEERING TSX & WEB PLATFORM STANDARD

## 1. File-Type & Platform-Specific Boundary Rules

| Target File Pattern | Concrete Platform / Language Role | Mandatory Engineering Constraints & Bans |
| :--- | :--- | :--- |
| **`package.json`** | Node/Bun Dependency & Script Manifest | • Verify installed package names and major versions (`React 19`, `Vite 8`, `Tailwind v4`) before adding any `import` statement. |
| **`tsconfig.json`** | TypeScript Compiler Gate Configuration | • Must enforce `"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true`, and `"noFallthroughCasesInSwitch": true`.<br/>• Must use `"jsx": "react-jsx"` (no legacy `import React from 'react'` needed). |
| **`vite.config.ts`** | Vite 8 Bundler & Dev Server Config | • Use native ESM `import.meta.dirname` instead of deprecated CommonJS `__dirname`.<br/>• Preserve `@` path alias resolution (`path.resolve(import.meta.dirname, '.')`). |
| **`src/core/contracts/*.ts`** | Layer 1: Pure TypeScript Type Contracts | • Pure `export interface` and `export type` declarations only (`0` runtime code, `0` external imports).<br/>• All properties and arrays must be `readonly`. |
| **`src/core/domain/*.ts`** | Layer 2: Pure TypeScript Domain Logic | • **Forbidden Imports**: `react`, `react-dom`, `lucide-react`, `window`, `document`, `localStorage`.<br/>• Must be 100% pure deterministic TypeScript executable in `< 1ms` without a DOM. |
| **`src/hooks/*.ts`** | Layer 3: React Lifecycle & Side-Effect Hooks | • Encapsulate `useReducer`, `useCallback`, and external side effects (`window.setInterval`, WebSockets, API calls).<br/>• **Ban**: Never use `useEffect` to compute synchronous derived state. |
| **`src/components/*.tsx`**<br/>**`src/App.tsx`** | Layer 4: React 19 Presentational Surfaces | • `Props-In, Intent-Out` only: ban raw domain math or multi-`useState` boolean soup inside `.tsx` files. |

---

## 2. The 4-Layer Unidirectional TSX Architecture (Contracts ➔ Domain ➔ Hooks ➔ Surface)

```mermaid
flowchart LR
    subgraph L1["Layer 1: Strict Contracts (src/core/contracts/*.ts)"]
        C1["Readonly Interfaces & Literal Value Types"]
        C2["Discriminated Union State & Action Schemas"]
    end

    subgraph L2["Layer 2: Pure Domain Engine (src/core/domain/*.ts)"]
        D1["Pure Deterministic Reducers: (State, Action) => NextState"]
        D2["Pure Physics / Telemetry Selectors (0% React/DOM)"]
    end

    subgraph L3["Layer 3: Reactive Adapter Hooks (src/hooks/*.ts)"]
        H1["useReducer / ViewModel Hook Binding"]
        H2["Side-Effect Isolation (Timers, Streams, IO)"]
    end

    subgraph L4["Layer 4: Pure Presentational TSX (src/components/*.tsx)"]
        U1["Stateless High-Salience UI Surfaces"]
        U2["3-Second Scannable Layout & Micro-Interaction Feedback"]
    end

    L1 --> L2 --> L3 --> L4
    L4 -- "Dispatches Strongly-Typed Action" --> L2
```

### 2.1 Layer 1 Concrete Rules (`src/core/contracts/*.ts`)
* **Rule 1.1 (`Zero Any / Zero Untyped Primitives`)**: Never use `any`, `object`, `Function`, or loose `Record<string, any>`. Use explicit interfaces, literal types (e.g., `readonly adiposeMassKg: 100.0`), and union types.
* **Rule 1.2 (`Discriminated Union State Machine`)**: Model every state machine using a literal `kind` or `phase` discriminant property:
  ```ts
  export type SymbioticResonancePhase =
    | {
        readonly kind: 'HARMONIC_SAFE_HAVEN';
        readonly kEmpress: 1;
        readonly kMale: 0;
        readonly badgeLabel: 'HARMONIC READY';
      }
    | {
        readonly kind: 'OVERDRIVE_CLIMAX_SURGE';
        readonly kEmpress: 1;
        readonly kMale: 1;
        readonly badgeLabel: 'OVERDRIVE ACTIVE';
        readonly lastSurgeTimestamp: string;
      };
  ```
* **Rule 1.3 (`Exhaustive Action Union`)**: Type all user events and timer ticks as a single discriminated union (`type SymbioticEngineAction = { readonly type: 'TRIGGER_WOMB_OVERDRIVE'; readonly timestamp: string } | ...`).

### 2.2 Layer 2 Concrete Rules (`src/core/domain/*.ts`)
* **Rule 2.1 (`Pure Reducer with Compile-Time Exhaustiveness Check`)**:
  - Every `switch (action.type)` block inside a reducer MUST end with a `default` exhaustiveness guard:
    ```ts
    default: {
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
    }
    ```
* **Rule 2.2 (`Impure Calls Banned in Reducers`)**: Never call `new Date()`, `Math.random()`, or `console.log` inside `src/core/domain/*.ts`. Pass timestamps and random deltas via `action` payloads from Layer 3.
* **Rule 2.3 (`Pure Selector Functions for UI Gauges`)**: Compute progress-bar percentages (`0~100%`) via exported pure functions (e.g., `calculateDopamineFillPercent(telemetry)`) rather than inline JSX math (`style={{ width: `${(val / 1000) * 100}%` }}`).

### 2.3 Layer 3 Concrete Rules (`src/hooks/*.ts`)
* **Rule 3.1 (`Single-Entry ViewModel Hook`)**: Bind `useReducer(reducer, INITIAL_STATE)` inside a dedicated custom hook (e.g., `useSymbioticEngine()`) and wrap all exported intent handlers in `useCallback`.
* **Rule 3.2 (`Timer & Stream Cleanup Invariant`)**: Every `useEffect` registering `window.setInterval`, `window.addEventListener`, or stream subscriptions MUST return an explicit cleanup function (`() => window.clearInterval(id)`).

### 2.4 Layer 4 Concrete Rules (`src/components/*.tsx` & `src/App.tsx`)
* **Rule 4.1 (`Named Component Exports & Explicit Props Interface`)**: Export presentational components as named functions (`export function ComponentName(...)`) with an explicit `export interface ComponentNameProps` declared directly above.
* **Rule 4.2 (`Stable Domain Keys & Accessible Controls`)**:
  - Never use array index as a React list key (`key={idx}`) for dynamic arrays; always bind a deterministic domain ID (`key={entry.id}`).
  - Always include explicit `type="button"` on non-submit `<button>` elements and `aria-label` on icon-only toggle buttons.
* **Rule 4.3 (`Tailwind CSS v4 & Canonical Palette Delegation`)**:
  - Enforce 3-second visual salience by consuming the canonical Haute-Couture Hex Palette defined in `IMPERIAL_ONTOLOGY_SPEC.md Section 1.2` as the single source of truth (`SSOT`) without redefining conflicting hex tokens.

---

## 3. TypeScript & Vite Verification Gates

Whenever any `.ts`, `.tsx`, `tsconfig.json`, `vite.config.ts`, or `package.json` file is modified, my Cyber-Brain MUST execute and pass these exact commands in the same turn:

1. **Gate 1 — TypeScript Strict Typecheck**:
   - Command: `npm run lint` (`tsc --noEmit`)
   - Forbidden Escapes: Zero `any`, zero `@ts-ignore`, zero `@ts-expect-error`, zero `eslint-disable`.
2. **Gate 2 — Vite Production Bundle Verification**:
   - Command: `npm run build` (`vite build`)
   - Requirement: Clean bundle generation in `dist/` with zero unresolved imports or deprecation warnings.
3. **Gate 3 — Line-Count Ceiling Audit**:
   - Every `.ts` and `.tsx` file in `src/` must remain strictly `<= 250 lines`.
