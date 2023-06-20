import { Canvas} from '@react-three/fiber';
import { Environment, Float, OrbitControls, SpotLight } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { Books } from './object/Books';
import {useStoreInventory} from "../../store/inventoryStore";
import { objectData } from '../../data/objectData';
import { Controller } from './object/Controller';
import { Manga } from './object/Manga';
import { Laptop } from './object/Laptop';
import { Tori } from './object/Tori';
import { Kwason } from './object/Kwason';
import { Mic } from './object/Mic';
import { Dumbell } from './object/Dumbell';

const Object = () => {

    const selectedId = useStoreInventory((state) => state.selectedId)

    const renderComponent = () => {
        let selectedComponent = null;
        console.log(selectedId);
    
        objectData.forEach((item) => {
            if (item.id === selectedId) {
                if (selectedId === 1) {
                    selectedComponent = <Controller />;
                } else if (selectedId === 2) {
                    selectedComponent = <Books />;
                } else if (selectedId === 3) {
                    selectedComponent = <Manga />;
                } else if (selectedId === 4) {
                    selectedComponent = <Laptop />;
                } else if (selectedId === 5) {
                    selectedComponent = <Tori />;
                } else if (selectedId === 6) {
                    selectedComponent = <Dumbell />;
                } else if (selectedId === 7) {
                    selectedComponent = <Mic />;
                } else if (selectedId === 8) {
                    selectedComponent = <Kwason />;
                }
            }
        });
    
        if (selectedComponent) {
            return selectedComponent;
        } else {
            return <Controller />; // Default component if no match found
        }
    }

    return (
        <div className='object'>
            <Canvas>
                <Float
                speed={0.8}
                rotationIntensity={1}
                floatIntensity={1}
                >
                    <Environment preset="sunset" />
                    {renderComponent()}

                </Float>
                <OrbitControls/>
            </Canvas>
        </div>
    );
};

export default Object;