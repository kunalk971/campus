
import LoginComponent from "../components/LoginComponent";
import React,{useEffect,useState} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader/Loader";
import { useNavigate } from "react-router-dom";





export default function Login() {
   const[loading,setLoading]=useState(true)
   let navigate=useNavigate();
    useEffect(()=>{
         
              onAuthStateChanged(auth,(res) =>{
                if(!res?.accessToken) {
                     navigate("/home");
                }else{
                     setLoading(false);
                }
            });
         
         
    },[]);
 
    return  loading ? <Loader/> :  <LoginComponent/>;

}