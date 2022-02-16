import React from 'react';

import CollectionCard from './CollectionCard';
import './PunkList.css';

function PunkList({ punkData }) {
  return (
    <div className="punk-list">
      {punkData.map((punk) => (
        <div>
          <CollectionCard
            id={punk.id}
            image={punk.image}
            traits={punk.traits}
            name={punk.name}
          />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
