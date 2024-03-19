import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./home/Home"
import About from "./Components/aboutus/About";
import Mainrenter from "./Components/Main_Renter/Mainrenter";
import Popup from "./Components/Main_Renter/Popup";
import Car_choose from "./Components/Selectcar/Car_choose";
import Maincar from "./Components/innercar/Maincar";
import MainOwner from "./Components/Mainowner/MainOwner";
import UpdateProfile from "./Components/Updateprofile/UpdateProfile";

let App = () =>{
   return(
      <div>
     
      {/* <Router>
      <Heading/> */}
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="/Mainrenter" element={<Mainrenter/>}></Route>
      <Route path="/Car_choose" element={<Car_choose/>}></Route>
      <Route path="/Maincar" element={<Maincar/>}></Route>
      <Route path="/MainOwner" element={<MainOwner/>}></Route>
      <Route path="/Popup" element={<Popup/>}></Route>
      <Route path="/UpdateProfile" element={<UpdateProfile/>}></Route>
      
      </Routes>
      
      {/* </Router> */}
      
      </div>
  
  
   );
   
}

export default App;
