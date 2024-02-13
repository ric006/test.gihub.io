// Header.tsx
import React, { useState } from 'react';
import WalletConnect from '@walletconnect/browser';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { Link } from 'react-router-dom';

interface Props {
  walletAddress: string | null;
}

const Header: React.FC<Props> = ({ walletAddress }) => {
  const [walletConnect, setWalletConnect] = useState<WalletConnect | null>(null);

  const connectMetamask = async () => {
    if ((window as any).ethereum) {
      try {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Web3 provider not found. Please install MetaMask.');
    }
  };

  const connectWalletConnect = async () => {
    const connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    });

    if (!connector.connected) {
      connector.createSession();
      connector.on('connect', () => {
        console.log('WalletConnect connected');
      });
    }

    setWalletConnect(connector);
  };

  const handleConnect = () => {
    if (walletConnect) {
      walletConnect.createSession();
    } else {
      connectWalletConnect();
    }
  };

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
          <button onClick={handleConnect}>Connect</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
