// Discriminated unions and narrowing
export interface Circle {
  kind: "circle";
  radius: number;
}

export interface Rectangle {
  kind: "rect";
  width: number;
  height: number;
}

export type Shape = Circle | Rectangle;

export function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rect":
      return shape.width * shape.height;
  }
}

export function shapesDemo(): void {
  const shapes: Shape[] = [
    { kind: "circle", radius: 10 },
    { kind: "rect", width: 4, height: 6 },
  ];
  const areas = shapes.map(area);
  console.log("Shapes areas:", areas);
}
