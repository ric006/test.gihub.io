// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  walletAddress: string | null;
  connectWallet: () => void;
}

const Header: React.FC<Props> = ({ walletAddress, connectWallet }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {walletAddress ? (
          <div>
            <span>Your Wallet Address: {walletAddress}</span>
          </div>
        ) : (
          <button onClick={connectWallet}>Connect Metamask</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
