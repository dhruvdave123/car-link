import React from 'react'
import Heading from '../Heading'
import './Car_choose.css'
import Filter from './Filter'
import Filtercarselect from './Filtercarselect'
import Popup from '../Main_Renter/Popup'
import { User } from 'lucide-react'
import { useState } from "react";
import { CircleUserRound } from 'lucide-react';
function Car_choose() {
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
    <div className='container_carchoose'>
      <Heading headingarray={headingarray}/>
      <div className='fliterrenter'>
      <Filter/>
       
      <Filtercarselect/>
      </div>
      
    </div>
  )
}
const data=[
  {
      img : './images/maruti(2).JPG',
      type:'CNG',
      name:'Maruti Suzuki',
      price: '300$/Day'
  },

  {
      img: './images/ev.JPG',
      type:'EV',
      name:'Tata Nexon EV',
      price: '400$/Day'
  },


 

]
export default Car_choose