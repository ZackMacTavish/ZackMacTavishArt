import React, { useRef, useEffect } from 'react';
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
  transform: translate3d(0,0,0) scale(1);
  transition: transform 0.1s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const hoveredRef = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const firstMove = useRef(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      const mouseX = e.clientX - cursorRef.current.clientWidth / 2;
      const mouseY = e.clientY - cursorRef.current.clientHeight / 2;

      if (!firstMove.current) {
        // Teleport cursor immediately to first mouse position
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
        // reset firstMove to allow teleport to new pointer location on re-entry
        firstMove.current = false;
      }
    };

    const animate = () => {
      if (cursorRef.current && firstMove.current) {
        // smooth follow
        current.current.x += (target.current.x - current.current.x) * 0.65;
        current.current.y += (target.current.y - current.current.y) * 0.65;

        const scale = hoveredRef.current ? 0.3 : 1;
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) scale(${scale})`;
      }
      requestAnimationFrame(animate);
    };

    const onHover = (e) => {
      const tag = e.currentTarget.tagName.toLowerCase();
      if ((tag === 'a' || tag === 'svg') && cursorRef.current) {
        hoveredRef.current = true;
        cursorRef.current.classList.add('hovered');
      }
    };

    const onHoverOut = (e) => {
      const tag = e.currentTarget.tagName.toLowerCase();
      if ((tag === 'a' || tag === 'svg') && cursorRef.current) {
        hoveredRef.current = false;
        cursorRef.current.classList.remove('hovered');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const hoverElements = document.querySelectorAll('a, svg');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onHoverOut);
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onHoverOut);
      });
    };
  }, []);

  return (
    <>
      <GlobalCursorStyle />
      <AppCursorstyles ref={cursorRef} />
    </>
  );
};

export default CustomCursor;