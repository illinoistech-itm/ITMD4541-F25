function add(x, y) {
  return x + y;
}

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

function createPoint(x = 0, y = 0) {
  return { x, y };
}

export { add, sum, createPoint };
