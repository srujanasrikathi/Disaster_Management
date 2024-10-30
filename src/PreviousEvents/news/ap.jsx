import React from 'react';
import './news.css';
import flood1 from "../../assets/images/ap flood1.webp";
import flood2 from "../../assets/images/flood2 ap.jpeg";
import flood3 from "../../assets/images/flood3 ap.jpg";
import Counter from './Stats';
import MyBarChart from './chart';
import MyPieChart from './chart';


function Ap() {
  return (
    <>
    <div className='divs'>
      <div className='matt1'>
      Chief Minister N Chandrababu Naidu has said the recent torrential rain and subsequent floods in Andhra Pradesh,
       particularly in Vijayawada, is the "biggest disaster" he has witnessed in the state in his political career.
Naidu on Monday also said he will request the central government to declare the flood in the state as a national calamity.
 At least 17 people have been killed in rain-related incidents and the floods.      </div>
      <div className='img'>
        <img src={flood1} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Loss of life</h1>
    <Counter targetCount={645000} />
    </div>
    </div>
    <div className="chart">
    <h1>NTR district </h1>
    <MyPieChart />
    </div>
  <div className="ecoloss">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Economic Loss   23-24</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
    <Counter targetCount={6880} />
    <h1>&nbsp;crores</h1> 
  </div>
    </div>
    </div>
    </div>
    
    

    <div className='divs'>
    <div className='img'>
        <img src={flood2} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
      <div className='matt1'>
      Severe flooding has struck Andhra Pradesh on Thursday due to heavy rainfall, submerging roads and houses. 
      The India Meteorological Department (IMD) reported that a land-based cyclone caused intense precipitation within a 24-hour period.
       The extreme weather was driven by moisture from the Arabian Sea and heat from the eastern regions of the country.
         </div>
      
    </div>


    <div className="stats">

      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Loss of life</h1>
    <Counter targetCount={33000} />
    </div>
    </div>
    <div className="chart">
    <h1>Guntur District</h1>
    <MyBarChart />
    </div>

  <div className="ecoloss">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Road Damaged</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
    <Counter targetCount={ 3900 } />
    <h1>&nbsp;KM</h1> 
  </div>
    </div>
    </div>
    </div>




    <div className='divs'>
      <div className='matt1'>
      The recent floods in Vijayawada have brought to light the consequences of encroachment on natural water bodies.
       The flood on August 31 in Budameru Rivulet has disrupted life in more than half of Vijayawada.
Budameru, a small rivulet originating in the Khammam district of Telangana, flows through the NTR district before draining into 
Kolleru Lake in Eluru. Kolleru Lake, in turn, empties into the Bay of Bengal through Upputeru River, which is the lake’s sole outlet channel.     </div>
      <div className='img'>
        <img src={flood3} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
     
      </>
  );
}

export default Ap;
