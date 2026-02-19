import React, { useLayoutEffect } from 'react';
import { Seo, Grid60 } from '@zackmactavish/foundation'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation } from '../../utils/seo'
// styled is not used in this file
import {ThreeImageGrid } from '../Dwelling/Dwelling'; // adjust path as needed
// ===================== SEO/OG/FAVICON ASSETS =====================
import ogImage1200 from '../../assets/og/website-logoresolutions-1200x630.png';
import favicon16 from '../../assets/og/favicon-16.png';
import favicon32 from '../../assets/og/favicon-32.png';
import favicon48 from '../../assets/og/favicon-48.png';
import favicon64 from '../../assets/og/favicon-64.png';
import favicon128 from '../../assets/og/favicon-128.png';
import favicon256 from '../../assets/og/favicon-256.png';
import favicon512 from '../../assets/og/favicon-512.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import faviconIco from '../../assets/favicon.ico';

// Composition components
import { 
  ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, 
  FullBg, GridRowThree, GridRowTwo, Orbital 
} from '../COMPOSITION/Composition';

// Polaroids
import polaroid1 from '../../assets/polaroid1.jpg';
import polaroid2 from '../../assets/polaroid2.jpg';
import polaroid3 from '../../assets/polaroid3.jpg';
import polaroid7 from '../../assets/polaroid7.jpg';
import polaroid8 from '../../assets/polaroid8.jpg';
import polaroid9 from '../../assets/polaroid9.jpg';

// Locations / Scenes
import Hawaii1 from '../../assets/Greenhut.jpg';
import eighteen from '../../assets/1821.jpg';
import birdy from '../../assets/BirdyBrooklyn.jpg';
import coney2 from '../../assets/Coney2.jpg';
import cannon1 from '../../assets/Cannon1.jpg';
import cannon2 from '../../assets/Cannon2.jpg';
import cannon3 from '../../assets/Cannon3.jpg';
import kevin from '../../assets/Kevin.jpg';
import skull from '../../assets/Skull.jpg';
import twoskulls from '../../assets/2skulls.jpg';
import hawaiianchurch from '../../assets/HawaiianChurch.jpg';
import aquarium from '../../assets/Aquarium.jpg';
import jelly1 from '../../assets/Jelly.jpg';
import jelly2 from '../../assets/Jelly2.jpg';
import goog from '../../assets/Goog.jpg';
import olivia from '../../assets/Olivia.jpg';
import williamsburg from '../../assets/Williamsburg.jpg';
import splash from '../../assets/Splash.jpg';
import circle1 from '../../assets/circle1.png';
import circle2 from '../../assets/circle2.jpg';
import circle3 from '../../assets/circle3.jpg';
import Avalon from '../../assets/Avalon.jpg';
import brooklyndouble from '../../assets/brooklyndouble.jpg';
import nathans from '../../assets/Nathans.jpg';
import greensand from '../../assets/greensand.jpg';


export default function Photography() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo 
        title="Photography  Film and Polaroids by Zack MacTavish" 
        description="A selection of film photographs and polaroids from Hawaii, New York, Portland, and more." 
  image={ogImage1200}
        url={canonicalFromLocation(useLocation())}
        keywords={["photography", "film", "polaroid", "Hawaii", "Brooklyn", "Portland"]}
  authorName="Zack MacTavish"
  authorAlternateNames={["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"]}
        sameAs={["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]}
        favicons={[
          { rel: 'icon', sizes: '16x16', href: favicon16 },
          { rel: 'icon', sizes: '32x32', href: favicon32 },
          { rel: 'icon', sizes: '48x48', href: favicon48 },
          { rel: 'icon', sizes: '64x64', href: favicon64 },
          { rel: 'icon', sizes: '128x128', href: favicon128 },
          { rel: 'icon', sizes: '256x256', href: favicon256 },
          { rel: 'icon', sizes: '512x512', href: favicon512 },
          { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon },
          { rel: 'icon', sizes: '192x192', href: icon192 },
          { rel: 'icon', sizes: '512x512', href: icon512 },
          { rel: 'icon', href: faviconIco }
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
            "sameAs": ["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]
          }
        }}
      />

      {/* Section with three polaroids */}

     <div style={{ backgroundColor: '#191919', width: '100vw', paddingTop: '8vh' }}>
       <Grid60 style={{ justifyItems: 'center', alignItems: 'center' }}>
         <ThreeImageGrid style={{ backgroundColor: 'transparent' }}>
           <img src={polaroid1} alt="Screen Print 2" />
           <img src={polaroid2} alt="Screen Print 2.1" />
           <img src={polaroid3} alt="Screen Print 1" />
         </ThreeImageGrid>
       </Grid60>
     </div>


      {/* Full image section */}
    <FullBg
  src={Hawaii1}
  style={{
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    display: "block"
  }}
/>

      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={eighteen} />
        <ArtText>
          <ArtHeader>1821 (Chicago)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={birdy} />
        <ArtTexttwo>
          <ArtHeader>BROOKLYN BRIDGE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={coney2} />
        <ArtTextthree>
          <ArtHeader>PARACHUTE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Section with three yellow polaroids */}

          <ThreeImageGrid style={{ backgroundColor: '#C7B815' }}>
  <img src={cannon1} alt="Screen Print 2" />
  <img src={cannon2} alt="Screen Print 2.1" />
  <img src={cannon3} alt="Screen Print 1" />
</ThreeImageGrid>

 
      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={kevin} />
        <ArtText>
          <ArtHeader>KEVIN</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={skull} />
        <ArtTexttwo>
          <ArtHeader>SKULL (Manhattan, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={twoskulls} />
        <ArtTextthree>
          <ArtHeader>Duo Skulls (Sauvie Island, OR)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Full image section */}
<FullBg 
  src={hawaiianchurch} 
  style={{ 
    width: "100vw",        
    height: "100vh",       
    objectFit: "cover",    
    objectPosition: "center", 
    display: "block",      // removes inline spacing that causes bottom gap
  }} 
/>

      {/* Section with three aquarium polaroids */}

          <ThreeImageGrid style={{ backgroundColor: '#191919' }}>
  <img src={aquarium} alt="Screen Print 2" />
  <img src={jelly1} alt="Screen Print 2.1" />
  <img src={jelly2} alt="Screen Print 1" />
</ThreeImageGrid>

  
      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={goog} />
        <ArtText>
          <ArtHeader>GOOG</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={olivia} />
        <ArtTexttwo>
          <ArtHeader>OLIVIA</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={williamsburg} />
        <ArtTextthree>
          <ArtHeader>WILLIAMSBURG BRIDGE</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Full splash image */}
      <FullBg 
  src={splash} 
  style={{ 
width: "100vw",        
    height: "100vh",       
    objectFit: "cover",    
    objectPosition: "center", 
    display: "block",      // removes inline spacing that causes bottom gap
  }} 
/>

      {/* Section with three circle polaroids */}


          <ThreeImageGrid style={{ backgroundColor: '#191919' }}>
  <img src={circle1} alt="Screen Print 2" />
  <img src={circle2} alt="Screen Print 2.1" />
  <img src={circle3} alt="Screen Print 1" />
</ThreeImageGrid>


      {/* Three-photo art section */}
      <ArtSectionthreeog>
        <Orbital src={Avalon} />
        <ArtText>
          <ArtHeader>Avalon Theatre (Portland, OR)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>
        </ArtText>

        <GridRowTwo src={brooklyndouble} />
        <ArtTexttwo>
          <ArtHeader>Street Graffiti (Brooklyn, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={nathans} />
        <ArtTextthree>
          <ArtHeader>NATHAN'S (Brooklyn, NY)</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Double exposure film photograph.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Section with three final polaroids */}

      <ThreeImageGrid style={{ backgroundColor: '#191919' }}>
  <img src={polaroid7} alt="Screen Print 2" />
  <img src={polaroid8} alt="Screen Print 2.1" />
  <img src={polaroid9} alt="Screen Print 1" />
</ThreeImageGrid>

  
      {/* Full image section */}
      <FullBg 
  src={greensand} 
  style={{ 
    width: "100vw",           // full viewport width
    height: "100vh",          // full viewport height
    objectFit: "cover",       // crop/zoom without stretching
    objectPosition: "center", // center the image
  }} 
/>

    </div>
  );
}