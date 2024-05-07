import React, { useState } from 'react';
import './css/LoginPage.css';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount'; // Assuming this is the path

function LoginPage() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const handleBackToLoginClick = () => {
    setShowCreateAccount(false);
  };

  return (
    <div className="login-container">
      {showCreateAccount ? (
        <CreateAccount onBackToLogin={handleBackToLoginClick}/>
      ) : (
        <Login onCreateAccount={handleCreateAccountClick} />
      )}
    </div>
  );
}

export default LoginPage;
