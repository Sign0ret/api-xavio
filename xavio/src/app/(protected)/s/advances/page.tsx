import React from 'react';

import { Metadata } from 'next';
import { Card } from "@/components/components/card";
import { BackgroundGradientDemo1 } from "@/components/components/searchbar";
import { TypewriterEffectSmoothDemo } from "@/components/components/typperdemo";
import { BackgroundBeams } from "@/components/ui/background-gradient-animation";

export const generateMetadata = (): Metadata => {
  return {
    title: `Avances`
  }
} 
  
export default function Avances() {

  return (
    <div className="bg-zinc-900 h-screen overflow-y-auto">
      <BackgroundBeams/>
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        <TypewriterEffectSmoothDemo/>
        <div className="flex max-w-[300px] mx-auto justify-center items-center">
          <BackgroundGradientDemo1/>
        </div>
        <div className="mx-auto w-full sm:w-full md:w-[95%] lg:w-[90%] mt-16">
          <Card/>
        </div>
      </div>
  );
}