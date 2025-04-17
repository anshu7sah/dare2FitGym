import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { AUTH_COOKIE } from "./constants";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthenticatedUser {
  _id: string;
  name: string;
  email: string;
}

export const getCurrent = (): AuthenticatedUser | null => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(AUTH_COOKIE)?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, JWT_SECRET) as AuthenticatedUser;
    return decoded;
  } catch (err) {
    return null;
  }
};
