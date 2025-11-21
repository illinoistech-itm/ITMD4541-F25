// Classes, access modifiers, getters/setters, implements, and inheritance
export interface Identifiable {
  id: string;
}

export class Person implements Identifiable {
  readonly id: string;
  private _name: string;
  constructor(name: string, id: string) {
    this._name = name;
    this.id = id;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value.trim();
  }
  toString(): string {
    return `${this.name} (#${this.id})`;
  }
  static from(name: string): Person {
    return new Person(name, crypto.randomUUID());
  }
}

export class Student extends Person {
  grade: number;
  constructor(name: string, id: string, grade: number) {
    super(name, id);
    this.grade = grade;
  }
  override toString(): string {
    return `${super.toString()} — Grade ${this.grade}`;
  }
}

export function classesDemo(): void {
  const p = Person.from("Ada Lovelace");
  const s = new Student("Grace Hopper", "S-001", 12);
  console.log("Classes:", p.toString(), "|", s.toString());
}
