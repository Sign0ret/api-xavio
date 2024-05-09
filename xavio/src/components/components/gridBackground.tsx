import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
 
export function GridBackgroundDemo() {
  return (
    <div>
      <div className="h-[20rem] w-full bg-zync  bg-grid-white/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zync  [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className='px-6 md:px-20 py-12 bg-zync p-6 lg:p-10 mx-auto w-full sm:w-full md:w-[70%] lg:w-[79%]'>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">Revolutionizing Education with Xavio AI:</h1>
          <br/>
          <p className="text-center text-md md:text-lg lg:text-xl xl:text-2xl text-white">
            Imagine a platform where you learn what interests you, receive instant feedback from teachers and AI, have tailored activities and help from AI to accelerate your learning. That is Xavio - where learning meets innovation and customization.
          </p>
        </div>
      </div>
    </div>
  );
}