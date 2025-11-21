"use strict";
(() => {
  // src/add.ts
  function add(x2, y) {
    return x2 + y;
  }
  function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
  }
  function createPoint(x2 = 0, y = 0) {
    return { x: x2, y };
  }

  // src/log.ts
  var log = console.log.bind(
    window,
    "%cLOG:",
    "color: white; background-color: red;"
  );

  // src/shapes.ts
  function area(shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "rect":
        return shape.width * shape.height;
    }
  }
  function shapesDemo() {
    const shapes = [
      { kind: "circle", radius: 10 },
      { kind: "rect", width: 4, height: 6 }
    ];
    const areas = shapes.map(area);
    console.log("Shapes areas:", areas);
  }

  // src/generics.ts
  function identity(value) {
    return value;
  }
  function mapArray(arr, fn) {
    return arr.map(fn);
  }
  function indexById(items) {
    return items.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }
  function genericsDemo() {
    const n = identity(42);
    const s = identity("hello");
    const doubled = mapArray([1, 2, 3], (x2) => x2 * 2);
    const byId = indexById([
      { id: "a", name: "Alpha" },
      { id: "b", name: "Beta" }
    ]);
    console.log("Generics: ", { n, s, doubled, byId });
  }

  // src/classes.ts
  var Person = class _Person {
    constructor(name, id) {
      this._name = name;
      this.id = id;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value.trim();
    }
    toString() {
      return `${this.name} (#${this.id})`;
    }
    static from(name) {
      return new _Person(name, crypto.randomUUID());
    }
  };
  var Student = class extends Person {
    constructor(name, id, grade) {
      super(name, id);
      this.grade = grade;
    }
    toString() {
      return `${super.toString()} \u2014 Grade ${this.grade}`;
    }
  };
  function classesDemo() {
    const p = Person.from("Ada Lovelace");
    const s = new Student("Grace Hopper", "S-001", 12);
    console.log("Classes:", p.toString(), "|", s.toString());
  }

  // src/enums.ts
  function canAccess(role) {
    return role === "admin" /* Admin */ || role === "user" /* User */;
  }
  function enumsDemo() {
    const roles = ["admin" /* Admin */, "user" /* User */, "guest" /* Guest */];
    const access = roles.map((r) => [r, canAccess(r)]);
    const accountStatus = 0 /* Active */;
    console.log("Enums:", { access, accountStatus });
  }

  // src/async.ts
  async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  }
  async function asyncDemo() {
    try {
      const todo = await fetchJson(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log("Async fetched todo:", todo.title, "completed:", todo.completed);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.warn("Async demo error:", msg);
    }
  }

  // src/dom.ts
  function domDemo() {
    const app = document.getElementById("app");
    if (!app) return;
    app.textContent = "TypeScript DOM demo";
    const button = document.createElement("button");
    button.id = "counter";
    button.textContent = "Clicked 0 times";
    let count = 0;
    button.addEventListener("click", () => {
      count += 1;
      button.textContent = `Clicked ${count} ${count === 1 ? "time" : "times"}`;
    });
    const info = document.createElement("pre");
    const config = { theme: { color: "rebeccapurple" } };
    const color = config?.theme?.color ?? "black";
    info.textContent = `Using color: ${color}`;
    info.style.color = color;
    app.append(button, info);
  }

  // src/index.ts
  log("Hello, TypeScript!");
  log("Add: ", add(1, 2));
  log("Sum: ", sum(1, 2, 3, 4));
  var x = createPoint(10, 20);
  log("Point: ", x);
  shapesDemo();
  genericsDemo();
  classesDemo();
  enumsDemo();
  asyncDemo();
  domDemo();
})();
