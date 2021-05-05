import React , {Component} from 'react';
import { dataContext } from '../Contextstatic';
import Loading from './Loading';
import doc from './doc';
import Title from './Title';
export default class FuaturedData extends Component {
    static contextType = dataContext;
    render(){
      
       let { loading , FuaturedData : datas } = this.context;
      
       doc = datas.map(data => {
       return<doc key={data.id} data={data} />

    });
     
         return <section className="featured-achievement">
           <Title title="featured-achievement"/>
           
           <div className="featured-achievements-center">
             {loading ? <Loading /> : datas}
             
           </div>
           
           
         </section>
    
}}
