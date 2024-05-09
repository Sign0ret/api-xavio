"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

type Props = {
  params: {
    id: string;
    clase: string;
    quiz: string;
  };
  tareaDescription: {
    topic: string,
    description: string,
    lastUpdated: string,
    contributor: string,
  };
};

export function TareaDescriptionCard({ params, tareaDescription }: Props) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] lg:min-w-sm min-h-[300px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {tareaDescription.topic}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {tareaDescription.description}
        </p>
        
      </BackgroundGradient>
    </div>
  );
}
