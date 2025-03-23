// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PatientHome from './pages/PatientHome';
import DoctorHome from './pages/DoctorHome';
import PatientLogin from './pages/PatientLogin';
import Register from './pages/PatientRegister';
import DoctorLogin from './pages/DoctorLogin';

// import AdminHome from './pages/AdminHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/doctorlogin" element={<DoctorLogin/>}/>
        <Route path="/patientregister" element={<Register />} />
        <Route path="/patienthome" element={<PatientHome />} />
        <Route path="/doctor" element={<DoctorHome />} />
        {/* <Route path="/admin" element={<AdminHome />} /> */}
        
      </Routes>
    </Router>
  );
};

export default App;
