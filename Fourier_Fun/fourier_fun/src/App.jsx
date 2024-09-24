import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react';
import FourierDrawer from './components/FourierDrawer';
import { Rotator } from './components/Rotator';
import { Radius } from './components/Radius';
import Pen from './components/Pen';


const App = () => {
    const [cameraX, setCameraX] = useState(0);
    const [cameraY, setCameraY] = useState(0);
    const [cameraZ, setCameraZ] = useState(100);
    const [delta,setDelta] = useState(1);

    const fogColor = new THREE.Color("black");
    const fog = new THREE.Fog(fogColor,.25,10000);
    
    return <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas background={fogColor} fog={fog} camera={{ position: [cameraX, cameraY, cameraZ] }}>
            <ambientLight intensity={.5} />
            <OrbitControls />
            <fog isFog near={1} far={1000} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[0, 0, 0]} decay={0} intensity={Math.PI} />
            <FourierDrawer />
        </Canvas>
    </div>
}

export default App;