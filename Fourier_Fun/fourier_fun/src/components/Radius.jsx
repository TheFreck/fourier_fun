import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useEffect, useRef } from "react"

export const Radius = ({length,color,thickness}) => {
    const radiusRef = useRef();

    const points = []
    points.push(new THREE.Vector3(0, 0, 0))
    points.push(new THREE.Vector3(0, length, 0))
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    let globalPosition = new THREE.Vector3();

    useEffect(() => {
        radiusRef.current.rotation.z = Math.PI;
    },[]);
    
    // useFrame((state,delta) => {
    //     radiusRef.current.getWorldPosition(globalPosition);
    // });
    
    return <line
        ref={radiusRef}
        geometry={lineGeometry}
    >
        <lineBasicMaterial visible={false} attach="material" color={color} linewidth={thickness} />
    </line>
}

export default Radius;