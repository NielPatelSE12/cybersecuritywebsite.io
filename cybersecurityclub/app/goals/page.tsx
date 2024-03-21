import Head from 'next/head';
import Navbar from '../component/Navigation/Navbar';
import Image from 'next/image';
import fgcu_image from '../../public/florida-gulf-coast-university_1025.jpg'
import React from 'react';

export default function Contact (){
return(
<main>
    <html>
        <Head>
            <title>Goals</title>
        </Head>

        <body>
            <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
            <Navbar />

                <div className='topHeadBox'>
                    <h1 className='pageDiscFont'>Club Goals</h1>
                    <p className = 'fgcuNameFont'>Flordia Gulf Coast University, Home of the Eagles</p>
                </div>

                <div className = "pageItemBox">
                    <p>As a student run organization of FGCU, we plan to provide businesses and orginizations with trainings, seminars, and 
                        clinics relating to cybersecurity. In the near future we plan to build strong relations with leading members of the 
                        cybersecurity field that have made this field their profession. These relationships built we hope will create trust
                        and provide a strong foundation for the mentioned clinics and seminars.
                    </p>
                    <p>
                        <br></br>Unfortunatly, the following sections is still tentitive. As these things become more solid, they shall be updated here!
                    </p>
                    <p>
                        <br></br>Club activities: Clinics, seminars, training from professionals, competitions 
                        <br></br>Club meeting time and days: TBD 
                        <br></br>Club mission: TBD 
                        <br></br>Club sponsor: FGCU Assistant Professor Chengyi Qu
                    </p>
                    <p>
                        <br></br>We apologize for any confusion, please feel free to check regularly as we continue to work towards estabisling the FGCU Cybersecurity 
                        Club! -Cybersecurity Club Leadership
                    </p>
                </div>
            </div>
        </body>
    </html>
</main>
)
}
