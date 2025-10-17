export function sum(...args) {
    return args.reduce( (accumulator, currentValue) => accumulator + currentValue );
}

export class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    get perimeter() {
        return (2 * this.width) + (2 * this.height);
    }

    get area() {
        return this.calcArea();
    }
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
  
    calcArea() {
        return Math.PI * (this.radius * this.radius);
    }
  
    get area() {
        return this.calcArea();
    }
  
    get circumference(){
        return (2 * Math.PI * this.radius);
    }
}

export const PI = 3.14;

export default {sum, Rectangle, Circle, PI};