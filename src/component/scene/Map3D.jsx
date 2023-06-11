import { Canvas, useLoader  } from '@react-three/fiber';
import * as THREE from 'three';
import React from 'react';
import "./scene.css"
import { OrbitControls } from '@react-three/drei';

const Map3D = ({ camera }) => {
    const texture = useLoader(THREE.TextureLoader, './image/map_rpg.png');
    return (

        <div className="scene">
            <Canvas shadows camera={camera} fov={10}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <planeBufferGeometry args={[15, 10]} />
                    <meshBasicMaterial map={texture} />
                    <OrbitControls makeDefault/>
                </mesh> 
            </Canvas>
        </div>
    );
};

export default Map3D;