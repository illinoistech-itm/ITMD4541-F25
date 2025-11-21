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

  // src/index.ts
  log("Hello, TypeScript!");
  log("Add: ", add(1, 2));
  log("Sum: ", sum(1, 2, 3, 4));
  var x = createPoint(10, 20);
  log("Point: ", x);
})();
