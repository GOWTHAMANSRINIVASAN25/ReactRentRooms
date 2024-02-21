import "./Upload.scss";
import NavBar from "../../components/navBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Tenant() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState([]);
  const [phone, setPhone] = useState("");
  const [income, setIncome] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [address, setAddress] = useState("");
  const [property, setProperty] = useState([]);
  const [police, setPolice] = useState([]);
  const[doc,setDoc]=useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const[street,setStreet]=useState("");
  const[city,setCity]=useState("");
  const[pincode,setPincode]=useState("");


  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const aadharProofSubmitted = selectedFiles.some(file => file.name.includes('Aadhar'));


    // Navigate to Tenant_Details page and pass formData
    navigate('/Tenant_Details', { state: { 
      name:name,
      p_no:phone,
      adhar:aadhar,
     } });
  };
 
  return (
    <>
      <NavBar />
      <div className="upload">
        <div className="uploadContainer">
          <h1>Upload Proof Verification</h1>
          <div className="imageFolder">
            {/* display selected images */}
            {selectedFiles.map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} alt="" />
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="label">
              <label htmlFor="">Dealer Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
            <div className="label">
              <label htmlFor="">Upload Aadhar</label>
              <input
                type="file"
               multiple
                required
                onChange={(e)=>setAadhar(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Phone_Number</label>
              <input
                type="text"
                placeholder="+91"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Income proof</label>
              <input
                type="file"
               multiple
                required
                onChange={(e)=>setIncome(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Upload your photo</label>
              <input
                type="file"
               
                required
                onChange={handleFileChange}
              />
            </div>
            <div className="label">
              <label htmlFor="">Street</label>
              <input
                value={street}
                type="text"
                placeholder="Enter your Street"
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">City</label>
              <input
                value={city}
                type="text"
                placeholder="Enter your City"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Pincode</label>
              <input
                value={pincode}
                type="text"
                placeholder="Enter Pincode here"
                required
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Police Verification</label>
              <input
                type="file"
               
                required
                onChange={(e)=>setPolice(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Land Proof</label>
              <input
                type="file"
             
                required
                onChange={(e)=>setProperty(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Legal Douments</label>
              <input
                type="file"
                
                required
                onChange={(e)=>setDoc(e.target.value)}
              />
            </div>
            <button className="up">Upload Proof</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Tenant;
