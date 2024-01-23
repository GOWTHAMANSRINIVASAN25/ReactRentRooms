import "./Rooms.css";
import Input from "../../Input";

function Rooms({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Number of Rooms</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="1 room"
          title="1 Room"
          name="test1"
        />
        <Input
          handleChange={handleChange}
          value="2 rooms"
          title="2 Room"
          name="test1"
        />
 
      
      </div>
    </div>
  );
}

export default Rooms;