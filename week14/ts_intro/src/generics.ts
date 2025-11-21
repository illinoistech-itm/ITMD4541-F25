// Generics: functions, constraints, and utility types
export function identity<T>(value: T): T {
  return value;
}

export interface Box<T> {
  value: T;
}

export function mapArray<T, U>(arr: T[], fn: (t: T) => U): U[] {
  return arr.map(fn);
}

export type WithId = { id: string };

export function indexById<T extends WithId>(items: T[]): Record<string, T> {
  return items.reduce<Record<string, T>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

export function genericsDemo(): void {
  const n = identity(42);
  const s = identity("hello");
  const doubled = mapArray([1, 2, 3], (x) => x * 2);
  const byId = indexById([
    { id: "a", name: "Alpha" },
    { id: "b", name: "Beta" },
  ]);

  console.log("Generics: ", { n, s, doubled, byId });
}
