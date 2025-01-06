

import React, { useState } from 'react';
import {  Modal } from 'antd';
const Modalc= ({modalOpen,setModalOpen}) => {
  
  
  return (
    <>
      {/* <button type="primary" onClick={() => setModalOpen(true)}>
        Display a modal dialog at 20px to Top
      </button> */}
      <Modal 
        title="20px to Top"
        style={{
          
        }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      
      
      
    </>
  );
};
export default Modalc;     
