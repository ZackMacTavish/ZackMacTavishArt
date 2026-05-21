import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { useLayoutEffect } from 'react';
import { Seo, ImageTextSplit } from '../../foundation/adapter'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation, visuallyHiddenHeadingStyle } from '../../utils/seo'
import ResponsiveImage from '../../components/Images/ResponsiveImage';
// styled is not used in this file
import {ThreeImageGrid } from '../Dwelling/Dwelling'; // adjust path as needed
// ===================== SEO/OG/FAVICON ASSETS =====================
import ogImage1200 from '../../assets/og/website-logoresolutions-1200x630.png';
// Removed PNG favicon imports

// Composition components
import { 
  ArtDesc, ArtHeader, ArtYear, FullBg 
} from '../COMPOSITION/Composition';

// Polaroids
import polaroid1 from '../../assets/polaroid1.jpg';
import polaroid1Webp from '../../assets/optimized/polaroid1.webp';
import polaroid1Avif from '../../assets/optimized/polaroid1.avif';
import polaroid1Webp640 from '../../assets/optimized/polaroid1-640.webp';
import polaroid1Webp960 from '../../assets/optimized/polaroid1-960.webp';
import polaroid1Avif640 from '../../assets/optimized/polaroid1-640.avif';
import polaroid1Avif960 from '../../assets/optimized/polaroid1-960.avif';
import polaroid2 from '../../assets/polaroid2.jpg';
import polaroid2Webp from '../../assets/optimized/polaroid2.webp';
import polaroid2Avif from '../../assets/optimized/polaroid2.avif';
import polaroid2Webp640 from '../../assets/optimized/polaroid2-640.webp';
import polaroid2Webp960 from '../../assets/optimized/polaroid2-960.webp';
import polaroid2Avif640 from '../../assets/optimized/polaroid2-640.avif';
import polaroid2Avif960 from '../../assets/optimized/polaroid2-960.avif';
import polaroid3 from '../../assets/polaroid3.jpg';
import polaroid3Webp from '../../assets/optimized/polaroid3.webp';
import polaroid3Avif from '../../assets/optimized/polaroid3.avif';
import polaroid3Webp640 from '../../assets/optimized/polaroid3-640.webp';
import polaroid3Webp960 from '../../assets/optimized/polaroid3-960.webp';
import polaroid3Avif640 from '../../assets/optimized/polaroid3-640.avif';
import polaroid3Avif960 from '../../assets/optimized/polaroid3-960.avif';
import polaroid7 from '../../assets/polaroid7.jpg';
import polaroid7Webp from '../../assets/optimized/polaroid7.webp';
import polaroid7Avif from '../../assets/optimized/polaroid7.avif';
import polaroid8 from '../../assets/polaroid8.jpg';
import polaroid8Webp from '../../assets/optimized/polaroid8.webp';
import polaroid8Avif from '../../assets/optimized/polaroid8.avif';
import polaroid9 from '../../assets/polaroid9.jpg';
import polaroid9Webp from '../../assets/optimized/polaroid9.webp';
import polaroid9Avif from '../../assets/optimized/polaroid9.avif';

// Locations / Scenes
import Hawaii1 from '../../assets/Greenhut.jpg';
import Hawaii1Webp from '../../assets/optimized/Greenhut.webp';
import Hawaii1Avif from '../../assets/optimized/Greenhut.avif';
import Hawaii1Webp640 from '../../assets/optimized/Greenhut-640.webp';
import Hawaii1Webp960 from '../../assets/optimized/Greenhut-960.webp';
import Hawaii1Avif640 from '../../assets/optimized/Greenhut-640.avif';
import Hawaii1Avif960 from '../../assets/optimized/Greenhut-960.avif';
import eighteen from '../../assets/1821.jpg';
import eighteenWebp from '../../assets/optimized/1821.webp';
import eighteenAvif from '../../assets/optimized/1821.avif';
import birdy from '../../assets/BirdyBrooklyn.jpg';
import birdyWebp from '../../assets/optimized/BirdyBrooklyn.webp';
import birdyAvif from '../../assets/optimized/BirdyBrooklyn.avif';
import coney2 from '../../assets/Coney2.jpg';
import coney2Webp from '../../assets/optimized/Coney2.webp';
import coney2Avif from '../../assets/optimized/Coney2.avif';
import cannon1 from '../../assets/Cannon1.jpg';
import cannon1Webp from '../../assets/optimized/Cannon1.webp';
import cannon1Avif from '../../assets/optimized/Cannon1.avif';
import cannon2 from '../../assets/Cannon2.jpg';
import cannon2Webp from '../../assets/optimized/Cannon2.webp';
import cannon2Avif from '../../assets/optimized/Cannon2.avif';
import cannon3 from '../../assets/Cannon3.jpg';
import cannon3Webp from '../../assets/optimized/Cannon3.webp';
import cannon3Avif from '../../assets/optimized/Cannon3.avif';
import kevin from '../../assets/Kevin.jpg';
import kevinWebp from '../../assets/optimized/Kevin.webp';
import kevinAvif from '../../assets/optimized/Kevin.avif';
import skull from '../../assets/Skull.jpg';
import skullWebp from '../../assets/optimized/Skull.webp';
import skullAvif from '../../assets/optimized/Skull.avif';
import twoskulls from '../../assets/2skulls.jpg';
import twoskullsWebp from '../../assets/optimized/2skulls.webp';
import twoskullsAvif from '../../assets/optimized/2skulls.avif';
import hawaiianchurch from '../../assets/HawaiianChurch.jpg';
import hawaiianchurchWebp from '../../assets/optimized/HawaiianChurch.webp';
import hawaiianchurchAvif from '../../assets/optimized/HawaiianChurch.avif';
import aquarium from '../../assets/Aquarium.jpg';
import aquariumWebp from '../../assets/optimized/Aquarium.webp';
import aquariumAvif from '../../assets/optimized/Aquarium.avif';
import jelly1 from '../../assets/Jelly.jpg';
import jelly1Webp from '../../assets/optimized/Jelly.webp';
import jelly1Avif from '../../assets/optimized/Jelly.avif';
import jelly2 from '../../assets/Jelly2.jpg';
import jelly2Webp from '../../assets/optimized/Jelly2.webp';
import jelly2Avif from '../../assets/optimized/Jelly2.avif';
import goog from '../../assets/Goog.jpg';
import googWebp from '../../assets/optimized/Goog.webp';
import googAvif from '../../assets/optimized/Goog.avif';
import olivia from '../../assets/Olivia.jpg';
import oliviaWebp from '../../assets/optimized/Olivia.webp';
import oliviaAvif from '../../assets/optimized/Olivia.avif';
import williamsburg from '../../assets/Williamsburg.jpg';
import williamsburgWebp from '../../assets/optimized/Williamsburg.webp';
import williamsburgAvif from '../../assets/optimized/Williamsburg.avif';
import splash from '../../assets/Splash.jpg';
import splashWebp from '../../assets/optimized/Splash.webp';
import splashAvif from '../../assets/optimized/Splash.avif';
import circle1 from '../../assets/circle1.png';
import circle1Webp from '../../assets/optimized/circle1.webp';
import circle1Avif from '../../assets/optimized/circle1.avif';
import circle2 from '../../assets/circle2.jpg';
import circle2Webp from '../../assets/optimized/circle2.webp';
import circle2Avif from '../../assets/optimized/circle2.avif';
import circle3 from '../../assets/circle3.jpg';
import circle3Webp from '../../assets/optimized/circle3.webp';
import circle3Avif from '../../assets/optimized/circle3.avif';
import Avalon from '../../assets/Avalon.jpg';
import AvalonWebp from '../../assets/optimized/Avalon.webp';
import AvalonAvif from '../../assets/optimized/Avalon.avif';
import brooklyndouble from '../../assets/brooklyndouble.jpg';
import brooklyndoubleWebp from '../../assets/optimized/brooklyndouble.webp';
import brooklyndoubleAvif from '../../assets/optimized/brooklyndouble.avif';
import nathans from '../../assets/Nathans.jpg';
import nathansWebp from '../../assets/optimized/Nathans.webp';
import nathansAvif from '../../assets/optimized/Nathans.avif';
import greensand from '../../assets/greensand.jpg';
import greensandWebp from '../../assets/optimized/greensand.webp';
import greensandAvif from '../../assets/optimized/greensand.avif';

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];

const splitSectionStyle = {
  backgroundColor: 'white',
  width: '100vw',
  padding: '5vh 0',
  contentVisibility: 'auto',
  containIntrinsicSize: '1200px',
};


export default function Photography() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo 
        title="Photography | Zack MacTavish Art & Design" 
        description="A selection of film photographs and polaroids from Hawaii, New York, Portland, and more." 
  image={ogImage1200}
        url={canonicalFromLocation(useLocation())}
        keywords={["photography", "film", "polaroid", "Hawaii", "Brooklyn", "Portland"]}
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
          "name": "Photography Series",
          "url": canonicalFromLocation(useLocation()),
          "author": {
            "@type": "Person",
            "name": "Zack MacTavish",
            "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
            "sameAs": AUTHOR_SAME_AS
          }
        }}
      />
      <h1 style={visuallyHiddenHeadingStyle}>Photography by Zack MacTavish</h1>

      {/* Section with three polaroids */}

     <div style={{ backgroundColor: '#191919', width: '100vw', paddingTop: '8vh' }}>
       <ThreeImageGrid style={{ backgroundColor: 'transparent' }}>
         <ResponsiveImage src={polaroid1} webpSrc={polaroid1Webp} webpSrcSet={`${polaroid1Webp640} 640w, ${polaroid1Webp960} 960w, ${polaroid1Webp} 2200w`} avifSrc={polaroid1Avif} avifSrcSet={`${polaroid1Avif640} 640w, ${polaroid1Avif960} 960w, ${polaroid1Avif} 2200w`} sizes="(max-width: 900px) 90vw, 26vw" alt="Polaroid film photograph" width={710} height={864} loading="eager" decoding="sync" fetchPriority="high" />
         <ResponsiveImage src={polaroid2} webpSrc={polaroid2Webp} webpSrcSet={`${polaroid2Webp640} 640w, ${polaroid2Webp960} 960w, ${polaroid2Webp} 2200w`} avifSrc={polaroid2Avif} avifSrcSet={`${polaroid2Avif640} 640w, ${polaroid2Avif960} 960w, ${polaroid2Avif} 2200w`} sizes="(max-width: 900px) 90vw, 26vw" alt="Polaroid film photograph" width={710} height={864} loading="lazy" decoding="async" />
         <ResponsiveImage src={polaroid3} webpSrc={polaroid3Webp} webpSrcSet={`${polaroid3Webp640} 640w, ${polaroid3Webp960} 960w, ${polaroid3Webp} 2200w`} avifSrc={polaroid3Avif} avifSrcSet={`${polaroid3Avif640} 640w, ${polaroid3Avif960} 960w, ${polaroid3Avif} 2200w`} sizes="(max-width: 900px) 90vw, 26vw" alt="Polaroid film photograph" width={710} height={864} loading="lazy" decoding="async" />
       </ThreeImageGrid>
     </div>


      {/* Full image section */}
    <FullBg
  as={ResponsiveImage}
  src={Hawaii1}
  webpSrc={Hawaii1Webp}
  webpSrcSet={`${Hawaii1Webp640} 640w, ${Hawaii1Webp960} 960w, ${Hawaii1Webp} 2200w`}
  avifSrc={Hawaii1Avif}
  avifSrcSet={`${Hawaii1Avif640} 640w, ${Hawaii1Avif960} 960w, ${Hawaii1Avif} 2200w`}
  sizes="100vw"
  alt="Greenhut scene"
  width={5760}
  height={3840}
  style={{
    width: "100vw",
    height: "100svh",
    objectFit: "cover",
    display: "block"
  }}
/>

      {/* Photography feature section */}
      <section style={splitSectionStyle}>
        <ImageTextSplit imageSrc={eighteen} imageWebp={eighteenWebp} imageAvif={eighteenAvif} imageAlt="Film photograph of 1821 in Chicago">
          <ArtHeader>1821 (Chicago)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={birdy} imageWebp={birdyWebp} imageAvif={birdyAvif} imageAlt="Double-exposure film photograph of the Brooklyn Bridge">
          <ArtHeader>BROOKLYN BRIDGE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={coney2} imageWebp={coney2Webp} imageAvif={coney2Avif} imageAlt="Film photograph of the Parachute Jump at Coney Island">
          <ArtHeader>PARACHUTE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ImageTextSplit>
      </section>

      {/* Section with three yellow polaroids */}

            <ThreeImageGrid style={{ backgroundColor: '#C7B815' }}>
          <ResponsiveImage src={cannon1} webpSrc={cannon1Webp} avifSrc={cannon1Avif} alt="Polaroid film photograph" />
          <ResponsiveImage src={cannon2} webpSrc={cannon2Webp} avifSrc={cannon2Avif} alt="Polaroid film photograph" />
          <ResponsiveImage src={cannon3} webpSrc={cannon3Webp} avifSrc={cannon3Avif} alt="Polaroid film photograph" />
</ThreeImageGrid>

 
      {/* Photography feature section */}
      <section style={splitSectionStyle}>
        <ImageTextSplit imageSrc={kevin} imageWebp={kevinWebp} imageAvif={kevinAvif} imageAlt="Portrait photograph of Kevin taken on Holga 120N film">
          <ArtHeader>KEVIN</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={skull} imageWebp={skullWebp} imageAvif={skullAvif} imageAlt="Double-exposure film photograph of a skull in Manhattan">
          <ArtHeader>SKULL (Manhattan, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={twoskulls} imageWebp={twoskullsWebp} imageAvif={twoskullsAvif} imageAlt="Double-exposure film photograph of two skulls on Sauvie Island">
          <ArtHeader>Duo Skulls (Sauvie Island, OR)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>
      </section>

      {/* Full image section */}
<FullBg 
  as={ResponsiveImage}
  src={hawaiianchurch} 
  webpSrc={hawaiianchurchWebp}
  avifSrc={hawaiianchurchAvif}
  alt="Film photograph of a church in Hawaii"
  style={{ 
    width: "100vw",        
    height: "100svh",       
    objectFit: "cover",    
    objectPosition: "center", 
    display: "block",      // removes inline spacing that causes bottom gap
  }} 
/>

      {/* Section with three aquarium polaroids */}

            <ThreeImageGrid className="rounded-corners" style={{ backgroundColor: '#191919' }}>
            <ResponsiveImage src={aquarium} webpSrc={aquariumWebp} avifSrc={aquariumAvif} alt="Film photograph inside an aquarium" />
          <ResponsiveImage src={jelly1} webpSrc={jelly1Webp} avifSrc={jelly1Avif} alt="Film photograph of jellyfish in an aquarium" />
          <ResponsiveImage src={jelly2} webpSrc={jelly2Webp} avifSrc={jelly2Avif} alt="Close-up film photograph of jellyfish in an aquarium" />
</ThreeImageGrid>

  
      {/* Photography feature section */}
      <section style={splitSectionStyle}>
        <ImageTextSplit imageSrc={goog} imageWebp={googWebp} imageAvif={googAvif} imageAlt="Film photograph titled GOOG">
          <ArtHeader>GOOG</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={olivia} imageWebp={oliviaWebp} imageAvif={oliviaAvif} imageAlt="Double-exposure portrait of Olivia">
          <ArtHeader>OLIVIA</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={williamsburg} imageWebp={williamsburgWebp} imageAvif={williamsburgAvif} imageAlt="Double-exposure film photograph of the Williamsburg Bridge">
          <ArtHeader>WILLIAMSBURG BRIDGE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>
      </section>

      {/* Full splash image */}
        <FullBg 
      as={ResponsiveImage}
      src={splash} 
      webpSrc={splashWebp}
      avifSrc={splashAvif}
      alt="Film photograph titled Splash"
  style={{ 
width: "100vw",        
    height: "100svh",       
    objectFit: "cover",    
    objectPosition: "center", 
    display: "block",      // removes inline spacing that causes bottom gap
  }} 
/>

      {/* Section with three circle polaroids */}


          <ThreeImageGrid style={{ backgroundColor: '#191919' }}>
  <ResponsiveImage src={circle1} webpSrc={circle1Webp} avifSrc={circle1Avif} alt="Polaroid film photograph with circular framing" />
  <ResponsiveImage src={circle2} webpSrc={circle2Webp} avifSrc={circle2Avif} alt="Film photograph with circular framing" />
  <ResponsiveImage src={circle3} webpSrc={circle3Webp} avifSrc={circle3Avif} alt="Double-exposure film photograph with circular framing" />
</ThreeImageGrid>


      {/* Photography feature section */}
      <section style={splitSectionStyle}>
        <ImageTextSplit imageSrc={Avalon} imageWebp={AvalonWebp} imageAvif={AvalonAvif} imageAlt="Film photograph of Avalon Theatre in Portland, Oregon">
          <ArtHeader>Avalon Theatre (Portland, OR)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={brooklyndouble} imageWebp={brooklyndoubleWebp} imageAvif={brooklyndoubleAvif} imageAlt="Street graffiti in Brooklyn">
          <ArtHeader>Street Graffiti (Brooklyn, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={nathans} imageWebp={nathansWebp} imageAvif={nathansAvif} imageAlt="Double-exposure film photograph of Nathan's in Brooklyn">
          <ArtHeader>NATHAN'S (Brooklyn, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ImageTextSplit>
      </section>

      {/* Section with three final polaroids */}

      <ThreeImageGrid style={{ backgroundColor: '#191919' }}>
  <ResponsiveImage src={polaroid7} webpSrc={polaroid7Webp} avifSrc={polaroid7Avif} alt="Polaroid film photograph" />
  <ResponsiveImage src={polaroid8} webpSrc={polaroid8Webp} avifSrc={polaroid8Avif} alt="Polaroid film photograph" />
  <ResponsiveImage src={polaroid9} webpSrc={polaroid9Webp} avifSrc={polaroid9Avif} alt="Polaroid film photograph" />
</ThreeImageGrid>

  
      {/* Full image section */}
        <FullBg 
      as={ResponsiveImage}
      src={greensand} 
      webpSrc={greensandWebp}
      avifSrc={greensandAvif}
      alt="Green sand landscape"
      width={5760}
      height={3840}
  style={{ 
    width: "100vw",           // full viewport width
    height: "100svh",         // full viewport height
    objectFit: "cover",       // crop/zoom without stretching
    objectPosition: "center", // center the image
  }} 
/>

    </div>
  );
}