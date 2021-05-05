
       
        import React from 'react'
import {FaTwitter,FaFacebook,FaHome,FaFax} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {TiPhone} from "react-icons/ti";
import map from "../images/joumine/map (2).png"
import {  Link} from "react-router-dom";


export default function Footer() {
    return (
      
        <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Municipalité de Joumine</h1>
              
          <h2>Contact</h2>
          <ul>
              <li>
          <div>
              
              <FaHome/>   7012 Bazina-Joumine , Bizerte
            
          </div>
          </li>
          <li>
          <a href="#"><TiPhone/> Appelez-nous : +216 71711100 | +216 71711641</a> 
         </li>
         <li>
          <a href="#"><FaFax/> +216 71000000 </a> 
          </li>
          </ul>
        </div>
        
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
      
            <ul className="nav__ul">
              <li>
              <FaFacebook/>
                <a href="https://www.facebook.com/%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%A8%D9%84%D8%AF%D9%8A-%D8%A8%D8%AC%D9%88%D9%85%D9%8A%D9%86-1966015900356673/">  suivez-nous</a>
              </li>
      
              <li>
              <MdEmail/>
                <a href="joumine.commune@gmail.com">joumine.commune@gmail.com</a>
              </li>
                  
              <li>
              <a className="footer__btn" href="mailto:joumine.commune@gmail.com">contactez nous</a>
              </li>
            </ul>
          </li>
          
         
          
          <li className="nav__item">
            <h2 className="nav__title">À propos</h2>
            
          <p>La municipalité de Joumine est créée par le décret gouvernemental n°2015-1277 du 11 septembre 20152. Elle est le chef-lieu de la délégation de Joumine.</p>
          </li>
          <li>
              <img src={map} ></img>
          </li>
        </ul>
        
        <div className="legal">
          <p>&copy; 2020 Copyright:Joumine commune. All rights reserved.</p>
          
          <div className="legal__links">
            <span>développé par A.M</span>
          </div>
        </div>
      </footer>
    )}
