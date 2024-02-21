import React from 'react'
import { Link } from 'react-router-dom'

import './head2.css';
export const Head2 = () => {
  return (
    <>
  
        <div className="nav2">
      <Link to='/' className="yy">Home</Link>
      <Link to='/aboutUs' className="yy"> AboutUs</Link>
      <Link to='/contactUs' className="yy"> contactUs</Link>
     
    </div>

   
       
     
   
    </>
  )
}
