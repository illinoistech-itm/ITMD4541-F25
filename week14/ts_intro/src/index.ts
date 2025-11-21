import { add, sum, createPoint } from "./add";
import { log } from "./log";
import { shapesDemo } from "./shapes";
import { genericsDemo } from "./generics";
import { classesDemo } from "./classes";
import { enumsDemo } from "./enums";
import { asyncDemo } from "./async";
import { domDemo } from "./dom";

log("Hello, TypeScript!");

log("Add: ", add(1, 2)); // 3

log("Sum: ", sum(1, 2, 3, 4)); // 10

let x = createPoint(10, 20);
log("Point: ", x); // Point: { x: 10, y: 20 }

// Run demos showcasing more TypeScript features
shapesDemo();
genericsDemo();
classesDemo();
enumsDemo();
asyncDemo();
domDemo();
