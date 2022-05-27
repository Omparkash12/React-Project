import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'

import brandImg from '../Images/brand.png';
import headingLineImg from '../Images/lineImg.svg'
import MainHeading from '../Home/MainHeading/MainHeading';
import NewsLetter from '../Home/NewsLetter/NewsLetter';
import Footer from '../Shared/Footer/Footer';
import ContactForm from './ContactForm/ContactForm';



export default function Contact() {
    const raagNavPadding = {
        padding: '',
    }
    return (
        <div className="">
            <Navbar brand={brandImg} backAddress='/' navAdjustPadding={raagNavPadding} centerImage='' />
            <div className="headingPadding">
                <MainHeading heading1='Contact Us' heading2='' headingLineImg={headingLineImg} />
            </div>
            <ContactForm />
            <NewsLetter NewsHeading="SIGN TO OUR NEWSLETTER" NewsButton="SUBSCRIBE NOW" />
            <Footer />
        </div>
    )
}
