/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/objects/laptop.glb
Author: gbarzu (https://sketchfab.com/gbarzu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/laptop-asus-rog-zephyrus-g15-made-with-blender-f632acb998334d6d9ecb581b81b1c3eb
Title: Laptop Asus ROG Zephyrus G15 - Made with Blender
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
    const group = useRef();
  const { nodes, materials } = useGLTF('objects/laptop.glb')
  return (
    <group {...props} ref={group} dispose={null} rotation-y={Math.PI / 4} position={[0, -1, 0]} scale={10}>
      <group position={[0, 0.001, 0]} rotation={[0.029, 0, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.InteriorBlack} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.IndicatorLights} />
      </group>
      <group position={[-0.001, -0.006, -0.022]} rotation={[0.029, 0, 0]}>
        <mesh geometry={nodes.Object_29.geometry} material={materials.LaptopSurface} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.LaptopSurface} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.LaptopSurface} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Painted} />
      </group>
      <group position={[0, 0.103, -0.162]}>
        <mesh geometry={nodes.Object_46.geometry} material={materials.LaptopSurface} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.SurfaceMetal} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Painted} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.InteriorBlack} rotation={[-1.927, 0, 0]} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.Logo} rotation={[-1.927, 0, 0]} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Screen} rotation={[-1.927, 0, 0]} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.LaptopSurface} rotation={[-1.927, 0, 0]} />
      </group>
      <mesh geometry={nodes.Object_7.geometry} material={materials.InteriorBlack} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.InteriorBlack} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.InteriorBlack} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.InteriorBlack} position={[-0.17, 0.002, 0.036]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.InteriorBlack} position={[0, 0.002, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.InteriorBlack} position={[0, -0.001, 0.091]} rotation={[-3.113, 0, -Math.PI]} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.InteriorBlack} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.InteriorBlack} position={[0, 0.002, -0.015]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.InteriorBlack} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.InteriorBlack} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.material_0} position={[0.001, 0.004, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.InteriorBlack} position={[0, -0.001, -0.008]} rotation={[0.029, 0, 0]} scale={0.025} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.LaptopSurface} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.SurfaceMetal} position={[0, 0.001, 0]} rotation={[0.029, 0, 0]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.SurfaceMetal} position={[0, 0.001, 0]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.SurfaceMetal} position={[0, 0.001, 0]} rotation={[0.029, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.Keyboard} position={[-0.002, 0.007, -0.044]} rotation={[0.029, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/laptop.glb')
