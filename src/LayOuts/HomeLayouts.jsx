import React from 'react'
import Home from '../pages/Home'
import Topbar from '../components/common/TopBar/Topbar'
import Loader from '../components/common/Loader/Loader'
export default function HomeLayouts() {
  return (
    <div>
    
      <Topbar/>
      <Home/>
      
    </div>
  )
}


// import React, { useMemo, useState } from "react";
// import Home from "../Pages/Home";
// import { getCurrentUser } from "../api/FirestoreAPI";
// import Topbar from "../components/common/Topbar";

// export default function HomeLayout() {
//   const [currentUser, setCurrentUser] = useState({});

//   // useMemo(() => {
    
//   // }, []);
//   return (
//     <div>
//       <Topbar  />
//       <Home  />
//     </div>
//   );
// }
