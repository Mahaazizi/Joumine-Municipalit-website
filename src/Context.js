import React, { Component } from 'react'

import Client from './Contenful'


const AchievementsContext =  React.createContext();
class AchievementsProvider  extends Component {
state={ 
    achievements: [],
    sortedRooms: [],
    featuredRooms: [],
    loading:true,
    type: 'all',
    
};
getData = async () =>{
    try{
let response = await Client.getEntries({
    content_type : "joumine"
});
let achievements = this.formatData(response.items);
let featuredRooms = achievements.filter(room => room.featured
    === true);

    this.setState({
        achievements,
        featuredRooms,
        sortedRooms: achievements,
        loading: false
        
    });
    } catch(error){
        console.log(error);
    }
}

componentDidMount(){
this.getData();
        
}
formatData(items){
    let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image =>
            image.fields.file.url);
            let room = {...item.fields,images,id};
            return room;
            
    });
     
    return tempItems;
    
}
getRoom = slug => {
    let tempRooms = [...this.state.achievements];
    const room =tempRooms.find(room => room.slug === slug);
    return room;

};
 handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ?
    target.checked : target.value;
    const name = event.target.name ;
    this.setState(
        {
            [name]: value
        },
        this.filterRooms
    );
    
     
};

render() {
        
        return (
            
          <AchievementsContext.Provider value= {{...this.state,
           getRoom: this.getRoom ,
           handleChange: this.handleChange} }>
              {this.props.children}
          </AchievementsContext.Provider>
        )
          }
        }


const AchievementsConsumer = AchievementsContext.Consumer;

 export function withAchievementsConsumer(Component)
 {
     return function ConsumerWeapper(props){
         return <AchievementsConsumer >
             {value => <Component {...props} context={value}/>}
         </AchievementsConsumer >
     }
 }

export{AchievementsProvider,AchievementsConsumer ,AchievementsContext};