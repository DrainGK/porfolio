import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import "./shaderScene.css"
import Shader from './ShaderPhoto';

const ShaderScene = () => {
    return (
        <div className="shader-container">
            <Canvas camera={{position: [1.0, 1.5, 1.0], fov:30}}>
                <pointLight position={[10,10,10]}/>
                <Suspense>
                    <Shader />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ShaderScene;