import React , {Component} from 'react';
import { AchievementsContext } from '../Context';
import Loading from './Loading';
import Achievement from './Achievement';
import Title from './Title';
export default class FeaturedAcheivement extends Component {
    static contextType = AchievementsContext;
    render(){
      
       let { loading , featuredRooms : achievements } = this.context;
      
       achievements = achievements.map(achievement => {
       return<Achievement key={achievement.id} achievement={achievement} />

    });
     
         return <section className="featured-achievement">
           <Title title="featured-achievement"/>
           
           <div className="featured-achievements-center">
             {loading ? <Loading /> : achievements}
             
           </div>
           
           
         </section>
    
}}
