import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello Hono!",
  });
});

app.get("/api/hello", (c) => {
  return c.json({
    message: "Hello from API!",
  });
});

app.get("/api/items", (c) => {
  return c.json([
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
  ]);
});


serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("API server is running on http://localhost:3000");
