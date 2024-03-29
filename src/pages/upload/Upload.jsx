import "./Upload.scss";
import NavBar from "../../components/navBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [category, setCategory] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [price, setPrice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

 /* const handleUpload = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      category,
      roomNumber,
      price,
      phoneNumber,
      status,
      city,
      district,
      street,
    };

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      await axios.post("http://localhost:5000/api/upload", formData);

      try {
        await axios.post("http://localhost:5000/api/services", newPost);
        navigate("/services");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log("Error uploading images:", error);
    }
  };*/

  return (
    <>
      <NavBar />
      <div className="upload">
        <div className="uploadContainer">
          <h1>Upload your House, Shop or Room Here</h1>
          <div className="imageFolder">
            {/* display selected images */}
            {selectedFiles.map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} alt="" />
            ))}
          </div>
          <form >
            <div className="label">
              <label htmlFor="">Upload photos</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="label">
              <label htmlFor="">Category</label>
              <input
                type="text"
                placeholder="Full house, apartment or room"
                required
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Number of Rooms</label>
              <input
                type="text"
                placeholder="Number of Rooms"
                required
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">price</label>
              <input
                type="text"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Reach Me Here</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Status</label>
              <input
                type="text"
                placeholder="Available or Unavailable"
                required
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">City</label>
              <input
                type="text"
                placeholder="City"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">District</label>
              <input
                type="text"
                placeholder="District"
                required
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="label">
              <label htmlFor="">Street</label>
              <input
                type="text"
                placeholder="Street"
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <button>Upload</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Upload;
