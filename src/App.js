import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import Spotlight from './components/Spotlight';

function App() {
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [punkData, setPunkData] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      const results = await axios.get(`https://testnets-api.opensea.io/assets?asset_contract_address=${process.env.REACT_APP_WALLET_ADDRESS}&order_direction=asc`)
      setPunkData(results.data.assets);
    }

    getNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkData.length > 0 && (
        <>
          <Spotlight punkData={punkData} selectedPunk={selectedPunk} />
          <PunkList punkData={punkData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
