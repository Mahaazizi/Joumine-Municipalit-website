import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import AchievementContainer from "../components/AchievementContainer";
import { AchievementsProvider } from '../Context'
const Achievements = () => {
    return(
         <>
    <Hero hero="achievementsHero" >;
     
        <Banner title="our Achievements" >
            <Link to="/" className="btn-primary">
                return home 
            </Link>
        </Banner>
    </Hero>
    <AchievementContainer />
    <Footer />
</>
);
};
export default Achievements;