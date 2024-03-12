import React from 'react';
import Navbar from './component/Navigation/Navbar';
import Image from 'next/image';
import cybersecuritylogo from '../public/cyber security logo.jpg'
import fgcu_image from '../public/florida-gulf-coast-university_1025.jpg'


const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center"> {/* Center content */}
      </div>
      <div className="flex-grow flex justify-end items-end"> {/* Position image to bottom right corner */}
      </div>
      <>
        <div style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh"
        }}>
          <Image 
            src={fgcu_image}
            alt="fgcu image"
            layout="fill"
            objectFit='cover'
          />
        </div>
      </>
    </div>
  );
};

export default Page;
