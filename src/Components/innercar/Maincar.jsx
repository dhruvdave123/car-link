import React from 'react'
import Heading from "../Heading";
import './Maincar.css'
import Carinnerinfo from './Carinnerinfo';
import Popup from '../Main_Renter/Popup'
import { User } from 'lucide-react'
import { CircleUserRound } from 'lucide-react';
import { useState } from 'react';
function Maincar() {
  
  const [showpopup,setShowpopup]=useState(false);
  const headingarray=[
    {
       name:'CarLink'
    },
    {
      
     profile: <>
     <p onClick={()=>setShowpopup(true)}><CircleUserRound size={40}/></p>
     {showpopup &&  <Popup onClose={()=>setShowpopup(false)}/> }
     </> 
     
    
    },
  
    
    {
      contact:"Contact Us"
    },
    {
      read:"Read More"
    },
    {
      about:"Contact Us"
    },
    {
      Book:"How to Book"
    }
  
  ];
  return (
    <div className='container_maincar'>
    <Heading headingarray={headingarray}/>
    <Carinnerinfo/>
    </div>
  )
}

export default Maincar