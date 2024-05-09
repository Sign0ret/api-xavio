import { Card } from "@/components/components/card";
import Footer from "@/components/components/landing_footer";
import { BackgroundGradientDemo1 } from "@/components/components/searchbar";
import { TypewriterEffectSmoothDemo } from "@/components/components/typperdemo";
import WelcomeText from "@/components/components/welcome-text";
import { BackgroundBeams } from "@/components/ui/background-gradient-animation";

import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return (
  <div>
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
        <BackgroundBeams/>
        <div  className="mx-auto w-full sm:w-full md:w-[100%] lg:w-[100%] ">
          <WelcomeText/>
          <Footer/>
        </div>
    </div>
  );
}
