import React from 'react';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaReact, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AnimatedTooltipPreview } from '@/components/components/avatars';

const Footer = () => {
    return (
      <footer className="bg-content text-white py-10">
        <div className="bg-gray-800 text-white py-5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <Image src={'/xavoi.svg'} alt="Logo" width={80} height={40} />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3 mb-8 sm:mb-0">
            <div className="flex justify-center py-10 space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                  <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                  <FaInstagram size={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                  <FaSquareXTwitter size={30} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 sm:mb-0">
            <div className="text-center py-5">
              <h3 className="pb-3">Tech Stack</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                    <FaReact size={30} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <FaNode size={35} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <SiNextdotjs size={30} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <SiTailwindcss size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="text-center py-5">
              <h3>Other</h3>
              <ul>
                <AnimatedTooltipPreview/>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
// Exporting Footer component
export default Footer;