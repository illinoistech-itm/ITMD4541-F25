// Async/Await with typed fetch
type ApiTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as T;
}

export async function asyncDemo(): Promise<void> {
  try {
    const todo = await fetchJson<ApiTodo>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(
      "Async fetched todo:",
      todo.title,
      "completed:",
      todo.completed
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.warn("Async demo error:", msg);
  }
}
