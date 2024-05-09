"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export function BackgroundGradientDemo1() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <BackgroundGradient className="rounded-[22px] relative">
          <input
            type="text"
            placeholder="Search a Topic"
            className="w-full py-2 pl-8 pr-4 text-white bg-zinc-900 border border-transparent focus:outline-none focus:border-white rounded-full"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </BackgroundGradient>
      </div>
    </div>
  );
}
