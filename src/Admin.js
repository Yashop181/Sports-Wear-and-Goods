import React from 'react'
import MainContent from './MainContent';
import Sdbar from './Sdbar';
import "../src/styles/SidMain.css";

const Admin = () => {
  return (
    <div className='app-container'>
    <Sdbar/>
    <MainContent/>
    
  </div>
  )
} 

export default Admin
