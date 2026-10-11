// ========================================================
// Exercise 00 - Config Knowledge Check
// ========================================================
// This file tests whether you understand what your tsconfig options DO.
// Each function must return the correct answer as a string.
// No looking up answers — think about what you learned.

// TODO: What does the "strict" flag actually enable?
// Return an array of the flag names (strings) that "strict: true" turns on.
// Return them in alphabetical order.
export function strictFlagExpansion(): string[] {
  return [
    // TODO: Fill in all the flags that strict: true enables
  ];
}

// TODO: What is the difference between `target` and `module`?
// Return an object with short descriptions.
export function targetVsModule(): { target: string; module: string } {
  return {
    target: "", // TODO: One sentence: what does `target` control?
    module: "", // TODO: One sentence: what does `module` control?
  };
}

// TODO: Why is `noUncheckedIndexedAccess` not part of `strict`?
// Return your answer as a string.
export function whyNotInStrict(): string {
  return ""; // TODO: Your explanation
}
