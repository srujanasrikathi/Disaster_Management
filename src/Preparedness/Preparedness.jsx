 import React from 'react'
//  import './Preparedness.css'
 import States from '../States/States';
 import StatesReverse from '../StatesReverse/StatesReverse';

 import ap from '../assets/ap.jpg';
 import telangana from '../assets/telangana.png';
 import kerala from '../assets/kerala.jpg';
import tamilnadu from '../assets/tamilnadu.jpg'

 function Preparedness() {
   return (
     <div>
       <States statePic={ap}/>
        {/* <hr style= {{border:'2px solid green'}}/>
       <StatesReverse statePic={telangana}/>
       <hr style= {{border:'2px solid green'}}/>
       <States statePic={kerala}/>
       <hr style= {{border:'2px solid green'}}/>
       <StatesReverse statePic={tamilnadu}/> */}
     </div>
   )
 }
 
 export default Preparedness
 