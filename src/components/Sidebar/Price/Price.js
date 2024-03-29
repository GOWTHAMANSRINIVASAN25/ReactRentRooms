import Input from "../../Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="checkbox" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="Available Rs.3000-Rs.5000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="Available Rs.5000-Rs.8000"
          name="test2"
        />

      

        <Input
          handleChange={handleChange}
          value={200}
          title="Over Rs.8000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;