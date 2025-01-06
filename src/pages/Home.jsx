import React,{useEffect} from "react";
import HomeComponent from "../components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Home() {
    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
         
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    navigate("/");
                } else {
                    setLoading(false);
                }
            
        });  // 4000 milliseconds = 4 seconds

          // Clean up timeout if component unmounts
    },[]);

    return loading ? <Loader/> : <HomeComponent />;
}
