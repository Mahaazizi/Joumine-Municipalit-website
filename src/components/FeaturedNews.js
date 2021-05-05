import React , {Component} from 'react';
import { NewsContext } from '../Context2';
import Loading from './Loading';
import news from './new';
import Title from './Title';
export default class FeaturedNews extends Component {
    static contextType = NewsContext;
    render(){
      
       let { loading , FeaturedNews : neews } = this.context;
      
       news = neews.map(neew => {
       return<news key={neew.id} neew={neew} />

    });
     
         return <section className="featured-achievement">
           <Title title="featured-achievement"/>
           
           <div className="featured-achievements-center">
             {loading ? <Loading /> : neews}
             
           </div>
           
           
         </section>
    
}}
