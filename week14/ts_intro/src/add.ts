interface Point {
  x: number;
  y: number;
}

function add(x: number, y: number): number {
  return x + y;
}

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

function createPoint(x: number = 0, y: number = 0): Point {
  return { x, y };
}

export { add, sum, createPoint };
