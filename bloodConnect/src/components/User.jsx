// src/App.js
import React, { useState, useEffect } from 'react';
import BloodBankMap from './BloodBankMap';
import  {useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { messaging } from '../firebase';
import { getToken,onMessage } from 'firebase/messaging';


const User = () => {
  const [showMap, setShowMap] = useState(false); // State to manage map visibility
  const {latitude, longitude} = useUserContext();
  const navigate = useNavigate();
  console.log(latitude,longitude);
  // const userLatitude = 12.9715987; // Example latitude (Bengaluru, India)
  // const userLongitude = 77.594566;  // Example longitude (Bengaluru, India)

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BNVSgtzxEKvvv00ptkN7yONi6e4HirVjAZoHgX_wsad7G-cSxQDbc-r6KnzUyvRAgIXDs0h9m_RKTavpsmOfeJE",
      });
      console.log("Token Gen", token);


      await fetch("https://your-server.com/api/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      const { title, body } = payload.notification;
      new Notification(title, {
        body,
      });
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, []);

  
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
