import React from 'react';

import weth from '../assets/weth.png';
import './CollectionCard.css';

function CollectionCard({ id, traits, image, name }) {
  return (
    <div className="collection-card">
      <img src={image} alt="card-banner" />
      <div className="details">
        <div className="name">
          {name} <div className="id">#{id}</div>
        </div>
        <div className="price-container">
          <img src={weth} className="eth-logo" alt='eth' />
          <div className="price">
            {traits[0]?.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
