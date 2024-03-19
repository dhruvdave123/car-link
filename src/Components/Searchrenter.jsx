import './Searchrenter.css'
import Heading from './Heading'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'
function Searchrenter() {
  const [showstartCalendar, setstartShowCalendar] = useState(false);
  const [selectedstartDate, setSelectedstartDate] = useState(new Date());

  const handleTextstartClick = () => {
    setstartShowCalendar(!showstartCalendar);
  };

  const handlestartDateChange = (date) => {
    setSelectedstartDate(date);
    setstartShowCalendar(false);
  };
  ///////////////////////////////////////////////////////
  const [showendCalendar, setendShowCalendar] = useState(false);
  const [selectedendDate, setSelectedendDate] = useState(new Date());

  const handleTextClick = () => {
    setendShowCalendar(!showendCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedendDate(date);
    setendShowCalendar(false);
  };
  return (
    <div className='searchrenter'>
       <div className='searchstate'>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16" className='mapicon'>
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
</svg>
<p className='searchlocationrenter'>Search Location</p>

       </div>
       <div className="renterdate">
         <div className='startdate'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" className='calendericon'>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
<p className='startdateinput'>
<p onClick={handleTextstartClick}>Start Date: {selectedstartDate.toLocaleDateString()}</p>
      {showstartCalendar && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <Calendar
            onChange={handlestartDateChange}
            value={selectedstartDate}
          />
        </div>
      )}
</p>
         </div>
         <div className='enddate'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" className='calendericon'>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
</svg>

<p className='startdateinput'>
      <p onClick={handleTextClick}>End Date: {selectedendDate.toLocaleDateString()}</p>
      {showendCalendar && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedendDate}
          />
        </div>
      )}
     
    </p>
         </div>
       </div>
       <div className='searchbtn'>

        <Link to="/Car_choose" className='searchtext'>Search</Link>
       </div>
    </div>
  )
}

export default Searchrenter