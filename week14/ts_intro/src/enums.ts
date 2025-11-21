// Enums and const enums
export enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

// Note: const enums are inlined at compile time
export const enum Status {
  Active,
  Inactive,
}

export function canAccess(role: Role): boolean {
  return role === Role.Admin || role === Role.User;
}

export function enumsDemo(): void {
  const roles = [Role.Admin, Role.User, Role.Guest];
  const access = roles.map((r) => [r, canAccess(r)] as const);
  const accountStatus: Status = Status.Active;
  console.log("Enums:", { access, accountStatus });
}
