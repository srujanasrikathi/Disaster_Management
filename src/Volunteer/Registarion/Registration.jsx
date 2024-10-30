import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './regress.css';

function Registration() {
    const [details, setDetails] = useState({
      fullName: '',
      email: '',
      password: '', 
      phoneNumber: '',
      gender: '',
      age: '',
      address: '',
      occupation: '',
      experience: '',
      years: '',
      organization: '',
      location: '',
      interests: '',
      availability: '',
    });

    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();  

    const checkDetails = (evt) => {
        setDetails((prev) => ({
            ...prev, [evt.target.name]: evt.target.value
        }));
    };

    const submitDetails = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:1237/get-details', details)
            .then(res => {
                console.log(res);
                window.alert('Registration Successful');
            })
            .catch(err => {
                console.log(err);
                window.alert('An error occurred during registration.');
            });

        setDetails({
            fullName: '',
            email: '',
            password: '', 
            phoneNumber: '',
            gender: '',
            age: '',
            address: '',
            occupation: '',
            experience: '',
            years: '',
            organization: '',
            location: '',
            interests: '',
            availability: '',
        });
        navigate('/Profile', { state: { details } });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='main-form-g'>
            <center><h1>Register Here</h1></center>
            <form onSubmit={(evt) => evt.preventDefault()}>
                <label className='label-g'>FullName:</label><br />
                <input type="text" placeholder='fullname' name='fullname' value={details.fullName} onChange={checkDetails} className="input-field-g" />
                <br /><br />

                <label className='label-g'>Email:</label><br />
                <input type="email" placeholder='@gmail.com' name='email' value={details.email} onChange={checkDetails} className="input-field-g" />
                <br /><br />

                <label className='label-g'>Password:</label><br />
                <div className="password-field-g">
                    <input type={showPassword ? "text" : "password"} placeholder='Password' name='password' value={details.password} onChange={checkDetails} className="input-field-g" />
                    <span className="eye-icon-g" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}> {showPassword ? '👁️' : '👁️‍🗨️'} </span>
                </div>
                <br />

                <label className='label-g'>Mobile Number:</label><br />
                <input type="number" placeholder='+91' name='phoneNumber' value={details.phoneNumber} onChange={checkDetails} className="input-field-g" />
                <br /><br />

                <label className="label-g">Gender:</label>
                <select name="gender" value={details.gender} onChange={checkDetails} className="input-field-g">
                    <option value="" disabled>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                <br /><br />

                <label className="label-g">Age:</label>
                <input type="number" name="age" placeholder="Age" value={details.age} onChange={checkDetails} className="input-field-g" />
                <br /><br />

                <label className="label-g">Address:</label>
                <input type="text" name="address" placeholder="Address" value={details.address} onChange={checkDetails} className="input-field-g"/>
                <br /><br />

                <label className="label-g">Occupation:</label>
                <input type="text" name="occupation" placeholder="Occupation" value={details.occupation} onChange={checkDetails} className="input-field-g"/>
                <br /><br />

                <label className="label-g">Do you have experience?</label>
                <select name="experience" value={details.experience} onChange={checkDetails} className="input-field-g">
                    <option value="" disabled>Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br /><br />

                <label className="label-g">Experience in Months:</label>
                <input type="number" name="years" placeholder="Experience in Months" value={details.years} onChange={checkDetails} className="input-field-g"/>
                <br /><br />

                <label className="label-g">Organization:</label>
                <input type="text" name="organization" placeholder="Organization" value={details.organization} onChange={checkDetails} className="input-field-g"/>
                <br /><br />

                <label className="label-g">Location:</label>
                <input type="text" name="location" placeholder="Location" value={details.location} onChange={checkDetails} required className="input-field-g"/>
                <br /><br />

                <label className="label-g">Interests:</label>
                <input type="text" name="interests" placeholder="Interests" value={details.interests} onChange={checkDetails} required className="input-field-g"/>
                <br /><br />

                <label className="label-g">Availability:</label>
                <select name="availability" onChange={checkDetails} value={details.availability} className="input-field-g">
                    <option value="" disabled>Select</option>
                    <option value="3:00 AM To 9:00 AM">3:00 AM To 9:00 AM</option>
                    <option value="10:00 AM To 12:00 PM">10:00 AM To 12:00 PM</option>
                    <option value="1:00 PM To 5:00 PM">1:00 PM To 5:00 PM</option>
                    <option value="3:00 PM TO 4:00 PM">3:00 PM TO 4:00 PM</option>
                    <option value="7:00 PM To 10:00 PM">7:00 PM To 10:00 PM</option>
                    <option value="9:00 PM To 11:00 PM">9:00 PM To 11:00 PM</option>
                    <option value="AnyTime">AnyTime</option>
                </select>
                <br /><br />

                <div className="btns-g"> 
                    <button onClick={submitDetails} className='button1-g'>Register</button>
                </div>
            </form>
            <br />
            <Link to='/Log'><button className='button-g'>Login</button></Link>
        </div>
    );
}

export default Registration;
