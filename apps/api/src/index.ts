import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello Hono!",
  });
});

type Item = {
  id: number;
  name: string;
  quantity: number;
};

// 永続化はまだ無いため、メモリ上で保持する（再起動で初期状態に戻る）
const items: Item[] = [
  {
    id: 1,
    name: "牛乳",
    quantity: 1,
  },
  {
    id: 2,
    name: "卵",
    quantity: 10,
  },
];

const generateItemId = () => {
  return items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
};

app.get("/api/items", (c) => {
  return c.json(items);
});

app.post("/api/items", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ message: "Invalid JSON body" }, 400);
  }

  const { name, quantity } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim() === "") {
    return c.json({ message: "name must be a non-empty string" }, 400);
  }
  if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1) {
    return c.json({ message: "quantity must be a positive integer" }, 400);
  }

  const item: Item = {
    id: generateItemId(),
    name: name.trim(),
    quantity,
  };
  items.push(item);

  return c.json(item, 201);
});


serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("API server is running on http://localhost:3000");
