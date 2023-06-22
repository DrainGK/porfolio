import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Map3D from '../../component/scene/Map3D'
import "./map.css"
import MapModal from '../../component/mapModal/MapModal';
import { mapData } from '../../data/mapData';
import DropDown from '../../component/drop-down/DropDown';
import { useStoreScore } from '../../store/scoreStore';


const Map = ({ camera }) => {

  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState(null)

  const currentScore = useStoreScore(state => state.currentScore)

  const onSphereClick = (id) => {
    setOpen(true); // Display the modal when the sphere is clicked
    setModalId(id)
    console.log(currentScore);
  };

  return (
    <div className='map'>
      <h2 className={ currentScore === 0 ? "enable" : "score"}>The gnome was found <strong>{currentScore}</strong> times</h2>
      <Canvas shadows camera={camera} fov={10}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Map3D onSphereClick={onSphereClick}/>
      </Canvas>
      {mapData.map((modal) => (
        <>
        {open && modal.id === modalId && (
          <MapModal open={open} onClose={() => setOpen(false)}>
            <h2>{modal.title}</h2>
            <h3>{modal.sub}</h3>
            {modal.content.map((item)=>(
              <DropDown dropTitle={item.name} content={item}/>
            ))}
          </MapModal>
        )}
        </>
      ))}
    </div>
  )
}

export default Map