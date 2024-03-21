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
                <title>Contact Us</title>
            </Head>

            <body>
                <Navbar></Navbar>
                <div>
                    <div className='topHeadBox'>
                        <h1 className='pageDiscFont'>Contact Us!</h1>
                        <p className = 'fgcuNameFont'>Flordia Gulf Coast University, Home of the Eagles</p>
                    </div>
                    <div className='pageItemBox'>
                        <p>
                            Any FGCU student interested in joining, check out our social media pages or
                            <a href = "https://teams.microsoft.com/l/team/19%3ApN6kPrHMs2um_aeBv0L6nzXBS388mIz9oKQyNefYZwM1%40thread.tacv2/conversations?groupId=c61e99e2-e040-4a85-a149-108c0fdd838a&tenantId=f7a5a4ef-4ffa-4c80-bfb3-c12e28872099"
                            > Join out Microsoft Team!</a>
                        </p>
                    </div>
                    <div className = "pageItemBox">
                        <p>
                            Please feel free to contact us by email us <a href = "mailto: wcward3302@eagle.fgcu.edu"
                            >HERE</a>!
                        </p>
                    </div>
                </div>
            </body>
        </html>
    </main>
    )
}
