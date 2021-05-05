import React from 'react'
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import NewContainer from "../components/NewContainer";
const News = () => {
    return(
         <>
    <Hero hero="newsHero" >;
     
        <Banner title="our Achievements" >
            <Link to="/" className="btn-primary">
                return home 
            </Link>
        </Banner>
    </Hero>
    <NewContainer />
    <Footer />
</>
);
};
export default News;
