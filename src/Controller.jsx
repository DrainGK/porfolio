/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/objects/controller.glb
Author: AHarmlessPotato (https://sketchfab.com/AHarmlessPotato)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/playstation-5-dualsense-878c1f882808477ab81c2fe86d5a3936
Title: Playstation 5 Dualsense
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Controller(props) {
  const { nodes, materials } = useGLTF('/controller.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.196}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['1011']} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['1001']} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials['1002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/controller.glb')
