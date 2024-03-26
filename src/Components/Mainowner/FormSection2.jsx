import React from 'react';
import './FormSection2.css'
import { useState
 } from 'react';
 import Dropdown from './Dropdown';
 import { Car } from 'lucide-react';
 import { Link } from 'react-router-dom';
 const inputstyle={
  height: "20px",
  border: "1px solid #ccc",
  borderradius: "4px",
  
};
function FormSection2({ formData, handleChange, onSubmit,onPrevious }) {
  const [dropData, setDropData] = useState()
  const handleChangedrop = (event) => {
    setDropData({ ...formData, [event.target.name]: event.target.value });
    
  };
  const segment=[
    { value: 'Hatchback', label: 'Hatchback' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'SUV', label: 'SUV' },
  ]

  const city=[
    { value: ' Mumbai', label: ' Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Surat', label: 'Surat' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Jaipur', label: 'Jaipur' },
   
  ]
  
  const fuel_type = [
    { value: 'EV', label: 'EV' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'CNG', label: 'CNG' },
    { value: 'Petrol', label: 'Petrol' },
    { value: 'Diesel', label: 'Diesel' },
  ];

  const transmission_type=[

    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },

  ];
  return (
    <div className='container_main_form2'>
      <div className='container_form2'>
      <div className='vehicleinfotext'>
        <h1 className='carinfotext'> Car Information</h1>
        <p><Car className='updateicons' size={50}/></p>
      </div>
      <label htmlFor='main_car_img' className='mainimage'>Main Image </label>
      
      <input
       type="file"
       id="main_car_img"
       name='main_car_img'
       value={formData.main_car_img} // Typo fixed: value should be formData.age
       onChange={handleChange}
       required
     ></input>
     <br/><br/>
     <label htmlFor='ex_car_img1' className='ex_img_label'>Exterior Images</label>
     <br></br>
     <div className='ex_img'>
      <input
       type="file"
       id="ex_car_img1"
       name='ex_car_img1'
       value={formData.ex_car_img1} // Typo fixed: value should be formData.age
       onChange={handleChange}
       required
     ></input>
     <br/>
     <input
       type="file"
       id="ex_car_img2"
       name='ex_car_img2'
       value={formData.ex_car_img2} // Typo fixed: value should be formData.age
       onChange={handleChange}
       required
     ></input>
     </div>
     <br/>
     <label htmlFor='in_car_img1' className='in_img_label'>Interior Images</label>
     <br/>
     <div className='in_img'>
      <input
       type="file"
       id="in_car_img1"
       name='in_car_img1'
       value={formData.in_car_img1} // Typo fixed: value should be formData.age
       onChange={handleChange}
       required
     ></input>
     <br/>
     <input
       type="file"
       id="in_car_img2"
       name='in_car_img2'
       value={formData.in_car_img2} // Typo fixed: value should be formData.age
       onChange={handleChange}
       required
     ></input>
     </div>
     <br/>
     <label htmlFor='car_name' className='carnamelabel'>Car Modal Name: </label>
      <input
       type="text"
       id="car_name"
       name='car_name'
       value={formData.car_name} // Typo fixed: value should be formData.age
       onChange={handleChange}
       style={inputstyle}
       required
     ></input>
     <br/><br/>
     <Dropdown
         dropData={dropData}
         handleChange={handleChangedrop}
         label="City"
         options={city}
         required
    />
    <br/>
          <Dropdown
         dropData={dropData}
         handleChange={handleChangedrop}
         label="Segment"
         options={segment}
         required
    />
    <br/>
            <Dropdown
         dropData={dropData}
         handleChange={handleChangedrop}
         label="Fuel Type"
         options={fuel_type}
         required
    />
    <br/>
        <Dropdown
         dropData={dropData}
         handleChange={handleChangedrop}
         label="TransMission Type"
         options={transmission_type}
         required
    />
    <br/>
     <button type="button" className='submitbtn'> <Link to="/FormSection1">Previous</Link></button>
      <button type="submit" onClick={onSubmit} className='submitbtn'>Submit</button>
    </div>
    </div>
  );
}

export default FormSection2;
