# TypeScript Intro Demo

A small, browser-based TypeScript project bundling with esbuild and demonstrating core TypeScript features.

## What it shows
- Union types + narrowing: `src/shapes.ts`
- Generics + constraints + `Record`: `src/generics.ts`
- Classes, access modifiers, getters/setters, `implements`, inheritance: `src/classes.ts`
- Enums and `const enum`: `src/enums.ts`
- Async/await with typed fetch and `unknown` handling: `src/async.ts`
- DOM typing, events, optional chaining, nullish coalescing: `src/dom.ts`
- Basic functions, rest params, default values, interfaces: `src/add.ts`

All demos are wired from `src/index.ts` and log to the console and the page.

## Quick start

```bash
npm install
npm run dev
```

- Open the served URL from esbuild (defaults to http://localhost:8000)
- Check the console for logs and click the button in the page to see the DOM demo

## Build

```bash
npm run build
```

Outputs `dist/bundle.js` used by `dist/index.html`.
