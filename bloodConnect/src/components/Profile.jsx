import React from 'react';
import { LoginContext } from '../contexts/loginContext';
const Profile = () => {
    // const [list, setList] = useState([]);
    // const email = useContext(LoginContext);

    // useEffect(() =>{
    //     const fetchResults = async()=>{
    //         try{
    //             const response = await fetch(`http://localhost:3000/bloodbank/${email}`);
    //             console.log(response);
    //             const data = await response.json();
    //             console.log(data);
    //             setList(data);
    //         } catch(error){
    //             console.log(error);
    //         }
    //     }
    //     fetchResults();
    // },[email])

    const donorName = "Prajwal Bhat";
    const totalDonations = 5;
    const donationDates = [
        "January 15, 2022",
        "April 10, 2022",
        "December 22, 2022",
        "August 5, 2023",
        "April 20, 2023",
    ];

    return (
        <div style={styles.pageContainer}>
            <div style={styles.profileContainer}>
                <div style={styles.profileHeader}>
                    <h2 style={styles.headerText}>Donor Name: {donorName}</h2>
                    <div style={styles.donationCount}>Total Donations: {totalDonations}</div>
                </div>
                
                <div style={styles.donationDates}>
                    <h3 style={styles.datesHeader}>Donation Dates:</h3>
                    <ul style={styles.dateList}>
                        {donationDates.map((date, index) => (
                            <li key={index} style={styles.dateItem}>
                                {date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Inline styling
const styles = {
    pageContainer: {
        backgroundColor: '#f7f7f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
    },
    profileContainer: {
        backgroundColor: '#ffffff',
        width: '400px',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s',
    },
    profileHeader: {
        marginBottom: '20px',
    },
    headerText: {
        color: '#333333',
        fontSize: '24px',
        margin: '0',
    },
    donationCount: {
        fontSize: '20px',
        color: '#555555',
        fontWeight: 'bold',
        marginTop: '8px',
    },
    donationDates: {
        textAlign: 'left',
    },
    datesHeader: {
        color: '#777777',
        marginBottom: '15px',
        fontSize: '18px',
        borderBottom: '2px solid #eeeeee',
        display: 'inline-block',
        paddingBottom: '5px',
    },
    dateList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    dateItem: {
        backgroundColor: '#f0f0f0',
        padding: '10px 15px',
        marginBottom: '8px',
        borderRadius: '8px',
        fontSize: '16px',
        color: '#333333',
    },
};

export default Profile;