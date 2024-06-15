import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from 'react';
import { PenLine } from './PenLine';

export const Pen = ({color,thickness,rotatorRef,radius,isFinal}) => {
    const penRef = useRef();
    const lineRef = useRef();
    let globalPosition = new THREE.Vector3();
    const globalPositions = [];
    const localPositions = [];
    let lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setFromPoints(globalPositions);
    const convertToLocal = (positions) => ({
        x: Math.sin(rotatorRef.current.rotation.z),
        y: Math.cos(rotatorRef.current.rotation.z),
        z: 0
    });

    useFrame((state,delta) => {
        console.log("is pen final: ", isFinal);
        penRef.current.rotation.z = -rotatorRef.current.rotation.z;
        lineRef.current.position.x = Math.cos(rotatorRef.current.rotation.z+(3*Math.PI)/2);
        lineRef.current.position.y = Math.sin(rotatorRef.current.rotation.z+(3*Math.PI)/2);
        lineRef.current.rotation.z = (rotatorRef.current.rotation.z - (Math.PI));
        globalPositions.unshift(new THREE.Vector3(-Math.sin(rotatorRef.current.rotation.z)*radius,-Math.cos(rotatorRef.current.rotation.z)*radius,0));
        if(globalPositions.length >= 200) globalPositions.shift();
        if(isFinal){
            lineGeometry.setFromPoints(globalPositions);
        }
    });

    return <mesh 
        ref={penRef} 
    >
        {/* <sphereGeometry args={[.1,10,5]}/> */}
        {/* <meshBasicMaterial wireframe color={"tan"} /> */}
        {
            <line

                ref={lineRef}
                geometry={lineGeometry}
            >
                <lineBasicMaterial side={THREE.DoubleSide} attach="material" color="green" linewidth={5} />
            </line>
        }
    </mesh>;
}

export default Pen;