import React,{ useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function BloodBank() {
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Here, you can process the email and date (e.g., send to API or log to console)
        console.log(`Donor's Email: ${email}`);
        console.log(`Date: ${date}`);
        
        // Reset form fields
        setEmail(email);
        setDate(date);
        try{
            const result = await axios.post("http://localhost:3000/bloodbank",{
                "email":email,
                "date":date
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (result.data.status === "Success") {
                console.log("User successfully Donated");
            } else {
                console.error("Server response error:", result.data);
            }
        }catch(err){
            console.log(err);
        }
        navigate('/');
        
    };


    return (
        <div style={styles.formContainer}>
            <h1 style={styles.title}>Blood Donation Validation</h1>
            <h2 style={styles.subtitle}>Email Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Donor's Email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input 
                    type="date" 
                    name="date" 
                    required 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button} >Submit</button>
            </form>
        </div>
    );
}

const styles = {
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '0 auto',
        height: '100vh',
    },
    title: {
        textAlign: 'center',
        margin: '0',
        marginBottom: '20px',
        fontSize: '24px',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '20px',
        margin: '0',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#28a745',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default BloodBank

