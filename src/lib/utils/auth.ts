import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import Google from "next-auth/providers/google";

export function authenticate(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.split(" ")[1];
  return token === process.env.AUTH_SECRET;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
});
