// Inside the filteredData function in Catalog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({
  id,
  img,
  title,
  prevPrice,
  noofrooms,
  location,
}) => {
  return (
    
      <div className="card">
     
          <Link to={`/carddetails/${id}`} className="card-link">
        <img src={img} alt={title} className="card-img" />
        </Link>
        <div className="card-details">
          
          <h3 className="card-title">{title}</h3>
          <p className='po'>Rent: {prevPrice}</p>
          <p className='po'>Rooms Available: {noofrooms}</p>
          <p className='po'>Location:{location}</p>
          
        </div>
        
      </div>
    
  );
};

export default Card;
