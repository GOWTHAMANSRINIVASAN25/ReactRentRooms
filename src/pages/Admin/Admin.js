import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from '../../components/admin/Head/Head';
import { Grid } from '../../components/admin/Grid/Grid';
import { Cart } from '../../components/admin/cart/Cart';

function Admin() {
  return (
    <>
    
 <Head/>


<Grid/>
<Cart/>

 </>
  );
}
export default Admin;
