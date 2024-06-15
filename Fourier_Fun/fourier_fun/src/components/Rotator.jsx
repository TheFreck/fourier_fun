import { useRef, useState } from "react"
import * as THREE from 'three';
import { Radius } from "./Radius";
import { useFrame } from "@react-three/fiber";
import { BackSide, DoubleSide, FrontSide } from "three";
import Pen from "./Pen";

export const Rotator = (props) => {
    const {radius,isFinal} = props;
    const rotatorRef = useRef();
    const couplingRef = useRef();
    const [displayRadius, setDisplayRadius] = useState(false);
    const [displayCircumference, setDisplayCircumference] = useState(false);
    const [draw,setDraw] = useState(false);
    let globalRotatorPosition = new THREE.Vector3();
    let globalCouplingPosition = new THREE.Vector3();

    useFrame((state,delta) => {
        rotatorRef.current.rotation.z += delta;
        couplingRef.current.position.y = Math.cos(couplingRef.current.rotation.z);
        couplingRef.current.position.x = Math.sin(couplingRef.current.rotation.z);
        couplingRef.current.getWorldPosition(globalCouplingPosition);
    })

    return <mesh 
        ref={rotatorRef}
    >
        <mesh
            ref={couplingRef}
            position={[0,0,0]}
        >
            <Pen thickness={1} color="green" rotatorRef={rotatorRef} radius={radius} isFinal={isFinal} />
            {props.children}
        </mesh>
        <sphereGeometry 
            args={[radius,36,36]}
            attach="geometry"
        />
        <meshStandardMaterial side={DoubleSide} attach="material" color={"gray"} transparent opacity={.05} />
        <Radius length={radius} color="red" thickness={5} />
    </mesh>
}

export default Rotator;