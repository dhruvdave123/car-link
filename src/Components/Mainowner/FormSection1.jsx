import React from 'react';
import './FormSection.css'
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const inputstyle1={
  height: "25px",
  border: "1px solid #ccc",
  borderradius: "10px",
};
function FormSection1({  }) {
  const [formData, setFormData] = useState({
    plate_no: '',
    puc_no: '',
    rc_no: '',
    validation_date:'',
    Startdate:'',
    Enddate:'',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };
  return (
    <div className='container_main_form1'>
      <div className='container_form1'>
      <div className='vehicleinfotext'>
        <h1 className='carinfotext'> Car Information</h1>
        <p><Car className='updateicons' size={50}/></p>
      </div>
      <div className='input_label_plate'> 
      <label htmlFor="plate_no" className='vehicleplateno'>Vehicle Plate No</label>
      <label htmlFor="puc_no">PUC No:</label>
      </div>
      <div className='input_field_plate'>
      <input
        type="number"
        id="plate_no"
        name="plate_no"
        value={formData.plate_no}
        onChange={handleChange}
        style={inputstyle1}
        className='input_vehicle_plate'
        required
      />
      <br />
      
      <input
        type="number"
        id="puc_no"
        name="puc_no"
        value={formData.puc_no} // Typo fixed: value should be formData.age
        onChange={handleChange}
        required
      />
      </div>
      <br />
      <div>
        
      </div>
      <div className='input_label_rc'>
      <label htmlFor="rc_no" className='input_label_rcno' >RC No:</label>
      <label htmlFor="validation_date">Validation of vehicle:</label>
      
      </div>
      <div className='input_field_rc'>
      <input
       type="text"
       id="rc_no"
       name='rc_no'
       value={formData.rc_no} // Typo fixed: value should be formData.age
       onChange={handleChange}
       style={inputstyle1}
       className='input_field_rcno'
       maxlength="15"  placeholder='GJ23 99898989384'
       pattern="[A-Z]{2}\d{13}"
       required
     ></input>
      
     <input
       type="date"
       id="validation_date"
       name='validation_date'
       value={formData.validation_date} // Typo fixed: value should be formData.age
       onChange={handleChange}
       style={inputstyle1}
       className='input_field_validation'
       required
     >

     </input>
      </div>
      <br/>
    <div className="input_label_date">
    <label htmlFor='Startdate'className='input_label_startdate'>Start Date: </label>
    <label htmlFor='Enddate'>End Date: </label>
    </div>
     <div className="input_field_date">
      
     <input
       type="date"
       id="Startdate"
       name='Startdate'
       value={formData.Startdate} // Typo fixed: value should be formData.age
       onChange={handleChange}
       className='input_field_startdate'
       style={inputstyle1}
       required
     ></input>
      
     
    
     <input
       type="date"
       id="Enddate"
       name='Enddate'
       className='input_field_startdate'
       value={formData.Enddate} // Typo fixed: value should be formData.age
       onChange={handleChange}
       style={inputstyle1}
       required
     ></input>
     </div>
    
     <br/>
       <button type="button"  className='nextbtn'> <Link to="/Uploadcar">Next</Link></button>
     <br/>

    </div>
    </div>
    
  );
}

export default FormSection1;
