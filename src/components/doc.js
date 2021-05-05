import React from "react";
import { Link } from 'react-router-dom';
import defaultImg from "../images/2016-04-19.jpg";
import PropTypes from "prop-types";
export default function Doc({doc}) {
  const{name,slug,images,date} = doc ; 
    
    return( <article className="Achievement">
        <div className="img-container">
            <img src={images[0] || defaultImg } alt="single Achievement" />
            <div className="price-top">
                <h6>{date}</h6>
                
                </div>
                <Link to={`/news/${slug}`} className="btn-primary Achievement-link">
                    التفاصيل
                </Link>
        </div>
        <p className="Achievement-info">{name}</p>
    </article>
    );
}
Doc.prototype ={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        

    })
}
