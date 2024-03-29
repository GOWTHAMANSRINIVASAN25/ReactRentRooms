import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import "./Contact.scss";
import image from  "../../components/front.jpg"
function Contact() {
  return (
    <>
      <NavBar />
      <div className="contact">
        <div className="contactContainer">
          <div className="left">
            <h1>We are Available and you can reach us any time here.</h1>
            <p>
              email address: <strong>gowtham234@gmail.com</strong>
            </p>
            <p>
              Phone number <strong>0768086183</strong>{" "}
            </p>
            <form action="">
              <h2>Or you can fill this form below</h2>
              <div className="form">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="email" />
              </div>
              <div className="form">
                <label htmlFor="">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="write message..."
                ></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
          <div className="right">
            <img
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
