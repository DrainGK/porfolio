import { Canvas } from '@react-three/fiber';
import React from 'react';
import Experience from './Experience';
import "./scene.css"

const Scene = ({ camera }) => {
    return (

        <div className="scene">
            <Canvas shadows camera={camera}>
                <Experience />
            </Canvas>
        </div>
    );
};

export default Scene;