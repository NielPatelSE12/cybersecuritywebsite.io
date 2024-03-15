
import React from 'react';
import Navbar from '../component/Navigation/Navbar';
import Image from 'next/image';
import fgcu_image from '/Users/calebnewman/Documents/GitHub/cybersecuritywebsite.io/cybersecurityclub/app/projects/florida-gulf-coast-university_1025.jpg';
import ncl_logo from '/Users/calebnewman/Documents/GitHub/cybersecuritywebsite.io/cybersecurityclub/public/ncl_logo.png';

interface ImageData {
  src: string; // URL or path to the image
  alt: string; // Alt text for the image
  width: string; // Width of the image
  height: string; // Height of the image
}

interface RectangleProps {
  color: string;
  borderColor?: string;
  text: string;
  textColor?: string;
  imageData?: ImageData;
}

const Rectangle: React.FC<RectangleProps> = ({ color, borderColor,  text, textColor, imageData }) => (
  <div style={{ borderWidth: '5px', borderColor: borderColor, backgroundColor: color, width: '500px', height: '400px', margin: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    {imageData && <img src={imageData.src} alt={imageData.alt} style={{ width: imageData.width, height: imageData.height, marginTop: '20px', marginBottom: '20px' }} />}
    <span style={{ color: textColor, marginLeft: '20px', marginRight: '20px' }}>{text}</span>
  </div>
);

const Project: React.FC = () => {

  const image1Data: ImageData = { src: 'https://www.mecc.edu/wp-content/uploads/National-Cyber-League-Logo.png', alt: 'Image 1', width: '150px', height: '150px' };
  const image2Data: ImageData = { src: 'https://images.squarespace-cdn.com/content/v1/5d117ee8a4412c00019518d3/1570719511068-1TL6P2S3MHW79JSYE4CP/H4D.png?format=1500w', alt: 'Image 1', width: '450px', height: '150px' };
  const centerDivStyle = {
    display: 'flex',
    justifyContent:'center',
    height: '100vh'
  };

  const textStyleBody = {
    fontSize: 200,
    color: 'white'
  };

  const textBox = {
    rectangle: {
      width: '250px',
      height: '100px',
      background: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  return (
    <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
      <Navbar />
      <div style={centerDivStyle}>
        <Rectangle color="white" borderColor='turquoise' text="The FGCU Cybersecurity Club is currently preparing for a Cybersecurity competition hosted by the National Cyber League. This competition will take place over the next several months and involves 10 members of the club. We are excited to gather experience in our clubs first competition and learn more about future opportunities for this type of event." textColor='black' imageData={image1Data} />
        <Rectangle color="white" borderColor='turquoise' text="We are currently researching the possibility of bringing a Department of Defense sponsored course to our university, this course is part of a program called 'Hack for Defense'. The program would give club members an opportunity to work directly with the military to address some of the nations security issues." textColor='black' imageData={image2Data} />
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

export default Project;

  