import React from 'react'
import { Link } from 'react-router-dom'
import { faGauge,faUser,faBed,faFile,faReceipt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Grid.css'
export const Grid = () => {
  return (
   <div className='sidebar-admin'>
<Link to="/admin" className='l' ><FontAwesomeIcon icon={faGauge} />Dashboard</Link>
<Link className='l'><FontAwesomeIcon icon={faUser} />Customers</Link>
<Link to="/upload"  className='l'><FontAwesomeIcon icon={faBed} />Upload Rooms</Link>
<Link to="/tenant" className='l'><FontAwesomeIcon icon={faFile} />Upload Proof</Link>
<Link className='l'><FontAwesomeIcon icon={faReceipt} />Payment Details</Link>
<Link to="/Tenant_Details"  className='l'><FontAwesomeIcon icon={faUser} />Renter Details</Link>
<Link to='/changepassword' className='l'>Update password</Link>
   </div>
  );
}
