"use client";
import { AnimatedTooltipProfile } from "@/components/ui/animated-tooltip-profile";
import React from "react";

const people = [
  {
    id: 1,
    name: "Jorge Blasquez",
    designation: "Software Engineer",
    image:
      "/profile_photo2.jpeg",
  }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltipProfile items={people} />
    </div>
  );
}
