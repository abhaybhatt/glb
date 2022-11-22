import React, { Suspense } from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import {
    Canvas, useThree
 } from "@react-three/fiber"

function Model() {
    const { scene } = useGLTF("model.glb")
    return <primitive object={scene} />;
}

const deg2rad = degrees => degrees * (Math.PI / 180);

// const Scene = () => {
//     useThree(({ camera }) => {
//         camera.rotation.set(deg2rad(30), 0, 0);
//     });
// }
const ShowDonut = (props) => {
    // useThree(({ camera }) => {
    //     camera.rotation.set(deg2rad(30), 0, 0);
    // });
    return (
        <div style={{ height: "100vh", backgroundColor: "#fde2e4" }}>
            <Canvas camera={{ position: [40, 14, 23], fov: 7 }}>
                {/* <CameraControls /> */}
                <pointLight position={[30, 10, 10]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls 
                    enableZoom={false}
                    maxAzimuthAngle={Math.PI}
                    maxPolarAngle={Math.PI}
                    minAzimuthAngle={-Math.PI}
                    minPolarAngle={-Math.PI} />
            </Canvas>
        </div>
    );
}

export default ShowDonut