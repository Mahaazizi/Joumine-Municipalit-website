import React, { Component, useState } from 'react'
import logo from '../images/logo (1).jpg'
import logo2 from '../images/logo2.jpg'
import {FaAlignRight} from 'react-icons/fa'
import {Link, NavLink, Redirect} from 'react-router-dom'
import item from "../data"

export default class Navbar extends Component {
state = {
    isOpen:false
}
handleToggle =() =>{
    this.setState({isOpen:!this.state.isOpen})
}


    render() {
        return (
           
          <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                      <img src={logo} alt="Beach Resort"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                <li>
                    <Link to="/contact">الاتصال</Link>
                </li>
                <li className="dropdown ">
    <Link to ="" className="dropbtn">الخدمات الالكترونية</Link>
    <div className="dropdown-content">
    <Link to="/compl">الشكاوي</Link>
      <Link to="/Dossiers">ملفات الكترونية</Link>
    </div>
  </li>
  <li className="dropdown ">
    <Link to="" className="dropbtn">خدمات المواطنين</Link>
    <div className="dropdown-content">
      <NavLink  to="/documents/رخص-البناء" >رخص البناء</NavLink>
      <NavLink to="/documents/الحالة-المدنية">الحالة المدنية</NavLink>
      <NavLink to="/documents/التعريف-بالامضاء">التعريف بالامضاء</NavLink>
      <a href="https://drive.google.com/file/d/1k20roJi0kYWmSAs_KCSFDOH1UmYV0-TD/view?usp=sharing">الجباية المحلية</a>
      
    </div>
  </li>
  <li>
                    <Link to="/Achievements">الإنجازات</Link>
                </li>
                <li>
                    <Link to="/news">الأخبار</Link>
                </li>
  <li className="dropdown ">
    <Link to="" className="dropbtn">البلدية</Link>
    <div className="dropdown-content">
    <Link to="/municipality">المجلس البلدي</Link>
      <Link to="/history">تاريخ الاحداث</Link>
      <Link to="ServicesMunicipaux">المصالح البلدية</Link>
      <a href="https://drive.google.com/file/d/1uPn2V2_LBK6wzbgTWzoS1P1K0boTUotS/view?usp=sharing">القانون الأساسي للبلديات</a>
      <a href="https://drive.google.com/file/d/1VoSeT102TGY7fGX1xpJ8dM0zWQCT8_Dv/view?usp=sharing">النظام الداخلي النموذجي للمجالس البلدية</a>
    </div>
  </li>

  <li>
                    <Link to="/">جومين</Link>
                </li>

  
                </ul>
                <Link to="/">
                      <img src={logo2} alt="logo2" id="logo2"/>
                    </Link>
  
            </div>
          
            
            </nav>
           
            
        )
        
    }
    
}



