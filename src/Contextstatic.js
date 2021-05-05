import React, { Component } from 'react'
import items from './data';

const contentful = require("contentful");
const Client = contentful.createClient({
    space: 'wn8mmwhaj52a',
    accessToken : 'Llydh0be3oRb7IoEel2tvNyBidSxEtyuOj2nZH0WKhk'
 
  });

const DataContext =  React.createContext();
class DataProvider extends Component {
state={ 
    datas: [],
    sortedRooms: [],
    fuaturedData: [],
    loading:true,
    type: 'all',
    
};
getData = async () =>{
    try{
let response = await Client.getEntries({
    content_type : "data"
});
let datas = this.formatData(response.items);

let fuaturedData = datas.filter(room => room.fuatured
    === true);

    this.setState({
        datas,
        fuaturedData,
        sortedRooms: datas,
        loading: false
        
    });
    } catch(error){
        console.log(error);
    }
}

componentDidMount(){
    this.getData()
    ;}
formatData(items){
    let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image =>
            image.fields.file.url
            );
           
            let room = {...item.fields,images,id};
            return room;
            
    });
     
    return tempItems;
    
}
getdatas = slug => {
    let tempRooms = [...this.state.datas];
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
        
    );
    
     
};

render() {
        
        return (
            
          <DataContext.Provider value= {{...this.state,
            getdatas: this.getdatas,
           handleChange: this.handleChange} }>
              {this.props.children}
          </DataContext.Provider>
        )
          }
        }


const DataConsumer = DataContext.Consumer;

 export function withDataConsumer(Component)
 {
     return function ConsumerWeapper(props){
         return <DataConsumer>
             {value => <Component {...props} context={value}/>}
         </DataConsumer>
     }
 }

export{DataProvider,DataConsumer,DataContext};