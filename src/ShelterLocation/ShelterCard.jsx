// ShelterCard.js
import React from 'react'; 
import './ShelterLocation.css'

function ShelterCard({ shelter }) {
    return (
        <div className='shelter_card'>
            <div className='inner_shelter_card'>
                <h4 className='sheltername'>{shelter.sheltername}</h4>
                <br />
                <p>{shelter.description}</p>
                <br />
                <h5 className='address'>Address:</h5>
                <p>{shelter.shelterCity} &nbsp;&nbsp; {shelter.shelterState} &nbsp; {shelter.shelterPincode}</p>
                <br />
                <h5 className='contact_shelter'>Contact:</h5>
                <p>{shelter.contact}</p>
                <br />
                <div className='card_bottom'>
                    <div>
                        <h5 className='capacity_shleter'>Capacity:</h5>
                        <p>{shelter.capacity}</p>
                    </div>
                    <div className='rating_shelter'>
                        <h5 className='ratingshelter'>Rating:</h5>
                        <p>{shelter.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShelterCard;
