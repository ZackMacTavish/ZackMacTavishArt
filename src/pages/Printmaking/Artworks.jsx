// src/pages/Artworks.jsx
import React, { useLayoutEffect, useEffect } from 'react';
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
import { Seo, Grid60, ImageTextSplit } from '@zackmactavish/foundation'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation } from '../../utils/seo'
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
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
import ogImage600 from '/src/assets/og/website-logoresolutions-600x315.png';
import favicon16 from '/src/assets/og/website-logoresolutions-16px.png';
import favicon32 from '/src/assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '/src/assets/og/website-logoresolutions-180px.png';
import icon192 from '/src/assets/og/website-logoresolutions-192px.png';
import icon256 from '/src/assets/og/favicon-clean-256.png';
import icon512 from '/src/assets/og/website-logoresolutions-512px.png';
// Removed PNG favicon imports

// ===================== PRINTMAKING ASSETS =====================
import olivia4 from '/src/assets/olivia4.jpg';
import olivia2 from '/src/assets/oliviacollab2.jpg';
import oliviacollab1 from '/src/assets/Collab-framed.jpg';
import oliviacollab2 from '/src/assets/Collab-framed2.jpg';
import oliviacollab3 from '/src/assets/Olivia_3.jpg';
import screenprint2 from '/src/assets/Screenprint2.jpg';
import screenprint2_1 from '/src/assets/screenprint2.1.jpg';
import screenprint1 from '/src/assets/Screenprint1.jpg';
import oliviacollab4 from '/src/assets/Collab4.jpg';
import oliviacollab5 from '/src/assets/oliviacollab5.jpg';
import oliviacollab6 from '/src/assets/oliviacollab6.jpg';
import oliviacollab7 from '/src/assets/oliviacollab7.jpg';
import oliviacollab8 from '/src/assets/oliviacollab8.jpg';
import bear from '/src/assets/BearCMYK.jpg';
import graffiticollage from '/src/assets/GraffitiCollageCMYK.jpg';
import thetown from '/src/assets/TheTown.jpg';
import Cape from '/src/assets/CapeHouse.jpg';
import Capetwo from '/src/assets/CapeHouseLg.jpg';

// ===================== COLLAGES ASSETS =====================
import collage50 from '/src/assets/collage50.png';
import collage47 from '/src/assets/collage47.png';
import collage32 from '/src/assets/collage32.png';
import collage1 from '/src/assets/Collage1.2.jpg';
import collage2 from '/src/assets/Collage2.2.png';
import collage3 from '/src/assets/Collage3.png';
import collage4 from '/src/assets/Collage4.png';
import collagefour from '/src/assets/No4.png';
import collage45 from '/src/assets/collage45.png';
import collage41 from '/src/assets/collage41.jpg';
import collage42 from '/src/assets/collage42.jpg';
import collage43 from '/src/assets/collage43.jpg';
import collage44 from '/src/assets/collage44.png';
import collage37 from '/src/assets/collage37.jpg';
import collage48 from '/src/assets/collage48.jpg';
import collage40 from '/src/assets/collage40.png';
import collage39 from '/src/assets/collage39.png';
import collage38 from '/src/assets/collage38.jpg';
import collage34 from '/src/assets/collage34.jpg';
import collage35 from '/src/assets/collage35.jpg';
import collage31 from '/src/assets/collage31.jpg';
import collage28 from '/src/assets/collage28.jpg';
import collage29 from '/src/assets/collage29.jpg';
import collage30 from '/src/assets/collage30.jpg';
import collage46 from '/src/assets/collage46.jpg';
import collage33 from '/src/assets/collage33.jpg';
import collage49 from '/src/assets/collage49.jpg';
import rapture from '/src/assets/Dabs—Myla—Remix.jpg';
import spread1 from '/src/assets/spread1.png';
import spread2 from '/src/assets/spread2.png';
import spread3 from '/src/assets/spread3.png';
import spread4 from '/src/assets/spread4.png';
import spread5 from '/src/assets/spread5.png';
import spread6 from '/src/assets/spread6.png';

// ===================== PAINTING ASSETS =====================
import airbrush from '/src/assets/airbrush.jpg';
import yellowlily from '/src/assets/YellowLily.jpg'
import cacti1 from '/src/assets/E-png.png';
import splash from '/src/assets/splashpanel.png';
import yellowz from '/src/assets/Yellow-Z.png';
import selfie from '/src/assets/SelfPortrait.jpg';

export const FullHeightTextSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
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
  color: #ffffff;
  font-size: 2.3rem;
  max-width: 50ch;
  line-height: 1.4;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 1400px) {
    font-size: 1.8rem;
    max-width: 50ch;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    max-width: 75vw; /* still shrink width for readability */
  }

  a.inline-link {
    color: #ffffff;
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
        title="Printmaking  Screenprints and Collaborations by Zack MacTavish" 
        description="Screen printing and mixed media works, including collaborations with Olivia Zita Smith and CMYK experiments." 
        openGraphImages={[
          { url: ogImage1200, width: 1200, height: 630 },
          { url: ogImage600, width: 600, height: 315 }
        ]}
        url={canonicalFromLocation(useLocation())}
        keywords={["printmaking", "screenprint", "collaboration", "CMYK", "collage"]}
  authorName="Zack MacTavish"
  authorAlternateNames={["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"]}
        sameAs={["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]}
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
            "sameAs": ["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]
          }
        }}
      />



      {/* ===================== PRINTMAKING SECTION ===================== */}
       {/* Hero Images */}
            <img
  src={Cape}
  style={{
    width: '100vw',           // full width
    height: '100vh',          // full viewport height
    objectFit: 'cover',       // crop/zoom without stretching
    objectPosition: 'bottom', // align image to the bottom
    display: 'block'
  }}
/>
           
           <img
  src={Capetwo}
  style={{
    width: '100vw',          // full width
    height: '100vh',         // full viewport height
    objectFit: 'cover',      // crop/zoom without stretching
    objectPosition: 'center',// center the image
    display: 'block'
  }}
/>
      
      {/* Olivia Collabs Section */}
    <div style={{ backgroundColor: 'white', width: '100vw' }}>
      <Grid60>
        <TwoImageGrid className="one-row">
          <img src={olivia4} alt="Olivia 4" />
          <img src={olivia2} alt="Olivia 2" />
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
  <div style={{ backgroundColor: 'white', width: '100vw', padding: '8vh 0' }}>
      <ThreeImageGrid
        className="large multiply"
        style={{ width: 'min(98vw, 100%)', maxWidth: '1800px', margin: '0 auto' }}
      >
        <img src={screenprint2} alt="Screen Print 2" style={{ mixBlendMode: 'multiply' }} />
        <img src={screenprint2_1} alt="Screen Print 2.1" style={{ mixBlendMode: 'multiply' }} />
        <img src={screenprint1} alt="Screen Print 1" style={{ mixBlendMode: 'multiply' }} />
      </ThreeImageGrid>
  </div>

            {/* Olivia Collabs */}
 <div style={{ backgroundColor: 'white', width: '100vw' }}>
   <TwoImageGrid className="one-row">
     <img src={oliviacollab1} alt="Olivia 4" />
     <img src={oliviacollab2} alt="Olivia 2" />
   </TwoImageGrid>
 </div>

            <RisoFlex>
              <RisoItem Width="60vw" img src={oliviacollab3} />
            </RisoFlex>

             <div style={{ backgroundColor: 'white', width: '100vw' }}>
               <TwoImageGrid className="one-row">
                 <img src={oliviacollab6} alt="Olivia 4" />
                 <img src={oliviacollab5} alt="Olivia 2" />
               </TwoImageGrid>
             </div>

   <div style={{ backgroundColor: 'white', width: '100vw' }}>
     <TwoImageGrid className="one-row">
       <img src={oliviacollab7} alt="Olivia 4" />
       <img src={oliviacollab8} alt="Olivia 2" />
     </TwoImageGrid>
   </div>
      
 
        
      
            {/* CMYK Screenprints up to "The Nuns" */}

            <div style={{ backgroundColor: 'white', width: '100vw' }}>
              <ThreeImageGrid className="large">
                <img src={bear} alt="Screen Print 2" />
                <img src={graffiticollage} alt="Screen Print 2.1" />
                <img src={thetown} alt="Screen Print 1" />
              </ThreeImageGrid>
            </div>

    
      {/* ===================== PAINTING SECTION ===================== */}
   
     
     <FullHeightTextSection>
  <TextContainer>
    <TextContent>
      I often look to capture moments throughout my life. Painting allows me to express myself through shapes and color.
      <br /><br />
      I love exploring realism and abstraction.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>




      {/* Painting Feature Section: white background, gray image containers */}
      <section style={{ background: 'white', width: '100vw', padding: '4vh 0' }}>
        <ImageTextSplit className="blend-img" imageSrc={oliviacollab4} imageAlt="Olivia Collaboration">
          <ArtHeader>Olivia Collaboration</ArtHeader>
          <ArtYear>2022</ArtYear>
          <ArtDesc>Spraypaint, and relief ink on paper</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit className="blend-img" imageSrc={splash} imageAlt="MILKBONES">
          <ArtHeader>MILKBONES</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit className="blend-img" imageSrc={yellowz} imageAlt="YELLOW TWEED">
          <ArtHeader>YELLOW TWEED</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit className="blend-img" imageSrc={yellowlily} imageAlt="Yellow Lily">
          <ArtHeader>Yellow Lily</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Airbrush & acrylic on yupo paper.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit className="blend-img" imageSrc={airbrush} imageAlt="SHAPES">
          <ArtHeader>SHAPES</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit className="blend-img" imageSrc={cacti1} imageAlt="ORANGE CACTI">
          <ArtHeader>ORANGE CACTI</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ImageTextSplit>
      </section>

<RisoFlex style={{ paddingBottom: "100px" }}>
  <RisoItem Width="55vw" img src={selfie} />
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
      Collaging is a playful way for me to explore compositions, shapes, and color combinations.  
      It allows me to experiment freely and generate new ideas, and I genuinely enjoy the process.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>
               {/*} <RisoFlex >
   
           <RisoItem Width='55vw' img src={bike} />
   
           </RisoFlex> */}
   
   
              {/* Section with 3 photos */}
              <div style={{ backgroundColor: 'white', width: '100vw' }}>
                <ThreeImageGrid className="large">
                  <img src={collage32} alt="Screen Print 2" />
                  <img src={collage47} alt="Screen Print 2.1" />
                  <img src={collage50} alt="Screen Print 1" />
                </ThreeImageGrid>
              </div>
               
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread1} />
   
   </RisoFlex>
   
                 {/*}  <FullBg src={boats} /> */}
   
   
                    {/* Section with 3 photos */}

                    <div style={{ backgroundColor: 'white', width: '100vw' }}>
                      <ThreeImageGrid className="large">
                        <img src={collage1} alt="Screen Print 2" />
                        <img src={collage2} alt="Screen Print 2.1" />
                        <img src={collage3} alt="Screen Print 1" />
                      </ThreeImageGrid>
                    </div>

                  
   
   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread2} />
   
   </RisoFlex>
   
   
         {/* Section with 3 photos */}

         <div style={{ backgroundColor: 'white', width: '100vw' }}>
           <ThreeImageGrid className="large">
             <img src={collage4} alt="Screen Print 2" />
             <img src={collagefour} alt="Screen Print 2.1" />
             <img src={collage45} alt="Screen Print 1" />
           </ThreeImageGrid>
         </div>
              
   
               <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread3} />
   
   </RisoFlex>
   
   
   
     {/* Section with 3 photos */}

     <div style={{ backgroundColor: 'white', width: '100vw' }}>
       <ThreeImageGrid className="large">
         <img src={collage44} alt="Screen Print 2" />
         <img src={collage37} alt="Screen Print 2.1" />
         <img src={collage48} alt="Screen Print 1" />
       </ThreeImageGrid>
     </div>
                                
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread4} />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}

   <div style={{ backgroundColor: 'white', width: '100vw' }}>
     <ThreeImageGrid className="large">
       <img src={collage40} alt="Screen Print 2" />
       <img src={collage39} alt="Screen Print 2.1" />
       <img src={collage38} alt="Screen Print 1" />
     </ThreeImageGrid>
   </div>
      
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread5} />
   
   </RisoFlex>
   
   
   
   {/* Section with 3 photos */}

   <div style={{ backgroundColor: 'white', width: '100vw' }}>
     <ThreeImageGrid className="large">
       <img src={collage34} alt="Screen Print 2" />
       <img src={collage35} alt="Screen Print 2.1" />
       <img src={collage31} alt="Screen Print 1" />
     </ThreeImageGrid>
   </div>
   
                   <RisoFlex >
   
   <RisoItem Width='60vw' img src={spread6} />
   
   </RisoFlex>
   {/* Section with 3 photos */}

   <div style={{ backgroundColor: 'white', width: '100vw' }}>
     <ThreeImageGrid className="large">
       <img src={collage28} alt="Screen Print 2" />
       <img src={collage29} alt="Screen Print 2.1" />
       <img src={collage30} alt="Screen Print 1" />
     </ThreeImageGrid>
   </div>
   
   
                 <FullBg 
  src={rapture} 
  style={{ 
    width: "100vw",        // full width
    height: "100vh",       // full viewport height
    objectFit: "cover",    // crop/zoom without stretching
    objectPosition: "bottom", // center the image
  }} 
/>
   
                    {/* Section with 3 photos */}

                    <div style={{ backgroundColor: 'white', width: '100vw' }}>
                      <ThreeImageGrid className="large">
                        <img src={collage46} alt="Screen Print 2" />
                        <img src={collage33} alt="Screen Print 2.1" />
                        <img src={collage49} alt="Screen Print 1" />
                      </ThreeImageGrid>
                    </div>

         <div style={{ backgroundColor: 'white', width: '100vw' }}>
           <ThreeImageGrid style={{ backgroundColor: 'transparent' }}>
             <img src={collage41} alt="Screen Print 2" />
             <img src={collage42} alt="Screen Print 2.1" />
             <img src={collage43} alt="Screen Print 1" />
           </ThreeImageGrid>
         </div>


            
    </div>
  );
}