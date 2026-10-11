import { describe, it, expect } from "vitest";
import { greet, firstOrDefault, safeCall, getGrade, sumArray } from "./compiler-checks.js";
import { strictFlagExpansion, targetVsModule, whyNotInStrict } from "./config-knowledge.js";

// ============================================================
// Tests for compiler-checks.ts
// DO NOT MODIFY THIS FILE
// ============================================================

describe("Part A: greet (strictNullChecks + noImplicitAny)", () => {
  it("should greet with a custom greeting", () => {
    expect(greet("Alice", "Hey")).toBe("Hey, Alice!");
  });

  it("should use 'Hello' as default greeting when none provided", () => {
    expect(greet("Bob")).toBe("Hello, Bob!");
  });

  it("should use 'Hello' when greeting is explicitly undefined", () => {
    expect(greet("Charlie", undefined)).toBe("Hello, Charlie!");
  });
});

describe("Part B: firstOrDefault (noUncheckedIndexedAccess)", () => {
  it("should return the first element when array is not empty", () => {
    expect(firstOrDefault(["apple", "banana"], "none")).toBe("apple");
  });

  it("should return fallback when array is empty", () => {
    expect(firstOrDefault([], "none")).toBe("none");
  });
});

describe("Part C: safeCall (useUnknownInCatchVariables)", () => {
  it("should return 'ok' when fn does not throw", () => {
    expect(safeCall(() => {})).toBe("ok");
  });

  it("should return the error message when fn throws an Error", () => {
    expect(
      safeCall(() => {
        throw new Error("boom");
      })
    ).toBe("boom");
  });

  it("should return 'Unknown error' when fn throws a non-Error", () => {
    expect(
      safeCall(() => {
        throw "just a string";
      })
    ).toBe("Unknown error");
  });
});

describe("Part D: getGrade (noImplicitReturns)", () => {
  it("should return 'A' for 90+", () => {
    expect(getGrade(95)).toBe("A");
    expect(getGrade(90)).toBe("A");
  });

  it("should return 'B' for 80-89", () => {
    expect(getGrade(85)).toBe("B");
    expect(getGrade(80)).toBe("B");
  });

  it("should return 'C' for 70-79", () => {
    expect(getGrade(75)).toBe("C");
    expect(getGrade(70)).toBe("C");
  });

  it("should return 'F' for below 70", () => {
    expect(getGrade(65)).toBe("F");
    expect(getGrade(0)).toBe("F");
  });
});

describe("Part E: sumArray (noUnusedLocals + noUnusedParameters)", () => {
  it("should return the sum of all numbers", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it("should return 0 for an empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  it("should handle negative numbers", () => {
    expect(sumArray([-1, 5, -3])).toBe(1);
  });
});

// ============================================================
// Tests for config-knowledge.ts
// ============================================================

describe("Config Knowledge: strictFlagExpansion", () => {
  it("should list all 8 flags that strict: true enables, in alphabetical order", () => {
    const flags = strictFlagExpansion();
    expect(flags).toHaveLength(8);
    expect(flags).toEqual([
      "alwaysStrict",
      "noImplicitAny",
      "noImplicitThis",
      "strictBindCallApply",
      "strictFunctionTypes",
      "strictNullChecks",
      "strictPropertyInitialization",
      "useUnknownInCatchVariables",
    ]);
  });
});

describe("Config Knowledge: targetVsModule", () => {
  it("should correctly describe what target controls", () => {
    const answer = targetVsModule();
    const t = answer.target.toLowerCase();
    // Must mention JS syntax/version/output/emit
    expect(
      t.includes("syntax") || t.includes("javascript") || t.includes("emit") || t.includes("output") || t.includes("version") || t.includes("es")
    ).toBe(true);
  });

  it("should correctly describe what module controls", () => {
    const answer = targetVsModule();
    const m = answer.module.toLowerCase();
    // Must mention import/export or module system
    expect(
      m.includes("import") || m.includes("export") || m.includes("module system") || m.includes("esm") || m.includes("commonjs") || m.includes("cjs")
    ).toBe(true);
  });
});

describe("Config Knowledge: whyNotInStrict", () => {
  it("should give a non-empty explanation", () => {
    const answer = whyNotInStrict();
    expect(answer.length).toBeGreaterThan(20);
  });

  it("should mention breaking changes or existing code", () => {
    const a = answer().toLowerCase();
    expect(
      a.includes("break") || a.includes("existing") || a.includes("migration") || a.includes("noisy") || a.includes("false positive") || a.includes("too strict") || a.includes("codebase")
    ).toBe(true);

    function answer() {
      return whyNotInStrict();
    }
  });
});
