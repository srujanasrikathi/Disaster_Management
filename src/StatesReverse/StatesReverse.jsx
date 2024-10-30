import React from 'react';
import './StatesReverse.css';
import ap from '../assets/ap.jpg'
function StatesReverse({statePic}) {
  return (
    <div>
      <div className='statesreverse_container'>
      <div className='checklistsreverse'>
                    <button>Evacuation Routes</button>
                    <button>Shelter Locations</button>
                    <button>Volunteer Support</button>
                    <button>Medical Emergency</button>
                    <button>Supplies Guide</button>
                    <button>Safety Measures</button>
                    <button>Power Outages</button>
            </div>
            <div className='statereverse'>
                    <img src={statePic} alt="" width='100%' height="100%"/>
            </div>
            
      </div>
    </div>
  )
}

export default StatesReverse;
