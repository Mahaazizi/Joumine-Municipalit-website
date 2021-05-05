import React, {Component} from 'react'
import defaultBcg from '../images/build.jpg'
import Hero from '../components/Hero'
import {DataContext} from '../Contextstatic'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import StyledHero from '../components/StyledHero'
import data from'../data'
export default class Documents extends Component {
    constructor(props) {
        super(props)
    
    // console.log(this.props);
     this.state ={
         slug:this.props.match.params.slug,
         defaultBcg
     };
    }
    static contextType = DataContext;
    //componentDidMount(){}
   render(){
    
       const {getdatas} = this.context;
       const room = getdatas(this.state.slug);
      if(!room){
          return <div className="error">
              <h3> no such Documents could be found...</h3>
              <Link to='/rooms' className="btn-primary">
                  عودة الى الرئيسية
              </Link>
              </div>
      }
       const{name,
        intro,
        t1,
        d1,
         d2,
         t2,
         d,
         t3,
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
        <div className="single-Achievement-images">
            <h1>{name}</h1>
            {defaultImg.map((item,index) =>{
                return <img key={index} src={item} alt={name} />;
            })}
        </div>
        <div className="single-Achievement-info">
            <article className="desc">
                <h3>{t1}</h3>
                <div className="description">
        {d1} 
            
        </div>
            </article>
            </div>
            <div className="single-Achievement-info">
            <article className="desc">
                <h3>{t2}</h3>
                <div className="description">
        {d2} 
            
        </div>
            </article>
            </div>
            <div className="single-Achievement-info">
            <article className="desc">
                <h3>{t3}</h3>
                <div className="description">
        {d}
           
        </div>
            </article>
           
        </div>
   
    </section>
    <section className="ach-extras">
        <h6>الملاحظات</h6>
        <ul className="extras">
            {extras.map((item,index) => {
                return <li key={index}>- {item}</li>
            })}
        </ul>
    </section>
    <Footer />
    </>
    );
}
}
