import React from 'react'
import './Disasters.css'
import { MdTipsAndUpdates } from "react-icons/md";
import { TbAlertSquareFilled } from "react-icons/tb";
export default function Disasters({ pic, name, des }) {
    return (
        <div>
            <div className='dis_conatiner'>
                <div className="dis_picture">
                    <img src={pic} alt="Cyclone" />
                    <div className='pic_name'> <h4>{name}</h4></div>
                </div>

                <div className='dis_description'>
                    <div className='description'>
                        {des}          
                    </div>
                    {/* <div className='dis_buttons'>
                        <button className='button-56-sai'><MdTipsAndUpdates />&nbsp;Updates</button>
                        <button className='button-56-sai'><TbAlertSquareFilled />&nbsp;Alerts</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
