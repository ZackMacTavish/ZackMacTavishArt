import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import LandingPage from '../Landing_Page/LandingPage';

const NAME = "ZACHARY MACTAVISH.";

export default function IntroAnimation({ onIntroReady }) {
  const [showCarousel, setShowCarousel] = useState(false);
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const letterRefs = useRef([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    onIntroReady?.();
  }, [onIntroReady]);

  useEffect(() => {
    let isCancelled = false;
    let timeline = null;
    const carouselTimer = window.setTimeout(() => {
      setShowCarousel(true);
    }, 900);

    document.body.style.overflow = 'hidden';

    import('gsap').then((module) => {
      if (isCancelled) {
        return;
      }

      const gsap = module.default;

      timeline = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          if (overlayRef.current) overlayRef.current.style.display = 'none';
        },
      });

      timeline.set(counterRef.current, { autoAlpha: 1 });
      timeline.set(letterRefs.current, { yPercent: 110, autoAlpha: 0 });

      const counterObj = { value: 0 };
      timeline.to(counterObj, {
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

      timeline.to(
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

      timeline.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.8,
        ease: 'power4.inOut',
      });
    });

    return () => {
      isCancelled = true;
      window.clearTimeout(carouselTimer);
      timeline?.kill();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <LandingPage showCarousel={showCarousel} />
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#0a0a0a',
          visibility: 'visible',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          clipPath: 'inset(0% 0% 0% 0%)',
        }}
      >
        {/* Large name heading */}
        <div
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
                style={{ display: 'inline-block', opacity: 0, visibility: 'hidden' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          ))}
        </div>

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
            opacity: 0,
          }}
        >
          000%
        </div>
      </div>
    </>
  );
}