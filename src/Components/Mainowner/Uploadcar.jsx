import React, { useState } from 'react';
import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';

function Uploadcar() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    plate_no: '',
    puc_no: '',
    rc_no: '',
    validation_date:'',
    Startdate:'',
    Enddate:'',
    main_car_img:'',
    ex_car_img1:'',
    ex_car_img2:'',
    in_car_img1:'',
    in_car_img2:'',
    car_name:'',
    
  });


  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data (e.g., send to server)
    console.log('Submitted data:', formData);
    
   
  };

  return (
    <div>
      {currentStep === 1 && (
        <>
        <FormSection1
          formData={formData}
          handleChange={handleChange}
          onNext={handleNext}
         
        />
      
    
      </>
      )}
      {currentStep === 2 && (
        <>
        <FormSection2
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          onPrevious={handlePrevious}
        />
      
    

     
    </>
      )}
    </div>
  );
}

export default Uploadcar;
