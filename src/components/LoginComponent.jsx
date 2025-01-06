import React from 'react';
import { LoginAPI } from '../api/AuthAPI';
import { RegisterAPI } from '../api/AuthAPI';
import "../Sass/LoginComponent.scss";
import appLogo from "../assets/appLogo.jpg";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';




  
  
  
  export default function LoginComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const login = async (e) => {
      e.preventDefault(); // Prevent default form submission
      try {
        let res = await LoginAPI(credentials.email, credentials.password);
        toast.success("Signed In to LinkedIn!");
        localStorage.setItem("userEmail", res.user.email);
        navigate("/home");
      } 
      catch (err) {
        console.log(err);
        toast.error("Please check your credentials");
      }
    };

    return (
      <div className="login-wrapper">
          <img src={appLogo} className="app-logo" />
          
          <h1 className="heading">Log in</h1>
          <p className="subheading">Login to explore college life</p>
  
          <div className="auth-inputs">
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
          
          <button onClick={login} className="login-btn">Sign in</button>
  
          
      <div className="google-btn">
         <GoogleButton onClick={() => alert("Google Sign In")} />
          <p className="go-to--signup">
              New user? <a href="/register">Join now</a>

          </p>
      </div>
      </div>
  );
}
        
