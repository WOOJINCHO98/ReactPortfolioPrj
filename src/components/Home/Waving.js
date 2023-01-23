import React from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelAni from './../Waving'

function Waving() {
    return (
        <div className='CanvasContainer'>
            <Canvas
            className='Canvas'
            camera={{ position: [2, 2, 12.25], fov: 6 }}
            style={{
                height: '50vh',
                width: '50vw',
            }}
            >
            <ambientLight intensity={0.85} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.5} />
            <ModelAni position={[0, 0, 0]} />
            <OrbitControls target={[0, 1.2, 0]} enableDamping={true} enableZoom={false}/>
            </Canvas>
        </div>
    );
}

export default Waving
