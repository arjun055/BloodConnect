import React, { useState } from 'react';

const BloodNotificationForm = () => {
    const [bloodType, setBloodType] = useState('');
    const [notifications, setNotifications] = useState([]); // State for notifications

    const showNotification = (message) => {
        const newNotification = { id: Date.now(), message };
        setNotifications((prev) => [...prev, newNotification]);

        // Remove the notification after 5 seconds
        setTimeout(() => {
            setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
        }, 5000);
    };

    const notifyUsers = async () => {
        if (bloodType) {
            const response = await fetch("https://localhost:3000/api/notify-users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ bloodType }),
            });

            if (response.ok) {
                showNotification(`Users notified for blood type: ${bloodType}`);
            } else {
                showNotification('Failed to notify users.');
            }
        } else {
            showNotification('Please select a blood type.');
        }
    };

    const notifyBloodBank = () => {
        if (bloodType) {
            showNotification(`Notifying blood bank for blood type: ${bloodType}`);
            // Add logic to notify blood bank here
        } else {
            showNotification('Please select a blood type.');
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.header}>Blood Notification Form</h2>
            <form style={styles.form}>
                <label style={styles.label} htmlFor="bloodType">Blood Type</label>
                <select
                    id="bloodType"
                    name="bloodType"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    style={styles.select}
                    required
                >
                    <option value="" disabled>Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

                <button type="button" onClick={notifyUsers} style={styles.button}>
                    Notify Users
                </button>
                <button
                    type="button"
                    onClick={notifyBloodBank}
                    style={{ ...styles.button, ...styles.notifyBloodBank }}
                >
                    Notify Blood Bank
                </button>
            </form>

            {/* Notification container */}
            <div id="notification-container" style={styles.notificationContainer}>
                {notifications.map((notification) => (
                    <div key={notification.id} style={styles.notification}>
                        {notification.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Inline styling for simplicity
const styles = {
    formContainer: {
        backgroundColor: '#ffffff',
        width: '350px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: 'auto',
    },
    header: {
        color: '#333333',
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        margin: '10px 0 5px',
        fontWeight: 'bold',
        color: '#555555',
    },
    select: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '15px',
        fontSize: '16px',
        color: '#555555',
    },
    button: {
        width: '100%',
        padding: '10px',
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    notifyBloodBank: {
        backgroundColor: '#dc3545',
    },
    notificationContainer: {
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
    },
    notification: {
        backgroundColor: '#f44336',
        color: 'white',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        animation: 'fadeIn 0.5s',
    }
};

export default BloodNotificationForm;