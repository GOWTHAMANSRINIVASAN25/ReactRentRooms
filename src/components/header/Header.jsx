
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="left">
        <h1>Welcome to Our Website!</h1>
        <p>Discover comfort and convenience with our room rental services. Whether you're looking for a cozy space to call your own or want to list your room for rent, we've got you covered.</p>
        <p>Explore our listings and find the perfect room tailored to your needs. If you have a room to spare, let us help you connect with potential tenants seamlessly.</p>
        <p>Your comfort is our priority, and we're excited to assist you in finding or renting the ideal space.</p>
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
