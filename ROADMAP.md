# ⚡ Full-Stack TypeScript Mastery Roadmap (24-Week Plan)

> **Target:** 2027 B.Tech CS Placement & Off-Campus SDE / Full-Stack Readiness  
> **Study Cadence:** 4–5 Hours/Day (~30–32 hrs/week: 2.5h Implementation & Core Stack + 1h Debugging/Testing + 1h Revision, Verbal Explain-Back & Interview Drills)  
> **Flagship Projects:** Collab-Code & Smart City Issue Reporting  
> **Stats:** 12 Phases • 85 Topics • 502 Subtopics (🔴 195 Critical • 🟡 213 Important • 🟢 94 Good to Know)

---

## 🔷 Phase 0: TypeScript Core & Developer Workflow (Weeks 1–2 (24-Week Plan))

The language and tooling everything else is built on. Master strict TypeScript 5.x typing, advanced type mechanics, module resolution, and professional Git collaboration workflows.

**🎯 Project Anchor:** Collab-Code & Smart City: Define shared TypeScript domain models (Document, EditOperation, IssueReport, UserRole), eliminate any/unsafe casts in existing project files, and establish clean Git branching & PR hygiene.

**📋 Outcomes & Job-Readiness Milestones:**
- Configure strict tsconfig compiler settings (noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax) with zero implicit any
- Model complex domain entities using discriminated unions, generics, mapped types, variance, and satisfies
- Validate untrusted input at runtime boundaries while maintaining compile-time type safety
- Execute professional Git branching, interactive rebasing, merge conflict resolution, and atomic PR reviews
- Job-Readiness Cadence (Weeks 1–2): Practice 15-minute daily verbal 'explain-back' drills on TS narrowing & structural typing; audit Git commit history of Collab-Code and Smart City repos

### 0-1 tsconfig.json & Compiler Deep-Dive
- [ ] **0-1-1** What tsc does: parse → bind → type-check → emit pipeline — 🔴 critical
- [ ] **0-1-2** strict mode and the core strictness flags it enables (strictNullChecks, noImplicitAny, strictFunctionTypes) — 🔴 critical
- [ ] **0-1-3** target vs module vs moduleResolution (node16, nodenext, bundler) — 🔴 critical
- [ ] **0-1-4** Strict compiler safeguards: noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax, noImplicitReturns — 🔴 critical
- [ ] **0-1-5** rootDir, outDir, include, exclude, extends — 🟡 important
- [ ] **0-1-6** sourceMap, declaration (.d.ts), declarationMap — 🟢 good-to-know
- [ ] **0-1-7** isolatedModules and why single-file transpilers (esbuild/Vite/SWC) require it — 🟡 important

### 0-2 Primitives, Unions, Intersections & Literal Types
- [ ] **0-2-1** string, number, boolean, null, undefined, symbol, bigint — 🔴 critical
- [ ] **0-2-2** Literal types and type widening vs narrowing — 🔴 critical
- [ ] **0-2-3** Union types (A | B) — modeling mutually exclusive states — 🔴 critical
- [ ] **0-2-4** Intersection types (A & B) — combining structural contracts — 🟡 important
- [ ] **0-2-5** Type aliases vs inline types — 🟡 important
- [ ] **0-2-6** const assertions (as const) for deep readonly literal inference — 🟡 important

### 0-3 Type Narrowing & Type Guards
- [ ] **0-3-1** typeof narrowing and typeof null pitfalls — 🔴 critical
- [ ] **0-3-2** instanceof narrowing for class and Error instances — 🟡 important
- [ ] **0-3-3** in operator property narrowing — 🟡 important
- [ ] **0-3-4** Discriminated unions (tagged unions) for state machines and API responses — 🔴 critical
- [ ] **0-3-5** Custom type guard functions (param is Type predicate) — 🟡 important
- [ ] **0-3-6** Truthiness narrowing pitfalls (0, '', NaN) — 🟡 important
- [ ] **0-3-7** Assertion functions (asserts condition) — 🟢 good-to-know

### 0-4 Functions: Generics, Overloads, Infer
- [ ] **0-4-1** Generic functions: <T>, type constraints (extends), and multiple type parameters — 🔴 critical
- [ ] **0-4-2** Generic parameter defaults: <T = unknown> — 🟢 good-to-know
- [ ] **0-4-3** Function overloads: call signatures vs implementation signatures — 🟡 important
- [ ] **0-4-4** Rest parameters and variadic tuple types — 🟢 good-to-know
- [ ] **0-4-5** The infer keyword in conditional types — 🟡 important
- [ ] **0-4-6** Typing higher-order functions and asynchronous callbacks — 🔴 critical
- [ ] **0-4-7** void vs undefined return types in callback contextual typing — 🟢 good-to-know

### 0-5 Interfaces vs Types & Declaration Merging
- [ ] **0-5-1** interface vs type: structural equivalence, performance, and ergonomics — 🔴 critical
- [ ] **0-5-2** Declaration merging (interfaces only — e.g., extending Express Request) — 🟡 important
- [ ] **0-5-3** Extending interfaces (extends) vs intersecting types (&) conflict resolution — 🟡 important
- [ ] **0-5-4** Module augmentation with declare module — 🟢 good-to-know
- [ ] **0-5-5** Index signatures ([key: string]: T) vs Record<string, T> — 🟡 important
- [ ] **0-5-6** readonly modifier on properties, tuples, and arrays — 🟡 important

### 0-6 Utility Types
- [ ] **0-6-1** Partial<T> and Required<T> — 🔴 critical
- [ ] **0-6-2** Pick<T, K> and Omit<T, K> — 🔴 critical
- [ ] **0-6-3** Record<K, V> — 🔴 critical
- [ ] **0-6-4** Readonly<T> and ReadonlyArray<T> — 🟡 important
- [ ] **0-6-5** ReturnType<T> and Parameters<T> — 🟡 important
- [ ] **0-6-6** Extract<T, U> and Exclude<T, U> — 🟡 important
- [ ] **0-6-7** NonNullable<T> and Awaited<T> — 🟡 important
- [ ] **0-6-8** Implementing core utility types from scratch (interview favorite) — 🟡 important

### 0-7 Mapped Types & Conditional Types
- [ ] **0-7-1** Mapped types: { [K in keyof T]: ... } and mapping modifiers (+?, -readonly) — 🟡 important
- [ ] **0-7-2** Key remapping with as clause — 🟢 good-to-know
- [ ] **0-7-3** Conditional types: T extends U ? X : Y — 🟡 important
- [ ] **0-7-4** Distributive conditional types and preventing distribution with [T] — 🟢 good-to-know
- [ ] **0-7-5** Template literal types: `${A}-${B}` — 🟢 good-to-know
- [ ] **0-7-6** Building practical API & form types with mapped + conditional types — 🟡 important

### 0-8 unknown vs any vs never & Exhaustive Checks
- [ ] **0-8-1** any: why it disables type checking and spreads unsafety — 🔴 critical
- [ ] **0-8-2** unknown: type-safe top type requiring narrowing before use — 🔴 critical
- [ ] **0-8-3** never: unreachable code and bottom type mechanics — 🔴 critical
- [ ] **0-8-4** Exhaustive switch checks with never (default: val satisfies never) — 🔴 critical
- [ ] **0-8-5** TypeScript Enums vs const objects vs string literal unions — 🟡 important
- [ ] **0-8-6** Why string literal unions / as const objects are preferred over runtime Enums — 🟡 important

### 0-9 Modules: ESM vs CJS, Declaration Files
- [ ] **0-9-1** ES Modules (ESM): static import/export, live bindings, tree-shaking — 🔴 critical
- [ ] **0-9-2** CommonJS (CJS): synchronous require/module.exports and ESM interop gotchas — 🟡 important
- [ ] **0-9-3** package.json type: 'module' and file extension rules (.js/.mjs/.cjs) — 🔴 critical
- [ ] **0-9-4** .d.ts declaration files: consuming @types/* and authoring ambient types — 🟡 important
- [ ] **0-9-5** declare keyword for ambient variables and modules — 🟢 good-to-know
- [ ] **0-9-6** TypeScript module resolution: Classic vs Node16/NodeNext vs Bundler & path aliases — 🟡 important
- [ ] **0-9-7** package.json exports, imports, and typesVersions resolution — 🟢 good-to-know

### 0-10 Git & Developer Collaboration Workflow
- [ ] **0-10-1** Git branching models: feature branches and trunk-based development vs Git-Flow — 🔴 critical
- [ ] **0-10-2** Merging vs Rebasing: interactive rebase (git rebase -i), squash merging, linear history — 🔴 critical
- [ ] **0-10-3** Merge conflict resolution mechanics, 3-way diffs, and aborting rebases safely — 🔴 critical
- [ ] **0-10-4** Safe undos: git revert vs git reset (--soft, --mixed, --hard) vs git restore & reflog recovery — 🔴 critical
- [ ] **0-10-5** Pull Request lifecycle: atomic commits, conventional commits, self-review, code review etiquette — 🟡 important
- [ ] **0-10-6** Release tags (git tag -a), Semantic Versioning (SemVer), and changelogs — 🟢 good-to-know
- [ ] **0-10-7** Dependency lockfile hygiene: package-lock.json integrity, deterministic builds, npm ci vs npm install — 🔴 critical

### 0-11 Advanced TypeScript & Boundary Validation
- [ ] **0-11-1** Structural typing (duck typing) vs nominal typing, freshness, and excess property check rules — 🔴 critical
- [ ] **0-11-2** The satisfies operator (TS 4.9+): validating shapes without widening or losing literal inference — 🟡 important
- [ ] **0-11-3** keyof operator and Indexed Access types (T[K], T[number]) — 🔴 critical
- [ ] **0-11-4** Type variance in TypeScript: covariance vs contravariance in function parameters, return types, and generic in/out annotations — 🟢 good-to-know
- [ ] **0-11-5** Runtime validation at untrusted boundaries: why compile-time types erase at runtime and must be paired with Zod/validators — 🔴 critical
- [ ] **0-11-6** Ambient declarations, declare global, and augmenting third-party library types (e.g., process.env, Express Request) — 🟡 important

**🛠️ Mini-Build:** Type-Safe In-Memory Event Emitter with generic event maps, runtime boundary validation, and clean Git feature-branch workflow.

**🚪 Completion Gate:** Explain (Verbal 2-min drill): tsc pipeline, structural vs nominal typing, and variance | Implement: Generic type-safe event emitter with overloaded signatures | Debug: Resolve a 3-way Git merge conflict & type-widening bug | Apply: Refactor Collab-Code & Smart City shared types using discriminated unions and satisfies.

---

## ⚡ Phase 1: JavaScript Runtime, Concurrency & Reliability (Weeks 3–4 (24-Week Plan))

The #1 technical interview filter. Event loop, microtask execution order, memory management, closures, prototypal inheritance, and async race condition prevention.

**🎯 Project Anchor:** Collab-Code: Prevent race conditions when merging concurrent keystrokes from multiple users; eliminate memory leaks in active code-editing rooms when users disconnect.

**📋 Outcomes & Job-Readiness Milestones:**
- Predict and trace event loop execution order across synchronous code, microtasks, timers, and I/O
- Implement robust asynchronous coordination patterns with timeout, cancellation, and concurrency limits
- Diagnose and eliminate memory leaks (lingering listeners, timer retention, circular closures)
- Prevent async race conditions in stateful client operations and server request handlers
- Job-Readiness Cadence (Weeks 3–4): Complete 6 timed 20-minute JS async/closure output-prediction & debugging exercises; practice explaining Collab-Code's concurrent edit handling

### 1-1 Event Loop Internals
- [ ] **1-1-1** Call stack: execution contexts, stack frames, and stack overflow — 🔴 critical
- [ ] **1-1-2** Web APIs / C++ Host APIs: setTimeout, fetch, DOM events, I/O — 🔴 critical
- [ ] **1-1-3** Task queue (macrotask queue) scheduling — 🔴 critical
- [ ] **1-1-4** Microtask queue: Promise.then/catch/finally, queueMicrotask, MutationObserver — 🔴 critical
- [ ] **1-1-5** Event loop phases in Node.js (timers, pending, poll, check, close) — 🟡 important
- [ ] **1-1-6** setImmediate vs setTimeout(fn, 0) vs process.nextTick starvation risks — 🟡 important
- [ ] **1-1-7** Predict-the-output interview exercises (interleaved async/await, Promises, and timers) — 🔴 critical

### 1-2 Promises Deep-Dive
- [ ] **1-2-1** Promise states: pending, fulfilled, rejected (and immutability once settled) — 🔴 critical
- [ ] **1-2-2** Creating promises: new Promise((resolve, reject) => ...) executor semantics — 🔴 critical
- [ ] **1-2-3** .then(), .catch(), .finally() chaining and value/rejection propagation — 🔴 critical
- [ ] **1-2-4** Promise.all() — fail-fast parallel coordination — 🔴 critical
- [ ] **1-2-5** Promise.allSettled() — partial failure resilience — 🟡 important
- [ ] **1-2-6** Promise.race() — timeout racing and first-to-settle — 🟡 important
- [ ] **1-2-7** Promise.any() — first to fulfill (AggregateError) — 🟢 good-to-know
- [ ] **1-2-8** Promise.withResolvers() (ES2024) — 🟢 good-to-know
- [ ] **1-2-9** Implementing Promise.all and Promise.allSettled from scratch — 🟡 important

### 1-3 async/await Patterns & Pitfalls
- [ ] **1-3-1** async functions always return a Promise (wrapping & unwrapping) — 🔴 critical
- [ ] **1-3-2** Sequential await vs parallel Promise.all execution — 🔴 critical
- [ ] **1-3-3** Error handling: try/catch vs .catch() and return vs return await in try/catch — 🔴 critical
- [ ] **1-3-4** Avoiding unhandled promise rejections and floating promises — 🔴 critical
- [ ] **1-3-5** Top-level await in ES modules — 🟢 good-to-know
- [ ] **1-3-6** Common anti-pattern: accidental sequential await inside for/forEach/map loops — 🔴 critical
- [ ] **1-3-7** for await...of for consuming async iterables and streams — 🟡 important

### 1-4 Closures & Scope
- [ ] **1-4-1** Lexical scope, block scope (let/const), hoisting, and Temporal Dead Zone (TDZ) — 🔴 critical
- [ ] **1-4-2** What a closure is: function bundled with its lexical environment record — 🔴 critical
- [ ] **1-4-3** Classic closure pitfalls: var in loops, stale closures in callbacks/hooks — 🔴 critical
- [ ] **1-4-4** Closures for encapsulation, memoization, debounce, and throttle — 🟡 important
- [ ] **1-4-5** Memory retention implications of closures in long-lived handlers — 🟡 important
- [ ] **1-4-6** IIFE (Immediately Invoked Function Expression) and module scope isolation — 🟢 good-to-know

### 1-5 this Binding & Prototypal Inheritance
- [ ] **1-5-1** 4 rules of this: default (strict vs sloppy), implicit, explicit, and new binding — 🔴 critical
- [ ] **1-5-2** Arrow functions: lexical this binding and why they cannot be constructors — 🔴 critical
- [ ] **1-5-3** Explicit context binding: bind(), call(), apply() — 🟡 important
- [ ] **1-5-4** Prototype chain lookup: [[Prototype]], Object.getPrototypeOf, hasOwn — 🟡 important
- [ ] **1-5-5** ES6 classes, extends, super, and private fields (#field) over prototypes — 🟡 important
- [ ] **1-5-6** Object.create() and delegation patterns — 🟢 good-to-know

### 1-6 AbortController & Cancellation Patterns
- [ ] **1-6-1** AbortController and AbortSignal lifecycle — 🟡 important
- [ ] **1-6-2** Cancelling in-flight fetch requests and streams — 🔴 critical
- [ ] **1-6-3** Timeout patterns with AbortSignal.timeout() and AbortSignal.any() — 🟡 important
- [ ] **1-6-4** Making custom async workflows cancellable with signal listeners — 🟢 good-to-know

### 1-7 Error Handling Strategies
- [ ] **1-7-1** Custom Error subclasses extending Error (preserving stack & Error.cause) — 🔴 critical
- [ ] **1-7-2** Operational errors (recoverable) vs programmer bugs (crash & restart) — 🟡 important
- [ ] **1-7-3** Result / Either discriminated union pattern ({ ok: true, data } | { ok: false, error }) — 🟡 important
- [ ] **1-7-4** Error boundary isolation across async layers — 🟡 important
- [ ] **1-7-5** Global process handlers: uncaughtException and unhandledRejection safe teardown — 🟡 important

### 1-8 Iterators, Generators & Async Generators
- [ ] **1-8-1** Iterable and Iterator protocols: Symbol.iterator, next() — 🟢 good-to-know
- [ ] **1-8-2** Generator functions: function*, yield, lazy sequences — 🟢 good-to-know
- [ ] **1-8-3** Async generators: async function*, paginated API cursor streaming — 🟢 good-to-know
- [ ] **1-8-4** Use cases: lazy evaluation and memory-bounded batch processing — 🟢 good-to-know

### 1-9 JavaScript Reliability, Memory & Concurrency Gotchas
- [ ] **1-9-1** Value vs reference: shallow copies (spread, Object.assign) vs deep copies (structuredClone) — 🔴 critical
- [ ] **1-9-2** Equality and type coercion: == vs === vs Object.is (-0, NaN, reference identity) — 🟡 important
- [ ] **1-9-3** Immutability vs accidental in-place mutation (.sort vs .toSorted, .splice vs .toSpliced) — 🔴 critical
- [ ] **1-9-4** Async race conditions: stale responses overwriting newer state, read-modify-write hazards — 🔴 critical
- [ ] **1-9-5** Memory leaks in JS: unremoved event listeners, uncleaned intervals, unbounded Map/object caches — 🟡 important
- [ ] **1-9-6** Debugging JS/TS with Chrome DevTools & VS Code debugger: conditional breakpoints, call stacks, heap snapshots — 🟡 important

**🛠️ Mini-Build:** Async Task Runner with retry + exponential backoff + cancellation (AbortSignal) + concurrency limit pool.

**🚪 Completion Gate:** Explain (Timed 3-min interview drill): Call stack, macrotask, and microtask queue priorities | Implement: Promise.all and debounce/throttle from scratch | Debug: Find and fix a memory leak in an unclosed WebSocket listener | Apply: Add AbortSignal timeout to code execution API calls in Collab-Code.

---

## 🌐 Phase 2: Web & Browser Architecture Fundamentals (Weeks 5–6 (24-Week Plan))

How the web works in production: HTTP/HTTPS lifecycles, browser rendering pipelines, CSS layout mechanics, OWASP web security, Core Web Vitals, and accessible UI engineering.

**🎯 Project Anchor:** Smart City Issue Reporting: Public citizen reporting portal requires WCAG keyboard accessibility, mobile-first responsive layouts, secure HttpOnly cookie auth, and fast LCP image loading.

**📋 Outcomes & Job-Readiness Milestones:**
- Trace the full network journey from URL entry to rendered pixels (DNS, TCP, TLS 1.3, HTTP/2/3, Critical Rendering Path)
- Defend full-stack applications against OWASP web vulnerabilities (XSS, CSRF, Clickjacking, CORS misconfiguration, SQLi)
- Build responsive, accessible (WCAG) interfaces using Flexbox, CSS Grid, semantic HTML, and keyboard navigation
- Configure client storage (HttpOnly cookies vs Web Storage) and HTTP caching headers (Cache-Control, ETag) accurately
- Job-Readiness Cadence (Weeks 5–6): Complete your 1st 45-minute mock technical interview (TS + JS Runtime + Web Security & HTTP); refine responsive & accessible UI states in Smart City Issue Reporting

### 2-1 Networking Under the Hood
- [ ] **2-1-1** What happens when you type a URL in the browser and hit Enter (end-to-end interview classic) — 🔴 critical
- [ ] **2-1-2** DNS resolution lifecycle and record types (A, AAAA, CNAME, TXT, NS) — 🟡 important
- [ ] **2-1-3** TCP 3-way handshake, connection pooling, and keep-alive — 🟡 important
- [ ] **2-1-4** TLS 1.3 / HTTPS handshake: certificates, asymmetric key exchange, symmetric session encryption — 🟡 important
- [ ] **2-1-5** HTTP Evolution: HTTP/1.1 keep-alive vs HTTP/2 multiplexing vs HTTP/3 over QUIC — 🟡 important
- [ ] **2-1-6** Head-of-Line (HoL) blocking at HTTP/1.1 vs TCP vs QUIC layers — 🟢 good-to-know

### 2-2 Browser Internals & Critical Rendering Path
- [ ] **2-2-1** Browser multi-process architecture: Browser, Renderer, Network, and GPU processes — 🟢 good-to-know
- [ ] **2-2-2** Critical Rendering Path: HTML parsing → DOM Tree & CSS parsing → CSSOM — 🔴 critical
- [ ] **2-2-3** Render-blocking CSS and parser-blocking JS (normal script vs async vs defer vs type='module') — 🔴 critical
- [ ] **2-2-4** Render Tree construction (combining DOM + CSSOM, excluding display: none) — 🟡 important
- [ ] **2-2-5** Layout (Reflow) vs Paint (Rasterization) vs Compositing pipeline — 🟡 important
- [ ] **2-2-6** Layout thrashing / forced synchronous layouts and how to prevent them — 🟡 important
- [ ] **2-2-7** GPU-accelerated animations: why transform and opacity avoid layout/paint — 🟢 good-to-know
- [ ] **2-2-8** requestAnimationFrame vs requestIdleCallback scheduling — 🟢 good-to-know

### 2-3 CSS Mechanics & Layout Engine
- [ ] **2-3-1** Box Model: content, padding, border, margin & box-sizing: border-box — 🔴 critical
- [ ] **2-3-2** Positioning (static, relative, absolute, fixed, sticky) & Block Formatting Context (BFC) — 🟡 important
- [ ] **2-3-3** Stacking Context & z-index bugs (how transform/opacity/isolation create new contexts) — 🟡 important
- [ ] **2-3-4** Flexbox 1D layout: main/cross axis, flex-grow, flex-shrink, flex-basis, gap, alignment — 🔴 critical
- [ ] **2-3-5** CSS Grid 2D layout: grid-template-columns, fr units, minmax(), auto-fit vs auto-fill — 🔴 critical
- [ ] **2-3-6** CSS Specificity rules, cascade order, custom properties (--vars), and @layer — 🟡 important

### 2-4 Web Security & OWASP Top 10 for Full-Stack
- [ ] **2-4-1** Same-Origin Policy (SOP): scheme, host, and port origin boundaries — 🔴 critical
- [ ] **2-4-2** CORS deep-dive: Simple requests vs Preflight OPTIONS, Access-Control-Allow-Credentials — 🔴 critical
- [ ] **2-4-3** Cross-Site Scripting (XSS): Stored, Reflected, DOM-based & output encoding/sanitization — 🔴 critical
- [ ] **2-4-4** Content Security Policy (CSP): script-src, nonces, and preventing inline script execution — 🟡 important
- [ ] **2-4-5** Cross-Site Request Forgery (CSRF): attack flow, SameSite=Lax/Strict cookies, CSRF tokens — 🔴 critical
- [ ] **2-4-6** Clickjacking defense: X-Frame-Options and CSP frame-ancestors — 🟢 good-to-know
- [ ] **2-4-7** SQL Injection & command injection: why parameterized queries / prepared statements are mandatory — 🔴 critical
- [ ] **2-4-8** Server-Side Request Forgery (SSRF): validating user-supplied URLs and blocking internal metadata IPs — 🟡 important

### 2-5 Client-Side Storage & HTTP Caching Mechanics
- [ ] **2-5-1** Cookies in depth: HttpOnly, Secure, SameSite (Strict, Lax, None), Domain, Path, Max-Age — 🔴 critical
- [ ] **2-5-2** localStorage vs sessionStorage: synchronous blocking, 5MB limit, and XSS token theft risks — 🔴 critical
- [ ] **2-5-3** IndexedDB: asynchronous structured client storage for offline/large datasets — 🟢 good-to-know
- [ ] **2-5-4** HTTP Caching headers: Cache-Control (max-age, no-cache, no-store, private, public, immutable, stale-while-revalidate) — 🔴 critical
- [ ] **2-5-5** Conditional requests & validation: ETag / If-None-Match (304 Not Modified) and Last-Modified — 🟡 important
- [ ] **2-5-6** Service Workers & Cache API overview — 🟢 good-to-know

### 2-6 Web Performance & Core Web Vitals
- [ ] **2-6-1** Largest Contentful Paint (LCP): diagnosing slow server TTFB and unoptimized hero media — 🟡 important
- [ ] **2-6-2** Interaction to Next Paint (INP): diagnosing long main-thread tasks and input delay — 🟡 important
- [ ] **2-6-3** Cumulative Layout Shift (CLS): reserving image/embed dimensions and font fallbacks — 🟡 important
- [ ] **2-6-4** Resource hints: preload, prefetch, preconnect, fetchpriority — 🟢 good-to-know
- [ ] **2-6-5** JavaScript delivery: tree shaking, route-based code splitting, Gzip/Brotli compression — 🟡 important
- [ ] **2-6-6** Image optimization: WebP/AVIF formats, srcset/sizes, native loading='lazy' — 🟡 important

### 2-7 Frontend Engineering Foundations: Accessibility, Layout & UI States
- [ ] **2-7-1** Semantic HTML5 landmarks (main, nav, header, section, button vs div) for screen readers & SEO — 🔴 critical
- [ ] **2-7-2** Practical Web Accessibility (a11y): ARIA roles/states (aria-label, aria-expanded, aria-live) and when native HTML suffices — 🟡 important
- [ ] **2-7-3** Keyboard navigation & focus management: logical tab order, focus-visible rings, modal focus trapping — 🟡 important
- [ ] **2-7-4** Responsive layout engineering: mobile-first breakpoints, fluid sizing (clamp, rem, dvh), container queries — 🔴 critical
- [ ] **2-7-5** Complete UI state design: loading skeletons, actionable error states with retry, and empty states — 🔴 critical
- [ ] **2-7-6** Accessible forms: explicit <label> association, inline validation, aria-invalid, and aria-describedby — 🔴 critical

**🛠️ Mini-Build:** Accessible, responsive multi-step Issue Reporting UI prototype with keyboard navigation, loading skeletons, error/empty states, and CSP/CORS header analyzer.

**🚪 Completion Gate:** Explain (Mock Interview #1): End-to-end URL-to-pixel lifecycle & CORS preflight vs simple requests | Implement: Accessible modal with keyboard focus trap & Escape handler | Debug: Fix layout shift (CLS) and broken z-index stacking context | Apply: Audit and harden security headers and form accessibility in Smart City.

---

## 🟢 Phase 3: Node.js Core, Streams & Reliability (Weeks 7–8 (24-Week Plan))

Understand how your Node.js 20/22 LTS server runtime works without framework magic. V8, libuv thread pool, memory-bounded streams, child processes, profiling, and graceful shutdown.

**🎯 Project Anchor:** Smart City & Collab-Code: Stream citizen photo uploads in Smart City without buffering entire files in RAM; implement SIGTERM graceful connection draining and boot-time Zod env validation in both projects.

**📋 Outcomes & Job-Readiness Milestones:**
- Explain the exact division of labor between V8, the libuv event loop, OS async primitives (epoll/kqueue/IOCP), and the libuv thread pool
- Process large files and datasets using Node Streams and stream/promises pipeline() with backpressure
- Profile CPU and heap memory allocations to diagnose event-loop blocking and memory leaks
- Implement zero-downtime graceful shutdown patterns handling SIGTERM and active connection draining
- Job-Readiness Cadence (Weeks 7–8): Conduct a deep technical walkthrough of Collab-Code's Node.js server lifecycle; practice 30-minute timed backend debugging exercises

### 3-1 Node.js Architecture
- [ ] **3-1-1** V8 engine in Node.js: JIT compilation, heap generations (young/old space), garbage collection — 🟡 important
- [ ] **3-1-2** libuv architecture: event loop, OS kernel async I/O vs the 4-thread UV_THREADPOOL_SIZE pool — 🔴 critical
- [ ] **3-1-3** Single-threaded JS execution model and why CPU-bound synchronous code blocks all clients — 🔴 critical
- [ ] **3-1-4** Which Node.js operations use the thread pool (fs, crypto.pbkdf2/scrypt, zlib, dns.lookup) — 🟡 important
- [ ] **3-1-5** Event-driven architecture: EventEmitter internals, synchronous emit, and error event handling — 🔴 critical

### 3-2 Streams
- [ ] **3-2-1** Why streams matter: O(1) memory footprint vs buffering large payloads in RAM — 🔴 critical
- [ ] **3-2-2** Readable streams: flowing vs paused modes, highWaterMark, and async iteration (for await...of) — 🟡 important
- [ ] **3-2-3** Writable streams: .write() return value and waiting for the 'drain' event — 🟡 important
- [ ] **3-2-4** Transform & Duplex streams: compressing, hashing, or parsing data in transit — 🟢 good-to-know
- [ ] **3-2-5** stream/promises pipeline() for safe stream composition and automatic file-descriptor cleanup — 🔴 critical
- [ ] **3-2-6** Backpressure mechanics: preventing fast producers from overwhelming slow consumers — 🔴 critical

### 3-3 File System, Path & Buffer
- [ ] **3-3-1** node:fs/promises: asynchronous file I/O (readFile, writeFile, stat, mkdir, rm) — 🔴 critical
- [ ] **3-3-2** node:path & fileURLToPath: cross-platform path resolution and preventing path traversal attacks — 🟡 important
- [ ] **3-3-3** Buffer & TypedArrays: binary data encoding (utf8, base64, hex) and memory allocation — 🟡 important
- [ ] **3-3-4** File watching and temporary file handling — 🟢 good-to-know
- [ ] **3-3-5** node:crypto fundamentals: randomUUID, randomBytes, createHash, timingSafeEqual — 🟡 important

### 3-4 Worker Threads & Child Processes
- [ ] **3-4-1** node:worker_threads: offloading CPU-intensive JS work from the main event loop — 🟡 important
- [ ] **3-4-2** node:child_process: spawn vs exec vs execFile (and avoiding shell injection) vs fork — 🟡 important
- [ ] **3-4-3** node:cluster module & multi-core process scaling concepts — 🟢 good-to-know
- [ ] **3-4-4** Choosing between Worker Threads (shared memory/CPU) and Child Processes (process isolation) — 🟡 important

### 3-5 Process, Environment & Graceful Shutdown
- [ ] **3-5-1** process.env, process.argv, process.memoryUsage(), and process.uptime() — 🟡 important
- [ ] **3-5-2** Loading environment configuration: Node 20.6+ --env-file and dotenv — 🟡 important
- [ ] **3-5-3** Process exit codes (0 vs non-zero) and why abrupt process.exit() drops in-flight requests — 🟡 important
- [ ] **3-5-4** OS Signal handling in containers: SIGTERM vs SIGINT vs SIGKILL — 🔴 critical
- [ ] **3-5-5** Graceful shutdown lifecycle: stop accepting requests → drain active work → close DB/Redis pools → exit — 🔴 critical

### 3-6 ESM in Node.js & Package Configuration
- [ ] **3-6-1** Native ESM in Node.js: package.json type: 'module' vs CommonJS — 🔴 critical
- [ ] **3-6-2** .mjs vs .cjs explicit extensions and Node 22+ require(esm) support — 🟢 good-to-know
- [ ] **3-6-3** package.json exports, main, types, and engines fields — 🟡 important
- [ ] **3-6-4** import.meta.dirname, import.meta.filename, and import.meta.url in modern Node ESM — 🟡 important
- [ ] **3-6-5** Running TypeScript in Node: tsx, tsup/esbuild build pipelines, and Node native type stripping overview — 🟡 important

### 3-7 Node.js Production Reliability, Profiling & Dependency Hygiene
- [ ] **3-7-1** CPU and memory profiling: --inspect, Chrome DevTools heap snapshots, and flamegraphs — 🟡 important
- [ ] **3-7-2** Event loop lag monitoring & detecting main-thread blocking regex/JSON/crypto operations — 🟡 important
- [ ] **3-7-3** Fail-fast startup environment validation using Zod schemas before binding server ports — 🔴 critical
- [ ] **3-7-4** Package management hygiene: SemVer ranges (^ vs ~ vs exact), peerDependencies, overrides — 🟡 important
- [ ] **3-7-5** Supply-chain & dependency security: npm audit, lockfile integrity, and avoiding bloated packages — 🟢 good-to-know
- [ ] **3-7-6** Connection draining & timeout enforcement (headersTimeout, requestTimeout, keepAliveTimeout) — 🟡 important

**🛠️ Mini-Build:** Streaming CSV & Media processor using stream/promises pipeline(), backpressure handling, memory ceiling assertions, and graceful shutdown.

**🚪 Completion Gate:** Explain: When Node.js uses the libuv thread pool vs OS kernel async I/O | Implement: Transform stream pipeline with backpressure and error cleanup | Debug: Identify an event-loop blocking synchronous bottleneck using --inspect | Apply: Add Zod startup env validation and SIGTERM graceful drain to Collab-Code & Smart City.

---

## ⚡ Phase 4: Production HTTP, Express & REST APIs (Weeks 9–10 (24-Week Plan))

Production-grade backend API engineering. Middleware pipelines, type-safe Zod validation, JWT access/refresh token rotation, RBAC, filtering/sorting/pagination, idempotency keys, RFC 9457 errors, and OpenAPI 3.1 contracts.

**🎯 Project Anchor:** Smart City Issue Reporting: Implement versioned (/api/v1) citizen issue submission, dynamic filtering/sorting by ward/status/severity, RBAC status transitions, idempotency keys, and OpenAPI documentation.

**📋 Outcomes & Job-Readiness Milestones:**
- Construct Express middleware pipelines with centralized RFC 9457 Problem Details error contracts
- Implement secure authentication with bcrypt/argon2, short-lived JWTs, and refresh token rotation in HttpOnly cookies
- Build production collection endpoints with cursor/offset pagination, whitelisted filtering, multi-field sorting, API versioning, and OpenAPI docs
- Enforce mutation reliability and security with Idempotency-Key caching, rate limiting, and streaming file upload validation
- Job-Readiness Cadence (Weeks 9–10): Complete your 2nd mock technical interview (API Design, Auth/RBAC, Express middleware); refine backend resume bullet points for Collab-Code & Smart City

### 4-1 HTTP Fundamentals for APIs
- [ ] **4-1-1** HTTP request/response lifecycle & statelessness — 🔴 critical
- [ ] **4-1-2** HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS semantics (safe vs idempotent) — 🔴 critical
- [ ] **4-1-3** Status codes: 200/201/204, 301/304, 400/401/403/404/409/422/429, 500/502/503/504 — 🔴 critical
- [ ] **4-1-4** Core API headers: Content-Type, Accept, Authorization, Cache-Control, X-Request-Id — 🟡 important
- [ ] **4-1-5** HTTP Idempotency: why PUT/DELETE are idempotent by spec and why POST requires explicit keys — 🔴 critical

### 4-2 Express Middleware Pipeline
- [ ] **4-2-1** Middleware signature ((req, res, next) => void) and execution pipeline — 🔴 critical
- [ ] **4-2-2** Middleware ordering, next() delegation, and request short-circuiting — 🔴 critical
- [ ] **4-2-3** Application-level vs Router-level modular middleware — 🟡 important
- [ ] **4-2-4** Built-in parsers: express.json(), express.urlencoded(), express.raw() — 🟡 important
- [ ] **4-2-5** Essential security & utility middleware: cors, helmet, pino-http/morgan, compression — 🟡 important
- [ ] **4-2-6** Error-handling middleware signature: (err, req, res, next) => void (4 arguments) — 🔴 critical

### 4-3 Request Validation with Zod
- [ ] **4-3-1** Zod schema composition: objects, primitives, enums, unions, and arrays — 🔴 critical
- [ ] **4-3-2** Validation execution: .parse() (throws) vs .safeParse() (discriminated result) — 🔴 critical
- [ ] **4-3-3** Single source of truth: inferring static TypeScript DTO types via z.infer<typeof schema> — 🔴 critical
- [ ] **4-3-4** Validating req.params, req.query (with z.coerce), and req.body simultaneously — 🟡 important
- [ ] **4-3-5** Custom refinements (.refine, .superRefine) and data transformations (.transform) — 🟡 important
- [ ] **4-3-6** Reusable type-safe Express validation middleware factory — 🟡 important

### 4-4 Error Handling in Express
- [ ] **4-4-1** Async error propagation: Express 4 catchAsync wrapper vs Express 5 native rejected Promise forwarding — 🔴 critical
- [ ] **4-4-2** Centralized error-handling middleware architecture — 🔴 critical
- [ ] **4-4-3** Custom AppError hierarchy with HTTP statusCode, machine errorCode, and isOperational flag — 🟡 important
- [ ] **4-4-4** Catch-all 404 Not Found handler for unmatched routes — 🟡 important
- [ ] **4-4-5** Redacting sensitive stack traces and database internals in production responses — 🟡 important

### 4-5 Authentication: JWT & Sessions
- [ ] **4-5-1** Password hashing with bcrypt or Argon2id (per-user salts & work factor tuning) — 🔴 critical
- [ ] **4-5-2** JWT structure (Header.Payload.Signature), signing (HMAC/RSA), and stateless verification — 🔴 critical
- [ ] **4-5-3** Short-lived Access Tokens + Refresh Token rotation & reuse detection — 🔴 critical
- [ ] **4-5-4** Token storage security: HttpOnly + Secure + SameSite cookies vs localStorage XSS risks — 🔴 critical
- [ ] **4-5-5** Typed Express authentication middleware (attaching req.user via declaration merging) — 🔴 critical
- [ ] **4-5-6** Stateful Redis sessions vs stateless JWTs: revocation and horizontal scaling tradeoffs — 🟡 important
- [ ] **4-5-7** OAuth 2.0 Authorization Code flow with PKCE & OpenID Connect (OIDC) overview — 🟢 good-to-know

### 4-6 Authorization & Security Practices
- [ ] **4-6-1** RBAC (Role-Based Access Control) vs resource-ownership (ABAC/BOLA) checks — 🔴 critical
- [ ] **4-6-2** Composable authorization guard middleware (requireRole, requireOwnership) — 🔴 critical
- [ ] **4-6-3** API Rate limiting: IP & user-based throttling (express-rate-limit / Redis store) — 🟡 important
- [ ] **4-6-4** HTTP security headers with Helmet (HSTS, X-Content-Type-Options, CSP) — 🟡 important
- [ ] **4-6-5** Strict CORS origin allowlisting and credentials configuration in Express — 🟡 important

### 4-7 REST Best Practices, Filtering, Sorting & Versioning
- [ ] **4-7-1** RESTful resource modeling: plural nouns, hierarchical nesting limits, and action sub-resources — 🟡 important
- [ ] **4-7-2** API pagination contracts: offset/limit vs cursor-based pagination envelopes (nextCursor, hasMore) — 🔴 critical
- [ ] **4-7-3** Dynamic filtering, multi-field sorting, and search query parameter parsing with Zod whitelist validation — 🔴 critical
- [ ] **4-7-4** API versioning strategies: URI path versioning (/api/v1) vs Header/Accept versioning and deprecation headers — 🟡 important
- [ ] **4-7-5** HATEOAS and hypermedia links overview — 🟢 good-to-know

### 4-8 API Testing with Supertest + Vitest
- [ ] **4-8-1** Decoupling Express app creation from server.listen() for in-memory Supertest execution — 🟡 important
- [ ] **4-8-2** Testing happy-path CRUD status codes, headers, and response schemas — 🔴 critical
- [ ] **4-8-3** Testing authentication, token expiration, and 401/403 RBAC boundary cases — 🟡 important
- [ ] **4-8-4** Testing 400/422 validation errors and idempotency replay behavior — 🟡 important
- [ ] **4-8-5** Test database lifecycle setup and cleanup between test runs — 🟡 important

### 4-9 Production API Reliability, Contracts & Ingestion
- [ ] **4-9-1** High-cardinality keyset pagination & index-backed filter/sort query execution in Express + Prisma — 🟡 important
- [ ] **4-9-2** Standardized API error contracts: RFC 9457 Problem Details for HTTP APIs (obsoleting RFC 7807) and consistent JSON error envelopes — 🔴 critical
- [ ] **4-9-3** Idempotency keys (Idempotency-Key header): atomic Redis/DB locking to prevent duplicate mutations on client retry — 🟡 important
- [ ] **4-9-4** Request timeouts, safe retry budgets, and downstream cancellation with AbortController — 🟡 important
- [ ] **4-9-5** Request payload size limits (express.json({ limit: '100kb' })) to prevent memory exhaustion DoS — 🟡 important
- [ ] **4-9-6** Webhook signature verification: HMAC SHA-256 over raw request body with crypto.timingSafeEqual — 🟢 good-to-know
- [ ] **4-9-7** Secure file upload ingestion: Multer limits, magic-byte MIME validation, and direct S3 presigned upload flows — 🟡 important
- [ ] **4-9-8** OpenAPI 3.1 / Swagger documentation for Express: generating interactive specs from Zod schemas (zod-to-openapi / swagger-jsdoc) — 🟡 important

**🛠️ Mini-Build:** Versioned (/api/v1) Express REST API with JWT rotation, RBAC guards, Zod validation, filtering/sorting/pagination, idempotency keys, and auto-generated OpenAPI Swagger UI.

**🚪 Completion Gate:** Explain (Mock Interview #2): Access vs refresh token rotation & RFC 9457 error contracts | Implement: Idempotency middleware + cursor-paginated, filtered/sorted Express endpoint | Debug: Fix an authorization bypass bug in RBAC middleware | Apply: Generate OpenAPI 3.1 spec from Zod schemas for Smart City API.

---

## 🗄️ Phase 5: PostgreSQL, Prisma & Production Data Layer (Weeks 11–13 (24-Week Plan))

PostgreSQL and Prisma as your primary relational engine. Normalization, complex SQL (Window functions, CTEs), B-Tree/GIN indexing, ACID transactions, row locking, connection pooling, and zero-downtime migrations. (MongoDB secondary).

**🎯 Project Anchor:** Smart City Issue Reporting: Design and optimize the relational data model (Users, Issues, Comments, Upvotes, AuditLogs, Wards) with JSONB metadata, composite indexes for ward/status filtering, and transactional upvote locking.

**📋 Outcomes & Job-Readiness Milestones:**
- Design normalized relational schemas (3NF) and write complex SQL queries using JOINs, CTEs, and Window functions
- Read and optimize query execution plans using EXPLAIN ANALYZE, composite B-Tree indexes, and JSONB GIN indexes
- Prevent race conditions and deadlocks using ACID transactions and pessimistic/optimistic locking
- Manage PostgreSQL connection pooling (PgBouncer) and execute safe, zero-downtime Prisma migrations
- Job-Readiness Cadence (Weeks 11–13): Complete 5 timed SQL query & schema-design interview drills; conduct a 15-minute deep walkthrough of Smart City's PostgreSQL schema, indexes, and transaction boundaries

### 5-1 Relational Database Fundamentals
- [ ] **5-1-1** Tables, rows, columns, primary keys (UUID v4/v7 vs bigserial/identity), surrogate vs natural keys — 🔴 critical
- [ ] **5-1-2** Foreign keys and relational cardinality (1:1, 1:N, M:N join tables) — 🔴 critical
- [ ] **5-1-3** Database Normalization: 1NF, 2NF, 3NF, BCNF for eliminating update/delete anomalies — 🔴 critical
- [ ] **5-1-4** Strategic denormalization: read-heavy counters and materialized aggregates — 🟡 important
- [ ] **5-1-5** Declarative data integrity: NOT NULL, UNIQUE, CHECK, DEFAULT, ON DELETE CASCADE/RESTRICT — 🟡 important

### 5-2 SQL Deep-Dive
- [ ] **5-2-1** SELECT execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT — 🔴 critical
- [ ] **5-2-2** JOINs mastery: INNER, LEFT, RIGHT, FULL OUTER, CROSS, and SELF JOINs — 🔴 critical
- [ ] **5-2-3** GROUP BY, HAVING, and aggregate functions (COUNT, SUM, AVG, MIN, MAX, BOOL_AND) — 🔴 critical
- [ ] **5-2-4** Subqueries: correlated vs non-correlated, EXISTS vs IN performance — 🟡 important
- [ ] **5-2-5** Window functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, SUM() OVER (PARTITION BY ...) — 🟡 important
- [ ] **5-2-6** CTEs (Common Table Expressions): WITH clauses and recursive hierarchy queries — 🟡 important
- [ ] **5-2-7** DML & Atomic Upserts: INSERT ... ON CONFLICT DO UPDATE / DO NOTHING, RETURNING clause — 🔴 critical
- [ ] **5-2-8** Views vs Materialized Views (REFRESH MATERIALIZED VIEW CONCURRENTLY) — 🟢 good-to-know

### 5-3 Indexing & Query Performance
- [ ] **5-3-1** How B-Tree indexes work: O(log N) lookups, page splits, and range scans — 🔴 critical
- [ ] **5-3-2** Index selectivity & write amplification: when to index and when indexes slow down writes — 🔴 critical
- [ ] **5-3-3** Composite multi-column indexes and the leftmost prefix rule (equality before range columns) — 🔴 critical
- [ ] **5-3-4** Reading EXPLAIN (ANALYZE, BUFFERS): Seq Scan vs Index Scan vs Bitmap Heap Scan vs Index Only Scan — 🔴 critical
- [ ] **5-3-5** Covering indexes (INCLUDE clause) and partial indexes (WHERE clause) — 🟡 important
- [ ] **5-3-6** GIN indexes for JSONB containment and PostgreSQL full-text search (tsvector) — 🟢 good-to-know

### 5-4 Transactions & ACID
- [ ] **5-4-1** ACID properties in PostgreSQL (Atomicity, Consistency, Isolation via MVCC, Durability via WAL) — 🔴 critical
- [ ] **5-4-2** Transaction control: BEGIN, COMMIT, ROLLBACK, SAVEPOINT — 🔴 critical
- [ ] **5-4-3** SQL Isolation levels: Read Committed (PG default) vs Repeatable Read vs Serializable — 🔴 critical
- [ ] **5-4-4** Concurrency anomalies: Dirty read, Non-repeatable read, Phantom read, Lost update, Write skew — 🟡 important
- [ ] **5-4-5** Deadlocks: consistent lock ordering, lock timeouts, and deadlock detection — 🟡 important
- [ ] **5-4-6** Optimistic concurrency (version column) vs Pessimistic row locking (SELECT ... FOR UPDATE / SKIP LOCKED) — 🟡 important

### 5-5 Prisma ORM
- [ ] **5-5-1** Prisma schema modeling: @id, @default, @unique, @@index, enums, and relations — 🔴 critical
- [ ] **5-5-2** Migration workflow: prisma migrate dev (local) vs prisma migrate deploy (production CI/CD) — 🔴 critical
- [ ] **5-5-3** Prisma Client type-safe queries: select vs include, nested writes, and generated payload types — 🔴 critical
- [ ] **5-5-4** Modeling 1:1, 1:N, and explicit vs implicit M:N relations — 🟡 important
- [ ] **5-5-5** Dynamic filtering, sorting, and cursor/offset pagination in Prisma — 🟡 important
- [ ] **5-5-6** Parameterized raw SQL escape hatches: $queryRaw and $executeRaw (tagged templates) — 🟡 important
- [ ] **5-5-7** Prisma transactions: batch $transaction([...]) vs interactive $transaction(async (tx) => ...) — 🔴 critical
- [ ] **5-5-8** Deterministic database seeding with prisma db seed — 🟢 good-to-know

### 5-6 MongoDB & Mongoose Essentials (Secondary)
- [ ] **5-6-1** Document vs Relational tradeoffs: when PostgreSQL JSONB is enough vs when MongoDB fits — 🟢 good-to-know
- [ ] **5-6-2** Document schema design: Embedding vs Referencing and unbounded array growth pitfalls — 🟢 good-to-know
- [ ] **5-6-3** CRUD operations with Mongoose + TypeScript schema inference — 🟢 good-to-know
- [ ] **5-6-4** Aggregation pipeline basics: $match, $group, $project, $lookup — 🟢 good-to-know
- [ ] **5-6-5** Compound indexes in MongoDB & explain('executionStats') — 🟢 good-to-know
- [ ] **5-6-6** Multi-document ACID transactions in MongoDB replica sets — 🟢 good-to-know

### 5-7 PostgreSQL & Prisma Production Reliability & Operations
- [ ] **5-7-1** Connection pooling: PgBouncer transaction pooling, Prisma connection_limit sizing, avoiding pool exhaustion — 🔴 critical
- [ ] **5-7-2** Handling transient DB connection drops, query timeouts, and retry backoff strategies — 🟡 important
- [ ] **5-7-3** Zero-downtime schema migrations: expand-and-contract pattern, CREATE INDEX CONCURRENTLY, avoiding lock queues — 🟡 important
- [ ] **5-7-4** Primary vs Read Replicas: asynchronous replication lag and read-your-own-writes consistency — 🟢 good-to-know
- [ ] **5-7-5** PostgreSQL JSONB in production: querying nested fields (->, ->>), containment (@>), and GIN indexing — 🟡 important
- [ ] **5-7-6** Backup & recovery fundamentals: pg_dump / pg_restore vs continuous WAL archiving (PITR) — 🟢 good-to-know
- [ ] **5-7-7** Eliminating N+1 query bottlenecks in Prisma (include, relationLoadStrategy: 'join', batching) — 🔴 critical

**🛠️ Mini-Build:** High-concurrency PostgreSQL + Prisma data layer with JSONB GIN indexing, transactional row locking for issue assignment, connection pool configuration, and deterministic seed factories.

**🚪 Completion Gate:** Explain (Project Deep-Dive): ACID isolation levels, concurrency anomalies, and Smart City index design | Implement: Safe Prisma migration using expand-and-contract pattern | Debug: Diagnose and fix a slow N+1 query and a concurrent upvote race condition | Apply: Benchmark query latency before/after composite + GIN indexing with EXPLAIN ANALYZE.

---

## ⚛️ Phase 6: React 18/19 & Next.js 15/16 App Router (Production Quality) (Weeks 14–16 (24-Week Plan))

Modern React 18/19 and Next.js 15/16 App Router engineering. Reconciliation, hooks, Server Components, Server Actions, traditional 4-tier caching vs Cache Components ('use cache'), URL-synced pagination, request cancellation, error recovery, and hydration debugging.

**🎯 Project Anchor:** Collab-Code & Smart City: Build the Smart City citizen dashboard with URL-synced pagination/filtering, optimistic upvoting with rollback, presigned S3 image upload progress, and code-split Monaco editor in Collab-Code.

**📋 Outcomes & Job-Readiness Milestones:**
- Architect React & Next.js 15/16 applications combining Server Components and Client Components across serialization boundaries
- Understand both the traditional App Router 4-tier caching model (with Next.js 15+ uncached-by-default fetch) and the modern Cache Components ('use cache', cacheLife, cacheTag) model
- Build resilient client data workflows with URL-synced pagination, AbortController request cancellation, optimistic updates, and Error Boundary recovery
- Diagnose and fix SSR/CSR hydration mismatches and optimize client bundle sizes
- Job-Readiness Cadence (Weeks 14–16): Complete your 3rd mock technical interview (React hooks, rendering, RSC, Next.js caching) + a 90-minute timed frontend machine-coding exercise; polish Collab-Code & Smart City UI

### 6-1 React Internals & Rendering
- [ ] **6-1-1** Virtual DOM, declarative UI, and reconciliation diffing heuristics — 🔴 critical
- [ ] **6-1-2** React Fiber architecture: interruptible work units, priority lanes, time-slicing — 🟢 good-to-know
- [ ] **6-1-3** Keys in lists: why array index keys break state preservation and cause subtle bugs — 🔴 critical
- [ ] **6-1-4** Automatic state batching across promises, timeouts, and native event handlers (React 18+) — 🟡 important
- [ ] **6-1-5** Strict Mode double-invocation in development: detecting impure renders and missing effect cleanups — 🟡 important
- [ ] **6-1-6** Render phase (pure calculation) vs Commit phase (DOM mutation & side effects) — 🟡 important

### 6-2 Hooks Deep-Dive
- [ ] **6-2-1** useState: state snapshots, functional updater (prev => next), lazy initializer — 🔴 critical
- [ ] **6-2-2** useEffect: synchronization mental model, dependency array honesty, cleanup functions, avoiding unnecessary effects — 🔴 critical
- [ ] **6-2-3** useRef: imperative DOM access and mutable instance storage without triggering re-renders — 🔴 critical
- [ ] **6-2-4** useReducer: modeling complex multi-field state transitions and state machines — 🟡 important
- [ ] **6-2-5** useContext: dependency injection for UI trees and avoiding context-wide re-render blasts — 🟡 important
- [ ] **6-2-6** Rules of Hooks: why hooks rely on deterministic call order (Fiber linked list) — 🔴 critical
- [ ] **6-2-7** useId, useSyncExternalStore, and useDeferredValue — 🟢 good-to-know

### 6-3 Performance: useMemo, useCallback, React.memo
- [ ] **6-3-1** What actually triggers a React re-render (state change, parent render, context change) and state colocation — 🔴 critical
- [ ] **6-3-2** React.memo: shallow prop comparison to skip subtree re-renders — 🟡 important
- [ ] **6-3-3** useMemo: caching expensive synchronous computations and preserving referential identity — 🟡 important
- [ ] **6-3-4** useCallback: stabilizing function references passed to memoized children or effect dependencies — 🟡 important
- [ ] **6-3-5** When NOT to memoize: composition patterns (children prop) before premature memoization — 🟡 important
- [ ] **6-3-6** React Compiler (automatic memoization in React 19) overview — 🟢 good-to-know

### 6-4 Custom Hooks & Composition Patterns
- [ ] **6-4-1** Designing composable custom hooks (encapsulating stateful lifecycle logic) — 🔴 critical
- [ ] **6-4-2** Essential interview & production hooks: useDebounce, useLocalStorage, useMediaQuery, useOnClickOutside — 🔴 critical
- [ ] **6-4-3** Component composition (children / slots) to eliminate prop drilling — 🟡 important
- [ ] **6-4-4** Controlled vs uncontrolled component API design — 🟢 good-to-know
- [ ] **6-4-5** Compound components pattern (Tabs, Accordion, Modal) — 🟢 good-to-know

### 6-5 State Management Architecture
- [ ] **6-5-1** State categorization: local UI state vs URL state vs global client state vs server cache state — 🔴 critical
- [ ] **6-5-2** Splitting Context providers (state vs dispatch) to prevent unnecessary consumer renders — 🟡 important
- [ ] **6-5-3** Zustand: selector-based external store for high-frequency client state (e.g., Collab-Code editor state) — 🟡 important
- [ ] **6-5-4** Why Server State is not Client State: staleness, deduplication, and out-of-band mutations — 🔴 critical
- [ ] **6-5-5** TanStack Query (React Query): query keys, staleTime vs gcTime, mutations, and cache invalidation — 🟡 important

### 6-6 React Server Components (RSC)
- [ ] **6-6-1** Server Components vs Client Components mental model and execution environments — 🔴 critical
- [ ] **6-6-2** 'use client' (client boundary entry) and 'use server' (Server Action boundary) directives — 🔴 critical
- [ ] **6-6-3** Capabilities & restrictions: why RSCs cannot use state/effects and Client Components cannot access server-only secrets — 🔴 critical
- [ ] **6-6-4** The RSC serialization boundary: what can and cannot be passed as props across 'use client' — 🟡 important
- [ ] **6-6-5** Interleaving pattern: passing Server Components as children to Client Components — 🟡 important

### 6-7 Next.js 15/16 App Router Architecture
- [ ] **6-7-1** App Router file conventions: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx — 🔴 critical
- [ ] **6-7-2** Nested layouts, partial rendering, and async params/searchParams in Next.js 15+ — 🔴 critical
- [ ] **6-7-3** Route groups ((auth), (dashboard)) and private folders (_components) — 🟢 good-to-know
- [ ] **6-7-4** Dynamic route segments: [id], [...slug], [[...optional]] and generateStaticParams — 🟡 important
- [ ] **6-7-5** Parallel routes (@slot) and Intercepting routes ((.)photo) for URL-backed modals — 🟢 good-to-know
- [ ] **6-7-6** Next.js Middleware (middleware.ts): lightweight route guards, redirects, and header injection — 🟡 important
- [ ] **6-7-7** Route Handlers (app/api/.../route.ts) for webhooks and external REST clients — 🟡 important

### 6-8 Data Fetching, Caching, Pagination & Request Cancellation
- [ ] **6-8-1** Server Component data fetching: parallel fetching, avoiding sequential request waterfalls — 🔴 critical
- [ ] **6-8-2** Server Actions ('use server'): progressive forms, useActionState, and mutation security — 🔴 critical
- [ ] **6-8-3** Cache invalidation: revalidatePath, revalidateTag, and cacheTag — 🟡 important
- [ ] **6-8-4** Static vs Dynamic rendering in Next.js 15/16: uncached-by-default fetch & GET Route Handlers vs explicit opt-in caching — 🔴 critical
- [ ] **6-8-5** Streaming SSR with <Suspense> boundaries and granular loading skeletons — 🟡 important
- [ ] **6-8-6** useTransition and useOptimistic (React 19 / Next.js App Router) for non-blocking UI updates — 🟡 important
- [ ] **6-8-7** Frontend pagination & URL state synchronization: syncing page, cursor, filter, and sort state with URL searchParams and infinite scroll — 🔴 critical
- [ ] **6-8-8** Frontend request cancellation & stale response prevention: AbortController in useEffect and TanStack Query signal cancellation on rapid filter/search updates — 🟡 important

### 6-9 Forms, Validation & UI Patterns
- [ ] **6-9-1** Controlled vs Uncontrolled inputs, form reset strategies, and dirty state tracking — 🔴 critical
- [ ] **6-9-2** Client + Server shared validation using React Hook Form + @hookform/resolvers/zod — 🟡 important
- [ ] **6-9-3** Handling field-level vs form-level server validation errors in Server Actions — 🟡 important
- [ ] **6-9-4** next/image automatic sizing, next/font zero-layout-shift fonts, and Metadata API — 🟢 good-to-know

### 6-10 React & Next.js Production Quality, Caching Models, Hydration & Error Recovery
- [ ] **6-10-1** Hydration mismatches deep-dive: Date/Math.random/window access during SSR, browser extensions, and safe two-pass rendering — 🔴 critical
- [ ] **6-10-2** Next.js 15/16 caching model: traditional 4-tier App Router cache (Request Memoization, Data Cache, Full Route Cache, Router Cache) vs the Cache Components model ('use cache', cacheLife, cacheTag) — 🔴 critical
- [ ] **6-10-3** Hybrid server/client data flow: seeding TanStack Query from Server Components for real-time polling & invalidation — 🟡 important
- [ ] **6-10-4** Optimistic UI mutations with automatic rollback and toast notification on network failure — 🟡 important
- [ ] **6-10-5** Resilient file uploads in React: client MIME/size validation, progress bars, and direct-to-S3 presigned URL uploads — 🟡 important
- [ ] **6-10-6** Bundle size analysis: @next/bundle-analyzer, next/dynamic lazy loading for heavy components (Monaco Editor, charts) — 🟢 good-to-know
- [ ] **6-10-7** End-to-end App Router authentication: DAL (Data Access Layer) verification, middleware checks, and HttpOnly cookie refresh — 🟡 important
- [ ] **6-10-8** Frontend data-fetching reliability & error handling: React Error Boundaries with reset keys, granular error.tsx recovery, network retry backoffs, and degraded UI fallbacks — 🔴 critical

**🛠️ Mini-Build:** Next.js 15/16 App Router dashboard with Server Components, URL-synced pagination/filtering, Server Actions with Zod, optimistic upvoting with error rollback, and Error Boundary recovery.

**🚪 Completion Gate:** Explain (Mock Interview #3): RSC serialization boundary & Next.js 15/16 traditional cache vs 'use cache' model | Implement: URL-paginated list with AbortController request cancellation & optimistic mutation rollback | Debug: Fix an SSR/CSR hydration mismatch and stale closure bug | Apply: Code-split Collab-Code editor and verify bundle reduction.

---

## 🔴 Phase 7: Redis, Resilient Background Jobs & WebSockets (Weeks 17–18 (24-Week Plan))

Scaling the data and real-time communication plane. Redis caching patterns, BullMQ background job queues with idempotent workers, failure recovery, Socket.io real-time rooms, and connection resilience.

**🎯 Project Anchor:** Collab-Code & Smart City: Collab-Code uses bidirectional WebSockets with Redis Pub/Sub adapter for real-time code sync & presence; Smart City uses BullMQ for citizen status notifications and image processing.

**📋 Outcomes & Job-Readiness Milestones:**
- Design resilient caching layers with Cache-Aside pattern, TTL jitter, and cache stampede protection
- Process asynchronous background tasks with BullMQ handling retries, exponential backoff, and dead-letter queues
- Architect WebSocket connection lifecycles with room namespaces, handshake auth, and reconnect state resync
- Eliminate duplicate job side effects by designing strictly idempotent workers and deduplication keys
- Job-Readiness Cadence (Weeks 17–18): Practice a 15-minute interactive architecture walkthrough of Collab-Code (WebSockets + Redis Pub/Sub) and Smart City (BullMQ notification workers)

### 7-1 Redis Fundamentals
- [ ] **7-1-1** Redis core data structures: String, Hash, List, Set, Sorted Set (ZSET) — 🔴 critical
- [ ] **7-1-2** Atomic commands & expiration: GET, SET (NX/EX), DEL, EXISTS, EXPIRE, TTL, INCR, HINCRBY — 🔴 critical
- [ ] **7-1-3** Primary Redis patterns: caching, session store, distributed rate limiting, ZSET leaderboards — 🟡 important
- [ ] **7-1-4** Persistence tradeoffs: RDB point-in-time snapshots vs AOF (Append-Only File) durability — 🟡 important
- [ ] **7-1-5** Redis Pub/Sub vs Redis Streams overview — 🟡 important
- [ ] **7-1-6** Atomic execution: MULTI/EXEC pipelines and Lua scripts for race-free checks — 🟢 good-to-know

### 7-2 Caching Strategies & Patterns
- [ ] **7-2-1** Cache-Aside (Lazy Loading) pattern and stale read window tradeoffs — 🔴 critical
- [ ] **7-2-2** Write-Through, Write-Behind (Write-Back), and Write-Around caching patterns — 🟡 important
- [ ] **7-2-3** Cache invalidation: deterministic key naming, TTL expiration, and mutation-driven eviction — 🔴 critical
- [ ] **7-2-4** Cache stampede / thundering herd mitigation: mutex singleflight locks and TTL jitter — 🟡 important
- [ ] **7-2-5** Cache penetration (null caching / Bloom filters) and cache avalanche prevention — 🟢 good-to-know

### 7-3 BullMQ: Job Queues & Background Processing
- [ ] **7-3-1** BullMQ architecture: Queue producer, Redis-backed storage, and Worker consumers — 🔴 critical
- [ ] **7-3-2** Job lifecycle states: waiting → prioritized → delayed → active → completed / failed — 🟡 important
- [ ] **7-3-3** Automatic retries, custom backoff strategies, and Dead Letter Queue (DLQ) handling — 🔴 critical
- [ ] **7-3-4** Delayed jobs, job deduplication (jobId), and repeatable cron schedules — 🟢 good-to-know
- [ ] **7-3-5** Worker concurrency limits, lockDuration, and rate-limited queue processing — 🟡 important
- [ ] **7-3-6** Inspecting queue health and replaying failed DLQ jobs with Bull Board — 🟢 good-to-know

### 7-4 WebSockets & Socket.io
- [ ] **7-4-1** WebSocket protocol: HTTP/1.1 101 Switching Protocols upgrade handshake and full-duplex framing — 🔴 critical
- [ ] **7-4-2** Socket.io core abstractions: events, emitWithAck, rooms, namespaces, broadcasting — 🔴 critical
- [ ] **7-4-3** End-to-end TypeScript event maps (ClientToServerEvents, ServerToClientEvents, SocketData) — 🟡 important
- [ ] **7-4-4** WebSocket security: handshake JWT authentication middleware, origin validation, per-socket rate limiting — 🔴 critical
- [ ] **7-4-5** Horizontal scaling across multiple Node instances: sticky load balancing & @socket.io/redis-adapter — 🟡 important
- [ ] **7-4-6** Server-Sent Events (SSE) vs WebSockets vs Long Polling architectural tradeoffs — 🟢 good-to-know

### 7-5 Distributed Failure Scenarios: Jobs, Caching & Real-Time Recovery
- [ ] **7-5-1** Designing strictly idempotent queue workers (unique database outbox/processed-job keys) — 🔴 critical
- [ ] **7-5-2** Delivery guarantees: at-most-once vs at-least-once vs effectively-once semantics — 🟡 important
- [ ] **7-5-3** Worker crash recovery: stalled job detection, lock renewal failure, and poison-pill isolation — 🟡 important
- [ ] **7-5-4** Preventing retry storms: exponential backoff with full jitter and circuit breaking — 🟡 important
- [ ] **7-5-5** WebSocket reconnection resilience: heartbeats, client offline queueing, and state-version resync on reconnect — 🔴 critical
- [ ] **7-5-6** Redis maxmemory eviction policies (allkeys-lru vs volatile-lru vs noeviction for queues) and Redis outage fallback — 🟢 good-to-know

**🛠️ Mini-Build:** Real-time collaborative room with WebSocket reconnect state resync + BullMQ notification queue with idempotent worker processing.

**🚪 Completion Gate:** Explain (Project Defense Drill): At-least-once delivery & how Collab-Code and Smart City guarantee idempotency and state sync | Implement: BullMQ worker with exponential backoff, jitter, and DLQ | Debug: Fix a WebSocket reconnect bug where clients miss edits during disconnect | Apply: Scale Socket.io across two Node processes using Redis adapter.

---

## 🧪 Phase 8: Comprehensive Testing & Quality Engineering (Weeks 19–20 (24-Week Plan))

Production test engineering and project bug-hardening. Vitest unit tests, real PostgreSQL integration tests, RBAC security regressions, React Testing Library accessibility queries, and Playwright E2E automation.

**🎯 Project Anchor:** Smart City & Collab-Code: Write Supertest + PostgreSQL integration tests for Smart City's citizen-to-admin issue lifecycle & RBAC matrix; write Playwright E2E tests for Collab-Code room creation and live editing.

**📋 Outcomes & Job-Readiness Milestones:**
- Write maintainable unit and mock tests with Vitest using the Arrange-Act-Assert (AAA) pattern
- Execute database integration tests against real PostgreSQL instances with strict test isolation
- Automate authentication and RBAC authorization regression test matrices
- Create resilient End-to-End browser tests with Playwright using accessible role locators
- Job-Readiness Cadence (Weeks 19–20): Complete your 4th mock technical interview (Testing strategy & live debugging); run a full bug-bash and test-hardening sprint on Collab-Code & Smart City

### 8-1 Testing Fundamentals & Philosophy
- [ ] **8-1-1** Testing Pyramid vs Testing Trophy (why integration tests give the highest ROI in full-stack TS) — 🟡 important
- [ ] **8-1-2** TDD workflow: Red → Green → Refactor in practical feature development — 🟢 good-to-know
- [ ] **8-1-3** Testing observable behavior and public contracts instead of internal implementation details — 🔴 critical
- [ ] **8-1-4** AAA structure: Arrange (given), Act (when), Assert (then) and test data builders — 🔴 critical

### 8-2 Vitest: Unit Testing
- [ ] **8-2-1** Vitest lifecycle: describe, it/test, expect, beforeEach, afterEach, beforeAll — 🔴 critical
- [ ] **8-2-2** Core assertions: toBe, toEqual, toStrictEqual, toThrowError, toMatchObject — 🟡 important
- [ ] **8-2-3** Test doubles: spies (vi.spyOn), stubs (vi.fn), and module boundaries (vi.mock) without over-mocking — 🔴 critical
- [ ] **8-2-4** Testing asynchronous functions, rejected promises (expect(...).rejects), and streams — 🔴 critical
- [ ] **8-2-5** Deterministic time testing: vi.useFakeTimers(), vi.setSystemTime(), advanceTimersByTime() — 🟢 good-to-know
- [ ] **8-2-6** Inline snapshots vs brittle full-component snapshots — 🟢 good-to-know

### 8-3 Integration Testing
- [ ] **8-3-1** HTTP API integration testing with Supertest against Express routers — 🔴 critical
- [ ] **8-3-2** Database integration testing: isolated test DB lifecycle, migrations, and deterministic seed factories — 🔴 critical
- [ ] **8-3-3** Ephemeral PostgreSQL & Redis containers using Docker Compose or Testcontainers — 🟢 good-to-know
- [ ] **8-3-4** Mocking third-party external APIs at the network layer with MSW (Mock Service Worker) — 🟡 important

### 8-4 React Testing Library
- [ ] **8-4-1** Accessibility-first query priority: getByRole > getByLabelText > getByText > getByTestId — 🔴 critical
- [ ] **8-4-2** Simulating realistic user interactions with @testing-library/user-event — 🔴 critical
- [ ] **8-4-3** Testing custom React hooks with renderHook and act() — 🟡 important
- [ ] **8-4-4** Testing asynchronous UI transitions (findBy* queries, waitFor, loading/error states) — 🟡 important

### 8-5 Playwright: End-to-End Testing
- [ ] **8-5-1** Playwright configuration, browser contexts, webServer auto-start, and Trace Viewer debugging — 🟡 important
- [ ] **8-5-2** Web-first auto-retrying locators (getByRole, getByLabel) and expect(locator) assertions — 🔴 critical
- [ ] **8-5-3** Page Object Model (POM) and reusable test fixtures — 🟡 important
- [ ] **8-5-4** StorageState authentication reuse (logging in once per test worker) — 🟡 important
- [ ] **8-5-5** Network mocking and failure injection with page.route() — 🟢 good-to-know
- [ ] **8-5-6** Visual regression testing and CI artifact collection (screenshots, videos, traces) — 🟢 good-to-know

### 8-6 Advanced Testing: DB Concurrency, Security Regressions & Load Testing
- [ ] **8-6-1** Transactional test isolation & concurrent race-condition testing against real PostgreSQL instances — 🟡 important
- [ ] **8-6-2** Authentication & RBAC permission matrix regression tests (guest, citizen, field-worker, admin) — 🔴 critical
- [ ] **8-6-3** Frontend-Backend schema contract verification using shared Zod/OpenAPI schemas — 🟡 important
- [ ] **8-6-4** API load and latency benchmarking with k6 or Autocannon (measuring p95/p99 under concurrency) — 🟢 good-to-know
- [ ] **8-6-5** Risk-based testing strategy: prioritizing auth, payments/mutations, and core user journeys over vanity 100% coverage — 🟡 important
- [ ] **8-6-6** Eliminating flaky tests: avoiding arbitrary sleep(), isolating shared state, deterministic clocks — 🟡 important

**🛠️ Mini-Build:** Automated quality suite for Smart City & Collab-Code: Vitest unit tests, RBAC security matrix tests, Supertest PostgreSQL integration tests, and Playwright E2E critical-path spec.

**🚪 Completion Gate:** Explain (Mock Interview #4): Testing Trophy vs Pyramid & why testing behavior beats testing implementation | Implement: Supertest integration suite against an isolated test DB | Debug: Fix a flaky async test caused by unawaited state updates | Apply: Add CI-enforced RBAC regression and Playwright E2E tests to flagship projects.

---

## 🐳 Phase 9: DevOps, Docker, CI/CD, AWS & Observability (Weeks 21–22 (24-Week Plan))

Ship software reliably and operate it in production. Multi-stage Docker packaging, Docker Compose, GitHub Actions CI/CD, core AWS services (EC2, S3, RDS, IAM), structured logging, actionable monitoring alerts/dashboards, incident diagnosis, and zero-downtime migrations.

**🎯 Project Anchor:** Smart City & Collab-Code: Containerize both apps, wire up GitHub Actions CI/CD, configure S3 presigned uploads, add /health/live and /health/ready endpoints, and verify live production deployments.

**📋 Outcomes & Job-Readiness Milestones:**
- Package Node and Next.js applications into secure, minimal multi-stage Docker images
- Orchestrate multi-service stacks (Web + API + PostgreSQL + Redis) with Docker Compose and healthchecks
- Automate linting, type-checking, test suites, and container deployment via GitHub Actions CI/CD
- Configure structured JSON logging, RED metrics dashboards, actionable symptom-based alerts, and incident diagnosis runbooks
- Job-Readiness Cadence (Weeks 21–22): Perform final live deployment checks on Collab-Code & Smart City (HTTPS, healthchecks, seed data, README architecture diagrams) and finalize resume & portfolio links

### 9-1 Docker Fundamentals
- [ ] **9-1-1** Containerization mental model: Images (layered union FS) vs Containers vs Volumes vs Networks — 🔴 critical
- [ ] **9-1-2** Dockerfile authoring: FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, ENTRYPOINT vs CMD (exec form) — 🔴 critical
- [ ] **9-1-3** Multi-stage Docker builds: separating TypeScript build dependencies from minimal runtime images — 🔴 critical
- [ ] **9-1-4** .dockerignore hygiene (excluding node_modules, .git, .env, test artifacts) — 🟡 important
- [ ] **9-1-5** Layer caching optimization: copying package.json + lockfile before source code — 🟡 important
- [ ] **9-1-6** Running containers as non-root user (USER node) and handling PID 1 signal forwarding (tini / --init) — 🟡 important

### 9-2 Docker Compose
- [ ] **9-2-1** docker-compose.yml orchestration: services, networks, named volumes, env_file — 🔴 critical
- [ ] **9-2-2** Full-stack local parity: Next.js/Vite + Express API + PostgreSQL + Redis + Worker — 🟡 important
- [ ] **9-2-3** Container healthchecks and startup ordering (depends_on: condition: service_healthy) — 🟡 important
- [ ] **9-2-4** Data persistence with named volumes vs bind mounts — 🟡 important

### 9-3 GitHub Actions CI/CD
- [ ] **9-3-1** Workflow syntax: triggers (push, pull_request), jobs, matrix runners, and steps — 🔴 critical
- [ ] **9-3-2** Automated quality gates: running npm ci, tsc --noEmit, ESLint, and Vitest/Playwright in CI — 🔴 critical
- [ ] **9-3-3** Dependency & Docker layer caching in CI to keep pipelines fast — 🟡 important
- [ ] **9-3-4** Managing GitHub Secrets, environment protection rules, and OIDC cloud credentials — 🟡 important
- [ ] **9-3-5** Building and pushing tagged container images to GHCR / ECR and triggering deployment — 🟡 important

### 9-4 AWS Cloud Basics & Cost Safeguards
- [ ] **9-4-1** Compute & Networking: EC2 instances, Security Groups (stateful firewalls), SSH/SSM, Reverse Proxy (Nginx/Caddy) — 🔴 critical
- [ ] **9-4-2** S3 Object Storage: private buckets, IAM policies, CORS, and presigned PUT/GET URLs — 🔴 critical
- [ ] **9-4-3** Managed Databases: RDS PostgreSQL, automated backups, security group isolation — 🟡 important
- [ ] **9-4-4** IAM Security: least-privilege principle, IAM Roles vs long-lived Access Keys, policy evaluation — 🔴 critical
- [ ] **9-4-5** Serverless compute: AWS Lambda execution model and cold start tradeoffs — 🟢 good-to-know
- [ ] **9-4-6** Managed queues: AWS SQS visibility timeouts & Dead Letter Queues vs Redis BullMQ — 🟢 good-to-know
- [ ] **9-4-7** CDN edge delivery: CloudFront caching, origin shield, and TLS termination — 🟢 good-to-know

### 9-5 Deployment & Production Observability
- [ ] **9-5-1** Zero-downtime deployment strategies: Rolling updates, Blue-Green, and Canary releases — 🟡 important
- [ ] **9-5-2** Structured JSON logging (Pino): log levels, redacting PII/tokens, and X-Request-Id correlation — 🔴 critical
- [ ] **9-5-3** Health probes: Liveness (/health/live) vs Readiness (/health/ready checking DB/Redis connectivity) — 🔴 critical
- [ ] **9-5-4** 12-Factor App environment parity across local, staging, and production — 🟡 important

### 9-6 Production Observability, Alerting, Incident Triage & Safeguards
- [ ] **9-6-1** Application telemetry: RED metrics (Rate, Errors, Duration) and latency percentiles (p50, p95, p99) — 🟡 important
- [ ] **9-6-2** Distributed tracing fundamentals (OpenTelemetry): trace IDs and spans across HTTP, DB, and queue workers — 🟢 good-to-know
- [ ] **9-6-3** Automated deployment rollbacks: failing readiness checks, image tag rollback, and database compatibility — 🟡 important
- [ ] **9-6-4** Safe database migrations in CI/CD: running backward-compatible migrations before rolling out new app containers — 🟡 important
- [ ] **9-6-5** Container security scanning: Trivy / Docker Scout, minimal Alpine/Distroless images — 🟢 good-to-know
- [ ] **9-6-6** Cloud cost guardrails: AWS Budgets alerts, billing alarms, NAT Gateway/egress traps, tearing down idle resources — 🟡 important
- [ ] **9-6-7** Actionable monitoring dashboards, symptom-based alerting (SLO burn rate, 5xx spikes, p99 latency, queue lag), and incident diagnosis playbooks — 🟡 important

**🛠️ Mini-Build:** Production Dockerized full-stack deployment with Docker Compose, GitHub Actions CI pipeline, S3 presigned uploads, health check endpoints, and monitoring alert dashboard.

**🚪 Completion Gate:** Explain: Multi-stage Docker layer caching, liveness vs readiness probes, and symptom-based alerting | Implement: GitHub Actions CI/CD pipeline with test DB service container | Debug: Diagnose a simulated production 5xx latency spike using structured logs and RED metrics | Apply: Complete final deployment checklist & README polish for both flagship projects.

---

## 🏗️ Phase 10: Practical System Design & Placement Readiness (Weeks 23–24 (24-Week Plan))

Practical SDE/full-stack system design and final interview readiness. Capacity estimation, bottleneck diagnosis, failure modes, rate limiters, URL shorteners, and end-to-end architectural defense of Collab-Code and Smart City.

**🎯 Project Anchor:** Collab-Code & Smart City: Formalize system architecture diagrams, scaling roadmaps (1K → 100K users), failure mode tables, and trade-off defenses for placement & off-campus interviews.

**📋 Outcomes & Job-Readiness Milestones:**
- Perform back-of-the-envelope capacity estimations (QPS, peak load, storage, bandwidth, cache RAM) for 100K–1M DAU
- Identify architectural bottlenecks (CPU, memory, DB I/O, connection pools, network latency) and design concrete failure recovery plans
- Design standard entry/mid-level interview systems (Rate Limiter, URL Shortener, Real-Time Collaborative Editor, Notification Service)
- Job-Readiness Cadence (Weeks 23–24): Complete 2 full-loop placement mock interviews (System Design + Deep Project Walkthrough of Collab-Code & Smart City + Tradeoff Defense)

### 10-1 Architecture Patterns
- [ ] **10-1-1** Modular Monolith vs Microservices: team/operational tradeoffs and when NOT to split a monolith — 🔴 critical
- [ ] **10-1-2** Clean / Hexagonal architecture: separating domain logic from HTTP and database adapters — 🟢 good-to-know
- [ ] **10-1-3** Layered architecture in Node/TypeScript: Controllers → Services → Repositories/DAL — 🔴 critical
- [ ] **10-1-4** API Gateway, Reverse Proxy, and BFF (Backend For Frontend) patterns — 🟡 important
- [ ] **10-1-5** Event-driven architecture: synchronous REST vs asynchronous queues/pub-sub decoupling — 🟡 important
- [ ] **10-1-6** Transactional Outbox pattern, CQRS, and Event Sourcing overview — 🟢 good-to-know

### 10-2 Distributed Systems Concepts
- [ ] **10-2-1** CAP Theorem in practice: choosing CP vs AP during network partitions — 🔴 critical
- [ ] **10-2-2** Consistency models: Strong consistency vs Eventual consistency vs Read-your-own-writes — 🔴 critical
- [ ] **10-2-3** Load balancing: L4 vs L7, Round Robin, Least Connections, and Consistent Hashing for stateful nodes — 🔴 critical
- [ ] **10-2-4** Vertical vs Horizontal scaling and externalizing state (stateless app tier) — 🔴 critical
- [ ] **10-2-5** Database scaling: Read replicas, table partitioning, and horizontal sharding keys — 🟡 important
- [ ] **10-2-6** Replication topologies: Single-Leader (Primary-Replica) vs Multi-Leader tradeoffs — 🟢 good-to-know

### 10-3 Common System Design Problems
- [ ] **10-3-1** Design a URL Shortener (TinyURL): Base62 encoding vs Snowflake IDs, 301 vs 302 redirects, Redis read cache — 🔴 critical
- [ ] **10-3-2** Design a Distributed Rate Limiter: Token Bucket, Fixed Window, Sliding Window Log/Counter in Redis — 🔴 critical
- [ ] **10-3-3** Design a Real-Time Collaborative Editor / Chat (Collab-Code): WebSockets, Pub/Sub routing, presence, conflict resolution (OT/CRDT overview) — 🔴 critical
- [ ] **10-3-4** Design a Scalable Notification Service (Smart City): priority queues, worker retries, idempotency, rate limiting — 🟡 important
- [ ] **10-3-5** Design a Media Upload & Processing Pipeline: presigned S3 URLs, async thumbnail workers, CDN delivery — 🟡 important

### 10-4 Monorepo Architecture
- [ ] **10-4-1** Workspace fundamentals: npm/pnpm workspaces and package linking — 🟢 good-to-know
- [ ] **10-4-2** Sharing end-to-end TypeScript types & Zod schemas between frontend and backend — 🟡 important
- [ ] **10-4-3** Shared internal packages (tsconfig, eslint, validation schemas, UI primitives) — 🟢 good-to-know
- [ ] **10-4-4** Task orchestration and build caching (Turborepo / Nx concepts) — 🟢 good-to-know

### 10-5 Practical System Design: Capacity Estimation, Bottlenecks & Project Defense
- [ ] **10-5-1** Back-of-the-envelope capacity math: estimating average/peak QPS, storage growth, bandwidth, and Redis RAM for 100K DAU — 🔴 critical
- [ ] **10-5-2** Bottleneck diagnosis: pinpointing CPU-bound vs memory-bound vs DB I/O-bound vs network-latency bottlenecks — 🔴 critical
- [ ] **10-5-3** Failure mode analysis: handling primary DB failover, Redis crash/cold-cache boot, and third-party API outages — 🟡 important
- [ ] **10-5-4** Architectural tradeoff defense: Consistency vs Availability in Collab-Code (real-time sync) vs Smart City (issue reporting) — 🔴 critical
- [ ] **10-5-5** Cost-aware architecture: comparing serverless vs long-running containers, connection pooling, and CDN offload — 🟢 good-to-know
- [ ] **10-5-6** End-to-end interview walkthrough & defense of Collab-Code and Smart City Issue Reporting (schema, APIs, scaling, bugs solved) — 🔴 critical

**🛠️ Mini-Build:** Complete System Design dossier, capacity calculations, and Redis Sliding-Window Rate Limiter + full architectural defense deck for Collab-Code and Smart City.

**🚪 Completion Gate:** Explain (Full-Loop Mock Interview #5 & #6): Capacity math + 20-minute deep-dive defense of Collab-Code and Smart City | Implement: Redis sliding-window rate limiter | Debug: Eliminate single points of failure in a web + DB + queue topology | Apply: Pass final portfolio, live deployment, and interview readiness sign-off.

---

## 🐱 Phase 11: NestJS (Enterprise Backend Extension) (Post-Core Extension (Bonus))

Enterprise-grade Node.js architecture built on TypeScript decorators, modules, and Dependency Injection. (Optional post-core extension for enterprise MNC interviews).

**🎯 Project Anchor:** Enterprise Reference: Understand how Smart City Issue Reporting APIs map to NestJS modules, controllers, and DI providers in large enterprise teams.

**📋 Outcomes & Job-Readiness Milestones:**
- Understand Inversion of Control (IoC) and Dependency Injection in enterprise TypeScript backends
- Build modular REST APIs with NestJS Controllers, Injectable Providers, Guards, and ValidationPipes
- Integrate Prisma and auto-generate Swagger OpenAPI documentation in NestJS

### 11-1 NestJS Architecture & Dependency Injection
- [ ] **11-1-1** Modules: @Module decorator, feature modules, shared & global modules — 🟡 important
- [ ] **11-1-2** Controllers: @Controller routing, @Get/@Post/@Body/@Param/@Query decorators — 🟡 important
- [ ] **11-1-3** Providers: @Injectable services and constructor dependency injection — 🟡 important
- [ ] **11-1-4** IoC container internals: provider scopes (Singleton, Request, Transient) and custom providers — 🟢 good-to-know
- [ ] **11-1-5** Module & application lifecycle hooks (onModuleInit, onApplicationShutdown) — 🟢 good-to-know

### 11-2 Pipes, Guards, Interceptors & Filters
- [ ] **11-2-1** Pipes: payload validation and transformation (ValidationPipe / ZodValidationPipe) — 🟡 important
- [ ] **11-2-2** Guards: CanActivate interface, ExecutionContext, and role-based @UseGuards — 🟡 important
- [ ] **11-2-3** Interceptors: RxJS-based request/response logging, timing, and payload mapping — 🟢 good-to-know
- [ ] **11-2-4** Exception Filters: @Catch decorator and standardized HTTP error formatting — 🟢 good-to-know
- [ ] **11-2-5** NestJS request pipeline order: Middleware → Guards → Interceptors (pre) → Pipes → Controller → Interceptors (post) → Filters — 🟢 good-to-know

### 11-3 NestJS with Prisma & Swagger
- [ ] **11-3-1** PrismaService lifecycle integration in NestJS — 🟢 good-to-know
- [ ] **11-3-2** DTO validation with class-validator/class-transformer vs nestjs-zod — 🟢 good-to-know
- [ ] **11-3-3** OpenAPI / Swagger generation with @nestjs/swagger (@ApiTags, @ApiOperation, @ApiResponse) — 🟢 good-to-know
- [ ] **11-3-4** Passport.js & @nestjs/jwt authentication strategies — 🟢 good-to-know
- [ ] **11-3-5** Typed configuration management with @nestjs/config — 🟢 good-to-know

**🛠️ Mini-Build:** NestJS CRUD module with PrismaService, JWT AuthGuard, and Swagger documentation.

**🚪 Completion Gate:** Explain: How the NestJS IoC container resolves dependencies and request lifecycle order | Implement: NestJS ValidationPipe + AuthGuard | Debug: Resolve a circular dependency between two modules | Apply: Build a modular CRUD resource with Swagger decorators.

---

