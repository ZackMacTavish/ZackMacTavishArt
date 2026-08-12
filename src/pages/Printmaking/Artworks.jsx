// src/pages/Artworks.jsx
import React, { useLayoutEffect, useEffect } from 'react';
import ResponsiveImage from '../../components/Images/ResponsiveImage';
// --- Blend backdrop effect for ImageTextSplit (matches Dwelling) ---
function useBlendBackdrop() {
  useEffect(() => {
    const applyBackdrop = (container) => {
      if (!container) return;
      const img = container.querySelector('img');
      if (!img) return;
      const host = img.parentElement;
      host.style.position = 'relative';
      host.style.isolation = 'isolate';
      let backdrop = host.querySelector('.blend-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'blend-backdrop';
        backdrop.style.position = 'absolute';
        backdrop.style.zIndex = '0';
        backdrop.style.pointerEvents = 'none';
        host.insertBefore(backdrop, img);
      }
      const updateBackdrop = () => {
        const left = img.offsetLeft;
        const top = img.offsetTop;
        const width = img.clientWidth;
        const height = img.clientHeight;
        backdrop.style.left = `${left}px`;
        backdrop.style.top = `${top}px`;
        backdrop.style.width = `${width}px`;
        backdrop.style.height = `${height}px`;
        backdrop.style.backgroundColor = '#f5f5f5';
  // Always use a consistent border radius for all blend-img backdrops
  backdrop.style.borderRadius = '12px';
        // Remove any box shadow, border, outline, or filter from backdrop, image, and host (container)
        backdrop.style.setProperty('box-shadow', 'none', 'important');
        backdrop.style.setProperty('border', 'none', 'important');
        backdrop.style.setProperty('outline', 'none', 'important');
        backdrop.style.setProperty('filter', 'none', 'important');
        img.style.setProperty('box-shadow', 'none', 'important');
        img.style.setProperty('border', 'none', 'important');
        img.style.setProperty('outline', 'none', 'important');
        img.style.setProperty('filter', 'none', 'important');
        host.style.setProperty('box-shadow', 'none', 'important');
        host.style.setProperty('border', 'none', 'important');
        host.style.setProperty('outline', 'none', 'important');
        host.style.setProperty('filter', 'none', 'important');
        // Prevent backdrop from overflowing its parent
        backdrop.style.overflow = 'hidden';
      };
      if (img.complete) {
        updateBackdrop();
      } else {
        img.addEventListener('load', updateBackdrop, { once: true });
      }
      const ro = new window.ResizeObserver(updateBackdrop);
      ro.observe(img);
      img.style.position = 'relative';
      img.style.zIndex = '1';
      img.style.mixBlendMode = 'multiply';
    };
    document.querySelectorAll('.blend-img').forEach((el) => applyBackdrop(el));
    const handleResize = () => {
      document.querySelectorAll('.blend-img').forEach((el) => applyBackdrop(el));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}
import { Seo, Grid60, ImageTextSplit, NarrativeFeatureSection } from '../../foundation/adapter'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation, visuallyHiddenHeadingStyle } from '../../utils/seo'

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];
import {
  ArtDesc,
  ArtHeader,
  ArtSectionthreeog,
  ArtText,
  ArtTextthree,
  ArtTexttwo,
  ArtYear,
  FullBg,
  GridRowThree,
  GridRowTwo,
  Orbital
} from '../COMPOSITION/Composition';
import { TwoImageGrid, ThreeImageGrid } from '../Dwelling/Dwelling'; // adjust path as needed
import styled from 'styled-components';
// ===================== SEO/OG/FAVICON ASSETS =====================
import ogImage1200 from '/src/assets/og/website-logoresolutions-1200x630.png';
import favicon16 from '/src/assets/og/website-logoresolutions-16px.png';
import favicon32 from '/src/assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '/src/assets/og/website-logoresolutions-180px.png';
import icon192 from '/src/assets/og/website-logoresolutions-192px.png';
import icon256 from '/src/assets/og/favicon-clean-256.png';
import icon512 from '/src/assets/og/website-logoresolutions-512px.png';
// Removed PNG favicon imports

// ===================== PRINTMAKING ASSETS =====================
import olivia4 from '/src/assets/olivia4.jpg';
import olivia4Webp from '/src/assets/optimized/olivia4.webp';
import olivia4Avif from '/src/assets/optimized/olivia4.avif';
import olivia2 from '/src/assets/oliviacollab2.jpg';
import olivia2Webp from '/src/assets/optimized/oliviacollab2.webp';
import olivia2Avif from '/src/assets/optimized/oliviacollab2.avif';
import oliviacollab1 from '/src/assets/Collab-framed.jpg';
import oliviacollab1Webp from '/src/assets/optimized/Collab-framed.webp';
import oliviacollab1Avif from '/src/assets/optimized/Collab-framed.avif';
import oliviacollab2 from '/src/assets/Collab-framed2.jpg';
import oliviacollab2Webp from '/src/assets/optimized/Collab-framed2.webp';
import oliviacollab2Avif from '/src/assets/optimized/Collab-framed2.avif';
import oliviacollab3 from '/src/assets/Olivia_3.jpg';
import oliviacollab3Webp from '/src/assets/optimized/Olivia_3.webp';
import oliviacollab3Avif from '/src/assets/optimized/Olivia_3.avif';
import screenprint2 from '/src/assets/Screenprint2.jpg';
import screenprint2Webp from '/src/assets/optimized/Screenprint2.webp';
import screenprint2Avif from '/src/assets/optimized/Screenprint2.avif';
import screenprint2_1 from '/src/assets/screenprint2.1.jpg';
import screenprint2_1Webp from '/src/assets/optimized/screenprint2.1.webp';
import screenprint2_1Avif from '/src/assets/optimized/screenprint2.1.avif';
import screenprint1 from '/src/assets/Screenprint1.jpg';
import screenprint1Webp from '/src/assets/optimized/Screenprint1.webp';
import screenprint1Avif from '/src/assets/optimized/Screenprint1.avif';
import oliviacollab4 from '/src/assets/Collab4.jpg';
import oliviacollab4Webp from '/src/assets/optimized/Collab4.webp';
import oliviacollab4Avif from '/src/assets/optimized/Collab4.avif';
import oliviacollab5 from '/src/assets/oliviacollab5.jpg';
import oliviacollab5Webp from '/src/assets/optimized/oliviacollab5.webp';
import oliviacollab5Avif from '/src/assets/optimized/oliviacollab5.avif';
import oliviacollab6 from '/src/assets/oliviacollab6.jpg';
import oliviacollab6Webp from '/src/assets/optimized/oliviacollab6.webp';
import oliviacollab6Avif from '/src/assets/optimized/oliviacollab6.avif';
import oliviacollab7 from '/src/assets/oliviacollab7.jpg';
import oliviacollab7Webp from '/src/assets/optimized/oliviacollab7.webp';
import oliviacollab7Avif from '/src/assets/optimized/oliviacollab7.avif';
import oliviacollab8 from '/src/assets/oliviacollab8.jpg';
import oliviacollab8Webp from '/src/assets/optimized/oliviacollab8.webp';
import oliviacollab8Avif from '/src/assets/optimized/oliviacollab8.avif';
import bear from '/src/assets/BearCMYK.jpg';
import bearWebp from '/src/assets/optimized/BearCMYK.webp';
import bearAvif from '/src/assets/optimized/BearCMYK.avif';
import graffiticollage from '/src/assets/GraffitiCollageCMYK.jpg';
import graffiticollageWebp from '/src/assets/optimized/GraffitiCollageCMYK.webp';
import graffiticollageAvif from '/src/assets/optimized/GraffitiCollageCMYK.avif';
import thetown from '/src/assets/TheTown.jpg';
import thetownWebp from '/src/assets/optimized/TheTown.webp';
import thetownAvif from '/src/assets/optimized/TheTown.avif';
import Cape from '/src/assets/CapeHouse.jpg';
import CapeWebp from '/src/assets/optimized/CapeHouse.webp';
import CapeAvif from '/src/assets/optimized/CapeHouse.avif';
import CapeWebp640 from '/src/assets/optimized/CapeHouse-640.webp';
import CapeWebp960 from '/src/assets/optimized/CapeHouse-960.webp';
import CapeAvif640 from '/src/assets/optimized/CapeHouse-640.avif';
import CapeAvif960 from '/src/assets/optimized/CapeHouse-960.avif';
import Capetwo from '/src/assets/CapeHouseLg.jpg';
import CapetwoWebp from '/src/assets/optimized/CapeHouseLg.webp';
import CapetwoAvif from '/src/assets/optimized/CapeHouseLg.avif';
import CapetwoWebp640 from '/src/assets/optimized/CapeHouseLg-640.webp';
import CapetwoWebp960 from '/src/assets/optimized/CapeHouseLg-960.webp';
import CapetwoAvif640 from '/src/assets/optimized/CapeHouseLg-640.avif';
import CapetwoAvif960 from '/src/assets/optimized/CapeHouseLg-960.avif';

// ===================== COLLAGES ASSETS =====================
import collage50 from '/src/assets/collage50.png';
import collage50Webp from '/src/assets/optimized/collage50.webp';
import collage50Avif from '/src/assets/optimized/collage50.avif';
import collage47 from '/src/assets/collage47.png';
import collage47Webp from '/src/assets/optimized/collage47.webp';
import collage47Avif from '/src/assets/optimized/collage47.avif';
import collage32 from '/src/assets/collage32.png';
import collage32Webp from '/src/assets/optimized/collage32.webp';
import collage32Avif from '/src/assets/optimized/collage32.avif';
import collage1 from '/src/assets/Collage1.2.jpg';
import collage1Webp from '/src/assets/optimized/Collage1.2.webp';
import collage1Avif from '/src/assets/optimized/Collage1.2.avif';
import collage2 from '/src/assets/Collage2.2.png';
import collage2Webp from '/src/assets/optimized/Collage2.2.webp';
import collage2Avif from '/src/assets/optimized/Collage2.2.avif';
import collage3 from '/src/assets/Collage3.png';
import collage3Webp from '/src/assets/optimized/Collage3.webp';
import collage3Avif from '/src/assets/optimized/Collage3.avif';
import collage4 from '/src/assets/Collage4.png';
import collage4Webp from '/src/assets/optimized/Collage4.webp';
import collage4Avif from '/src/assets/optimized/Collage4.avif';
import collagefour from '/src/assets/No4.png';
import collagefourWebp from '/src/assets/optimized/No4.webp';
import collagefourAvif from '/src/assets/optimized/No4.avif';
import collage45 from '/src/assets/collage45.png';
import collage45Webp from '/src/assets/optimized/collage45.webp';
import collage45Avif from '/src/assets/optimized/collage45.avif';
import collage41 from '/src/assets/collage41.jpg';
import collage41Webp from '/src/assets/optimized/collage41.webp';
import collage41Avif from '/src/assets/optimized/collage41.avif';
import collage42 from '/src/assets/collage42.jpg';
import collage42Webp from '/src/assets/optimized/collage42.webp';
import collage42Avif from '/src/assets/optimized/collage42.avif';
import collage43 from '/src/assets/collage43.jpg';
import collage43Webp from '/src/assets/optimized/collage43.webp';
import collage43Avif from '/src/assets/optimized/collage43.avif';
import collage44 from '/src/assets/collage44.png';
import collage44Webp from '/src/assets/optimized/collage44.webp';
import collage44Avif from '/src/assets/optimized/collage44.avif';
import collage37 from '/src/assets/collage37.jpg';
import collage37Webp from '/src/assets/optimized/collage37.webp';
import collage37Avif from '/src/assets/optimized/collage37.avif';
import collage48 from '/src/assets/collage48.jpg';
import collage48Webp from '/src/assets/optimized/collage48.webp';
import collage48Avif from '/src/assets/optimized/collage48.avif';
import collage40 from '/src/assets/collage40.png';
import collage40Webp from '/src/assets/optimized/collage40.webp';
import collage40Avif from '/src/assets/optimized/collage40.avif';
import collage39 from '/src/assets/collage39.png';
import collage39Webp from '/src/assets/optimized/collage39.webp';
import collage39Avif from '/src/assets/optimized/collage39.avif';
import collage38 from '/src/assets/collage38.jpg';
import collage38Webp from '/src/assets/optimized/collage38.webp';
import collage38Avif from '/src/assets/optimized/collage38.avif';
import collage34 from '/src/assets/collage34.jpg';
import collage34Webp from '/src/assets/optimized/collage34.webp';
import collage34Avif from '/src/assets/optimized/collage34.avif';
import collage35 from '/src/assets/collage35.jpg';
import collage35Webp from '/src/assets/optimized/collage35.webp';
import collage35Avif from '/src/assets/optimized/collage35.avif';
import collage31 from '/src/assets/collage31.jpg';
import collage31Webp from '/src/assets/optimized/collage31.webp';
import collage31Avif from '/src/assets/optimized/collage31.avif';
import collage28 from '/src/assets/collage28.jpg';
import collage28Webp from '/src/assets/optimized/collage28.webp';
import collage28Avif from '/src/assets/optimized/collage28.avif';
import collage29 from '/src/assets/collage29.jpg';
import collage29Webp from '/src/assets/optimized/collage29.webp';
import collage29Avif from '/src/assets/optimized/collage29.avif';
import collage30 from '/src/assets/collage30.jpg';
import collage30Webp from '/src/assets/optimized/collage30.webp';
import collage30Avif from '/src/assets/optimized/collage30.avif';
import collage46 from '/src/assets/collage46.jpg';
import collage46Webp from '/src/assets/optimized/collage46.webp';
import collage46Avif from '/src/assets/optimized/collage46.avif';
import collage33 from '/src/assets/collage33.jpg';
import collage33Webp from '/src/assets/optimized/collage33.webp';
import collage33Avif from '/src/assets/optimized/collage33.avif';
import collage49 from '/src/assets/collage49.jpg';
import collage49Webp from '/src/assets/optimized/collage49.webp';
import collage49Avif from '/src/assets/optimized/collage49.avif';
import rapture from '/src/assets/Dabs—Myla—Remix.jpg';
import raptureWebp from '/src/assets/optimized/Dabs—Myla—Remix.webp';
import raptureAvif from '/src/assets/optimized/Dabs—Myla—Remix.avif';
import spread1 from '/src/assets/spread1.png';
import spread1Webp from '/src/assets/optimized/spread1.webp';
import spread1Avif from '/src/assets/optimized/spread1.avif';
import spread2 from '/src/assets/spread2.png';
import spread2Webp from '/src/assets/optimized/spread2.webp';
import spread2Avif from '/src/assets/optimized/spread2.avif';
import spread3 from '/src/assets/spread3.png';
import spread3Webp from '/src/assets/optimized/spread3.webp';
import spread3Avif from '/src/assets/optimized/spread3.avif';
import spread4 from '/src/assets/spread4.png';
import spread4Webp from '/src/assets/optimized/spread4.webp';
import spread4Avif from '/src/assets/optimized/spread4.avif';
import spread5 from '/src/assets/spread5.png';
import spread5Webp from '/src/assets/optimized/spread5.webp';
import spread5Avif from '/src/assets/optimized/spread5.avif';
import spread6 from '/src/assets/spread6.png';
import spread6Webp from '/src/assets/optimized/spread6.webp';
import spread6Avif from '/src/assets/optimized/spread6.avif';

// ===================== PAINTING ASSETS =====================
import airbrush from '/src/assets/airbrush.jpg';
import airbrushWebp from '/src/assets/optimized/airbrush.webp';
import airbrushAvif from '/src/assets/optimized/airbrush.avif';
import yellowlily from '/src/assets/YellowLily.jpg'
import yellowlilyWebp from '/src/assets/optimized/YellowLily.webp';
import yellowlilyAvif from '/src/assets/optimized/YellowLily.avif';
import cacti1 from '/src/assets/E-png.png';
import cacti1Webp from '/src/assets/optimized/E-png.webp';
import cacti1Avif from '/src/assets/optimized/E-png.avif';
import splash from '/src/assets/splashpanel.png';
import splashWebp from '/src/assets/optimized/splashpanel.webp';
import splashAvif from '/src/assets/optimized/splashpanel.avif';
import yellowz from '/src/assets/Yellow-Z.png';
import yellowzWebp from '/src/assets/optimized/Yellow-Z.webp';
import yellowzAvif from '/src/assets/optimized/Yellow-Z.avif';
import selfie from '/src/assets/SelfPortrait.jpg';
import selfieWebp from '/src/assets/optimized/SelfPortrait.webp';
import selfieAvif from '/src/assets/optimized/SelfPortrait.avif';

const RisoFlex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`;

const RisoItem = styled.img`
  width: ${(props) => props.$Width || 'auto'};
  max-width: 1000px;
  height: auto;

  @media (max-width: 1000px) {
    width: 90vw;
    padding-top: 3vh;
  }

  @media (max-width: 450px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;

export const FullHeightTextSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--surface-secondary);
  width: 100vw; /* full width */
  min-height: 100vh;
  padding: 5vh 5vw;
  box-sizing: border-box;
  text-align: left;

  /* Prevent section from feeling too tall on short screens */
  @media (max-height: 700px) {
    min-height: 70vh;
    padding: 4vh 5vw;
  }

  @media (max-height: 500px) {
    min-height: 60vh;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    padding: 4vh 4vw;
    content-visibility: auto;
    contain-intrinsic-size: 900px;
  }
`;

export const TextContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important; /* vertical centering */
  align-items: center !important;     /* horizontal centering */
  width: 100%; /* container takes full width */
  box-sizing: border-box;
  padding: 0 5vw;

  @media (max-width: 850px) {
    padding: 0 4vw;
    justify-content: center !important;
  }
`;

export const TextContent = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  color: ${(props) => props.theme.narrativeText};
  font-size: clamp(1.2rem, 1.5vw, 1.42rem);
  max-width: 50ch;
  line-height: 1.65;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 1400px) {
    max-width: 50ch;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    max-width: 75vw; /* still shrink width for readability */
  }

  a.inline-link {
    color: ${(props) => props.theme.narrativeText};
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;

    svg {
      width: 0.8em;
      height: 0.8em;
      vertical-align: middle;
    }
  }
`;

// ===================== COMPONENT =====================
export default function Artworks() {
  useBlendBackdrop();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo 
        title="Printmaking | Zack MacTavish Art & Design" 
        description="Screen printing and mixed media works, including collaborations with Olivia Zita Smith and CMYK experiments." 
        image={ogImage1200}
        url={canonicalFromLocation(useLocation())}
        keywords={["printmaking", "screenprint", "collaboration", "CMYK", "collage"]}
  authorName="Zack MacTavish"
  authorAlternateNames={["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"]}
          sameAs={AUTHOR_SAME_AS}
        favicons={[
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
          { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon },
          { rel: 'icon', type: 'image/png', sizes: '192x192', href: icon192 },
          { rel: 'icon', type: 'image/png', sizes: '256x256', href: icon256 },
          { rel: 'icon', type: 'image/png', sizes: '512x512', href: icon512 },
          { rel: 'icon', href: '/favicon.ico' }
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Printmaking Series",
          "url": canonicalFromLocation(useLocation()),
          "author": {
            "@type": "Person",
            "name": "Zack MacTavish",
            "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
            "sameAs": AUTHOR_SAME_AS
          }
        }}
      />
      <h1 style={visuallyHiddenHeadingStyle}>Printmaking by Zack MacTavish</h1>



      {/* ===================== PRINTMAKING SECTION ===================== */}
       {/* Hero Images */}
            <ResponsiveImage
  src={Cape}
  webpSrc={CapeWebp}
  webpSrcSet={`${CapeWebp640} 640w, ${CapeWebp960} 960w, ${CapeWebp} 2200w`}
  avifSrc={CapeAvif}
  avifSrcSet={`${CapeAvif640} 640w, ${CapeAvif960} 960w, ${CapeAvif} 2200w`}
  sizes="100vw"
  alt="Cape House exterior"
  width={3788}
  height={2015}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
  style={{
    width: '100vw',           // full width
    height: '100svh',         // full viewport height
    objectFit: 'cover',       // crop/zoom without stretching
    objectPosition: 'bottom', // align image to the bottom
    display: 'block'
  }}
/>
           
           <ResponsiveImage
  src={Capetwo}
  webpSrc={CapetwoWebp}
  webpSrcSet={`${CapetwoWebp640} 640w, ${CapetwoWebp960} 960w, ${CapetwoWebp} 2200w`}
  avifSrc={CapetwoAvif}
  avifSrcSet={`${CapetwoAvif640} 640w, ${CapetwoAvif960} 960w, ${CapetwoAvif} 2200w`}
  sizes="100vw"
  alt="Cape House large view"
  width={5424}
  height={2967}
  style={{
    width: '100vw',          // full width
    height: '100svh',        // full viewport height
    objectFit: 'cover',      // crop/zoom without stretching
    objectPosition: 'center',// center the image
    display: 'block'
  }}
/>
      
      {/* Olivia Collabs Section */}
    <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
      <Grid60>
        <TwoImageGrid className="one-row">
          <ResponsiveImage src={olivia4} webpSrc={olivia4Webp} avifSrc={olivia4Avif} alt="Collaborative Olivia portrait print" />
          <ResponsiveImage src={olivia2} webpSrc={olivia2Webp} avifSrc={olivia2Avif} alt="Framed collaborative Olivia print" />
        </TwoImageGrid>
      </Grid60>
    </div>

<FullHeightTextSection>
  <TextContent>
    My printmaking practice explores screen printing and mixed media techniques, incorporating drawing and painting. I’m drawn to the way I can create multiples and experiment freely with each iteration. Several of these works are collaborative projects with my partner{' '}
    <a
      href="https://oliviazitasmith.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-link"
    >
      Olivia Zita Smith
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
        />
      </svg>
    </a>, who works using relief techniques.
  </TextContent>
</FullHeightTextSection>

        {/* Screenprints */}
  <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw', padding: '8vh 0' }}>
      <ThreeImageGrid
        className="large multiply"
        style={{ width: 'min(98vw, 100%)', maxWidth: '1800px', margin: '0 auto' }}
      >
        <ResponsiveImage src={screenprint2} webpSrc={screenprint2Webp} avifSrc={screenprint2Avif} alt="Abstract layered screen print" imgStyle={{ mixBlendMode: 'multiply' }} />
        <ResponsiveImage src={screenprint2_1} webpSrc={screenprint2_1Webp} avifSrc={screenprint2_1Avif} alt="Abstract layered screen print variation" imgStyle={{ mixBlendMode: 'multiply' }} />
          <ResponsiveImage src={screenprint1} webpSrc={screenprint1Webp} avifSrc={screenprint1Avif} alt="Abstract screen print in layered ink" imgStyle={{ mixBlendMode: 'multiply' }} />
      </ThreeImageGrid>
  </div>

            {/* Olivia Collabs */}
 <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
   <TwoImageGrid className="one-row">
    <ResponsiveImage src={oliviacollab1} webpSrc={oliviacollab1Webp} avifSrc={oliviacollab1Avif} alt="Collaborative Olivia print" />
    <ResponsiveImage src={oliviacollab2} webpSrc={oliviacollab2Webp} avifSrc={oliviacollab2Avif} alt="Collaborative Olivia print variation" />
   </TwoImageGrid>
 </div>

            <RisoFlex>
              <RisoItem as={ResponsiveImage} $Width="60vw" src={oliviacollab3} webpSrc={oliviacollab3Webp} avifSrc={oliviacollab3Avif} alt="Olivia collaboration portrait" />
            </RisoFlex>

             <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
               <TwoImageGrid className="one-row">
                 <ResponsiveImage src={oliviacollab6} webpSrc={oliviacollab6Webp} avifSrc={oliviacollab6Avif} alt="Collaborative Olivia print with alternate colorway" />
                 <ResponsiveImage src={oliviacollab5} webpSrc={oliviacollab5Webp} avifSrc={oliviacollab5Avif} alt="Alternate framed collaborative Olivia print" />
               </TwoImageGrid>
             </div>

  <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
     <TwoImageGrid className="one-row">
       <ResponsiveImage src={oliviacollab7} webpSrc={oliviacollab7Webp} avifSrc={oliviacollab7Avif} alt="Olivia collaboration print detail" />
       <ResponsiveImage src={oliviacollab8} webpSrc={oliviacollab8Webp} avifSrc={oliviacollab8Avif} alt="Olivia collaboration print variation" />
     </TwoImageGrid>
   </div>
      
 
        
      
            {/* CMYK Screenprints up to "The Nuns" */}

            <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
              <ThreeImageGrid className="large">
                <ResponsiveImage src={bear} webpSrc={bearWebp} avifSrc={bearAvif} alt="CMYK bear print" />
                <ResponsiveImage src={graffiticollage} webpSrc={graffiticollageWebp} avifSrc={graffiticollageAvif} alt="Graffiti collage print" />
                <ResponsiveImage src={thetown} webpSrc={thetownWebp} avifSrc={thetownAvif} alt="The Town print" />
              </ThreeImageGrid>
            </div>

    
      {/* ===================== PAINTING SECTION ===================== */}
   
     
     <FullHeightTextSection>
  <TextContainer>
    <TextContent>
      I often look for ways to capture moments from my life. Painting gives me a way to work through shape, color, and atmosphere.
      <br /><br />
      I move between realism and abstraction depending on what a piece needs.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>




      {/* Painting Feature Section: white background, gray image containers */}
      <NarrativeFeatureSection style={{ padding: '4vh 0' }}>
        <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={oliviacollab4} imageWebp={oliviacollab4Webp} imageAvif={oliviacollab4Avif} imageAlt="Olivia Collaboration print">
          <ArtHeader>Olivia Collaboration</ArtHeader>
          <ArtYear>2022</ArtYear>
          <ArtDesc>Spraypaint, and relief ink on paper</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={splash} imageWebp={splashWebp} imageAvif={splashAvif} imageAlt="MILKBONES painting">
          <ArtHeader>MILKBONES</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={yellowz} imageWebp={yellowzWebp} imageAvif={yellowzAvif} imageAlt="YELLOW TWEED painting">
          <ArtHeader>YELLOW TWEED</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={yellowlily} imageWebp={yellowlilyWebp} imageAvif={yellowlilyAvif} imageAlt="Yellow Lily painting">
          <ArtHeader>Yellow Lily</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Airbrush & acrylic on yupo paper.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={airbrush} imageWebp={airbrushWebp} imageAvif={airbrushAvif} imageAlt="SHAPES painting">
          <ArtHeader>SHAPES</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={cacti1} imageWebp={cacti1Webp} imageAvif={cacti1Avif} imageAlt="ORANGE CACTI painting">
          <ArtHeader>ORANGE CACTI</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ImageTextSplit>
      </NarrativeFeatureSection>

<RisoFlex style={{ paddingBottom: "100px" }}>
  <RisoItem as={ResponsiveImage} $Width="55vw" src={selfie} webpSrc={selfieWebp} avifSrc={selfieAvif} alt="Self portrait" />
</RisoFlex>


      {/* Single piece */}
      {/*<ArtSectionthreeog>
        <Orbital src={sarge} />
        <ArtText>
          <ArtHeader>Sarge</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Oil paint on wood panel.</ArtDesc>
        </ArtText>
      </ArtSectionthreeog> */}

      {/* ===================== COLLAGES SECTION ===================== */}
   
   
       <FullHeightTextSection>
  <TextContainer>
    <TextContent>
      Collaging is a playful way for me to explore composition, shape, and color.  
      It lets me experiment freely, test ideas quickly, and discover new directions for the work.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>
               {/*} <RisoFlex >
   
           <RisoItem $Width='55vw' src={bike} />
   
           </RisoFlex> */}
   
   
              {/* Section with 3 photos */}
              <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
                <ThreeImageGrid className="large portrait-large">
                  <ResponsiveImage src={collage32} webpSrc={collage32Webp} avifSrc={collage32Avif} alt="Abstract collage artwork 32" />
                  <ResponsiveImage src={collage47} webpSrc={collage47Webp} avifSrc={collage47Avif} alt="Abstract collage artwork 47" />
                  <ResponsiveImage src={collage50} webpSrc={collage50Webp} avifSrc={collage50Avif} alt="Abstract collage artwork 50" />
                </ThreeImageGrid>
              </div>
               
                   <RisoFlex >
   
  <RisoItem as={ResponsiveImage} $Width='60vw' src={spread1} webpSrc={spread1Webp} avifSrc={spread1Avif} alt="Collage sketchbook spread 1" />
   
   </RisoFlex>
   
                 {/*}  <FullBg src={boats} /> */}
   
   
                    {/* Section with 3 photos */}

                    <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
                      <ThreeImageGrid className="large">
                          <ResponsiveImage src={collage1} webpSrc={collage1Webp} avifSrc={collage1Avif} alt="Abstract collage artwork 1" />
                        <ResponsiveImage src={collage2} webpSrc={collage2Webp} avifSrc={collage2Avif} alt="Abstract collage artwork 2" />
                        <ResponsiveImage src={collage3} webpSrc={collage3Webp} avifSrc={collage3Avif} alt="Abstract collage artwork 3" />
                      </ThreeImageGrid>
                    </div>

                  
   
   <RisoFlex >
   
  <RisoItem as={ResponsiveImage} $Width='60vw' src={spread2} webpSrc={spread2Webp} avifSrc={spread2Avif} alt="Collage sketchbook spread 2" />
   
   </RisoFlex>
   
   
         {/* Section with 3 photos */}

         <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
           <ThreeImageGrid className="large portrait-large">
             <ResponsiveImage src={collage4} webpSrc={collage4Webp} avifSrc={collage4Avif} alt="Abstract collage artwork 4" />
             <ResponsiveImage src={collagefour} webpSrc={collagefourWebp} avifSrc={collagefourAvif} alt="Abstract collage artwork 4 alternate version" />
             <ResponsiveImage src={collage45} webpSrc={collage45Webp} avifSrc={collage45Avif} alt="Abstract collage artwork 45" />
           </ThreeImageGrid>
         </div>
              
   
               <RisoFlex >
   
  <RisoItem as={ResponsiveImage} $Width='60vw' src={spread3} webpSrc={spread3Webp} avifSrc={spread3Avif} alt="Collage sketchbook spread 3" />
   
   </RisoFlex>
   
   
   
     {/* Section with 3 photos */}

    <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
      <ThreeImageGrid className="large portrait-large">
         <ResponsiveImage src={collage44} webpSrc={collage44Webp} avifSrc={collage44Avif} alt="Abstract collage artwork 44" />
         <ResponsiveImage src={collage37} webpSrc={collage37Webp} avifSrc={collage37Avif} alt="Abstract collage artwork 37" />
         <ResponsiveImage src={collage48} webpSrc={collage48Webp} avifSrc={collage48Avif} alt="Abstract collage artwork 48" />
       </ThreeImageGrid>
     </div>
                                
                   <RisoFlex >
   
  <RisoItem as={ResponsiveImage} $Width='60vw' src={spread4} webpSrc={spread4Webp} avifSrc={spread4Avif} alt="Collage sketchbook spread 4" />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}

  <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
    <ThreeImageGrid className="large portrait-large">
      <ResponsiveImage src={collage40} webpSrc={collage40Webp} avifSrc={collage40Avif} alt="Abstract collage artwork 40" />
      <ResponsiveImage src={collage39} webpSrc={collage39Webp} avifSrc={collage39Avif} alt="Abstract collage artwork 39" />
      <ResponsiveImage src={collage38} webpSrc={collage38Webp} avifSrc={collage38Avif} alt="Abstract collage artwork 38" />
     </ThreeImageGrid>
   </div>
      
                   <RisoFlex >
   
  <RisoItem as={ResponsiveImage} $Width='60vw' src={spread5} webpSrc={spread5Webp} avifSrc={spread5Avif} alt="Collage sketchbook spread 5" />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}

  <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
     <ThreeImageGrid className="large">
      <ResponsiveImage src={collage34} webpSrc={collage34Webp} avifSrc={collage34Avif} alt="Abstract collage artwork 34" />
      <ResponsiveImage src={collage35} webpSrc={collage35Webp} avifSrc={collage35Avif} alt="Abstract collage artwork 35" />
          <ResponsiveImage src={collage31} webpSrc={collage31Webp} avifSrc={collage31Avif} alt="Abstract collage artwork 31" />
     </ThreeImageGrid>
   </div>
   
                   <RisoFlex >
   
  <RisoItem as={ResponsiveImage} $Width='60vw' src={spread6} webpSrc={spread6Webp} avifSrc={spread6Avif} alt="Collage sketchbook spread 6" />
   
   </RisoFlex>
   {/* Section with 3 photos */}

  <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
     <ThreeImageGrid className="large">
      <ResponsiveImage src={collage28} webpSrc={collage28Webp} avifSrc={collage28Avif} alt="Abstract collage artwork 28" />
      <ResponsiveImage src={collage29} webpSrc={collage29Webp} avifSrc={collage29Avif} alt="Abstract collage artwork 29" />
          <ResponsiveImage src={collage30} webpSrc={collage30Webp} avifSrc={collage30Avif} alt="Abstract collage artwork 30" />
     </ThreeImageGrid>
   </div>
   
   
                 <RisoFlex>
  <RisoItem
    as={ResponsiveImage}
    $Width='60vw'
    src={rapture}
    webpSrc={raptureWebp}
    avifSrc={raptureAvif}
    alt="Collage artwork titled Dabs Myla Remix"
    imgStyle={{ borderRadius: '18px' }}
  />
 </RisoFlex>
   
                    {/* Section with 3 photos */}

                    <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
                      <ThreeImageGrid className="large">
                        <ResponsiveImage src={collage46} webpSrc={collage46Webp} avifSrc={collage46Avif} alt="Abstract collage artwork 46" />
                        <ResponsiveImage src={collage33} webpSrc={collage33Webp} avifSrc={collage33Avif} alt="Abstract collage artwork 33" />
                        <ResponsiveImage src={collage49} webpSrc={collage49Webp} avifSrc={collage49Avif} alt="Abstract collage artwork 49" />
                      </ThreeImageGrid>
                    </div>

         <div style={{ backgroundColor: 'var(--surface-primary)', width: '100vw' }}>
           <ThreeImageGrid style={{ backgroundColor: 'transparent' }}>
             <ResponsiveImage src={collage41} webpSrc={collage41Webp} avifSrc={collage41Avif} alt="Abstract collage artwork 41" />
             <ResponsiveImage src={collage42} webpSrc={collage42Webp} avifSrc={collage42Avif} alt="Abstract collage artwork 42" />
             <ResponsiveImage src={collage43} webpSrc={collage43Webp} avifSrc={collage43Avif} alt="Abstract collage artwork 43" />
           </ThreeImageGrid>
         </div>


            
    </div>
  );
}