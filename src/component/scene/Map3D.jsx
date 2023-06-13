import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import './scene.css';
import { OrbitControls, PerspectiveCamera, Sphere } from '@react-three/drei';
import { useDrag } from 'react-use-gesture';
import { mapData } from "../../data/mapData"

const Map3D = ({ onSphereClick }) => {
  const texture = useLoader(THREE.TextureLoader, 'image/map_rpg.png');
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport, camera } = useThree();
  const aspect = size.width / viewport.width;

  const zoomSpeed = 0.001; // Adjust this value to control the zoom speed
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleWheel = (event) => {
    const newZoomLevel = zoomLevel + event.deltaY * zoomSpeed;
    setZoomLevel(Math.max(0.5, newZoomLevel)); // Restrict zoom to a minimum of 0.1
  };

  useFrame(() => {
    camera.zoom = zoomLevel;
    camera.updateProjectionMatrix();
  });

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  const sphereRef = useRef();
  const [isClicked, setIsClicked] = useState();
  const [hover, setHover] = useState();

  const handleClick = (id) =>{
    onSphereClick(id);
    const isClickedData = mapData.find((data) => data.id === id);

    if(isClickedData){
      setIsClicked(isClickedData);
      console.log("click ok", isClickedData);
    } else {
      console.log("click not ok", id);
    }
  }

  const handleHover = (id) => {
    setHover(id);
  };

  return (
    
      <PerspectiveCamera  position={[0, 0, -3]} onWheel={handleWheel}>

        <group position={position} {...bind()} ref={ref}>
            <mesh >
                <planeBufferGeometry args={[15, 10]} />
                <meshBasicMaterial map={texture} />
            </mesh>
            
            {mapData.map((item) => (

            <mesh
            visible
            position={item.position}
            rotation={[0, 0, 0]}
            scale={0.15}
            castShadow
            onClick={() => handleClick(item.id)}
            onPointerOver={() => handleHover(item.id)}
            onPointerOut={() => handleHover(null)}
            ref= {sphereRef}
            >
                <ambientLight type='sunset'/>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial
              color={hover === item.id ? "red" : "white"}
              transparent
            />
            </mesh>
            ))}
        </group>
      </PerspectiveCamera>
  );
};

export default Map3D;
