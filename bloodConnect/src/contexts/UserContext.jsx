// import { createContext, useContext } from "react";

// export const UserContext = createContext({
//     latitude: "",
//     longitude: "",
//     setLatLong: ()=> {}
// });

// export const UserProvider = UserContext.Provider;

// export default function newUser(){
//     return useContext(UserContext);
// }


import React, { createContext, useContext, useState } from "react";

// Create the UserContext with default values
export const UserContext = createContext({
    latitude: "",
    longitude: "",
    setLatLong: () => {}
});

// UserProvider to manage the user context state
export const UserProvider = ({ children }) => {
    const [latitude, setLatitude] = useState("");  // State for latitude
    const [longitude, setLongitude] = useState(""); // State for longitude

    // Function to update latitude and longitude
    const setLatLong = (lat, long) => {
        setLatitude(lat);
        setLongitude(long);
    };

    return (
        <UserContext.Provider value={{ latitude, longitude, setLatLong }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for easier context consumption
export const useUserContext = () => useContext(UserContext);
