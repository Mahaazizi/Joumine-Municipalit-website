import React, { Component } from 'react'
import {TiChartLine , TiLightbulb,TiContacts} from
'react-icons/ti'
import {FaStreetView,FaCity,FaTrash,FaCogs,FaBuilding,FaCloudRain} from "react-icons/fa"
import {MdLocalFlorist,MdLocalGroceryStore} from "react-icons/md"
import { GiStreetLight } from "react-icons/gi";
import Title from'./Title'
export default class Services extends Component {
 state={
     services:[
         {
             icon:<TiLightbulb/>,
             title:"تجميل و تحسين",
             info :
                 <ul>
                     <li> 
                        
                         <FaCity/>
                  <p>  تجميل المدينة </p>
                     
                     </li>
                     <li> 
                         <GiStreetLight/>
                         <p>  التنوير العمومي</p>
                     </li>
                     <li> 
                         <FaTrash/>
                         <p> تجميع الفضلات و تدويرها </p>
                     </li>
                   
                 </ul>

         },
         {
            icon:<TiChartLine/>,
            title:"بناء",
            info:
                <ul>
                    <li> 
                        <FaStreetView/>
                     <p>بناء و تعهد و اصلاح الطرقات و أرصفتها</p> 
                    </li>
                    <li> 
                        <MdLocalFlorist/>
                     <p>بناء الحدائق و المنتزهات</p> 
                    </li>
                  
                </ul>
            
        },
        {
            icon:<FaCogs/>,
            title:"انجازات",
            info:
                <ul>
                    <li> 
                        <FaBuilding/>
                     <p>انجاز بناءات البلدية و الساحات البلدية</p> 
                    </li>
                    <li> 
                        <FaCloudRain/>
                     <p>انجاز شبكات التصرف في مياه الامطار</p> 
                    </li>
                    <li> 
                        <MdLocalGroceryStore/>
                     <p>انجاز الأسواق البلدية</p> 
                    </li>
                </ul>
            
        },
      

     ]
 }

    render() {
        return (
          <section className="services">
              <Title title="خدماتنا"/>
              <div className="services-center">
                  {this.state.services.map((item,index) =>{
                    return <article key ={index} className="service">
                        <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                  <div>{item.info}</div>
                    </article>
                  })}
              </div>
          </section>
        )
    }
}

