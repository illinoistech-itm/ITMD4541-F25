// DOM interaction with typed elements, event handlers, optional chaining
export function domDemo(): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.textContent = "TypeScript DOM demo";

  const button = document.createElement("button");
  button.id = "counter";
  button.textContent = "Clicked 0 times";

  let count = 0;
  button.addEventListener("click", () => {
    count += 1;
    button.textContent = `Clicked ${count} ${count === 1 ? "time" : "times"}`;
  });

  const info = document.createElement("pre");
  const config = { theme: { color: "rebeccapurple" } } as const;
  const color = config?.theme?.color ?? "black";
  info.textContent = `Using color: ${color}`;
  info.style.color = color;

  app.append(button, info);
}
