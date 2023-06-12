import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Map3D from '../../component/scene/Map3D'
import "./map.css"
import MapModal from '../../component/mapModal/MapModal';


const Map = ({ camera }) => {

  const [open, setOpen] = useState(false);

  const handleSphereClick = () => {
    setOpen(true); // Display the modal when the sphere is clicked
  };

  return (
    <div className='map'>
      <Canvas shadows camera={camera} fov={10}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
            <Map3D onSphereClick={handleSphereClick}/>
      </Canvas>
      {open && <MapModal open={open} onClose={()=>setOpen(false)}>
        <h2>zob</h2>
        <h3>zoobi</h3>
        <p>Zob zob zob zoubibi</p>
        
        </MapModal>}
    </div>
  )
}

export default Map