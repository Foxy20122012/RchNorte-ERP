// 'use client'
import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "******" },
            },
            async authorize(credentials, req) {
                const user = await prisma.usuarios.findFirst({
                    where: {
                        correo_electronico: credentials.email,
                    },
                });
            
                if (user && user.contrasena === credentials.password) {
                    return user as any;
                }
            
                return null;
            }
            ,
        }),
    ],
    callbacks: {
        async jwt({ account, token, user, profile, session }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
    pages:{
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };
