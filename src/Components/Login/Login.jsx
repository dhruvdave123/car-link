import React from 'react'
import "./Login.css"
import Heading from '../Heading'
import Input_box from '../Input_box'
import { Link } from 'react-router-dom'
import Heading_reg from '../Heading_reg'
function Login() {
  return (
    <div className='container_login'>
       {/* <Heading headingarray={headingarray}/> */}
       <Heading_reg></Heading_reg>

       <div className='container_form'>
        <div className='container_info'>
            <h1>Login </h1>
            <form>
            <div className='input_email_pass_login'>
            <Input_box label="Email id" type="email" />
           <Input_box label="password" type="password" />
        </div>
        <div className='signup_forgot'>
          <p className='signup_login'>Sign up</p>
          <p className='forgotpass_login'> Forgot Password</p>
        </div>
          <button className='submit_login_btn'><Link to="/MainOwner" className='linktomainownerlogin'>Login</Link></button>
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
export default Login