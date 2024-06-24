import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

export const PenLine = ({color,thickness,points,geometry}) => {
    const lineRef = useRef();

    return <line 
        ref={lineRef} 
        geometry={geometry}
    >
        <lineBasicMaterial side={THREE.DoubleSide} attach="material" color={color} linewidth={thickness} />
    </line>;
}