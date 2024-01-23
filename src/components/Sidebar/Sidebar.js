import Category from "./Category/Category";
import Price from "./Price/Price";
import Rooms from "./Rooms/Rooms";
import "./Sidebar.css";
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>GT Rents</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
       <Rooms handleChange={handleChange}/>
      </section>
    </>
  );
};

export default Sidebar;