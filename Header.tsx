// Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const handleConnect = () => {
    // Logic to connect to Metamask or WalletConnect
    console.log('Connect button clicked');
  };

  return (
    <header>
      <h1>Header</h1>
      <button className="connect-button" onClick={handleConnect}>Connect</button>
    </header>
  );
};

export default Header;
