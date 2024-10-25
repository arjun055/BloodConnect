// src/BloodBankMap.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

const BloodBankMap = ({ latitude, longitude }) => {
  console.log(latitude,longitude);
  const GAK = import.meta.env.VITE_GOOGLE_API_KEY;
  const [bloodBanks, setBloodBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
//   const [loading, setLoading] = useState(true);


  const mapContainerStyle = {
    height: '500px',
    width: '100%',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const radius = 5000; // 5 km radius

  useEffect(() => {
    const fetchBloodBanks = async () => {
      const response = await fetch(`http://localhost:9173/api/blood-banks?latitude=${latitude}&longitude=${longitude}`);
      const data = await response.json();
      if (data.results) {
        setBloodBanks(data.results);
      }
    };

    // const fetchBloodBanks = async () => {
    //   setLoading(true); // Set loading to true when starting the fetch
    //   try {
    //     const response = await fetch(
    //       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=blood_bank&key=${GAK}`
    //     );
    //     const data = await response.json();
    //     if (data.results) {
    //       setBloodBanks(data.results);
    //     }
    //   } catch (error) {
    //     console.error("Failed to fetch blood banks:", error);
    //   } finally {
    //     setLoading(false); // Set loading to false once fetch is complete
    //   }
    // };

    fetchBloodBanks();
  }, [latitude,longitude]);

  return (
    <LoadScript googleMapsApiKey={GAK}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        {bloodBanks.map((bank) => (
          <Marker
            key={bank.place_id}
            position={{
              lat: bank.geometry.location.lat(),
              lng: bank.geometry.location.lng(),
            }}
            onClick={() => {
              setSelectedBank(bank);
            }}
          />
        ))}

        {selectedBank && (
          <InfoWindow
            position={{
              lat: selectedBank.geometry.location.lat(),
              lng: selectedBank.geometry.location.lng(),
            }}
            onCloseClick={() => {
              setSelectedBank(null);
            }}
          >
            <div>
              <h4>{selectedBank.name}</h4>
              <p>{selectedBank.vicinity}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default BloodBankMap;
