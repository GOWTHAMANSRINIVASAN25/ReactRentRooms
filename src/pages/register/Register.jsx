import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./Register.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


function Register() {
  const[uname,setUname]=useState('');
  const[uemail,setUemail]=useState('');
  const[upass,setUpass]=useState('');
  const[uphoto,setUphoto]=useState([]);
  const[uphone,setUphone]=useState('');
  const navigate = useNavigate();

 
function onLogin(){
navigate('/signIn',{
  state:{
    username:uname,
    useremail:uemail,
    userphoto:uphoto,
    userphone:uphone,
    userpassword:upass,
  }
})
}

 /* const handleRegister = async (e) => {
    e.preventDefault();

    dispatch({ type: "REGISTER_START" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        credentials
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/signIn");
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.message });
    }
  };*/

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
            <h1>Sign Up Here.</h1>
            <form action="">
              <div className="formLabel">
                <label htmlFor="">Username</label>
                <input
                  value={uname}
                  type="text"
                  id="username"
                  placeholder="name"
                  onChange={(e)=>{setUname(e.target.value)}}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="">Email</label>
                <input
                  value={uemail}
                  type="email"
                  id="email"
                  placeholder="email"
                  onChange={(e)=>{setUemail(e.target.value)}}
                />
              </div>
              <div className="formLabel">
                <label htmlFor="">Password</label>
                <input
                  value={upass}
                  type="password"
                  id="password"
                  placeholder="password"
                  onChange={(e)=>{setUpass(e.target.value)}}
                />
              </div>
              <div className="formLabel">
             <label htmlFor="">Upload Photo</label>
            <input value={uphoto} type="file" placeholder="Upload your photo" onChange={(e)=>{setUphoto(e.target.value)}}></input>
              </div>
              <div className="formLabel">
             <label htmlFor="">Phone_Number</label>
             <input 
               value={uphone}
               type="text"
               placeholder="Enter phone number"
               onChange={(e)=>{setUphone(e.target.value)}}
               />
              </div>
              <button onClick={onLogin}>
                JOIN
              </button>
              <p>
                already have an account? <Link to="/signIn">sign in here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
 