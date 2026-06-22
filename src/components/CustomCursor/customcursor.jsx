import React, { useRef, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalCursorStyle = createGlobalStyle`
  * { cursor: none !important; }
`;

const AppCursorstyles = styled.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
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

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const cursorRef = useRef(null);
  const hoveredRef = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const firstMove = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const mediaReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mediaCoarse = window.matchMedia('(pointer: coarse)');

    // Disable the custom cursor on touch/coarse pointers and reduced-motion users.
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900 || mediaCoarse.matches);
      setReduceMotion(mediaReduce.matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    mediaReduce.addEventListener('change', checkMobile);
    mediaCoarse.addEventListener('change', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaReduce.removeEventListener('change', checkMobile);
      mediaCoarse.removeEventListener('change', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile || reduceMotion) return; // disable all cursor logic on mobile/reduced-motion

    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!firstMove.current) {
        current.current = { x: mouseX, y: mouseY };
        target.current = { x: mouseX, y: mouseY };
        cursorRef.current.classList.add('visible');
        firstMove.current = true;
      } else {
        target.current = { x: mouseX, y: mouseY };
        cursorRef.current.classList.add('visible');
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('visible');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        hideCursor();
      } else {
        firstMove.current = false;
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

    document.addEventListener('pointermove', moveCursor, { passive: true });
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mouseover', onHover);
    document.addEventListener('mouseout', onHoverOut);

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mouseover', onHover);
      document.removeEventListener('mouseout', onHoverOut);
    };
  }, [isMobile, reduceMotion]);

  if (isMobile || reduceMotion) return null; // Don’t render anything on mobile/reduced-motion

  return (
    <>
      <GlobalCursorStyle />
      <AppCursorstyles ref={cursorRef} />
    </>
  );
};

export default CustomCursor;