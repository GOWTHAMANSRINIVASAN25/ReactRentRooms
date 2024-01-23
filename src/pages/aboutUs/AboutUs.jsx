import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import image from  "../../components/front.jpg"
function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="aboutContainer">
          <div className="left">
            <img
              src={image}
              alt="text"
            />
            {/* <img src={"my-app/public/front.jpg"} alt="Front" /> */}

            image
          </div>
          <div className="right">
            <h1>About Us</h1>
            <p>
            Welcome to our Room Rent Management Inn! We are dedicated to providing seamless and convenient accommodations for our guests. With a focus on efficiency and hospitality, our team ensures a comfortable stay while managing rentals with precision. Our commitment lies in offering a harmonious blend of quality service and a hassle-free experience, making your stay with us both enjoyable and memorable.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

