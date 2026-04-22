import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LandingPage from '../Landing_Page/LandingPage';

const NAME = "ZACHARY MACTAVISH.";

export default function IntroAnimation() {
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const letterRefs = useRef([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        if (overlayRef.current) overlayRef.current.style.display = 'none';
      },
    });

    // Reveal overlay
    tl.set(overlayRef.current, { autoAlpha: 1 });

    // Initialize letters off-screen below their mask
    tl.set(letterRefs.current, { yPercent: 110, autoAlpha: 0 });

    // Counter 0 → 100
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          const padded = String(Math.round(counterObj.value)).padStart(3, '0');
          counterRef.current.textContent = `${padded}%`;
        }
      },
    });

    // Letters stagger up, overlapping counter animation
    tl.to(
      letterRefs.current,
      {
        yPercent: 0,
        autoAlpha: 1,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=2'
    );

    // Clip overlay upward to dismiss
    tl.to(overlayRef.current, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.8,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <LandingPage />
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#0a0a0a',
          visibility: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          clipPath: 'inset(0% 0% 0% 0%)',
        }}
      >
        {/* Large name heading */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'min(7.5vw, 110px)',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
            margin: 0,
            lineHeight: 1,
          }}
        >
          {NAME.split('').map((char, i) => (
            /* outer span is the overflow:hidden mask */
            <span
              key={i}
              style={{ display: 'inline-block', overflow: 'hidden', lineHeight: 1.1 }}
            >
              {/* inner span is what GSAP animates */}
              <span
                ref={el => { letterRefs.current[i] = el; }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          ))}
        </h1>

        {/* Counter */}
        <div
          ref={counterRef}
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2.5rem',
            fontFamily: 'monospace',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.05em',
          }}
        >
          000%
        </div>
      </div>
    </>
  );
}