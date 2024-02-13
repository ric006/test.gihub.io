// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        await (window as any).ethereum.enable();
        const accounts = await (window as any).web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Web3 provider not found. Please install MetaMask.');
    }
  };

  return (
    <Router>
      <div>
        <Header walletAddress={walletAddress} connectWallet={connectWallet} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
