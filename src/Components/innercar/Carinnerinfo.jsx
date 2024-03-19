import React from 'react'
import { useState } from 'react';
import './Carinnerinfo.css'
import Popup from '../Main_Renter/Popup'
import { User } from 'lucide-react'
import { CircleUserRound } from 'lucide-react';
import Heading from '../Heading';
function Carinnerinfo() {
    const [bookingMessage, setBookingMessage] = useState('');

    const handleBookingClick = () => {
      setBookingMessage('Booking done Successfully....');
    };
  return (
    
    <>
    
    <div className='innerinfo'>
        <div className='carinnerimage'>
            {carimg.map((d)=>(
                <div>
                <p className='innercarname'>{d.text}</p>
                <img src={d.img} className='innerimg'></img>
                </div>
            ))}
            
        </div>
        
        <h2>Exterior</h2>
        <div className='container_exterior'>
          
        {carexterior.map((d)=>(
                <div  >
                
                <div className='exterior'>
                <img src={d.img} className='eximg'></img>
                </div>
                </div>
                
            ))}
        </div>
        <h2>Interior</h2>
    
    <div className='container_exterior'>
          
        {carinterior.map((d)=>(
            <div  >
                
                <div className='exterior'>
                <img src={d.img} className='eximg'></img>
                </div>
                </div>
                
            ))}
        </div>
        
        <div className='container_exterior'>
        <h2 className='segment_car'>Segment         :</h2>
        {segment.map((d)=>(
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{d.text}</p>
                </div>
                </div>
                
            ))}
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Avaliable City  :</h2>
        {city.map((d)=>(
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{d.City}</p>
                </div>
                </div>
                
            ))}
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Fuel  :</h2>
        {fuel.map((d)=>(
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{d.text}</p>
                </div>
                </div>
                
            ))}
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Transmission Type  :</h2>
        {type.map((d)=>(
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{d.text}</p>
                </div>
                </div>
                
            ))}
        </div>
        <div className='container_exterior'>
        <h2 className='segment_car'>Price  :</h2>
        {price.map((d)=>(
            
                <div>
                <div className='exterior'>
                 <p className='segment_text'>{d.Price}</p>
                </div>
                </div>
                
            ))}
        </div>
     <p className='booking' onClick={handleBookingClick}><span className='book'> Book Now! </span></p>
     {bookingMessage && <p className='bookingmessage'>{bookingMessage}</p>}
    </div>
    
    
    
    {/* <div className='innerinfo'>
        <div className='carinnerimage'>
           
        </div>
    </div> */}
    </>
    
  )
}

const carimg=[
    {
    text:'Maruti Suzuki',
    img:"./images/maruti(2).JPG"
    }

]


const carexterior=[
    {
    text:'Exterior',
    img:'./images/back(2).JPG'
    
    },
    {
        img:'./images/rear.JPG', 

    },

    {
        img:'./images/left.JPG'
    },
    {
        img:'./images/front.JPG'
    }
]

const carinterior=[
    {
    text:'Exterior',
    img:'./images/dash.JPG'
    
    },
    {
        img:'./images/frontseat.JPG', 

    },

    {
        img:'./images/backseat.JPG'
    },
    {
        img:'./images/bootspace.JPG'
    }
]

const segment=[
    {
        text:'Hatchback',
    }
]
const city=[
   { City:'Ahmedabad'}
]
const fuel=[
    {text:"CNG"}
]
const type=[
    {text:"Automatic"}
]
const price=[
    {Price:"300$/Day"}
]
export default Carinnerinfo