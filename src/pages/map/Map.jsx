import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Map3D from '../../component/scene/Map3D'
import "./map.css"
import MapModal from '../../component/mapModal/MapModal';
import { mapData } from '../../data/mapData';
import DropDown from '../../component/drop-down/DropDown';


const Map = ({ camera }) => {

  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState(null)

  const onSphereClick = (id) => {
    setOpen(true); // Display the modal when the sphere is clicked
    setModalId(id)
  };

  return (
    <div className='map'>
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