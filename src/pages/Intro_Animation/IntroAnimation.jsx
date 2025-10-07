import React, { useEffect, Suspense, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useGLTF } from '@react-three/drei';
import LandingPage from '../Landing_Page/LandingPage';

// Slide-up + blur fade-in for text
const slideUpBlur = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(250px); 
    filter: blur(15px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
    filter: blur(0); 
  }
`;

// Main vertical windshield wipe
const wipeOutVertical = keyframes`
  0% { transform: translateY(0%); }
  100% { transform: translateY(100%); }
`;

const IntroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;

  ${props =>
    props.animateOut &&
    css`
      animation: ${wipeOutVertical} 0.35s ease-in-out forwards; /* snappy wipe */
    `}
`;

const IntroText = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  color: white;
  animation: ${slideUpBlur} 1.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  text-align: center;
  z-index: 20;
`;

function FlowerModel(props) {
  const { scene } = useGLTF('/models/scene.glb');
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
      ref.current.rotation.x += 0.0008;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}

function FloatingFlower() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 2.5], fov: 50 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Float floatIntensity={0.1} rotationIntensity={0.05}>
          <FlowerModel scale={8} position={[0, 0, 0]} />
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

export default function IntroAnimation() {
  const text = "Hi, I'm Zack MacTavish";
  const [showText, setShowText] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1500);
    const wipeTimer = setTimeout(() => setAnimateOut(true), 4000);
    const hideTimer = setTimeout(() => setShowIntro(false), 4400);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(wipeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <LandingPage /> {/* animations remain active */}
      {showIntro && (
        <IntroDiv animateOut={animateOut}>
          <FloatingFlower />
          {showText && <IntroText>{text}</IntroText>}
        </IntroDiv>
      )}
    </>
  );
}