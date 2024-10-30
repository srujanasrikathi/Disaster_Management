import React from 'react';
import { shelterLocationData } from './ShelterLocationData';
import ShelterCard from './ShelterCard';
import './ShelterLocation.css';

function ShelterLocation({ searchItem, selectOption, checklists }) {

    const filteredData = shelterLocationData.filter((shelter) => {
        const matchesSearch = searchItem ? shelter.shelterCity.toLowerCase().includes(searchItem.toLowerCase()) : true;
        const matchesFilter = selectOption ? shelter.shelterState === selectOption : true;
        const matchesCategory = checklists && checklists.length > 0
        ? checklists.includes(shelter.category)  
        : true;

    return matchesSearch && matchesFilter && matchesCategory;
    });

    

    return (
        <div className='shlterlocation_card'>
            {filteredData.length > 0 ? (
                filteredData.map((shelter, index) => (
                    <ShelterCard key={index} shelter={shelter} />
                ))
            ) : (
                <p>No Results found</p>
            )}
        </div>
    );
}

export default ShelterLocation;
