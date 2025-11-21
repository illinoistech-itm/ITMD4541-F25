import { add, sum, createPoint } from "./add";
import { log } from "./log";

log("Hello, TypeScript!");

log("Add: ", add(1, 2)); // 3

log("Sum: ", sum(1, 2, 3, 4)); // 10

let x = createPoint(10, 20);
log("Point: ", x); // Point: { x: 10, y: 20 }
