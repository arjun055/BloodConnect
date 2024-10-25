// src/App.js
import React, { useState } from 'react';
import BloodBankMap from './BloodBankMap';
import  {useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const User = () => {
  const [showMap, setShowMap] = useState(false); // State to manage map visibility
  const {latitude, longitude} = useUserContext();
  console.log(latitude,longitude);
  // const userLatitude = 12.9715987; // Example latitude (Bengaluru, India)
  // const userLongitude = 77.594566;  // Example longitude (Bengaluru, India)

  const navigate = useNavigate();
  const handleClick = () =>{
    setShowMap(!showMap);
    navigate('bloodBankMap');
  }

  // const toggleMapVisibility = () => {
  //   setShowMap(prevShowMap => !prevShowMap); // Toggle map visibility
  // };
  return (
    <div>
      <h1>Blood Donation App</h1>
      <button onClick={handleClick}>
        DONATE BLOOD
      </button>

      {/* {showMap && latitude && longitude ? (
        <BloodBankMap latitude={latitude} longitude={longitude} />
      ) : (
        <p>{showMap ? "Loading location..." : "Click 'Donate Blood' to view blood banks nearby."}</p>
      )} */}
      {showMap && (
        <BloodBankMap latitude={latitude} longitude={longitude} />
      )}
    </div>
  );
};

export default User;
