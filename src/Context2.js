import React, { Component } from 'react'
import items from './data';

const contentful = require("contentful");
const Client = contentful.createClient({
    space: 'wn8mmwhaj52a',
    accessToken : 'Llydh0be3oRb7IoEel2tvNyBidSxEtyuOj2nZH0WKhk'
 
  });
const NewsContext =  React.createContext();
class NewsProvider  extends Component {
    
state={ 
    neews: [],
    sortedRooms: [],
    featuredNews: [],
    loading:true,
    type: 'all',
    
};
getData = async () =>{
    try{
let response = await Client.getEntries({
    content_type : "news"
});
let neews = this.formatData(response.items);
let featuredNews = neews.filter(room => room.featured
    === true);

    this.setState({
        neews,
        featuredNews,
        sortedRooms: neews,
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
getNew = slug => {
    let tempRooms = [...this.state.neews];
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
            
          <NewsContext.Provider value= {{...this.state,
           getNew: this.getNew ,
           handleChange: this.handleChange} }>
              {this.props.children}
          </NewsContext.Provider>
        )
          }
        }


const NewsConsumer = NewsContext.Consumer;

 export function withNewsConsumer(Component)
 {
     return function ConsumerWeapper(props){
         return <NewsConsumer >
             {value => <Component {...props} context={value}/>}
         </NewsConsumer >
     }
 }

export{NewsProvider,NewsConsumer ,NewsContext};