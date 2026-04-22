import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { useLayoutEffect } from 'react';
import { Seo, Grid60 } from '@zackmactavish/foundation'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation } from '../../utils/seo'
import styled from 'styled-components';
import { 
  ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, 
  FullBg, GridRowThree, GridRowTwo, Orbital, ParagraphFour 
} from '../COMPOSITION/Composition';
import { ThreeImageGrid } from '../Dwelling/Dwelling'; // adjust path as needed
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';
// ===================== SEO/OG/FAVICON ASSETS =====================
import ogImage1200 from '../../assets/og/website-logoresolutions-1200x630.png';
import ogImage600 from '../../assets/og/website-logoresolutions-600x315.png';
// Removed PNG favicon imports
import { NewSection } from '../About/About';

// --- ThreeD Assets ---
import fiftytwo from '../../assets/52.jpg';
import fiftysix from '../../assets/56.jpg';
import one from '../../assets/1.2.jpg';
import six from '../../assets/6.jpg';
import thirteen from '../../assets/13.jpg';

// --- Graffiti Assets ---
import artbash1 from '../../assets/Artbashmash.jpg';
import artbash2 from '../../assets/Artbashmash2.jpg';
import artbash3 from '../../assets/Artbashmash3.jpg';
import sense from '../../assets/RIPSENSE.jpg';
import bfa from '../../assets/BFA.jpg';
import reuzes from '../../assets/Reuzes.jpg';
import denver from '../../assets/Denver.jpg';
import Bees from '../../assets/Whiteline.jpg';
import mucha from '../../assets/Mucha.jpg';
import crawford from '../../assets/Crawford.jpg';
import paintlouis from '../../assets/Paintlouis.jpg';
import riso from '../../assets/riso3.jpg';
import sushix from '../../assets/SushiX.jpg';
import rogerrabbit from '../../assets/rogerrabbit.jpg';
import summer from '../../assets/summer16.jpg';
import sushixtwo from '../../assets/SushiX2.jpg';
import enova from '../../assets/Enova.jpg';
import eu from '../../assets/EU.jpg';

// --- Styled Components ---
export const RisoItem = styled.img`
   width: ${(props) => props.$Width || 'auto'};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`;

export const RisoFlex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`;

const BeesStyle = styled.img`
  max-width: 900px;
  width: 65vw;
  height: auto;
 
`;

const FiftyWidth = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export default function MergedGraffiti() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo 
        title="3D & Graffiti  Rhino Renders and Murals by Zack MacTavish" 
        description="Graffiti roots, Rhino 3D renders, and murals across Chicago, Brooklyn, Denver, and more." 
        images={[
          { url: ogImage1200, width: 1200, height: 630 },
          { url: ogImage600, width: 600, height: 315 }
        ]}
        url={canonicalFromLocation(useLocation())}
        keywords={["3D", "graffiti", "Rhino", "murals", "Chicago", "Brooklyn", "Denver"]}
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
          "name": "3D & Graffiti Series",
          "url": canonicalFromLocation(useLocation()),
          "author": {
            "@type": "Person",
            "name": "Zack MacTavish",
            "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
            "sameAs": ["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]
          }
        }}
      />
      {/* --- ThreeD Section --- */}
      <FullBg src={fiftytwo} />
 <FullBg
  src={fiftysix}
  style={{
    width: "100vw",
    minHeight: "100vh",   // ensures no strip, but allows bigger
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  }}
/>

     <FullHeightTextSection>
  <TextContainer>
    <TextContent>
    My artistic roots began in graffiti, exploring letters and their distortions. This practice led me to painting, typography, and other forms of visual expression. In college, I expanded into Rhino 3D, creating architectural lettering and 3D printed structures. I continue to explore new forms and visuals in 3D.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

      <ArtSectionthreeog>
        <Orbital src={one} />
        <ArtText>
          <ArtHeader>No. 1</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ArtText>

        <GridRowTwo src={six} />
        <ArtTexttwo>
          <ArtHeader>No. 6</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={thirteen} />
        <ArtTextthree>
          <ArtHeader>No. 13</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* --- Graffiti Section --- */}
      <div style={{ backgroundColor: '#191919', width: '100%', display: 'block', padding: '8vh 0' }}>
        <Grid60>
          <ThreeImageGrid style={{ backgroundColor: '#191919' }}>
            <img src={artbash1} alt="Screen Print 2" />
            <img src={artbash2} alt="Screen Print 2.1" />
            <img src={artbash3} alt="Screen Print 1" />
          </ThreeImageGrid>
        </Grid60>
      </div>


<FullBg
  src={sense}
  style={{
    width: "100%",           // safer than 100vw
    objectFit: "cover",
    objectPosition: "center",
    display: "block",        // removes inline gaps
  }}
/>
   

      <ArtSectionthreeog>
        <Orbital src={bfa} />
        <ArtText>
          <ArtHeader>BFA Exhibition < br/>(Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick veneer.</ArtDesc>
        </ArtText>

        <GridRowTwo src={reuzes} />
        <ArtTexttwo>
          <ArtHeader>LOWBROW (Brooklyn, NY)</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={denver} />
        <ArtTextthree>
          <ArtHeader>RHINO (Denver, CO)</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

  <NewSection $Backgroundcolor="white" $Backgroundheight="125vh">
        <FiftyWidth>
          <BeesStyle src={Bees} />
        </FiftyWidth>
        <ParagraphFour style={{ color: '#ffffff' }}>
        This illustration of B’s in different styles was created for a self-published book about the art of graffiti writing.
        </ParagraphFour>
      </NewSection>

      {/* Continue with remaining Graffiti sections */}
      <ArtSectionthreeog>
        <Orbital src={mucha} />
        <ArtText>
          <ArtHeader>ORANGE LINE (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ArtText>

        <GridRowTwo src={crawford} />
        <ArtTexttwo>
          <ArtHeader>CRAWFORD (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={paintlouis} />
        <ArtTextthree>
          <ArtHeader>PAINT LOUIS (St. Louis, MO)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      <RisoFlex>
  <RisoItem $Width="60vw" src={riso} />
          <RisoItem $Width="60vw" src={riso} />
      </RisoFlex>

      <ArtSectionthreeog>
        <Orbital src={sushix} />
        <ArtText>
          <ArtHeader>Sushi X</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick.</ArtDesc>
        </ArtText>

        <GridRowTwo src={rogerrabbit} />
        <ArtTexttwo>
          <ArtHeader>Crawford</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={summer} />
        <ArtTextthree>
          <ArtHeader>Crawford</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* <RisoFlex>
  <RisoItem $Width="80vw" src={Lines} />
    <RisoItem $Width="80vw" src={Lines} />
      </RisoFlex> */}

      <ArtSectionthreeog>
        <Orbital src={sushixtwo} />
        <ArtText>
          <ArtHeader>Sushi X</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick. <br />(Collaboration with 'Leks')</ArtDesc>
        </ArtText>

        <GridRowTwo src={enova} />
        <ArtTexttwo>
          <ArtHeader>ENOVA INTERNATIONAL INC.</ArtHeader>
          <ArtYear>2015</ArtYear>
          <ArtDesc>Spray paint on wood.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={eu} />
        <ArtTextthree>
          <ArtHeader>YARROW'S (Providence, RI)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/*
<RisoFlex>
  <RisoItem $Width="80vw" src={stylesmash} />
    <RisoItem $Width="80vw" src={stylesmash} />
</RisoFlex>
*/}
    </div>
  );
}