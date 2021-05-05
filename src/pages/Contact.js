import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
const Contact = () => {
    return(
         <>
    <Hero hero="achievementsHero" >;
     
        <Banner title="our rooms" >
            <Link to="/" className="btn-primary">
                return home 
            </Link>
        </Banner>
    </Hero>
    <ContactUs />
    <Footer />
</>
);
};
export default Contact;