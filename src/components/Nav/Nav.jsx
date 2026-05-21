// src/components/Nav/Nav.jsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/Final-M-SinglePiece.svg';
import { Link } from 'react-router-dom';

const spotlightLeftMove = keyframes`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`;

const spotlightRightMove = keyframes`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`;

const Spotlight = styled.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const SpotlightLeft = styled(Spotlight)`
  left: 0;
  animation: ${spotlightLeftMove} 6s ease-in-out infinite;
`;

const SpotlightRight = styled(Spotlight)`
  right: 0;
  animation: ${spotlightRightMove} 6s ease-in-out infinite;
`;

const slideFade = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`;

const Navdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    backdrop-filter: none;
    background-color: rgba(0, 0, 0, 0.72);
  }
`;

const StrokeWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`;

const SolidStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${slideFade} 10s ease-in-out forwards;
  z-index: 998;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    display: none;
    animation: none;
  }
`;

const NeonStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 4px;
  background: linear-gradient(to right, #FF8D67, #E88D67, #FFAA88);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(20px);
  mask-image: linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%);
  -webkit-mask-image: linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%);
  animation: ${slideFade} 10s ease-in-out forwards;
  z-index: 999;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    display: none;
    animation: none;
  }
`;

const pinkPulse = keyframes`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`;

const PinkMicroStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 700px; 
  height: 16px;
  background: linear-gradient(
    to right,
    transparent 0%, 
    #ff6ec7 10%, 
    #ff1493 50%, 
    #ff6ec7 85%, 
    transparent 100%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(36px);
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
  animation: ${slideFade} 10s ease-in-out forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 30, 150, 0.8) 35%,
      rgba(255, 30, 150, 1) 50%,
      rgba(255, 30, 150, 0.8) 65%,
      transparent 100%
    );
    background-size: 100% 100%;
    background-repeat: no-repeat;
    animation: ${pinkPulse} 2s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 30, 150, 0.2), transparent);
    pointer-events: none;
  }

  z-index: 1001;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    display: none;
    animation: none;
  }
`;

const Logo = styled.img`
  width: clamp(46px, 2.6vw, 90px);
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media (max-width: 1200px) { gap: 1rem; }
  @media (max-width: 800px) { gap: 0.8rem; font-size: 1rem; }
`;

const NavLabel = styled.span`
  color: #D7E1F2;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const ListItem = styled.li`
  position: relative;
  white-space: nowrap;

  &:hover > div {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: #D7E1F2;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(74, 74, 74, 0.9);
  backdrop-filter: blur(6px);
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: none;
  min-width: 8rem;
  z-index: 1000;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    backdrop-filter: none;
  }
`;

const DropdownMenu = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #3F455C;
    color: white;
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.96);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 901px) {
    display: none;
  }
`;

const MobileMenuClose = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  color: #f3f0e8;
  border: 0;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
`;

const MobileMenuLink = styled(Link)`
  color: #f3f0e8;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(1.45rem, 5vw, 2rem);
  letter-spacing: 0.02em;
  padding: 0.35rem 1rem;
`;

export default function Nav({ hidden = false }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(max-width: 900px)').matches;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const syncMobileMode = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    syncMobileMode();
    mediaQuery.addEventListener('change', syncMobileMode);

    return () => {
      mediaQuery.removeEventListener('change', syncMobileMode);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  if (hidden) {
    return null;
  }

  return (
    <Navdiv>
      <Link to="/" style={{ cursor: 'none' }}>
        <Logo src={logo} />
      </Link>

      <NavLinksWrapper>
        <NavLinks>
          <ListItem>
            {isMobile ? (
              <NavLabel
                role="button"
                tabIndex={0}
                onClick={() => setIsMobileMenuOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsMobileMenuOpen(true);
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                Art
              </NavLabel>
            ) : (
              <NavLabel>Art</NavLabel>
            )}
            <Dropdown>
              <DropdownMenu to="/dwelling">Dwelling</DropdownMenu>
              <DropdownMenu to="/composition">Composition</DropdownMenu>
              <DropdownDivider />
              <DropdownMenu to="/printmaking">Printmaking</DropdownMenu>
              <DropdownMenu to="/photography">Photography</DropdownMenu>
              <DropdownMenu to="/3d">3D + Graffiti</DropdownMenu>
            </Dropdown>
          </ListItem>

          <ListItem>
            <NavLink to="/About">About</NavLink>
          </ListItem>
        </NavLinks>

        <StrokeWrapper>
          <SolidStroke />
          <NeonStroke />
          <PinkMicroStroke />
          <SpotlightLeft />
          <SpotlightRight />
        </StrokeWrapper>
      </NavLinksWrapper>

      {isMobile && isMobileMenuOpen ? (
        <MobileMenuOverlay>
          <MobileMenuClose type="button" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>
            ×
          </MobileMenuClose>
          <MobileMenuLink to="/dwelling" onClick={() => setIsMobileMenuOpen(false)}>Dwelling</MobileMenuLink>
          <MobileMenuLink to="/composition" onClick={() => setIsMobileMenuOpen(false)}>Composition</MobileMenuLink>
          <MobileMenuLink to="/printmaking" onClick={() => setIsMobileMenuOpen(false)}>Printmaking</MobileMenuLink>
          <MobileMenuLink to="/photography" onClick={() => setIsMobileMenuOpen(false)}>Photography</MobileMenuLink>
          <MobileMenuLink to="/3d" onClick={() => setIsMobileMenuOpen(false)}>3D + Graffiti</MobileMenuLink>
          <MobileMenuLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileMenuLink>
        </MobileMenuOverlay>
      ) : null}
    </Navdiv>
  );
}