import React from 'react';
import Navbar from './component/Navigation/Navbar';


const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold">FGCU Cyber Security Club</h1>
      </div>
    </div>
  );
};

export default Page;

