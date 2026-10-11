// ========================================================
// Exercise 00 - Part A: strictNullChecks & noImplicitAny
// ========================================================

// TODO: Fix this function.
// Right now it has implicit `any` parameters and doesn't handle null.
// Requirements:
//   - Takes a `name` (string) and optional `greeting` (string or undefined)
//   - Returns the full greeting string
//   - If greeting is not provided, default to "Hello"

export function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}

// ========================================================
// Part B: noUncheckedIndexedAccess
// ========================================================

// TODO: Fix this function.
// With noUncheckedIndexedAccess, array index access returns T | undefined.
// The function should safely get the first element or return a fallback.
// Requirements:
//   - Takes an array of strings and a fallback string
//   - Returns the first element if it exists, otherwise the fallback

export function firstOrDefault(items: string[], fallback: string): string {
  return items[0];
}

// ========================================================
// Part C: useUnknownInCatchVariables
// ========================================================

// TODO: Fix this function.
// With strict mode, catch variable `e` is `unknown`, not `any`.
// You must narrow it before accessing `.message`.
// Requirements:
//   - Calls the provided `fn` callback
//   - If it throws, return the error message (if it's an Error) or "Unknown error"
//   - If it succeeds, return "ok"

export function safeCall(fn: () => void): string {
  try {
    fn();
    return "ok";
  } catch (e) {
    return e.message;
  }
}

// ========================================================
// Part D: noImplicitReturns
// ========================================================

// TODO: Fix this function.
// With noImplicitReturns, every code path must return a value.
// Requirements:
//   - Takes a numeric score (0-100)
//   - Returns "A" for 90+, "B" for 80+, "C" for 70+, "F" otherwise

export function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  }
  // What about scores below 70?
}

// ========================================================
// Part E: noUnusedLocals & noUnusedParameters
// ========================================================

// TODO: Fix this function.
// It has unused variables and unused parameters. Clean it up.
// Requirements:
//   - Takes an array of numbers
//   - Returns the sum of all numbers
//   - Remove anything unused, or prefix unused params with _

export function sumArray(numbers: number[], label: string): number {
  const multiplier = 1;
  const debugMode = false;
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
