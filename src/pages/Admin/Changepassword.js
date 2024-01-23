import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Head } from '../../components/admin/Head/Head';
import { Grid } from '../../components/admin/Grid/Grid';
import './changepassword.css';
export const Changepassword = () => {
    const nav=useNavigate();
    function updation(){
        nav('/admin');
        alert("Password Updation Success");
    }
  return (
    <>
    <Head></Head>
    <Grid/>
   <div className='c1'>
    <h1 className='c2'>*Update Your Password</h1>
   
    <label>*Email.id</label>
    <input type='email' placeholder='Enter Your email Id' className='c3'required ></input>
    <label>*Current Password</label>
    <input type='password' placeholder='Enter password' className='c3' required></input>
    <label>*New Password</label>
    <input type='password' placeholder='Enter the new Password' className='c3' required></input>
    <label>*Confirm Password</label>
    <input type='password' placeholder='Confirm the password' required className='c3' ></input>
     <button onClick={updation} className='ubn'>Update the password</button>
    
   </div>
   </>
  );
}
