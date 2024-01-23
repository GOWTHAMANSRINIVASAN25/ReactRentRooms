import React from 'react'
import { faWhatsapp,faFacebook,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Foot2.css";
export const Foot2 = () => {
  return (
<div className='f2'>
<h2>Follow our media</h2>
<div className='pf'>
<span className='sp'><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></span>
<span className='sp'><FontAwesomeIcon icon={faFacebook}/></span>
<span className='sp'><FontAwesomeIcon icon={faInstagram}/></span>
<span className='sp'><FontAwesomeIcon icon={faXTwitter}/></span>
</div>
<p>@GT Rental System 2024.Reserved</p>
</div>
  );
}
