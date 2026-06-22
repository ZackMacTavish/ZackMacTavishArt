import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
// Composition assets for ImageTextSplit sections
import orbital from '../../assets/Orbital.jpg';
import spraywash from '../../assets/Spraypaintwash.png';
import staircases from '../../assets/Staircases.jpg';
import coney from '../../assets/Coney.jpg';
import brooklyn from '../../assets/Brooklyn.jpg';
import brooklyn2 from '../../assets/Brooklyn2.jpg';
import rug from '../../assets/Rug.jpg';
import mash1 from '../../assets/Mash1.png';
import mash2 from '../../assets/Mash2.png';
import mash3 from '../../assets/Mash3.png';
import mash4 from '../../assets/Mash4.png';
import mash5 from '../../assets/Mash5.png';
import og from '../../assets/No.3.png';
import grain from '../../assets/Grain.jpg';
import React, { useLayoutEffect, useEffect } from 'react';
import { Seo, ImageTextSplit } from '../../foundation/adapter'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation, visuallyHiddenHeadingStyle } from '../../utils/seo'
import ResponsiveImage from '../../components/Images/ResponsiveImage';

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];
import styled from 'styled-components';
import { RisoItem } from '../3d/MergedGraffiti';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital, ArtSectionThreeone } from '../COMPOSITION/Composition';
import { TextContainer, TextContent, FullHeightTextSection } from '../Printmaking/Artworks';


// Assets
import housemash from '../../assets/House—Mash.jpg';
import housemashWebp from '../../assets/optimized/House—Mash.webp';
import housemashAvif from '../../assets/optimized/House—Mash.avif';
import housemashWebp640 from '../../assets/optimized/House—Mash-640.webp';
import housemashWebp960 from '../../assets/optimized/House—Mash-960.webp';
import housemashAvif640 from '../../assets/optimized/House—Mash-640.avif';
import housemashAvif960 from '../../assets/optimized/House—Mash-960.avif';
import housefront from '../../assets/Housequiltfront.jpg';
import housefrontWebp from '../../assets/optimized/Housequiltfront.webp';
import housefrontAvif from '../../assets/optimized/Housequiltfront.avif';
import houseback from '../../assets/Housequiltback.jpg';
import housebackWebp from '../../assets/optimized/Housequiltback.webp';
import housebackAvif from '../../assets/optimized/Housequiltback.avif';
import house1 from '../../assets/house5.jpg';
import house1Webp from '../../assets/optimized/house5.webp';
import house1Avif from '../../assets/optimized/house5.avif';
import house2 from '../../assets/house6.jpg';
import house2Webp from '../../assets/optimized/house6.webp';
import house2Avif from '../../assets/optimized/house6.avif';
import ep from '../../assets/EP.jpg';
import epWebp from '../../assets/optimized/EP.webp';
import epAvif from '../../assets/optimized/EP.avif';
import westwood from '../../assets/westwood.jpg';
import westwoodWebp from '../../assets/optimized/westwood.webp';
import westwoodAvif from '../../assets/optimized/westwood.avif';
import manistee2 from '../../assets/manistee2.jpg';
import manistee2Webp from '../../assets/optimized/manistee2.webp';
import manistee2Avif from '../../assets/optimized/manistee2.avif';
import albany from '../../assets/albany.jpg';
import albanyWebp from '../../assets/optimized/albany.webp';
import albanyAvif from '../../assets/optimized/albany.avif';
import maynard from '../../assets/maynard.jpg';
import maynardWebp from '../../assets/optimized/maynard.webp';
import maynardAvif from '../../assets/optimized/maynard.avif';
import armistice3 from '../../assets/armistice3.jpg';
import armistice3Webp from '../../assets/optimized/armistice3.webp';
import armistice3Avif from '../../assets/optimized/armistice3.avif';
import house5 from '../../assets/house1.jpg';
import house6 from '../../assets/house2.jpg';
import house3 from '../../assets/house3.jpg';
import house3Webp from '../../assets/optimized/house3.webp';
import house3Avif from '../../assets/optimized/house3.avif';
import house4 from '../../assets/house4.jpg';
import house4Webp from '../../assets/optimized/house4.webp';
import house4Avif from '../../assets/optimized/house4.avif';
import olympia from '../../assets/Olympia.jpg';
import olympiaWebp from '../../assets/optimized/Olympia.webp';
import olympiaAvif from '../../assets/optimized/Olympia.avif';
import manistee1 from '../../assets/manistee1.jpg';
import manistee1Webp from '../../assets/optimized/manistee1.webp';
import manistee1Avif from '../../assets/optimized/manistee1.avif';
import pawtucket from '../../assets/Pawtucket.jpg';
import pawtucketWebp from '../../assets/optimized/Pawtucket.webp';
import pawtucketAvif from '../../assets/optimized/Pawtucket.avif';
import armistice1 from '../../assets/Armistice1.jpg';
import armistice1Webp from '../../assets/optimized/Armistice1.webp';
import armistice1Avif from '../../assets/optimized/Armistice1.avif';
import rosewood from '../../assets/rosewood.jpg';
import rosewoodWebp from '../../assets/optimized/rosewood.webp';
import rosewoodAvif from '../../assets/optimized/rosewood.avif';
import taylor from '../../assets/taylor.jpg';
import taylorWebp from '../../assets/optimized/taylor.webp';
import taylorAvif from '../../assets/optimized/taylor.avif';
import house7 from '../../assets/house7.jpg';
import house7Webp from '../../assets/optimized/house7.webp';
import house7Avif from '../../assets/optimized/house7.avif';
import housemash2 from '../../assets/housemash2.jpg';
import housemash2Webp from '../../assets/optimized/housemash2.webp';
import housemash2Avif from '../../assets/optimized/housemash2.avif';
import housemash2Webp640 from '../../assets/optimized/housemash2-640.webp';
import housemash2Webp960 from '../../assets/optimized/housemash2-960.webp';
import housemash2Avif640 from '../../assets/optimized/housemash2-640.avif';
import housemash2Avif960 from '../../assets/optimized/housemash2-960.avif';
import manisteeblock from '../../assets/Manisteeblock.jpg';
import manisteeblockWebp from '../../assets/optimized/Manisteeblock.webp';
import manisteeblockAvif from '../../assets/optimized/Manisteeblock.avif';
import quilt1 from "../../assets/quilt1.jpg";
import quilt1Webp from '../../assets/optimized/quilt1.webp';
import quilt1Avif from '../../assets/optimized/quilt1.avif';
import quilt2 from "../../assets/quilt2.jpg";
import quilt2Webp from '../../assets/optimized/quilt2.webp';
import quilt2Avif from '../../assets/optimized/quilt2.avif';
import quilt3 from "../../assets/quilt3.jpg";
import quilt3Webp from '../../assets/optimized/quilt3.webp';
import quilt3Avif from '../../assets/optimized/quilt3.avif';
import quilt4 from "../../assets/quilt4.jpg";
import quilt4Webp from '../../assets/optimized/quilt4.webp';
import quilt4Avif from '../../assets/optimized/quilt4.avif';
import quilt5 from "../../assets/quilt5.jpg";
import quilt5Webp from '../../assets/optimized/quilt5.webp';
import quilt5Avif from '../../assets/optimized/quilt5.avif';
import quilt6 from "../../assets/quilt6.jpg";
import quilt6Webp from '../../assets/optimized/quilt6.webp';
import quilt6Avif from '../../assets/optimized/quilt6.avif';
import quilt7 from "../../assets/quilt7.jpg";
import quilt7Webp from '../../assets/optimized/quilt7.webp';
import quilt7Avif from '../../assets/optimized/quilt7.avif';
import quilt8 from "../../assets/quilt8.jpg";
import quilt8Webp from '../../assets/optimized/quilt8.webp';
import quilt8Avif from '../../assets/optimized/quilt8.avif';
import quilt9 from "../../assets/quilt9.jpg";
import quilt9Webp from '../../assets/optimized/quilt9.webp';
import quilt9Avif from '../../assets/optimized/quilt9.avif';
import grandparents from "../../assets/JanetDavidDominicMarie.JPG"
import grandparentsWebp from '../../assets/optimized/JanetDavidDominicMarie.webp';
import grandparentsAvif from '../../assets/optimized/JanetDavidDominicMarie.avif';
import greatgrandparents from "../../assets/JanetDavidGrandpaNana.JPG"
import greatgrandparentsWebp from '../../assets/optimized/JanetDavidGrandpaNana.webp';
import greatgrandparentsAvif from '../../assets/optimized/JanetDavidGrandpaNana.avif';

// Styled Components
export const TextSection = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 2vw;
  color: white;
  font-size: 2.5rem;
  height: 100vh;
  @media (max-width: 1600px) {
      width: 60vw;
      font-size: 1.8rem;
  }
  @media (max-width: 450px) {
      width: 90vw;
      font-size: 1.5rem;
  }
`;

const PhotoFlexone = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
      flex-direction: column;
  }
`;

const PicturesFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  background-color: black;
  flex-direction: column;
`;

const TopImagesFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0vw;
  width: 100vw;
  background-color: white;
  padding: 2vw 0;
  box-sizing: border-box;
`;

export const ThreeImageGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;   /* container height follows tallest image */
  gap: 64px;
  padding: 100px 40px;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;
  height: auto;
  box-sizing: border-box; /* ensure padding doesn't affect centering calculations */

  & > img,
  & > picture {
    flex: 1 1 26%;
    max-width: 26%;
    min-width: 200px;
    height: auto;
    max-height: 64vh;
    object-fit: contain;    /* preserves aspect ratio */
  }

  & picture {
    display: block;
  }

  & picture img {
    width: 100%;
    height: auto;
    max-height: inherit;
    object-fit: contain;
  }

  &.rounded-corners > picture {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
  }

  &.rounded-corners > picture img {
    width: auto;
    max-width: 100%;
    display: block;
  }

  &.rounded-corners > picture img,
  &.rounded-corners > img {
    border-radius: 18px;
  }

  /* blend variant: multiply the images against the section background */
  &.multiply {
    isolation: isolate; /* ensure blend is scoped to this grid */
    background-color: transparent; /* let the wrapper's background show through for blending */
  }
  &.multiply img {
    mix-blend-mode: multiply;
    border-radius: 8px; /* subtle rounding to match site style */
  }

  /* size variant for larger images in the section */
  &.large {
    /* keep all three images in one row */
    flex-wrap: nowrap;
    gap: 16px; /* even tighter gap to allow ~15% larger images while keeping equal spacing */
  }

  &.roomy {
    gap: 32px;
  }

  &.large.roomy > img,
  &.large.roomy > picture {
    flex: 0 0 calc((100% - 64px) / 3);
    max-width: calc((100% - 64px) / 3);
  }

  &.large > img,
  &.large > picture {
    /* each image takes one third minus total gaps (2 * 16px) */
    flex: 0 0 calc((100% - 32px) / 3);
    max-width: calc((100% - 32px) / 3);
    max-height: 85vh;       /* a touch taller for presence */
  }

  /* widen container slightly beyond 60vw for the large variant */
  &.large {
    width: min(96vw, 100%);
    max-width: 1600px;
    margin: 0 auto; /* center within the white wrapper */
    justify-self: center; /* center when parent is display:grid (e.g., Grid60) */
    align-self: center;
  }

  &.portrait-large {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    width: min(94vw, 1500px);
    max-width: 1500px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  &.portrait-large > img,
  &.portrait-large > picture {
    flex: 0 1 auto;
    width: fit-content;
    max-width: min(30vw, 460px);
    min-width: 0;
    max-height: 85vh;
  }

  &.portrait-large picture img,
  &.portrait-large > img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 85vh;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 60px 20px;
    align-items: center;    /* center stacked images horizontally */
    content-visibility: auto;
    contain-intrinsic-size: 1000px;

    & > img,
    & > picture {
      flex: 1 1 auto;
      max-width: 90%;       /* slightly narrower on mobile */
      max-height: 60vh;     /* smaller vertical size for mobile */
    }

    &.large {
      width: min(92vw, 100%);
      justify-self: center;
    }

    &.portrait-large {
      flex-direction: column;
      width: min(92vw, 100%);
      gap: 32px;
      padding-left: 20px;
      padding-right: 20px;
    }

    &.portrait-large img,
    &.portrait-large picture {
      max-width: 100%;
    }
  }
`;

export const TwoImageGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px);
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;
  height: auto;
  box-sizing: border-box;

  & > img,
  & > picture {
    flex: 1 1 45%;
    max-width: 45%;
    min-width: 180px;
    height: auto;
    max-height: 70vh;     /* slightly smaller vertical size */
    object-fit: contain;
  }

  & picture {
    display: block;
  }

  /* size variant for larger images */
  &.large > img,
  &.large > picture {
    width: 100%;
    max-width: none;
    max-height: 82vh;
  }

  &.large {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    width: min(94vw, 1760px);
    margin: 0 auto;
    padding-left: clamp(24px, 3vw, 48px);
    padding-right: clamp(24px, 3vw, 48px);
  }

  /* force two images to stay on a single row (desktop) */
  &.one-row {
    flex-wrap: nowrap;
    width: min(80vw, 100%);
    max-width: 1400px;
    margin: 0 auto; /* center within the white wrapper */
    justify-self: center; /* center when parent is display:grid (e.g., Grid60) */
    align-self: center;
  }
  &.one-row > img,
  &.one-row > picture {
    flex: 0 0 calc((100% - 40px) / 2); /* gap is 40px */
    max-width: calc((100% - 40px) / 2);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 40px 20px;
    align-items: center;
    content-visibility: auto;
    contain-intrinsic-size: 900px;

    & > img,
    & > picture {
      flex: 1 1 auto;
      max-width: 90%;      /* slightly narrower on mobile */
      max-height: 60vh;    /* smaller vertical size for mobile */
    }

    &.large {
      display: grid;
      grid-template-columns: 1fr;
      width: min(92vw, 100%);
    }

    &.large > img,
    &.large > picture {
      max-width: 100%;
    }

    /* on mobile, allow wrapping/stacking */
    &.one-row {
      flex-direction: column;
      flex-wrap: wrap;
      width: min(92vw, 100%);
    }
  }
`;

export const SingleImageGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(80vw, 1400px);
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(50px, 8vw, 100px) clamp(20px, 4vw, 40px);
  box-sizing: border-box;

  & > img,
  & > picture {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    display: block;
  }

  & picture img {
    width: 100%;
    height: auto;
    max-height: inherit;
    object-fit: contain;
  }

  &.narrow {
    width: min(72vw, 1180px);
    max-width: 1180px;
  }

  &.rounded-corners > picture {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
  }

  &.rounded-corners > picture img {
    width: auto;
    max-width: 100%;
    display: block;
    border-radius: 18px;
    clip-path: inset(0 round 18px);
  }

  &.rounded-corners > picture img,
  &.rounded-corners > img {
    border-radius: 18px;
  }

  @media (max-width: 900px) {
    width: min(92vw, 100%);
    padding: 40px 20px;

    &.narrow {
      width: min(92vw, 100%);
      max-width: none;
    }

    & > img,
    & > picture {
      max-height: 60vh;
    }
  }
`;

// Style hook: when ImageTextSplit has className "blend-img", apply multiply blend and soft gray background to the image itself
// We'll inject a small style tag in the component to scope this rule.

import ogImage from '../../assets/og/website-logoresolutions-1200x630.png';
// Removed PNG favicon imports
// Removed duplicate imports

export default function Dwelling() {

  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  }, []);

  // No DOM manipulation for ImageTextSplit; styles are handled via scoped CSS below to keep the white section intact

  // Apply a grey backdrop behind the image without altering the grid layout
  useEffect(() => {
    const applyBackdrop = (container) => {
      if (!container) return;
      // If a legacy wrapper exists, unwrap it to restore ImageTextSplit's expected grid children
      const legacyWrapper = container.querySelector('.blend-wrapper');
      if (legacyWrapper) {
        const wrappedImg = legacyWrapper.querySelector('img');
        if (wrappedImg) {
          container.insertBefore(wrappedImg, legacyWrapper);
        }
        legacyWrapper.remove();
      }

      const img = container.querySelector('img');
      if (!img) return;

      // Use the image's immediate parent (grid column) as the host to keep layout identical
      const host = img.parentElement;
      host.style.position = 'relative';
      host.style.isolation = 'isolate';

      // Create or reuse backdrop element within the image column
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
  // Position backdrop to match the image's actual box within the column
  const left = img.offsetLeft;
  const top = img.offsetTop;
  const width = img.clientWidth; // match visible content width
  const height = img.clientHeight;
  backdrop.style.left = `${left}px`;
  backdrop.style.top = `${top}px`;
  backdrop.style.width = `${width}px`;
  backdrop.style.height = `${height}px`;
  backdrop.style.backgroundColor = '#f5f5f5';
  backdrop.style.borderRadius = '12px'; // enforce standard radius
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
  backdrop.style.overflow = 'hidden';
      };

      // Ensure image dimensions are ready before positioning backdrop
      if (img.complete) {
        updateBackdrop();
      } else {
        img.addEventListener('load', updateBackdrop, { once: true });
      }

      // React to image size changes for responsive layout
      const ro = new ResizeObserver(updateBackdrop);
      ro.observe(img);

      // Ensure image blends against backdrop and stays above it
      img.style.position = 'relative';
      img.style.zIndex = '1';
      img.style.mixBlendMode = 'multiply';
      // Preserve ImageTextSplit's default image layout; no inline width/display overrides
    };

    // Apply to the Open House Front instance
    applyBackdrop(document.getElementById('open-house-front'));

    // Apply to all remaining identified images (className="blend-img")
    document.querySelectorAll('.blend-img').forEach((el) => applyBackdrop(el));

    // Recompute on resize in case layout changes
    const handleResize = () => {
      applyBackdrop(document.getElementById('open-house-front'));
      document.querySelectorAll('.blend-img').forEach((el) => applyBackdrop(el));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const canonical = canonicalFromLocation(useLocation());

  return (
      <div>
          <Seo 
            title="Dwelling | Zack MacTavish Art & Design" 
            description="Dwelling is a series of quilts, collages, and mixed media works exploring houses, memories, and storytelling." 
            image={ogImage}
            url={canonical}
            keywords={["dwelling", "quilts", "collages", "mixed media", "houses", "memories"]}
            authorName="Zack MacTavish"
            authorAlternateNames={["Zachary MacTavish"]}
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
              "name": "Dwelling Series",
              "url": canonical,
              "author": {
                "@type": "Person",
                "name": "Zack MacTavish",
                "alternateName": ["Zachary MacTavish"],
                "sameAs": AUTHOR_SAME_AS
              }
            }}
          />
          <h1 style={visuallyHiddenHeadingStyle}>Dwelling by Zack MacTavish</h1>
          <style>{`
            /* Keep the measured section white */
            .blend-img { background-color: white !important; }

            /* Image should multiply blend to pick up grey background */
            .blend-img img {
              mix-blend-mode: multiply;
              box-sizing: border-box;
              border-radius: 12px;
            }

            /* Backdrop element sits behind the image within the ImageTextSplit container */
            .blend-backdrop { pointer-events: none; }
          `}</style>
          {/* Top housemash images horizontally */}
         <div style={{ backgroundColor: 'white', width: '100vw' }}>
           <TwoImageGrid className="large">
               <ResponsiveImage src={housemash} webpSrc={housemashWebp} webpSrcSet={`${housemashWebp640} 640w, ${housemashWebp960} 960w, ${housemashWebp} 2200w`} avifSrc={housemashAvif} avifSrcSet={`${housemashAvif640} 640w, ${housemashAvif960} 960w, ${housemashAvif} 2200w`} sizes="(max-width: 900px) 92vw, 47vw" alt="Layered house collage from the Dwelling series" width={4000} height={3000} loading="eager" decoding="sync" fetchPriority="high" />
               <ResponsiveImage src={housemash2} webpSrc={housemash2Webp} webpSrcSet={`${housemash2Webp640} 640w, ${housemash2Webp960} 960w, ${housemash2Webp} 2200w`} avifSrc={housemash2Avif} avifSrcSet={`${housemash2Avif640} 640w, ${housemash2Avif960} 960w, ${housemash2Avif} 2200w`} sizes="(max-width: 900px) 92vw, 47vw" alt="Layered house collage with stitched details from the Dwelling series" width={4000} height={3000} loading="lazy" decoding="async" />
           </TwoImageGrid>
         </div>

          {/* Intro Text Section */}
     <FullHeightTextSection>
  <TextContainer>
    <TextContent>
      Dwelling is a series based on the houses I’ve lived in throughout my life, using those spaces to evoke memory, 
      nostalgia, and lived experience. The body of work includes 21 quilts, a series of collages, and one large 
      mixed-media painting with embroidery, all made while I was learning to sew.
      <br /><br />
      The collage-like compositions bring together multiple stories into a single piece.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

          {/* Open House Front: keep section white; add only top padding */}
          <div style={{ backgroundColor: 'white', width: '100vw', paddingTop: '4vh' }}>
            <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={housefront} imageAlt="Open House Front mixed-media painting with embroidery" imageAvif={housefrontAvif} imageWebp={housefrontWebp}>
              <ArtHeader>Open House Front</ArtHeader>
              <ArtYear>2021-22</ArtYear>
              <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
            </ImageTextSplit>
          </div>

          {/* Open House Back: image-level multiply blend; section has white background */}
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={houseback} imageAlt="Open House Back mixed-media painting with embroidery" imageAvif={housebackAvif} imageWebp={housebackWebp}>
              <ArtHeader>Open House Back</ArtHeader>
              <ArtYear>2021-22</ArtYear>
              <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
            </ImageTextSplit>
          </div>

            {/* Tuzio family sections using ImageTextSplit with full white background */}
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ImageTextSplit className="blend-img" imageSrc={greatgrandparents} imageAlt="David, Janet, Herman, and Nana Tuzio" imageAvif={greatgrandparentsAvif} imageWebp={greatgrandparentsWebp}>
              <ArtHeader>David, Janet, Herman, and Nana Tuzio</ArtHeader>
              <ArtYear>July, 1960</ArtYear>
              <ArtDesc>My uncle, grandmother, and great-great-grandparents who immigrated from Italy.</ArtDesc>
            </ImageTextSplit>
          </div>
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ImageTextSplit className="blend-img" imageSrc={grandparents} imageAlt="David, Janet, Dominic, and Marie Bruzzi" imageAvif={grandparentsAvif} imageWebp={grandparentsWebp}>
              <ArtHeader>David, Janet, Dominic, and Marie Bruzzi</ArtHeader>
              <ArtDesc>My uncle, grandmother, and great-grandparents.</ArtDesc>
            </ImageTextSplit>
          </div>

    

          {/* DWELLING MASH I Section (formerly DWELLING MASH II) */}

<TwoImageGrid>
  <ResponsiveImage src={house1} webpSrc={house1Webp} avifSrc={house1Avif} alt="Dwelling collage of a house exterior" imgStyle={{ transform: "scale(0.9)" }} />
  <ResponsiveImage src={house2} webpSrc={house2Webp} avifSrc={house2Avif} alt="Dwelling collage of a layered house exterior" imgStyle={{ transform: "scale(0.9)" }} />
</TwoImageGrid>

          {/* Quilt 1, Quilt 2, Quilt 3 as ImageTextSplit blocks on white */}
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt1} imageAlt="Quilt artwork of my apartment in Logan Square, Chicago" imageAvif={quilt1Avif} imageWebp={quilt1Webp}>
    <ArtHeader>Quilt 1</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My apartment, Logan Square, Chicago</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt2} imageAlt="Quilt artwork of the dorms in downtown Chicago" imageAvif={quilt2Avif} imageWebp={quilt2Webp}>
    <ArtHeader>Quilt 2</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>Dorms, Downtown, Chicago</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt3} imageAlt="Quilt artwork of my grandma's house" imageAvif={quilt3Avif} imageWebp={quilt3Webp}>
    <ArtHeader>Quilt 3</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's house</ArtDesc>
  </ImageTextSplit>
</div>


          {/* Quilt 4, Quilt 5, Quilt 6 as ImageTextSplit blocks on white */}
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt4} imageAlt="Quilt artwork of East Providence, Rhode Island" imageAvif={quilt4Avif} imageWebp={quilt4Webp}>
    <ArtHeader>Quilt 4</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>East Providence, Rhode Island</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt5} imageAlt="Quilt artwork of the house with Richie" imageAvif={quilt5Avif} imageWebp={quilt5Webp}>
    <ArtHeader>Quilt 5</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>House with Richie</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt6} imageAlt="Quilt artwork of my grandma's first house" imageAvif={quilt6Avif} imageWebp={quilt6Webp}>
    <ArtHeader>Quilt 6</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's first house</ArtDesc>
  </ImageTextSplit>
</div>


          {/* Quilt 7, Quilt 8, Quilt 9 as ImageTextSplit blocks on white */}

<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt7} imageAlt="Quilt artwork of Armistice Boulevard in Pawtucket, Rhode Island" imageAvif={quilt7Avif} imageWebp={quilt7Webp}>
    <ArtHeader>Quilt 7</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Armistice Blvd., Pawtucket, RI</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt8} imageAlt="Quilt artwork of the Bruzzi house in Pawtucket, Rhode Island" imageAvif={quilt8Avif} imageWebp={quilt8Webp}>
    <ArtHeader>Quilt 8</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Bruzzi house, Pawtucket, RI</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageMode="framed" imageBlendMode="multiply" imageSrc={quilt9} imageAlt="Quilt artwork of Olympia Avenue in Pawtucket, Rhode Island" imageAvif={quilt9Avif} imageWebp={quilt9Webp}>
    <ArtHeader>Quilt 9</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Olympia Ave, Pawtucket, RI</ArtDesc>
  </ImageTextSplit>
</div>

          {/* Manistee Street section (added to match pasted code) */}
          <div style={{ backgroundColor: 'white', width: '100vw', padding: '5vh 0' }}>
            <ImageTextSplit className="blend-img" imageSrc={manisteeblock} imageAlt="Reduction relief woodblock print of Manistee Street" imageAvif={manisteeblockAvif} imageWebp={manisteeblockWebp}>
              <ArtHeader>Manistee Street</ArtHeader>
              <ArtYear>2022</ArtYear>
              <ArtDesc>Reduction relief woodblock print.</ArtDesc>
            </ImageTextSplit>
          </div>

          {/* Grid of small images */}
          <PicturesFlex>
              <PhotoFlexone>
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={ep} webpSrc={epWebp} avifSrc={epAvif} alt="EP house print" />
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={westwood} webpSrc={westwoodWebp} avifSrc={westwoodAvif} alt="Westwood house print" />
                <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={manistee2} webpSrc={manistee2Webp} avifSrc={manistee2Avif} alt="Manistee house print" />
              </PhotoFlexone>
              <PhotoFlexone>
                <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={albany} webpSrc={albanyWebp} avifSrc={albanyAvif} alt="Albany house print" />
                <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={maynard} webpSrc={maynardWebp} avifSrc={maynardAvif} alt="Maynard house print" />
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={armistice3} webpSrc={armistice3Webp} avifSrc={armistice3Avif} alt="Armistice 3 house print" />
              </PhotoFlexone>
          </PicturesFlex>



          <PicturesFlex>
              <PhotoFlexone>
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={olympia} webpSrc={olympiaWebp} avifSrc={olympiaAvif} alt="Olympia house print" />
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={manistee1} webpSrc={manistee1Webp} avifSrc={manistee1Avif} alt="Manistee 1 house print" />
                <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={pawtucket} webpSrc={pawtucketWebp} avifSrc={pawtucketAvif} alt="Pawtucket house print" />
              </PhotoFlexone>
              <PhotoFlexone>
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={armistice1} webpSrc={armistice1Webp} avifSrc={armistice1Avif} alt="Armistice 1 house print" />
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={rosewood} webpSrc={rosewoodWebp} avifSrc={rosewoodAvif} alt="Rosewood house print" />
                  <RisoItem as={ResponsiveImage} style={{padding:"2vw"}} $Width='20vw' src={taylor} webpSrc={taylorWebp} avifSrc={taylorAvif} alt="Taylor house print" />
              </PhotoFlexone>
          </PicturesFlex>

          {/* Final DWELLING MASH section */}
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ThreeImageGrid className="large roomy">
              <ResponsiveImage src={house3} webpSrc={house3Webp} avifSrc={house3Avif} alt="Dwelling collage of a neighborhood house" />
              <ResponsiveImage src={house7} webpSrc={house7Webp} avifSrc={house7Avif} alt="Dwelling collage of a residential streetscape" />
              <ResponsiveImage src={house4} webpSrc={house4Webp} avifSrc={house4Avif} alt="Dwelling collage of a house with layered architectural details" />
            </ThreeImageGrid>
          </div>
      </div>
  )
}