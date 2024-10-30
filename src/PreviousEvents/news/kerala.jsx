import React from 'react'
import Counter from './Stats';
import MyBarChart from './chart';
import flood1 from "../../assets/images/keralaflood1.webp"
import flood2 from "../../assets/images/keralaflood2.webp"
import flood3 from "../../assets/images/keralaflood3.webp"


function Kerala() {
  return (
    <>   
    <div className='divs'>
      <div className='matt1'>
      
In the early hours of July 30, 2024, Chooralmala and Mundakkai villages in the district of Wayanad in Kerala were hit by devastating landslides
 triggered by torrential downpour. The massive landslides so far has claimed over 230 lives. According to the district administration, over 130
  people are still missing as of August 13. This is the worst natural disaster to occur in Kerala since the 2018 floods.
 

    </div>
      <div className='img'>
        <img src={flood1} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>loss of life</h1>
    <Counter targetCount={500} />
    </div>
    </div>
    <div className="chart">
    <h1>Crisis Data</h1>
    <MyBarChart />
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
      On 30 July 2024, heavy rainfall triggered landslides in the Wayanad district of Kerala, India. 
      At the time of writing, the confirmed loss of life has reached 392 people,
       with a further 150 people reported to be missing. In addition, there were at least 273 injuries.      </div>
      
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>loss of life</h1>
    <Counter targetCount={645000} />
    </div>
    </div>
    <div className="chart">
    <h1>Crisis Data</h1>
    <MyBarChart />
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
      <div className='matt1'>
      Chooralmala and Mundakkai, both located in Meppadi panchayat, are nearly 50 km away from the district headquarters in Kalpetta. They were known
 for its scenic landscapes and waterfalls. Mundakkai is just 2.3 km away from Chooralmala town by road.     </div>
      <div className='img'>
        <img src={flood3} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
    
    </>
 
  )
}

export default Kerala;
