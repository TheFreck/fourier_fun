import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react';
import FourierDrawer from './components/FourierDrawer';
import { Camera, PerspectiveCamera } from 'three';
import { Rotator } from './components/Rotator';
import { Radius } from './components/Radius';
import Pen from './components/Pen';


const App = () => {
    const [cameraX, setCameraX] = useState(0);
    const [cameraY, setCameraY] = useState(0);
    const [cameraZ, setCameraZ] = useState(3);
    const [delta,setDelta] = useState(1);
    
    return <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [cameraX, cameraY, cameraZ] }}>
            <ambientLight intensity={.5} />
            <OrbitControls />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[0, 0, 0]} decay={0} intensity={Math.PI} />
            {/* <FourierDrawer position={[3, 3, 3]} >
            </FourierDrawer> */}
            <Rotator radius={1}>
                <Rotator radius={1/3} >
                    <Rotator radius={1/5}>
                        <Rotator radius={1/7} isFinal={true}></Rotator>
                    </Rotator>
                </Rotator>
            </Rotator>
            {/* <Radius length={10} color="violet" thickness={5} /> */}
        </Canvas>
    </div>
}

export default App;