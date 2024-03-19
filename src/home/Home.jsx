import "./Home.css"
import Heading from "../Components/Heading"
// import Heading from "./Components/Heading"
import Slogan from "../Components/Slogan"
import Login_main from "../Components/Login_main"
import Side from "../Components/Side"
import Working from "../Components/Working"
import Promotion from "../Components/Promotion"
import Choose from "../Components/Choose"
import Brands from "../Components/Brands"
import Searchrenter from "../Components/Searchrenter"
import Cities from "../Components/Main_Renter/Cities"
function Home() {
  
  return (
    <div class="full">
    
   <Heading headingarray={headingarray}/>
   
   <div class="main">
   <div class="mainslogan">
   <Slogan/>
   </div>
   <div class="mainside">
   <Side/>
   </div>
   </div>
   <Login_main/>
   <main_image/>
   <Working/>
   <Promotion/>
   <Choose/>
   <Brands/>
   <Cities/>
   {/* <Choose/>
   <Promotion/> */}
  
   {/* <Searchrenter></Searchrenter> */}
   </div>
  );
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


export default Home