// Cart.js
import React from 'react';
import './Cart.css';

export const Cart = () => {
  return (
    <div className='start'>
        <h1>Dashboard</h1><br/>
    <div className="cart-container">
        <h1></h1>
      <div className="cart-box">
        <div className="cart-item">
          <p>Total Number of Customers</p>
          <p>9</p>
        </div>
      </div>
      <div className="cart-box">
        <div className="cart-item">
          <p>Total Number of Dealers</p>
          <p>5</p>
        </div>
      </div>
      <div className="cart-box">
        <div className="cart-item">
          <p>Total Income</p>
          <p>Rs.6000</p>
        </div>
      </div>
    </div>
    </div>
  );
};
