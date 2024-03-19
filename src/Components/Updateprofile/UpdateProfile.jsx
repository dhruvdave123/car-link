import React from 'react'
import './UpdateProfile.css'
import { CircleUserRound } from 'lucide-react';
const emailiinputstyle={
  height: "30px",
  border: "1px solid #ccc",
  borderradius: "4px",
};
function UpdateProfile() {
  return (
   
    <div className='container_updateprofile'>
        <div className='update_page'>
        <div className='upperheader'>
        <p className='edittxt'>Edit Profile</p>
        <p><CircleUserRound className='updateicons' size={50}/></p>

        </div>
        <form>
            <div className='formname'>
                <label id='fname'>First Name</label><br></br>
                <label id='lname' className='lnamelabel'>Last Name</label><br></br>
                
            </div>
            <div className="nameinput">

            <input type="text" id='fname' className='fnameinput' style={{height:"30px"}}></input><br></br>
            <input type="text" id='lname' className='lnameinput' style={{height:"30px"}}></input>
            </div>
            <br></br>
            
            <label id="email" className='emaillabel'>Email</label><br></br>
            <input type="email" id="email" className='emailinput'style={emailiinputstyle}></input>
            <br></br>
            <br></br>
            <label id='passwordinput'>Password</label><br></br>
            <input type="password" id="passwordinput" style={emailiinputstyle}></input>
            <br />
            <br/>
            <label id='contactnumber'>Contact Number</label><br></br>
            <input type="tel" id="contactnumber" style={emailiinputstyle}></input>
            <br/>
            <div>
            <input type="submit" value="Cancel" className='cancelbtn'/>
            <input type="submit" value="Edit" className='cancelbtn'/>
            </div>
        </form>
        </div>
    </div>
  )
}

export default UpdateProfile