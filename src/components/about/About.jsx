import "./About.scss";
import image from  "../../components/front.jpg"
function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="left">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="right">
          <h1>About Us</h1>
          <p>
          Welcome to our Room Rent Management Inn! We are dedicated to providing seamless and convenient accommodations for our guests. With a focus on efficiency and hospitality, our team ensures a comfortable stay while managing rentals with precision. Our commitment lies in offering a harmonious blend of quality service and a hassle-free experience, making your stay with us both enjoyable and memorable.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
