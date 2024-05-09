"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi"; // Importa el ícono de hamburguesa
import Image from "next/image";
import { MenuItem, Menu, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { LoginButton } from "@/components/auth/login-button";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { NavbarSession } from "@/app/(protected)/s/[id]/_components/navbar-session";

export function NavbarDemo() {
  const user = useCurrentUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    {user?.id ? (
      <NavbarSession idUser={user.id}/>
    ) : (
      <div className="relative w-full flex items-center justify-center">
        <Navbar className=" top-2 " menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    )}
    </>
    
  );
}
function Navbar({ className, menuOpen, toggleMenu }: { className?: string; menuOpen: boolean; toggleMenu: () => void }) {
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      <Menu setActive={() => {}} menuOpen={menuOpen}>
        <div className="flex flex-col justify-start items-center md:flex-row md:items-center md:space-x-20">
          <div className="flex items-center space-x-4">
            {/* Agrega la lógica para mostrar el ícono de hamburguesa */}
            <div className="block md:hidden">
              <button onClick={toggleMenu}>
                <HiMenu className="h-6 w-6 text-white" />
              </button>
            </div>
            <Link href='/'>
              <Image src={'/xavio.svg'} alt="Logo" className="h-8 w-20" width={20} height={8}/>
            </Link>
          </div>
          {/* Aquí se mantiene la lógica para mostrar los elementos del menú */}
          <div className={`md:flex flex-col md:flex-row ${menuOpen ? 'block'  : 'hidden'} md:space-x-20 mt-4 md:mt-0`}>
          <LoginButton mode="modal" asChild>
              <Button className="bg-transparent hover:bg-zinc-600 transition-colors duration-300">
                LogIn
              </Button>
          </LoginButton>
          <Link href='/auth/register'>SignIn</Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}
