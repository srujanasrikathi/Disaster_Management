import React from 'react'
import Counter from './Stats';
import MyBarChart from './chart';
import './news.css'
import flood1 from "../../assets/images/ts flood1.jpg"
import flood2 from "../../assets/images/tsflood2.jpg"
import flood3 from "../../assets/images/tsflood3.jpg"

function Ts() {
  return (
    <>
    <div className='divs'>
      
      <div className='matt1'>
      As the Telangana government made a strong pitch for immediate central assistance for taking up relief and rehabilitation of people
       affected by recent floods in the State, the Union Home Ministry has pointed out that the state government did not complete the formalities 
       for speedy release of funds. .      </div>
      <div className='img'>
        <img src={flood1} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Loss of life</h1>
    <Counter targetCount={42000} />
    </div>
    </div>
    <div className="chart">
    <h1>Crisis Data</h1>
    <MyBarChart />
    </div>
  <div className="ecoloss">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1> Amount Loss  by GOVT</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
    <Counter targetCount={10320} />
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
      The heavy rains that wreaked havoc with several parts of Telangana in two spells between July 18 and 28 resulted in the death of 
      44 persons and caused overall damages to roads, irrigation structures, drinking water lines and power infrastructure to the extent of 
      ₹4,565 crore,
       the state government told the assembly on Friday.     </div>
     
    </div>
    <div className="stats">
      <div className="lifecount">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Economic Loss</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
    <Counter targetCount={4200} />
    <h1>&nbsp;crores</h1> 
  </div>
    </div>
    </div>
    <div className="chart">
    <h1>Crisis Data</h1>
    <MyBarChart />
    </div>
  <div className="ecoloss">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Amount Loss  by GOVT</h1>
      <div style={{ display: 'flex', alignItems: 'center'}}>
    <Counter targetCount={10320} />
    <h1>&nbsp;crores</h1> 
  </div>
    </div>
    </div>
    </div>








    <div className='divs'>
      <div className='matt1'>
      Telangana Chief Secretary A. Santhi Kumari has requested the Central Government to ensure that guidelines pertaining to relief 
      and rehabilitation of families affected by calamities like floods are made liberal enabling the State
      
       Government to extend relief to the needy.    </div>
      <div className='img'>
        <img src={flood3} alt="" style={{height:"400px", width:"100%"}}/>
      </div>
    </div>
     



    </>
  )
}

export default Ts;
