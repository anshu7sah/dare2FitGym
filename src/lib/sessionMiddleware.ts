"server-only";

import { createMiddleware } from "hono/factory";
import { getCookie } from "hono/cookie";
import { AUTH_COOKIE } from "@/features/auth/constants";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import connectToDatabase from "./mongoConnection";
import User from "@/features/auth/model/user";

type AdditionalContext = {
  Variables: {
    user: {
      _id: string;
      name: string;
      email: string;
    };
  };
};

export const sessionMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    const session = getCookie(c, AUTH_COOKIE);

    if (!session) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    try {
      const payload = jwt.verify(session, process.env.JWT_SECRET!) as {
        _id: string;
        name: string;
        email: string;
      };

      await connectToDatabase();
      const user = await User.findOne({ _id: new ObjectId(payload._id) });

      if (!user) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      c.set("user", {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
      });

      await next();
    } catch (err) {
      console.error(err);
      return c.json({ error: "Unauthorized" }, 401);
    }
  }
);
