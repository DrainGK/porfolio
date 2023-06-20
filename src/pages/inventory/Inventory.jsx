import React, { useState } from 'react'
import "./inventory.css"
import { objectData } from '../../data/objectData'
import Object from '../../component/scene/Object';
import Scene from '../../component/scene/Scene';
import { useStoreInventory } from '../../store/inventoryStore';

const Inventory = () => {
  const [selectedSelector, setSelectedSelector] = useState(objectData[0]);
  const setId = useStoreInventory(state => state.setId)

  const handleClick = (id) => {
    setId(id)
    const selectedSelectorData = objectData.find((data) => data.id === id);

    if (selectedSelectorData) {
      setSelectedSelector(selectedSelectorData);
      console.log('Clic valide:', selectedSelectorData);
    } else {
      console.log('Clic invalide:', id);
    }

  };

  return (
    <div className='inventory'>
      <div className="inventory-left">
        <div className="object-selector-container">
          {objectData.map((data) => (
            <div className={selectedSelector && selectedSelector.id === data.id ? 'active-selector object-selector' : 'object-selector'}
            key={data.id}
            onClick={()=>(handleClick(data.id))}>
              {data.title}
            </div>
          ))}
        </div>
      </div>
      <div className="inventory-right">
        <div className="object-container">
          <Object />
        </div>
        {objectData.map((data) => (
           <div className={selectedSelector && selectedSelector.id === data.id ? 'object-info' : 'enable'}>
           <h2>{data.title}</h2>
           <p>{data.desc}</p>
         </div>
          ))}
        
      </div>

    </div>
  )
}

export default Inventory