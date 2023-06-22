/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/objects/croissant.glb
Author: Eydeet (https://sketchfab.com/eydeet)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/croissant-dff0057e04e64d988215a0411a1abf93
Title: Croissant
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Kwason(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF('objects/croissant.glb')

    return (
        <group {...props} ref={group} dispose={null} rotation-y={Math.PI / 2} scale={10} position={[0, -1, 0]}>
        <group scale={0.01} >
            <mesh geometry={nodes.textured002_textured_0002_0.geometry} material={materials['textured_0.002']} position={[0, 8.539, 0]} scale={100} />
        </group>
        </group>
    )
}

useGLTF.preload('/croissant.glb')
