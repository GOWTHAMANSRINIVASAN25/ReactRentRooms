import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons'
import "./Head.css"
export const Head = () => {
  return (
   <div className='head'>
    <h2 className='ah'>GT Rents</h2>
    <p className='ph'><FontAwesomeIcon icon={faUser} />Admin </p>

   <Link to="/" className='li'><FontAwesomeIcon icon={faRightFromBracket}  className='f'/>Logout</Link>
   </div>
  )
}
