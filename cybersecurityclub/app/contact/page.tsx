import Head from 'next/head';
//import Navbar from './component/Navigation/Navbar';
import Navbar from '../component/Navigation/Navbar';

export default function Contact (){
return(
<main>
    <html>
        <Head>
            <title>Contact Us</title>
        </Head>

        <body className='bodyBackground'>
            <div className="min-h-screen flex flex-col"> {/* Set container as a flex container */}
            <Navbar />

                <div className='topHeadBox'>
                    <h1 className='pageDiscFont'>Contact Us!</h1>
                    <p className = 'fgcuNameFont'>Flordia Gulf Coast University, Home of the Eagles</p>
                </div>
                <div className = "pageItemBox">
                    <p id = 'contactMessage'> - If you are an FGCU Student interested in joining the FGCU Cybersecurity Club<br></br>
                        - If you wish to get in touch to plan / discuss the seminars or clinics hosted by the FGCU Cybersecurity club<br></br>
                        Please don't hesitate to reach out! Contact our secretary and we will invite you to the team or return your message as soon as possible. <br></br>
                        <br></br>Thank you - Cybersecurity Club Leadership <br></br>
                        <br></br>Contact info: <a href = "wcward3302@eagle.fgcu.edu">wcward3302@eagle.fgcu.edu</a><br></br>
                    </p>
                </div>
            </div>
        </body>
    </html>
</main>
)
}
