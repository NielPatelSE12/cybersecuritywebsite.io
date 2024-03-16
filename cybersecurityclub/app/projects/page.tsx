import Head from 'next/head';
import Navbar from '../component/Navigation/Navbar';
import Image from 'next/image';
import fgcu_image from '../../public/florida-gulf-coast-university_1025.jpg'
import React from 'react';



export default function About() {
  return (
    <html>
      <Head>
        <title>About Us</title>
      </Head>
    
      <body>
      <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
      <Navbar />

      <div className='topHeadBox'>
        <h1 className='pageDiscFont'>Current Projects</h1>
        <p className = 'fgcuNameFont'>Flordia Gulf Coast University, Home of the Eagles</p>
      </div>

      <div className = "pageItemDiscBox">
          <p id = 'clubLeaders'>Current and Future projects of the club</p>
        </div>

      <div className='pageItemBox'>
        <img className='imageCenter' src="https://www.mecc.edu/wp-content/uploads/National-Cyber-League-Logo.png" 
        alt="NCL Logo"></img>
        <p>
          The FGCU Cybersecurity Club is currently preparing for a Cybersecurity competition hosted by the National Cyber League. 
          This competition will take place over the next several months and involves 10 members of the club. We are excited to gather 
          experience in our clubs first competition and learn more about future opportunities for this type of event.
        </p>
        </div>
        <div className='pageItemBox'>
          <img className='imageCenter' src="https://images.squarespace-cdn.com/content/v1/5d117ee8a4412c00019518d3/1570719511068-1TL6P2S3MHW79JSYE4CP/H4D.png?format=1500w" 
          alt="H4D Logo"></img>
          <p>
            We are currently researching the possibility of bringing a Department of Defense sponsored course to our university, 
            this course is part of a program called 'Hack for Defense'. The program would give club members an opportunity to work directly 
            with the military to address some of the nations security issues.
          </p>
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
}