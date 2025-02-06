import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { registerSchema } from "../schemas";

const app = new Hono()
  .get("/current", (c) => {
    return c.json({ anshu: "is handsome" });
  })

  .post("/register", zValidator("json", registerSchema), async (c) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, email, password } = c.req.valid("json");
  });

export default app;
