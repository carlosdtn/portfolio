'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, extend, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import CirclesBackground from '../atoms/circles-background';
import PreLoader from '../atoms/pre-loader';

function MeshComponent() {
  const modelURL = '/model/40-bluebee.gltf';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, modelURL);

  useFrame(() => {
    mesh.current!.rotation.y += 0.0008;
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[0.2, 0.2, 0.2]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const CanvasSection = () => {
  return (
    <section className="hidden md:flex">
      <div className="relative rounded-md w-60 lg:w-80">
        <CirclesBackground />
        <Canvas camera={{ fov: 30, zoom: 0.35, near: 1, far: 1000 }}>
          {/* <OrbitControls /> */}
          <Suspense fallback={<PreLoader />}>
            <MeshComponent />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

extend({ CanvasSection });

export default CanvasSection;
