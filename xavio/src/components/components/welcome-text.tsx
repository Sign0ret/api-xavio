import React from 'react';
import { GridBackgroundDemo } from '@/components/components/gridBackground';

const WelcomeText = () => {
  return (
    <div>
      <GridBackgroundDemo/>
      <div className="bg-zync p-6 lg:p-10 mx-auto w-full sm:w-full md:w-[70%] lg:w-[79%]">
        <div className="bg-zync p-6 rounded-lg x-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg  shadow-xl">
              <h2 className="text-center text-lg font-bold mb-2  text-purple-400 ">Choose your learning path</h2>
              <p className="text-center  text-white">Let us know what subjects interest you and we will tailor your experience.</p>
              </div>
              <div className=" p-4 rounded-lg  shadow-xl">
              <h2 className="text-center text-lg font-bold mb-2  text-purple-400">Discover our courses</h2>
              <p className="text-center  text-white">Explore personalized recommendations based on your interests.</p>
              </div>
              <div className=" rounded-full p-4 rounded-lg  shadow-xl">
              <h2 className="text-center text-lg font-bold mb-2  text-purple-400">Join us</h2>
              <p className="text-center  text-white">Take the next step and <span className='font-bold'>Join Xavio</span> to shape your educational future.</p>
              </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default WelcomeText;
