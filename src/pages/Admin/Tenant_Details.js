// Tenant_Details.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TenantDetails.css';
import { Head } from '../../components/admin/Head/Head';
import { Grid } from '../../components/admin/Grid/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function TenantDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, p_no,adhar } = location.state || {};
console.log(name);
 /* const [tenantData, setTenantData] = useState([{
    u_name:'',
    u_phone:'',
    u_address:'',
    u_adhar:'',
  }]);
 
  

  
  const handleAccept = (index) => {
    console.log('Accept button clicked for row:', index);
    setTenantData((prevData) => [
      ...prevData,
      {
        u_name:name,
        u_phone:p_no,
        u_address:address,
        u_adhar: adhar,
      },
    ]);

    // Navigate to '/tenant'
    navigate('/tenant');
  };*/

  return (
    <>
      <Head />
      <Grid />
      <div className='st'>
        <h1 className='h'>Tenant Details</h1>
        <div className='search-bar'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='search' placeholder='Enter your Search' className='sea'></input>
        </div>
        <div className='tenant-details-container'>
          <table className='tenant-details-table'>
            <tbody>
              <tr>
                <th className='label-column'>S.NO</th>
                <th className='label-column'>Name</th>
                <th className='label-column'>Phone_Number</th>
                <th className='label-column'>Aadhar Proof Submitted</th>
                <th className='label-column'>Consolidate</th>
              </tr>
           <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{p_no}</td>
          <td>Yes</td>
          <td><button>Accept</button>{' '}<button>Reject</button></td>
           </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TenantDetails;
