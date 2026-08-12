import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalCursorStyle = createGlobalStyle`
  * { cursor: none !important; }
`;

const AppCursorstyles = styled.div`
  z-index: 2147483647;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0,0,0) translate(-50%, -50%) scale(1);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`;

const CustomCursor = ({ routeKey }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [portalTarget, setPortalTarget] = useState(() => document.fullscreenElement || document.body);
  const cursorRef = useRef(null);
  const hoveredRef = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const firstMove = useRef(false);
  const rafRef = useRef(null);
  const revealRafRef = useRef(null);
  const revealRafTwoRef = useRef(null);

  useEffect(() => {
    const mediaCoarse = window.matchMedia('(pointer: coarse)');

    // Match the eligibility check in App so touch pointers retain their native cursor.
    const checkMobile = () => {
      setIsMobile(mediaCoarse.matches);
    };

    checkMobile();
    mediaCoarse.addEventListener('change', checkMobile);

    return () => {
      mediaCoarse.removeEventListener('change', checkMobile);
    };
  }, []);

  useEffect(() => {
    const syncPortalTarget = () => {
      setPortalTarget(document.fullscreenElement || document.body);
    };

    document.addEventListener('fullscreenchange', syncPortalTarget);
    return () => document.removeEventListener('fullscreenchange', syncPortalTarget);
  }, []);

  useEffect(() => {
    if (isMobile) return; // disable all cursor logic on touch/coarse pointers

    const revealCursor = () => {
      if (revealRafRef.current || revealRafTwoRef.current) return;

      revealRafRef.current = requestAnimationFrame(() => {
        revealRafRef.current = null;
        revealRafTwoRef.current = requestAnimationFrame(() => {
          revealRafTwoRef.current = null;
          cursorRef.current?.classList.add('visible');
        });
      });
    };

    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!firstMove.current) {
        current.current = { x: mouseX, y: mouseY };
        target.current = { x: mouseX, y: mouseY };
        firstMove.current = true;
        revealCursor();
      } else {
        target.current = { x: mouseX, y: mouseY };
        if (!cursorRef.current.classList.contains('visible')) revealCursor();
      }
    };

    const resetCursor = () => {
      if (revealRafRef.current) cancelAnimationFrame(revealRafRef.current);
      if (revealRafTwoRef.current) cancelAnimationFrame(revealRafTwoRef.current);
      revealRafRef.current = null;
      revealRafTwoRef.current = null;
      firstMove.current = false;
      hoveredRef.current = false;
      if (cursorRef.current) {
        cursorRef.current.classList.remove('visible', 'hovered');
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        resetCursor();
      }
    };

    const animate = () => {
      if (cursorRef.current && firstMove.current) {
        current.current.x += (target.current.x - current.current.x) * 0.82;
        current.current.y += (target.current.y - current.current.y) * 0.82;

        const scale = hoveredRef.current ? 0.3 : 1;
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onHover = (e) => {
      const el = e.target.closest && e.target.closest('a, svg, [data-cursor-hover]');
      if (el && cursorRef.current) {
        hoveredRef.current = true;
        cursorRef.current.classList.add('hovered');
      }
    };

    const onHoverOut = (e) => {
      const el = e.target.closest && e.target.closest('a, svg, [data-cursor-hover]');
      if (!el) return;
      const related = e.relatedTarget;
      if (related && related.closest && related.closest('a, svg, [data-cursor-hover]')) return;
      if (cursorRef.current) {
        hoveredRef.current = false;
        cursorRef.current.classList.remove('hovered');
      }
    };

    resetCursor();
    document.addEventListener('pointermove', moveCursor, { passive: true });
    document.addEventListener('mouseleave', resetCursor);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mouseover', onHover);
    document.addEventListener('mouseout', onHoverOut);
    window.addEventListener('blur', resetCursor);
    window.addEventListener('focus', resetCursor);
    window.addEventListener('pagehide', resetCursor);

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('mouseleave', resetCursor);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mouseover', onHover);
      document.removeEventListener('mouseout', onHoverOut);
      window.removeEventListener('blur', resetCursor);
      window.removeEventListener('focus', resetCursor);
      window.removeEventListener('pagehide', resetCursor);
    };
  }, [isMobile, routeKey]);

  if (isMobile) return null;

  return (
    <>
      <GlobalCursorStyle />
      {createPortal(<AppCursorstyles ref={cursorRef} />, portalTarget)}
    </>
  );
};

export default CustomCursor;