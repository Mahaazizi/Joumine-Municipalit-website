import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
export default function Error() {
    return <> <Hero hero="HeroError" >
    <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          لا يوجد..عودة الى الرئيسية
        </Link>
    </Banner>

</Hero>
<Footer />
</>
}
