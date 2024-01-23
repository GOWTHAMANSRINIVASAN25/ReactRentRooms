import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="left">
          <h2>
            Welcome to Our Room Rental System,Book your rooms for your convience
          </h2>
        </div>
        <div className="right">
          <img
            src="https://images.pexels.com/photos/11264535/pexels-photo-11264535.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
