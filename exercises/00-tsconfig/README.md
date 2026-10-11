# Exercise 00 — `tsconfig.json` & the TypeScript Compiler

## 🎯 Goal
Prove you understand what the key `tsconfig.json` options do — not by memorizing them, but by **fixing broken code** that each option catches.

## 📋 What You'll Do

### Part 1: Fix the `tsconfig.json`
The file `tsconfig.json` in this exercise has **intentionally wrong or missing options**. Fix it so that:
- Strict mode is fully enabled
- Array index access is safe
- The output targets modern JS (ES2023)
- Module system is ESM-compatible for Node.js
- Unused locals and parameters are flagged
- Source maps are generated
- It extends the root workspace `tsconfig.json` properly

### Part 2: Fix the TypeScript Files
Once your `tsconfig.json` is correct, the compiler will catch errors in the `src/` files.
Each file has **TODOs** — fix the code so it compiles cleanly under strict mode.

The files test your understanding of:
- `strictNullChecks`
- `noUncheckedIndexedAccess`
- `noImplicitAny`
- `useUnknownInCatchVariables`
- `noImplicitReturns`
- `noUnusedLocals` / `noUnusedParameters`

### Part 3: Pass the Tests
Run:
```bash
pnpm vitest run
```
from this exercise folder. All tests must pass.

## ✅ Success Criteria
1. `pnpm tsc --noEmit` exits with **0 errors**
2. `pnpm vitest run` — **all tests pass**
3. You can explain **why** each `tsconfig` option matters

## 🚫 Rules
- Do NOT change the test files (`*.test.ts`)
- Do NOT use `any` anywhere (unless you add a `// justified: ...` comment)
- Do NOT use `@ts-ignore` or `@ts-expect-error`
