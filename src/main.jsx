import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import LoginComponent from './components/LoginComponent';
import {router} from './Routes';
import { RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import {app,auth} from "./firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Register from './pages/Register';
import RegisterComponent from './components/RegisterComponent';
import Loader from './components/common/Loader/Loader';
import HomeComponent from './components/HomeComponent';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </React.StrictMode>,
);  

   
