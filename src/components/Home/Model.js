import React from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelAni from '../Waving'

function Model() {
    return (
            <Canvas
            className="model-ani"
            camera={{ position: [2, 1, 20], fov: 2.8 }}
            style={{
                height: '400px',
                width: '400px',
            }}
            >
            <ambientLight intensity={0.5} />
            <ambientLight intensity={0.01} />
            <directionalLight intensity={0.5} />
            <ModelAni position={[0.13, -0.14, -1]} />
            <OrbitControls target={[0.13, 1.2, -1]} enableDamping={true} enableZoom={false}/>
            </Canvas>
    );
}

export default Model
