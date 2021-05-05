import React from "react";
import { Link } from 'react-router-dom';
import defaultImg from "../images/joumine/p8.jpg";
import PropTypes from "prop-types";
export default function Achievement({ achievement }) {
  const{name,slug,images,date} = achievement ; 
    
    return( <article className="Achievement">
        <div className="img-container">
            <img src={images[0] || defaultImg } alt="single Achievement" />
            <div className="price-top">
                <h6>{date}</h6>
                
                </div>
                <Link to={`/Achievements/${slug}`} className="btn-primary Achievement-link">
                    التفاصيل
                </Link>
        </div>
        <p className="Achievement-info">{name}</p>
    </article>
    );
}
Achievement.prototype ={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number .isRequired

    })
}
