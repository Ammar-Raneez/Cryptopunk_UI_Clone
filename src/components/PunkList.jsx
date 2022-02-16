import React from 'react';

import CollectionCard from './CollectionCard';
import './PunkList.css';

function PunkList({ punkData, setSelectedPunk }) {
  return (
    <div className="punk-list">
      {punkData.map((punk, index) => (
        <div
          key={index}
          onClick={() => setSelectedPunk(index)}
        >
          <CollectionCard
            id={punk.id}
            image={punk.image_url}
            traits={punk.traits}
            name={punk.name}
          />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
