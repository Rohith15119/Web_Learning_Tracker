// ============================================================
// Full-Stack TypeScript Mastery — Complete Roadmap Data
// Single source of truth for both ROADMAP.md and the tracker app
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
  topics: Topic[];
  gate: string;
  miniBuild: string;
}

export const roadmap: Phase[] = [
  // ============================================================
  // PHASE 0 — TypeScript Core
  // ============================================================
  {
    id: "phase-0",
    number: 0,
    title: "TypeScript Core",
    emoji: "🔷",
    description:
      "The language everything else is built on. Master the type system before touching any framework.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Type-safe event emitter with generics",
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
    ],
  },

  // ============================================================
  // PHASE 1 — JavaScript Runtime & Async Patterns
  // ============================================================
  {
    id: "phase-1",
    number: 1,
    title: "JavaScript Runtime & Async Patterns",
    emoji: "⚡",
    description:
      "The #1 interview topic. Event loop, promises, closures — asked everywhere from startups to FAANG.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Async task runner with retry + cancellation + concurrency limit",
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
      "How the web actually works under the hood: networking, browser rendering engines, layout mechanics, security, and performance.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Interactive Critical Rendering Path visualizer & security header analyzer",
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
    ],
  },

  // ============================================================
  // PHASE 3 — Node.js Core
  // ============================================================
  {
    id: "phase-3",
    number: 3,
    title: "Node.js Core",
    emoji: "🟢",
    description:
      "Understand how your server runtime works. Streams, file system, processes — the building blocks.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Streaming CSV parser with Transform streams",
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
    ],
  },

  // ============================================================
  // PHASE 4 — HTTP, Express & REST API Design
  // ============================================================
  {
    id: "phase-4",
    number: 4,
    title: "HTTP, Express & REST APIs",
    emoji: "⚡",
    description:
      "The bread and butter of backend engineering. Every backend interview starts here.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Production-style REST API with auth, validation, error handling",
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
    ],
  },

  // ============================================================
  // PHASE 5 — Databases: SQL, Prisma & MongoDB
  // ============================================================
  {
    id: "phase-5",
    number: 5,
    title: "Databases: SQL, Prisma & MongoDB",
    emoji: "🗄️",
    description:
      "SQL is asked in every backend round. Relational modeling, complex queries, indexing, and transactions.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Multi-table schema design with complex queries and Prisma migrations",
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
        title: "MongoDB & Mongoose Essentials",
        subtopics: [
          { id: "5-6-1", title: "Document model vs Relational model (when to use NoSQL)", importance: "critical" },
          { id: "5-6-2", title: "Schema design patterns: Embedding vs Referencing tradeoffs", importance: "critical" },
          { id: "5-6-3", title: "CRUD operations with Mongoose + TypeScript typing", importance: "critical" },
          { id: "5-6-4", title: "Aggregation pipeline: $match, $group, $project, $lookup, $unwind", importance: "important" },
          { id: "5-6-5", title: "Indexes in MongoDB & explain('executionStats')", importance: "important" },
          { id: "5-6-6", title: "Multi-document transactions in MongoDB", importance: "good-to-know" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 6 — React & Next.js (App Router)
  // ============================================================
  {
    id: "phase-6",
    number: 6,
    title: "React & Next.js (App Router)",
    emoji: "⚛️",
    description:
      "Frontend interviews test hooks, rendering behavior, and modern SSR patterns. RSC is non-negotiable.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "SSR dashboard with RSC, Server Actions, auth, and optimistic UI",
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
    ],
  },

  // ============================================================
  // PHASE 7 — Redis, Queues & Real-Time
  // ============================================================
  {
    id: "phase-7",
    number: 7,
    title: "Redis, Queues & Real-Time",
    emoji: "🔴",
    description:
      "The multiplier topics that separate junior from senior. In-memory caching, asynchronous background jobs, and WebSockets.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Real-time notification system with Redis pub/sub + Socket.io",
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
    ],
  },

  // ============================================================
  // PHASE 8 — Testing
  // ============================================================
  {
    id: "phase-8",
    number: 8,
    title: "Testing",
    emoji: "🧪",
    description:
      "Testing is mandatory in top engineering teams. Unit, integration, and E2E — know when to use each.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Full test suite for a feature: unit + API integration + Playwright E2E",
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
    ],
  },

  // ============================================================
  // PHASE 9 — DevOps: Docker, CI/CD & AWS
  // ============================================================
  {
    id: "phase-9",
    number: 9,
    title: "DevOps: Docker, CI/CD & AWS",
    emoji: "🐳",
    description:
      "Ship code reliably. Containerize applications, automate checks via CI/CD, and understand core cloud services.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Dockerized full-stack app with GitHub Actions CI pipeline",
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
          { id: "9-3-3", title: "Caching dependencies: pnpm store cache", importance: "important" },
          { id: "9-3-4", title: "Secrets management and environment variables", importance: "critical" },
          { id: "9-3-5", title: "Building and publishing Docker images to GitHub Container Registry", importance: "important" },
        ],
      },
      {
        id: "9-4",
        title: "AWS Cloud Basics",
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
    ],
  },

  // ============================================================
  // PHASE 10 — System Design & Architecture
  // ============================================================
  {
    id: "phase-10",
    number: 10,
    title: "System Design & Architecture",
    emoji: "🏗️",
    description:
      "Think at scale. Design resilient distributed systems that handle millions of requests.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "Complete System Design document & prototype for a URL shortener",
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
          { id: "10-4-1", title: "pnpm workspaces: dependency hoisting, workspace:* protocol", importance: "important" },
          { id: "10-4-2", title: "Sharing TypeScript types between frontend and backend", importance: "important" },
          { id: "10-4-3", title: "Internal shared packages (eslint-config, tsconfig, ui, utils)", importance: "important" },
          { id: "10-4-4", title: "Turborepo / Nx build caching and task pipelines", importance: "good-to-know" },
        ],
      },
    ],
  },

  // ============================================================
  // PHASE 11 — NestJS (Enterprise Backend)
  // ============================================================
  {
    id: "phase-11",
    number: 11,
    title: "NestJS (Enterprise Backend)",
    emoji: "🐱",
    description:
      "Enterprise-grade Node.js framework. Heavily used in large companies. Built on decorators, modules, and Dependency Injection.",
    gate: "Quiz 80%+, all exercises green, mini-build complete, explain-back ×3",
    miniBuild: "NestJS CRUD API with Prisma, auth, and Swagger docs",
    topics: [
      {
        id: "11-1",
        title: "NestJS Architecture & Dependency Injection",
        subtopics: [
          { id: "11-1-1", title: "Modules: @Module decorator, feature modules, global modules", importance: "critical" },
          { id: "11-1-2", title: "Controllers: @Controller, routing, request/response decorators", importance: "critical" },
          { id: "11-1-3", title: "Providers: @Injectable, service layer", importance: "critical" },
          { id: "11-1-4", title: "Dependency Injection: how IoC container works under the hood", importance: "critical" },
          { id: "11-1-5", title: "Lifecycle hooks: onModuleInit, onApplicationBootstrap", importance: "important" },
        ],
      },
      {
        id: "11-2",
        title: "Pipes, Guards, Interceptors & Filters",
        subtopics: [
          { id: "11-2-1", title: "Pipes: validation and data transformation (ValidationPipe)", importance: "critical" },
          { id: "11-2-2", title: "Guards: authentication and authorization (@UseGuards)", importance: "critical" },
          { id: "11-2-3", title: "Interceptors: logging, response mapping, caching", importance: "important" },
          { id: "11-2-4", title: "Exception Filters: catching and formatting HTTP exceptions", importance: "important" },
          { id: "11-2-5", title: "NestJS execution order: Middleware → Guard → Interceptor → Pipe → Handler", importance: "critical" },
        ],
      },
      {
        id: "11-3",
        title: "NestJS with Prisma & Swagger",
        subtopics: [
          { id: "11-3-1", title: "Prisma Module and Service integration in NestJS", importance: "critical" },
          { id: "11-3-2", title: "DTOs with class-validator or Zod integration", importance: "critical" },
          { id: "11-3-3", title: "Swagger / OpenAPI generation: @ApiTags, @ApiResponse", importance: "important" },
          { id: "11-3-4", title: "Authentication with Passport.js & JWT Strategy", importance: "important" },
          { id: "11-3-5", title: "Configuration management with @nestjs/config", importance: "important" },
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
