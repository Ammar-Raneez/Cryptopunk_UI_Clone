import { useEffect, useState } from 'react';
// import axios from 'axios';

import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import punkData from './data.json';

function App() {
  const [punkList, setPunkList] = useState([]);

  // useEffect(() => {
  //   const getNfts = async () => {
  //     API key necessary
  //     const results = await axios.get(`https://api.opensea.io/api/v1/assets?asset_contract_address=%$address}`)
  //     console.log(results);
  //   }

  //   getNfts();
  // }, []);

  useEffect(() => {
    console.log(punkData);
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList punkData={punkData} />
    </div>
  );
}

export default App;
