import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

export const PenLine = ({color,thickness}) => {
    const lineRef = useRef();
    const points = [];
    let lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setFromPoints(points);

    useFrame((state,delta) => {
        let worldPosition = new THREE.Vector3();
        lineRef.current.getWorldPosition(worldPosition);
        points.unshift(worldPosition);
        // lineRef.current.rotation.x += delta;
        // lineRef.current.rotation.y += delta;
        // lineRef.current.rotation.z -= delta/2;
        // console.log("position: ", worldPosition);
        // console.log("linePoints: ", points);
        lineGeometry.setFromPoints(points);
    });

    return <line 
        ref={lineRef} 
        geometry={lineGeometry}
        // position={position}
    >
        <lineBasicMaterial side={THREE.DoubleSide} attach="material" color={color} linewidth={thickness} />
    </line>;
}