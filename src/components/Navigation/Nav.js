
import "./Nav.css";
import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Nav = ({ handleInputChange, query }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
    <nav>
      <div className="nav-container">
      
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter property/Location"
        
        />
        <div className="nav2">
      <Link to='/' className="yy">Home</Link>
      <Link to='/aboutUs' className="yy"> AboutUs</Link>
      <Link to='/contactUs' className="yy"> contactUs</Link>
     
    </div>
    <div className="dropdown">
          <p className="yz" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} /> User &#9660; {/* Unicode for down arrow */}
          </p>
          {dropdownVisible && (
            <div className="dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/bookings">My Bookings</Link>
            </div>
          )}
      </div>
      </div>
       
     
    </nav>
    </>
  );
};

export default Nav;