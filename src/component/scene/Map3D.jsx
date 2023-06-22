import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import './scene.css';
import { PerspectiveCamera, Text3D } from '@react-three/drei';
import { Audio } from 'three';
import { useDrag } from 'react-use-gesture';
import { mapData } from "../../data/mapData";
import gnomSound from "../../assets/sounds/gnome.mp3";
import { PositionalAudio } from '@react-three/drei';
import { useStoreScore } from '../../store/scoreStore';

const Map3D = ({ onSphereClick, score, setScore }) => {
  const texture = useLoader(THREE.TextureLoader, 'image/map_rpg.png');
  const gnom = useLoader(THREE.TextureLoader, 'image/Noggin.webp');
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

  const randomPosition = [
    Math.random() * 14 - 7,  // Random value between -7 and 7 for X-axis
    Math.random() * 10 - 5,  // Random value between -5 and 5 for Y-axis
    0                       // Z-axis position is set to 0
  ];

  const audioRef = useRef();
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [gnomPosition, setGnomPosition] = useState(randomPosition)
  const addScore = useStoreScore(state => state.addScore)
  const currentScore = useStoreScore(state => state.currentScore)

  const playSound = () => {
      audioRef.current.play();

      setGnomPosition(randomPosition);
      addScore(currentScore+1)
  }

  return (

      <PerspectiveCamera  position={[0, 0, -3]} onWheel={handleWheel}>
        
        <group position={position} {...bind()} ref={ref}>
            <mesh >
                <planeBufferGeometry args={[15, 10]} />
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh position={gnomPosition} scale={0.15} onClick={playSound}>
                <PositionalAudio loop = {false} ref={audioRef} url={gnomSound} />
                <planeBufferGeometry args={[1, 1]} />
                <meshBasicMaterial map={gnom} transparent opacity={1} />
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
