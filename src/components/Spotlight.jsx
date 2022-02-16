import React, { useState, useEffect } from 'react';

import './Spotlight.css';
import Instagram from '../assets/owner/instagram.png';
import Twitter from '../assets/owner/twitter.png';
import More from '../assets/owner/more.png';

const Spotlight = ({ selectedPunk, punkData }) => {
  const [activePunk, setActivePunk] = useState(punkData[3]);

  useEffect(() => {
    setActivePunk(punkData[selectedPunk]);
  }, [punkData, selectedPunk]);

  return (
    <div className="spotlight">
      <div className="spotlight-content">
        <div className="punk-highlight">
          <div className="punk-container">
            <img src={activePunk.image} className="selected-punk" alt="" />
          </div>
        </div>
        <div className="punk-details" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}
            <span className="item-number">#{activePunk.id}</span>
          </div>
          <div className="owner">
            {/* <div className="owner-image-container">
              <img src={activePunk.owner.image} className="selected-punk" alt="" />
            </div> */}
            <div className="owner-details">
              <div className="owner-name-handle">
                <div className="owner-handle">{activePunk.owner.address}</div>
              </div>
              <div className="owner-link">
                <img src={Instagram} alt="" />
              </div>
              <div className="owner-link">
                <img src={Twitter} alt="" />
              </div>
              <div className="owner-link">
                <img src={More} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight;
