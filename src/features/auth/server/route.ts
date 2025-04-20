import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { IUser, loginSchema, registerSchema } from "../schemas";
import connectToDatabase from "@/lib/mongoConnection";
import User from "../model/user";
import { compare, hash } from "bcryptjs";
import { deleteCookie, setCookie } from "hono/cookie";
import { AUTH_COOKIE } from "../constants";
import jwt from "jsonwebtoken";
import { sessionMiddleware } from "@/lib/sessionMiddleware";

const app = new Hono()

  .get("/current", sessionMiddleware, (c) => {
    const user = c.get("user");

    return c.json({ data: user });
  })

  .post("/register", zValidator("json", registerSchema), async (c) => {
    try {
      const { name, email, password } = c.req.valid("json");

      await connectToDatabase();

      const existingUser: IUser | null = await User.findOne({ email });
      if (existingUser) {
        return c.json({ error: "User already exists" }, 400);
      }

      const hashedPassword = await hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();

      const token = await jwt.sign(
        { name: newUser.name, email: newUser.email, _id: newUser._id },
        process.env.JWT_SECRET!,
        { expiresIn: 60 * 60 * 24 * 30 }
      );
      setCookie(c, AUTH_COOKIE, token, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
      });
      return c.json({ success: true });
    } catch (error) {
      return c.json({ error: (error as Error).message }, 500);
    }
  })
  .post("/login", zValidator("json", loginSchema), async (c) => {
    try {
      const { email, password } = c.req.valid("json");
      await connectToDatabase();
      const existingUser: IUser | null = await User.findOne({ email });
      if (!existingUser) {
        return c.json({ error: "User do not exist" }, 400);
      }
      const comp = await compare(password, existingUser.password);
      if (!comp) {
        return c.json({ error: "Credentials do not match" }, 400);
      }
      const token = await jwt.sign(
        {
          name: existingUser.name,
          email: existingUser.email,
          _id: existingUser._id,
        },
        process.env.JWT_SECRET!,
        { expiresIn: 60 * 60 * 24 * 30 }
      );
      setCookie(c, AUTH_COOKIE, token, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
      });

      return c.json({ success: true });
    } catch (error) {
      return c.json({ error: (error as Error).message }, 500);
    }
  })
  .post("/logout", sessionMiddleware, async (c) => {
    deleteCookie(c, AUTH_COOKIE);
    return c.json({ success: true });
  });

export default app;
