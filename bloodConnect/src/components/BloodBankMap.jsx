// 





import React, { useState } from "react";

const BloodBankMap = () => {
    const [showMap, setShowMap] = useState(false);

    const handleButtonClick = () => {
        setShowMap(true);
    };

    return (
        <div style={styles.container}>
            <h1>Find Nearby Blood Banks</h1>
            <button onClick={handleButtonClick} style={styles.button}>
                Find !!!
            </button>
            {showMap && (
                <div style={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1GOIqOnZrSLPm_nqxyx4wckW5LrHEqt8&ehbc=2E312F"
                        width="640"
                        height="480"
                        style={styles.iframe}
                        title="Blood Banks Map"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
    },
    button: {
        padding: "10px 20px",
        fontSize: 16,
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: 5,
        outline: "none",
    },
    mapContainer: {
        display: "block",
        marginTop: 20,
    },
    iframe: {
        border: 0,
    },
};

export default BloodBankMap;