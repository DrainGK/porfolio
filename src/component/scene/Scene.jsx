import { Canvas } from '@react-three/fiber';
import React from 'react';
import Experience from './Experience';
import "./scene.css"

const Scene = ({ camera, x }) => {
    return (

        <div className="scene">
            <Canvas shadows camera={camera}>
                <Experience x={x}/>
            </Canvas>
        </div>
    );
};

export default Scene;