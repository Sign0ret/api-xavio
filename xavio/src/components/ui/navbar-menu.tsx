"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-90 text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", mass: 0.5, damping: 11.5, stiffness: 100 }}
        >
          {active === item && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={{ type: "spring", mass: 0.5, damping: 11.5, stiffness: 100 }}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black bg-opacity-90 backdrop-blur-sm overflow-hidden  shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  menuOpen,
  children,
}: {
  setActive: (item: string | null) => void;
  menuOpen: boolean;
  children: React.ReactNode;
}) => {
  const styles = {
    background: '#18181b',
  };
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="fixed top-0 inset-x-0 bg-solid z-1000 text-white  flex justify-center py-5"
      style={styles}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-sm max-w-[10rem] text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-200 hover:text-white">
      {children}
    </Link>
  );
};
