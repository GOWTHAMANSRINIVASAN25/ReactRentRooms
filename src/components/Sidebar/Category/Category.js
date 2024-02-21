import "./Category.css";
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="checkbox" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="rooms"
          title="Rooms"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="shops"
          title="Shops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="pg"
          title="PG Guest Houses"
          name="test"
        />
      
      </div>
    </div>
  );
}

export default Category;