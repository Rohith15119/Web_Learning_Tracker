# 🗺️ Full-Stack TypeScript Mastery — Complete Roadmap

> **Goal:** Job-ready for top MNC and product-company full-stack roles. Master core web development fundamentals, TypeScript strict, backend architecture, modern React/Next.js, databases, scaling, and system design.
> **Stack:** TypeScript (strict), React, Next.js (App Router), Node.js, Express, NestJS, Zod, PostgreSQL, Prisma, MongoDB, Redis, Socket.io, BullMQ, Vitest, Playwright, Docker, GitHub Actions, AWS.
> **Interactive Tracker:** Launch locally via `pnpm --filter progress-tracker dev` (http://localhost:5173).
>
> **🔴 Critical** = Asked in almost every interview round
> **🟡 Important** = Frequently asked, daily production use
> **🟢 Good-to-know** = Competitive differentiator

---

## Phase 0 — 🔷 TypeScript Core
*The language everything else is built on. Master the type system before touching any framework.*

### 0.1 — tsconfig.json & Compiler Deep-Dive
- 🔴 What tsc does: parse → type-check → emit
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

> **🚪 Gate 0:** Quiz 80%+, all exercises green, mini-build (type-safe event emitter with generics), explain-back ×3.

---

## Phase 1 — ⚡ JavaScript Runtime & Async Patterns
*The #1 interview topic. Event loop, promises, closures — asked everywhere from startups to FAANG.*

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

> **🚪 Gate 1:** Quiz 80%+, all exercises green, mini-build (async task runner with retry + cancellation + concurrency limit), explain-back ×3.

---

## Phase 2 — 🌐 Web, Networking & Browser Architecture Fundamentals
*The foundational mechanics of the web. Essential for technical interviews.*

### 2.1 — Networking Under the Hood
- 🔴 What happens when you type a URL in the browser and hit Enter (complete journey)
- 🔴 DNS resolution: recursive vs iterative queries, DNS record types (A, AAAA, CNAME, TXT)
- 🔴 TCP 3-way handshake (SYN, SYN-ACK, ACK) and 4-way FIN termination
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
- 🟡 CSS Specificity calculation & `@layer`

### 2.4 — Web Security & OWASP Top 10 for Full-Stack
- 🔴 Same-Origin Policy (SOP): origins, protocols, ports
- 🔴 CORS deep-dive: Simple requests vs Preflight (`OPTIONS`), CORS response headers
- 🔴 Cross-Site Scripting (XSS): Stored, Reflected, DOM-based & prevention
- 🔴 Content Security Policy (CSP): directives, nonces, hashes
- 🔴 Cross-Site Request Forgery (CSRF): mechanics & SameSite cookies / anti-CSRF tokens
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
- 🔴 Core Web Vitals: CLS (Cumulative Layout Shift) & layout stability
- 🟡 Resource hints: `preload`, `prefetch`, `preconnect`, `dns-prefetch`
- 🔴 Bundle optimization: tree shaking, code splitting (dynamic `import()`), compression (Gzip/Brotli)
- 🟡 Image optimization: WebP/AVIF, responsive images (`srcset`, `sizes`), lazy loading

> **🚪 Gate 2:** Quiz 80%+, all exercises green, mini-build (interactive Critical Rendering Path visualizer & security header analyzer), explain-back ×3.

---

## Phase 3 — 🟢 Node.js Core
*Understand how your server runtime works. Streams, file system, processes — the building blocks.*

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
- 🟡 Signal handling: SIGTERM, SIGINT
- 🔴 Graceful shutdown pattern

### 3.6 — ESM in Node.js & Package Configuration
- 🔴 `package.json` `type: "module"` vs `"commonjs"`
- 🟡 `.mjs` vs `.cjs` file extensions
- 🟡 `package.json` `exports` field for dual packages
- 🟡 `__dirname` and `__filename` in ESM (`import.meta`)
- 🟢 Top-level `await` in ESM modules

> **🚪 Gate 3:** Quiz 80%+, all exercises green, mini-build (streaming CSV parser with Transform streams), explain-back ×3.

---

## Phase 4 — ⚡ HTTP, Express & REST APIs
*The bread and butter of backend engineering. Every backend interview starts here.*

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

> **🚪 Gate 4:** Quiz 80%+, all exercises green, mini-build (production-style REST API with auth, validation, error handling), explain-back ×3.

---

## Phase 5 — 🗄️ Databases: SQL, Prisma & MongoDB
*SQL is asked in every backend round. Relational modeling, complex queries, indexing, and transactions.*

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
- 🔴 Window functions: ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, SUM OVER
- 🔴 CTEs (Common Table Expressions): WITH clause & recursive CTEs
- 🔴 INSERT, UPDATE, DELETE, UPSERT (ON CONFLICT DO UPDATE)
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
- 🟡 Optimistic vs Pessimistic locking (SELECT FOR UPDATE)

### 5.5 — Prisma ORM
- 🔴 Prisma schema: models, fields, relations, attributes
- 🔴 Migrations: `prisma migrate dev`, `deploy`, `status`
- 🔴 Prisma Client: type-safe CRUD queries
- 🔴 Relations: 1:1, 1:N, M:N explicit vs implicit
- 🟡 Filtering, sorting, pagination in Prisma
- 🟡 Raw SQL queries with `$queryRaw` and `$executeRaw`
- 🟡 Transactions in Prisma: sequential vs interactive `$transaction`
- 🟢 Database seeding with `prisma db seed`

### 5.6 — MongoDB & Mongoose Essentials
- 🔴 Document model vs Relational model (when to use NoSQL)
- 🔴 Schema design patterns: Embedding vs Referencing tradeoffs
- 🔴 CRUD operations with Mongoose + TypeScript typing
- 🟡 Aggregation pipeline: `$match`, `$group`, `$project`, `$lookup`, `$unwind`
- 🟡 Indexes in MongoDB & `explain('executionStats')`
- 🟢 Multi-document transactions in MongoDB

> **🚪 Gate 5:** Quiz 80%+, all exercises green, mini-build (multi-table schema design with complex queries and Prisma migrations), explain-back ×3.

---

## Phase 6 — ⚛️ React & Next.js (App Router)
*Frontend interviews test hooks, rendering behavior, and modern SSR patterns. RSC is non-negotiable.*

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

> **🚪 Gate 6:** Quiz 80%+, all exercises green, mini-build (SSR dashboard with RSC, Server Actions, auth, and optimistic UI), explain-back ×3.

---

## Phase 7 — 🔴 Redis, Queues & Real-Time
*The multiplier topics that separate junior from senior. In-memory caching, asynchronous background jobs, and WebSockets.*

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

> **🚪 Gate 7:** Quiz 80%+, all exercises green, mini-build (real-time notification system with Redis pub/sub + Socket.io), explain-back ×3.

---

## Phase 8 — 🧪 Testing
*Testing is mandatory in top engineering teams. Unit, integration, and E2E — know when to use each.*

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

> **🚪 Gate 8:** Quiz 80%+, all exercises green, mini-build (full test suite for a feature: unit + API integration + Playwright E2E), explain-back ×3.

---

## Phase 9 — 🐳 DevOps: Docker, CI/CD & AWS
*Ship code reliably. Containerize applications, automate checks via CI/CD, and understand core cloud services.*

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
- 🟡 Caching dependencies: `pnpm` store cache
- 🔴 Secrets management and environment variables
- 🟡 Building and publishing Docker images to GitHub Container Registry

### 9.4 — AWS Cloud Basics
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

> **🚪 Gate 9:** Quiz 80%+, all exercises green, mini-build (Dockerized full-stack app with GitHub Actions CI pipeline), explain-back ×3.

---

## Phase 10 — 🏗️ System Design & Architecture
*Think at scale. Design resilient distributed systems that handle millions of requests.*

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
- 🟡 pnpm workspaces: dependency hoisting, `workspace:*` protocol
- 🟡 Sharing TypeScript types between frontend and backend
- 🟡 Internal shared packages (eslint-config, tsconfig, ui, utils)
- 🟢 Turborepo / Nx build caching and task pipelines

> **🚪 Gate 10:** Quiz 80%+, all exercises green, mini-build (complete System Design document & prototype for a URL shortener), explain-back ×3.

---

## Phase 11 — 🐱 NestJS (Enterprise Backend)
*Enterprise-grade Node.js framework. Heavily used in large companies. Built on decorators, modules, and Dependency Injection.*

### 11.1 — NestJS Architecture & Dependency Injection
- 🔴 Modules: `@Module` decorator, feature modules, global modules
- 🔴 Controllers: `@Controller`, routing, request/response decorators
- 🔴 Providers: `@Injectable`, service layer
- 🔴 Dependency Injection: how IoC container works under the hood
- 🟡 Lifecycle hooks: `onModuleInit`, `onApplicationBootstrap`

### 11.2 — Pipes, Guards, Interceptors & Filters
- 🔴 Pipes: validation and data transformation (`ValidationPipe`)
- 🔴 Guards: authentication and authorization (`@UseGuards`)
- 🟡 Interceptors: logging, response mapping, caching
- 🟡 Exception Filters: catching and formatting HTTP exceptions
- 🔴 NestJS execution order: Middleware → Guard → Interceptor → Pipe → Handler

### 11.3 — NestJS with Prisma & Swagger
- 🔴 Prisma Module and Service integration in NestJS
- 🔴 DTOs with class-validator or Zod integration
- 🟡 Swagger / OpenAPI generation: `@ApiTags`, `@ApiResponse`
- 🟡 Authentication with Passport.js & JWT Strategy
- 🟡 Configuration management with `@nestjs/config`

> **🚪 Gate 11:** Quiz 80%+, all exercises green, mini-build (NestJS CRUD API with Prisma, auth, and Swagger docs), explain-back ×3.

---

## 🏁 Capstone Project
Production-grade SaaS application incorporating the complete stack.

---

## 📊 Summary Metrics
| Metric | Value |
|---|---|
| Total Phases | **12** (0 through 11) |
| Total Topics | **73** |
| Total Subtopics | **~385** |
| 🔴 Critical Subtopics | **~195** |
| 🟡 Important Subtopics | **~140** |
| 🟢 Good-to-know Subtopics | **~50** |
| Mini-Builds | **12** |
| Gates | **12** |
