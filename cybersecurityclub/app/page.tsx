import React from 'react';
import Navbar from './component/Navigation/Navbar';
import Image from 'next/image';
import cybersecuritylogo from '../public/cyber security logo.jpg';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-200"> {/* Set container as a flex container */}
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center"> {/* Center content */}
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">FGCU Cyber</span> 
          <span className="text-emerald-600 dark:text-blue-500">Security Club</span> {/* Apply the same text color here */}
        </h1>
      </div>
      <div className="flex-grow flex justify-end items-end"> {/* Position image to bottom right corner */}
        <Image 
          className="max-w-xs rounded-lg"
          src={cybersecuritylogo}
          alt="Logo Image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Page;
