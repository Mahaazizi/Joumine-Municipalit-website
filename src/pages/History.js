import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import defaultImg from "../images/joumine/p8.jpg";
import {Link} from "react-router-dom"
import Footer from '../components/Footer'
import Tables from '../components/Tables'

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
    
    <div className="info-box">
        <h2> تاريخ الإحداث</h2>
        <p>وقع إحداث بلدية جومين في 16 جويلية سنة 2018 الموافق لـ 3 ذو القعدة 1439 هجري و تغطي مساحة المنطقة البلدية 32 هكتارا.
.</p>
    </div>
    <div className="polaro">
  <img className="polaroid" src={ defaultImg }alt="Norway" />
  <div className="container">
    <p>بلدية جومين</p>
</div>
</div>

<Footer />

   
    

    </>
    );
  

}
