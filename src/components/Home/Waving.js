import React from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelAni from './../Waving'

function Waving() {
    return (
            <Canvas
            className='Canvas'
            camera={{ position: [2, 1, 20], fov: 2.4 }}
            style={{
                height: '400px',
                width: '400px',
            }}
            >
            <ambientLight intensity={0.5} />
            <ambientLight intensity={0.01} />
            <directionalLight intensity={0.5} />
            <ModelAni position={[0.25, -0.3, -1]} />
            <OrbitControls target={[0.25, 1.2, -1]} enableDamping={true} enableZoom={false}/>
            </Canvas>
    );
}

export default Waving
