import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./common/TopBar/topbar.scss";
import "../Sass/HomeComponent.scss";

import PostHere from './common/postHere.jsx/postHere';


export default function HomeComponent() {
  return (
    <div className="home">
      <PostHere/>
       
    </div>
  )
}
