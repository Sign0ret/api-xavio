"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function Proyects() {
  return (
    <div className="h-screen pb-32 w-full h-max-[200px]">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">POO</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Curso de Programacion Orientado a Objetos aprovado, validado por Xavio
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Matemáticas Avanzadas</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Curso de Matematicas A. completado y aorovado, validado por Xavio
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Google</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Software ingeniering course by Alphabet
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cloud Computing</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Certification aproved by oracle 
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Microsoft</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Software ingeniering course by Microsoft
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Wizeline</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Certification aproved by Wizeline 
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/programacion.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/mate.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2",
    thumbnail:
      "/google_cert.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "/oracle-cloud.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "/logo-wiz.png",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail:
      "/microsoft.svg",
  },
];
