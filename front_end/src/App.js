import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import HomePage component
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import CreateJob from './components/CreateJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> {/* Use HomePage for the "/" route */}
        <Route path="/login" element={<Login />} /> {/* Route for the login page */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-job" element={<CreateJob />} />
      </Routes>
    </Router>
  );
}

export default App;
