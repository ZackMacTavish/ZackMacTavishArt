import React, { useLayoutEffect, useEffect } from 'react';
import { Seo, ImageTextSplit } from '@zackmactavish/foundation'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation } from '../../utils/seo'
import styled from 'styled-components';
import { RisoItem } from '../3d/MergedGraffiti';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital, ArtSectionThreeone } from '../COMPOSITION/Composition';
import { TextContainer, TextContent, FullHeightTextSection } from '../Printmaking/Artworks';


// Assets
import housemash from '../../assets/House—Mash.jpg';
import housefront from '../../assets/Housequiltfront.jpg';
import houseback from '../../assets/Housequiltback.jpg';
import house1 from '../../assets/house5.jpg';
import house2 from '../../assets/house6.jpg';
import ep from '../../assets/EP.jpg';
import westwood from '../../assets/westwood.jpg';
import manistee2 from '../../assets/manistee2.jpg';
import albany from '../../assets/albany.jpg';
import maynard from '../../assets/maynard.jpg';
import armistice3 from '../../assets/armistice3.jpg';
import house5 from '../../assets/house1.jpg';
import house6 from '../../assets/house2.jpg';
import house3 from '../../assets/house3.jpg';
import house4 from '../../assets/house4.jpg';
import olympia from '../../assets/Olympia.jpg';
import manistee1 from '../../assets/manistee1.jpg';
import pawtucket from '../../assets/Pawtucket.jpg';
import armistice1 from '../../assets/Armistice1.jpg';
import rosewood from '../../assets/rosewood.jpg';
import taylor from '../../assets/taylor.jpg';
import house7 from '../../assets/house7.jpg';
import housemash2 from '../../assets/housemash2.jpg';
import manisteeblock from '../../assets/Manisteeblock.jpg';
import quilt1 from "../../assets/quilt1.jpg";
import quilt2 from "../../assets/quilt2.jpg";
import quilt3 from "../../assets/quilt3.jpg";
import quilt4 from "../../assets/quilt4.jpg";
import quilt5 from "../../assets/quilt5.jpg";
import quilt6 from "../../assets/quilt6.jpg";
import quilt7 from "../../assets/quilt7.jpg";
import quilt8 from "../../assets/quilt8.jpg";
import quilt9 from "../../assets/quilt9.jpg";
import grandparents from "../../assets/JanetDavidDominicMarie.JPG"
import greatgrandparents from "../../assets/JanetDavidGrandpaNana.JPG"

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

  img {
    flex: 1 1 28%;
    max-width: 28%;
    min-width: 200px;
    height: auto;
    max-height: 70vh;       /* slightly smaller vertical size */
    object-fit: contain;    /* preserves aspect ratio */
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

  &.large img {
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

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 60px 20px;
    align-items: center;    /* center stacked images horizontally */

    img {
      flex: 1 1 auto;
      max-width: 90%;       /* slightly narrower on mobile */
      max-height: 60vh;     /* smaller vertical size for mobile */
    }

    &.large {
      width: min(92vw, 100%);
      justify-self: center;
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

  img {
    flex: 1 1 45%;
    max-width: 45%;
    min-width: 180px;
    height: auto;
    max-height: 70vh;     /* slightly smaller vertical size */
    object-fit: contain;
  }

  /* size variant for larger images */
  &.large img {
    flex: 1 1 48%;
    max-width: 48%;
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
  &.one-row img {
    flex: 0 0 calc((100% - 40px) / 2); /* gap is 40px */
    max-width: calc((100% - 40px) / 2);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 40px 20px;
    align-items: center;

    img {
      flex: 1 1 auto;
      max-width: 90%;      /* slightly narrower on mobile */
      max-height: 60vh;    /* smaller vertical size for mobile */
    }

    /* on mobile, allow wrapping/stacking */
    &.one-row {
      flex-direction: column;
      flex-wrap: wrap;
      width: min(92vw, 100%);
    }
  }
`;

// Style hook: when ImageTextSplit has className "blend-img", apply multiply blend and soft gray background to the image itself
// We'll inject a small style tag in the component to scope this rule.

export default function Dwelling() {

  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

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
        backdrop.style.borderRadius = '12px';
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
            title="Dwelling — Quilts, Collages, and Mixed Media by Zack MacTavish" 
            description="Dwelling is a series of quilts, collages, and mixed media works exploring houses, memories, and storytelling." 
            image={housemash}
            url={canonical}
            keywords={["dwelling", "quilts", "collages", "mixed media", "houses", "memories"]}
          />
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
             <img src={housemash} alt="House Mash 1" />
             <img src={housemash2} alt="House Mash 2" />
           </TwoImageGrid>
         </div>

          {/* Intro Text Section */}
     <FullHeightTextSection>
  <TextContainer>
    <TextContent>
      Dwelling is a series composed of houses I’ve lived in throughout my life, aiming to evoke memories, 
      nostalgia, and past experiences. I have created 21 quilts, a series of collages, and one large 
      mixed-media painting with embroidery, learning to sew in the process.
      <br /><br />
      The collage-like compositions bring together multiple stories into a single piece.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

          {/* Open House Front: keep section white; add only top padding */}
          <div style={{ backgroundColor: 'white', width: '100vw', paddingTop: '4vh' }}>
            <ImageTextSplit id="open-house-front" imageSrc={housefront} imageAlt="Open House Front">
              <ArtHeader>Open House Front</ArtHeader>
              <ArtYear>2021-22</ArtYear>
              <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
            </ImageTextSplit>
          </div>

          {/* Open House Back: image-level multiply blend; section has white background */}
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ImageTextSplit className="blend-img" imageSrc={houseback} imageAlt="Open House Back">
              <ArtHeader>Open House Back</ArtHeader>
              <ArtYear>2021-22</ArtYear>
              <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
            </ImageTextSplit>
          </div>

            {/* Tuzio family sections using ImageTextSplit with full white background */}
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ImageTextSplit imageSrc={greatgrandparents} imageAlt="David, Janet, Herman, and Nana Tuzio">
              <ArtHeader>David, Janet, Herman, and Nana Tuzio</ArtHeader>
              <ArtYear>July, 1960</ArtYear>
              <ArtDesc>My uncle, grandmother, and great-great-grandparents who immigrated from Italy.</ArtDesc>
            </ImageTextSplit>
          </div>
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ImageTextSplit imageSrc={grandparents} imageAlt="David, Janet, Dominic, and Marie Bruzzi">
              <ArtHeader>David, Janet, Dominic, and Marie Bruzzi</ArtHeader>
              <ArtDesc>My uncle, grandmother, and great-grandparents.</ArtDesc>
            </ImageTextSplit>
          </div>

    

          {/* DWELLING MASH I Section (formerly DWELLING MASH II) */}

<TwoImageGrid>
  <img src={house1} alt="House 1" style={{ transform: "scale(0.9)" }} />
  <img src={house2} alt="House 2" style={{ transform: "scale(0.9)" }} />
</TwoImageGrid>

          {/* Quilt 1, Quilt 2, Quilt 3 as ImageTextSplit blocks on white */}
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageSrc={quilt1} imageAlt="Quilt 1">
    <ArtHeader>Quilt 1</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My apartment, Logan Square, Chicago</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt2} imageAlt="Quilt 2">
    <ArtHeader>Quilt 2</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>Dorms, Downtown, Chicago</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageSrc={quilt3} imageAlt="Quilt 3">
    <ArtHeader>Quilt 3</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's house</ArtDesc>
  </ImageTextSplit>
</div>


          {/* Quilt 4, Quilt 5, Quilt 6 as ImageTextSplit blocks on white */}
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageSrc={quilt4} imageAlt="Quilt 4">
    <ArtHeader>Quilt 4</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>East Providence, Rhode Island</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt5} imageAlt="Quilt 5">
    <ArtHeader>Quilt 5</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>House with Richie</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit imageSrc={quilt6} imageAlt="Quilt 6">
    <ArtHeader>Quilt 6</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's first house</ArtDesc>
  </ImageTextSplit>
</div>


          {/* Quilt 7, Quilt 8, Quilt 9 as ImageTextSplit blocks on white */}
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt7} imageAlt="Quilt 7">
    <ArtHeader>Quilt 7</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Armistice Blvd., Pawtucket, RI</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt8} imageAlt="Quilt 8">
    <ArtHeader>Quilt 8</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Bruzzi house, Pawtucket, RI</ArtDesc>
  </ImageTextSplit>
</div>
<div style={{ backgroundColor: 'white', width: '100vw' }}>
  <ImageTextSplit className="blend-img" imageSrc={quilt9} imageAlt="Quilt 9">
    <ArtHeader>Quilt 9</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Olympia Ave, Pawtucket, RI</ArtDesc>
  </ImageTextSplit>
</div>

          {/* Grid of small images */}
          <PicturesFlex>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={ep} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={westwood} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={manistee2} />
              </PhotoFlexone>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={albany} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={maynard} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={armistice3} />
              </PhotoFlexone>
          </PicturesFlex>

          {/* Another section with 3 photos */}
   <ArtSectionthreeog
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
    padding: "clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px)",
  }}
>
  {/* First image + text split converted to ImageTextSplit */}
  <ImageTextSplit imageSrc={manisteeblock} imageAlt="Manistee Street">
    <ArtHeader>Manistee Street</ArtHeader>
    <ArtYear>2022</ArtYear>
    <ArtDesc>Reduction relief woodblock print.</ArtDesc>
  </ImageTextSplit>

  {/* Last two images side by side with no text */}
  <TwoImageGrid>
  <img src={house5} alt="House 1" style={{ transform: "scale(0.9)" }} />
  <img src={house6} alt="House 2" style={{ transform: "scale(0.9)" }} />
</TwoImageGrid>


</ArtSectionthreeog>

          <PicturesFlex>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={olympia} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={manistee1} />
                <RisoItem style={{padding:"2vw"}} Width='20vw' img src={pawtucket} />
              </PhotoFlexone>
              <PhotoFlexone>
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={armistice1} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={rosewood} />
                  <RisoItem style={{padding:"2vw"}} Width='20vw' img src={taylor} />
              </PhotoFlexone>
          </PicturesFlex>

          {/* Final DWELLING MASH section */}
          <div style={{ backgroundColor: 'white', width: '100vw' }}>
            <ThreeImageGrid className="large">
              <img src={house3} alt="House 3" />
              <img src={house7} alt="House 7" />
              <img src={house4} alt="House 4" />
            </ThreeImageGrid>
          </div>
      </div>
  )
}