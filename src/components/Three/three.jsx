// src/components/Three/three.jsx
import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import styled from "styled-components";
import blackTurtleneck from "../../assets/BlackTurtleneck-popart-01.jpg";

// Container
const ThreeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

// Wave mesh component
const Wave = () => {
  const ref = useRef();

  // Animate wave
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      const positions = ref.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const waveZ = Math.sin(x * 3 + time) * 0.15 + Math.cos(y * 3 + time) * 0.15;
        positions.setZ(i, waveZ);
      }
      positions.needsUpdate = true;
    }
  });

  // Load texture
  const [texture] = useLoader(THREE.TextureLoader, [
    blackTurtleneck,
  ]);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <ThreeWrapper>
      <Canvas camera={{ fov: 50, position: [0, 0, 4] }}> {/* Zoomed out 10x */}
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    </ThreeWrapper>
  );
};

export default Scene;