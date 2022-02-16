import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import Spotlight from './components/Spotlight';
import punkData from './data.json';

function App() {
  const [selectedPunk, setSelectedPunk] = useState(0);
  // const [punkList, setPunkList] = useState([]);

  // useEffect(() => {
  //   const getNfts = async () => {
  //     API key necessary
  //     const results = await axios.get(`https://api.opensea.io/api/v1/assets?asset_contract_address=%$address}`)
  //     console.log(results);
  //   }

  //   getNfts();
  // }, []);

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
