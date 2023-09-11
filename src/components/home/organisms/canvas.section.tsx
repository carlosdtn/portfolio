'use client';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const PigeonModel = () => {
  const pigeon = useLoader(STLLoader, '/stl/pigeon_voxel.stl');
  return <primitive object={pigeon} />;
};

const Box = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const CanvasSection = () => {
  return (
    <section>
      {/* <Canvas className="h-full border rounded-md border-cd-gray/10 w-60 bg-cd-dark-gray/20">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
      </Canvas> */}
      <canvas className="h-full border rounded-md border-cd-gray/10 w-60 bg-cd-dark-gray/20"></canvas>
    </section>
  );
};

export default CanvasSection;
