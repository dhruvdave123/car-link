import React, { useRef, useState } from 'react';
import './Popup.css'
import { X } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import UpdateProfile from '../Updateprofile/UpdateProfile';
function Popup({onClose}) {
const Popref=useRef(null);
const closeModal = (e) =>{
  if(Popref.current === e.target){
    onClose();
  }
}
  return (
    <div ref={Popref} onClick={closeModal} className='containerpopup' >
      
      <p className='closebtn' onClick={onClose}><X color='black'/></p>
      <p className='profilepopup'><CircleUserRound color='black' size={70}/></p>
      <h1 className='usertextpopup'>Hi,User!</h1>
      <div className='container_btn'>
        <div>
           
          <Link to="/UpdateProfile"> <p className='updatepopup'><UserRoundPlus className='updateicon' size={20} color='black'/><p className='spantxt'>Edit Profile</p></p></Link>
        </div>
        <div>
           <Link to="/"> <p className='signoutpopup'><LogOut size={20} className='updateicon' color='black'/><p className='spantxt'>Sign out</p></p></Link>
        </div>
      </div>
    </div>
     
  );
}

export default Popup;
