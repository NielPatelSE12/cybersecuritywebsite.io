import Head from 'next/head';
//import Navbar from './component/Navigation/Navbar';
import Navbar from '../component/Navigation/Navbar';


export default function About() {
  return (
    <html>
      <Head>
        <title>About Us</title>
      </Head>
    
      <body className='bodyBackground'>
      <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
      <Navbar />

      <div className='topHeadBox'>
        <h1 className='pageDiscFont'>About Us</h1>
        <p className = 'fgcuNameFont'>Flordia Gulf Coast University, Home of the Eagles</p>
        </div>
      
        <div className = "pageItemDiscBox">
          <p id = 'clubLeaders'>Cybersecurity Club Leadership Members</p>
        </div>

        <div className = "pageItemBox">
          <p id = 'president'>Club President: Niel Patel <br></br>Contact: <a href = "nkpatel5457@eagle.fgcu.edu">nkpatel5457@eagle.fgcu.edu</a></p>
        </div>
        <div className = "pageItemBox">
          <p id = 'vicePres'>Club Vice President: Caleb Newman <br></br>Contact: <a href = "cjnewman6275@eagle.fgcu.edu">cjnewman6275@eagle.fgcu.edu</a></p>
        </div>
        <div className = "pageItemBox">
          <p id = 'secretary'>Club Secretary: William Ward <br></br>Contact: <a href = "wcward3302@eagle.fgcu.edu">wcward3302@eagle.fgcu.edu</a></p>
        </div>
        <div className = "pageItemBox">
          <p id = 'treasurer'>Club Treasurer: Johnny Mai <br></br>Contact: <a href = "jfmai2313@eagle.fgcu.edu">jfmai2313@eagle.fgcu.edu</a></p>
        </div>
      </div>

        

      </body>

    </html>
      
    );
}
