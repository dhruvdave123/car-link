
import "./Mainrenter.css"
import Heading from "../Heading";
import Searchrenter from "../Searchrenter"
import Topbrands from "./Topbrands";
import Toprated from "./Toprated";
import Offers from "./Offers";
import Review from "./Review";
import Question from "./Question";
import Cities from "./Cities";
import Popup from "./Popup";
import { User } from 'lucide-react'
import { useState } from "react";
import { CircleUserRound } from 'lucide-react';
function Mainrenter() {
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
   
    <div className="mainrenter">
      <div className="mainhead">
      <Heading headingarray={headingarray}/>
      </div>
      <div className="search">
      

      <Searchrenter/>
      
      <Topbrands/>
      <Toprated/>
      <Offers/>
      <Question/>
      <Review/>
      <Cities/>
     
      </div>
     
    </div>


  );
}

export default Mainrenter