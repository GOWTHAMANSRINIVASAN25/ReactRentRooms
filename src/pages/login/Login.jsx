import React, { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import './lg.css';
function Login() {
  //const [credentials, setCredentials] = useState({
   // username: "",
  //  password: "",
  //});
  const { setUserInformation } = useUser();
const[sel,setSel]=useState("");
const[lname,setLname]=useState('');
const[lpass,setLpass]=useState('');
  const navigate = useNavigate();

const location=useLocation();
const{username,useremail,userphoto,userphone,userpassword}=location.state || {};

  

  const handleButtonClick = () => {
    if ((sel.toLowerCase() === 'customer') && ((lname==username) && (lpass==userpassword))) {
      setUserInformation({
        usersname:username,
        usersphoto: userphoto,
        usersemail: useremail,
        usersphone: userphone,
      });
      navigate('/catalog'); 
    } else if ((sel.toLowerCase() === 'admin') && ((lname==username) && (lpass==userpassword))) {
      navigate('/admin'); 
    } else {
     
      alert("Register first or you miss to fill the field.");
    }
  };



 

  return (
    <>
      <NavBar />
      <div className="register">
        <div className="registerContainer">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
          <div className="right">
            <h1>Sign In Here.</h1>
            <form action="">
              <div className="formLabel">
                <label htmlFor="">Username</label>
                <input
                  value={lname}
                  type="text"
                  id="username"
                  placeholder="name"
                  onChange={(e)=>{setLname(e.target.value)}}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="">Password</label>
                <input
                  value={lpass}
                  type="password"
                  id="password"
                  placeholder="password"
                  onChange={(e)=>{setLpass(e.target.value)}}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="">Login As</label>
                <select value={sel} onChange={(e)=>setSel(e.target.value)} className="ssl">
                  <option placeholder="Select value"></option>
                  <option>Customer</option>
                  <option>Admin</option>
                </select>
              </div>
              <button onClick={handleButtonClick}>
                SIGN IN
              </button>
             
              <p>
                You don't have an account?{" "}
                <Link to="/signUp">sing up here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
