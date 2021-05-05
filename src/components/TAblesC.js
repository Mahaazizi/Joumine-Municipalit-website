import React, { Component } from 'react'
import { createClient} from 'contentful'
import { Link } from 'react-router-dom';
const contentful = require("contentful");

export default class Tables extends Component {
constructor(){
  super()
  this.state = { files :[]}
 
}
componentDidMount () {
  const Client = contentful.createClient({
    space: 'wn8mmwhaj52a',
    accessToken : 'Llydh0be3oRb7IoEel2tvNyBidSxEtyuOj2nZH0WKhk'
  
  });
  Client.getEntries({content_type : 'dossiers'}).then(response => this.setState({ files : response.items
  
  })
  
  )
 
}


renderTableData() {
  console.log(this.state.files.length)
  
  if(this.state.files.length == 0){
      return <div className="error">
          <h3> لا يوجد ملفات حاليا</h3>
        
          </div>
  }
 return this.state.files.map( file => {
   return (
      
       <tbody key={file.fields.id}>
     <tr key={file.fields.liens}>
       <td>{file.fields.liens.fields.title}</td>
     <td><Link to="#">{file.fields.liens.fields.file.url}</Link></td>
     </tr>
     </tbody>
  
   )
 })
    
  }
 

 render() {

return (
  <table>
  <thead><tr>
    <th>الملفات الالكترونية
      </th>
      </tr></thead>

  
      
                  {this.renderTableData()}
                 
             
              </table>
           
);
 
 }
  
        }
