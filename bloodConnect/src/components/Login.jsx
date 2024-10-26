// // import React, { useState, useEffect } from 'react';
// // import styled from 'styled-components';
// // import { useNavigate } from 'react-router-dom';
// // import newLogin from '../contexts/loginContext';
// // import { UserProvider } from '../contexts/UserContext';
// // import { useUserContext } from '../contexts/UserContext';


// // const Container = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh;
// //   background-color: #f7f8fa;
// // `;

// // const LoginBox = styled.div`
// //   background-color: #fff;
// //   padding: 2rem;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   width: 300px;
// // `;

// // const Title = styled.h2`
// //   text-align: center;
// //   margin-bottom: 1rem;
// //   color: #333;
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 0.5rem;
// //   margin: 0.5rem 0;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// // `;

// // const Select = styled.select`
// //   width: 100%;
// //   padding: 0.5rem;
// //   margin: 0.5rem 0;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// // `;

// // const Button = styled.button`
// //   width: 100%;
// //   padding: 0.5rem;
// //   margin-top: 1rem;
// //   background-color: #007bff;
// //   color: #fff;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #0056b3;
// //   }
// // `;

// // const Login = () => {
// //   const [role, setRole] = useState("user");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [uniqueId, setUniqueId] = useState("");
// //   const [showUniqueId, setShowUniqueId] = useState(false);
// //   const [BloodType, setBloodType] = useState();
// //   const navigate = useNavigate();
// //   const [location, setLocation] = useState({});
// //   const [error, setError] = useState("");
// //   const { isLogin, Email, UniqueId} = newLogin();
// //   const { setLatLong } = useUserContext(); 

  
// //   useEffect(() => {
// //     // Show Unique ID input if role is "hospital" or "blood bank"
// //     setShowUniqueId(role === "hospital" || role === "bloodBank");
// //   }, [role]);


// //   const requestLocation = () =>{
// //     console.log("request");
// //     if ('geolocation' in navigator) {
// //       navigator.geolocation.getCurrentPosition(
// //         (position) => {
// //           const coords = {
// //             latitude: position.coords.latitude,
// //             longitude: position.coords.longitude,
// //           };
// //           setLatLong(coords.latitude,coords.longitude);
// //         //   latitude = coords.latitude;
// //         //   longitude = coords.longitude;
// //           setLocation(coords);
// //         //   console.log(latitude);
// //         //   console.log(longitude);
// //         },
// //         (error) => {
// //           setError("Location permission denied.");
// //           console.error("Error requesting location:", error);
// //         }
// //       );
// //     } else {
// //       setError("Geolocation is not supported by this browser.");
// //     }
// //   }


// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     // setContextEmail(email);
    
// //     // console.log("entered");
// //     requestLocation();
// //     if (role === 'user') {
// //       navigate('/userDonate');
// //     } else if (showUniqueId && uniqueId) {

// //       if (role === 'hospital') {
// //         navigate('/hospitalDashboard');
// //       } else if (role === 'bloodBank') {
// //         navigate('/bloodBankDashboard');
// //       }
// //     }
// //   };

// //   return (
// //     <UserProvider value={{latitude, longitude, setLatLong}}>
// //     <Container>
// //       <LoginBox>
// //         <Title>Login</Title>
// //         <form onSubmit={handleLogin}>
// //           <label>
// //             Email:
// //             <Input type="email" required onChange={(e) => setEmail(e.target.value)} />
// //           </label>
// //           <label>
// //             Password:
// //             <Input type="password" required onChange={(e) => setPassword(e.target.value)} />
// //           </label>
// //           <label>
// //             Select Role:
// //             <Select value={role} onChange={(e) => setRole(e.target.value)}>
// //               <option value="user">User</option>
// //               <option value="hospital">Hospital</option>
// //               <option value="bloodBank">Blood Bank</option>
// //             </Select>
// //           </label>

          
// //           {showUniqueId && (
// //             <label>
// //               Unique ID:
// //               <Input
// //                 type="text"
// //                 value={uniqueId}
// //                 onChange={(e) => setUniqueId(e.target.value)}
// //                 required
// //                 placeholder={`Enter ${role} ID`}
// //               />
// //             </label>
// //           )}
// //           <label>
// //              Blood:
// //             <Input type='text' onChange={(e)=>setBloodType(e.target.value)}/>
// //           </label>


// //           <Button type="submit">Login</Button>
// //         </form>
// //       </LoginBox>
// //     </Container>
// //     </UserProvider>
// //   );
// // };

// // export default Login;



// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import newLogin from '../contexts/loginContext';
// import { useUserContext } from '../contexts/UserContext';
// import axios from 'axios';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f7f8fa;
// `;

// const LoginBox = styled.div`
//   background-color: #fff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 300px;
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 1rem;
//   color: #333;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   margin: 0.5rem 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.5rem;
//   margin: 0.5rem 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.5rem;
//   margin-top: 1rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Login = () => {
//   const [role, setRole] = useState("user");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [uniqueId, setUniqueId] = useState("");
//   const [showUniqueId, setShowUniqueId] = useState(false);
//   const [blood, setBlood] = useState("");
//   const [locationError, setLocationError] = useState("");
//   const { setLatLong } = useUserContext(); 
//   const navigate = useNavigate();
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');

//   useEffect(() => {
//     // Show Unique ID input if role is "hospital" or "blood bank"
//     setShowUniqueId(role === "hospital" || role === "bloodBank");
//   }, [role]);

//   const requestLocation = () => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           console.log(position);
//           const coords = {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           };
//           // Set latitude and longitude in UserContext
//           setLatitude(coords.latitude);
//           setLongitude(coords.longitude);
//           setLatLong(coords.latitude, coords.longitude);

//           console.log(latitude);
//           console.log(longitude);

          
//           // Navigate to the correct dashboard after setting location
//           handleLoginRedirect(role, coords.latitude, coords.longitude);
//         },
//         (error) => {
//           setLocationError("Location permission denied.");
//           console.error("Error requesting location:", error);
//         }
//       )
//     } else {
//       setLocationError("Geolocation is not supported by this browser.");
//     }
//   };

//   // const handleLoginSubmit = async () =>{
//   //   console.log(email,password,blood,latitude,longitude);
//   //   // e.preventDefault()
//   //   await axios.post('http://localhost:3000/users',{email,password,blood,latitude,longitude})
//   //   .then(result =>{
     
//   //     // console.log(result)
//   //     if(result.data.status ==="Success"){
//   //       console.log("ok");
//   //     }
//   //     else if(result.data.status==="invalid"){
//   //       console.log("error");
//   //     }
//   //   })
//   //   .catch(err=>console.log(err))
//   // }

//   const handleLoginSubmit = async (latitude, longitude) => {
//     if (!email || !password || !blood || !latitude || !longitude) {
//         console.log(email,password,blood,latitude,longitude);
//         console.error("All fields are required.");
//         return;
//     }

//     try {
//         const result = await axios.post('http://localhost:3000/users', {
//             email, 
//             password, 
//             blood, 
//             latitude, 
//             longitude
//         }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
        
//         if (result.data.status === "Success") {
//             console.log("User successfully created");
//         } else {
//             console.error("Server response error:", result.data);
//         }
//     } catch (error) {
//         console.error("Axios error:", error);
//     }
// };


//   const handleLoginRedirect = async (role, latitude, longitude) => {
//     // console.log(email,password,blood,latitude,longitude);
//     if (role === 'user') {

//       await handleLoginSubmit(latitude,longitude);
      
//       navigate('/userDonate');
//     } else if (showUniqueId && uniqueId) {
//       if (role === 'hospital') {
//         navigate('/hospitalDashboard');
//       } else if (role === 'bloodBank') {

//         navigate('/bloodBankDashboard');
//       }
//     }
//   };

//   const handleLogin = async (e) => {
//     console.log(email,password,blood);
//     e.preventDefault();
//     await requestLocation();
//   };

//   return (
//     <Container>
//       <LoginBox>
//         <Title>Login</Title>
//         <form onSubmit={handleLogin}>
//           <label>
//             Email:
//             <Input type="email" required onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <label>
//             Password:
//             <Input type="password" required onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <label>
//             Blood Type:
//             <Input type='text' required onChange={(e) => setBlood(e.target.value)}/>
//           </label>
//           <label>
//             Select Role:
//             <Select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="user">User</option>
//               <option value="hospital">Hospital</option>
//               <option value="bloodBank">Blood Bank</option>
//             </Select>
//           </label>
//           {showUniqueId && (
//             <label>
//               Unique ID:
//               <Input
//                 type="text"
//                 value={uniqueId}
//                 onChange={(e) => setUniqueId(e.target.value)}
//                 required
//                 placeholder={`Enter ${role} ID`}
//               />
//             </label>
//           )}
//           <Button type="submit">Login</Button>
//           {locationError && <p style={{ color: 'red' }}>{locationError}</p>}
//         </form>
//       </LoginBox>
//     </Container>
//   );
// };

// export default Login;






import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import axios from 'axios';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f8fa;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
  font-family: 'Arial', sans-serif;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
`;

const Login = () => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [showUniqueId, setShowUniqueId] = useState(false);
  const [blood, setBlood] = useState("");
  const [locationError, setLocationError] = useState("");
  const { setLatLong } = useUserContext(); 
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    setShowUniqueId(role === "hospital" || role === "bloodBank");
  }, [role]);

  const requestLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLatitude(coords.latitude);
          setLongitude(coords.longitude);
          setLatLong(coords.latitude, coords.longitude);
          handleLoginRedirect(role, coords.latitude, coords.longitude);
        },
        (error) => {
          setLocationError("Location permission denied.");
          console.error("Error requesting location:", error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  const handleLoginSubmit = async (latitude, longitude) => {
    if (!email || !password || !blood || !latitude || !longitude) {
        console.error("All fields are required.");
        return;
    }

    try {
        const result = await axios.post('http://localhost:3000/users', {
            email, 
            password, 
            blood, 
            latitude, 
            longitude
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (result.data.status === "Success") {
            console.log("User successfully created");
        } else {
            console.error("Server response error:", result.data);
        }
    } catch (error) {
        console.error("Axios error:", error);
    }
  };

  const handleLoginRedirect = async (role, latitude, longitude) => {
    if (role === 'user') {
      await handleLoginSubmit(latitude, longitude);
      navigate('/userDonate');
    } else if (showUniqueId && uniqueId) {
      if (role === 'hospital') {
        navigate('/hospitalDashboard');
      } else if (role === 'bloodBank') {
        navigate('/bloodBankDashboard');
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await requestLocation();
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <Input type="email" required onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <Input type="password" required onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Blood Type:
            <Input type='text' required onChange={(e) => setBlood(e.target.value)} />
          </label>
          <label>
            Select Role:
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="hospital">Hospital</option>
              <option value="bloodBank">Blood Bank</option>
            </Select>
          </label>
          {showUniqueId && (
            <label>
              Unique ID:
              <Input
                type="text"
                value={uniqueId}
                onChange={(e) => setUniqueId(e.target.value)}
                required
                placeholder={`Enter ${role} ID`}
              />
            </label>
          )}
          <Button type="submit">Login</Button>
          {locationError && <ErrorText>{locationError}</ErrorText>}
        </form>
      </LoginBox>
    </Container>
  );
};

export default Login;

