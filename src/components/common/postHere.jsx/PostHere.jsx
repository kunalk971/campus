import "./post.scss";

import { useState } from "react";

import Modalc from "../Modal/Modal";

export default function PostHere() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div  className="post-main">
      <div className="post">
      <button className="open-post" type="primary" onClick={() => setModalOpen(true)}>
        Display a modal dialog at 20px to Top
      </button>
      

        
      </div>
      <Modalc modalOpen={modalOpen} setMdalopen={setModalOpen}/>
    </div>
  )
}








 