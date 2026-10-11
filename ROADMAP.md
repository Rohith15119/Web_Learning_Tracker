# 🗺️ TypeScript-First Full-Stack Mastery Roadmap (24 Weeks)

> **Profile:** Final-Year B.Tech CS Student (Graduating 2027) | 400+ LeetCode Solved  
> **Target:** Top MNC & Product Company SDE / Full-Stack Roles (Campus Placements & Off-Campus)  
> **Commitment:** 24 Weeks @ 4–5 Hours/Day  
> **Flagship Projects:** **Collab-Code** (Real-Time Collaborative IDE) & **Smart City Issue Reporting** (Civic Reporting Portal)  
> **Interactive Web Tracker:** Launch via `cd tracker && npm run dev` (http://localhost:5173)  
>
> **Priority Key:**  
> 🔴 **Critical:** Core stack essentials and high-frequency technical interview questions (must know cold).  
> 🟡 **Important:** Essential production engineering practices and patterns for building scalable applications.  
> 🟢 **Good-to-know:** Secondary or optional enterprise extensions that do not block the 24-week core completion.

---

## 📅 24-Week Schedule Overview

| Weeks | Phase | Core Focus | Project Context |
|---|---|---|---|
| **Weeks 1–2** | **Phase 0** | TypeScript Core & Developer Collaboration Workflow | Collab-Code & Smart City shared types & Git setup |
| **Weeks 3–4** | **Phase 1** | JavaScript Runtime, Concurrency & Reliability | Race condition prevention in Collab-Code real-time edits |
| **Weeks 5–6** | **Phase 2** | Web, Networking & Browser Architecture Fundamentals | Accessible & responsive citizen portal in Smart City |
| **Weeks 7–8** | **Phase 3** | Node.js Core, Streams & Reliability | Streaming media & attachment handling in Smart City |
| **Weeks 9–10** | **Phase 4** | Production HTTP, Express & REST APIs | Idempotent issue submission & RBAC in Smart City |
| **Weeks 11–13** | **Phase 5** | PostgreSQL, Prisma & Production Data Layer | Normalization, JSONB, indexing & locking in Smart City |
| **Weeks 14–16** | **Phase 6** | React & Next.js App Router (Production Quality) | Next.js Server Components, Actions & optimistic UI |
| **Weeks 17–18** | **Phase 7** | Redis, Resilient Background Jobs & WebSockets | Real-time presence in Collab-Code & BullMQ alerts in Smart City |
| **Weeks 19–20** | **Phase 8** | Comprehensive Testing & Quality Engineering | DB integration tests, RBAC regressions & Playwright E2E |
| **Weeks 21–22** | **Phase 9** | DevOps, Docker, CI/CD, AWS & Observability | Multi-stage Docker, GitHub Actions & AWS deployment |
| **Weeks 23–24** | **Phase 10** | Practical System Design & Capstone Architecture | Capacity estimation, bottleneck analysis & capstone audits |
| *Bonus* | **Phase 11** | NestJS Enterprise Backend Extension | Enterprise modular architecture & IoC (Optional) |

---

## Phase 0 — 🔷 TypeScript Core & Developer Workflow
*Weeks 1–2 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Configure strict `tsconfig.json` compiler flags for modern ESM projects with zero implicit `any`.
- Model complex domain entities using discriminated unions, generics, mapped types, and the `satisfies` operator.
- Validate untrusted inputs at runtime boundaries while preserving static type safety.
- Execute professional Git branching, interactive rebasing, merge conflict resolution, and atomic PR reviews.

**🏗️ Project Anchor:**  
Define shared TypeScript domain models (`Document`, `EditOperation`, `IssueReport`, `UserRole`) and establish the Git branching, PR workflow, and lint/type-check hooks for Collab-Code and Smart City.

### 0.1 — tsconfig.json & Compiler Deep-Dive
- 🔴 What `tsc` does: parse → type-check → emit
- 🔴 `strict` mode and the 8 flags it enables
- 🔴 `target` vs `module` vs `moduleResolution`
- 🟡 `noUncheckedIndexedAccess`, `noImplicitReturns`
- 🟡 `rootDir`, `outDir`, `include`, `exclude`, `extends`
- 🟢 `sourceMap`, `declaration`, `declarationMap`
- 🟡 `isolatedModules` and why bundlers need it

### 0.2 — Primitives, Unions, Intersections & Literal Types
- 🔴 `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- 🔴 Literal types: `'hello'`, `42`, `true` as types
- 🔴 Union types (`A | B`) — the OR of types
- 🔴 Intersection types (`A & B`) — the AND of types
- 🟡 Type aliases vs inline types
- 🟡 `const` assertions (`as const`)

### 0.3 — Type Narrowing & Type Guards
- 🔴 `typeof` narrowing
- 🔴 `instanceof` narrowing
- 🔴 `in` operator narrowing
- 🔴 Discriminated unions (tagged unions)
- 🔴 Custom type guard functions (`is` keyword)
- 🟡 Truthiness narrowing and its pitfalls
- 🟢 Assertion functions (`asserts` keyword)

### 0.4 — Functions: Generics, Overloads, Infer
- 🔴 Generic functions: `<T>`, constraints (`extends`)
- 🟡 Generic defaults: `<T = string>`
- 🔴 Function overloads: multiple signatures
- 🟡 Rest parameters and tuple types
- 🟡 The `infer` keyword in conditional types
- 🔴 Typing higher-order functions and callbacks
- 🟡 `void` vs `undefined` return types

### 0.5 — Interfaces vs Types & Declaration Merging
- 🔴 `interface` vs `type`: when to use which
- 🟡 Declaration merging (interfaces only)
- 🔴 Extending interfaces (`extends`) vs intersecting types (`&`)
- 🟢 Module augmentation with `declare module`
- 🔴 Index signatures: `[key: string]: T`
- 🟡 `Readonly` properties and arrays

### 0.6 — Utility Types
- 🔴 `Partial<T>` and `Required<T>`
- 🔴 `Pick<T, K>` and `Omit<T, K>`
- 🔴 `Record<K, V>`
- 🟡 `Readonly<T>` and `ReadonlyArray<T>`
- 🔴 `ReturnType<T>` and `Parameters<T>`
- 🟡 `Extract<T, U>` and `Exclude<T, U>`
- 🟡 `NonNullable<T>`, `Awaited<T>`
- 🔴 Implementing utility types from scratch

### 0.7 — Mapped Types & Conditional Types
- 🔴 Mapped types: `{ [K in keyof T]: ... }`
- 🟡 Key remapping with `as` clause
- 🔴 Conditional types: `T extends U ? X : Y`
- 🟡 Distributive conditional types
- 🟡 Template literal types: `` `${A}-${B}` ``
- 🔴 Building real-world types with mapped + conditional

### 0.8 — unknown vs any vs never & Exhaustive Checks
- 🔴 `any`: escape hatch, when justified
- 🔴 `unknown`: safe `any`, must narrow before use
- 🔴 `never`: impossible type, bottom type
- 🔴 Exhaustive switch with `never` (`satisfies never`)
- 🔴 Enums vs const objects vs string unions
- 🟡 Why string unions are usually preferred

### 0.9 — Modules: ESM vs CJS, Declaration Files
- 🔴 ES Modules: `import`/`export` syntax
- 🔴 CommonJS: `require`/`module.exports`
- 🔴 `package.json` `"type": "module"` field
- 🟡 `.d.ts` declaration files: what and why
- 🟢 `declare` keyword for ambient declarations
- 🟡 Module resolution: how TS finds imports
- 🟡 `package.json` `exports` field

### 0.10 — Git & Developer Collaboration Workflow
- 🔴 Git branching models: feature branches, trunk-based vs Git-Flow
- 🔴 Merging vs Rebasing: interactive rebase (`git rebase -i`), squash merging, commit cleanliness
- 🔴 Merge conflict resolution mechanics, 3-way diffs, aborting rebases safely
- 🔴 Safe undos: `git revert` vs `git reset` (--soft, --mixed, --hard) vs `git restore`
- 🟡 Pull Request lifecycle: atomic commits, conventional commits, constructive code reviews
- 🟡 Release tags (`git tag -a`), Semantic Versioning (SemVer), and changelogs
- 🔴 Dependency lockfile hygiene: `package-lock.json` integrity, deterministic builds, `npm ci` vs `npm install`

### 0.11 — Advanced TypeScript & Boundary Validation
- 🔴 Structural typing (duck typing) vs nominal typing, and excess property check rules
- 🔴 The `satisfies` operator: validating shapes without widening or losing literal types
- 🔴 `keyof` operator and Indexed Access types (`T[K]`, `T[number]`)
- 🟡 Function overloads: implementation signatures vs call signatures
- 🔴 Runtime validation at untrusted boundaries: why compile-time types alone cannot validate API input
- 🟡 Ambient declarations, `declare global`, and augmenting third-party library types

> **🛠️ Mini-Build:** Type-Safe In-Memory Event Emitter with generic event maps, payload validation, and clean Git feature branch workflow with signed tags.  
> **🚪 Completion Gate:** Explain: `tsc` compilation stages and structural vs nominal typing | Implement: Generic event emitter with strict payloads | Debug: Resolve a 3-way Git merge conflict & fix a type-widening bug | Apply: Commit clean domain types to project repo with atomic PR commits.

---

## Phase 1 — ⚡ JavaScript Runtime, Concurrency & Reliability
*Weeks 3–4 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Predict and trace event loop execution order across synchronous execution, microtasks, timers, and I/O.
- Implement robust asynchronous coordination patterns with timeout, cancellation, and concurrency limits.
- Diagnose and eliminate memory leaks (lingering event listeners, timer retention, circular closures).
- Prevent async race conditions in stateful client operations and server request handlers.

**🏗️ Project Anchor:**  
Collab-Code: Prevent race conditions when merging concurrent keystrokes from multiple users; eliminate memory leaks in active code-editing rooms when users disconnect.

### 1.1 — Event Loop Internals
- 🔴 Call stack: how function execution works
- 🔴 Web APIs / Node APIs: setTimeout, fetch, I/O
- 🔴 Task queue (macrotask queue)
- 🔴 Microtask queue: Promise.then, queueMicrotask
- 🟡 Event loop phases in Node.js (timers, poll, check)
- 🟡 `setImmediate` vs `setTimeout(fn, 0)` vs `process.nextTick`
- 🔴 Predict-the-output exercises (event loop order)

### 1.2 — Promises Deep-Dive
- 🔴 Promise states: pending, fulfilled, rejected
- 🔴 Creating promises: `new Promise((resolve, reject) => ...)`
- 🔴 `.then()`, `.catch()`, `.finally()` chaining
- 🔴 `Promise.all()` — fail-fast parallel
- 🔴 `Promise.allSettled()` — wait for all
- 🔴 `Promise.race()` — first to settle wins
- 🟡 `Promise.any()` — first to fulfill wins
- 🟢 `Promise.withResolvers()` (modern)
- 🔴 Implementing `Promise.all` from scratch

### 1.3 — async/await Patterns & Pitfalls
- 🔴 `async` functions always return a Promise
- 🔴 Sequential vs parallel await
- 🔴 Error handling: `try/catch` vs `.catch()`
- 🔴 Avoiding unhandled promise rejections
- 🟡 Top-level `await`
- 🔴 Common mistake: `await` in a loop (sequential vs parallel)
- 🟡 `for await...of` for async iterables

### 1.4 — Closures & Scope
- 🔴 Lexical scope and the scope chain
- 🔴 What a closure is: function + its lexical environment
- 🔴 Classic closure pitfalls: `var` in loops
- 🟡 Closures for data privacy (module pattern)
- 🟡 Memory implications of closures
- 🟡 IIFE (Immediately Invoked Function Expression)

### 1.5 — `this` Binding & Prototypal Inheritance
- 🔴 4 rules of `this`: default, implicit, explicit, new
- 🔴 Arrow functions: lexical `this`
- 🔴 `bind()`, `call()`, `apply()`
- 🔴 Prototype chain: `__proto__`, `Object.getPrototypeOf`
- 🔴 ES6 classes are syntactic sugar over prototypes
- 🟡 `Object.create()` and prototypal patterns

### 1.6 — AbortController & Cancellation Patterns
- 🟡 `AbortController` and `AbortSignal`
- 🟡 Cancelling `fetch` requests
- 🟡 Timeout patterns with `AbortSignal.timeout()`
- 🟢 Making custom APIs cancellable

### 1.7 — Error Handling Strategies
- 🔴 Custom Error classes extending `Error`
- 🟡 Operational vs programmer errors
- 🟡 Result/Either pattern (success | failure)
- 🟡 Error boundaries in different contexts
- 🟡 Global error handlers: `uncaughtException`, `unhandledRejection`

### 1.8 — Iterators, Generators & Async Generators
- 🟡 Iterator protocol: `Symbol.iterator`, `next()`
- 🟡 Generator functions: `function*`, `yield`
- 🟡 Async generators: `async function*`, `for await...of`
- 🟢 Use cases: lazy evaluation, streaming data

### 1.9 — JavaScript Reliability, Memory & Concurrency Gotchas
- 🔴 Object references, shallow copies (spread, `Object.assign`) vs deep copies (`structuredClone`)
- 🔴 Equality and coercion: `==` vs `===` vs `Object.is` (-0, NaN, object reference identity)
- 🔴 Immutability vs in-place mutation pitfalls in state and async workflows
- 🔴 Async race conditions: stale responses, unsynchronized shared memory, out-of-order execution
- 🔴 Memory leaks in JS: lingering event listeners, timer retention, detached DOM nodes, closures holding large scopes
- 🟡 Debugging Node.js and browser JS using breakpoints, inspector, source maps, and memory profiling

> **🛠️ Mini-Build:** Async Task Runner with retry + exponential backoff + cancellation (`AbortSignal`) + concurrency limit pool.  
> **🚪 Completion Gate:** Explain: Call stack, macrotask, and microtask queue priorities | Implement: `Promise.all` from scratch with fail-fast semantics | Debug: Find and fix memory leak in unclosed WebSocket listener | Apply: Add `AbortSignal` timeout to code execution API calls in Collab-Code.

---

## Phase 2 — 🌐 Web, Networking & Browser Architecture Fundamentals
*Weeks 5–6 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Trace the full network journey from URL entry to first byte (DNS, TCP 3-way, TLS 1.3 handshake, HTTP/2/3).
- Optimize Critical Rendering Path by eliminating parser-blocking resources and layout thrashing.
- Defend applications against OWASP Top 10 web vulnerabilities (XSS, CSRF, Clickjacking, CORS misconfiguration).
- Build fully accessible (a11y), responsive UI layouts adhering to semantic HTML and keyboard navigation standards.

**🏗️ Project Anchor:**  
Smart City Issue Reporting: Public citizen reporting portal requires WCAG accessibility, responsive mobile layouts, secure cookie auth, and fast LCP image rendering on slow 4G connections.

### 2.1 — Networking Under the Hood
- 🔴 What happens when you type a URL in the browser and hit Enter (complete journey)
- 🔴 DNS resolution: recursive vs iterative queries, DNS record types (`A`, `AAAA`, `CNAME`, `TXT`)
- 🔴 TCP 3-way handshake (`SYN`, `SYN-ACK`, `ACK`) and 4-way FIN termination
- 🔴 TLS/HTTPS 1.3 handshake: certificates, asymmetric/symmetric encryption, forward secrecy
- 🔴 HTTP Evolution: HTTP/1.1 vs HTTP/2 (multiplexing, HPACK) vs HTTP/3 (QUIC over UDP)
- 🟡 Head-of-Line (HoL) blocking at application vs transport layer

### 2.2 — Browser Internals & Critical Rendering Path
- 🟡 Browser architecture: Browser process, Renderer process, GPU process, Sandbox
- 🔴 Critical Rendering Path: HTML parser -> DOM Tree construction
- 🔴 CSSOM construction & render-blocking CSS
- 🔴 Parser-blocking JavaScript: `script` vs `async` vs `defer`
- 🔴 Render Tree construction (combining DOM + CSSOM)
- 🔴 Layout (Reflow) vs Paint vs Compositing
- 🔴 Layout thrashing & forced synchronous layout (and how to avoid it)
- 🟡 CSS GPU acceleration: `transform`, `opacity`, `will-change`

### 2.3 — CSS Mechanics & Layout Engine
- 🔴 Box Model: content, padding, border, margin & `box-sizing: border-box`
- 🔴 Block Formatting Context (BFC) and Margin Collapsing mechanics
- 🔴 Stacking Context & `z-index` rules (`opacity`, `transform`, `isolation`)
- 🔴 Flexbox layout algorithm: main-axis, cross-axis, `flex-grow`, `flex-shrink`, `flex-basis`
- 🟡 CSS Grid: `grid-template-columns`, `fr` units, `minmax()`, `auto-fit` vs `auto-fill`
- 🟡 CSS Specificity calculation (inline vs ID vs class vs element) & `@layer`

### 2.4 — Web Security & OWASP Top 10 for Full-Stack
- 🔴 Same-Origin Policy (SOP): origins, protocols, ports
- 🔴 CORS deep-dive: Simple requests vs Preflight (`OPTIONS`), CORS headers
- 🔴 Cross-Site Scripting (XSS): Stored, Reflected, DOM-based & sanitization
- 🔴 Content Security Policy (CSP): directives, nonces, hashes
- 🔴 Cross-Site Request Forgery (CSRF): attack mechanics & SameSite cookies / anti-CSRF tokens
- 🟡 Clickjacking & `X-Frame-Options` / `frame-ancestors`
- 🔴 SQL Injection & NoSQL Injection defense
- 🟡 Server-Side Request Forgery (SSRF) basics

### 2.5 — Client-Side Storage & HTTP Caching Mechanics
- 🔴 Cookies: `HttpOnly`, `Secure`, `SameSite` (Strict, Lax, None), Domain, Path, Expiry
- 🔴 LocalStorage vs SessionStorage: quotas, synchronous I/O, security risks
- 🟡 IndexedDB: transactional client-side database, when to use
- 🔴 HTTP Caching headers: `Cache-Control` (`max-age`, `no-cache`, `no-store`, `stale-while-revalidate`)
- 🔴 Validation caching: `ETag` vs `Last-Modified`, `If-None-Match` vs `If-Modified-Since`
- 🟢 Service Workers & Cache API basics (PWA offline caching)

### 2.6 — Web Performance & Core Web Vitals
- 🔴 Core Web Vitals: LCP (Largest Contentful Paint) & optimization
- 🔴 Core Web Vitals: INP (Interaction to Next Paint) & main thread blocking
- 🔴 Core Web Vitals: CLS (Cumulative Layout Shift) & aspect-ratio / layout stability
- 🟡 Resource hints: `preload`, `prefetch`, `preconnect`, `dns-prefetch`
- 🔴 Bundle optimization: tree shaking, code splitting (dynamic `import()`), compression (Gzip/Brotli)
- 🟡 Image optimization: WebP/AVIF, responsive images (`srcset`, `sizes`), lazy loading

### 2.7 — Frontend Engineering Foundations: Accessibility, Layout & UI States
- 🔴 Semantic HTML elements (`main`, `nav`, `article`, `section`, `dialog`) vs div soup
- 🔴 Web accessibility (a11y): ARIA attributes (`aria-label`, `aria-expanded`, `aria-live`), contrast, screen readers
- 🔴 Keyboard navigation & focus management: `tabindex`, visible focus rings, accessible modal focus traps
- 🟡 Responsive design: mobile-first approach, fluid typography (`clamp()`), container queries vs media queries
- 🔴 Essential UI state design: loading skeletons, actionable error states, informative empty states
- 🔴 Accessible form controls: labels, error descriptions (`aria-describedby`), disabled vs aria-disabled

> **🛠️ Mini-Build:** Interactive Critical Rendering Path visualizer & security header analyzer (evaluating CORS, CSP, HSTS, X-Frame-Options).  
> **🚪 Completion Gate:** Explain: Critical Rendering Path (DOM -> CSSOM -> Layout -> Paint -> Composite) | Implement: Secure CORS & Content Security Policy (CSP) headers | Debug: Diagnose and fix layout thrashing causing jank in scroll events | Apply: Make Smart City issue submission form 100% accessible with keyboard focus trap.

---

## Phase 3 — 🟢 Node.js Core, Streams & Reliability
*Weeks 7–8 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Explain the exact division of labor between V8, libuv event loop, and the 4-thread worker pool.
- Process large datasets and media files using Node Streams and `pipeline()` without memory ballooning.
- Profile CPU utilization and heap memory allocations to catch event loop lag and memory leaks.
- Implement zero-downtime graceful shutdown patterns handling active request draining.

**🏗️ Project Anchor:**  
Smart City: Stream citizen photo uploads directly to disk/storage using Transform streams without buffering whole files in RAM; ensure server drains active uploads on `SIGTERM`.

### 3.1 — Node.js Architecture
- 🔴 V8 engine: compilation, garbage collection
- 🔴 libuv: async I/O, thread pool (4 threads default)
- 🔴 Single-threaded but non-blocking model
- 🟡 When Node.js IS multi-threaded (crypto, fs, DNS)
- 🔴 Event-driven architecture: EventEmitter

### 3.2 — Streams
- 🔴 Why streams: memory efficiency for large data
- 🔴 Readable streams: flowing vs paused mode
- 🔴 Writable streams: write, end, drain event
- 🔴 Transform streams: modify data in transit
- 🔴 `pipeline()` for safe stream composition
- 🟡 Backpressure: what it is and why it matters

### 3.3 — File System, Path & Buffer
- 🔴 `fs/promises`: readFile, writeFile, readdir, stat
- 🔴 `path`: join, resolve, basename, extname, dirname
- 🟡 `Buffer`: binary data handling
- 🟢 File watching: `fs.watch`
- 🟢 Temporary files and directories

### 3.4 — Worker Threads & Child Processes
- 🟡 `worker_threads`: CPU-bound work off main thread
- 🟡 `child_process`: exec, spawn, fork
- 🟡 `cluster` module: multi-process for HTTP servers
- 🟡 When to use which: worker vs child vs cluster

### 3.5 — Process, Environment & Graceful Shutdown
- 🔴 `process.env`: environment variables
- 🔴 `.env` files and dotenv (or `--env-file` flag)
- 🟡 `process.exit`, exit codes
- 🟡 Signal handling: `SIGTERM`, `SIGINT`
- 🔴 Graceful shutdown pattern

### 3.6 — ESM in Node.js & Package Configuration
- 🔴 `package.json` `type: "module"` vs `"commonjs"`
- 🟡 `.mjs` vs `.cjs` file extensions
- 🟡 `package.json` `exports` field for dual packages
- 🟡 `__dirname` and `__filename` in ESM (`import.meta`)
- 🟢 Top-level `await` in ESM modules

### 3.7 — Node.js Production Reliability, Profiling & Dependency Hygiene
- 🟡 CPU and memory profiling in Node: taking heap snapshots, detecting memory leaks with `--inspect`
- 🔴 Event loop lag monitoring & detecting main thread blocking operations
- 🔴 Strict environment variable validation on boot using Zod (failing fast on missing config)
- 🟡 Package management hygiene: semantic version ranges (`^` vs `~` vs exact), peer dependencies, lockfile resolution
- 🟡 Security vulnerability auditing: `npm audit`, evaluating CVE severity, malicious package detection
- 🔴 Connection draining and zero-downtime graceful shutdown with active HTTP/WebSocket connections

> **🛠️ Mini-Build:** Streaming CSV & Media processor with Transform streams, backpressure management, memory ceiling guard, and graceful shutdown.  
> **🚪 Completion Gate:** Explain: When Node.js uses threads under the hood vs when it is single-threaded | Implement: Transform stream pipeline with backpressure handling | Debug: Identify event-loop blocking synchronous operation using Node inspector | Apply: Add graceful shutdown listener with 10s drain window to backend server.

---

## Phase 4 — ⚡ Production HTTP, Express & REST APIs
*Weeks 9–10 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Construct robust Express middleware pipelines with centralized, typed error contracts.
- Implement secure authentication with bcrypt, short-lived JWTs, and refresh token rotation in HttpOnly cookies.
- Build idempotent API mutation endpoints with `Idempotency-Key` caching.
- Validate and ingest file uploads safely with strict MIME and size controls.

**🏗️ Project Anchor:**  
Smart City Issue Reporting: Implement citizen issue submission, staff assignment, role-based status updates (Citizen, Field Worker, Municipal Admin), and webhook triggers for resolved issues.

### 4.1 — HTTP Fundamentals for APIs
- 🔴 Request/response cycle & statelessness
- 🔴 HTTP methods: GET, POST, PUT, PATCH, DELETE semantics
- 🔴 Status codes: 2xx, 3xx, 4xx, 5xx families & correct usage
- 🔴 Headers: Content-Type, Authorization, Accept, User-Agent
- 🔴 API Idempotency: what it means and how to implement it

### 4.2 — Express Middleware Pipeline
- 🔴 What middleware is: `(req, res, next) => void`
- 🔴 Middleware execution order & short-circuiting
- 🔴 Application-level vs router-level middleware
- 🔴 Built-in middleware: `express.json()`, `express.static()`
- 🟡 Third-party: cors, helmet, morgan, compression
- 🔴 Error-handling middleware (4 parameters)

### 4.3 — Request Validation with Zod
- 🔴 Zod schemas: `z.string()`, `z.object()`, `z.array()`
- 🔴 Validation: `.parse()` vs `.safeParse()`
- 🔴 Inferring TypeScript types from Zod schemas (`z.infer`)
- 🟡 Validating params, query, body separately
- 🟡 Custom error messages and transformations (`coerce`, `refine`)
- 🔴 Reusable validation middleware pattern

### 4.4 — Error Handling in Express
- 🔴 Async route wrapper (`catchAsync` / `asyncHandler`)
- 🔴 Centralized error handling middleware
- 🔴 `AppError` class with `statusCode` and `isOperational`
- 🟡 Handling 404 (not found routes)
- 🟡 Structured error responses (consistent API shape)

### 4.5 — Authentication: JWT & Sessions
- 🔴 Password hashing with bcrypt/argon2 (salting & work factor)
- 🔴 JWT structure: header.payload.signature
- 🔴 Access tokens vs refresh tokens (rotation pattern)
- 🔴 Token storage: httpOnly cookies vs localStorage tradeoffs
- 🔴 JWT verification middleware
- 🟡 Session-based auth vs token-based auth tradeoffs
- 🟡 OAuth 2.0 & OpenID Connect flow overview

### 4.6 — Authorization & Security Practices
- 🔴 RBAC (Role-Based Access Control)
- 🔴 Middleware guards for protected routes
- 🟡 Rate limiting: `express-rate-limit` & IP tracking
- 🟡 Security headers with Helmet
- 🟡 CORS configuration in Express

### 4.7 — REST Best Practices & API Design
- 🔴 Resource naming conventions (plural nouns, nesting)
- 🔴 Pagination: offset-based vs cursor-based (tradeoffs)
- 🟡 Filtering, sorting, field selection design
- 🟡 API versioning strategies (URI, header, query)
- 🟢 HATEOAS overview

### 4.8 — API Testing with Supertest + Vitest
- 🔴 Setting up supertest with Express
- 🔴 Testing CRUD endpoints
- 🟡 Testing auth flows (register, login, protected routes)
- 🟡 Testing error cases and edge cases
- 🟡 Test database setup and teardown

### 4.9 — Production API Reliability, Contracts & Ingestion
- 🔴 Pagination at scale: offset-based vs cursor-based (keyset pagination) performance tradeoffs
- 🔴 Standardized API error contracts: RFC 7807 Problem Details and consistent JSON error envelopes
- 🔴 Idempotency keys (`Idempotency-Key` header): preventing duplicate charges/mutations on network retry
- 🟡 Request timeouts and server-side request cancellation with `AbortController`
- 🟡 Request body payload limits (`express.json({ limit: '1mb' })`) and rate limiting bypass prevention
- 🔴 Webhook signature verification: HMAC SHA-256 raw body validation for third-party events
- 🔴 Secure file uploads: Multer configuration, MIME-type sniffing vs extension validation, size limits, streaming to S3
- 🟡 OpenAPI / Swagger documentation generation for Express APIs (`tsoa` or `swagger-jsdoc`)

> **🛠️ Mini-Build:** Production REST API with JWT rotation, RBAC guards, Zod request validation, idempotency key support, Multer upload security, and auto-generated Swagger documentation.  
> **🚪 Completion Gate:** Explain: Access token vs refresh token storage & rotation security tradeoffs | Implement: Idempotency middleware preventing duplicate issue submissions | Debug: Fix an authentication bypass vulnerability in RBAC middleware guard | Apply: Generate complete OpenAPI spec and run Supertest API integration tests.

---

## Phase 5 — 🗄️ PostgreSQL, Prisma & Production Data Layer
*Weeks 11–13 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Design normalized relational schemas (3NF) and write complex multi-table SQL queries with CTEs and Window functions.
- Read and optimize query execution plans using `EXPLAIN ANALYZE` and composite B-tree indexes.
- Prevent race conditions and deadlocks using ACID transactions and row-level locking (`SELECT FOR UPDATE`).
- Manage PostgreSQL connection pooling with PgBouncer and execute safe, zero-downtime Prisma migrations.

**🏗️ Project Anchor:**  
Smart City Issue Reporting: Design the complete relational data model (`Users`, `Issues`, `Comments`, `Upvotes`, `AuditLogs`, `Categories`) with JSONB metadata and concurrent upvote transaction locking.

### 5.1 — Relational Database Fundamentals
- 🔴 Tables, rows, columns, primary keys, surrogate vs natural keys
- 🔴 Foreign keys and relationships (1:1, 1:N, M:N)
- 🔴 Database Normalization: 1NF, 2NF, 3NF & BCNF
- 🟡 Denormalization: when and why to do it
- 🟡 Constraints: NOT NULL, UNIQUE, CHECK, DEFAULT, FOREIGN KEY CASCADE

### 5.2 — SQL Deep-Dive
- 🔴 SELECT, WHERE, ORDER BY, LIMIT, OFFSET
- 🔴 JOINs: INNER, LEFT, RIGHT, FULL, CROSS JOIN
- 🔴 GROUP BY, HAVING, aggregate functions (COUNT, SUM, AVG, MAX)
- 🔴 Subqueries: correlated vs non-correlated subqueries
- 🔴 Window functions: `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `LEAD`, `LAG`, `SUM OVER`
- 🔴 CTEs (Common Table Expressions): `WITH` clause & recursive CTEs
- 🔴 INSERT, UPDATE, DELETE, UPSERT (`ON CONFLICT DO UPDATE`)
- 🟡 Views and Materialized Views

### 5.3 — Indexing & Query Performance
- 🔴 What an index is: B-Tree internal structure
- 🔴 When to create indexes (and when NOT to index)
- 🔴 Composite indexes and leftmost prefix rule
- 🔴 EXPLAIN and EXPLAIN ANALYZE: reading query execution plans
- 🟡 Covering indexes & index-only scans
- 🟢 GIN, GiST indexes (JSONB & full-text search)

### 5.4 — Transactions & ACID
- 🔴 ACID properties deep-dive (Atomicity, Consistency, Isolation, Durability)
- 🔴 BEGIN, COMMIT, ROLLBACK, SAVEPOINT
- 🔴 Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable
- 🔴 Concurrency anomalies: Dirty reads, Non-repeatable reads, Phantom reads, Write skew
- 🟡 Deadlocks: causes, detection, and mitigation strategies
- 🟡 Optimistic vs Pessimistic locking (`SELECT FOR UPDATE`)

### 5.5 — Prisma ORM
- 🔴 Prisma schema: models, fields, relations, attributes
- 🔴 Migrations: `prisma migrate dev`, `deploy`, `status`
- 🔴 Prisma Client: type-safe CRUD queries
- 🔴 Relations: 1:1, 1:N, M:N explicit vs implicit
- 🟡 Filtering, sorting, pagination in Prisma
- 🟡 Raw SQL queries with `$queryRaw` and `$executeRaw`
- 🟡 Transactions in Prisma: sequential vs interactive `$transaction`
- 🟢 Database seeding with `prisma db seed`

### 5.6 — MongoDB & Mongoose Essentials (Secondary)
- 🟢 Document model vs Relational model (when to use NoSQL)
- 🟢 Schema design patterns: Embedding vs Referencing tradeoffs
- 🟢 CRUD operations with Mongoose + TypeScript typing
- 🟢 Aggregation pipeline: `$match`, `$group`, `$project`, `$lookup`, `$unwind`
- 🟢 Indexes in MongoDB & `explain('executionStats')`
- 🟢 Multi-document transactions in MongoDB

### 5.7 — PostgreSQL & Prisma Production Reliability & Operations
- 🔴 Database connection pooling: PgBouncer, Prisma connection pool sizing, diagnosing pool starvation
- 🔴 Handling DB connection dropouts, transient network failures, and retry backoff strategies
- 🔴 Safe migration strategies: zero-downtime expand-and-contract pattern, avoiding table-locking `ALTER TABLE`
- 🟡 Read replicas vs primary database: replication lag, routing read queries to replicas
- 🔴 PostgreSQL JSONB: querying nested documents (`->`, `->>`), JSONB operators (`@>`), GIN indexes for JSONB
- 🟡 Database backup and disaster recovery: logical backups (`pg_dump`, `pg_restore`) vs physical point-in-time recovery
- 🔴 Slow query optimization: finding N+1 queries in Prisma, utilizing `$queryRaw` when ORM abstractions generate poor SQL

> **🛠️ Mini-Build:** High-concurrency PostgreSQL schema with Prisma ORM, JSONB attribute indexing, transactional row locking for issue assignment, and automated seed factories.  
> **🚪 Completion Gate:** Explain: Four ACID isolation levels and their concurrency anomalies | Implement: Safe Prisma migration using expand-and-contract pattern | Debug: Diagnose and eliminate a deadlock under concurrent issue upvotes | Apply: Optimize slow issue search query using composite index and GIN index on JSONB.

---

## Phase 6 — ⚛️ React & Next.js App Router (Production Application Quality)
*Weeks 14–16 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Architect React applications leveraging React Server Components for zero-bundle data fetching.
- Implement optimistic mutations with automatic error rollback using Server Actions and `useOptimistic`.
- Diagnose and resolve Next.js hydration errors and multi-tier cache staleness issues.
- Analyze and optimize production bundle sizes with bundle analyzers and code splitting.

**🏗️ Project Anchor:**  
Collab-Code & Smart City: Build the interactive citizen dashboard with real-time upvoting, dynamic status filters, Server Actions form handling, and accessible modal views.

### 6.1 — React Internals & Rendering
- 🔴 Virtual DOM and reconciliation algorithm
- 🟡 React Fiber architecture: lanes, scheduling, priority
- 🔴 Keys: why indexes as keys cause bugs, diffing algorithm
- 🟡 Automatic batching in React 18+
- 🟡 Strict Mode double-rendering: why it happens and what it checks
- 🔴 Component lifecycle: render phase vs commit phase

### 6.2 — Hooks Deep-Dive
- 🔴 `useState`: state mechanics, updater functions, lazy initialization
- 🔴 `useEffect`: side effects, dependency array pitfalls, cleanup functions
- 🔴 `useRef`: DOM references, mutable instance values without re-render
- 🔴 `useReducer`: complex state logic & action dispatching
- 🔴 `useContext`: accessing context, re-rendering gotchas
- 🔴 Rules of Hooks: why top-level only (linked list of hook fibers)
- 🟢 `useId`, `useSyncExternalStore`, `useDeferredValue`

### 6.3 — Performance: useMemo, useCallback, React.memo
- 🔴 When React re-renders (state, props, context, parent)
- 🔴 `React.memo`: shallow prop comparison to skip re-renders
- 🔴 `useMemo`: caching expensive calculations
- 🔴 `useCallback`: stable function references for memoized children
- 🟡 When NOT to memoize (overhead of memoization)
- 🟢 React Compiler (React Forget) overview

### 6.4 — Custom Hooks & Composition Patterns
- 🔴 Extracting reusable custom hooks
- 🟡 Common hooks: `useDebounce`, `useLocalStorage`, `useWindowSize`, `useOnClickOutside`
- 🟡 Component composition vs prop drilling
- 🟡 Render props pattern
- 🟢 Compound components pattern

### 6.5 — State Management Architecture
- 🔴 State colocation: local vs lifted vs global state
- 🔴 Context API for global state & preventing unnecessary re-renders
- 🟡 Zustand: lightweight client-state store
- 🔴 Server state vs Client state distinction
- 🟡 TanStack Query (React Query) concepts: caching, refetching, mutations

### 6.6 — React Server Components (RSC)
- 🔴 Server Components vs Client Components paradigm shift
- 🔴 `'use client'` and `'use server'` directives
- 🔴 What Server Components can and cannot do
- 🟡 Serialization boundary: passing props from Server to Client
- 🟡 Benefits: 0-bundle-size dependencies, direct DB access, streaming

### 6.7 — Next.js App Router Architecture
- 🔴 File-based routing: `page.tsx`, `layout.tsx`, `template.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- 🔴 Nested layouts and state preservation
- 🟡 Route groups: `(group)` organization
- 🔴 Dynamic routes: `[slug]`, `[...catchAll]`, `[[...optional]]`
- 🟢 Parallel routes (`@modal`) and Intercepting routes (`(.)`)
- 🟡 Middleware: authentication & route redirection
- 🟡 Route handlers: `route.ts` (REST endpoints)

### 6.8 — Data Fetching, Caching & Mutations in Next.js
- 🔴 Async Server Components data fetching
- 🔴 Server Actions: form handling with `'use server'`
- 🔴 Revalidation: `revalidatePath` and `revalidateTag`
- 🟡 Static rendering vs Dynamic rendering
- 🟡 Streaming with Suspense and `loading.tsx`
- 🟡 `useTransition` and `useOptimistic` for immediate UI feedback

### 6.9 — Forms, Validation & UI Patterns
- 🔴 Controlled vs Uncontrolled components
- 🟡 React Hook Form + Zod schema resolver
- 🟡 Server Action form validation with Zod
- 🟡 `next/image` optimization, `next/font`, Metadata API for SEO

### 6.10 — React & Next.js Production Quality, Hydration & Resilience
- 🔴 Hydration errors deep-dive: SSR vs CSR mismatch causes, debugging hydration warnings, two-pass rendering
- 🔴 Next.js multi-tier caching model: Request Memoization, Data Cache, Full Route Cache, Router Cache
- 🟡 Server state management: TanStack Query (React Query) for client cache invalidation, polling, and background refetching
- 🔴 Optimistic updates with automatic rollback on network failure in Server Actions & client queries
- 🔴 Resilient file uploads in React: drag-and-drop, progress indication, presigned S3 URLs, client-side validation
- 🟡 Bundle analysis: diagnosing heavy packages using `@next/bundle-analyzer`, dynamic imports, code splitting
- 🔴 End-to-end authentication in App Router: middleware route protection, cookie synchronization, session refreshing

> **🛠️ Mini-Build:** Production Next.js App Router dashboard featuring Server Components data loading, Server Actions forms with Zod, optimistic upvoting with rollback, and bundle visualizer report.  
> **🚪 Completion Gate:** Explain: React Server Components vs Client Components serialization boundaries | Implement: Optimistic UI mutation with error rollback in a Server Action | Debug: Track down and fix a Next.js hydration mismatch caused by client-only state | Apply: Analyze bundle output and split heavy code-editor components dynamically.

---

## Phase 7 — 🔴 Redis, Resilient Background Jobs & WebSockets
*Weeks 17–18 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Design resilient caching layers with Cache-Aside pattern, TTL, and cache stampede protection.
- Process asynchronous background tasks with BullMQ handling retries, exponential backoff, and dead-letter queues.
- Architect WebSocket connection lifecycles with room namespaces, token auth, and reconnect state resync.
- Eliminate duplicate job execution by designing idempotent workers and transactional deduplication keys.

**🏗️ Project Anchor:**  
Collab-Code & Smart City: Collab-Code requires bidirectional WebSockets with Redis adapter for real-time code sync & presence; Smart City utilizes BullMQ for processing citizen email/SMS alerts and image thumbnails.

### 7.1 — Redis Fundamentals
- 🔴 Redis data structures: String, Hash, List, Set, Sorted Set
- 🔴 Key commands: GET, SET, DEL, EXISTS, EXPIRE, TTL, INCR
- 🔴 Use cases: caching, session storage, rate limiting, leaderboards
- 🟡 Redis persistence: RDB snapshots vs AOF logs
- 🟡 Redis Pub/Sub architecture
- 🟢 Redis transactions: MULTI/EXEC

### 7.2 — Caching Strategies & Patterns
- 🔴 Cache-Aside (Lazy Loading) pattern
- 🟡 Write-Through, Write-Behind, and Write-Around patterns
- 🔴 Cache invalidation strategies (TTL, event-driven)
- 🟡 Cache stampede / thundering herd problem & mutex locks
- 🟡 Cache penetration, breakdown, and avalanche prevention

### 7.3 — BullMQ: Job Queues & Background Processing
- 🔴 Queue, Worker, Job: core architecture
- 🔴 Job lifecycle: waiting → active → completed / failed
- 🟡 Retries, exponential backoff, and Dead Letter Queues (DLQ)
- 🟡 Delayed jobs and repeatable (cron) jobs
- 🟡 Worker concurrency control & rate limiting
- 🟢 Monitoring queue health with Bull Board

### 7.4 — WebSockets & Socket.io
- 🔴 WebSocket protocol: HTTP 101 upgrade handshake, bidirectional frames
- 🔴 Socket.io: events, emit, on, broadcast, namespaces, rooms
- 🟡 Typing Socket.io client and server events with TypeScript
- 🟡 Authentication in WebSockets (handshake auth & token renewal)
- 🟡 Scaling WebSockets across multiple servers: sticky sessions & Redis adapter
- 🟡 Server-Sent Events (SSE) vs WebSockets tradeoffs

### 7.5 — Distributed Failure Scenarios: Jobs, Caching & Real-Time Recovery
- 🔴 Handling duplicate jobs and designing strictly idempotent queue workers
- 🔴 Message delivery semantics: at-most-once vs at-least-once delivery tradeoffs in queues and sockets
- 🔴 Worker crashes & stalled job recovery: lock renewals, `stalledInterval`, and dead-letter queues (DLQ)
- 🔴 Retry storms and thundering herds: exponential backoff with random jitter in background jobs and network retries
- 🔴 WebSocket reconnection resilience: heartbeats/ping-pong, connection drops, and missed message buffering on client reconnect
- 🟡 Redis memory eviction policies (LRU, LFU, volatile vs allkeys) and handling Redis memory exhaustion

> **🛠️ Mini-Build:** Real-time collaborative room with WebSocket reconnect state resync + BullMQ resilient notification queue with idempotent worker processing.  
> **🚪 Completion Gate:** Explain: At-least-once delivery implications and how to guarantee worker idempotency | Implement: BullMQ job worker with exponential backoff, jitter, and dead-letter queue routing | Debug: Fix a WebSocket reconnect bug where clients miss state updates during reconnection | Apply: Scale Socket.io across two Node processes using Redis Pub/Sub adapter.

---

## Phase 8 — 🧪 Comprehensive Testing & Quality Engineering
*Weeks 19–20 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Write maintainable unit and mock tests with Vitest using the Arrange-Act-Assert (AAA) pattern.
- Execute true database integration tests against real PostgreSQL instances with test isolation.
- Automate authentication and RBAC authorization regression test matrices.
- Create resilient End-to-End browser tests with Playwright using Page Object Model (POM).

**🏗️ Project Anchor:**  
Smart City & Collab-Code: Build integration tests for citizen issue registration -> staff assignment -> status resolution; E2E test the full citizen flow with image attachment.

### 8.1 — Testing Fundamentals & Philosophy
- 🔴 Testing pyramid vs Testing trophy
- 🟡 TDD: Red → Green → Refactor cycle
- 🔴 What to test vs what NOT to test (testing behavior over implementation)
- 🔴 AAA pattern: Arrange, Act, Assert

### 8.2 — Vitest: Unit Testing
- 🔴 Test suite setup: `describe`, `it`, `test`, `expect`, hooks
- 🔴 Matchers: `toBe`, `toEqual`, `toThrow`, `toContain`, `toHaveLength`
- 🔴 Mocking: `vi.fn()`, `vi.mock()`, `vi.spyOn()`
- 🔴 Testing async code: resolves, rejects, promises
- 🟡 Fake timers: `vi.useFakeTimers()`, `advanceTimersByTime`
- 🟢 Snapshot testing: when to use and risks

### 8.3 — Integration Testing
- 🔴 API integration testing with Supertest
- 🔴 Database integration testing: test DB isolation, migrations, seeds
- 🟡 Testcontainers concept for isolated PostgreSQL and Redis testing
- 🟡 Mocking external HTTP services with MSW (Mock Service Worker)

### 8.4 — React Testing Library
- 🔴 Query priority: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
- 🔴 User interactions with `userEvent` (async)
- 🟡 Testing custom hooks with `renderHook`
- 🟡 Testing async loading and error UI states

### 8.5 — Playwright: End-to-End Testing
- 🔴 Playwright setup: config, browsers, baseURL, traces
- 🔴 Locators: `getByRole`, `getByText`, locator assertions
- 🟡 Page Object Model (POM) architecture
- 🟡 Fixtures and authentication state re-use
- 🟡 Network interception: `page.route()`
- 🟢 Visual regression snapshots

### 8.6 — Advanced Testing: DB Integration, Security Regressions & Load Testing
- 🔴 True database integration testing: using test databases, automated migrations, seeds, and transactional test rollbacks
- 🔴 Authentication & Authorization regression tests: verifying RBAC permission matrices (guest, citizen, staff, admin)
- 🟡 API schema contract testing: ensuring frontend and backend contracts stay synchronized
- 🟡 Load and stress testing: benchmarking API latency and throughput under high concurrency using Autocannon or k6
- 🔴 Critical business flow testing: writing tests for core end-to-end user journeys over chasing arbitrary 100% coverage
- 🟡 Flaky test prevention: isolating async timing, avoiding hardcoded sleeps, using polling assertions

> **🛠️ Mini-Build:** Automated test suite encompassing unit tests, RBAC security regression tests, Supertest database integration tests, and Playwright E2E issue submission flow.  
> **🚪 Completion Gate:** Explain: Why testing user behavior is superior to testing component implementation details | Implement: Supertest database integration test with transaction rollback | Debug: Diagnose and fix a flaky async test caused by unhandled timers | Apply: Write a Playwright E2E test verifying RBAC permission boundaries.

---

## Phase 9 — 🐳 DevOps, Docker, CI/CD, AWS & Observability
*Weeks 21–22 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Package Node and Next.js applications into secure, lightweight (<150MB) multi-stage Docker images.
- Orchestrate local multi-service stacks (Web + API + PostgreSQL + Redis) with Docker Compose and healthchecks.
- Automate linting, type-checking, testing, and container deployment via GitHub Actions CI/CD.
- Instrument applications with structured JSON logging, RED metrics, and zero-downtime database migration scripts.

**🏗️ Project Anchor:**  
Smart City & Collab-Code: Containerize both applications; create Docker Compose for local development; deploy to cloud VPS / AWS EC2 with S3 image storage and budget alerts.

### 9.1 — Docker Fundamentals
- 🔴 Images vs Containers vs Volumes vs Networks
- 🔴 Dockerfile instructions: FROM, WORKDIR, COPY, RUN, CMD, ENTRYPOINT, EXPOSE
- 🔴 Multi-stage builds for small, secure production images
- 🟡 `.dockerignore` best practices
- 🟡 Layer caching order and build optimization
- 🟡 Non-root user in Docker for security

### 9.2 — Docker Compose
- 🔴 `docker-compose.yml`: services, ports, volumes, networks, environment
- 🔴 Multi-service environment: Node app + PostgreSQL + Redis
- 🟡 Healthchecks and `depends_on` with `condition: service_healthy`
- 🟡 Persistent volume management for databases

### 9.3 — GitHub Actions CI/CD
- 🔴 Workflow files: triggers (push, pull_request), jobs, steps
- 🔴 Running linting, type-checking, and tests in CI
- 🟡 Caching dependencies: pnpm/npm store cache
- 🔴 Secrets management and environment variables
- 🟡 Building and publishing Docker images to GitHub Container Registry

### 9.4 — AWS Cloud Basics & Cost Safeguards
- 🔴 EC2: virtual compute instances, security groups, SSH keys
- 🔴 S3: object storage, bucket policies, presigned URLs for secure uploads
- 🟡 RDS: managed PostgreSQL, automated backups, multi-AZ
- 🔴 IAM: least privilege principle, users, roles, policies
- 🟡 Lambda: serverless compute & cold starts
- 🟡 SQS: managed message queues & dead-letter queues
- 🟢 CloudFront: global CDN caching

### 9.5 — Deployment & Production Observability
- 🟡 Deployment strategies: Rolling updates, Blue-Green, Canary
- 🟡 Structured JSON logging with correlation/request IDs
- 🟡 Health check endpoints (`/health/live` vs `/health/ready`)
- 🟡 Managing environments: dev, staging, production configuration

### 9.6 — Production Observability, Security & Deployment Safeguards
- 🔴 Application telemetry: RED method metrics (Rate, Errors, Duration) and measuring latency percentiles (p50, p95, p99)
- 🟡 Distributed tracing fundamentals: trace IDs, correlation IDs across HTTP requests, queues, and database calls
- 🔴 Automated deployment rollbacks: health check failure triggers, blue-green switchback, rolling back bad commits
- 🔴 Safe database migrations in CI/CD pipelines: running migrations before app container cutover without downtime
- 🟡 Container security: vulnerability scanning with Trivy/Docker Scout, non-root users, minimal base images (Alpine/Distroless)
- 🟡 Cloud cost guardrails: AWS billing alerts, stopping dev instances, tracking egress costs, staying in free tiers

> **🛠️ Mini-Build:** Production Dockerized full-stack deployment with Docker Compose, automated GitHub Actions CI pipeline, S3 presigned upload integration, and health check endpoints.  
> **🚪 Completion Gate:** Explain: Multi-stage Docker build layer caching and non-root security principles | Implement: GitHub Actions workflow with pnpm/npm caching, lint, test, and container build | Debug: Troubleshoot a container crash loop caused by missing runtime environment variables | Apply: Execute zero-downtime database migration during container rollout.

---

## Phase 10 — 🏗️ Practical System Design & Capstone Architecture
*Weeks 23–24 (24-Week Plan) | 4–5 hrs/day*

**🎯 Learning Outcomes:**
- Perform back-of-the-envelope capacity estimations (QPS, storage, bandwidth, memory) for real-world user bases.
- Identify architectural bottlenecks (CPU vs disk I/O vs network latency) and articulate concrete failure mitigation plans.
- Design standard interview systems (Rate Limiter, URL Shortener, Notification Engine, Collaborative Workspace).
- Conduct a comprehensive production readiness and architectural audit of your two flagship projects.

**🏗️ Project Anchor:**  
Collab-Code & Smart City: Formalize complete system architecture diagrams, data flow specifications, failure mode recovery plans, and scalability benchmarks for both portfolio projects.

### 10.1 — Architecture Patterns
- 🔴 Monolith vs Microservices: real-world tradeoffs and migration
- 🟡 Clean / Hexagonal architecture (separation of concerns)
- 🔴 MVC, Layered architecture in Node.js
- 🟡 API Gateway and BFF (Backend For Frontend) pattern
- 🟡 Event-driven architecture with message brokers
- 🟢 CQRS and Event Sourcing basics

### 10.2 — Distributed Systems Concepts
- 🔴 CAP Theorem (Consistency, Availability, Partition tolerance)
- 🔴 Consistency models: Strong vs Eventual consistency
- 🔴 Load balancing algorithms: Round Robin, Least Connections, Consistent Hashing
- 🔴 Horizontal vs Vertical scaling & state management
- 🟡 Database sharding, partitioning, and read replicas
- 🟡 Replication: Leader-Follower vs Multi-Leader

### 10.3 — Common System Design Problems
- 🔴 Design a URL Shortener (Bitly/TinyURL): ID generation (Base62), schema, caching
- 🔴 Design a Rate Limiter: Token Bucket, Leaky Bucket, Sliding Window Log
- 🟡 Design a Real-Time Chat App: WebSocket connection management, presence
- 🟡 Design a Notification Service: fan-out, user preferences, rate limiting
- 🟡 Design an S3-style File Upload Service: presigned URLs, multipart uploads

### 10.4 — Monorepo Architecture
- 🟡 pnpm/npm workspaces: dependency hoisting, workspace packages
- 🟡 Sharing TypeScript types between frontend and backend
- 🟡 Internal shared packages (eslint-config, tsconfig, ui, utils)
- 🟢 Turborepo / Nx build caching and task pipelines

### 10.5 — Practical System Design: Capacity Estimation, Bottlenecks & Operational Costs
- 🔴 Back-of-the-envelope capacity calculations: estimating QPS, peak throughput, storage, bandwidth, and RAM for 100K DAU
- 🔴 Bottleneck analysis: identifying CPU bound vs memory vs disk I/O vs network latency bottlenecks in real architectures
- 🔴 Explicit failure scenarios: primary database failover, Redis eviction/outage, third-party API outage resilience
- 🔴 Real-world reliability tradeoffs: Consistency vs Availability in collaborative editing (Collab-Code) vs civic reporting (Smart City)
- 🟡 Operational cost analysis of architectural choices: serverless vs long-running containers, CDN caching cost savings
- 🔴 Production architecture review and hardening of Collab-Code and Smart City Issue Reporting

> **🛠️ Mini-Build:** Complete System Design document, capacity calculations, and working reference prototype for an API Rate Limiter with Sliding Window algorithm.  
> **🚪 Completion Gate:** Explain: Back-of-the-envelope QPS and storage math for 500,000 daily active users | Implement: Redis sliding-window log rate limiter with IP and user token keys | Debug: Resolve a single-point-of-failure in a primary-replica database setup | Apply: Defend Collab-Code and Smart City architectural decisions in a simulated senior interview.

---

## Phase 11 — 🐱 NestJS Enterprise Backend (Bonus Extension)
*Post-Core Extension (Bonus) | Optional for Enterprise Placement Rounds*

**🎯 Learning Outcomes:**
- Understand enterprise architectural structure (Inversion of Control and Dependency Injection).
- Build modular REST APIs with NestJS Controllers, Services, Guards, and Pipes.
- Integrate Prisma and auto-generate Swagger OpenAPI documentation in NestJS.

**🏗️ Project Anchor:**  
Enterprise Reference: Learn how Smart City Issue Reporting APIs would be structured in a large-scale corporate enterprise codebase using NestJS modular architecture.

### 11.1 — NestJS Architecture & Dependency Injection
- 🟡 Modules: `@Module` decorator, feature modules, global modules
- 🟡 Controllers: `@Controller`, routing, request/response decorators
- 🟡 Providers: `@Injectable`, service layer
- 🟡 Dependency Injection: how IoC container works under the hood
- 🟢 Lifecycle hooks: `onModuleInit`, `onApplicationBootstrap`

### 11.2 — Pipes, Guards, Interceptors & Filters
- 🟡 Pipes: validation and data transformation (`ValidationPipe`)
- 🟡 Guards: authentication and authorization (`@UseGuards`)
- 🟢 Interceptors: logging, response mapping, caching
- 🟢 Exception Filters: catching and formatting HTTP exceptions
- 🟡 NestJS execution order: Middleware → Guard → Interceptor → Pipe → Handler

### 11.3 — NestJS with Prisma & Swagger
- 🟡 Prisma Module and Service integration in NestJS
- 🟡 DTOs with class-validator or Zod integration
- 🟢 Swagger / OpenAPI generation: `@ApiTags`, `@ApiResponse`
- 🟢 Authentication with Passport.js & JWT Strategy
- 🟢 Configuration management with `@nestjs/config`

> **🛠️ Mini-Build:** NestJS CRUD API with Prisma, JWT authentication guard, and auto-generated Swagger documentation.  
> **🚪 Completion Gate:** Explain: How the NestJS IoC container resolves dependencies | Implement: NestJS ValidationPipe with Zod/class-validator | Debug: Fix a circular dependency issue between two NestJS modules | Apply: Build a modular CRUD resource with Swagger docs.
