import "./Why.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faBed,faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons";

function Why() {
  return (
    <div className="why">
      <div className="whyContainer">
        <div className="whyContainerList">
          <div className="whyContainerListItem">
            
            <h2><b>Room</b></h2>
            <p>
            "Available room for rent in a cozy, well-lit space with shared amenities. Convenient location, close to public transport and essential services. Furnished with essentials for a comfortable stay. Suitable for professionals or students seeking a clean and affordable living arrangement. Inquire for details and viewing."
            </p>
          </div>
          <div className="whyContainerListItem">
            <h2><b>Shop Allocation</b></h2>
            <p>
            "Prime retail space available for rent in a bustling commercial area with high foot traffic. Spacious and versatile layout suitable for various businesses. Prominent storefront with great visibility and signage opportunities. Ideal for entrepreneurs looking to establish or expand their presence. Contact for lease details and to schedule a viewing."
            </p>
          </div>
          <div className="whyContainerListItem">
           
            <h2><b>PG & Guest Houses</b></h2>
            <p>
            "Comfortable PG and guest house rooms available for rent. Well-furnished spaces with amenities for a convenient stay. Suitable for students or professionals seeking a cozy and affordable living arrangement. Located in a safe and accessible neighborhood. Contact for more information and to book a room."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
