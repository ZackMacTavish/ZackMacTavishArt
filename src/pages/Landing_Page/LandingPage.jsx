import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { Suspense, lazy, useLayoutEffect } from 'react';
import { Seo } from '../../foundation/adapter';
import { Link, useLocation } from 'react-router-dom';
import { canonicalFromLocation } from '../../utils/seo';
import Socials from '../../Components/Social Bar/Socials';
import ogImage from '../../assets/og/website-logoresolutions-1200x630.png';

const ProjectCarousel = lazy(() => import('./ProjectCarousel'));

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];

export default function LandingPage({ showCarousel = true }) {
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', position: 'relative' }}>
      <Seo
        title="Zack MacTavish Art & Design"
        description="Portfolio home showcasing art, design, printmaking, photography, and 3D works by Zack MacTavish."
        image={ogImage}
        url={canonicalFromLocation(useLocation())}
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
          url: canonicalFromLocation(useLocation()),
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
          position: 'absolute',
          top: 'max(11vh, 5.5rem)',
          left: 'clamp(1.5rem, 4vw, 4rem)',
          zIndex: 6,
          width: 'min(32rem, calc(36vw - 3rem), calc(100vw - 3rem))',
          color: '#f3f0e8',
        }}
      >
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '0.8rem',
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
            fontSize: 'clamp(2.5rem, 5vw, 4.75rem)',
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
            fontSize: 'clamp(1rem, 1.7vw, 1.15rem)',
            lineHeight: 1.6,
            color: 'rgba(243,240,232,0.82)',
            margin: '1rem 0 0',
            maxWidth: '100%',
          }}
        >
          Drawing, painting, quilting, and graffiti-based work anchored by personal history,
          domestic memory, and image-making across physical and digital forms.
        </p>
        <nav
          aria-label="Featured portfolio sections"
          style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '100%' }}
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
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
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
                    backgroundColor: 'rgba(10,10,10,0.35)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </header>

      {/* Social links — floating top-right */}
      <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', zIndex: 5 }}>
        <Socials />
      </div>
      {showCarousel ? (
        <Suspense fallback={null}>
          <ProjectCarousel />
        </Suspense>
      ) : null}
    </main>
  );
}