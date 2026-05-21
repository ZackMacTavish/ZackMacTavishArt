import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Seo } from '../../foundation/adapter';
import { Link, useLocation } from 'react-router-dom';
import { canonicalFromLocation } from '../../utils/seo';
import ogImage from '../../assets/og/website-logoresolutions-1200x630.png';

const ProjectCarousel = lazy(() => import('./ProjectCarousel'));
const Socials = lazy(() => import('../../Components/Social Bar/Socials'));

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];

export default function LandingPage({ showCarousel = true }) {
  const location = useLocation();
  const canonical = canonicalFromLocation(location);
  const [disableBackdropBlur, setDisableBackdropBlur] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)').matches;
  });
  const [showSocials, setShowSocials] = useState(false);
  const [showCarouselNow, setShowCarouselNow] = useState(() => {
    if (!showCarousel) return false;
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return showCarousel;
    return !window.matchMedia('(max-width: 900px), (pointer: coarse)').matches;
  });
  const [useMobileHeaderLayout, setUseMobileHeaderLayout] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(max-width: 900px)').matches;
  });
  const carouselSentinelRef = useRef(null);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const updateBlurMode = () => {
      setDisableBackdropBlur(window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)').matches);
    };

    updateBlurMode();
    window.addEventListener('resize', updateBlurMode);

    return () => {
      window.removeEventListener('resize', updateBlurMode);
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    let idleId;

    const revealSocials = () => setShowSocials(true);

    if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(revealSocials, { timeout: 1600 });
    } else {
      timeoutId = window.setTimeout(revealSocials, 800);
    }

    return () => {
      if (typeof window !== 'undefined' && typeof window.cancelIdleCallback === 'function' && idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (!showCarousel) {
      setShowCarouselNow(false);
      return undefined;
    }

    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setShowCarouselNow(true);
      return undefined;
    }

    const isMobileLike = window.matchMedia('(max-width: 900px), (pointer: coarse)').matches;

    if (!isMobileLike) {
      setShowCarouselNow(true);
      return undefined;
    }

    const revealCarousel = () => setShowCarouselNow(true);

    // Mount when the sentinel is near the viewport (user scrolls toward it),
    // with a generous fallback timeout so the carousel still loads if the
    // user never scrolls.
    let observer;
    let scrollHandler;
    let fallbackTimeoutId;

    const attach = () => {
      const target = carouselSentinelRef.current;
      if (!target) {
        fallbackTimeoutId = window.setTimeout(revealCarousel, 4000);
        return;
      }
      if (typeof IntersectionObserver === 'function') {
        observer = new IntersectionObserver((entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            revealCarousel();
            observer && observer.disconnect();
          }
        }, { rootMargin: '600px 0px' });
        observer.observe(target);
      } else {
        scrollHandler = () => {
          if (window.scrollY > 40) {
            revealCarousel();
            window.removeEventListener('scroll', scrollHandler);
          }
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });
      }
      fallbackTimeoutId = window.setTimeout(revealCarousel, 6000);
    };

    // Defer attach to after first paint so it never delays LCP.
    const raf = window.requestAnimationFrame(attach);

    return () => {
      window.cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
      if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
      if (fallbackTimeoutId) window.clearTimeout(fallbackTimeoutId);
    };
  }, [showCarousel]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const syncLayoutMode = () => setUseMobileHeaderLayout(mediaQuery.matches);

    syncLayoutMode();
    mediaQuery.addEventListener('change', syncLayoutMode);

    return () => {
      mediaQuery.removeEventListener('change', syncLayoutMode);
    };
  }, []);

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', position: 'relative' }}>
      <Seo
        title="Zack MacTavish Art & Design"
        description="Portfolio home showcasing art, design, printmaking, photography, and 3D works by Zack MacTavish."
        image={ogImage}
        url={canonical}
        keywords={['home', 'portfolio', 'art', 'design', 'printmaking', 'photography', '3D']}
        authorName="Zack MacTavish"
        authorAlternateNames={['Zachary MacTavish', 'Zack MacTavish Art', 'Zachary MacTavish Art']}
        sameAs={AUTHOR_SAME_AS}
        favicons={[
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
          { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon },
          { rel: 'icon', type: 'image/png', sizes: '192x192', href: icon192 },
          { rel: 'icon', type: 'image/png', sizes: '256x256', href: icon256 },
          { rel: 'icon', type: 'image/png', sizes: '512x512', href: icon512 },
          { rel: 'icon', href: '/favicon.ico' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zack MacTavish Art & Design',
          url: canonical,
          author: {
            '@type': 'Person',
            name: 'Zack MacTavish',
            alternateName: ['Zachary MacTavish', 'Zack MacTavish Art', 'Zachary MacTavish Art'],
            sameAs: AUTHOR_SAME_AS,
          },
        }}
      />

      <header
        style={{
          position: useMobileHeaderLayout ? 'relative' : 'absolute',
          top: useMobileHeaderLayout ? 'auto' : 'max(11vh, 5.5rem)',
          left: useMobileHeaderLayout ? 0 : 'clamp(1.5rem, 4vw, 4rem)',
          right: useMobileHeaderLayout ? 0 : 'auto',
          marginTop: useMobileHeaderLayout ? 'max(9vh, 4.75rem)' : 0,
          marginBottom: useMobileHeaderLayout ? '2rem' : 0,
          zIndex: 6,
          width: useMobileHeaderLayout
            ? '100vw'
            : 'min(32rem, calc(36vw - 3rem), calc(100vw - 3rem))',
          padding: useMobileHeaderLayout ? '0 1rem' : 0,
          boxSizing: useMobileHeaderLayout ? 'border-box' : 'content-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          color: '#f3f0e8',
        }}
      >
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: useMobileHeaderLayout ? '0.72rem' : '0.8rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(243,240,232,0.68)',
            margin: '0 0 0.75rem',
          }}
        >
          Artist Portfolio
        </p>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: useMobileHeaderLayout ? 'clamp(2rem, 11vw, 3rem)' : 'clamp(2.5rem, 5vw, 4.75rem)',
            lineHeight: 0.95,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          Zack MacTavish
        </h1>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: useMobileHeaderLayout ? '1rem' : 'clamp(1rem, 1.7vw, 1.15rem)',
            lineHeight: 1.6,
            color: 'rgba(243,240,232,0.82)',
            margin: '1rem 0 0',
            maxWidth: useMobileHeaderLayout ? '100%' : '100%',
          }}
        >
          Drawing, painting, quilting, and graffiti-based work anchored by personal history,
          domestic memory, and image-making across physical and digital forms.
        </p>
        {!useMobileHeaderLayout ? (
          <nav
            aria-label="Featured portfolio sections"
            style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '100%', width: 'auto' }}
          >
            {[
              [
                { to: '/composition', label: 'Composition' },
                { to: '/dwelling', label: 'Dwelling' },
                { to: '/printmaking', label: 'Printmaking' },
              ],
              [
                { to: '/photography', label: 'Photography' },
                { to: '/3d', label: '3D + Graffiti' },
              ],
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', width: 'auto' }}
              >
                {row.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={{
                      color: '#f3f0e8',
                      textDecoration: 'none',
                      border: '1px solid rgba(243,240,232,0.2)',
                      padding: '0.5rem 0.8rem',
                      borderRadius: '999px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.92rem',
                      textAlign: 'center',
                      backgroundColor: 'rgba(10,10,10,0.35)',
                      backdropFilter: disableBackdropBlur ? 'none' : 'blur(6px)',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        ) : null}

        {!useMobileHeaderLayout && showSocials ? (
          <div className="landing-socials-inline" style={{ marginTop: '1.5rem', position: 'relative' }}>
            <Suspense fallback={null}>
              <Socials />
            </Suspense>
          </div>
        ) : null}
      </header>

      <style>{`
        .landing-socials-inline > div {
          position: relative !important;
          bottom: auto !important;
          width: auto !important;
          justify-content: flex-start !important;
          padding: 0 !important;
          gap: 0.25rem;
        }
        .landing-socials-inline img {
          width: clamp(36px, 2.2vw, 56px) !important;
          padding: 0.35rem !important;
        }
        .landing-socials-mobile > div {
          position: relative !important;
          bottom: auto !important;
          max-width: none !important;
          width: auto !important;
          justify-content: flex-start !important;
          gap: 0.5rem;
        }
        .landing-socials-mobile img {
          width: 44px !important;
          padding: 0.4rem !important;
        }
      `}</style>

      {/* Mobile socials — inline below carousel section */}
      {useMobileHeaderLayout ? (
        <div
          className="landing-socials-mobile"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '0 1rem 1.5rem',
            marginTop: '-1rem',
            zIndex: 5,
          }}
        >
          {showSocials ? (
            <Suspense fallback={null}>
              <Socials />
            </Suspense>
          ) : null}
        </div>
      ) : null}
      <div ref={carouselSentinelRef} aria-hidden="true" style={{ width: '100%', height: 1 }} />
      {showCarousel && showCarouselNow ? (
        <Suspense fallback={null}>
          <ProjectCarousel />
        </Suspense>
      ) : null}
    </main>
  );
}