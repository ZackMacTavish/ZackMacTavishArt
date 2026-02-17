import React, { useState, useEffect, useRef } from 'react';
import { Seo } from '@zackmactavish/foundation'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation } from '../../utils/seo'
import styled, { keyframes } from 'styled-components';
import Socials from '../../Components/Social Bar/Socials';
import landingimage from '../../assets/Collection_Web.png';

// Spotlight background animations
const spotlightLeftMove = keyframes`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`;

const spotlightRightMove = keyframes`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`;

const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation: ${spotlightLeftMove} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${spotlightRightMove} 40s ease-in-out infinite;
  }
`;

const LandingImage = styled.img`
  width: clamp(360px, 75vw, 2100px);
  position: relative;
  z-index: 1;
  transition: transform 0.5s ease;

  ${({ isMobile }) =>
    isMobile &&
    `
    transform: scale(1.3); /* Zoom in on mobile */
  `}
`;

const SpotlightText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 700;
  color: white;
  z-index: 2;
  text-align: center;
  pointer-events: none;

  /* mask only reveals text under mouse */
  -webkit-mask-image: radial-gradient(circle 120px at var(--x) var(--y), rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: var(--x) var(--y);
  mask-image: radial-gradient(circle 120px at var(--x) var(--y), rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  mask-repeat: no-repeat;
  mask-position: var(--x) var(--y);
  transition: mask-position 0.05s, -webkit-mask-position 0.05s;
`;

export default function LandingPage() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState(null); // start as null
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse spotlight effect (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x: `${xPercent}%`, y: `${yPercent}%` });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <LandingDiv ref={containerRef}>
      <Seo 
        title="Home  Zack MacTavish Art & Design" 
        description="Portfolio home showcasing art, design, printmaking, photography, and 3D works by Zack MacTavish." 
        image={require('../../assets/og/website-logoresolutions-1200x630.png')}
        url={canonicalFromLocation(useLocation())}
        keywords={["home", "portfolio", "art", "design", "printmaking", "photography", "3D"]}
        authorName="Zack MacTavish"
        authorAlternateNames={["Zachary MacTavish"]}
        sameAs={["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]}
        favicons={[
          { rel: 'icon', sizes: '16x16', href: require('../../assets/og/favicon-16.png') },
          { rel: 'icon', sizes: '32x32', href: require('../../assets/og/favicon-32.png') },
          { rel: 'icon', sizes: '48x48', href: require('../../assets/og/favicon-48.png') },
          { rel: 'icon', sizes: '64x64', href: require('../../assets/og/favicon-64.png') },
          { rel: 'icon', sizes: '128x128', href: require('../../assets/og/favicon-128.png') },
          { rel: 'icon', sizes: '256x256', href: require('../../assets/og/favicon-256.png') },
          { rel: 'icon', sizes: '512x512', href: require('../../assets/og/favicon-512.png') },
          { rel: 'apple-touch-icon', sizes: '180x180', href: require('../../assets/og/website-logoresolutions-180px.png') },
          { rel: 'icon', sizes: '192x192', href: require('../../assets/og/website-logoresolutions-192px.png') },
          { rel: 'icon', sizes: '512x512', href: require('../../assets/og/website-logoresolutions-512px.png') },
          { rel: 'icon', href: '/favicon.ico' }
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zack MacTavish Art & Design",
          "url": canonicalFromLocation(useLocation()),
          "author": {
            "@type": "Person",
            "name": "Zack MacTavish",
            "alternateName": ["Zachary MacTavish"],
            "sameAs": ["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]
          }
        }}
      />
      <LandingImage src={landingimage} alt="Landing" isMobile={isMobile} />

      {/* Only show spotlight text on desktop and after mouse moves */}
      {!isMobile && mousePos && (
        <SpotlightText style={{ '--x': mousePos.x, '--y': mousePos.y }}>
          Glad you stopped by
        </SpotlightText>
      )}

      <Socials />
    </LandingDiv>
  );
}