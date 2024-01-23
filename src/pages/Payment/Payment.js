import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './Payment.css'
export const Payment = () => {
    const [amt,setAmt]=useState(0);
    const location = useLocation();
    const { title, prevPrice } = location.state || {};
    function onToken(token){
        console.log(token);
    }
    
    function days(e){
if(e.target.value == '1 month'){
    setAmt(prevPrice);
}
if(e.target.value == '2 month'){
    setAmt(prevPrice * 2);
}
if(e.target.value == '3 month'){
    setAmt(prevPrice * 3);
}
    }
  return (
    <div className='pay1'>
     <h1 className='heading'>Payment Details</h1>
     <label className='pay2'>*Enter Your Name</label>
    <input type="text" className='pay3'></input>
    <label className='pay2'>*Enter your phone number</label>
    <input type='text' className='pay3'></input>
    <label className='pay2'>*Rent For how many months</label>
    <select className='pay4' onChange={days}>
        <option></option>
        <option>1 month</option>
        <option>2 month</option>
        <option>3 month</option>
    </select>
    <label className='pay2'>*From - To</label>
    <input type='date' className='pay3'></input><input type='date' className='pay3'></input>
    <StripeCheckout
        name='payment'
        amount={amt * 100}
        token={onToken}
        currency='INR'
        stripeKey="pk_test_51OWYLWSEC2l5QObEQYa7mLg1hfCGjhL4731L1vuXSBTrLSYEBXehokS5xsLh7cCZJDp8rQSuhVbAaTSA9r4uxhdc00UfFeBLLp"
      >
        <button className='bst'>Pay {amt}</button>
      </StripeCheckout>
    </div>
  );
}
