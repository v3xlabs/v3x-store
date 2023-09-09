'use client';

import {
    Environment,
    PresentationControls,
    useTexture,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { MeshStandardMaterial, RepeatWrapping } from 'three';

import { Model } from './S2';

function Shirt(properties) {
    // const snap = useSnapshot(state);
    // const texture = useTexture('/favicon.png');
    const reference = useRef();
    const [lastActive, setLastActive] = useState(0);

    //     easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
    // );
    useFrame((state, delta) => {
        if (reference.current && Date.now() - lastActive > 1000) {
            // @ts-ignore
            reference.current['rotation']['y'] += 0.01;
        }
    }, 0);

    return (
        <PresentationControls
            global
            snap
            polar={[-Math.PI / 2, Math.PI / 2]}
            azimuth={[Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]}
            speed={0.5}
        >
            <group
                ref={reference}
                position={[0, 0, 0]}
                scale={[3, 3, 3]}
                onPointerMove={() => {
                    setLastActive(Date.now());
                }}
            >
                <Model />
            </group>
        </PresentationControls>
    );
}

const MyScene = () => {
    const [texture] = useTexture(['/items/shirt/s2.png']);

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(1, 1);
    console.log(texture);

    const myMaterial = new MeshStandardMaterial({ map: texture });

    return (
        <>
            <ambientLight intensity={0.7} />
            <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
            />
            <Environment preset="warehouse" blur={1} />
            <Suspense fallback={<></>}>
                <Shirt />
                {/* <mesh>
                    <Box material={myMaterial} />
                </mesh> */}
            </Suspense>
            {/* <Stats /> */}
        </>
    );
};

export const StoreItemPreview = () => {
    return (
        <div className="w-52 aspect-square border rounded-xl overflow-hidden m-4">
            <Canvas
                shadows
                camera={{ zoom: 3 }}
                // gl={{ preserveDrawingBuffer: true }}
                className="w-full h-full"
                style={{
                    pointerEvents: 'none',
                }}
            >
                <color attach="background" args={['#fff']} />
                <MyScene />
            </Canvas>
        </div>
    );
};
