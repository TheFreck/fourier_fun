import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from 'react';

export const Pen = ({radius,isFinal}) => {
    const penRef = useRef();
    let globalPosition = new THREE.Vector3();
    const globalPositions = [];
    let lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setFromPoints(globalPositions);

    useFrame((state,delta) => {
        if(isFinal){
            if(!state.globalPositions || state.globalPositions.length === 0) state.globalPositions = [];
            globalPosition = new THREE.Vector3();
            penRef.current.getWorldPosition(globalPosition);
            globalPositions.push(globalPosition);
            if(state.globalPositions.length >= 50) {
                globalPositions.shift();
                globalPositions.shift();
                globalPositions.shift();
            }
            state.globalPositions.push(globalPosition);
        }
    });

    return <mesh 
        position={[0,0,0]}
        ref={penRef} 
    >
        <sphereGeometry attach="geometry" args={[radius/50,10,5]}/>
        <meshBasicMaterial visible={false} intensity={5} isLight={true} attach="material" wireframe color={"yellow"} />
    </mesh>;
}

export default Pen;