// src/components/Nav/Nav.jsx
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  background-color: ${(props) => props.theme.uiSurface};
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: var(--layout-header-height);
  padding: 0 3vw;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.pageSubtle};
  z-index: 1000;

  @media (max-width: 900px), (prefers-reduced-motion: reduce) {
    backdrop-filter: none;
    background-color: ${(props) => props.theme.uiSurfaceStrong};
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
  clip-path: inset(-150px -100px 0);
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
  filter: ${(props) => props.theme.iconFilter};
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
  color: ${(props) => props.theme.pageText};
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

  /* Only show the desktop hover dropdown on devices that actually hover.
     On touch devices iOS/Android emulate :hover on first tap which would
     reveal this dropdown and require a second tap to fire onClick. */
  @media (hover: hover) and (pointer: fine) {
    &:has(> div)::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 11rem;
      height: calc(100% + 4vh + 0.75rem);
      transform: translateX(-50%);
      z-index: 999;
      pointer-events: none;
    }

    &:has(> div):hover::after {
      pointer-events: auto;
    }

    &:has(> div):hover > div {
      display: block;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  z-index: 1001;
  color: ${(props) => props.theme.pageText};
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

const HelpButton = styled.button`
  display: grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
  padding: 0;
  border: 1px solid ${(props) => props.theme.controlBorder};
  border-radius: 50%;
  background: transparent;
  color: ${(props) => props.theme.pageText};
  font: 700 0.9rem/1 'Space Grotesk', sans-serif;

  &:hover {
    background: ${(props) => props.theme.controlBackground};
    color: ${(props) => props.theme.controlText};
  }

  &:focus-visible {
    outline: 2px solid #e88d67;
    outline-offset: 3px;
  }
`;

const HelpItem = styled.li`
  position: relative;
  z-index: 1001;
  display: flex;
  align-items: center;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: grid;
  place-items: center;
  padding: 1.25rem;
  background: rgba(0, 0, 0, 0.46);
`;

const ShortcutsDialog = styled.div`
  width: min(30rem, calc(100vw - 2.5rem));
  box-sizing: border-box;
  padding: clamp(1.35rem, 4vw, 2rem);
  background: ${(props) => props.theme.uiSurfaceStrong};
  color: ${(props) => props.theme.pageText};
  border: 1px solid ${(props) => props.theme.controlBorder};
  border-radius: 8px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
`;

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const DialogTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.15;
`;

const DialogClose = styled.button`
  min-width: 2.5rem;
  padding: 0.4rem 0.55rem;
  border: 1px solid ${(props) => props.theme.controlBorder};
  border-radius: 4px;
  background: transparent;
  color: ${(props) => props.theme.pageText};
  font: 600 0.75rem/1 'Space Grotesk', sans-serif;

  &:focus-visible {
    outline: 2px solid #e88d67;
    outline-offset: 2px;
  }
`;

const DialogIntro = styled.p`
  margin: 0.8rem 0 1.25rem;
  color: ${(props) => props.theme.pageMuted};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ShortcutList = styled.ul`
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ShortcutItem = styled.li`
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 0.8rem;
  align-items: center;
`;

const ShortcutKey = styled.kbd`
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.controlBorder};
  border-radius: 4px;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.pageText};
  font: 700 0.9rem/1 'Space Grotesk', sans-serif;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(50% + 4vh);
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.uiSurfaceStrong};
  backdrop-filter: blur(6px);
  border: 1px solid ${(props) => props.theme.controlBorder};
  border-radius: 0 0 0.25rem 0.25rem;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: none;
  min-width: 8rem;
  z-index: 1000;

  /* The mobile menu overlay handles touch navigation; never show this
     dropdown on small screens or coarse pointers. */
  @media (max-width: 900px), (pointer: coarse) {
    display: none !important;
    backdrop-filter: none;
  }
`;

const DropdownMenu = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.pageText};
  text-decoration: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus-visible {
    background-color: ${(props) => props.theme.pageSubtle};
    box-shadow: inset 3px 0 0 #e88d67;
    color: ${(props) => props.theme.pageText};
  }

  &:focus-visible {
    outline: none;
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.pageSubtle};
  margin: 0.25rem 0;
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.uiSurfaceStrong};
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
  color: ${(props) => props.theme.pageText};
  border: 0;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
`;

const MobileMenuLink = styled(Link)`
  color: ${(props) => props.theme.pageText};
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(1.45rem, 5vw, 2rem);
  letter-spacing: 0.02em;
  padding: 0.35rem 1rem;
`;

export default function Nav({ hidden = false, themeMode = 'light', customCursorActive = false }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(max-width: 900px)').matches;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const helpButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openedWithKeyboardRef = useRef(false);
  const restoreKeyboardFocusRef = useRef(false);

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

  useEffect(() => {
    const openShortcuts = (event) => {
      const target = event.target;
      const isEditable = target instanceof HTMLElement
        && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

      if (isEditable || event.metaKey || event.ctrlKey || event.altKey || event.key !== '?') return;
      event.preventDefault();
      openedWithKeyboardRef.current = true;
      restoreKeyboardFocusRef.current = true;
      setIsShortcutsOpen(true);
    };

    window.addEventListener('keydown', openShortcuts);
    return () => window.removeEventListener('keydown', openShortcuts);
  }, []);

  useEffect(() => {
    if (!isShortcutsOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const helpButton = helpButtonRef.current;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        restoreKeyboardFocusRef.current = true;
        setIsShortcutsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    if (openedWithKeyboardRef.current) closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      if (restoreKeyboardFocusRef.current) helpButton?.focus();
      openedWithKeyboardRef.current = false;
      restoreKeyboardFocusRef.current = false;
    };
  }, [isShortcutsOpen]);

  if (hidden) {
    return null;
  }

  return (
    <Navdiv>
      <Link to="/">
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
          <ListItem>
            <NavLink to="/cv">CV</NavLink>
          </ListItem>
          <HelpItem>
            <HelpButton
              ref={helpButtonRef}
              type="button"
              aria-label="Open keyboard shortcuts help"
              aria-haspopup="dialog"
              data-cursor-hover
              onClick={(event) => {
                const openedWithKeyboard = event.detail === 0;
                openedWithKeyboardRef.current = openedWithKeyboard;
                restoreKeyboardFocusRef.current = openedWithKeyboard;
                setIsShortcutsOpen(true);
              }}
            >
              ?
            </HelpButton>
          </HelpItem>
        </NavLinks>

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
          <MobileMenuLink to="/cv" onClick={() => setIsMobileMenuOpen(false)}>CV</MobileMenuLink>
        </MobileMenuOverlay>
      ) : null}

      {isShortcutsOpen ? createPortal(
        <ModalBackdrop
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              restoreKeyboardFocusRef.current = false;
              setIsShortcutsOpen(false);
            }
          }}
        >
          <ShortcutsDialog
            role="dialog"
            aria-modal="true"
            aria-labelledby="keyboard-shortcuts-title"
          >
            <DialogHeader>
              <DialogTitle id="keyboard-shortcuts-title">Keyboard Shortcuts</DialogTitle>
              <DialogClose
                ref={closeButtonRef}
                type="button"
                aria-label="Close keyboard shortcuts help"
                onClick={(event) => {
                  restoreKeyboardFocusRef.current = event.detail === 0;
                  setIsShortcutsOpen(false);
                }}
              >
                Esc
              </DialogClose>
            </DialogHeader>
            <DialogIntro>Use these shortcuts to change how the portfolio appears and responds.</DialogIntro>
            <ShortcutList>
              <ShortcutItem>
                <ShortcutKey>D</ShortcutKey>
                <span>Toggle light and dark mode (currently {themeMode}).</span>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>C</ShortcutKey>
                <span>Toggle the custom cursor (currently {customCursorActive ? 'custom' : 'native'}).</span>
              </ShortcutItem>
              <ShortcutItem>
                <ShortcutKey>Esc</ShortcutKey>
                <span>Close this panel.</span>
              </ShortcutItem>
            </ShortcutList>
          </ShortcutsDialog>
        </ModalBackdrop>,
        document.body,
      ) : null}
    </Navdiv>
  );
}