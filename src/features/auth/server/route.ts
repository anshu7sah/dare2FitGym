import { Hono } from "hono";

const app = new Hono().get("/current", (c) => {
  return c.json({ anshu: "is handsome" });
});

export default app;
