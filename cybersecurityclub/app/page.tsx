import React from 'react';
import Head from 'next/head';
import Navbar from './component/Navigation/Navbar';
import Image from 'next/image';
import fgcu_image from '../public/florida-gulf-coast-university_1025.jpg'
import Link from 'next/link';



const Page: React.FC = () => {
return (
<html>
  <Head>
    <title>Welcome Page</title>
  </Head>

  <body>
    <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
    <Navbar />

    <div className='topHeadBox'>
      <h1 className='pageDiscFont'>The Official FGCU Cybersecurity Club Website</h1>
      <p className = 'fgcuNameFont'>Flordia Gulf Coast University, Home of the Eagles</p>
    </div>

    <div className='pageItemBox'>
      <p>
        Thank you for visiting out site! We appriciate your interest in our club and invite you to use the following links to 
        hopefully find what you seek from here!
        <br></br>Thank you -Club Leadership
      </p>
      <Link href="/">
        <button className="btn">Home</button>
      </Link>
      <Link href="/goals">
        <button className="btn">Goals</button>
      </Link>
        <Link href="/about">
          <button className="btn">About Us</button>
        </Link>
        <Link href="/contact">
          <button className="btn">Contact</button>
        </Link>
        <Link href="/projects">
          <button className="btn">Projects</button>
        </Link>
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
  </body>
</html>
);
};

export default Page;
