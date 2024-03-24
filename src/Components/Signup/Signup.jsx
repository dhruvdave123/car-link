import React from 'react'
import "./Signup.css"
import Heading from '../Heading'
import Input_box from '../Input_box';
import Heading_reg from '../Heading_reg';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className='container_signup'>
        {/* <Heading headingarray={headingarray}/> */}
        <Heading_reg/>
        <div className='container_form'>
        <div className='container_info'>
            <h1>Signup </h1>
            <form>
            <div className='input_email_pass_signup'>
            <Input_box label="Name"/>
            <Input_box label="Email id" type="email" />
        <Input_box label="password" type="password"  />
        
        </div>
       
         <button className='submit_login_btn'><Link to="/Role" className='linktorole'> Signup</Link></button>
            </form>
        </div>
       </div>
    </div>
  )
}
const headingarray=[
    {
       name:'CarLink'
    },
    {
      Profile:" "
  
    },
    {
      contact:"Contact Us"
    },
    {
      read:"Read More"
    },
    {
      about:"About us"
    },
    {
      Book:"How to Book"
    }
  
  ];
export default Signup