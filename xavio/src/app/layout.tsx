import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { NavbarDemo } from "@/components/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "XAVIO",
    template: "%s | XAVIO",
  },
  description: "plataforma de aprendizaje acompañado por IA generativa",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-zinc-900">
            <div className="z-1000">
            <NavbarDemo />
            </div>
            <Toaster />
            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
