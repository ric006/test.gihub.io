

// Services.tsx
import React, { useState } from 'react';

const Home: React.FC = () => {
  // Dummy data for token pairs and exchange rates
  const tokenPairs = [
    { id: 1, from: 'ETH', to: 'BTC' },
    { id: 2, from: 'ETH', to: 'USDT' },
    { id: 3, from: 'BTC', to: 'USDT' },
    // Add more token pairs as needed
  ];

  const [selectedPair, setSelectedPair] = useState<number>(1);

  const handlePairChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPair(Number(event.target.value));
  };

  const handleSwap = () => {
    // Logic for initiating the swap
    console.log(`Initiating swap from ${tokenPairs[selectedPair - 1].from} to ${tokenPairs[selectedPair - 1].to}`);
  };

  return (
    <div>
      <h1>Swap Aggregator</h1>
      <p>Select token pair:</p>
      <select value={selectedPair} onChange={handlePairChange}>
        {tokenPairs.map(pair => (
          <option key={pair.id} value={pair.id}>{`${pair.from} to ${pair.to}`}</option>
        ))}
      </select>
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default Home;

