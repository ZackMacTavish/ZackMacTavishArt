import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React from 'react';
import { Seo } from '@zackmactavish/foundation';
import { useLocation } from 'react-router-dom';
import { canonicalFromLocation } from '../../utils/seo';
import Socials from '../../Components/Social Bar/Socials';
import ogImage from '../../assets/og/website-logoresolutions-1200x630.png';
import ProjectCarousel from './ProjectCarousel';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', position: 'relative' }}>
      <Seo
        title="Home  Zack MacTavish Art & Design"
        description="Portfolio home showcasing art, design, printmaking, photography, and 3D works by Zack MacTavish."
        image={ogImage}
        url={canonicalFromLocation(useLocation())}
        keywords={['home', 'portfolio', 'art', 'design', 'printmaking', 'photography', '3D']}
        authorName="Zack MacTavish"
        authorAlternateNames={['Zachary MacTavish', 'Zack MacTavish Art', 'Zachary MacTavish Art']}
        sameAs={['https://instagram.com/yourhandle', 'https://github.com/ZackMacTavish']}
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
            sameAs: ['https://instagram.com/yourhandle', 'https://github.com/ZackMacTavish'],
          },
        }}
      />

      {/* Social links — floating top-right */}
      <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', zIndex: 5 }}>
        <Socials />
      </div>

      <ProjectCarousel />
    </div>
  );
}