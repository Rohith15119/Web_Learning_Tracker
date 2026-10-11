// ============================================================
// Full-Stack TypeScript Mastery — Complete Roadmap Data
// Single source of truth for both ROADMAP.md and the tracker app
// Structured for a 24-Week Timeline (4-5 hrs/day)
// Anchored in Collab-Code & Smart City Issue Reporting projects
// ============================================================

export type Importance = "critical" | "important" | "good-to-know";

export interface SubTopic {
  id: string;
  title: string;
  importance: Importance;
}

export interface Topic {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  emoji: string;
  description: string;
  weeks?: string;
  outcomes?: string[];
  projectContext?: string;
  topics: Topic[];
  gate: string;
  miniBuild: string;
}

export const roadmap: Phase[] = [
  // ============================================================
  // PHASE 0 — TypeScript Core & Developer Workflow
  // ============================================================
  {
    id: "phase-0",
    number: 0,
    title: "TypeScript Core & Developer Workflow",
    emoji: "🔷",
    description:
      "The language and tooling everything else is built on. Master strict TypeScript 5.x typing, advanced type mechanics, module resolution, and professional Git collaboration workflows.",
    weeks: "Weeks 1–2 (24-Week Plan)",
    outcomes: [
      "Configure strict tsconfig compiler settings (noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax) with zero implicit any",
      "Model complex domain entities using discriminated unions, generics, mapped types, variance, and satisfies",
      "Validate untrusted input at runtime boundaries while maintaining compile-time type safety",
      "Execute professional Git branching, interactive rebasing, merge conflict resolution, and atomic PR reviews",
      "Job-Readiness Cadence (Weeks 1–2): Practice 15-minute daily verbal 'explain-back' drills on TS narrowing & structural typing; audit Git commit history of Collab-Code and Smart City repos",
    ],
    projectContext:
      "Collab-Code & Smart City: Define shared TypeScript domain models (Document, EditOperation, IssueReport, UserRole), eliminate any/unsafe casts in existing project files, and establish clean Git branching & PR hygiene.",
    gate: "Explain (Verbal 2-min drill): tsc pipeline, structural vs nominal typing, and variance | Implement: Generic type-safe event emitter with overloaded signatures | Debug: Resolve a 3-way Git merge conflict & type-widening bug | Apply: Refactor Collab-Code & Smart City shared types using discriminated unions and satisfies.",
    miniBuild: "Type-Safe In-Memory Event Emitter with generic event maps, runtime boundary validation, and clean Git feature-branch workflow.",
    topics: [
      {
        id: "0-1",
        title: "tsconfig.json & Compiler Deep-Dive",
        subtopics: [
          { id: "0-1-1", title: "What tsc does: parse → bind → type-check → emit pipeline", importance: "critical" },
          { id: "0-1-2", title: "strict mode and the core strictness flags it enables (strictNullChecks, noImplicitAny, strictFunctionTypes)", importance: "critical" },
          { id: "0-1-3", title: "target vs module vs moduleResolution (node16, nodenext, bundler)", importance: "critical" },
          { id: "0-1-4", title: "Strict compiler safeguards: noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax, noImplicitReturns", importance: "critical" },
          { id: "0-1-5", title: "rootDir, outDir, include, exclude, extends", importance: "important" },
          { id: "0-1-6", title: "sourceMap, declaration (.d.ts), declarationMap", importance: "good-to-know" },
          { id: "0-1-7", title: "isolatedModules and why single-file transpilers (esbuild/Vite/SWC) require it", importance: "important" },
        ],
      },
      {
        id: "0-2",
        title: "Primitives, Unions, Intersections & Literal Types",
        subtopics: [
          { id: "0-2-1", title: "string, number, boolean, null, undefined, symbol, bigint", importance: "critical" },
          { id: "0-2-2", title: "Literal types and type widening vs narrowing", importance: "critical" },
          { id: "0-2-3", title: "Union types (A | B) — modeling mutually exclusive states", importance: "critical" },
          { id: "0-2-4", title: "Intersection types (A & B) — combining structural contracts", importance: "important" },
          { id: "0-2-5", title: "Type aliases vs inline types", importance: "important" },
          { id: "0-2-6", title: "const assertions (as const) for deep readonly literal inference", importance: "important" },
        ],
      },
      {
        id: "0-3",
        title: "Type Narrowing & Type Guards",
        subtopics: [
          { id: "0-3-1", title: "typeof narrowing and typeof null pitfalls", importance: "critical" },
          { id: "0-3-2", title: "instanceof narrowing for class and Error instances", importance: "important" },
          { id: "0-3-3", title: "in operator property narrowing", importance: "important" },
          { id: "0-3-4", title: "Discriminated unions (tagged unions) for state machines and API responses", importance: "critical" },
          { id: "0-3-5", title: "Custom type guard functions (param is Type predicate)", importance: "important" },
          { id: "0-3-6", title: "Truthiness narrowing pitfalls (0, '', NaN)", importance: "important" },
          { id: "0-3-7", title: "Assertion functions (asserts condition)", importance: "good-to-know" },
        ],
      },
      {
        id: "0-4",
        title: "Functions: Generics, Overloads, Infer",
        subtopics: [
          { id: "0-4-1", title: "Generic functions: <T>, type constraints (extends), and multiple type parameters", importance: "critical" },
          { id: "0-4-2", title: "Generic parameter defaults: <T = unknown>", importance: "good-to-know" },
          { id: "0-4-3", title: "Function overloads: call signatures vs implementation signatures", importance: "important" },
          { id: "0-4-4", title: "Rest parameters and variadic tuple types", importance: "good-to-know" },
          { id: "0-4-5", title: "The infer keyword in conditional types", importance: "important" },
          { id: "0-4-6", title: "Typing higher-order functions and asynchronous callbacks", importance: "critical" },
          { id: "0-4-7", title: "void vs undefined return types in callback contextual typing", importance: "good-to-know" },
        ],
      },
      {
        id: "0-5",
        title: "Interfaces vs Types & Declaration Merging",
        subtopics: [
          { id: "0-5-1", title: "interface vs type: structural equivalence, performance, and ergonomics", importance: "critical" },
          { id: "0-5-2", title: "Declaration merging (interfaces only — e.g., extending Express Request)", importance: "important" },
          { id: "0-5-3", title: "Extending interfaces (extends) vs intersecting types (&) conflict resolution", importance: "important" },
          { id: "0-5-4", title: "Module augmentation with declare module", importance: "good-to-know" },
          { id: "0-5-5", title: "Index signatures ([key: string]: T) vs Record<string, T>", importance: "important" },
          { id: "0-5-6", title: "readonly modifier on properties, tuples, and arrays", importance: "important" },
        ],
      },
      {
        id: "0-6",
        title: "Utility Types",
        subtopics: [
          { id: "0-6-1", title: "Partial<T> and Required<T>", importance: "critical" },
          { id: "0-6-2", title: "Pick<T, K> and Omit<T, K>", importance: "critical" },
          { id: "0-6-3", title: "Record<K, V>", importance: "critical" },
          { id: "0-6-4", title: "Readonly<T> and ReadonlyArray<T>", importance: "important" },
          { id: "0-6-5", title: "ReturnType<T> and Parameters<T>", importance: "important" },
          { id: "0-6-6", title: "Extract<T, U> and Exclude<T, U>", importance: "important" },
          { id: "0-6-7", title: "NonNullable<T> and Awaited<T>", importance: "important" },
          { id: "0-6-8", title: "Implementing core utility types from scratch (interview favorite)", importance: "important" },
        ],
      },
      {
        id: "0-7",
        title: "Mapped Types & Conditional Types",
        subtopics: [
          { id: "0-7-1", title: "Mapped types: { [K in keyof T]: ... } and mapping modifiers (+?, -readonly)", importance: "important" },
          { id: "0-7-2", title: "Key remapping with as clause", importance: "good-to-know" },
          { id: "0-7-3", title: "Conditional types: T extends U ? X : Y", importance: "important" },
          { id: "0-7-4", title: "Distributive conditional types and preventing distribution with [T]", importance: "good-to-know" },
          { id: "0-7-5", title: "Template literal types: `${A}-${B}`", importance: "good-to-know" },
          { id: "0-7-6", title: "Building practical API & form types with mapped + conditional types", importance: "important" },
        ],
      },
      {
        id: "0-8",
        title: "unknown vs any vs never & Exhaustive Checks",
        subtopics: [
          { id: "0-8-1", title: "any: why it disables type checking and spreads unsafety", importance: "critical" },
          { id: "0-8-2", title: "unknown: type-safe top type requiring narrowing before use", importance: "critical" },
          { id: "0-8-3", title: "never: unreachable code and bottom type mechanics", importance: "critical" },
          { id: "0-8-4", title: "Exhaustive switch checks with never (default: val satisfies never)", importance: "critical" },
          { id: "0-8-5", title: "TypeScript Enums vs const objects vs string literal unions", importance: "important" },
          { id: "0-8-6", title: "Why string literal unions / as const objects are preferred over runtime Enums", importance: "important" },
        ],
      },
      {
        id: "0-9",
        title: "Modules: ESM vs CJS, Declaration Files",
        subtopics: [
          { id: "0-9-1", title: "ES Modules (ESM): static import/export, live bindings, tree-shaking", importance: "critical" },
          { id: "0-9-2", title: "CommonJS (CJS): synchronous require/module.exports and ESM interop gotchas", importance: "important" },
          { id: "0-9-3", title: "package.json type: 'module' and file extension rules (.js/.mjs/.cjs)", importance: "critical" },
          { id: "0-9-4", title: ".d.ts declaration files: consuming @types/* and authoring ambient types", importance: "important" },
          { id: "0-9-5", title: "declare keyword for ambient variables and modules", importance: "good-to-know" },
          { id: "0-9-6", title: "TypeScript module resolution: Classic vs Node16/NodeNext vs Bundler & path aliases", importance: "important" },
          { id: "0-9-7", title: "package.json exports, imports, and typesVersions resolution", importance: "good-to-know" },
        ],
      },
      {
        id: "0-10",
        title: "Git & Developer Collaboration Workflow",
        subtopics: [
          { id: "0-10-1", title: "Git branching models: feature branches and trunk-based development vs Git-Flow", importance: "critical" },
          { id: "0-10-2", title: "Merging vs Rebasing: interactive rebase (git rebase -i), squash merging, linear history", importance: "critical" },
          { id: "0-10-3", title: "Merge conflict resolution mechanics, 3-way diffs, and aborting rebases safely", importance: "critical" },
          { id: "0-10-4", title: "Safe undos: git revert vs git reset (--soft, --mixed, --hard) vs git restore & reflog recovery", importance: "critical" },
          { id: "0-10-5", title: "Pull Request lifecycle: atomic commits, conventional commits, self-review, code review etiquette", importance: "important" },
          { id: "0-10-6", title: "Release tags (git tag -a), Semantic Versioning (SemVer), and changelogs", importance: "good-to-know" },
          { id: "0-10-7", title: "Dependency lockfile hygiene: package-lock.json integrity, deterministic builds, npm ci vs npm install", importance: "critical" },
        ],
      },
      {
        id: "0-11",
        title: "Advanced TypeScript & Boundary Validation",
        subtopics: [
          { id: "0-11-1", title: "Structural typing (duck typing) vs nominal typing, freshness, and excess property check rules", importance: "critical" },
          { id: "0-11-2", title: "The satisfies operator (TS 4.9+): validating shapes without widening or losing literal inference", importance: "important" },
          { id: "0-11-3", title: "keyof operator and Indexed Access types (T[K], T[number])", importance: "critical" },
          { id: "0-11-4", title: "Type variance in TypeScript: covariance vs contravariance in function parameters, return types, and generic in/out annotations", importance: "good-to-know" },
          { id: "0-11-5", title: "Runtime validation at untrusted boundaries: why compile-time types erase at runtime and must be paired with Zod/validators", importance: "critical" },
          { id: "0-11-6", title: "Ambient declarations, declare global, and augmenting third-party library types (e.g., process.env, Express Request)", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 1 — JavaScript Runtime, Concurrency & Reliability
  // ============================================================
  {
    id: "phase-1",
    number: 1,
    title: "JavaScript Runtime, Concurrency & Reliability",
    emoji: "⚡",
    description:
      "The #1 technical interview filter. Event loop, microtask execution order, memory management, closures, prototypal inheritance, and async race condition prevention.",
    weeks: "Weeks 3–4 (24-Week Plan)",
    outcomes: [
      "Predict and trace event loop execution order across synchronous code, microtasks, timers, and I/O",
      "Implement robust asynchronous coordination patterns with timeout, cancellation, and concurrency limits",
      "Diagnose and eliminate memory leaks (lingering listeners, timer retention, circular closures)",
      "Prevent async race conditions in stateful client operations and server request handlers",
      "Job-Readiness Cadence (Weeks 3–4): Complete 6 timed 20-minute JS async/closure output-prediction & debugging exercises; practice explaining Collab-Code's concurrent edit handling",
    ],
    projectContext:
      "Collab-Code: Prevent race conditions when merging concurrent keystrokes from multiple users; eliminate memory leaks in active code-editing rooms when users disconnect.",
    gate: "Explain (Timed 3-min interview drill): Call stack, macrotask, and microtask queue priorities | Implement: Promise.all and debounce/throttle from scratch | Debug: Find and fix a memory leak in an unclosed WebSocket listener | Apply: Add AbortSignal timeout to code execution API calls in Collab-Code.",
    miniBuild: "Async Task Runner with retry + exponential backoff + cancellation (AbortSignal) + concurrency limit pool.",
    topics: [
      {
        id: "1-1",
        title: "Event Loop Internals",
        subtopics: [
          { id: "1-1-1", title: "Call stack: execution contexts, stack frames, and stack overflow", importance: "critical" },
          { id: "1-1-2", title: "Web APIs / C++ Host APIs: setTimeout, fetch, DOM events, I/O", importance: "critical" },
          { id: "1-1-3", title: "Task queue (macrotask queue) scheduling", importance: "critical" },
          { id: "1-1-4", title: "Microtask queue: Promise.then/catch/finally, queueMicrotask, MutationObserver", importance: "critical" },
          { id: "1-1-5", title: "Event loop phases in Node.js (timers, pending, poll, check, close)", importance: "important" },
          { id: "1-1-6", title: "setImmediate vs setTimeout(fn, 0) vs process.nextTick starvation risks", importance: "important" },
          { id: "1-1-7", title: "Predict-the-output interview exercises (interleaved async/await, Promises, and timers)", importance: "critical" },
        ],
      },
      {
        id: "1-2",
        title: "Promises Deep-Dive",
        subtopics: [
          { id: "1-2-1", title: "Promise states: pending, fulfilled, rejected (and immutability once settled)", importance: "critical" },
          { id: "1-2-2", title: "Creating promises: new Promise((resolve, reject) => ...) executor semantics", importance: "critical" },
          { id: "1-2-3", title: ".then(), .catch(), .finally() chaining and value/rejection propagation", importance: "critical" },
          { id: "1-2-4", title: "Promise.all() — fail-fast parallel coordination", importance: "critical" },
          { id: "1-2-5", title: "Promise.allSettled() — partial failure resilience", importance: "important" },
          { id: "1-2-6", title: "Promise.race() — timeout racing and first-to-settle", importance: "important" },
          { id: "1-2-7", title: "Promise.any() — first to fulfill (AggregateError)", importance: "good-to-know" },
          { id: "1-2-8", title: "Promise.withResolvers() (ES2024)", importance: "good-to-know" },
          { id: "1-2-9", title: "Implementing Promise.all and Promise.allSettled from scratch", importance: "important" },
        ],
      },
      {
        id: "1-3",
        title: "async/await Patterns & Pitfalls",
        subtopics: [
          { id: "1-3-1", title: "async functions always return a Promise (wrapping & unwrapping)", importance: "critical" },
          { id: "1-3-2", title: "Sequential await vs parallel Promise.all execution", importance: "critical" },
          { id: "1-3-3", title: "Error handling: try/catch vs .catch() and return vs return await in try/catch", importance: "critical" },
          { id: "1-3-4", title: "Avoiding unhandled promise rejections and floating promises", importance: "critical" },
          { id: "1-3-5", title: "Top-level await in ES modules", importance: "good-to-know" },
          { id: "1-3-6", title: "Common anti-pattern: accidental sequential await inside for/forEach/map loops", importance: "critical" },
          { id: "1-3-7", title: "for await...of for consuming async iterables and streams", importance: "important" },
        ],
      },
      {
        id: "1-4",
        title: "Closures & Scope",
        subtopics: [
          { id: "1-4-1", title: "Lexical scope, block scope (let/const), hoisting, and Temporal Dead Zone (TDZ)", importance: "critical" },
          { id: "1-4-2", title: "What a closure is: function bundled with its lexical environment record", importance: "critical" },
          { id: "1-4-3", title: "Classic closure pitfalls: var in loops, stale closures in callbacks/hooks", importance: "critical" },
          { id: "1-4-4", title: "Closures for encapsulation, memoization, debounce, and throttle", importance: "important" },
          { id: "1-4-5", title: "Memory retention implications of closures in long-lived handlers", importance: "important" },
          { id: "1-4-6", title: "IIFE (Immediately Invoked Function Expression) and module scope isolation", importance: "good-to-know" },
        ],
      },
      {
        id: "1-5",
        title: "this Binding & Prototypal Inheritance",
        subtopics: [
          { id: "1-5-1", title: "4 rules of this: default (strict vs sloppy), implicit, explicit, and new binding", importance: "critical" },
          { id: "1-5-2", title: "Arrow functions: lexical this binding and why they cannot be constructors", importance: "critical" },
          { id: "1-5-3", title: "Explicit context binding: bind(), call(), apply()", importance: "important" },
          { id: "1-5-4", title: "Prototype chain lookup: [[Prototype]], Object.getPrototypeOf, hasOwn", importance: "important" },
          { id: "1-5-5", title: "ES6 classes, extends, super, and private fields (#field) over prototypes", importance: "important" },
          { id: "1-5-6", title: "Object.create() and delegation patterns", importance: "good-to-know" },
        ],
      },
      {
        id: "1-6",
        title: "AbortController & Cancellation Patterns",
        subtopics: [
          { id: "1-6-1", title: "AbortController and AbortSignal lifecycle", importance: "important" },
          { id: "1-6-2", title: "Cancelling in-flight fetch requests and streams", importance: "critical" },
          { id: "1-6-3", title: "Timeout patterns with AbortSignal.timeout() and AbortSignal.any()", importance: "important" },
          { id: "1-6-4", title: "Making custom async workflows cancellable with signal listeners", importance: "good-to-know" },
        ],
      },
      {
        id: "1-7",
        title: "Error Handling Strategies",
        subtopics: [
          { id: "1-7-1", title: "Custom Error subclasses extending Error (preserving stack & Error.cause)", importance: "critical" },
          { id: "1-7-2", title: "Operational errors (recoverable) vs programmer bugs (crash & restart)", importance: "important" },
          { id: "1-7-3", title: "Result / Either discriminated union pattern ({ ok: true, data } | { ok: false, error })", importance: "important" },
          { id: "1-7-4", title: "Error boundary isolation across async layers", importance: "important" },
          { id: "1-7-5", title: "Global process handlers: uncaughtException and unhandledRejection safe teardown", importance: "important" },
        ],
      },
      {
        id: "1-8",
        title: "Iterators, Generators & Async Generators",
        subtopics: [
          { id: "1-8-1", title: "Iterable and Iterator protocols: Symbol.iterator, next()", importance: "good-to-know" },
          { id: "1-8-2", title: "Generator functions: function*, yield, lazy sequences", importance: "good-to-know" },
          { id: "1-8-3", title: "Async generators: async function*, paginated API cursor streaming", importance: "good-to-know" },
          { id: "1-8-4", title: "Use cases: lazy evaluation and memory-bounded batch processing", importance: "good-to-know" },
        ],
      },
      {
        id: "1-9",
        title: "JavaScript Reliability, Memory & Concurrency Gotchas",
        subtopics: [
          { id: "1-9-1", title: "Value vs reference: shallow copies (spread, Object.assign) vs deep copies (structuredClone)", importance: "critical" },
          { id: "1-9-2", title: "Equality and type coercion: == vs === vs Object.is (-0, NaN, reference identity)", importance: "important" },
          { id: "1-9-3", title: "Immutability vs accidental in-place mutation (.sort vs .toSorted, .splice vs .toSpliced)", importance: "critical" },
          { id: "1-9-4", title: "Async race conditions: stale responses overwriting newer state, read-modify-write hazards", importance: "critical" },
          { id: "1-9-5", title: "Memory leaks in JS: unremoved event listeners, uncleaned intervals, unbounded Map/object caches", importance: "important" },
          { id: "1-9-6", title: "Debugging JS/TS with Chrome DevTools & VS Code debugger: conditional breakpoints, call stacks, heap snapshots", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 2 — Web & Browser Architecture Fundamentals
  // ============================================================
  {
    id: "phase-2",
    number: 2,
    title: "Web & Browser Architecture Fundamentals",
    emoji: "🌐",
    description:
      "How the web works in production: HTTP/HTTPS lifecycles, browser rendering pipelines, CSS layout mechanics, OWASP web security, Core Web Vitals, and accessible UI engineering.",
    weeks: "Weeks 5–6 (24-Week Plan)",
    outcomes: [
      "Trace the full network journey from URL entry to rendered pixels (DNS, TCP, TLS 1.3, HTTP/2/3, Critical Rendering Path)",
      "Defend full-stack applications against OWASP web vulnerabilities (XSS, CSRF, Clickjacking, CORS misconfiguration, SQLi)",
      "Build responsive, accessible (WCAG) interfaces using Flexbox, CSS Grid, semantic HTML, and keyboard navigation",
      "Configure client storage (HttpOnly cookies vs Web Storage) and HTTP caching headers (Cache-Control, ETag) accurately",
      "Job-Readiness Cadence (Weeks 5–6): Complete your 1st 45-minute mock technical interview (TS + JS Runtime + Web Security & HTTP); refine responsive & accessible UI states in Smart City Issue Reporting",
    ],
    projectContext:
      "Smart City Issue Reporting: Public citizen reporting portal requires WCAG keyboard accessibility, mobile-first responsive layouts, secure HttpOnly cookie auth, and fast LCP image loading.",
    gate: "Explain (Mock Interview #1): End-to-end URL-to-pixel lifecycle & CORS preflight vs simple requests | Implement: Accessible modal with keyboard focus trap & Escape handler | Debug: Fix layout shift (CLS) and broken z-index stacking context | Apply: Audit and harden security headers and form accessibility in Smart City.",
    miniBuild: "Accessible, responsive multi-step Issue Reporting UI prototype with keyboard navigation, loading skeletons, error/empty states, and CSP/CORS header analyzer.",
    topics: [
      {
        id: "2-1",
        title: "Networking Under the Hood",
        subtopics: [
          { id: "2-1-1", title: "What happens when you type a URL in the browser and hit Enter (end-to-end interview classic)", importance: "critical" },
          { id: "2-1-2", title: "DNS resolution lifecycle and record types (A, AAAA, CNAME, TXT, NS)", importance: "important" },
          { id: "2-1-3", title: "TCP 3-way handshake, connection pooling, and keep-alive", importance: "important" },
          { id: "2-1-4", title: "TLS 1.3 / HTTPS handshake: certificates, asymmetric key exchange, symmetric session encryption", importance: "important" },
          { id: "2-1-5", title: "HTTP Evolution: HTTP/1.1 keep-alive vs HTTP/2 multiplexing vs HTTP/3 over QUIC", importance: "important" },
          { id: "2-1-6", title: "Head-of-Line (HoL) blocking at HTTP/1.1 vs TCP vs QUIC layers", importance: "good-to-know" },
        ],
      },
      {
        id: "2-2",
        title: "Browser Internals & Critical Rendering Path",
        subtopics: [
          { id: "2-2-1", title: "Browser multi-process architecture: Browser, Renderer, Network, and GPU processes", importance: "good-to-know" },
          { id: "2-2-2", title: "Critical Rendering Path: HTML parsing → DOM Tree & CSS parsing → CSSOM", importance: "critical" },
          { id: "2-2-3", title: "Render-blocking CSS and parser-blocking JS (normal script vs async vs defer vs type='module')", importance: "critical" },
          { id: "2-2-4", title: "Render Tree construction (combining DOM + CSSOM, excluding display: none)", importance: "important" },
          { id: "2-2-5", title: "Layout (Reflow) vs Paint (Rasterization) vs Compositing pipeline", importance: "important" },
          { id: "2-2-6", title: "Layout thrashing / forced synchronous layouts and how to prevent them", importance: "important" },
          { id: "2-2-7", title: "GPU-accelerated animations: why transform and opacity avoid layout/paint", importance: "good-to-know" },
          { id: "2-2-8", title: "requestAnimationFrame vs requestIdleCallback scheduling", importance: "good-to-know" },
        ],
      },
      {
        id: "2-3",
        title: "CSS Mechanics & Layout Engine",
        subtopics: [
          { id: "2-3-1", title: "Box Model: content, padding, border, margin & box-sizing: border-box", importance: "critical" },
          { id: "2-3-2", title: "Positioning (static, relative, absolute, fixed, sticky) & Block Formatting Context (BFC)", importance: "important" },
          { id: "2-3-3", title: "Stacking Context & z-index bugs (how transform/opacity/isolation create new contexts)", importance: "important" },
          { id: "2-3-4", title: "Flexbox 1D layout: main/cross axis, flex-grow, flex-shrink, flex-basis, gap, alignment", importance: "critical" },
          { id: "2-3-5", title: "CSS Grid 2D layout: grid-template-columns, fr units, minmax(), auto-fit vs auto-fill", importance: "critical" },
          { id: "2-3-6", title: "CSS Specificity rules, cascade order, custom properties (--vars), and @layer", importance: "important" },
        ],
      },
      {
        id: "2-4",
        title: "Web Security & OWASP Top 10 for Full-Stack",
        subtopics: [
          { id: "2-4-1", title: "Same-Origin Policy (SOP): scheme, host, and port origin boundaries", importance: "critical" },
          { id: "2-4-2", title: "CORS deep-dive: Simple requests vs Preflight OPTIONS, Access-Control-Allow-Credentials", importance: "critical" },
          { id: "2-4-3", title: "Cross-Site Scripting (XSS): Stored, Reflected, DOM-based & output encoding/sanitization", importance: "critical" },
          { id: "2-4-4", title: "Content Security Policy (CSP): script-src, nonces, and preventing inline script execution", importance: "important" },
          { id: "2-4-5", title: "Cross-Site Request Forgery (CSRF): attack flow, SameSite=Lax/Strict cookies, CSRF tokens", importance: "critical" },
          { id: "2-4-6", title: "Clickjacking defense: X-Frame-Options and CSP frame-ancestors", importance: "good-to-know" },
          { id: "2-4-7", title: "SQL Injection & command injection: why parameterized queries / prepared statements are mandatory", importance: "critical" },
          { id: "2-4-8", title: "Server-Side Request Forgery (SSRF): validating user-supplied URLs and blocking internal metadata IPs", importance: "important" },
        ],
      },
      {
        id: "2-5",
        title: "Client-Side Storage & HTTP Caching Mechanics",
        subtopics: [
          { id: "2-5-1", title: "Cookies in depth: HttpOnly, Secure, SameSite (Strict, Lax, None), Domain, Path, Max-Age", importance: "critical" },
          { id: "2-5-2", title: "localStorage vs sessionStorage: synchronous blocking, 5MB limit, and XSS token theft risks", importance: "critical" },
          { id: "2-5-3", title: "IndexedDB: asynchronous structured client storage for offline/large datasets", importance: "good-to-know" },
          { id: "2-5-4", title: "HTTP Caching headers: Cache-Control (max-age, no-cache, no-store, private, public, immutable, stale-while-revalidate)", importance: "critical" },
          { id: "2-5-5", title: "Conditional requests & validation: ETag / If-None-Match (304 Not Modified) and Last-Modified", importance: "important" },
          { id: "2-5-6", title: "Service Workers & Cache API overview", importance: "good-to-know" },
        ],
      },
      {
        id: "2-6",
        title: "Web Performance & Core Web Vitals",
        subtopics: [
          { id: "2-6-1", title: "Largest Contentful Paint (LCP): diagnosing slow server TTFB and unoptimized hero media", importance: "important" },
          { id: "2-6-2", title: "Interaction to Next Paint (INP): diagnosing long main-thread tasks and input delay", importance: "important" },
          { id: "2-6-3", title: "Cumulative Layout Shift (CLS): reserving image/embed dimensions and font fallbacks", importance: "important" },
          { id: "2-6-4", title: "Resource hints: preload, prefetch, preconnect, fetchpriority", importance: "good-to-know" },
          { id: "2-6-5", title: "JavaScript delivery: tree shaking, route-based code splitting, Gzip/Brotli compression", importance: "important" },
          { id: "2-6-6", title: "Image optimization: WebP/AVIF formats, srcset/sizes, native loading='lazy'", importance: "important" },
        ],
      },
      {
        id: "2-7",
        title: "Frontend Engineering Foundations: Accessibility, Layout & UI States",
        subtopics: [
          { id: "2-7-1", title: "Semantic HTML5 landmarks (main, nav, header, section, button vs div) for screen readers & SEO", importance: "critical" },
          { id: "2-7-2", title: "Practical Web Accessibility (a11y): ARIA roles/states (aria-label, aria-expanded, aria-live) and when native HTML suffices", importance: "important" },
          { id: "2-7-3", title: "Keyboard navigation & focus management: logical tab order, focus-visible rings, modal focus trapping", importance: "important" },
          { id: "2-7-4", title: "Responsive layout engineering: mobile-first breakpoints, fluid sizing (clamp, rem, dvh), container queries", importance: "critical" },
          { id: "2-7-5", title: "Complete UI state design: loading skeletons, actionable error states with retry, and empty states", importance: "critical" },
          { id: "2-7-6", title: "Accessible forms: explicit <label> association, inline validation, aria-invalid, and aria-describedby", importance: "critical" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 3 — Node.js Core, Streams & Reliability
  // ============================================================
  {
    id: "phase-3",
    number: 3,
    title: "Node.js Core, Streams & Reliability",
    emoji: "🟢",
    description:
      "Understand how your Node.js 20/22 LTS server runtime works without framework magic. V8, libuv thread pool, memory-bounded streams, child processes, profiling, and graceful shutdown.",
    weeks: "Weeks 7–8 (24-Week Plan)",
    outcomes: [
      "Explain the exact division of labor between V8, the libuv event loop, OS async primitives (epoll/kqueue/IOCP), and the libuv thread pool",
      "Process large files and datasets using Node Streams and stream/promises pipeline() with backpressure",
      "Profile CPU and heap memory allocations to diagnose event-loop blocking and memory leaks",
      "Implement zero-downtime graceful shutdown patterns handling SIGTERM and active connection draining",
      "Job-Readiness Cadence (Weeks 7–8): Conduct a deep technical walkthrough of Collab-Code's Node.js server lifecycle; practice 30-minute timed backend debugging exercises",
    ],
    projectContext:
      "Smart City & Collab-Code: Stream citizen photo uploads in Smart City without buffering entire files in RAM; implement SIGTERM graceful connection draining and boot-time Zod env validation in both projects.",
    gate: "Explain: When Node.js uses the libuv thread pool vs OS kernel async I/O | Implement: Transform stream pipeline with backpressure and error cleanup | Debug: Identify an event-loop blocking synchronous bottleneck using --inspect | Apply: Add Zod startup env validation and SIGTERM graceful drain to Collab-Code & Smart City.",
    miniBuild: "Streaming CSV & Media processor using stream/promises pipeline(), backpressure handling, memory ceiling assertions, and graceful shutdown.",
    topics: [
      {
        id: "3-1",
        title: "Node.js Architecture",
        subtopics: [
          { id: "3-1-1", title: "V8 engine in Node.js: JIT compilation, heap generations (young/old space), garbage collection", importance: "important" },
          { id: "3-1-2", title: "libuv architecture: event loop, OS kernel async I/O vs the 4-thread UV_THREADPOOL_SIZE pool", importance: "critical" },
          { id: "3-1-3", title: "Single-threaded JS execution model and why CPU-bound synchronous code blocks all clients", importance: "critical" },
          { id: "3-1-4", title: "Which Node.js operations use the thread pool (fs, crypto.pbkdf2/scrypt, zlib, dns.lookup)", importance: "important" },
          { id: "3-1-5", title: "Event-driven architecture: EventEmitter internals, synchronous emit, and error event handling", importance: "critical" },
        ],
      },
      {
        id: "3-2",
        title: "Streams",
        subtopics: [
          { id: "3-2-1", title: "Why streams matter: O(1) memory footprint vs buffering large payloads in RAM", importance: "critical" },
          { id: "3-2-2", title: "Readable streams: flowing vs paused modes, highWaterMark, and async iteration (for await...of)", importance: "important" },
          { id: "3-2-3", title: "Writable streams: .write() return value and waiting for the 'drain' event", importance: "important" },
          { id: "3-2-4", title: "Transform & Duplex streams: compressing, hashing, or parsing data in transit", importance: "good-to-know" },
          { id: "3-2-5", title: "stream/promises pipeline() for safe stream composition and automatic file-descriptor cleanup", importance: "critical" },
          { id: "3-2-6", title: "Backpressure mechanics: preventing fast producers from overwhelming slow consumers", importance: "critical" },
        ],
      },
      {
        id: "3-3",
        title: "File System, Path & Buffer",
        subtopics: [
          { id: "3-3-1", title: "node:fs/promises: asynchronous file I/O (readFile, writeFile, stat, mkdir, rm)", importance: "critical" },
          { id: "3-3-2", title: "node:path & fileURLToPath: cross-platform path resolution and preventing path traversal attacks", importance: "important" },
          { id: "3-3-3", title: "Buffer & TypedArrays: binary data encoding (utf8, base64, hex) and memory allocation", importance: "important" },
          { id: "3-3-4", title: "File watching and temporary file handling", importance: "good-to-know" },
          { id: "3-3-5", title: "node:crypto fundamentals: randomUUID, randomBytes, createHash, timingSafeEqual", importance: "important" },
        ],
      },
      {
        id: "3-4",
        title: "Worker Threads & Child Processes",
        subtopics: [
          { id: "3-4-1", title: "node:worker_threads: offloading CPU-intensive JS work from the main event loop", importance: "important" },
          { id: "3-4-2", title: "node:child_process: spawn vs exec vs execFile (and avoiding shell injection) vs fork", importance: "important" },
          { id: "3-4-3", title: "node:cluster module & multi-core process scaling concepts", importance: "good-to-know" },
          { id: "3-4-4", title: "Choosing between Worker Threads (shared memory/CPU) and Child Processes (process isolation)", importance: "important" },
        ],
      },
      {
        id: "3-5",
        title: "Process, Environment & Graceful Shutdown",
        subtopics: [
          { id: "3-5-1", title: "process.env, process.argv, process.memoryUsage(), and process.uptime()", importance: "important" },
          { id: "3-5-2", title: "Loading environment configuration: Node 20.6+ --env-file and dotenv", importance: "important" },
          { id: "3-5-3", title: "Process exit codes (0 vs non-zero) and why abrupt process.exit() drops in-flight requests", importance: "important" },
          { id: "3-5-4", title: "OS Signal handling in containers: SIGTERM vs SIGINT vs SIGKILL", importance: "critical" },
          { id: "3-5-5", title: "Graceful shutdown lifecycle: stop accepting requests → drain active work → close DB/Redis pools → exit", importance: "critical" },
        ],
      },
      {
        id: "3-6",
        title: "ESM in Node.js & Package Configuration",
        subtopics: [
          { id: "3-6-1", title: "Native ESM in Node.js: package.json type: 'module' vs CommonJS", importance: "critical" },
          { id: "3-6-2", title: ".mjs vs .cjs explicit extensions and Node 22+ require(esm) support", importance: "good-to-know" },
          { id: "3-6-3", title: "package.json exports, main, types, and engines fields", importance: "important" },
          { id: "3-6-4", title: "import.meta.dirname, import.meta.filename, and import.meta.url in modern Node ESM", importance: "important" },
          { id: "3-6-5", title: "Running TypeScript in Node: tsx, tsup/esbuild build pipelines, and Node native type stripping overview", importance: "important" },
        ],
      },
      {
        id: "3-7",
        title: "Node.js Production Reliability, Profiling & Dependency Hygiene",
        subtopics: [
          { id: "3-7-1", title: "CPU and memory profiling: --inspect, Chrome DevTools heap snapshots, and flamegraphs", importance: "important" },
          { id: "3-7-2", title: "Event loop lag monitoring & detecting main-thread blocking regex/JSON/crypto operations", importance: "important" },
          { id: "3-7-3", title: "Fail-fast startup environment validation using Zod schemas before binding server ports", importance: "critical" },
          { id: "3-7-4", title: "Package management hygiene: SemVer ranges (^ vs ~ vs exact), peerDependencies, overrides", importance: "important" },
          { id: "3-7-5", title: "Supply-chain & dependency security: npm audit, lockfile integrity, and avoiding bloated packages", importance: "good-to-know" },
          { id: "3-7-6", title: "Connection draining & timeout enforcement (headersTimeout, requestTimeout, keepAliveTimeout)", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 4 — Production HTTP, Express & REST APIs
  // ============================================================
  {
    id: "phase-4",
    number: 4,
    title: "Production HTTP, Express & REST APIs",
    emoji: "⚡",
    description:
      "Production-grade backend API engineering. Middleware pipelines, type-safe Zod validation, JWT access/refresh token rotation, RBAC, filtering/sorting/pagination, idempotency keys, RFC 9457 errors, and OpenAPI 3.1 contracts.",
    weeks: "Weeks 9–10 (24-Week Plan)",
    outcomes: [
      "Construct Express middleware pipelines with centralized RFC 9457 Problem Details error contracts",
      "Implement secure authentication with bcrypt/argon2, short-lived JWTs, and refresh token rotation in HttpOnly cookies",
      "Build production collection endpoints with cursor/offset pagination, whitelisted filtering, multi-field sorting, API versioning, and OpenAPI docs",
      "Enforce mutation reliability and security with Idempotency-Key caching, rate limiting, and streaming file upload validation",
      "Job-Readiness Cadence (Weeks 9–10): Complete your 2nd mock technical interview (API Design, Auth/RBAC, Express middleware); refine backend resume bullet points for Collab-Code & Smart City",
    ],
    projectContext:
      "Smart City Issue Reporting: Implement versioned (/api/v1) citizen issue submission, dynamic filtering/sorting by ward/status/severity, RBAC status transitions, idempotency keys, and OpenAPI documentation.",
    gate: "Explain (Mock Interview #2): Access vs refresh token rotation & RFC 9457 error contracts | Implement: Idempotency middleware + cursor-paginated, filtered/sorted Express endpoint | Debug: Fix an authorization bypass bug in RBAC middleware | Apply: Generate OpenAPI 3.1 spec from Zod schemas for Smart City API.",
    miniBuild: "Versioned (/api/v1) Express REST API with JWT rotation, RBAC guards, Zod validation, filtering/sorting/pagination, idempotency keys, and auto-generated OpenAPI Swagger UI.",
    topics: [
      {
        id: "4-1",
        title: "HTTP Fundamentals for APIs",
        subtopics: [
          { id: "4-1-1", title: "HTTP request/response lifecycle & statelessness", importance: "critical" },
          { id: "4-1-2", title: "HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS semantics (safe vs idempotent)", importance: "critical" },
          { id: "4-1-3", title: "Status codes: 200/201/204, 301/304, 400/401/403/404/409/422/429, 500/502/503/504", importance: "critical" },
          { id: "4-1-4", title: "Core API headers: Content-Type, Accept, Authorization, Cache-Control, X-Request-Id", importance: "important" },
          { id: "4-1-5", title: "HTTP Idempotency: why PUT/DELETE are idempotent by spec and why POST requires explicit keys", importance: "critical" },
        ],
      },
      {
        id: "4-2",
        title: "Express Middleware Pipeline",
        subtopics: [
          { id: "4-2-1", title: "Middleware signature ((req, res, next) => void) and execution pipeline", importance: "critical" },
          { id: "4-2-2", title: "Middleware ordering, next() delegation, and request short-circuiting", importance: "critical" },
          { id: "4-2-3", title: "Application-level vs Router-level modular middleware", importance: "important" },
          { id: "4-2-4", title: "Built-in parsers: express.json(), express.urlencoded(), express.raw()", importance: "important" },
          { id: "4-2-5", title: "Essential security & utility middleware: cors, helmet, pino-http/morgan, compression", importance: "important" },
          { id: "4-2-6", title: "Error-handling middleware signature: (err, req, res, next) => void (4 arguments)", importance: "critical" },
        ],
      },
      {
        id: "4-3",
        title: "Request Validation with Zod",
        subtopics: [
          { id: "4-3-1", title: "Zod schema composition: objects, primitives, enums, unions, and arrays", importance: "critical" },
          { id: "4-3-2", title: "Validation execution: .parse() (throws) vs .safeParse() (discriminated result)", importance: "critical" },
          { id: "4-3-3", title: "Single source of truth: inferring static TypeScript DTO types via z.infer<typeof schema>", importance: "critical" },
          { id: "4-3-4", title: "Validating req.params, req.query (with z.coerce), and req.body simultaneously", importance: "important" },
          { id: "4-3-5", title: "Custom refinements (.refine, .superRefine) and data transformations (.transform)", importance: "important" },
          { id: "4-3-6", title: "Reusable type-safe Express validation middleware factory", importance: "important" },
        ],
      },
      {
        id: "4-4",
        title: "Error Handling in Express",
        subtopics: [
          { id: "4-4-1", title: "Async error propagation: Express 4 catchAsync wrapper vs Express 5 native rejected Promise forwarding", importance: "critical" },
          { id: "4-4-2", title: "Centralized error-handling middleware architecture", importance: "critical" },
          { id: "4-4-3", title: "Custom AppError hierarchy with HTTP statusCode, machine errorCode, and isOperational flag", importance: "important" },
          { id: "4-4-4", title: "Catch-all 404 Not Found handler for unmatched routes", importance: "important" },
          { id: "4-4-5", title: "Redacting sensitive stack traces and database internals in production responses", importance: "important" },
        ],
      },
      {
        id: "4-5",
        title: "Authentication: JWT & Sessions",
        subtopics: [
          { id: "4-5-1", title: "Password hashing with bcrypt or Argon2id (per-user salts & work factor tuning)", importance: "critical" },
          { id: "4-5-2", title: "JWT structure (Header.Payload.Signature), signing (HMAC/RSA), and stateless verification", importance: "critical" },
          { id: "4-5-3", title: "Short-lived Access Tokens + Refresh Token rotation & reuse detection", importance: "critical" },
          { id: "4-5-4", title: "Token storage security: HttpOnly + Secure + SameSite cookies vs localStorage XSS risks", importance: "critical" },
          { id: "4-5-5", title: "Typed Express authentication middleware (attaching req.user via declaration merging)", importance: "critical" },
          { id: "4-5-6", title: "Stateful Redis sessions vs stateless JWTs: revocation and horizontal scaling tradeoffs", importance: "important" },
          { id: "4-5-7", title: "OAuth 2.0 Authorization Code flow with PKCE & OpenID Connect (OIDC) overview", importance: "good-to-know" },
        ],
      },
      {
        id: "4-6",
        title: "Authorization & Security Practices",
        subtopics: [
          { id: "4-6-1", title: "RBAC (Role-Based Access Control) vs resource-ownership (ABAC/BOLA) checks", importance: "critical" },
          { id: "4-6-2", title: "Composable authorization guard middleware (requireRole, requireOwnership)", importance: "critical" },
          { id: "4-6-3", title: "API Rate limiting: IP & user-based throttling (express-rate-limit / Redis store)", importance: "important" },
          { id: "4-6-4", title: "HTTP security headers with Helmet (HSTS, X-Content-Type-Options, CSP)", importance: "important" },
          { id: "4-6-5", title: "Strict CORS origin allowlisting and credentials configuration in Express", importance: "important" },
        ],
      },
      {
        id: "4-7",
        title: "REST Best Practices, Filtering, Sorting & Versioning",
        subtopics: [
          { id: "4-7-1", title: "RESTful resource modeling: plural nouns, hierarchical nesting limits, and action sub-resources", importance: "important" },
          { id: "4-7-2", title: "API pagination contracts: offset/limit vs cursor-based pagination envelopes (nextCursor, hasMore)", importance: "critical" },
          { id: "4-7-3", title: "Dynamic filtering, multi-field sorting, and search query parameter parsing with Zod whitelist validation", importance: "critical" },
          { id: "4-7-4", title: "API versioning strategies: URI path versioning (/api/v1) vs Header/Accept versioning and deprecation headers", importance: "important" },
          { id: "4-7-5", title: "HATEOAS and hypermedia links overview", importance: "good-to-know" },
        ],
      },
      {
        id: "4-8",
        title: "API Testing with Supertest + Vitest",
        subtopics: [
          { id: "4-8-1", title: "Decoupling Express app creation from server.listen() for in-memory Supertest execution", importance: "important" },
          { id: "4-8-2", title: "Testing happy-path CRUD status codes, headers, and response schemas", importance: "critical" },
          { id: "4-8-3", title: "Testing authentication, token expiration, and 401/403 RBAC boundary cases", importance: "important" },
          { id: "4-8-4", title: "Testing 400/422 validation errors and idempotency replay behavior", importance: "important" },
          { id: "4-8-5", title: "Test database lifecycle setup and cleanup between test runs", importance: "important" },
        ],
      },
      {
        id: "4-9",
        title: "Production API Reliability, Contracts & Ingestion",
        subtopics: [
          { id: "4-9-1", title: "High-cardinality keyset pagination & index-backed filter/sort query execution in Express + Prisma", importance: "important" },
          { id: "4-9-2", title: "Standardized API error contracts: RFC 9457 Problem Details for HTTP APIs (obsoleting RFC 7807) and consistent JSON error envelopes", importance: "critical" },
          { id: "4-9-3", title: "Idempotency keys (Idempotency-Key header): atomic Redis/DB locking to prevent duplicate mutations on client retry", importance: "important" },
          { id: "4-9-4", title: "Request timeouts, safe retry budgets, and downstream cancellation with AbortController", importance: "important" },
          { id: "4-9-5", title: "Request payload size limits (express.json({ limit: '100kb' })) to prevent memory exhaustion DoS", importance: "important" },
          { id: "4-9-6", title: "Webhook signature verification: HMAC SHA-256 over raw request body with crypto.timingSafeEqual", importance: "good-to-know" },
          { id: "4-9-7", title: "Secure file upload ingestion: Multer limits, magic-byte MIME validation, and direct S3 presigned upload flows", importance: "important" },
          { id: "4-9-8", title: "OpenAPI 3.1 / Swagger documentation for Express: generating interactive specs from Zod schemas (zod-to-openapi / swagger-jsdoc)", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 5 — PostgreSQL, Prisma & Production Data Layer
  // ============================================================
  {
    id: "phase-5",
    number: 5,
    title: "PostgreSQL, Prisma & Production Data Layer",
    emoji: "🗄️",
    description:
      "PostgreSQL and Prisma as your primary relational engine. Normalization, complex SQL (Window functions, CTEs), B-Tree/GIN indexing, ACID transactions, row locking, connection pooling, and zero-downtime migrations. (MongoDB secondary).",
    weeks: "Weeks 11–13 (24-Week Plan)",
    outcomes: [
      "Design normalized relational schemas (3NF) and write complex SQL queries using JOINs, CTEs, and Window functions",
      "Read and optimize query execution plans using EXPLAIN ANALYZE, composite B-Tree indexes, and JSONB GIN indexes",
      "Prevent race conditions and deadlocks using ACID transactions and pessimistic/optimistic locking",
      "Manage PostgreSQL connection pooling (PgBouncer) and execute safe, zero-downtime Prisma migrations",
      "Job-Readiness Cadence (Weeks 11–13): Complete 5 timed SQL query & schema-design interview drills; conduct a 15-minute deep walkthrough of Smart City's PostgreSQL schema, indexes, and transaction boundaries",
    ],
    projectContext:
      "Smart City Issue Reporting: Design and optimize the relational data model (Users, Issues, Comments, Upvotes, AuditLogs, Wards) with JSONB metadata, composite indexes for ward/status filtering, and transactional upvote locking.",
    gate: "Explain (Project Deep-Dive): ACID isolation levels, concurrency anomalies, and Smart City index design | Implement: Safe Prisma migration using expand-and-contract pattern | Debug: Diagnose and fix a slow N+1 query and a concurrent upvote race condition | Apply: Benchmark query latency before/after composite + GIN indexing with EXPLAIN ANALYZE.",
    miniBuild: "High-concurrency PostgreSQL + Prisma data layer with JSONB GIN indexing, transactional row locking for issue assignment, connection pool configuration, and deterministic seed factories.",
    topics: [
      {
        id: "5-1",
        title: "Relational Database Fundamentals",
        subtopics: [
          { id: "5-1-1", title: "Tables, rows, columns, primary keys (UUID v4/v7 vs bigserial/identity), surrogate vs natural keys", importance: "critical" },
          { id: "5-1-2", title: "Foreign keys and relational cardinality (1:1, 1:N, M:N join tables)", importance: "critical" },
          { id: "5-1-3", title: "Database Normalization: 1NF, 2NF, 3NF, BCNF for eliminating update/delete anomalies", importance: "critical" },
          { id: "5-1-4", title: "Strategic denormalization: read-heavy counters and materialized aggregates", importance: "important" },
          { id: "5-1-5", title: "Declarative data integrity: NOT NULL, UNIQUE, CHECK, DEFAULT, ON DELETE CASCADE/RESTRICT", importance: "important" },
        ],
      },
      {
        id: "5-2",
        title: "SQL Deep-Dive",
        subtopics: [
          { id: "5-2-1", title: "SELECT execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT", importance: "critical" },
          { id: "5-2-2", title: "JOINs mastery: INNER, LEFT, RIGHT, FULL OUTER, CROSS, and SELF JOINs", importance: "critical" },
          { id: "5-2-3", title: "GROUP BY, HAVING, and aggregate functions (COUNT, SUM, AVG, MIN, MAX, BOOL_AND)", importance: "critical" },
          { id: "5-2-4", title: "Subqueries: correlated vs non-correlated, EXISTS vs IN performance", importance: "important" },
          { id: "5-2-5", title: "Window functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, SUM() OVER (PARTITION BY ...)", importance: "important" },
          { id: "5-2-6", title: "CTEs (Common Table Expressions): WITH clauses and recursive hierarchy queries", importance: "important" },
          { id: "5-2-7", title: "DML & Atomic Upserts: INSERT ... ON CONFLICT DO UPDATE / DO NOTHING, RETURNING clause", importance: "critical" },
          { id: "5-2-8", title: "Views vs Materialized Views (REFRESH MATERIALIZED VIEW CONCURRENTLY)", importance: "good-to-know" },
        ],
      },
      {
        id: "5-3",
        title: "Indexing & Query Performance",
        subtopics: [
          { id: "5-3-1", title: "How B-Tree indexes work: O(log N) lookups, page splits, and range scans", importance: "critical" },
          { id: "5-3-2", title: "Index selectivity & write amplification: when to index and when indexes slow down writes", importance: "critical" },
          { id: "5-3-3", title: "Composite multi-column indexes and the leftmost prefix rule (equality before range columns)", importance: "critical" },
          { id: "5-3-4", title: "Reading EXPLAIN (ANALYZE, BUFFERS): Seq Scan vs Index Scan vs Bitmap Heap Scan vs Index Only Scan", importance: "critical" },
          { id: "5-3-5", title: "Covering indexes (INCLUDE clause) and partial indexes (WHERE clause)", importance: "important" },
          { id: "5-3-6", title: "GIN indexes for JSONB containment and PostgreSQL full-text search (tsvector)", importance: "good-to-know" },
        ],
      },
      {
        id: "5-4",
        title: "Transactions & ACID",
        subtopics: [
          { id: "5-4-1", title: "ACID properties in PostgreSQL (Atomicity, Consistency, Isolation via MVCC, Durability via WAL)", importance: "critical" },
          { id: "5-4-2", title: "Transaction control: BEGIN, COMMIT, ROLLBACK, SAVEPOINT", importance: "critical" },
          { id: "5-4-3", title: "SQL Isolation levels: Read Committed (PG default) vs Repeatable Read vs Serializable", importance: "critical" },
          { id: "5-4-4", title: "Concurrency anomalies: Dirty read, Non-repeatable read, Phantom read, Lost update, Write skew", importance: "important" },
          { id: "5-4-5", title: "Deadlocks: consistent lock ordering, lock timeouts, and deadlock detection", importance: "important" },
          { id: "5-4-6", title: "Optimistic concurrency (version column) vs Pessimistic row locking (SELECT ... FOR UPDATE / SKIP LOCKED)", importance: "important" },
        ],
      },
      {
        id: "5-5",
        title: "Prisma ORM",
        subtopics: [
          { id: "5-5-1", title: "Prisma schema modeling: @id, @default, @unique, @@index, enums, and relations", importance: "critical" },
          { id: "5-5-2", title: "Migration workflow: prisma migrate dev (local) vs prisma migrate deploy (production CI/CD)", importance: "critical" },
          { id: "5-5-3", title: "Prisma Client type-safe queries: select vs include, nested writes, and generated payload types", importance: "critical" },
          { id: "5-5-4", title: "Modeling 1:1, 1:N, and explicit vs implicit M:N relations", importance: "important" },
          { id: "5-5-5", title: "Dynamic filtering, sorting, and cursor/offset pagination in Prisma", importance: "important" },
          { id: "5-5-6", title: "Parameterized raw SQL escape hatches: $queryRaw and $executeRaw (tagged templates)", importance: "important" },
          { id: "5-5-7", title: "Prisma transactions: batch $transaction([...]) vs interactive $transaction(async (tx) => ...)", importance: "critical" },
          { id: "5-5-8", title: "Deterministic database seeding with prisma db seed", importance: "good-to-know" },
        ],
      },
      {
        id: "5-6",
        title: "MongoDB & Mongoose Essentials (Secondary)",
        subtopics: [
          { id: "5-6-1", title: "Document vs Relational tradeoffs: when PostgreSQL JSONB is enough vs when MongoDB fits", importance: "good-to-know" },
          { id: "5-6-2", title: "Document schema design: Embedding vs Referencing and unbounded array growth pitfalls", importance: "good-to-know" },
          { id: "5-6-3", title: "CRUD operations with Mongoose + TypeScript schema inference", importance: "good-to-know" },
          { id: "5-6-4", title: "Aggregation pipeline basics: $match, $group, $project, $lookup", importance: "good-to-know" },
          { id: "5-6-5", title: "Compound indexes in MongoDB & explain('executionStats')", importance: "good-to-know" },
          { id: "5-6-6", title: "Multi-document ACID transactions in MongoDB replica sets", importance: "good-to-know" },
        ],
      },
      {
        id: "5-7",
        title: "PostgreSQL & Prisma Production Reliability & Operations",
        subtopics: [
          { id: "5-7-1", title: "Connection pooling: PgBouncer transaction pooling, Prisma connection_limit sizing, avoiding pool exhaustion", importance: "critical" },
          { id: "5-7-2", title: "Handling transient DB connection drops, query timeouts, and retry backoff strategies", importance: "important" },
          { id: "5-7-3", title: "Zero-downtime schema migrations: expand-and-contract pattern, CREATE INDEX CONCURRENTLY, avoiding lock queues", importance: "important" },
          { id: "5-7-4", title: "Primary vs Read Replicas: asynchronous replication lag and read-your-own-writes consistency", importance: "good-to-know" },
          { id: "5-7-5", title: "PostgreSQL JSONB in production: querying nested fields (->, ->>), containment (@>), and GIN indexing", importance: "important" },
          { id: "5-7-6", title: "Backup & recovery fundamentals: pg_dump / pg_restore vs continuous WAL archiving (PITR)", importance: "good-to-know" },
          { id: "5-7-7", title: "Eliminating N+1 query bottlenecks in Prisma (include, relationLoadStrategy: 'join', batching)", importance: "critical" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 6 — React & Next.js App Router (Production Application Quality)
  // ============================================================
  {
    id: "phase-6",
    number: 6,
    title: "React 18/19 & Next.js 15/16 App Router (Production Quality)",
    emoji: "⚛️",
    description:
      "Modern React 18/19 and Next.js 15/16 App Router engineering. Reconciliation, hooks, Server Components, Server Actions, traditional 4-tier caching vs Cache Components ('use cache'), URL-synced pagination, request cancellation, error recovery, and hydration debugging.",
    weeks: "Weeks 14–16 (24-Week Plan)",
    outcomes: [
      "Architect React & Next.js 15/16 applications combining Server Components and Client Components across serialization boundaries",
      "Understand both the traditional App Router 4-tier caching model (with Next.js 15+ uncached-by-default fetch) and the modern Cache Components ('use cache', cacheLife, cacheTag) model",
      "Build resilient client data workflows with URL-synced pagination, AbortController request cancellation, optimistic updates, and Error Boundary recovery",
      "Diagnose and fix SSR/CSR hydration mismatches and optimize client bundle sizes",
      "Job-Readiness Cadence (Weeks 14–16): Complete your 3rd mock technical interview (React hooks, rendering, RSC, Next.js caching) + a 90-minute timed frontend machine-coding exercise; polish Collab-Code & Smart City UI",
    ],
    projectContext:
      "Collab-Code & Smart City: Build the Smart City citizen dashboard with URL-synced pagination/filtering, optimistic upvoting with rollback, presigned S3 image upload progress, and code-split Monaco editor in Collab-Code.",
    gate: "Explain (Mock Interview #3): RSC serialization boundary & Next.js 15/16 traditional cache vs 'use cache' model | Implement: URL-paginated list with AbortController request cancellation & optimistic mutation rollback | Debug: Fix an SSR/CSR hydration mismatch and stale closure bug | Apply: Code-split Collab-Code editor and verify bundle reduction.",
    miniBuild: "Next.js 15/16 App Router dashboard with Server Components, URL-synced pagination/filtering, Server Actions with Zod, optimistic upvoting with error rollback, and Error Boundary recovery.",
    topics: [
      {
        id: "6-1",
        title: "React Internals & Rendering",
        subtopics: [
          { id: "6-1-1", title: "Virtual DOM, declarative UI, and reconciliation diffing heuristics", importance: "critical" },
          { id: "6-1-2", title: "React Fiber architecture: interruptible work units, priority lanes, time-slicing", importance: "good-to-know" },
          { id: "6-1-3", title: "Keys in lists: why array index keys break state preservation and cause subtle bugs", importance: "critical" },
          { id: "6-1-4", title: "Automatic state batching across promises, timeouts, and native event handlers (React 18+)", importance: "important" },
          { id: "6-1-5", title: "Strict Mode double-invocation in development: detecting impure renders and missing effect cleanups", importance: "important" },
          { id: "6-1-6", title: "Render phase (pure calculation) vs Commit phase (DOM mutation & side effects)", importance: "important" },
        ],
      },
      {
        id: "6-2",
        title: "Hooks Deep-Dive",
        subtopics: [
          { id: "6-2-1", title: "useState: state snapshots, functional updater (prev => next), lazy initializer", importance: "critical" },
          { id: "6-2-2", title: "useEffect: synchronization mental model, dependency array honesty, cleanup functions, avoiding unnecessary effects", importance: "critical" },
          { id: "6-2-3", title: "useRef: imperative DOM access and mutable instance storage without triggering re-renders", importance: "critical" },
          { id: "6-2-4", title: "useReducer: modeling complex multi-field state transitions and state machines", importance: "important" },
          { id: "6-2-5", title: "useContext: dependency injection for UI trees and avoiding context-wide re-render blasts", importance: "important" },
          { id: "6-2-6", title: "Rules of Hooks: why hooks rely on deterministic call order (Fiber linked list)", importance: "critical" },
          { id: "6-2-7", title: "useId, useSyncExternalStore, and useDeferredValue", importance: "good-to-know" },
        ],
      },
      {
        id: "6-3",
        title: "Performance: useMemo, useCallback, React.memo",
        subtopics: [
          { id: "6-3-1", title: "What actually triggers a React re-render (state change, parent render, context change) and state colocation", importance: "critical" },
          { id: "6-3-2", title: "React.memo: shallow prop comparison to skip subtree re-renders", importance: "important" },
          { id: "6-3-3", title: "useMemo: caching expensive synchronous computations and preserving referential identity", importance: "important" },
          { id: "6-3-4", title: "useCallback: stabilizing function references passed to memoized children or effect dependencies", importance: "important" },
          { id: "6-3-5", title: "When NOT to memoize: composition patterns (children prop) before premature memoization", importance: "important" },
          { id: "6-3-6", title: "React Compiler (automatic memoization in React 19) overview", importance: "good-to-know" },
        ],
      },
      {
        id: "6-4",
        title: "Custom Hooks & Composition Patterns",
        subtopics: [
          { id: "6-4-1", title: "Designing composable custom hooks (encapsulating stateful lifecycle logic)", importance: "critical" },
          { id: "6-4-2", title: "Essential interview & production hooks: useDebounce, useLocalStorage, useMediaQuery, useOnClickOutside", importance: "critical" },
          { id: "6-4-3", title: "Component composition (children / slots) to eliminate prop drilling", importance: "important" },
          { id: "6-4-4", title: "Controlled vs uncontrolled component API design", importance: "good-to-know" },
          { id: "6-4-5", title: "Compound components pattern (Tabs, Accordion, Modal)", importance: "good-to-know" },
        ],
      },
      {
        id: "6-5",
        title: "State Management Architecture",
        subtopics: [
          { id: "6-5-1", title: "State categorization: local UI state vs URL state vs global client state vs server cache state", importance: "critical" },
          { id: "6-5-2", title: "Splitting Context providers (state vs dispatch) to prevent unnecessary consumer renders", importance: "important" },
          { id: "6-5-3", title: "Zustand: selector-based external store for high-frequency client state (e.g., Collab-Code editor state)", importance: "important" },
          { id: "6-5-4", title: "Why Server State is not Client State: staleness, deduplication, and out-of-band mutations", importance: "critical" },
          { id: "6-5-5", title: "TanStack Query (React Query): query keys, staleTime vs gcTime, mutations, and cache invalidation", importance: "important" },
        ],
      },
      {
        id: "6-6",
        title: "React Server Components (RSC)",
        subtopics: [
          { id: "6-6-1", title: "Server Components vs Client Components mental model and execution environments", importance: "critical" },
          { id: "6-6-2", title: "'use client' (client boundary entry) and 'use server' (Server Action boundary) directives", importance: "critical" },
          { id: "6-6-3", title: "Capabilities & restrictions: why RSCs cannot use state/effects and Client Components cannot access server-only secrets", importance: "critical" },
          { id: "6-6-4", title: "The RSC serialization boundary: what can and cannot be passed as props across 'use client'", importance: "important" },
          { id: "6-6-5", title: "Interleaving pattern: passing Server Components as children to Client Components", importance: "important" },
        ],
      },
      {
        id: "6-7",
        title: "Next.js 15/16 App Router Architecture",
        subtopics: [
          { id: "6-7-1", title: "App Router file conventions: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx", importance: "critical" },
          { id: "6-7-2", title: "Nested layouts, partial rendering, and async params/searchParams in Next.js 15+", importance: "critical" },
          { id: "6-7-3", title: "Route groups ((auth), (dashboard)) and private folders (_components)", importance: "good-to-know" },
          { id: "6-7-4", title: "Dynamic route segments: [id], [...slug], [[...optional]] and generateStaticParams", importance: "important" },
          { id: "6-7-5", title: "Parallel routes (@slot) and Intercepting routes ((.)photo) for URL-backed modals", importance: "good-to-know" },
          { id: "6-7-6", title: "Next.js Middleware (middleware.ts): lightweight route guards, redirects, and header injection", importance: "important" },
          { id: "6-7-7", title: "Route Handlers (app/api/.../route.ts) for webhooks and external REST clients", importance: "important" },
        ],
      },
      {
        id: "6-8",
        title: "Data Fetching, Caching, Pagination & Request Cancellation",
        subtopics: [
          { id: "6-8-1", title: "Server Component data fetching: parallel fetching, avoiding sequential request waterfalls", importance: "critical" },
          { id: "6-8-2", title: "Server Actions ('use server'): progressive forms, useActionState, and mutation security", importance: "critical" },
          { id: "6-8-3", title: "Cache invalidation: revalidatePath, revalidateTag, and cacheTag", importance: "important" },
          { id: "6-8-4", title: "Static vs Dynamic rendering in Next.js 15/16: uncached-by-default fetch & GET Route Handlers vs explicit opt-in caching", importance: "critical" },
          { id: "6-8-5", title: "Streaming SSR with <Suspense> boundaries and granular loading skeletons", importance: "important" },
          { id: "6-8-6", title: "useTransition and useOptimistic (React 19 / Next.js App Router) for non-blocking UI updates", importance: "important" },
          { id: "6-8-7", title: "Frontend pagination & URL state synchronization: syncing page, cursor, filter, and sort state with URL searchParams and infinite scroll", importance: "critical" },
          { id: "6-8-8", title: "Frontend request cancellation & stale response prevention: AbortController in useEffect and TanStack Query signal cancellation on rapid filter/search updates", importance: "important" },
        ],
      },
      {
        id: "6-9",
        title: "Forms, Validation & UI Patterns",
        subtopics: [
          { id: "6-9-1", title: "Controlled vs Uncontrolled inputs, form reset strategies, and dirty state tracking", importance: "critical" },
          { id: "6-9-2", title: "Client + Server shared validation using React Hook Form + @hookform/resolvers/zod", importance: "important" },
          { id: "6-9-3", title: "Handling field-level vs form-level server validation errors in Server Actions", importance: "important" },
          { id: "6-9-4", title: "next/image automatic sizing, next/font zero-layout-shift fonts, and Metadata API", importance: "good-to-know" },
        ],
      },
      {
        id: "6-10",
        title: "React & Next.js Production Quality, Caching Models, Hydration & Error Recovery",
        subtopics: [
          { id: "6-10-1", title: "Hydration mismatches deep-dive: Date/Math.random/window access during SSR, browser extensions, and safe two-pass rendering", importance: "critical" },
          { id: "6-10-2", title: "Next.js 15/16 caching model: traditional 4-tier App Router cache (Request Memoization, Data Cache, Full Route Cache, Router Cache) vs the Cache Components model ('use cache', cacheLife, cacheTag)", importance: "critical" },
          { id: "6-10-3", title: "Hybrid server/client data flow: seeding TanStack Query from Server Components for real-time polling & invalidation", importance: "important" },
          { id: "6-10-4", title: "Optimistic UI mutations with automatic rollback and toast notification on network failure", importance: "important" },
          { id: "6-10-5", title: "Resilient file uploads in React: client MIME/size validation, progress bars, and direct-to-S3 presigned URL uploads", importance: "important" },
          { id: "6-10-6", title: "Bundle size analysis: @next/bundle-analyzer, next/dynamic lazy loading for heavy components (Monaco Editor, charts)", importance: "good-to-know" },
          { id: "6-10-7", title: "End-to-end App Router authentication: DAL (Data Access Layer) verification, middleware checks, and HttpOnly cookie refresh", importance: "important" },
          { id: "6-10-8", title: "Frontend data-fetching reliability & error handling: React Error Boundaries with reset keys, granular error.tsx recovery, network retry backoffs, and degraded UI fallbacks", importance: "critical" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 7 — Redis, Resilient Background Jobs & WebSockets
  // ============================================================
  {
    id: "phase-7",
    number: 7,
    title: "Redis, Resilient Background Jobs & WebSockets",
    emoji: "🔴",
    description:
      "Scaling the data and real-time communication plane. Redis caching patterns, BullMQ background job queues with idempotent workers, failure recovery, Socket.io real-time rooms, and connection resilience.",
    weeks: "Weeks 17–18 (24-Week Plan)",
    outcomes: [
      "Design resilient caching layers with Cache-Aside pattern, TTL jitter, and cache stampede protection",
      "Process asynchronous background tasks with BullMQ handling retries, exponential backoff, and dead-letter queues",
      "Architect WebSocket connection lifecycles with room namespaces, handshake auth, and reconnect state resync",
      "Eliminate duplicate job side effects by designing strictly idempotent workers and deduplication keys",
      "Job-Readiness Cadence (Weeks 17–18): Practice a 15-minute interactive architecture walkthrough of Collab-Code (WebSockets + Redis Pub/Sub) and Smart City (BullMQ notification workers)",
    ],
    projectContext:
      "Collab-Code & Smart City: Collab-Code uses bidirectional WebSockets with Redis Pub/Sub adapter for real-time code sync & presence; Smart City uses BullMQ for citizen status notifications and image processing.",
    gate: "Explain (Project Defense Drill): At-least-once delivery & how Collab-Code and Smart City guarantee idempotency and state sync | Implement: BullMQ worker with exponential backoff, jitter, and DLQ | Debug: Fix a WebSocket reconnect bug where clients miss edits during disconnect | Apply: Scale Socket.io across two Node processes using Redis adapter.",
    miniBuild: "Real-time collaborative room with WebSocket reconnect state resync + BullMQ notification queue with idempotent worker processing.",
    topics: [
      {
        id: "7-1",
        title: "Redis Fundamentals",
        subtopics: [
          { id: "7-1-1", title: "Redis core data structures: String, Hash, List, Set, Sorted Set (ZSET)", importance: "critical" },
          { id: "7-1-2", title: "Atomic commands & expiration: GET, SET (NX/EX), DEL, EXISTS, EXPIRE, TTL, INCR, HINCRBY", importance: "critical" },
          { id: "7-1-3", title: "Primary Redis patterns: caching, session store, distributed rate limiting, ZSET leaderboards", importance: "important" },
          { id: "7-1-4", title: "Persistence tradeoffs: RDB point-in-time snapshots vs AOF (Append-Only File) durability", importance: "important" },
          { id: "7-1-5", title: "Redis Pub/Sub vs Redis Streams overview", importance: "important" },
          { id: "7-1-6", title: "Atomic execution: MULTI/EXEC pipelines and Lua scripts for race-free checks", importance: "good-to-know" },
        ],
      },
      {
        id: "7-2",
        title: "Caching Strategies & Patterns",
        subtopics: [
          { id: "7-2-1", title: "Cache-Aside (Lazy Loading) pattern and stale read window tradeoffs", importance: "critical" },
          { id: "7-2-2", title: "Write-Through, Write-Behind (Write-Back), and Write-Around caching patterns", importance: "important" },
          { id: "7-2-3", title: "Cache invalidation: deterministic key naming, TTL expiration, and mutation-driven eviction", importance: "critical" },
          { id: "7-2-4", title: "Cache stampede / thundering herd mitigation: mutex singleflight locks and TTL jitter", importance: "important" },
          { id: "7-2-5", title: "Cache penetration (null caching / Bloom filters) and cache avalanche prevention", importance: "good-to-know" },
        ],
      },
      {
        id: "7-3",
        title: "BullMQ: Job Queues & Background Processing",
        subtopics: [
          { id: "7-3-1", title: "BullMQ architecture: Queue producer, Redis-backed storage, and Worker consumers", importance: "critical" },
          { id: "7-3-2", title: "Job lifecycle states: waiting → prioritized → delayed → active → completed / failed", importance: "important" },
          { id: "7-3-3", title: "Automatic retries, custom backoff strategies, and Dead Letter Queue (DLQ) handling", importance: "critical" },
          { id: "7-3-4", title: "Delayed jobs, job deduplication (jobId), and repeatable cron schedules", importance: "good-to-know" },
          { id: "7-3-5", title: "Worker concurrency limits, lockDuration, and rate-limited queue processing", importance: "important" },
          { id: "7-3-6", title: "Inspecting queue health and replaying failed DLQ jobs with Bull Board", importance: "good-to-know" },
        ],
      },
      {
        id: "7-4",
        title: "WebSockets & Socket.io",
        subtopics: [
          { id: "7-4-1", title: "WebSocket protocol: HTTP/1.1 101 Switching Protocols upgrade handshake and full-duplex framing", importance: "critical" },
          { id: "7-4-2", title: "Socket.io core abstractions: events, emitWithAck, rooms, namespaces, broadcasting", importance: "critical" },
          { id: "7-4-3", title: "End-to-end TypeScript event maps (ClientToServerEvents, ServerToClientEvents, SocketData)", importance: "important" },
          { id: "7-4-4", title: "WebSocket security: handshake JWT authentication middleware, origin validation, per-socket rate limiting", importance: "critical" },
          { id: "7-4-5", title: "Horizontal scaling across multiple Node instances: sticky load balancing & @socket.io/redis-adapter", importance: "important" },
          { id: "7-4-6", title: "Server-Sent Events (SSE) vs WebSockets vs Long Polling architectural tradeoffs", importance: "good-to-know" },
        ],
      },
      {
        id: "7-5",
        title: "Distributed Failure Scenarios: Jobs, Caching & Real-Time Recovery",
        subtopics: [
          { id: "7-5-1", title: "Designing strictly idempotent queue workers (unique database outbox/processed-job keys)", importance: "critical" },
          { id: "7-5-2", title: "Delivery guarantees: at-most-once vs at-least-once vs effectively-once semantics", importance: "important" },
          { id: "7-5-3", title: "Worker crash recovery: stalled job detection, lock renewal failure, and poison-pill isolation", importance: "important" },
          { id: "7-5-4", title: "Preventing retry storms: exponential backoff with full jitter and circuit breaking", importance: "important" },
          { id: "7-5-5", title: "WebSocket reconnection resilience: heartbeats, client offline queueing, and state-version resync on reconnect", importance: "critical" },
          { id: "7-5-6", title: "Redis maxmemory eviction policies (allkeys-lru vs volatile-lru vs noeviction for queues) and Redis outage fallback", importance: "good-to-know" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 8 — Comprehensive Testing & Quality Engineering
  // ============================================================
  {
    id: "phase-8",
    number: 8,
    title: "Comprehensive Testing & Quality Engineering",
    emoji: "🧪",
    description:
      "Production test engineering and project bug-hardening. Vitest unit tests, real PostgreSQL integration tests, RBAC security regressions, React Testing Library accessibility queries, and Playwright E2E automation.",
    weeks: "Weeks 19–20 (24-Week Plan)",
    outcomes: [
      "Write maintainable unit and mock tests with Vitest using the Arrange-Act-Assert (AAA) pattern",
      "Execute database integration tests against real PostgreSQL instances with strict test isolation",
      "Automate authentication and RBAC authorization regression test matrices",
      "Create resilient End-to-End browser tests with Playwright using accessible role locators",
      "Job-Readiness Cadence (Weeks 19–20): Complete your 4th mock technical interview (Testing strategy & live debugging); run a full bug-bash and test-hardening sprint on Collab-Code & Smart City",
    ],
    projectContext:
      "Smart City & Collab-Code: Write Supertest + PostgreSQL integration tests for Smart City's citizen-to-admin issue lifecycle & RBAC matrix; write Playwright E2E tests for Collab-Code room creation and live editing.",
    gate: "Explain (Mock Interview #4): Testing Trophy vs Pyramid & why testing behavior beats testing implementation | Implement: Supertest integration suite against an isolated test DB | Debug: Fix a flaky async test caused by unawaited state updates | Apply: Add CI-enforced RBAC regression and Playwright E2E tests to flagship projects.",
    miniBuild: "Automated quality suite for Smart City & Collab-Code: Vitest unit tests, RBAC security matrix tests, Supertest PostgreSQL integration tests, and Playwright E2E critical-path spec.",
    topics: [
      {
        id: "8-1",
        title: "Testing Fundamentals & Philosophy",
        subtopics: [
          { id: "8-1-1", title: "Testing Pyramid vs Testing Trophy (why integration tests give the highest ROI in full-stack TS)", importance: "important" },
          { id: "8-1-2", title: "TDD workflow: Red → Green → Refactor in practical feature development", importance: "good-to-know" },
          { id: "8-1-3", title: "Testing observable behavior and public contracts instead of internal implementation details", importance: "critical" },
          { id: "8-1-4", title: "AAA structure: Arrange (given), Act (when), Assert (then) and test data builders", importance: "critical" },
        ],
      },
      {
        id: "8-2",
        title: "Vitest: Unit Testing",
        subtopics: [
          { id: "8-2-1", title: "Vitest lifecycle: describe, it/test, expect, beforeEach, afterEach, beforeAll", importance: "critical" },
          { id: "8-2-2", title: "Core assertions: toBe, toEqual, toStrictEqual, toThrowError, toMatchObject", importance: "important" },
          { id: "8-2-3", title: "Test doubles: spies (vi.spyOn), stubs (vi.fn), and module boundaries (vi.mock) without over-mocking", importance: "critical" },
          { id: "8-2-4", title: "Testing asynchronous functions, rejected promises (expect(...).rejects), and streams", importance: "critical" },
          { id: "8-2-5", title: "Deterministic time testing: vi.useFakeTimers(), vi.setSystemTime(), advanceTimersByTime()", importance: "good-to-know" },
          { id: "8-2-6", title: "Inline snapshots vs brittle full-component snapshots", importance: "good-to-know" },
        ],
      },
      {
        id: "8-3",
        title: "Integration Testing",
        subtopics: [
          { id: "8-3-1", title: "HTTP API integration testing with Supertest against Express routers", importance: "critical" },
          { id: "8-3-2", title: "Database integration testing: isolated test DB lifecycle, migrations, and deterministic seed factories", importance: "critical" },
          { id: "8-3-3", title: "Ephemeral PostgreSQL & Redis containers using Docker Compose or Testcontainers", importance: "good-to-know" },
          { id: "8-3-4", title: "Mocking third-party external APIs at the network layer with MSW (Mock Service Worker)", importance: "important" },
        ],
      },
      {
        id: "8-4",
        title: "React Testing Library",
        subtopics: [
          { id: "8-4-1", title: "Accessibility-first query priority: getByRole > getByLabelText > getByText > getByTestId", importance: "critical" },
          { id: "8-4-2", title: "Simulating realistic user interactions with @testing-library/user-event", importance: "critical" },
          { id: "8-4-3", title: "Testing custom React hooks with renderHook and act()", importance: "important" },
          { id: "8-4-4", title: "Testing asynchronous UI transitions (findBy* queries, waitFor, loading/error states)", importance: "important" },
        ],
      },
      {
        id: "8-5",
        title: "Playwright: End-to-End Testing",
        subtopics: [
          { id: "8-5-1", title: "Playwright configuration, browser contexts, webServer auto-start, and Trace Viewer debugging", importance: "important" },
          { id: "8-5-2", title: "Web-first auto-retrying locators (getByRole, getByLabel) and expect(locator) assertions", importance: "critical" },
          { id: "8-5-3", title: "Page Object Model (POM) and reusable test fixtures", importance: "important" },
          { id: "8-5-4", title: "StorageState authentication reuse (logging in once per test worker)", importance: "important" },
          { id: "8-5-5", title: "Network mocking and failure injection with page.route()", importance: "good-to-know" },
          { id: "8-5-6", title: "Visual regression testing and CI artifact collection (screenshots, videos, traces)", importance: "good-to-know" },
        ],
      },
      {
        id: "8-6",
        title: "Advanced Testing: DB Concurrency, Security Regressions & Load Testing",
        subtopics: [
          { id: "8-6-1", title: "Transactional test isolation & concurrent race-condition testing against real PostgreSQL instances", importance: "important" },
          { id: "8-6-2", title: "Authentication & RBAC permission matrix regression tests (guest, citizen, field-worker, admin)", importance: "critical" },
          { id: "8-6-3", title: "Frontend-Backend schema contract verification using shared Zod/OpenAPI schemas", importance: "important" },
          { id: "8-6-4", title: "API load and latency benchmarking with k6 or Autocannon (measuring p95/p99 under concurrency)", importance: "good-to-know" },
          { id: "8-6-5", title: "Risk-based testing strategy: prioritizing auth, payments/mutations, and core user journeys over vanity 100% coverage", importance: "important" },
          { id: "8-6-6", title: "Eliminating flaky tests: avoiding arbitrary sleep(), isolating shared state, deterministic clocks", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 9 — DevOps, Docker, CI/CD, AWS & Observability
  // ============================================================
  {
    id: "phase-9",
    number: 9,
    title: "DevOps, Docker, CI/CD, AWS & Observability",
    emoji: "🐳",
    description:
      "Ship software reliably and operate it in production. Multi-stage Docker packaging, Docker Compose, GitHub Actions CI/CD, core AWS services (EC2, S3, RDS, IAM), structured logging, actionable monitoring alerts/dashboards, incident diagnosis, and zero-downtime migrations.",
    weeks: "Weeks 21–22 (24-Week Plan)",
    outcomes: [
      "Package Node and Next.js applications into secure, minimal multi-stage Docker images",
      "Orchestrate multi-service stacks (Web + API + PostgreSQL + Redis) with Docker Compose and healthchecks",
      "Automate linting, type-checking, test suites, and container deployment via GitHub Actions CI/CD",
      "Configure structured JSON logging, RED metrics dashboards, actionable symptom-based alerts, and incident diagnosis runbooks",
      "Job-Readiness Cadence (Weeks 21–22): Perform final live deployment checks on Collab-Code & Smart City (HTTPS, healthchecks, seed data, README architecture diagrams) and finalize resume & portfolio links",
    ],
    projectContext:
      "Smart City & Collab-Code: Containerize both apps, wire up GitHub Actions CI/CD, configure S3 presigned uploads, add /health/live and /health/ready endpoints, and verify live production deployments.",
    gate: "Explain: Multi-stage Docker layer caching, liveness vs readiness probes, and symptom-based alerting | Implement: GitHub Actions CI/CD pipeline with test DB service container | Debug: Diagnose a simulated production 5xx latency spike using structured logs and RED metrics | Apply: Complete final deployment checklist & README polish for both flagship projects.",
    miniBuild: "Production Dockerized full-stack deployment with Docker Compose, GitHub Actions CI pipeline, S3 presigned uploads, health check endpoints, and monitoring alert dashboard.",
    topics: [
      {
        id: "9-1",
        title: "Docker Fundamentals",
        subtopics: [
          { id: "9-1-1", title: "Containerization mental model: Images (layered union FS) vs Containers vs Volumes vs Networks", importance: "critical" },
          { id: "9-1-2", title: "Dockerfile authoring: FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, ENTRYPOINT vs CMD (exec form)", importance: "critical" },
          { id: "9-1-3", title: "Multi-stage Docker builds: separating TypeScript build dependencies from minimal runtime images", importance: "critical" },
          { id: "9-1-4", title: ".dockerignore hygiene (excluding node_modules, .git, .env, test artifacts)", importance: "important" },
          { id: "9-1-5", title: "Layer caching optimization: copying package.json + lockfile before source code", importance: "important" },
          { id: "9-1-6", title: "Running containers as non-root user (USER node) and handling PID 1 signal forwarding (tini / --init)", importance: "important" },
        ],
      },
      {
        id: "9-2",
        title: "Docker Compose",
        subtopics: [
          { id: "9-2-1", title: "docker-compose.yml orchestration: services, networks, named volumes, env_file", importance: "critical" },
          { id: "9-2-2", title: "Full-stack local parity: Next.js/Vite + Express API + PostgreSQL + Redis + Worker", importance: "important" },
          { id: "9-2-3", title: "Container healthchecks and startup ordering (depends_on: condition: service_healthy)", importance: "important" },
          { id: "9-2-4", title: "Data persistence with named volumes vs bind mounts", importance: "important" },
        ],
      },
      {
        id: "9-3",
        title: "GitHub Actions CI/CD",
        subtopics: [
          { id: "9-3-1", title: "Workflow syntax: triggers (push, pull_request), jobs, matrix runners, and steps", importance: "critical" },
          { id: "9-3-2", title: "Automated quality gates: running npm ci, tsc --noEmit, ESLint, and Vitest/Playwright in CI", importance: "critical" },
          { id: "9-3-3", title: "Dependency & Docker layer caching in CI to keep pipelines fast", importance: "important" },
          { id: "9-3-4", title: "Managing GitHub Secrets, environment protection rules, and OIDC cloud credentials", importance: "important" },
          { id: "9-3-5", title: "Building and pushing tagged container images to GHCR / ECR and triggering deployment", importance: "important" },
        ],
      },
      {
        id: "9-4",
        title: "AWS Cloud Basics & Cost Safeguards",
        subtopics: [
          { id: "9-4-1", title: "Compute & Networking: EC2 instances, Security Groups (stateful firewalls), SSH/SSM, Reverse Proxy (Nginx/Caddy)", importance: "critical" },
          { id: "9-4-2", title: "S3 Object Storage: private buckets, IAM policies, CORS, and presigned PUT/GET URLs", importance: "critical" },
          { id: "9-4-3", title: "Managed Databases: RDS PostgreSQL, automated backups, security group isolation", importance: "important" },
          { id: "9-4-4", title: "IAM Security: least-privilege principle, IAM Roles vs long-lived Access Keys, policy evaluation", importance: "critical" },
          { id: "9-4-5", title: "Serverless compute: AWS Lambda execution model and cold start tradeoffs", importance: "good-to-know" },
          { id: "9-4-6", title: "Managed queues: AWS SQS visibility timeouts & Dead Letter Queues vs Redis BullMQ", importance: "good-to-know" },
          { id: "9-4-7", title: "CDN edge delivery: CloudFront caching, origin shield, and TLS termination", importance: "good-to-know" },
        ],
      },
      {
        id: "9-5",
        title: "Deployment & Production Observability",
        subtopics: [
          { id: "9-5-1", title: "Zero-downtime deployment strategies: Rolling updates, Blue-Green, and Canary releases", importance: "important" },
          { id: "9-5-2", title: "Structured JSON logging (Pino): log levels, redacting PII/tokens, and X-Request-Id correlation", importance: "critical" },
          { id: "9-5-3", title: "Health probes: Liveness (/health/live) vs Readiness (/health/ready checking DB/Redis connectivity)", importance: "critical" },
          { id: "9-5-4", title: "12-Factor App environment parity across local, staging, and production", importance: "important" },
        ],
      },
      {
        id: "9-6",
        title: "Production Observability, Alerting, Incident Triage & Safeguards",
        subtopics: [
          { id: "9-6-1", title: "Application telemetry: RED metrics (Rate, Errors, Duration) and latency percentiles (p50, p95, p99)", importance: "important" },
          { id: "9-6-2", title: "Distributed tracing fundamentals (OpenTelemetry): trace IDs and spans across HTTP, DB, and queue workers", importance: "good-to-know" },
          { id: "9-6-3", title: "Automated deployment rollbacks: failing readiness checks, image tag rollback, and database compatibility", importance: "important" },
          { id: "9-6-4", title: "Safe database migrations in CI/CD: running backward-compatible migrations before rolling out new app containers", importance: "important" },
          { id: "9-6-5", title: "Container security scanning: Trivy / Docker Scout, minimal Alpine/Distroless images", importance: "good-to-know" },
          { id: "9-6-6", title: "Cloud cost guardrails: AWS Budgets alerts, billing alarms, NAT Gateway/egress traps, tearing down idle resources", importance: "important" },
          { id: "9-6-7", title: "Actionable monitoring dashboards, symptom-based alerting (SLO burn rate, 5xx spikes, p99 latency, queue lag), and incident diagnosis playbooks", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 10 — Practical System Design & Capstone Architecture
  // ============================================================
  {
    id: "phase-10",
    number: 10,
    title: "Practical System Design & Placement Readiness",
    emoji: "🏗️",
    description:
      "Practical SDE/full-stack system design and final interview readiness. Capacity estimation, bottleneck diagnosis, failure modes, rate limiters, URL shorteners, and end-to-end architectural defense of Collab-Code and Smart City.",
    weeks: "Weeks 23–24 (24-Week Plan)",
    outcomes: [
      "Perform back-of-the-envelope capacity estimations (QPS, peak load, storage, bandwidth, cache RAM) for 100K–1M DAU",
      "Identify architectural bottlenecks (CPU, memory, DB I/O, connection pools, network latency) and design concrete failure recovery plans",
      "Design standard entry/mid-level interview systems (Rate Limiter, URL Shortener, Real-Time Collaborative Editor, Notification Service)",
      "Job-Readiness Cadence (Weeks 23–24): Complete 2 full-loop placement mock interviews (System Design + Deep Project Walkthrough of Collab-Code & Smart City + Tradeoff Defense)",
    ],
    projectContext:
      "Collab-Code & Smart City: Formalize system architecture diagrams, scaling roadmaps (1K → 100K users), failure mode tables, and trade-off defenses for placement & off-campus interviews.",
    gate: "Explain (Full-Loop Mock Interview #5 & #6): Capacity math + 20-minute deep-dive defense of Collab-Code and Smart City | Implement: Redis sliding-window rate limiter | Debug: Eliminate single points of failure in a web + DB + queue topology | Apply: Pass final portfolio, live deployment, and interview readiness sign-off.",
    miniBuild: "Complete System Design dossier, capacity calculations, and Redis Sliding-Window Rate Limiter + full architectural defense deck for Collab-Code and Smart City.",
    topics: [
      {
        id: "10-1",
        title: "Architecture Patterns",
        subtopics: [
          { id: "10-1-1", title: "Modular Monolith vs Microservices: team/operational tradeoffs and when NOT to split a monolith", importance: "critical" },
          { id: "10-1-2", title: "Clean / Hexagonal architecture: separating domain logic from HTTP and database adapters", importance: "good-to-know" },
          { id: "10-1-3", title: "Layered architecture in Node/TypeScript: Controllers → Services → Repositories/DAL", importance: "critical" },
          { id: "10-1-4", title: "API Gateway, Reverse Proxy, and BFF (Backend For Frontend) patterns", importance: "important" },
          { id: "10-1-5", title: "Event-driven architecture: synchronous REST vs asynchronous queues/pub-sub decoupling", importance: "important" },
          { id: "10-1-6", title: "Transactional Outbox pattern, CQRS, and Event Sourcing overview", importance: "good-to-know" },
        ],
      },
      {
        id: "10-2",
        title: "Distributed Systems Concepts",
        subtopics: [
          { id: "10-2-1", title: "CAP Theorem in practice: choosing CP vs AP during network partitions", importance: "critical" },
          { id: "10-2-2", title: "Consistency models: Strong consistency vs Eventual consistency vs Read-your-own-writes", importance: "critical" },
          { id: "10-2-3", title: "Load balancing: L4 vs L7, Round Robin, Least Connections, and Consistent Hashing for stateful nodes", importance: "critical" },
          { id: "10-2-4", title: "Vertical vs Horizontal scaling and externalizing state (stateless app tier)", importance: "critical" },
          { id: "10-2-5", title: "Database scaling: Read replicas, table partitioning, and horizontal sharding keys", importance: "important" },
          { id: "10-2-6", title: "Replication topologies: Single-Leader (Primary-Replica) vs Multi-Leader tradeoffs", importance: "good-to-know" },
        ],
      },
      {
        id: "10-3",
        title: "Common System Design Problems",
        subtopics: [
          { id: "10-3-1", title: "Design a URL Shortener (TinyURL): Base62 encoding vs Snowflake IDs, 301 vs 302 redirects, Redis read cache", importance: "critical" },
          { id: "10-3-2", title: "Design a Distributed Rate Limiter: Token Bucket, Fixed Window, Sliding Window Log/Counter in Redis", importance: "critical" },
          { id: "10-3-3", title: "Design a Real-Time Collaborative Editor / Chat (Collab-Code): WebSockets, Pub/Sub routing, presence, conflict resolution (OT/CRDT overview)", importance: "critical" },
          { id: "10-3-4", title: "Design a Scalable Notification Service (Smart City): priority queues, worker retries, idempotency, rate limiting", importance: "important" },
          { id: "10-3-5", title: "Design a Media Upload & Processing Pipeline: presigned S3 URLs, async thumbnail workers, CDN delivery", importance: "important" },
        ],
      },
      {
        id: "10-4",
        title: "Monorepo Architecture",
        subtopics: [
          { id: "10-4-1", title: "Workspace fundamentals: npm/pnpm workspaces and package linking", importance: "good-to-know" },
          { id: "10-4-2", title: "Sharing end-to-end TypeScript types & Zod schemas between frontend and backend", importance: "important" },
          { id: "10-4-3", title: "Shared internal packages (tsconfig, eslint, validation schemas, UI primitives)", importance: "good-to-know" },
          { id: "10-4-4", title: "Task orchestration and build caching (Turborepo / Nx concepts)", importance: "good-to-know" },
        ],
      },
      {
        id: "10-5",
        title: "Practical System Design: Capacity Estimation, Bottlenecks & Project Defense",
        subtopics: [
          { id: "10-5-1", title: "Back-of-the-envelope capacity math: estimating average/peak QPS, storage growth, bandwidth, and Redis RAM for 100K DAU", importance: "critical" },
          { id: "10-5-2", title: "Bottleneck diagnosis: pinpointing CPU-bound vs memory-bound vs DB I/O-bound vs network-latency bottlenecks", importance: "critical" },
          { id: "10-5-3", title: "Failure mode analysis: handling primary DB failover, Redis crash/cold-cache boot, and third-party API outages", importance: "important" },
          { id: "10-5-4", title: "Architectural tradeoff defense: Consistency vs Availability in Collab-Code (real-time sync) vs Smart City (issue reporting)", importance: "critical" },
          { id: "10-5-5", title: "Cost-aware architecture: comparing serverless vs long-running containers, connection pooling, and CDN offload", importance: "good-to-know" },
          { id: "10-5-6", title: "End-to-end interview walkthrough & defense of Collab-Code and Smart City Issue Reporting (schema, APIs, scaling, bugs solved)", importance: "critical" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 11 — NestJS (Enterprise Backend Extension - Bonus)
  // ============================================================
  {
    id: "phase-11",
    number: 11,
    title: "NestJS (Enterprise Backend Extension)",
    emoji: "🐱",
    description:
      "Enterprise-grade Node.js architecture built on TypeScript decorators, modules, and Dependency Injection. (Optional post-core extension for enterprise MNC interviews).",
    weeks: "Post-Core Extension (Bonus)",
    outcomes: [
      "Understand Inversion of Control (IoC) and Dependency Injection in enterprise TypeScript backends",
      "Build modular REST APIs with NestJS Controllers, Injectable Providers, Guards, and ValidationPipes",
      "Integrate Prisma and auto-generate Swagger OpenAPI documentation in NestJS",
    ],
    projectContext:
      "Enterprise Reference: Understand how Smart City Issue Reporting APIs map to NestJS modules, controllers, and DI providers in large enterprise teams.",
    gate: "Explain: How the NestJS IoC container resolves dependencies and request lifecycle order | Implement: NestJS ValidationPipe + AuthGuard | Debug: Resolve a circular dependency between two modules | Apply: Build a modular CRUD resource with Swagger decorators.",
    miniBuild: "NestJS CRUD module with PrismaService, JWT AuthGuard, and Swagger documentation.",
    topics: [
      {
        id: "11-1",
        title: "NestJS Architecture & Dependency Injection",
        subtopics: [
          { id: "11-1-1", title: "Modules: @Module decorator, feature modules, shared & global modules", importance: "important" },
          { id: "11-1-2", title: "Controllers: @Controller routing, @Get/@Post/@Body/@Param/@Query decorators", importance: "important" },
          { id: "11-1-3", title: "Providers: @Injectable services and constructor dependency injection", importance: "important" },
          { id: "11-1-4", title: "IoC container internals: provider scopes (Singleton, Request, Transient) and custom providers", importance: "good-to-know" },
          { id: "11-1-5", title: "Module & application lifecycle hooks (onModuleInit, onApplicationShutdown)", importance: "good-to-know" },
        ],
      },
      {
        id: "11-2",
        title: "Pipes, Guards, Interceptors & Filters",
        subtopics: [
          { id: "11-2-1", title: "Pipes: payload validation and transformation (ValidationPipe / ZodValidationPipe)", importance: "important" },
          { id: "11-2-2", title: "Guards: CanActivate interface, ExecutionContext, and role-based @UseGuards", importance: "important" },
          { id: "11-2-3", title: "Interceptors: RxJS-based request/response logging, timing, and payload mapping", importance: "good-to-know" },
          { id: "11-2-4", title: "Exception Filters: @Catch decorator and standardized HTTP error formatting", importance: "good-to-know" },
          { id: "11-2-5", title: "NestJS request pipeline order: Middleware → Guards → Interceptors (pre) → Pipes → Controller → Interceptors (post) → Filters", importance: "good-to-know" },
        ],
      },
      {
        id: "11-3",
        title: "NestJS with Prisma & Swagger",
        subtopics: [
          { id: "11-3-1", title: "PrismaService lifecycle integration in NestJS", importance: "good-to-know" },
          { id: "11-3-2", title: "DTO validation with class-validator/class-transformer vs nestjs-zod", importance: "good-to-know" },
          { id: "11-3-3", title: "OpenAPI / Swagger generation with @nestjs/swagger (@ApiTags, @ApiOperation, @ApiResponse)", importance: "good-to-know" },
          { id: "11-3-4", title: "Passport.js & @nestjs/jwt authentication strategies", importance: "good-to-know" },
          { id: "11-3-5", title: "Typed configuration management with @nestjs/config", importance: "good-to-know" },
        ],
      },
    ],
  },
];

// ============================================================
// Helper functions for the tracker
// ============================================================

export function getTotalSubtopics(phases: Phase[]): number {
  return phases.reduce(
    (sum, phase) =>
      sum +
      phase.topics.reduce(
        (tSum, topic) => tSum + topic.subtopics.length,
        0
      ),
    0
  );
}

export function getTotalTopics(phases: Phase[]): number {
  return phases.reduce((sum, phase) => sum + phase.topics.length, 0);
}

export function getPhaseSubtopicCount(phase: Phase): number {
  return phase.topics.reduce(
    (sum, topic) => sum + topic.subtopics.length,
    0
  );
}
