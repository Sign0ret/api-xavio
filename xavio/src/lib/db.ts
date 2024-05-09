import { PrismaClient } from "@prisma/client";

// Use this in development for the hot reload;

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// Use this in production

// export const db = new PrismaClient();