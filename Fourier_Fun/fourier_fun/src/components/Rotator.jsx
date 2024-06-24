import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';
import { Radius } from "./Radius";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import Pen from "./Pen";

export const Rotator = (props) => {
    const {radius,isFinal,rotatorRef} = props;
    const couplingRef = useRef();
    let globalRotatorPosition = new THREE.Vector3();
    let globalCouplingPosition = new THREE.Vector3();

    useEffect(() => {
        couplingRef.current.rotation.z = 3*Math.PI;
    },[]);
    
    useFrame((state,delta) => {
        // rotatorRef.current.rotation.z += delta*2;
        couplingRef.current.position.y = Math.cos(couplingRef.current.rotation.z)*radius;
        couplingRef.current.position.x = Math.sin(couplingRef.current.rotation.z)*radius;
    })

    return <mesh 
        ref={rotatorRef}
        receiveShadow
        castShadow
        >
        <mesh
            ref={couplingRef}
        >
            <Pen radius={radius} isFinal={isFinal} />
            {props.children}
        </mesh>
        <sphereGeometry 
            args={[radius,1,1]}
            attach="geometry"
        />
        <meshStandardMaterial side={DoubleSide} attach="material" color={"gray"} transparent opacity={0} />
        <Radius length={radius} color="red" />
    </mesh>
}

export default Rotator;