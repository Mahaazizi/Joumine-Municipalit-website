import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import Services from "../components/Services"
import FeaturedRooms from "../components/AchievementContainer"
import {Link} from "react-router-dom"
import Footer from '../components/Footer'
import AchievementContainer from '../components/AchievementContainer'
export default function Home  ()  {
    return <>
    <Hero hero="defaultHero" >
        <Banner title="luxurious room" subtitle="deluxe ...">
            <Link to="/Achievements" className="btn-primary">
                آخر المستجدات
            </Link>
        </Banner>
    </Hero>
    <Services>
        
    </Services>
    <AchievementContainer/>
    <Footer />
    </>

}


