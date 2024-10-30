import React from 'react'
import './Disasters2.css';
import { MdTipsAndUpdates } from "react-icons/md";
import { TbAlertSquareFilled } from "react-icons/tb";
function Disasters2({pic , name , des}) {
    return (
        <div>
            <div className='dis_conatiner2'>
                <div className='dis_description2'>
                    <div className='description2'>
                        {des}
                     </div>
                     {/* <div className='dis_buttons'>
                        <button className='button-57'><MdTipsAndUpdates />&nbsp;Updates</button>
                        <button className='button-57'><TbAlertSquareFilled />&nbsp;Alerts</button>
                    </div> */}
                    </div>
                    <div className="dis_picture2">
                        <img src={pic} alt="Cyclone" />
                       <div className='pic_name2'> <h4>{name}</h4></div>

                    </div>
            </div>
        </div>
    )
}

export default Disasters2
