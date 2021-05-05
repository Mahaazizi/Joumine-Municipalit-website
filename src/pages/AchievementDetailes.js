import React, {Component} from 'react'
import defaultBcg from '../images/build.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import {AchievementsContext} from '../Context'
import StyledHero from '../components/StyledHero'
import built from '../components/Building_permits'
import { render } from '@testing-library/react'
import data from'../data'
export default class AchievemensDetailes extends Component {
    constructor(props) {
        super(props)
    
    // console.log(this.props);
     this.state ={
         slug:this.props.match.params.slug,
         defaultBcg
     };
    }
    static contextType = AchievementsContext;
    //componentDidMount(){}
   render(){
       const {getRoom} = this.context;
       const room = getRoom(this.state.slug);
      if(!room){
          return <div className="error">
              <h3> no such Achievement could be found...</h3>
              <Link to='/rooms' className="btn-primary">
                  عودة الى الرئيسية
              </Link>
              </div>
      }
       const{name,
        intro,
        t1,
        description,
        
          extras,
         
    images} = room;
    const[mainImg,...defaultImg] = images;
    return(
    <> <StyledHero img={images[0] || this.state.defaultBcg} >
        <Banner title={`${name}`}>
            <Link to='/rooms' className='btn-primary'>
            عودة الى الرئيسية
            </Link>
        </Banner>
       
    </StyledHero>
    
   
    <section className="single-Achievement">
    <h2>{name}</h2> 
        <div className="single-Achievement-images">
            
            {defaultImg.map((item,index) =>{
                return <img key={index} src={item} alt={name} />;
            })}
        </div>
        <div className="single-Achievement-info">
          
            <p className="description">
        {description} 
          
        </p>
        </div>
    </section>
    <section className="ach-extras">
        <h6>الملاحظات</h6>
        <ul className="extras">
            {extras.map((item,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </section>
    <Footer />
    </>
    );
}
}
