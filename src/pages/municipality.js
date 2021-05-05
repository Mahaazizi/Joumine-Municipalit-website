import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import defaultImg from "../images/مجلس1.jpg";
import {Link} from "react-router-dom"
import Tables from '../components/Tables'
import Footer from '../components/Footer'

export default function Municipality  ()  {
    return (
        <>
    <Hero hero="defaultHero" >
        <Banner title="luxurious room" subtitle="deluxe ...">
            <Link to="/rooms" className="btn-primary">
                آخر المستجدات
            </Link>
        </Banner>
    </Hero>
   <div className="tablem">
   <div className="polaro">
  <img className="polaroid" src={ defaultImg }alt="Norway" />
  <div className="container">
    <p>المجلس البلدي</p>
</div>
</div>
<Tables />

</div>
<Footer />
    </>
    );
  

}

