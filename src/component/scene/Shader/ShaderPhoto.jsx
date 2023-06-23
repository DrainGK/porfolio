import React, { useRef, useMemo } from 'react';
import { shaderMaterial } from '@react-three/drei';
import glsl from "babel-plugin-glsl/macro"
import { useFrame } from '@react-three/fiber';
import * as THREE from "three"

const fragmentShader = `
precision mediump float;

vec3 colorA = vec3(0.712,0.351,1.0);
uniform float u_time;

varying vec2 vUv;

void main() {
  gl_FragColor = vec4(colorA,1.0);
}

`
const vertexShader = `
uniform float u_time;

varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
    
    // Uncomment the code and hit the refresh button below for a more complex effect 🪄
    modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
  
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;
  }
`;


const ShaderPhoto = () => {
    const mesh = useRef()
    const uniforms = useMemo(
        () => ({
          u_time: {
            value: 0.0,
          },
        }),
    []
    );
    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });
    return (
        <mesh ref={mesh} position={[0, 0, 0]}  rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <shaderMaterial
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
            wireframe
        />
        </mesh>
    );
};

export default ShaderPhoto;