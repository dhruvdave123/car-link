import React from 'react'
import './Role.css'
import Heading_reg from '../Heading_reg'
import { Link } from 'react-router-dom'
function Role() {
  return (
    <div className='container_role_main'>
        <Heading_reg/>
        <div className='role_main'>
       
        
            <div className='owner_role'>

            </div>
            
            <div className='renter_role'>

            </div>
            
            
        </div>
        <Link to="/MainOwner" className='ownerlink'><p className='owner_role_btn'>Owner</p></Link>
        <Link to="/Mainrenter" className='renterlink'><p className='renter_role_btn'>Renter</p></Link>
    </div>
  )
}

export default Role