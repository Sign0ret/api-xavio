"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Up",
      className: "text-white "
    },
    {
      text: "your",
      className: "text-white "
    },
    {
      text: "Mind",
      className: "text-white"
    },
    {
      text: "with",
      className: "text-white "
    },
    {
      text: "Xavio AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
