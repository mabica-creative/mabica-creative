import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma"
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(prisma),
});
