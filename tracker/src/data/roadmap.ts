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
      "The language and tooling everything else is built on. Master strict typing, advanced type mechanics, and professional Git collaboration workflows.",
    weeks: "Weeks 1–2 (24-Week Plan)",
    outcomes: [
      "Configure strict tsconfig compiler settings for modern ESM projects with zero implicit any",
      "Model complex domain entities using discriminated unions, generics, mapped types, and satisfies",
      "Validate untrusted input at runtime boundaries while maintaining compile-time type safety",
      "Execute professional Git branching, interactive rebasing, merge conflict resolution, and atomic PR reviews",
    ],
    projectContext:
      "Collab-Code & Smart City: Define shared TypeScript domain models (Document, EditOperation, IssueReport, UserRole) and establish the Git branching & PR workflow for both repositories.",
    gate: "Explain: tsc pipeline & structural vs nominal typing | Implement: Generic type-safe event emitter | Debug: Resolve a 3-way Git merge conflict & type-widening bug | Apply: Commit clean type definitions to project repo using atomic PR commits.",
    miniBuild: "Type-Safe In-Memory Event Emitter with generic event maps, payload validation, and clean Git feature branch workflow with signed tags.",
    topics: [
      {
        id: "0-1",
        title: "tsconfig.json & Compiler Deep-Dive",
        subtopics: [
          { id: "0-1-1", title: "What tsc does: parse → type-check → emit", importance: "critical" },
          { id: "0-1-2", title: "strict mode and the 8 flags it enables", importance: "critical" },
          { id: "0-1-3", title: "target vs module vs moduleResolution", importance: "critical" },
          { id: "0-1-4", title: "noUncheckedIndexedAccess, noImplicitReturns", importance: "important" },
          { id: "0-1-5", title: "rootDir, outDir, include, exclude, extends", importance: "important" },
          { id: "0-1-6", title: "sourceMap, declaration, declarationMap", importance: "good-to-know" },
          { id: "0-1-7", title: "isolatedModules and why bundlers need it", importance: "important" },
        ],
      },
      {
        id: "0-2",
        title: "Primitives, Unions, Intersections & Literal Types",
        subtopics: [
          { id: "0-2-1", title: "string, number, boolean, null, undefined, symbol, bigint", importance: "critical" },
          { id: "0-2-2", title: "Literal types: 'hello', 42, true as types", importance: "critical" },
          { id: "0-2-3", title: "Union types (A | B) — the OR of types", importance: "critical" },
          { id: "0-2-4", title: "Intersection types (A & B) — the AND of types", importance: "critical" },
          { id: "0-2-5", title: "Type aliases vs inline types", importance: "important" },
          { id: "0-2-6", title: "const assertions (as const)", importance: "important" },
        ],
      },
      {
        id: "0-3",
        title: "Type Narrowing & Type Guards",
        subtopics: [
          { id: "0-3-1", title: "typeof narrowing", importance: "critical" },
          { id: "0-3-2", title: "instanceof narrowing", importance: "critical" },
          { id: "0-3-3", title: "in operator narrowing", importance: "critical" },
          { id: "0-3-4", title: "Discriminated unions (tagged unions)", importance: "critical" },
          { id: "0-3-5", title: "Custom type guard functions (is keyword)", importance: "critical" },
          { id: "0-3-6", title: "Truthiness narrowing and its pitfalls", importance: "important" },
          { id: "0-3-7", title: "Assertion functions (asserts keyword)", importance: "good-to-know" },
        ],
      },
      {
        id: "0-4",
        title: "Functions: Generics, Overloads, Infer",
        subtopics: [
          { id: "0-4-1", title: "Generic functions: <T>, constraints (extends)", importance: "critical" },
          { id: "0-4-2", title: "Generic defaults: <T = string>", importance: "important" },
          { id: "0-4-3", title: "Function overloads: multiple signatures", importance: "critical" },
          { id: "0-4-4", title: "Rest parameters and tuple types", importance: "important" },
          { id: "0-4-5", title: "The infer keyword in conditional types", importance: "important" },
          { id: "0-4-6", title: "Typing higher-order functions and callbacks", importance: "critical" },
          { id: "0-4-7", title: "void vs undefined return types", importance: "important" },
        ],
      },
      {
        id: "0-5",
        title: "Interfaces vs Types & Declaration Merging",
        subtopics: [
          { id: "0-5-1", title: "interface vs type: when to use which", importance: "critical" },
          { id: "0-5-2", title: "Declaration merging (interfaces only)", importance: "important" },
          { id: "0-5-3", title: "Extending interfaces (extends) vs intersecting types (&)", importance: "critical" },
          { id: "0-5-4", title: "Module augmentation with declare module", importance: "good-to-know" },
          { id: "0-5-5", title: "Index signatures: [key: string]: T", importance: "critical" },
          { id: "0-5-6", title: "Readonly properties and arrays", importance: "important" },
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
          { id: "0-6-5", title: "ReturnType<T> and Parameters<T>", importance: "critical" },
          { id: "0-6-6", title: "Extract<T, U> and Exclude<T, U>", importance: "important" },
          { id: "0-6-7", title: "NonNullable<T>, Awaited<T>", importance: "important" },
          { id: "0-6-8", title: "Implementing utility types from scratch", importance: "critical" },
        ],
      },
      {
        id: "0-7",
        title: "Mapped Types & Conditional Types",
        subtopics: [
          { id: "0-7-1", title: "Mapped types: { [K in keyof T]: ... }", importance: "critical" },
          { id: "0-7-2", title: "Key remapping with as clause", importance: "important" },
          { id: "0-7-3", title: "Conditional types: T extends U ? X : Y", importance: "critical" },
          { id: "0-7-4", title: "Distributive conditional types", importance: "important" },
          { id: "0-7-5", title: "Template literal types: `${A}-${B}`", importance: "important" },
          { id: "0-7-6", title: "Building real-world types with mapped + conditional", importance: "critical" },
        ],
      },
      {
        id: "0-8",
        title: "unknown vs any vs never & Exhaustive Checks",
        subtopics: [
          { id: "0-8-1", title: "any: escape hatch, when justified", importance: "critical" },
          { id: "0-8-2", title: "unknown: safe any, must narrow before use", importance: "critical" },
          { id: "0-8-3", title: "never: impossible type, bottom type", importance: "critical" },
          { id: "0-8-4", title: "Exhaustive switch with never (satisfies never)", importance: "critical" },
          { id: "0-8-5", title: "Enums vs const objects vs string unions", importance: "critical" },
          { id: "0-8-6", title: "Why string unions are usually preferred", importance: "important" },
        ],
      },
      {
        id: "0-9",
        title: "Modules: ESM vs CJS, Declaration Files",
        subtopics: [
          { id: "0-9-1", title: "ES Modules: import/export syntax", importance: "critical" },
          { id: "0-9-2", title: "CommonJS: require/module.exports", importance: "critical" },
          { id: "0-9-3", title: "package.json type: 'module' field", importance: "critical" },
          { id: "0-9-4", title: ".d.ts declaration files: what and why", importance: "important" },
          { id: "0-9-5", title: "declare keyword for ambient declarations", importance: "good-to-know" },
          { id: "0-9-6", title: "Module resolution: how TS finds imports", importance: "important" },
          { id: "0-9-7", title: "package.json exports field", importance: "important" },
        ],
      },
      {
        id: "0-10",
        title: "Git & Developer Collaboration Workflow",
        subtopics: [
          { id: "0-10-1", title: "Git branching models: feature branches, trunk-based vs Git-Flow", importance: "critical" },
          { id: "0-10-2", title: "Merging vs Rebasing: interactive rebase (git rebase -i), squash merging, commit cleanliness", importance: "critical" },
          { id: "0-10-3", title: "Merge conflict resolution mechanics, 3-way diffs, aborting rebases safely", importance: "critical" },
          { id: "0-10-4", title: "Safe undos: git revert vs git reset (--soft, --mixed, --hard) vs git restore", importance: "critical" },
          { id: "0-10-5", title: "Pull Request lifecycle: atomic commits, conventional commits, constructive code reviews", importance: "important" },
          { id: "0-10-6", title: "Release tags (git tag -a), Semantic Versioning (SemVer), and changelogs", importance: "important" },
          { id: "0-10-7", title: "Dependency lockfile hygiene: package-lock.json integrity, deterministic builds, npm ci vs npm install", importance: "critical" },
        ],
      },
      {
        id: "0-11",
        title: "Advanced TypeScript & Boundary Validation",
        subtopics: [
          { id: "0-11-1", title: "Structural typing (duck typing) vs nominal typing, and excess property check rules", importance: "critical" },
          { id: "0-11-2", title: "The satisfies operator: validating shapes without widening or losing literal types", importance: "critical" },
          { id: "0-11-3", title: "keyof operator and Indexed Access types (T[K], T[number])", importance: "critical" },
          { id: "0-11-4", title: "Function overloads: implementation signatures vs call signatures", importance: "important" },
          { id: "0-11-5", title: "Runtime validation at untrusted boundaries: why compile-time types alone cannot validate API input", importance: "critical" },
          { id: "0-11-6", title: "Ambient declarations, declare global, and augmenting third-party library types", importance: "important" },
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
      "The #1 interview filter. Event loop, microtask execution order, memory management, closures, prototypal inheritance, and async race condition prevention.",
    weeks: "Weeks 3–4 (24-Week Plan)",
    outcomes: [
      "Predict and trace event loop execution order across synchronous code, microtasks, timers, and I/O",
      "Implement robust asynchronous coordination patterns with timeout, cancellation, and concurrency limits",
      "Diagnose and eliminate memory leaks (lingering listeners, timer retention, circular closures)",
      "Prevent async race conditions in stateful client operations and server request handlers",
    ],
    projectContext:
      "Collab-Code: Prevent race conditions when merging concurrent keystrokes from multiple users; eliminate memory leaks in active code-editing rooms when users disconnect.",
    gate: "Explain: Call stack, macrotask, and microtask queue priorities | Implement: Promise.all from scratch with fail-fast semantics | Debug: Find and fix memory leak in unclosed WebSocket listener | Apply: Add AbortSignal timeout to code execution API calls in Collab-Code.",
    miniBuild: "Async Task Runner with retry + exponential backoff + cancellation (AbortSignal) + concurrency limit pool.",
    topics: [
      {
        id: "1-1",
        title: "Event Loop Internals",
        subtopics: [
          { id: "1-1-1", title: "Call stack: how function execution works", importance: "critical" },
          { id: "1-1-2", title: "Web APIs / Node APIs: setTimeout, fetch, I/O", importance: "critical" },
          { id: "1-1-3", title: "Task queue (macrotask queue)", importance: "critical" },
          { id: "1-1-4", title: "Microtask queue: Promise.then, queueMicrotask", importance: "critical" },
          { id: "1-1-5", title: "Event loop phases in Node.js (timers, poll, check)", importance: "important" },
          { id: "1-1-6", title: "setImmediate vs setTimeout(fn, 0) vs process.nextTick", importance: "important" },
          { id: "1-1-7", title: "Predict-the-output exercises (event loop order)", importance: "critical" },
        ],
      },
      {
        id: "1-2",
        title: "Promises Deep-Dive",
        subtopics: [
          { id: "1-2-1", title: "Promise states: pending, fulfilled, rejected", importance: "critical" },
          { id: "1-2-2", title: "Creating promises: new Promise((resolve, reject) => ...)", importance: "critical" },
          { id: "1-2-3", title: ".then(), .catch(), .finally() chaining", importance: "critical" },
          { id: "1-2-4", title: "Promise.all() — fail-fast parallel", importance: "critical" },
          { id: "1-2-5", title: "Promise.allSettled() — wait for all", importance: "critical" },
          { id: "1-2-6", title: "Promise.race() — first to settle wins", importance: "critical" },
          { id: "1-2-7", title: "Promise.any() — first to fulfill wins", importance: "important" },
          { id: "1-2-8", title: "Promise.withResolvers() (modern)", importance: "good-to-know" },
          { id: "1-2-9", title: "Implementing Promise.all from scratch", importance: "critical" },
        ],
      },
      {
        id: "1-3",
        title: "async/await Patterns & Pitfalls",
        subtopics: [
          { id: "1-3-1", title: "async functions always return a Promise", importance: "critical" },
          { id: "1-3-2", title: "Sequential vs parallel await", importance: "critical" },
          { id: "1-3-3", title: "Error handling: try/catch vs .catch()", importance: "critical" },
          { id: "1-3-4", title: "Avoiding unhandled promise rejections", importance: "critical" },
          { id: "1-3-5", title: "Top-level await", importance: "important" },
          { id: "1-3-6", title: "Common mistake: await in a loop (sequential vs parallel)", importance: "critical" },
          { id: "1-3-7", title: "for await...of for async iterables", importance: "important" },
        ],
      },
      {
        id: "1-4",
        title: "Closures & Scope",
        subtopics: [
          { id: "1-4-1", title: "Lexical scope and the scope chain", importance: "critical" },
          { id: "1-4-2", title: "What a closure is: function + its lexical environment", importance: "critical" },
          { id: "1-4-3", title: "Classic closure pitfalls: var in loops", importance: "critical" },
          { id: "1-4-4", title: "Closures for data privacy (module pattern)", importance: "important" },
          { id: "1-4-5", title: "Memory implications of closures", importance: "important" },
          { id: "1-4-6", title: "IIFE (Immediately Invoked Function Expression)", importance: "important" },
        ],
      },
      {
        id: "1-5",
        title: "this Binding & Prototypal Inheritance",
        subtopics: [
          { id: "1-5-1", title: "4 rules of this: default, implicit, explicit, new", importance: "critical" },
          { id: "1-5-2", title: "Arrow functions: lexical this", importance: "critical" },
          { id: "1-5-3", title: "bind(), call(), apply()", importance: "critical" },
          { id: "1-5-4", title: "Prototype chain: __proto__, Object.getPrototypeOf", importance: "critical" },
          { id: "1-5-5", title: "ES6 classes are syntactic sugar over prototypes", importance: "critical" },
          { id: "1-5-6", title: "Object.create() and prototypal patterns", importance: "important" },
        ],
      },
      {
        id: "1-6",
        title: "AbortController & Cancellation Patterns",
        subtopics: [
          { id: "1-6-1", title: "AbortController and AbortSignal", importance: "important" },
          { id: "1-6-2", title: "Cancelling fetch requests", importance: "important" },
          { id: "1-6-3", title: "Timeout patterns with AbortSignal.timeout()", importance: "important" },
          { id: "1-6-4", title: "Making custom APIs cancellable", importance: "good-to-know" },
        ],
      },
      {
        id: "1-7",
        title: "Error Handling Strategies",
        subtopics: [
          { id: "1-7-1", title: "Custom Error classes extending Error", importance: "critical" },
          { id: "1-7-2", title: "Operational vs programmer errors", importance: "important" },
          { id: "1-7-3", title: "Result/Either pattern (success | failure)", importance: "important" },
          { id: "1-7-4", title: "Error boundaries in different contexts", importance: "important" },
          { id: "1-7-5", title: "Global error handlers: uncaughtException, unhandledRejection", importance: "important" },
        ],
      },
      {
        id: "1-8",
        title: "Iterators, Generators & Async Generators",
        subtopics: [
          { id: "1-8-1", title: "Iterator protocol: Symbol.iterator, next()", importance: "important" },
          { id: "1-8-2", title: "Generator functions: function*, yield", importance: "important" },
          { id: "1-8-3", title: "Async generators: async function*, for await...of", importance: "important" },
          { id: "1-8-4", title: "Use cases: lazy evaluation, streaming data", importance: "good-to-know" },
        ],
      },
      {
        id: "1-9",
        title: "JavaScript Reliability, Memory & Concurrency Gotchas",
        subtopics: [
          { id: "1-9-1", title: "Object references, shallow copies (spread, Object.assign) vs deep copies (structuredClone)", importance: "critical" },
          { id: "1-9-2", title: "Equality and coercion: == vs === vs Object.is (-0, NaN, object reference identity)", importance: "critical" },
          { id: "1-9-3", title: "Immutability vs in-place mutation pitfalls in state and async workflows", importance: "critical" },
          { id: "1-9-4", title: "Async race conditions: stale responses, unsynchronized shared memory, out-of-order execution", importance: "critical" },
          { id: "1-9-5", title: "Memory leaks in JS: lingering event listeners, timer retention, detached DOM nodes, closures holding large scopes", importance: "critical" },
          { id: "1-9-6", title: "Debugging Node.js and browser JS using breakpoints, inspector, source maps, and memory profiling", importance: "important" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 2 — Web, Networking & Browser Architecture Fundamentals
  // ============================================================
  {
    id: "phase-2",
    number: 2,
    title: "Web & Browser Architecture Fundamentals",
    emoji: "🌐",
    description:
      "How the web actually works under the hood: networking lifecycles, browser rendering engines, accessible layout mechanics, web security, and performance metrics.",
    weeks: "Weeks 5–6 (24-Week Plan)",
    outcomes: [
      "Trace the full network journey from URL entry to first byte (DNS, TCP 3-way, TLS 1.3 handshake, HTTP/2/3)",
      "Optimize Critical Rendering Path by eliminating parser-blocking resources and layout thrashing",
      "Defend applications against OWASP Top 10 web vulnerabilities (XSS, CSRF, Clickjacking, CORS misconfiguration)",
      "Build fully accessible (a11y), responsive UI layouts adhering to semantic HTML and keyboard navigation standards",
    ],
    projectContext:
      "Smart City Issue Reporting: Public citizen reporting portal requires WCAG accessibility, responsive mobile layouts, secure cookie auth, and fast LCP image rendering on slow 4G connections.",
    gate: "Explain: Critical Rendering Path (DOM -> CSSOM -> Layout -> Paint -> Composite) | Implement: Secure CORS & Content Security Policy (CSP) headers | Debug: Diagnose and fix layout thrashing causing jank in scroll events | Apply: Make Smart City issue submission form 100% accessible with keyboard focus trap.",
    miniBuild: "Interactive Critical Rendering Path visualizer & security header analyzer (evaluating CORS, CSP, HSTS, X-Frame-Options).",
    topics: [
      {
        id: "2-1",
        title: "Networking Under the Hood",
        subtopics: [
          { id: "2-1-1", title: "What happens when you type a URL in the browser and hit Enter (complete journey)", importance: "critical" },
          { id: "2-1-2", title: "DNS resolution: recursive vs iterative queries, DNS record types (A, AAAA, CNAME, TXT)", importance: "critical" },
          { id: "2-1-3", title: "TCP 3-way handshake (SYN, SYN-ACK, ACK) and 4-way FIN termination", importance: "critical" },
          { id: "2-1-4", title: "TLS/HTTPS 1.3 handshake: certificates, asymmetric/symmetric encryption, forward secrecy", importance: "critical" },
          { id: "2-1-5", title: "HTTP Evolution: HTTP/1.1 vs HTTP/2 (multiplexing, HPACK) vs HTTP/3 (QUIC over UDP)", importance: "critical" },
          { id: "2-1-6", title: "Head-of-Line (HoL) blocking at application vs transport layer", importance: "important" },
        ],
      },
      {
        id: "2-2",
        title: "Browser Internals & Critical Rendering Path",
        subtopics: [
          { id: "2-2-1", title: "Browser architecture: Browser process, Renderer process, GPU process, Sandbox", importance: "important" },
          { id: "2-2-2", title: "Critical Rendering Path: HTML parser -> DOM Tree construction", importance: "critical" },
          { id: "2-2-3", title: "CSSOM construction & render-blocking CSS", importance: "critical" },
          { id: "2-2-4", title: "Parser-blocking JavaScript: script vs async vs defer", importance: "critical" },
          { id: "2-2-5", title: "Render Tree construction (combining DOM + CSSOM)", importance: "critical" },
          { id: "2-2-6", title: "Layout (Reflow) vs Paint vs Compositing", importance: "critical" },
          { id: "2-2-7", title: "Layout thrashing & forced synchronous layout (and how to avoid it)", importance: "critical" },
          { id: "2-2-8", title: "CSS GPU acceleration: transform, opacity, will-change", importance: "important" },
        ],
      },
      {
        id: "2-3",
        title: "CSS Mechanics & Layout Engine",
        subtopics: [
          { id: "2-3-1", title: "Box Model: content, padding, border, margin & box-sizing (border-box vs content-box)", importance: "critical" },
          { id: "2-3-2", title: "Block Formatting Context (BFC) and Margin Collapsing mechanics", importance: "critical" },
          { id: "2-3-3", title: "Stacking Context & z-index rules (opacity, transform, isolate)", importance: "critical" },
          { id: "2-3-4", title: "Flexbox layout algorithm: main-axis, cross-axis, flex-grow, flex-shrink, flex-basis", importance: "critical" },
          { id: "2-3-5", title: "CSS Grid: grid-template-columns, fr units, minmax(), auto-fit vs auto-fill", importance: "important" },
          { id: "2-3-6", title: "CSS Specificity calculation (inline vs ID vs class vs element) & @layer", importance: "important" },
        ],
      },
      {
        id: "2-4",
        title: "Web Security & OWASP Top 10 for Full-Stack",
        subtopics: [
          { id: "2-4-1", title: "Same-Origin Policy (SOP): origins, protocols, ports", importance: "critical" },
          { id: "2-4-2", title: "CORS deep-dive: Simple requests vs Preflight (OPTIONS), CORS headers", importance: "critical" },
          { id: "2-4-3", title: "Cross-Site Scripting (XSS): Stored, Reflected, DOM-based & sanitization", importance: "critical" },
          { id: "2-4-4", title: "Content Security Policy (CSP): directives, nonces, hashes", importance: "critical" },
          { id: "2-4-5", title: "Cross-Site Request Forgery (CSRF): attack mechanics & SameSite cookies / anti-CSRF tokens", importance: "critical" },
          { id: "2-4-6", title: "Clickjacking & X-Frame-Options / frame-ancestors", importance: "important" },
          { id: "2-4-7", title: "SQL Injection & NoSQL Injection defense", importance: "critical" },
          { id: "2-4-8", title: "Server-Side Request Forgery (SSRF) basics", importance: "important" },
        ],
      },
      {
        id: "2-5",
        title: "Client-Side Storage & HTTP Caching Mechanics",
        subtopics: [
          { id: "2-5-1", title: "Cookies: HttpOnly, Secure, SameSite (Strict, Lax, None), Domain, Path, Expiry", importance: "critical" },
          { id: "2-5-2", title: "LocalStorage vs SessionStorage: quotas, synchronous I/O, security risks", importance: "critical" },
          { id: "2-5-3", title: "IndexedDB: transactional client-side database, when to use", importance: "important" },
          { id: "2-5-4", title: "HTTP Caching headers: Cache-Control (max-age, no-cache, no-store, stale-while-revalidate)", importance: "critical" },
          { id: "2-5-5", title: "Validation caching: ETag vs Last-Modified, If-None-Match vs If-Modified-Since", importance: "critical" },
          { id: "2-5-6", title: "Service Workers & Cache API basics (PWA offline caching)", importance: "good-to-know" },
        ],
      },
      {
        id: "2-6",
        title: "Web Performance & Core Web Vitals",
        subtopics: [
          { id: "2-6-1", title: "Core Web Vitals: LCP (Largest Contentful Paint) & optimization", importance: "critical" },
          { id: "2-6-2", title: "Core Web Vitals: INP (Interaction to Next Paint) & main thread blocking", importance: "critical" },
          { id: "2-6-3", title: "Core Web Vitals: CLS (Cumulative Layout Shift) & aspect-ratio / layout stability", importance: "critical" },
          { id: "2-6-4", title: "Resource hints: preload, prefetch, preconnect, dns-prefetch", importance: "important" },
          { id: "2-6-5", title: "Bundle optimization: tree shaking, code splitting (dynamic import), compression (Gzip/Brotli)", importance: "critical" },
          { id: "2-6-6", title: "Image optimization: WebP/AVIF, responsive images (srcset, sizes), lazy loading", importance: "important" },
        ],
      },
      {
        id: "2-7",
        title: "Frontend Engineering Foundations: Accessibility, Layout & UI States",
        subtopics: [
          { id: "2-7-1", title: "Semantic HTML elements (main, nav, article, section, dialog) vs div soup", importance: "critical" },
          { id: "2-7-2", title: "Web accessibility (a11y): ARIA attributes (aria-label, aria-expanded, aria-live), contrast, screen readers", importance: "critical" },
          { id: "2-7-3", title: "Keyboard navigation & focus management: tabindex, visible focus rings, accessible modal focus traps", importance: "critical" },
          { id: "2-7-4", title: "Responsive design: mobile-first approach, fluid typography (clamp()), container queries vs media queries", importance: "important" },
          { id: "2-7-5", title: "Essential UI state design: loading skeletons, actionable error states, informative empty states", importance: "critical" },
          { id: "2-7-6", title: "Accessible form controls: labels, error descriptions (aria-describedby), disabled vs aria-disabled", importance: "critical" },
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
      "Understand how your server runtime works without framework magic. libuv event loop, thread pool, memory-efficient streams, child processes, profiling, and graceful shutdown.",
    weeks: "Weeks 7–8 (24-Week Plan)",
    outcomes: [
      "Explain the exact division of labor between V8, libuv event loop, and the 4-thread worker pool",
      "Process large datasets and media files using Node Streams and pipeline() without memory ballooning",
      "Profile CPU utilization and heap memory allocations to catch event loop lag and memory leaks",
      "Implement zero-downtime graceful shutdown patterns handling active request draining",
    ],
    projectContext:
      "Smart City: Stream citizen photo uploads directly to disk/storage using Transform streams without buffering whole files in RAM; ensure server drains active uploads on SIGTERM.",
    gate: "Explain: When Node.js uses threads under the hood vs when it is single-threaded | Implement: Transform stream pipeline with backpressure handling | Debug: Identify event-loop blocking synchronous operation using Node inspector | Apply: Add graceful shutdown listener with 10s drain window to backend server.",
    miniBuild: "Streaming CSV & Media processor with Transform streams, backpressure management, memory ceiling guard, and graceful shutdown.",
    topics: [
      {
        id: "3-1",
        title: "Node.js Architecture",
        subtopics: [
          { id: "3-1-1", title: "V8 engine: compilation, garbage collection", importance: "critical" },
          { id: "3-1-2", title: "libuv: async I/O, thread pool (4 threads default)", importance: "critical" },
          { id: "3-1-3", title: "Single-threaded but non-blocking model", importance: "critical" },
          { id: "3-1-4", title: "When Node.js IS multi-threaded (crypto, fs, DNS)", importance: "important" },
          { id: "3-1-5", title: "Event-driven architecture: EventEmitter", importance: "critical" },
        ],
      },
      {
        id: "3-2",
        title: "Streams",
        subtopics: [
          { id: "3-2-1", title: "Why streams: memory efficiency for large data", importance: "critical" },
          { id: "3-2-2", title: "Readable streams: flowing vs paused mode", importance: "critical" },
          { id: "3-2-3", title: "Writable streams: write, end, drain event", importance: "critical" },
          { id: "3-2-4", title: "Transform streams: modify data in transit", importance: "critical" },
          { id: "3-2-5", title: "pipeline() for safe stream composition", importance: "critical" },
          { id: "3-2-6", title: "Backpressure: what it is and why it matters", importance: "important" },
        ],
      },
      {
        id: "3-3",
        title: "File System, Path & Buffer",
        subtopics: [
          { id: "3-3-1", title: "fs/promises: readFile, writeFile, readdir, stat", importance: "critical" },
          { id: "3-3-2", title: "path: join, resolve, basename, extname, dirname", importance: "critical" },
          { id: "3-3-3", title: "Buffer: binary data handling", importance: "important" },
          { id: "3-3-4", title: "File watching: fs.watch", importance: "good-to-know" },
          { id: "3-3-5", title: "Temporary files and directories", importance: "good-to-know" },
        ],
      },
      {
        id: "3-4",
        title: "Worker Threads & Child Processes",
        subtopics: [
          { id: "3-4-1", title: "worker_threads: CPU-bound work off main thread", importance: "important" },
          { id: "3-4-2", title: "child_process: exec, spawn, fork", importance: "important" },
          { id: "3-4-3", title: "cluster module: multi-process for HTTP servers", importance: "important" },
          { id: "3-4-4", title: "When to use which: worker vs child vs cluster", importance: "important" },
        ],
      },
      {
        id: "3-5",
        title: "Process, Environment & Graceful Shutdown",
        subtopics: [
          { id: "3-5-1", title: "process.env: environment variables", importance: "critical" },
          { id: "3-5-2", title: ".env files and dotenv (or --env-file flag)", importance: "critical" },
          { id: "3-5-3", title: "process.exit, exit codes", importance: "important" },
          { id: "3-5-4", title: "Signal handling: SIGTERM, SIGINT", importance: "important" },
          { id: "3-5-5", title: "Graceful shutdown pattern", importance: "critical" },
        ],
      },
      {
        id: "3-6",
        title: "ESM in Node.js & Package Configuration",
        subtopics: [
          { id: "3-6-1", title: "package.json type: 'module' vs 'commonjs'", importance: "critical" },
          { id: "3-6-2", title: ".mjs vs .cjs file extensions", importance: "important" },
          { id: "3-6-3", title: "package.json exports field for dual packages", importance: "important" },
          { id: "3-6-4", title: "__dirname and __filename in ESM (import.meta)", importance: "important" },
          { id: "3-6-5", title: "Top-level await in ESM modules", importance: "good-to-know" },
        ],
      },
      {
        id: "3-7",
        title: "Node.js Production Reliability, Profiling & Dependency Hygiene",
        subtopics: [
          { id: "3-7-1", title: "CPU and memory profiling in Node: taking heap snapshots, detecting memory leaks with --inspect", importance: "important" },
          { id: "3-7-2", title: "Event loop lag monitoring & detecting main thread blocking operations", importance: "critical" },
          { id: "3-7-3", title: "Strict environment variable validation on boot using Zod (failing fast on missing config)", importance: "critical" },
          { id: "3-7-4", title: "Package management hygiene: semantic version ranges (^ vs ~ vs exact), peer dependencies, lockfile resolution", importance: "important" },
          { id: "3-7-5", title: "Security vulnerability auditing: npm audit, evaluating CVE severity, malicious package detection", importance: "important" },
          { id: "3-7-6", title: "Connection draining and zero-downtime graceful shutdown with active HTTP/WebSocket connections", importance: "critical" },
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
      "Production-grade backend engineering. Middleware pipelines, type-safe Zod validation, JWT access/refresh token rotation, RBAC, idempotency keys, rate limiting, and OpenAPI contracts.",
    weeks: "Weeks 9–10 (24-Week Plan)",
    outcomes: [
      "Construct robust Express middleware pipelines with centralized, typed error contracts",
      "Implement secure authentication with bcrypt, short-lived JWTs, and refresh token rotation in HttpOnly cookies",
      "Build idempotent API mutation endpoints with Idempotency-Key caching",
      "Validate and ingest file uploads safely with strict MIME and size controls",
    ],
    projectContext:
      "Smart City Issue Reporting: Implement citizen issue submission, staff assignment, role-based status updates (Citizen, Field Worker, Municipal Admin), and webhook triggers for resolved issues.",
    gate: "Explain: Access token vs refresh token storage & rotation security tradeoffs | Implement: Idempotency middleware preventing duplicate issue submissions | Debug: Fix an authentication bypass vulnerability in RBAC middleware guard | Apply: Generate complete OpenAPI spec and run Supertest API integration tests.",
    miniBuild: "Production REST API with JWT rotation, RBAC guards, Zod request validation, idempotency key support, Multer upload security, and auto-generated Swagger documentation.",
    topics: [
      {
        id: "4-1",
        title: "HTTP Fundamentals for APIs",
        subtopics: [
          { id: "4-1-1", title: "Request/response cycle & statelessness", importance: "critical" },
          { id: "4-1-2", title: "HTTP methods: GET, POST, PUT, PATCH, DELETE semantics", importance: "critical" },
          { id: "4-1-3", title: "Status codes: 2xx, 3xx, 4xx, 5xx families & correct usage", importance: "critical" },
          { id: "4-1-4", title: "Headers: Content-Type, Authorization, Accept, User-Agent", importance: "critical" },
          { id: "4-1-5", title: "API Idempotency: what it means and how to implement it", importance: "critical" },
        ],
      },
      {
        id: "4-2",
        title: "Express Middleware Pipeline",
        subtopics: [
          { id: "4-2-1", title: "What middleware is: (req, res, next) => void", importance: "critical" },
          { id: "4-2-2", title: "Middleware execution order & short-circuiting", importance: "critical" },
          { id: "4-2-3", title: "Application-level vs router-level middleware", importance: "critical" },
          { id: "4-2-4", title: "Built-in middleware: express.json(), express.static()", importance: "critical" },
          { id: "4-2-5", title: "Third-party: cors, helmet, morgan, compression", importance: "important" },
          { id: "4-2-6", title: "Error-handling middleware (4 parameters)", importance: "critical" },
        ],
      },
      {
        id: "4-3",
        title: "Request Validation with Zod",
        subtopics: [
          { id: "4-3-1", title: "Zod schemas: z.string(), z.object(), z.array()", importance: "critical" },
          { id: "4-3-2", title: "Validation: .parse() vs .safeParse()", importance: "critical" },
          { id: "4-3-3", title: "Inferring TypeScript types from Zod schemas (z.infer)", importance: "critical" },
          { id: "4-3-4", title: "Validating params, query, body separately", importance: "important" },
          { id: "4-3-5", title: "Custom error messages and transformations (coerce, refine)", importance: "important" },
          { id: "4-3-6", title: "Reusable validation middleware pattern", importance: "critical" },
        ],
      },
      {
        id: "4-4",
        title: "Error Handling in Express",
        subtopics: [
          { id: "4-4-1", title: "Async route wrapper (catchAsync / asyncHandler)", importance: "critical" },
          { id: "4-4-2", title: "Centralized error handling middleware", importance: "critical" },
          { id: "4-4-3", title: "AppError class with statusCode and isOperational", importance: "critical" },
          { id: "4-4-4", title: "Handling 404 (not found routes)", importance: "important" },
          { id: "4-4-5", title: "Structured error responses (consistent API shape)", importance: "important" },
        ],
      },
      {
        id: "4-5",
        title: "Authentication: JWT & Sessions",
        subtopics: [
          { id: "4-5-1", title: "Password hashing with bcrypt/argon2 (salting & work factor)", importance: "critical" },
          { id: "4-5-2", title: "JWT structure: header.payload.signature", importance: "critical" },
          { id: "4-5-3", title: "Access tokens vs refresh tokens (rotation pattern)", importance: "critical" },
          { id: "4-5-4", title: "Token storage: httpOnly cookies vs localStorage tradeoffs", importance: "critical" },
          { id: "4-5-5", title: "JWT verification middleware", importance: "critical" },
          { id: "4-5-6", title: "Session-based auth vs token-based auth tradeoffs", importance: "important" },
          { id: "4-5-7", title: "OAuth 2.0 & OpenID Connect flow overview", importance: "important" },
        ],
      },
      {
        id: "4-6",
        title: "Authorization & Security Practices",
        subtopics: [
          { id: "4-6-1", title: "RBAC (Role-Based Access Control)", importance: "critical" },
          { id: "4-6-2", title: "Middleware guards for protected routes", importance: "critical" },
          { id: "4-6-3", title: "Rate limiting: express-rate-limit & IP tracking", importance: "important" },
          { id: "4-6-4", title: "Security headers with Helmet", importance: "important" },
          { id: "4-6-5", title: "CORS configuration in Express", importance: "important" },
        ],
      },
      {
        id: "4-7",
        title: "REST Best Practices & API Design",
        subtopics: [
          { id: "4-7-1", title: "Resource naming conventions (plural nouns, nesting)", importance: "critical" },
          { id: "4-7-2", title: "Pagination: offset-based vs cursor-based (tradeoffs)", importance: "critical" },
          { id: "4-7-3", title: "Filtering, sorting, field selection design", importance: "important" },
          { id: "4-7-4", title: "API versioning strategies (URI, header, query)", importance: "important" },
          { id: "4-7-5", title: "HATEOAS overview", importance: "good-to-know" },
        ],
      },
      {
        id: "4-8",
        title: "API Testing with Supertest + Vitest",
        subtopics: [
          { id: "4-8-1", title: "Setting up supertest with Express", importance: "critical" },
          { id: "4-8-2", title: "Testing CRUD endpoints", importance: "critical" },
          { id: "4-8-3", title: "Testing auth flows (register, login, protected routes)", importance: "important" },
          { id: "4-8-4", title: "Testing error cases and edge cases", importance: "important" },
          { id: "4-8-5", title: "Test database setup and teardown", importance: "important" },
        ],
      },
      {
        id: "4-9",
        title: "Production API Reliability, Contracts & Ingestion",
        subtopics: [
          { id: "4-9-1", title: "Pagination at scale: offset-based vs cursor-based (keyset pagination) performance tradeoffs", importance: "critical" },
          { id: "4-9-2", title: "Standardized API error contracts: RFC 7807 Problem Details and consistent JSON error envelopes", importance: "critical" },
          { id: "4-9-3", title: "Idempotency keys (Idempotency-Key header): preventing duplicate charges/mutations on network retry", importance: "critical" },
          { id: "4-9-4", title: "Request timeouts and server-side request cancellation with AbortController", importance: "important" },
          { id: "4-9-5", title: "Request body payload limits (express.json({ limit: '1mb' })) and rate limiting bypass prevention", importance: "important" },
          { id: "4-9-6", title: "Webhook signature verification: HMAC SHA-256 raw body validation for third-party events", importance: "critical" },
          { id: "4-9-7", title: "Secure file uploads: Multer configuration, MIME-type sniffing vs extension validation, size limits, streaming to S3", importance: "critical" },
          { id: "4-9-8", title: "OpenAPI / Swagger documentation generation for Express APIs (tsoa or swagger-jsdoc)", importance: "important" },
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
      "PostgreSQL and Prisma as your primary relational engine. Normalization, complex SQL (Window functions, CTEs), indexing, transactions, locking, connection pooling, and zero-downtime migrations. (MongoDB secondary).",
    weeks: "Weeks 11–13 (24-Week Plan)",
    outcomes: [
      "Design normalized relational schemas (3NF) and write complex multi-table SQL queries with CTEs and Window functions",
      "Read and optimize query execution plans using EXPLAIN ANALYZE and composite B-tree indexes",
      "Prevent race conditions and deadlocks using ACID transactions and row-level locking (SELECT FOR UPDATE)",
      "Manage PostgreSQL connection pooling with PgBouncer and execute safe, zero-downtime Prisma migrations",
    ],
    projectContext:
      "Smart City Issue Reporting: Design the complete relational data model (Users, Issues, Comments, Upvotes, AuditLogs, Categories) with JSONB metadata and concurrent upvote transaction locking.",
    gate: "Explain: Four ACID isolation levels and their concurrency anomalies (dirty, non-repeatable, phantom reads, write skew) | Implement: Safe Prisma migration using expand-and-contract pattern | Debug: Diagnose and eliminate a deadlock under concurrent issue upvotes | Apply: Optimize slow issue search query using composite index and GIN index on JSONB.",
    miniBuild: "High-concurrency PostgreSQL schema with Prisma ORM, JSONB attribute indexing, transactional row locking for issue assignment, and automated seed factories.",
    topics: [
      {
        id: "5-1",
        title: "Relational Database Fundamentals",
        subtopics: [
          { id: "5-1-1", title: "Tables, rows, columns, primary keys, surrogate vs natural keys", importance: "critical" },
          { id: "5-1-2", title: "Foreign keys and relationships (1:1, 1:N, M:N)", importance: "critical" },
          { id: "5-1-3", title: "Database Normalization: 1NF, 2NF, 3NF & BCNF", importance: "critical" },
          { id: "5-1-4", title: "Denormalization: when and why to do it", importance: "important" },
          { id: "5-1-5", title: "Constraints: NOT NULL, UNIQUE, CHECK, DEFAULT, FOREIGN KEY CASCADE", importance: "important" },
        ],
      },
      {
        id: "5-2",
        title: "SQL Deep-Dive",
        subtopics: [
          { id: "5-2-1", title: "SELECT, WHERE, ORDER BY, LIMIT, OFFSET", importance: "critical" },
          { id: "5-2-2", title: "JOINs: INNER, LEFT, RIGHT, FULL, CROSS JOIN", importance: "critical" },
          { id: "5-2-3", title: "GROUP BY, HAVING, aggregate functions (COUNT, SUM, AVG, MAX)", importance: "critical" },
          { id: "5-2-4", title: "Subqueries: correlated vs non-correlated subqueries", importance: "critical" },
          { id: "5-2-5", title: "Window functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, SUM OVER", importance: "critical" },
          { id: "5-2-6", title: "CTEs (Common Table Expressions): WITH clause & recursive CTEs", importance: "critical" },
          { id: "5-2-7", title: "INSERT, UPDATE, DELETE, UPSERT (ON CONFLICT DO UPDATE)", importance: "critical" },
          { id: "5-2-8", title: "Views and Materialized Views", importance: "important" },
        ],
      },
      {
        id: "5-3",
        title: "Indexing & Query Performance",
        subtopics: [
          { id: "5-3-1", title: "What an index is: B-Tree internal structure", importance: "critical" },
          { id: "5-3-2", title: "When to create indexes (and when NOT to index)", importance: "critical" },
          { id: "5-3-3", title: "Composite indexes and leftmost prefix rule", importance: "critical" },
          { id: "5-3-4", title: "EXPLAIN and EXPLAIN ANALYZE: reading query execution plans", importance: "critical" },
          { id: "5-3-5", title: "Covering indexes & index-only scans", importance: "important" },
          { id: "5-3-6", title: "GIN, GiST indexes (JSONB & full-text search)", importance: "good-to-know" },
        ],
      },
      {
        id: "5-4",
        title: "Transactions & ACID",
        subtopics: [
          { id: "5-4-1", title: "ACID properties deep-dive (Atomicity, Consistency, Isolation, Durability)", importance: "critical" },
          { id: "5-4-2", title: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT", importance: "critical" },
          { id: "5-4-3", title: "Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable", importance: "critical" },
          { id: "5-4-4", title: "Concurrency anomalies: Dirty reads, Non-repeatable reads, Phantom reads, Write skew", importance: "critical" },
          { id: "5-4-5", title: "Deadlocks: causes, detection, and mitigation strategies", importance: "important" },
          { id: "5-4-6", title: "Optimistic vs Pessimistic locking (SELECT FOR UPDATE)", importance: "important" },
        ],
      },
      {
        id: "5-5",
        title: "Prisma ORM",
        subtopics: [
          { id: "5-5-1", title: "Prisma schema: models, fields, relations, attributes", importance: "critical" },
          { id: "5-5-2", title: "Migrations: prisma migrate dev, deploy, status", importance: "critical" },
          { id: "5-5-3", title: "Prisma Client: type-safe CRUD queries", importance: "critical" },
          { id: "5-5-4", title: "Relations: 1:1, 1:N, M:N explicit vs implicit", importance: "critical" },
          { id: "5-5-5", title: "Filtering, sorting, pagination in Prisma", importance: "important" },
          { id: "5-5-6", title: "Raw SQL queries with $queryRaw and $executeRaw", importance: "important" },
          { id: "5-5-7", title: "Transactions in Prisma: sequential vs interactive $transaction", importance: "important" },
          { id: "5-5-8", title: "Database seeding with prisma db seed", importance: "good-to-know" },
        ],
      },
      {
        id: "5-6",
        title: "MongoDB & Mongoose Essentials (Secondary)",
        subtopics: [
          { id: "5-6-1", title: "Document model vs Relational model (when to use NoSQL)", importance: "good-to-know" },
          { id: "5-6-2", title: "Schema design patterns: Embedding vs Referencing tradeoffs", importance: "good-to-know" },
          { id: "5-6-3", title: "CRUD operations with Mongoose + TypeScript typing", importance: "good-to-know" },
          { id: "5-6-4", title: "Aggregation pipeline: $match, $group, $project, $lookup, $unwind", importance: "good-to-know" },
          { id: "5-6-5", title: "Indexes in MongoDB & explain('executionStats')", importance: "good-to-know" },
          { id: "5-6-6", title: "Multi-document transactions in MongoDB", importance: "good-to-know" },
        ],
      },
      {
        id: "5-7",
        title: "PostgreSQL & Prisma Production Reliability & Operations",
        subtopics: [
          { id: "5-7-1", title: "Database connection pooling: PgBouncer, Prisma connection pool sizing, diagnosing pool starvation", importance: "critical" },
          { id: "5-7-2", title: "Handling DB connection dropouts, transient network failures, and retry backoff strategies", importance: "critical" },
          { id: "5-7-3", title: "Safe migration strategies: zero-downtime expand-and-contract pattern, avoiding table-locking ALTER TABLE", importance: "critical" },
          { id: "5-7-4", title: "Read replicas vs primary database: replication lag, routing read queries to replicas", importance: "important" },
          { id: "5-7-5", title: "PostgreSQL JSONB: querying nested documents (->, ->>), JSONB operators (@>), GIN indexes for JSONB", importance: "critical" },
          { id: "5-7-6", title: "Database backup and disaster recovery: logical backups (pg_dump, pg_restore) vs physical point-in-time recovery", importance: "important" },
          { id: "5-7-7", title: "Slow query optimization: finding N+1 queries in Prisma, utilizing $queryRaw when ORM abstractions generate poor SQL", importance: "critical" },
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
    title: "React & Next.js App Router (Production Quality)",
    emoji: "⚛️",
    description:
      "Modern React and Next.js App Router engineering. Fiber reconciliation, hook rules, memoization, Server Components, Server Actions, multi-tier caching, optimistic UI, accessible forms, and hydration debugging.",
    weeks: "Weeks 14–16 (24-Week Plan)",
    outcomes: [
      "Architect React applications leveraging React Server Components for zero-bundle data fetching",
      "Implement optimistic mutations with automatic error rollback using Server Actions and useOptimistic",
      "Diagnose and resolve Next.js hydration errors and multi-tier cache staleness issues",
      "Analyze and optimize production bundle sizes with bundle analyzers and code splitting",
    ],
    projectContext:
      "Collab-Code & Smart City: Build the interactive citizen dashboard with real-time upvoting, dynamic status filters, Server Actions form handling, and accessible modal views.",
    gate: "Explain: React Server Components vs Client Components serialization boundaries | Implement: Optimistic UI mutation with error rollback in a Server Action | Debug: Track down and fix a Next.js hydration mismatch caused by client-only state | Apply: Analyze bundle output and split heavy code-editor components dynamically.",
    miniBuild: "Production Next.js App Router dashboard featuring Server Components data loading, Server Actions forms with Zod, optimistic upvoting with rollback, and bundle visualizer report.",
    topics: [
      {
        id: "6-1",
        title: "React Internals & Rendering",
        subtopics: [
          { id: "6-1-1", title: "Virtual DOM and reconciliation algorithm", importance: "critical" },
          { id: "6-1-2", title: "React Fiber architecture: lanes, scheduling, priority", importance: "important" },
          { id: "6-1-3", title: "Keys: why indexes as keys cause bugs, diffing algorithm", importance: "critical" },
          { id: "6-1-4", title: "Automatic batching in React 18+", importance: "important" },
          { id: "6-1-5", title: "Strict Mode double-rendering: why it happens and what it checks", importance: "important" },
          { id: "6-1-6", title: "Component lifecycle: render phase vs commit phase", importance: "critical" },
        ],
      },
      {
        id: "6-2",
        title: "Hooks Deep-Dive",
        subtopics: [
          { id: "6-2-1", title: "useState: state mechanics, updater functions, lazy initialization", importance: "critical" },
          { id: "6-2-2", title: "useEffect: side effects, dependency array pitfalls, cleanup functions", importance: "critical" },
          { id: "6-2-3", title: "useRef: DOM references, mutable instance values without re-render", importance: "critical" },
          { id: "6-2-4", title: "useReducer: complex state logic & action dispatching", importance: "critical" },
          { id: "6-2-5", title: "useContext: accessing context, re-rendering gotchas", importance: "critical" },
          { id: "6-2-6", title: "Rules of Hooks: why top-level only (linked list of hook fibers)", importance: "critical" },
          { id: "6-2-7", title: "useId, useSyncExternalStore, useDeferredValue", importance: "good-to-know" },
        ],
      },
      {
        id: "6-3",
        title: "Performance: useMemo, useCallback, React.memo",
        subtopics: [
          { id: "6-3-1", title: "When React re-renders (state, props, context, parent)", importance: "critical" },
          { id: "6-3-2", title: "React.memo: shallow prop comparison to skip re-renders", importance: "critical" },
          { id: "6-3-3", title: "useMemo: caching expensive calculations", importance: "critical" },
          { id: "6-3-4", title: "useCallback: stable function references for memoized children", importance: "critical" },
          { id: "6-3-5", title: "When NOT to memoize (overhead of memoization)", importance: "important" },
          { id: "6-3-6", title: "React Compiler (React Forget) overview", importance: "good-to-know" },
        ],
      },
      {
        id: "6-4",
        title: "Custom Hooks & Composition Patterns",
        subtopics: [
          { id: "6-4-1", title: "Extracting reusable custom hooks", importance: "critical" },
          { id: "6-4-2", title: "Common hooks: useDebounce, useLocalStorage, useWindowSize, useOnClickOutside", importance: "important" },
          { id: "6-4-3", title: "Component composition vs prop drilling", importance: "important" },
          { id: "6-4-4", title: "Render props pattern", importance: "important" },
          { id: "6-4-5", title: "Compound components pattern", importance: "good-to-know" },
        ],
      },
      {
        id: "6-5",
        title: "State Management Architecture",
        subtopics: [
          { id: "6-5-1", title: "State colocation: local vs lifted vs global state", importance: "critical" },
          { id: "6-5-2", title: "Context API for global state & preventing unnecessary re-renders", importance: "critical" },
          { id: "6-5-3", title: "Zustand: lightweight client-state store", importance: "important" },
          { id: "6-5-4", title: "Server state vs Client state distinction", importance: "critical" },
          { id: "6-5-5", title: "TanStack Query (React Query) concepts: caching, refetching, mutations", importance: "important" },
        ],
      },
      {
        id: "6-6",
        title: "React Server Components (RSC)",
        subtopics: [
          { id: "6-6-1", title: "Server Components vs Client Components paradigm shift", importance: "critical" },
          { id: "6-6-2", title: "'use client' and 'use server' directives", importance: "critical" },
          { id: "6-6-3", title: "What Server Components can and cannot do", importance: "critical" },
          { id: "6-6-4", title: "Serialization boundary: passing props from Server to Client", importance: "important" },
          { id: "6-6-5", title: "Benefits: 0-bundle-size dependencies, direct DB access, streaming", importance: "important" },
        ],
      },
      {
        id: "6-7",
        title: "Next.js App Router Architecture",
        subtopics: [
          { id: "6-7-1", title: "File-based routing: page.tsx, layout.tsx, template.tsx, loading.tsx, error.tsx, not-found.tsx", importance: "critical" },
          { id: "6-7-2", title: "Nested layouts and state preservation", importance: "critical" },
          { id: "6-7-3", title: "Route groups: (group) organization", importance: "important" },
          { id: "6-7-4", title: "Dynamic routes: [slug], [...catchAll], [[...optional]]", importance: "critical" },
          { id: "6-7-5", title: "Parallel routes (@modal) and Intercepting routes ((.))", importance: "good-to-know" },
          { id: "6-7-6", title: "Middleware: authentication & route redirection", importance: "important" },
          { id: "6-7-7", title: "Route handlers: route.ts (REST endpoints)", importance: "important" },
        ],
      },
      {
        id: "6-8",
        title: "Data Fetching, Caching & Mutations in Next.js",
        subtopics: [
          { id: "6-8-1", title: "Async Server Components data fetching", importance: "critical" },
          { id: "6-8-2", title: "Server Actions: form handling with 'use server'", importance: "critical" },
          { id: "6-8-3", title: "Revalidation: revalidatePath and revalidateTag", importance: "critical" },
          { id: "6-8-4", title: "Static rendering vs Dynamic rendering", importance: "important" },
          { id: "6-8-5", title: "Streaming with Suspense and loading.tsx", importance: "important" },
          { id: "6-8-6", title: "useTransition and useOptimistic for immediate UI feedback", importance: "important" },
        ],
      },
      {
        id: "6-9",
        title: "Forms, Validation & UI Patterns",
        subtopics: [
          { id: "6-9-1", title: "Controlled vs Uncontrolled components", importance: "critical" },
          { id: "6-9-2", title: "React Hook Form + Zod schema resolver", importance: "important" },
          { id: "6-9-3", title: "Server Action form validation with Zod", importance: "important" },
          { id: "6-9-4", title: "next/image optimization, next/font, Metadata API for SEO", importance: "important" },
        ],
      },
      {
        id: "6-10",
        title: "React & Next.js Production Quality, Hydration & Resilience",
        subtopics: [
          { id: "6-10-1", title: "Hydration errors deep-dive: SSR vs CSR mismatch causes, debugging hydration warnings, two-pass rendering", importance: "critical" },
          { id: "6-10-2", title: "Next.js multi-tier caching model: Request Memoization, Data Cache, Full Route Cache, Router Cache", importance: "critical" },
          { id: "6-10-3", title: "Server state management: TanStack Query (React Query) for client cache invalidation, polling, and background refetching", importance: "important" },
          { id: "6-10-4", title: "Optimistic updates with automatic rollback on network failure in Server Actions & client queries", importance: "critical" },
          { id: "6-10-5", title: "Resilient file uploads in React: drag-and-drop, progress indication, presigned S3 URLs, client-side validation", importance: "critical" },
          { id: "6-10-6", title: "Bundle analysis: diagnosing heavy packages using @next/bundle-analyzer, dynamic imports, code splitting", importance: "important" },
          { id: "6-10-7", title: "End-to-end authentication in App Router: middleware route protection, cookie synchronization, session refreshing", importance: "critical" },
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
      "Scaling the data and communication plane. Redis caching patterns, BullMQ background job queues with idempotent workers, failure recovery, Socket.io real-time rooms, and connection resilience.",
    weeks: "Weeks 17–18 (24-Week Plan)",
    outcomes: [
      "Design resilient caching layers with Cache-Aside pattern, TTL, and cache stampede protection",
      "Process asynchronous background tasks with BullMQ handling retries, exponential backoff, and dead-letter queues",
      "Architect WebSocket connection lifecycles with room namespaces, token auth, and reconnect state resync",
      "Eliminate duplicate job execution by designing idempotent workers and transactional deduplication keys",
    ],
    projectContext:
      "Collab-Code & Smart City: Collab-Code requires bidirectional WebSockets with Redis adapter for real-time code sync & presence; Smart City utilizes BullMQ for processing citizen email/SMS alerts and image thumbnails.",
    gate: "Explain: At-least-once delivery implications and how to guarantee worker idempotency | Implement: BullMQ job worker with exponential backoff, jitter, and dead-letter queue routing | Debug: Fix a WebSocket reconnect bug where clients miss state updates during reconnection | Apply: Scale Socket.io across two Node processes using Redis Pub/Sub adapter.",
    miniBuild: "Real-time collaborative room with WebSocket reconnect state resync + BullMQ resilient notification queue with idempotent worker processing.",
    topics: [
      {
        id: "7-1",
        title: "Redis Fundamentals",
        subtopics: [
          { id: "7-1-1", title: "Redis data structures: String, Hash, List, Set, Sorted Set", importance: "critical" },
          { id: "7-1-2", title: "Key commands: GET, SET, DEL, EXISTS, EXPIRE, TTL, INCR", importance: "critical" },
          { id: "7-1-3", title: "Use cases: caching, session storage, rate limiting, leaderboards", importance: "critical" },
          { id: "7-1-4", title: "Redis persistence: RDB snapshots vs AOF logs", importance: "important" },
          { id: "7-1-5", title: "Redis Pub/Sub architecture", importance: "important" },
          { id: "7-1-6", title: "Redis transactions: MULTI/EXEC", importance: "good-to-know" },
        ],
      },
      {
        id: "7-2",
        title: "Caching Strategies & Patterns",
        subtopics: [
          { id: "7-2-1", title: "Cache-Aside (Lazy Loading) pattern", importance: "critical" },
          { id: "7-2-2", title: "Write-Through, Write-Behind, and Write-Around patterns", importance: "important" },
          { id: "7-2-3", title: "Cache invalidation strategies (TTL, event-driven)", importance: "critical" },
          { id: "7-2-4", title: "Cache stampede / thundering herd problem & mutex locks", importance: "important" },
          { id: "7-2-5", title: "Cache penetration, breakdown, and avalanche prevention", importance: "important" },
        ],
      },
      {
        id: "7-3",
        title: "BullMQ: Job Queues & Background Processing",
        subtopics: [
          { id: "7-3-1", title: "Queue, Worker, Job: core architecture", importance: "critical" },
          { id: "7-3-2", title: "Job lifecycle: waiting → active → completed / failed", importance: "critical" },
          { id: "7-3-3", title: "Retries, exponential backoff, and Dead Letter Queues (DLQ)", importance: "important" },
          { id: "7-3-4", title: "Delayed jobs and repeatable (cron) jobs", importance: "important" },
          { id: "7-3-5", title: "Worker concurrency control & rate limiting", importance: "important" },
          { id: "7-3-6", title: "Monitoring queue health with Bull Board", importance: "good-to-know" },
        ],
      },
      {
        id: "7-4",
        title: "WebSockets & Socket.io",
        subtopics: [
          { id: "7-4-1", title: "WebSocket protocol: HTTP 101 upgrade handshake, bidirectional frames", importance: "critical" },
          { id: "7-4-2", title: "Socket.io: events, emit, on, broadcast, namespaces, rooms", importance: "critical" },
          { id: "7-4-3", title: "Typing Socket.io client and server events with TypeScript", importance: "important" },
          { id: "7-4-4", title: "Authentication in WebSockets (handshake auth & token renewal)", importance: "important" },
          { id: "7-4-5", title: "Scaling WebSockets across multiple servers: sticky sessions & Redis adapter", importance: "important" },
          { id: "7-4-6", title: "Server-Sent Events (SSE) vs WebSockets tradeoffs", importance: "important" },
        ],
      },
      {
        id: "7-5",
        title: "Distributed Failure Scenarios: Jobs, Caching & Real-Time Recovery",
        subtopics: [
          { id: "7-5-1", title: "Handling duplicate jobs and designing strictly idempotent queue workers", importance: "critical" },
          { id: "7-5-2", title: "Message delivery semantics: at-most-once vs at-least-once delivery tradeoffs in queues and sockets", importance: "critical" },
          { id: "7-5-3", title: "Worker crashes & stalled job recovery: lock renewals, stalledInterval, and dead-letter queues (DLQ)", importance: "critical" },
          { id: "7-5-4", title: "Retry storms and thundering herds: exponential backoff with random jitter in background jobs and network retries", importance: "critical" },
          { id: "7-5-5", title: "WebSocket reconnection resilience: heartbeats/ping-pong, connection drops, and missed message buffering on client reconnect", importance: "critical" },
          { id: "7-5-6", title: "Redis memory eviction policies (LRU, LFU, volatile vs allkeys) and handling Redis memory exhaustion", importance: "important" },
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
      "Enterprise test-driven engineering. Vitest unit tests, real database integration tests, RBAC security regressions, React Testing Library accessibility queries, and Playwright E2E automation for critical business flows.",
    weeks: "Weeks 19–20 (24-Week Plan)",
    outcomes: [
      "Write maintainable unit and mock tests with Vitest using the Arrange-Act-Assert (AAA) pattern",
      "Execute true database integration tests against real PostgreSQL instances with test isolation",
      "Automate authentication and RBAC authorization regression test matrices",
      "Create resilient End-to-End browser tests with Playwright using Page Object Model (POM)",
    ],
    projectContext:
      "Smart City & Collab-Code: Build integration tests for citizen issue registration -> staff assignment -> status resolution; E2E test the full citizen flow with image attachment.",
    gate: "Explain: Why testing user behavior is superior to testing component implementation details | Implement: Supertest database integration test with transaction rollback | Debug: Diagnose and fix a flaky async test caused by unhandled timers | Apply: Write a Playwright E2E test verifying RBAC permission boundaries.",
    miniBuild: "Automated test suite encompassing unit tests, RBAC security regression tests, Supertest database integration tests, and Playwright E2E issue submission flow.",
    topics: [
      {
        id: "8-1",
        title: "Testing Fundamentals & Philosophy",
        subtopics: [
          { id: "8-1-1", title: "Testing pyramid vs Testing trophy", importance: "critical" },
          { id: "8-1-2", title: "TDD: Red → Green → Refactor cycle", importance: "important" },
          { id: "8-1-3", title: "What to test vs what NOT to test (testing behavior over implementation)", importance: "critical" },
          { id: "8-1-4", title: "AAA pattern: Arrange, Act, Assert", importance: "critical" },
        ],
      },
      {
        id: "8-2",
        title: "Vitest: Unit Testing",
        subtopics: [
          { id: "8-2-1", title: "Test suite setup: describe, it, test, expect, hooks", importance: "critical" },
          { id: "8-2-2", title: "Matchers: toBe, toEqual, toThrow, toContain, toHaveLength", importance: "critical" },
          { id: "8-2-3", title: "Mocking: vi.fn(), vi.mock(), vi.spyOn()", importance: "critical" },
          { id: "8-2-4", title: "Testing async code: resolves, rejects, promises", importance: "critical" },
          { id: "8-2-5", title: "Fake timers: vi.useFakeTimers(), advanceTimersByTime", importance: "important" },
          { id: "8-2-6", title: "Snapshot testing: when to use and risks", importance: "good-to-know" },
        ],
      },
      {
        id: "8-3",
        title: "Integration Testing",
        subtopics: [
          { id: "8-3-1", title: "API integration testing with Supertest", importance: "critical" },
          { id: "8-3-2", title: "Database integration testing: test DB isolation, migrations, seeds", importance: "critical" },
          { id: "8-3-3", title: "Testcontainers concept for isolated PostgreSQL and Redis testing", importance: "important" },
          { id: "8-3-4", title: "Mocking external HTTP services with MSW (Mock Service Worker)", importance: "important" },
        ],
      },
      {
        id: "8-4",
        title: "React Testing Library",
        subtopics: [
          { id: "8-4-1", title: "Query priority: getByRole > getByLabelText > getByText > getByTestId", importance: "critical" },
          { id: "8-4-2", title: "User interactions with userEvent (async)", importance: "critical" },
          { id: "8-4-3", title: "Testing custom hooks with renderHook", importance: "important" },
          { id: "8-4-4", title: "Testing async loading and error UI states", importance: "important" },
        ],
      },
      {
        id: "8-5",
        title: "Playwright: End-to-End Testing",
        subtopics: [
          { id: "8-5-1", title: "Playwright setup: config, browsers, baseURL, traces", importance: "critical" },
          { id: "8-5-2", title: "Locators: getByRole, getByText, locator assertions", importance: "critical" },
          { id: "8-5-3", title: "Page Object Model (POM) architecture", importance: "important" },
          { id: "8-5-4", title: "Fixtures and authentication state re-use", importance: "important" },
          { id: "8-5-5", title: "Network interception: page.route()", importance: "important" },
          { id: "8-5-6", title: "Visual regression snapshots", importance: "good-to-know" },
        ],
      },
      {
        id: "8-6",
        title: "Advanced Testing: DB Integration, Security Regressions & Load Testing",
        subtopics: [
          { id: "8-6-1", title: "True database integration testing: using test databases, automated migrations, seeds, and transactional test rollbacks", importance: "critical" },
          { id: "8-6-2", title: "Authentication & Authorization regression tests: verifying RBAC permission matrices (guest, citizen, staff, admin)", importance: "critical" },
          { id: "8-6-3", title: "API schema contract testing: ensuring frontend and backend contracts stay synchronized", importance: "important" },
          { id: "8-6-4", title: "Load and stress testing: benchmarking API latency and throughput under high concurrency using Autocannon or k6", importance: "important" },
          { id: "8-6-5", title: "Critical business flow testing: writing tests for core end-to-end user journeys over chasing arbitrary 100% coverage", importance: "critical" },
          { id: "8-6-6", title: "Flaky test prevention: isolating async timing, avoiding hardcoded sleeps, using polling assertions", importance: "important" },
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
      "Ship software reliably and operate it in production. Multi-stage Docker packaging, Docker Compose multi-service environments, GitHub Actions CI pipelines, practical AWS core services (EC2, S3, RDS, IAM), metrics, and zero-downtime migrations.",
    weeks: "Weeks 21–22 (24-Week Plan)",
    outcomes: [
      "Package Node and Next.js applications into secure, lightweight (<150MB) multi-stage Docker images",
      "Orchestrate local multi-service stacks (Web + API + PostgreSQL + Redis) with Docker Compose and healthchecks",
      "Automate linting, type-checking, testing, and container deployment via GitHub Actions CI/CD",
      "Instrument applications with structured JSON logging, RED metrics, and zero-downtime database migration scripts",
    ],
    projectContext:
      "Smart City & Collab-Code: Containerize both applications; create Docker Compose for local development; deploy to cloud VPS / AWS EC2 with S3 image storage and budget alerts.",
    gate: "Explain: Multi-stage Docker build layer caching and non-root security principles | Implement: GitHub Actions workflow with pnpm/npm caching, lint, test, and container build | Debug: Troubleshoot a container crash loop caused by missing runtime environment variables | Apply: Execute zero-downtime database migration during container rollout.",
    miniBuild: "Production Dockerized full-stack deployment with Docker Compose, automated GitHub Actions CI pipeline, S3 presigned upload integration, and health check endpoints.",
    topics: [
      {
        id: "9-1",
        title: "Docker Fundamentals",
        subtopics: [
          { id: "9-1-1", title: "Images vs Containers vs Volumes vs Networks", importance: "critical" },
          { id: "9-1-2", title: "Dockerfile instructions: FROM, WORKDIR, COPY, RUN, CMD, ENTRYPOINT, EXPOSE", importance: "critical" },
          { id: "9-1-3", title: "Multi-stage builds for small, secure production images", importance: "critical" },
          { id: "9-1-4", title: ".dockerignore best practices", importance: "important" },
          { id: "9-1-5", title: "Layer caching order and build optimization", importance: "important" },
          { id: "9-1-6", title: "Non-root user in Docker for security", importance: "important" },
        ],
      },
      {
        id: "9-2",
        title: "Docker Compose",
        subtopics: [
          { id: "9-2-1", title: "docker-compose.yml: services, ports, volumes, networks, environment", importance: "critical" },
          { id: "9-2-2", title: "Multi-service environment: Node app + PostgreSQL + Redis", importance: "critical" },
          { id: "9-2-3", title: "Healthchecks and depends_on with condition: service_healthy", importance: "important" },
          { id: "9-2-4", title: "Persistent volume management for databases", importance: "important" },
        ],
      },
      {
        id: "9-3",
        title: "GitHub Actions CI/CD",
        subtopics: [
          { id: "9-3-1", title: "Workflow files: triggers (push, pull_request), jobs, steps", importance: "critical" },
          { id: "9-3-2", title: "Running linting, type-checking, and tests in CI", importance: "critical" },
          { id: "9-3-3", title: "Caching dependencies: pnpm/npm store cache", importance: "important" },
          { id: "9-3-4", title: "Secrets management and environment variables", importance: "critical" },
          { id: "9-3-5", title: "Building and publishing Docker images to GitHub Container Registry", importance: "important" },
        ],
      },
      {
        id: "9-4",
        title: "AWS Cloud Basics & Cost Safeguards",
        subtopics: [
          { id: "9-4-1", title: "EC2: virtual compute instances, security groups, SSH keys", importance: "critical" },
          { id: "9-4-2", title: "S3: object storage, bucket policies, presigned URLs for secure uploads", importance: "critical" },
          { id: "9-4-3", title: "RDS: managed PostgreSQL, automated backups, multi-AZ", importance: "important" },
          { id: "9-4-4", title: "IAM: least privilege principle, users, roles, policies", importance: "critical" },
          { id: "9-4-5", title: "Lambda: serverless compute & cold starts", importance: "important" },
          { id: "9-4-6", title: "SQS: managed message queues & dead-letter queues", importance: "important" },
          { id: "9-4-7", title: "CloudFront: global CDN caching", importance: "good-to-know" },
        ],
      },
      {
        id: "9-5",
        title: "Deployment & Production Observability",
        subtopics: [
          { id: "9-5-1", title: "Deployment strategies: Rolling updates, Blue-Green, Canary", importance: "important" },
          { id: "9-5-2", title: "Structured JSON logging with correlation/request IDs", importance: "important" },
          { id: "9-5-3", title: "Health check endpoints (/health/live vs /health/ready)", importance: "important" },
          { id: "9-5-4", title: "Managing environments: dev, staging, production configuration", importance: "important" },
        ],
      },
      {
        id: "9-6",
        title: "Production Observability, Security & Deployment Safeguards",
        subtopics: [
          { id: "9-6-1", title: "Application telemetry: RED method metrics (Rate, Errors, Duration) and measuring latency percentiles (p50, p95, p99)", importance: "critical" },
          { id: "9-6-2", title: "Distributed tracing fundamentals: trace IDs, correlation IDs across HTTP requests, queues, and database calls", importance: "important" },
          { id: "9-6-3", title: "Automated deployment rollbacks: health check failure triggers, blue-green switchback, rolling back bad commits", importance: "critical" },
          { id: "9-6-4", title: "Safe database migrations in CI/CD pipelines: running migrations before app container cutover without downtime", importance: "critical" },
          { id: "9-6-5", title: "Container security: vulnerability scanning with Trivy/Docker Scout, non-root users, minimal base images (Alpine/Distroless)", importance: "important" },
          { id: "9-6-6", title: "Cloud cost guardrails: AWS billing alerts, stopping dev instances, tracking egress costs, staying in free tiers", importance: "important" },
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
    title: "Practical System Design & Capstone Architecture",
    emoji: "🏗️",
    description:
      "Practical entry-level and mid-level system design. Capacity estimation, bottleneck analysis, failure modes, rate limiters, URL shorteners, and architectural hardening of Collab-Code and Smart City projects.",
    weeks: "Weeks 23–24 (24-Week Plan)",
    outcomes: [
      "Perform back-of-the-envelope capacity estimations (QPS, storage, bandwidth, memory) for real-world user bases",
      "Identify architectural bottlenecks (CPU vs disk I/O vs network latency) and articulate concrete failure mitigation plans",
      "Design standard interview systems (Rate Limiter, URL Shortener, Notification Engine, Collaborative Workspace)",
      "Conduct a comprehensive production readiness and architectural audit of your two flagship projects",
    ],
    projectContext:
      "Collab-Code & Smart City: Formalize complete system architecture diagrams, data flow specifications, failure mode recovery plans, and scalability benchmarks for both portfolio projects.",
    gate: "Explain: Back-of-the-envelope QPS and storage math for 500,000 daily active users | Implement: Redis sliding-window log rate limiter with IP and user token keys | Debug: Resolve a single-point-of-failure in a primary-replica database setup | Apply: Defend Collab-Code and Smart City architectural decisions in a simulated senior interview.",
    miniBuild: "Complete System Design document, capacity calculations, and working reference prototype for an API Rate Limiter with Sliding Window algorithm.",
    topics: [
      {
        id: "10-1",
        title: "Architecture Patterns",
        subtopics: [
          { id: "10-1-1", title: "Monolith vs Microservices: real-world tradeoffs and migration", importance: "critical" },
          { id: "10-1-2", title: "Clean / Hexagonal architecture (separation of concerns)", importance: "important" },
          { id: "10-1-3", title: "MVC, Layered architecture in Node.js", importance: "critical" },
          { id: "10-1-4", title: "API Gateway and BFF (Backend For Frontend) pattern", importance: "important" },
          { id: "10-1-5", title: "Event-driven architecture with message brokers", importance: "important" },
          { id: "10-1-6", title: "CQRS and Event Sourcing basics", importance: "good-to-know" },
        ],
      },
      {
        id: "10-2",
        title: "Distributed Systems Concepts",
        subtopics: [
          { id: "10-2-1", title: "CAP Theorem (Consistency, Availability, Partition tolerance)", importance: "critical" },
          { id: "10-2-2", title: "Consistency models: Strong vs Eventual consistency", importance: "critical" },
          { id: "10-2-3", title: "Load balancing algorithms: Round Robin, Least Connections, Consistent Hashing", importance: "critical" },
          { id: "10-2-4", title: "Horizontal vs Vertical scaling & state management", importance: "critical" },
          { id: "10-2-5", title: "Database sharding, partitioning, and read replicas", importance: "important" },
          { id: "10-2-6", title: "Replication: Leader-Follower vs Multi-Leader", importance: "important" },
        ],
      },
      {
        id: "10-3",
        title: "Common System Design Problems",
        subtopics: [
          { id: "10-3-1", title: "Design a URL Shortener (Bitly/TinyURL): ID generation (Base62), schema, caching", importance: "critical" },
          { id: "10-3-2", title: "Design a Rate Limiter: Token Bucket, Leaky Bucket, Sliding Window Log", importance: "critical" },
          { id: "10-3-3", title: "Design a Real-Time Chat App: WebSocket connection management, presence", importance: "important" },
          { id: "10-3-4", title: "Design a Notification Service: fan-out, user preferences, rate limiting", importance: "important" },
          { id: "10-3-5", title: "Design an S3-style File Upload Service: presigned URLs, multipart uploads", importance: "important" },
        ],
      },
      {
        id: "10-4",
        title: "Monorepo Architecture",
        subtopics: [
          { id: "10-4-1", title: "pnpm/npm workspaces: dependency hoisting, workspace packages", importance: "important" },
          { id: "10-4-2", title: "Sharing TypeScript types between frontend and backend", importance: "important" },
          { id: "10-4-3", title: "Internal shared packages (eslint-config, tsconfig, ui, utils)", importance: "important" },
          { id: "10-4-4", title: "Turborepo / Nx build caching and task pipelines", importance: "good-to-know" },
        ],
      },
      {
        id: "10-5",
        title: "Practical System Design: Capacity Estimation, Bottlenecks & Operational Costs",
        subtopics: [
          { id: "10-5-1", title: "Back-of-the-envelope capacity calculations: estimating QPS, peak throughput, storage, bandwidth, and RAM for 100K DAU", importance: "critical" },
          { id: "10-5-2", title: "Bottleneck analysis: identifying CPU bound vs memory vs disk I/O vs network latency bottlenecks in real architectures", importance: "critical" },
          { id: "10-5-3", title: "Explicit failure scenarios: primary database failover, Redis eviction/outage, third-party API outage resilience", importance: "critical" },
          { id: "10-5-4", title: "Real-world reliability tradeoffs: Consistency vs Availability in collaborative editing (Collab-Code) vs civic reporting (Smart City)", importance: "critical" },
          { id: "10-5-5", title: "Operational cost analysis of architectural choices: serverless vs long-running containers, CDN caching cost savings", importance: "important" },
          { id: "10-5-6", title: "Production architecture review and hardening of Collab-Code and Smart City Issue Reporting", importance: "critical" },
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
      "Enterprise-grade Node.js architecture. Built on decorators, modules, and Dependency Injection. (Optional extension: valuable for corporate and enterprise MNC placement rounds).",
    weeks: "Post-Core Extension (Bonus)",
    outcomes: [
      "Understand enterprise architectural structure (Inversion of Control and Dependency Injection)",
      "Build modular REST APIs with NestJS Controllers, Services, Guards, and Pipes",
      "Integrate Prisma and auto-generate Swagger OpenAPI documentation in NestJS",
    ],
    projectContext:
      "Enterprise Reference: Learn how Smart City Issue Reporting APIs would be structured in a large-scale corporate enterprise codebase using NestJS modular architecture.",
    gate: "Explain: How the NestJS IoC container resolves dependencies | Implement: NestJS ValidationPipe with Zod/class-validator | Debug: Fix a circular dependency issue between two NestJS modules | Apply: Build a modular CRUD resource with Swagger docs.",
    miniBuild: "NestJS CRUD API with Prisma, JWT authentication guard, and auto-generated Swagger documentation.",
    topics: [
      {
        id: "11-1",
        title: "NestJS Architecture & Dependency Injection",
        subtopics: [
          { id: "11-1-1", title: "Modules: @Module decorator, feature modules, global modules", importance: "important" },
          { id: "11-1-2", title: "Controllers: @Controller, routing, request/response decorators", importance: "important" },
          { id: "11-1-3", title: "Providers: @Injectable, service layer", importance: "important" },
          { id: "11-1-4", title: "Dependency Injection: how IoC container works under the hood", importance: "important" },
          { id: "11-1-5", title: "Lifecycle hooks: onModuleInit, onApplicationBootstrap", importance: "good-to-know" },
        ],
      },
      {
        id: "11-2",
        title: "Pipes, Guards, Interceptors & Filters",
        subtopics: [
          { id: "11-2-1", title: "Pipes: validation and data transformation (ValidationPipe)", importance: "important" },
          { id: "11-2-2", title: "Guards: authentication and authorization (@UseGuards)", importance: "important" },
          { id: "11-2-3", title: "Interceptors: logging, response mapping, caching", importance: "good-to-know" },
          { id: "11-2-4", title: "Exception Filters: catching and formatting HTTP exceptions", importance: "good-to-know" },
          { id: "11-2-5", title: "NestJS execution order: Middleware → Guard → Interceptor → Pipe → Handler", importance: "important" },
        ],
      },
      {
        id: "11-3",
        title: "NestJS with Prisma & Swagger",
        subtopics: [
          { id: "11-3-1", title: "Prisma Module and Service integration in NestJS", importance: "important" },
          { id: "11-3-2", title: "DTOs with class-validator or Zod integration", importance: "important" },
          { id: "11-3-3", title: "Swagger / OpenAPI generation: @ApiTags, @ApiResponse", importance: "good-to-know" },
          { id: "11-3-4", title: "Authentication with Passport.js & JWT Strategy", importance: "good-to-know" },
          { id: "11-3-5", title: "Configuration management with @nestjs/config", importance: "good-to-know" },
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
