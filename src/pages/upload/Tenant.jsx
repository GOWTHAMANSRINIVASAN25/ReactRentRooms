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



  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming Aadhar proof is mandatory for submission
    const aadharProofSubmitted = selectedFiles.some(file => file.name.includes('Aadhar'));


    // Navigate to Tenant_Details page and pass formData
    navigate('/Tenant_Details', { state: { 
      name:name,
      p_no:phone,
      address:address,
      adhar:aadhar,
     } });
  };
 
  return (
    <>
      <NavBar />
      <div className="upload">
        <div className="uploadContainer">
          <h1>Upload Proof Veriication</h1>
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
                type="number"
                placeholder="+91"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Upload Bank or Income proof</label>
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
              <label htmlFor="">Address</label>
              <input
                type="text"
                placeholder="Enter your Address"
                required
                onChange={(e) => setAddress(e.target.value)}
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
            <button>Upload</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Tenant;
