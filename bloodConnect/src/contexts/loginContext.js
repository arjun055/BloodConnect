import { createContext, useContext } from "react";

export const LoginContext = createContext({
    Email: "",
    UniqueId: "",
    isLogin: false,
    login: ()=>{},
    logout: ()=>{}
});

// export const LoginProvider = ({children}) =>{
//     const [Email, setEmail] = useState("");
//     const [UniqueId, setUniqueId] = useState("");
//     const [isLogin, setIsLogin] = useState(false);
//     const login = (userData, callback)=>{
//         setIsLogin(true);
//         setEmail(userData.email);
//         setUniqueId(userData.UniqueId);
//         callback && callback();
//     }
//     const logout = () =>{
//         setIsLogin(false);
//         setEmail("");
//         setUniqueId("");
//     }
//     return (
//         <LoginContext.Provider value={{isLogin, Email, UniqueId, login,logout}}>
//         {children}
//         </LoginContext.Provider>
//     )
// };

export const LoginProvider = LoginContext.Provider;

export default function newLogin(){
    return useContext(LoginContext);
}










