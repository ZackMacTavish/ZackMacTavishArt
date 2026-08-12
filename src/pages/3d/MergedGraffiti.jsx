import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { useLayoutEffect } from 'react';
import { Seo, ImageTextSplit, NarrativeFeatureSection } from '../../foundation/adapter'
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
import { 
  ArtDesc, ArtHeader, ArtYear, FullBg, ParagraphFour 
} from '../COMPOSITION/Composition';
import { ThreeImageGrid, SingleImageGrid } from '../Dwelling/Dwelling';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';
// ===================== SEO/OG/FAVICON ASSETS =====================
import ogImage1200 from '../../assets/og/website-logoresolutions-1200x630.png';
// Removed PNG favicon imports
import { NewSection } from '../About/About';

// --- ThreeD Assets ---
import fiftytwo from '../../assets/52.jpg';
import fiftytwoWebp from '../../assets/optimized/52.webp';
import fiftytwoAvif from '../../assets/optimized/52.avif';
import fiftytwoWebp640 from '../../assets/optimized/52-640.webp';
import fiftytwoWebp960 from '../../assets/optimized/52-960.webp';
import fiftytwoAvif640 from '../../assets/optimized/52-640.avif';
import fiftytwoAvif960 from '../../assets/optimized/52-960.avif';
import fiftysix from '../../assets/56.jpg';
import fiftysixWebp from '../../assets/optimized/56.webp';
import fiftysixAvif from '../../assets/optimized/56.avif';
import fiftysixWebp640 from '../../assets/optimized/56-640.webp';
import fiftysixWebp960 from '../../assets/optimized/56-960.webp';
import fiftysixAvif640 from '../../assets/optimized/56-640.avif';
import fiftysixAvif960 from '../../assets/optimized/56-960.avif';
import one from '../../assets/1.2.jpg';
import oneWebp from '../../assets/optimized/1.2.webp';
import oneAvif from '../../assets/optimized/1.2.avif';
import six from '../../assets/6.jpg';
import sixWebp from '../../assets/optimized/6.webp';
import sixAvif from '../../assets/optimized/6.avif';
import thirteen from '../../assets/13.jpg';
import thirteenWebp from '../../assets/optimized/13.webp';
import thirteenAvif from '../../assets/optimized/13.avif';

// --- Graffiti Assets ---
import artbash1 from '../../assets/Artbashmash.jpg';
import artbash1Webp from '../../assets/optimized/Artbashmash.webp';
import artbash1Avif from '../../assets/optimized/Artbashmash.avif';
import artbash2 from '../../assets/Artbashmash2.jpg';
import artbash2Webp from '../../assets/optimized/Artbashmash2.webp';
import artbash2Avif from '../../assets/optimized/Artbashmash2.avif';
import artbash3 from '../../assets/Artbashmash3.jpg';
import artbash3Webp from '../../assets/optimized/Artbashmash3.webp';
import artbash3Avif from '../../assets/optimized/Artbashmash3.avif';
import sense from '../../assets/RIPSENSE.jpg';
import senseWebp from '../../assets/optimized/RIPSENSE.webp';
import senseAvif from '../../assets/optimized/RIPSENSE.avif';
import bfa from '../../assets/BFA.jpg';
import bfaWebp from '../../assets/optimized/BFA.webp';
import bfaAvif from '../../assets/optimized/BFA.avif';
import reuzes from '../../assets/Reuzes.jpg';
import reuzesWebp from '../../assets/optimized/Reuzes.webp';
import reuzesAvif from '../../assets/optimized/Reuzes.avif';
import denver from '../../assets/Denver.jpg';
import denverWebp from '../../assets/optimized/Denver.webp';
import denverAvif from '../../assets/optimized/Denver.avif';
import Bees from '../../assets/Whiteline.jpg';
import BeesWebp from '../../assets/optimized/Whiteline.webp';
import BeesAvif from '../../assets/optimized/Whiteline.avif';
import mucha from '../../assets/Mucha.jpg';
import muchaWebp from '../../assets/optimized/Mucha.webp';
import muchaAvif from '../../assets/optimized/Mucha.avif';
import crawford from '../../assets/Crawford.jpg';
import crawfordWebp from '../../assets/optimized/Crawford.webp';
import crawfordAvif from '../../assets/optimized/Crawford.avif';
import paintlouis from '../../assets/Paintlouis.jpg';
import paintlouisWebp from '../../assets/optimized/Paintlouis.webp';
import paintlouisAvif from '../../assets/optimized/Paintlouis.avif';
import riso from '../../assets/riso3.jpg';
import risoWebp from '../../assets/optimized/riso3.webp';
import risoAvif from '../../assets/optimized/riso3.avif';
import sushix from '../../assets/SushiX.jpg';
import sushixWebp from '../../assets/optimized/SushiX.webp';
import sushixAvif from '../../assets/optimized/SushiX.avif';
import rogerrabbit from '../../assets/rogerrabbit.jpg';
import rogerrabbitWebp from '../../assets/optimized/rogerrabbit.webp';
import rogerrabbitAvif from '../../assets/optimized/rogerrabbit.avif';
import summer from '../../assets/summer16.jpg';
import summerWebp from '../../assets/optimized/summer16.webp';
import summerAvif from '../../assets/optimized/summer16.avif';
import sushixtwo from '../../assets/SushiX2.jpg';
import sushixtwoWebp from '../../assets/optimized/SushiX2.webp';
import sushixtwoAvif from '../../assets/optimized/SushiX2.avif';
import enova from '../../assets/Enova.jpg';
import enovaWebp from '../../assets/optimized/Enova.webp';
import enovaAvif from '../../assets/optimized/Enova.avif';
import eu from '../../assets/EU.jpg';
import euWebp from '../../assets/optimized/EU.webp';
import euAvif from '../../assets/optimized/EU.avif';

// --- Styled Components ---
export const RisoItem = styled.img`
  width: ${(props) => props.$Width || 'auto'};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`;

// Kept as a shared compatibility export for pages that still compose single-image riso sections.
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
  background-color: var(--surface-primary);
`;

const splitSectionStyle = {
  padding: '5vh 0',
};

export default function MergedGraffiti() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Seo 
        title="3D & Graffiti | Zack MacTavish Art & Design" 
        description="Graffiti roots, Rhino 3D renders, and murals across Chicago, Brooklyn, Denver, and more." 
        image={ogImage1200}
        url={canonicalFromLocation(useLocation())}
        keywords={["3D", "graffiti", "Rhino", "murals", "Chicago", "Brooklyn", "Denver"]}
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
          "name": "3D & Graffiti Series",
          "url": canonicalFromLocation(useLocation()),
          "author": {
            "@type": "Person",
            "name": "Zack MacTavish",
            "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
            "sameAs": AUTHOR_SAME_AS
          }
        }}
      />
      <h1 style={visuallyHiddenHeadingStyle}>3D and Graffiti by Zack MacTavish</h1>
      {/* --- ThreeD Section --- */}
        <FullBg as={ResponsiveImage} src={fiftytwo} webpSrc={fiftytwoWebp} webpSrcSet={`${fiftytwoWebp640} 640w, ${fiftytwoWebp960} 960w, ${fiftytwoWebp} 2200w`} avifSrc={fiftytwoAvif} avifSrcSet={`${fiftytwoAvif640} 640w, ${fiftytwoAvif960} 960w, ${fiftytwoAvif} 2200w`} sizes="100vw" alt="Rhino render 52" width={4000} height={2249} loading="eager" decoding="sync" fetchPriority="high" />
 <FullBg
  as={ResponsiveImage}
  src={fiftysix}
  webpSrc={fiftysixWebp}
      webpSrcSet={`${fiftysixWebp640} 640w, ${fiftysixWebp960} 960w, ${fiftysixWebp} 2200w`}
  avifSrc={fiftysixAvif}
      avifSrcSet={`${fiftysixAvif640} 640w, ${fiftysixAvif960} 960w, ${fiftysixAvif} 2200w`}
      sizes="100vw"
  alt="Rhino render 56"
  width={4000}
  height={2251}
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
    My artistic roots began in graffiti, where I became interested in letterforms, distortion, and the structure of an image. That practice led me into painting, typography, and eventually Rhino 3D, where I began building architectural lettering, digital forms, and objects for 3D printing. This work continues that technical side of my practice while staying connected to the visual language that first drew me to making art.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

      <NarrativeFeatureSection style={splitSectionStyle}>
        <ImageTextSplit imageSrc={one} imageWebp={oneWebp} imageAvif={oneAvif} imageAlt="No. 1 Rhino render">
          <ArtHeader>No. 1</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={six} imageWebp={sixWebp} imageAvif={sixAvif} imageAlt="No. 6 Rhino render">
          <ArtHeader>No. 6</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={thirteen} imageWebp={thirteenWebp} imageAvif={thirteenAvif} imageAlt="No. 13 Rhino render">
          <ArtHeader>No. 13</ArtHeader>
          <ArtYear>2017</ArtYear>
          <ArtDesc>Render made in Rhino, and Keyshot.</ArtDesc>
        </ImageTextSplit>
      </NarrativeFeatureSection>

      {/* --- Graffiti Section --- */}
      <div style={{ backgroundColor: 'var(--surface-secondary)', width: '100%', display: 'block', padding: '8vh 0' }}>
        <ThreeImageGrid className="rounded-corners" style={{ backgroundColor: 'var(--surface-secondary)' }}>
          <ResponsiveImage src={artbash1} webpSrc={artbash1Webp} avifSrc={artbash1Avif} alt="Art Bash graffiti collage 1" />
          <ResponsiveImage src={artbash2} webpSrc={artbash2Webp} avifSrc={artbash2Avif} alt="Art Bash graffiti collage 2" />
          <ResponsiveImage src={artbash3} webpSrc={artbash3Webp} avifSrc={artbash3Avif} alt="Art Bash graffiti collage 3" />
        </ThreeImageGrid>
      </div>


<FullBg
  as={ResponsiveImage}
  src={sense}
  webpSrc={senseWebp}
  avifSrc={senseAvif}
  alt="RIP SENSE mural"
  style={{
    width: "100%",           // safer than 100vw
    objectFit: "cover",
    objectPosition: "center",
    display: "block",        // removes inline gaps
  }}
/>
   

      <NarrativeFeatureSection style={splitSectionStyle}>
        <ImageTextSplit imageSrc={bfa} imageWebp={bfaWebp} imageAvif={bfaAvif} imageAlt="BFA Exhibition mural">
          <ArtHeader>BFA Exhibition < br/>(Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick veneer.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={reuzes} imageWebp={reuzesWebp} imageAvif={reuzesAvif} imageAlt="Lowbrow graffiti mural">
          <ArtHeader>LOWBROW (Brooklyn, NY)</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={denver} imageWebp={denverWebp} imageAvif={denverAvif} imageAlt="Rhino Denver mural">
          <ArtHeader>RHINO (Denver, CO)</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ImageTextSplit>
      </NarrativeFeatureSection>

  <NarrativeFeatureSection>
  <NewSection $Backgroundcolor="transparent" $Backgroundheight="125vh">
        <FiftyWidth>
          <BeesStyle as={ResponsiveImage} src={Bees} webpSrc={BeesWebp} avifSrc={BeesAvif} alt="Graffiti lettering study" />
        </FiftyWidth>
        <ParagraphFour data-narrative-text>
        This illustration of B’s in different styles was created for a self-published book about the art of graffiti writing.
        </ParagraphFour>
      </NewSection>
      </NarrativeFeatureSection>

      {/* Continue with remaining Graffiti sections */}
      <NarrativeFeatureSection style={splitSectionStyle}>
        <ImageTextSplit imageSrc={mucha} imageWebp={muchaWebp} imageAvif={muchaAvif} imageAlt="Orange Line graffiti piece">
          <ArtHeader>ORANGE LINE (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={crawford} imageWebp={crawfordWebp} imageAvif={crawfordAvif} imageAlt="Crawford graffiti mural">
          <ArtHeader>CRAWFORD (Chicago, IL)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={paintlouis} imageWebp={paintlouisWebp} imageAvif={paintlouisAvif} imageAlt="Paint Louis graffiti mural">
          <ArtHeader>PAINT LOUIS (St. Louis, MO)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ImageTextSplit>
      </NarrativeFeatureSection>

      <div style={{ backgroundColor: 'var(--surface-primary)', width: '100%' }}>
        <SingleImageGrid className="narrow rounded-corners">
          <ResponsiveImage src={riso} webpSrc={risoWebp} avifSrc={risoAvif} alt="Graffiti riso spread" />
        </SingleImageGrid>
      </div>

      <NarrativeFeatureSection style={splitSectionStyle}>
        <ImageTextSplit imageSrc={sushix} imageWebp={sushixWebp} imageAvif={sushixAvif} imageAlt="Sushi X graffiti piece">
          <ArtHeader>Sushi X</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={rogerrabbit} imageWebp={rogerrabbitWebp} imageAvif={rogerrabbitAvif} imageAlt="Roger Rabbit graffiti piece">
          <ArtHeader>Crawford</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={summer} imageWebp={summerWebp} imageAvif={summerAvif} imageAlt="Summer 2016 graffiti piece">
          <ArtHeader>Crawford</ArtHeader>
          <ArtYear>2019</ArtYear>
          <ArtDesc>Spray paint on cement.</ArtDesc>
        </ImageTextSplit>
      </NarrativeFeatureSection>

      {/* <RisoFlex>
  <RisoItem $Width="80vw" src={Lines} />
    <RisoItem $Width="80vw" src={Lines} />
      </RisoFlex> */}

      <NarrativeFeatureSection style={splitSectionStyle}>
        <ImageTextSplit imageSrc={sushixtwo} imageWebp={sushixtwoWebp} imageAvif={sushixtwoAvif} imageAlt="Sushi X collaboration graffiti piece">
          <ArtHeader>Sushi X</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on brick. <br />(Collaboration with 'Leks')</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={enova} imageWebp={enovaWebp} imageAvif={enovaAvif} imageAlt="Enova International Inc graffiti piece">
          <ArtHeader>ENOVA INTERNATIONAL INC.</ArtHeader>
          <ArtYear>2015</ArtYear>
          <ArtDesc>Spray paint on wood.</ArtDesc>
        </ImageTextSplit>

        <ImageTextSplit imageSrc={eu} imageWebp={euWebp} imageAvif={euAvif} imageAlt="Yarrow's graffiti piece">
          <ArtHeader>YARROW'S (Providence, RI)</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Spray paint on cinderblock.</ArtDesc>
        </ImageTextSplit>
      </NarrativeFeatureSection>

      {/*
<RisoFlex>
  <RisoItem $Width="80vw" src={stylesmash} />
    <RisoItem $Width="80vw" src={stylesmash} />
</RisoFlex>
*/}
    </div>
  );
}