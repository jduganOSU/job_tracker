import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import HomePage component
import LoginPage from './pages/LoginPage';
import CreateJob from './components/CreateJob';
import UserHome from './pages/UserHome';
import Viewer from './pages/ObjectViewer';
import './tailwind.output.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> {/* Use HomePage for the "/" route */}
        <Route path="/login" element={<LoginPage />} /> {/* Route for the login page */}
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;
