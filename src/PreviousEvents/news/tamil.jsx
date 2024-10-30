import React from 'react'
import Counter from './Stats';
import MyBarChart from './chart';
import flood1 from "../../assets/images/tamlflood1.webp"
import flood2 from "../../assets/images/tamilflood2.webp"
import flood3 from "../../assets/images/tamilflood3.jpg"

function Tamil() {
  return (
    <>   
     
     <div className='divs'>
      <div className='matt1'>
      Many parts of southern Tamil Nadu got flooded on December 17-18, after the Chennai floods due to Cyclone Michaung in early December. 
      The cause for this is an active Northeast monsoon (NEM) fuelled by the El Nino phenomenon,
       which is peaking right now, experts have told Down To Earth (DTE).    </div>
      <div className='img'>
        <img src={flood1} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Loss of life</h1>
    <Counter targetCount={13600} />
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
      Weeks after the governments of Tamil Nadu and Karnataka moved the Supreme Court seeking relief funds for calamities such as 
      Cyclone Michaung, floods and drought in 2023, the Union government has ordered the release of ₹3,730.32 crore towards “relief 
      assistance for natural calamity” 
      from the National Disaster Response Fund (NDRF).      </div>
  
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Loss of life</h1>
    <Counter targetCount={5000} />
    </div>
    </div>
    <div className="chart">
    <h1>Crisis Data</h1>
    <MyBarChart />
    </div>
  <div className="ecoloss">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Funds Given By GOVT</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
    <Counter targetCount={3730} />
    <h1>&nbsp;crores</h1> 
  </div>
    </div>
    </div>
    </div>




    <div className='divs'>
      <div className='matt1'>
      The month of December brought unprecedented rainfall and waterlogging challenges to both northern and southern districts of Tamil Nadu, 
      culminating in a series of tragic incidents and widespread destruction. The onslaught began in Chennai and neighbouring areas, 
      inundating the state capital with severe flooding.    </div>
      <div className='img'>
        <img src={flood3} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
     
    </>

  )
}

export default Tamil;
