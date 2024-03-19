import React, { useState } from 'react';
import './About.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function About() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTextClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };
  return (

    <>
        <p>
      <h2 onClick={handleTextClick}>End Date: {selectedDate.toLocaleDateString()}</h2>
      {showCalendar && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>
      )}
     
    </p>
   
    </>

  )
}

export default About