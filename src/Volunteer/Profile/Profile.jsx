import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

function Profile() {
    const location = useLocation();
    const { details } = location.state || {};  // Extract the details passed from the form page

    return (
        <div className='dashboard'>
            <h1>Personal Dashboard</h1>
            <div className='detail-item'>
                <strong>FullName:</strong> {details?.firstname}
            </div>
            <div className='detail-item'>
                <strong>Email:</strong> {details?.email}
            </div>
            <div className='detail-item'>
                <strong>Phone Number:</strong> {details?.phnumber}
            </div>
            <div className='detail-item'>
                <strong>Gender:</strong> {details?.gender}
            </div>
            <div className='detail-item'>
                <strong>Age</strong> {details?.age}
            </div>
            <div className='detail-item'>
                <strong>Address</strong> {details?.Address}
            </div>
            <div className='detail-item'>
                <strong>Occupation</strong> {details?.occupation}
            </div>
            <div className='detail-item'>
                <strong>Do you have experience?</strong> {details?.Experience}
            </div>
            <div className='detail-item'>
                <strong>Experience in Months:</strong> {details?.month}
            </div>
            <div className='detail-item'>
                <strong>Organization:</strong> {details?.organization}
            </div>
            <div className='detail-item'>
                <strong>Location:</strong> {details?.location}
            </div>
            <div className='detail-item'>
                <strong>Interests:</strong> {details?.interests}
            </div>
            <div className='detail-item'>
                <strong>Availability:</strong> {details?.availability}
            </div>
        </div>
    );
}

export default Profile;