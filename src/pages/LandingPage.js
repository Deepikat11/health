// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoleCard from '../components/RoleCard';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/${role.toLowerCase()}`);
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#e8f0fe' 
    }}>
      <h1 style={{ marginBottom: '20px' }}>Welcome to Doctor Appointment System</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <RoleCard role="Patient" onSelect={handleSelect} />
        <RoleCard role="Doctor" onSelect={handleSelect} />
        {/* <RoleCard role="Admin" onSelect={handleSelect} /> */}
      </div>
    </div>
  );
};

export default LandingPage;
