import React ,{useState} from 'react';
import { LoginAPI } from '../api/AuthAPI';
import { RegisterAPI } from '../api/AuthAPI';
import "../Sass/RegisterComponent.scss";
import appLogo from "../assets/appLogo.jpg";

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { GoogleSignInAPI } from '../api/AuthAPI';
import { createUserWithEmailAndPassword } from 'firebase/auth';



export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentials.name,
        email: credentials.email,
      
        
        
      });
      // navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } 
    catch (err) {
      console.log(err);
      // toast.error("Cannot Create your Account");
    }
  };





  return (
    <div className = "register-wrapper">
     
      
      
          
          
          <h1 className="heading">Register</h1>
          <p className="subheading">Register if you are a new user</p>
  
          <div className="auth-inputs-register">
              <input
                onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                type="email"
                className="common-input"
                placeholder="Email or Phone" />
              <input
                onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                type="password"
                className="common-input"
                placeholder="Password" />
          </div>
          
          {/* <button onClick={register} className="login-btn">Sign in</button> */}
  
          <button onClick={register} className="login-btn">register</button>
      <div className="google-btn">
         <GoogleButton onClick={() => alert("Google Sign In")} />
         
          <p className="go-to--signup">
              This is registration page!!

          </p>
      </div>
      </div>
  );
}
        

      
      
    
  



  
  
  
//   export default function RegisterComponent() {
//     let navigate = useNavigate();
//     const [credentials, setCredentials] = useState({ email: '', password: '' });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setCredentials(prevState => ({
//         ...prevState,
//         [name]: value
//       }));
//     };
  
//     const login = async (e) => {
//       e.preventDefault(); // Prevent default form submission
//       try {
//         let res = await LoginAPI(credentials.email, credentials.password);
//         toast.success("Signed In to LinkedIn!");
//         localStorage.setItem("userEmail", res.user.email);
//         navigate("/home");
//       } 
//       catch (err) {
//         console.log(err);
//         toast.error("Please check your credentials");
//       }
//     };

//     return (
//       <div className="login-wrapper">
//           <img src={appLogo} className="app-logo" />
          
//           <h1 className="heading">Log in</h1>
//           <p className="subheading">Login to explore college life</p>
  
//           <div className="auth-inputs">
//               <input
//                 onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
//                 type="email"
//                 className="common-input"
//                 placeholder="Email or Phone" />
//               <input
//                 onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
//                 type="password"
//                 className="common-input"
//                 placeholder="Password" />
//           </div>
          
//           <button onClick={login} className="login-btn">Sign in</button>
  
          
//       <div className="google-btn">
//          <GoogleButton onClick={() => alert("Google Sign In")} />
//           <p className="go-to--signup">
//               New user? <a href="/register">Join now</a>

//           </p>
//       </div>
//       </div>
//   );
// }