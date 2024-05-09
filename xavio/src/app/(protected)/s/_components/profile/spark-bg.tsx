"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";


export function SparklesPreview() {
  return (
    <div className="h-full min-h-[2000px] bg-zinc-900 flex flex-col items-center justify-center overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-screen h-[1900px]"
        particleColor="#FFFFFF"
      />
    </div>
  );
}
