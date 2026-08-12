import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { useLayoutEffect } from 'react';
import { Seo, Grid60, ImageTextSplit, NarrativeFeatureSection } from '../../foundation/adapter'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation, visuallyHiddenHeadingStyle } from '../../utils/seo'
import ResponsiveImage from '../../components/Images/ResponsiveImage';
import BookFlip from '../../components/BookFlip/BookFlip';

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];
import styled from 'styled-components';

import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';
// Removed QuiltContainer/QuiltImage/QuiltText in favor of foundation ImageTextSplit

// Assets
import fullcover from '../../assets/Composition-BackCover-Pt.2-01.jpg';
import fullcoverWebp from '../../assets/optimized/Composition-BackCover-Pt.2-01.webp';
import fullcoverAvif from '../../assets/optimized/Composition-BackCover-Pt.2-01.avif';
import fullcoverWebp640 from '../../assets/optimized/Composition-BackCover-Pt.2-01-640.webp';
import fullcoverWebp960 from '../../assets/optimized/Composition-BackCover-Pt.2-01-960.webp';
import fullcoverAvif640 from '../../assets/optimized/Composition-BackCover-Pt.2-01-640.avif';
import fullcoverAvif960 from '../../assets/optimized/Composition-BackCover-Pt.2-01-960.avif';
import renderone from '../../assets/Render1.png';
import renderoneWebp from '../../assets/optimized/Render1.webp';
import renderoneAvif from '../../assets/optimized/Render1.avif';
import artbook from '../../assets/Artbook.png';
import artbookWebp from '../../assets/optimized/Artbook.webp';
import artbookAvif from '../../assets/optimized/Artbook.avif';
import orbital from '../../assets/Orbital.jpg';
import orbitalWebp from '../../assets/optimized/Orbital.webp';
import orbitalAvif from '../../assets/optimized/Orbital.avif';
import spraywash from '../../assets/Spraypaintwash.png';
import spraywashWebp from '../../assets/optimized/Spraypaintwash.webp';
import spraywashAvif from '../../assets/optimized/Spraypaintwash.avif';
import rendertwo from '../../assets/Render2.png';
import rendertwoWebp from '../../assets/optimized/Render2.webp';
import rendertwoAvif from '../../assets/optimized/Render2.avif';
import twin1 from '../../assets/Twin1.jpeg';
import twin1Webp from '../../assets/optimized/Twin1.webp';
import twin1Avif from '../../assets/optimized/Twin1.avif';
import twin2 from '../../assets/Twin2.jpeg';
import twin2Webp from '../../assets/optimized/Twin2.webp';
import twin2Avif from '../../assets/optimized/Twin2.avif';
import staircases from '../../assets/Staircases.jpg';
import staircasesWebp from '../../assets/optimized/Staircases.webp';
import staircasesAvif from '../../assets/optimized/Staircases.avif';
import heartwhite from '../../assets/heartwhite.jpeg';
import heartwhiteWebp from '../../assets/optimized/heartwhite.webp';
import heartwhiteAvif from '../../assets/optimized/heartwhite.avif';
import heartblack from '../../assets/heartblack.jpg';
import heartblackWebp from '../../assets/optimized/heartblack.webp';
import heartblackAvif from '../../assets/optimized/heartblack.avif';
import birds from '../../assets/Birds.jpg';
import birdsWebp from '../../assets/optimized/Birds.webp';
import birdsAvif from '../../assets/optimized/Birds.avif';
import brooklyn from '../../assets/Brooklyn.jpg';
import brooklynWebp from '../../assets/optimized/Brooklyn.webp';
import brooklynAvif from '../../assets/optimized/Brooklyn.avif';
import coney from '../../assets/Coney.jpg';
import coneyWebp from '../../assets/optimized/Coney.webp';
import coneyAvif from '../../assets/optimized/Coney.avif';
import brooklyn2 from '../../assets/Brooklyn2.jpg';
import brooklyn2Webp from '../../assets/optimized/Brooklyn2.webp';
import brooklyn2Avif from '../../assets/optimized/Brooklyn2.avif';
import render4 from '../../assets/Render4.png';
import render4Webp from '../../assets/optimized/Render4.webp';
import render4Avif from '../../assets/optimized/Render4.avif';
import rug from '../../assets/Rug.jpg';
import rugWebp from '../../assets/optimized/Rug.webp';
import rugAvif from '../../assets/optimized/Rug.avif';
import mash1 from '../../assets/Mash1.png';
import mash1Webp from '../../assets/optimized/Mash1.webp';
import mash1Avif from '../../assets/optimized/Mash1.avif';
import mash2 from '../../assets/Mash2.png';
import mash2Webp from '../../assets/optimized/Mash2.webp';
import mash2Avif from '../../assets/optimized/Mash2.avif';
import render5 from '../../assets/Render5.png';
import render5Webp from '../../assets/optimized/Render5.webp';
import render5Avif from '../../assets/optimized/Render5.avif';
import mash3 from '../../assets/Mash3.png';
import mash3Webp from '../../assets/optimized/Mash3.webp';
import mash3Avif from '../../assets/optimized/Mash3.avif';
import mash4 from '../../assets/Mash4.png';
import mash4Webp from '../../assets/optimized/Mash4.webp';
import mash4Avif from '../../assets/optimized/Mash4.avif';
import mash5 from '../../assets/Mash5.png';
import mash5Webp from '../../assets/optimized/Mash5.webp';
import mash5Avif from '../../assets/optimized/Mash5.avif';
import mattos from '../../assets/Mattos.png';
import mattosWebp from '../../assets/optimized/Mattos.webp';
import mattosAvif from '../../assets/optimized/Mattos.avif';
import og from '../../assets/No.3.png';
import ogWebp from '../../assets/optimized/No.3.webp';
import ogAvif from '../../assets/optimized/No.3.avif';
import grain from '../../assets/Grain.jpg';
import grainWebp from '../../assets/optimized/Grain.webp';
import grainAvif from '../../assets/optimized/Grain.avif';
import ogImage from '../../assets/og/website-logoresolutions-1200x630.png';
// Removed duplicate favicon imports

const LanderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundTwo};
  width: 100vw;
  min-height: 100vh; /* ensures full height but can shrink on smaller screens */
  overflow: hidden;
  padding: 2vh 0;

  @media (max-height: 800px) {
    min-height: 70vh; /* shrink height on smaller viewports */
  }

  @media (max-width: 850px) {
    min-height: 60vh;
  }
`;

const FullCover = styled.img`
  background-color: ${props => props.theme.backgroundTwo};
  width: 54vw;
  max-width: 90vw; /* prevents overflow on small screens */
  height: auto;

  @media (max-width: 850px) {
    width: 80vw; /* scale up a bit relative to smaller screens */
  }
`;

const CenteredRenderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${props => props.theme.backgroundTwo};
  padding: 4vh 0;
`;

const FeatureRender = styled.img`
  width: min(74vw, 1180px);
  max-width: 92vw;
  height: auto;
  display: block;
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 90vw;
  }
`;

const BlogCardLink = styled.a`
  width: min(88vw, 72ch);
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: clamp(16px, 2vw, 24px);
  align-items: center;
  color: inherit;
  text-decoration: none;
  background: ${(props) => props.theme.narrativeBackground};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const BlogCardImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 9;
    min-height: 0;
  }
`;

const BlogCardCopy = styled.div`
  padding: clamp(1.4rem, 2.4vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const BlogTitle = styled.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.18rem, 1.45vw, 1.45rem);
  line-height: 1.12;
  color: ${(props) => props.theme.narrativeText};
`;

const BlogDescription = styled.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${(props) => props.theme.pageMuted};
`;

const BlogCta = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${(props) => props.theme.narrativeText};
`;

export const Orbital = styled.img`
  grid-row-start: 1;
  grid-column-start: 1;
  width: min(100%, 460px);
  max-width: 460px;
  height: auto;
  justify-self: end;

  @media (max-width: 1290px){ max-width: 420px; }
  @media (max-width: 1115px){ max-width: 360px; }

  @media (max-width: 830px){
    grid-column-start: 1;
    width: 100%;
    max-width: 100%;
    justify-self: center;
  }
`;


export const GridRowTwo = styled(Orbital)`
  grid-row-start: 3;
`;

export const GridRowThree = styled(Orbital)`
  grid-row-start: 5;
`;
/* Art resting on row one */
const Rug = styled.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: auto;
width: 40vw;
align-self: flex-end;

@media (max-width: 830px){
    max-width: 100vw;
    grid-column-start: 1;
    width: 100vw;
    height: auto;
}
`


export const TwinTwo = styled.img`
  grid-row-start: 1;
  grid-column-start: 2;
  width: min(100%, 460px);
  max-width: 460px;
  height: auto;
  justify-self: start;

  @media (max-width: 1290px){ max-width: 420px; }
  @media (max-width: 1115px){ max-width: 360px; }

  @media (max-width: 830px){
    grid-column-start: 1;
    grid-row-start: 2;
    width: 100%;
    max-width: 100%;
    justify-self: center;
  }
`;


export const TwinsText = styled.div`
  grid-row-start: 2;
  grid-column: 1 / span 2;
  justify-self: start;
  color: ${(props) => props.theme.narrativeText};
  padding-top: 1.5rem;
  line-height: 1.3;
  font-family: 'Space Grotesk', sans-serif;
  width: min(42rem, 100%);
  text-align: left;

  @media (max-width: 830px){
    grid-column-start: auto;
    grid-row-start: 3;
    width: 90%;
    margin: 16px auto 32px auto;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const FullBg = styled.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${props => props.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`

export const ParagraphFour = styled.div`
  position: relative;
  padding-right: 6vw;       /* desktop padding */
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: 40vw;
  color: #a0a0a0;

  @media (max-width: 1770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;               /* block takes most of the width */
    max-width: 700px;          /* prevents it from being too wide */
    font-size: 1.6rem;
    margin: 4vh auto 0 auto;   /* centers the block horizontally */
    padding-right: 0;          /* remove desktop padding on mobile */
    text-align: left;          /* text stays left-aligned inside the block */
  }
`;

/* Section with three standard pieces column wise */
export const ArtSectionthree = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: ${(props) => props.Grids};
padding-top: 5vh;
background-color:${props => props.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`

/* Custom Grid for Ephemeral Twins - moving single row to 2 rows of content */
export const ArtSectiontwins = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 576px));
  grid-template-rows: auto auto;
  width: 100vw;
  box-sizing: border-box;
  padding-left: max(6vw, calc((100vw - 1180px) / 2));
  padding-right: max(6vw, calc((100vw - 1180px) / 2));
  justify-content: start;
  column-gap: clamp(18px, 2vw, 28px);
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${props => props.theme.narrativeBackground};

  & > ${Orbital},
  & > ${TwinTwo} {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 1320px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  @media (max-width: 830px){
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    row-gap: 2rem;
    padding: 5vh 2vw;
  }
`;


export const ArtSectionthreeog = styled.div`
  display: grid;
  grid-template-columns: 10vw 40vw 40vw 10vw;
  grid-template-rows: auto auto auto auto auto auto;
  row-gap: 3ch;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${props => props.theme.narrativeBackground};

  @media (max-width: 830px) {
    grid-template-columns: 100vw;
    grid-template-rows: auto;
    row-gap: 2ch;
    padding: 5vh 0 5vh 0; // add padding top for stacked layout
  }
`;

/* Section with three grids - 2 rows of content */
export const ArtSectionThreetwo = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${props => props.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
    height: auto;
    row-gap: 2ch;
}
`

/* Section with three grids - 1 rows of content */
export const ArtSectionThreeone = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color:${props => props.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto;
    height: auto;
    row-gap: 2ch;
}
`




/* Text sitting on row one*/
export const ArtText = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7.5vw;
  padding-right: 6vw;
  color: ${(props) => props.theme.narrativeText};

  @media (max-width: 830px) {
    /* Remove grid positioning */
    grid-column-start: auto;
    grid-row-start: auto;

    /* Center block horizontally */
    width: 90%;            /* or calc(100% - 32px) */
    margin: 16px auto 32px auto;

    /* Keep internal content left-aligned */
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ArtTexttwo = styled(ArtText)`
  grid-row-start: 3;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`;

export const ArtTextthree = styled(ArtText)`
  grid-row-start: 5;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`;


export const ArtHeader = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1.8rem; }
  @media(max-width: 830px) { font-size: 1.4rem; }
`;

export const ArtYear = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  margin: 0 0 1rem 0;  // spacing below year
  color: inherit;

  @media(max-width: 1750px) { font-size: 1.5rem; }
  @media(max-width: 830px) { font-size: 1.2rem; }
`;

export const ArtDesc = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2; // tighter line-height for description
  margin: 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1rem; }
  @media(max-width: 830px) { font-size: 0.9rem; }
`;

// Slightly larger, consistent text style for ImageTextSplit copy blocks
const SplitTextComp = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  color: ${(props) => props.theme.narrativeText};
  font-size: clamp(1.08rem, 1.35vw, 1.35rem);
  line-height: 1.6;

  @media (max-width: 1400px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.08rem;
  }
  @media (max-width: 450px) {
    font-size: 1.05rem;
  }
`;


export default function Composition() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
  }, []);

    const canonical = canonicalFromLocation(useLocation());

    return (<div>
<style>{`
  /* Match About page split spacing and width */
  .tight-split {
    gap: 28px !important;
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    .tight-split { width: 92vw; }
  }
`}</style>
<Seo 
  title="Composition | Zack MacTavish Art & Design" 
  description="Composition is Zack MacTavish's first solo show, using the composition notebook as a metaphor for self-reflection through paintings, photographs, collages, rugs, and a self-published book made from 2019 to 2021." 
  image={ogImage}
  url={canonical}
  keywords={["composition", "painting", "render", "photography"]}
  authorName="Zack MacTavish"
  authorAlternateNames={["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"]}
  sameAs={AUTHOR_SAME_AS}
  favicons={[
    { rel: 'icon', sizes: '16x16', href: favicon16 },
    { rel: 'icon', sizes: '32x32', href: favicon32 },
  // { rel: 'icon', sizes: '48x48', href: favicon48 }, // Removed: favicon48 does not exist
  // { rel: 'icon', sizes: '64x64', href: favicon64 }, // Removed: favicon64 does not exist
  // { rel: 'icon', sizes: '128x128', href: favicon128 }, // Removed: favicon128 does not exist
  { rel: 'icon', sizes: '256x256', href: icon256 },
  { rel: 'icon', sizes: '512x512', href: icon512 },
    { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon },
    { rel: 'icon', sizes: '192x192', href: icon192 },
    { rel: 'icon', sizes: '512x512', href: icon512 },
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
    "name": "Composition Series",
    "url": canonical,
    "author": {
      "@type": "Person",
      "name": "Zack MacTavish",
  "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
      "sameAs": AUTHOR_SAME_AS
    }
  }}
/>

<h1 style={visuallyHiddenHeadingStyle}>Composition by Zack MacTavish</h1>

{/*COMPOSITION NOTEBOOK Part 2 Landing */}
  <LanderSection>
            <FullCover as={ResponsiveImage} src={fullcover} webpSrc={fullcoverWebp} webpSrcSet={`${fullcoverWebp640} 640w, ${fullcoverWebp960} 960w, ${fullcoverWebp} 2200w`} avifSrc={fullcoverAvif} avifSrcSet={`${fullcoverAvif640} 640w, ${fullcoverAvif960} 960w, ${fullcoverAvif} 2200w`} sizes="(max-width: 850px) 80vw, 54vw" alt="Composition notebook cover" width={5620} height={3685} loading="eager" decoding="sync" fetchPriority="high" />
        </LanderSection>

{/*RENDER 1 FULL SCREEN */}
<FullHeightTextSection style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
  <TextContainer style={{ width: 'min(88vw, 72ch)', padding: 0, alignItems: 'stretch' }}>
     <TextContent style={{ maxWidth: '100%' }}>
       Composition was my first solo art show and uses the composition notebook as a metaphor for self-reflection across the places I have lived. The series grew out of moving more than 21 times through Rhode Island, Massachusetts, Illinois, New York, Oregon, and Pennsylvania, and became a way to document how environment, memory, and personal growth accumulate over time. Made between 2019 and 2021, the show brought together paintings, a graphite drawing, hand-tufted rugs, photographs, physical and digital collages, and a self-published book.
    </TextContent>
  </TextContainer>
  <BlogCardLink href="https://medium.com/@zmactavish/my-first-solo-art-show-de7ac72b054f" target="_blank" rel="noreferrer">
    <BlogCardImage as={ResponsiveImage} src={artbook} webpSrc={artbookWebp} avifSrc={artbookAvif} alt="Composition art book and blog post preview" />
    <BlogCardCopy>
      <BlogTitle>Read more about Composition</BlogTitle>
      <BlogDescription>
        A short essay on the show, the series, and how it led into my current body of work.
      </BlogDescription>
      <BlogCta>Read on Medium</BlogCta>
    </BlogCardCopy>
  </BlogCardLink>
</FullHeightTextSection>
        
<CenteredRenderSection>
  <FeatureRender as={ResponsiveImage} src={renderone} webpSrc={renderoneWebp} avifSrc={renderoneAvif} alt="Composition render one" />
</CenteredRenderSection>


{/*Art Book + Text */}
{/* ---------- Art Book + Text Section ---------- */}
{/* ---------- Art Book + Text Section ---------- */}
<div style={{ backgroundColor: 'var(--surface-secondary)', width: '100vw', padding: '8vh 0' }}>
  <ImageTextSplit className="tight-split" imageSrc={artbook} imageWebp={artbookWebp} imageAvif={artbookAvif} imageAlt="Composition artist book">
    <SplitTextComp>
      I self-published a limited edition book for Composition. All 30 copies sold during the run of the series, and the book extended the exhibition's interest in journaling, documentation, and building an archive around the work.
    </SplitTextComp>
  </ImageTextSplit>
  <div style={{ width: '100vw', background: 'var(--surface-secondary)', padding: '4vh 0' }}>
      <BookFlip />
    </div>
</div>




          {/* Orbital */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={orbital} imageWebp={orbitalWebp} imageAvif={orbitalAvif} imageAlt="ORBITAL mixed-media work from Composition">
              <ArtHeader>ORBITAL</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* Erasure 1 */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={spraywash} imageWebp={spraywashWebp} imageAvif={spraywashAvif} imageAlt="Erasure 1">
              <ArtHeader>ERASURE I</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

{/*RENDER 2 FULL SCREEN */}
<CenteredRenderSection>
  <FeatureRender as={ResponsiveImage} src={rendertwo} webpSrc={rendertwoWebp} avifSrc={rendertwoAvif} alt="Composition render 2" />
</CenteredRenderSection>




          {/* Staircases */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={staircases} imageWebp={staircasesWebp} imageAvif={staircasesAvif} imageAlt="Staircases">
              <ArtHeader>STAIRCASES</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

                    {/*EPHEMERAL I & II SECTION */}
                    <ArtSectiontwins>
                    <Orbital as={ResponsiveImage} src={heartwhite} webpSrc={heartwhiteWebp} avifSrc={heartwhiteAvif} alt="Composition X detail white" />
                    <TwinTwo as={ResponsiveImage} src={heartblack} webpSrc={heartblackWebp} avifSrc={heartblackAvif} alt="Composition X detail black" />

                    <TwinsText>
                        <ArtHeader>COMPOSITION X</ArtHeader>
                        <ArtYear>2021</ArtYear>

                    </TwinsText>
                    </ArtSectiontwins>

                    {/*BIRDS FULL SCREEN */}
                  <ResponsiveImage
  src={birds}
  webpSrc={birdsWebp}
  avifSrc={birdsAvif}
  alt="Birds composition"
  style={{
    width: '100vw',         // full width
    height: '100vh',        // full viewport height
    objectFit: 'cover',     // crop/zoom without stretching
    objectPosition: 'center', // center both vertically and horizontally
    display: 'block'
  }}
/>
                    



          {/* CONEY ISLAND, NY */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageSrc={coney} imageWebp={coneyWebp} imageAvif={coneyAvif} imageAlt="Coney Island, NY">
              <ArtHeader>CONEY ISLAND, NY</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* BROOKLYN, NY I */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageSrc={brooklyn} imageWebp={brooklynWebp} imageAvif={brooklynAvif} imageAlt="Brooklyn, NY I">
              <ArtHeader>BROOKLYN, NY I</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* BROOKLYN, NY II */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageSrc={brooklyn2} imageWebp={brooklyn2Webp} imageAvif={brooklyn2Avif} imageAlt="Brooklyn, NY II">
              <ArtHeader>BROOKLYN, NY II</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

                               {/*Render4 FULL SCREEN */}
<CenteredRenderSection>
  <FeatureRender as={ResponsiveImage} src={render4} webpSrc={render4Webp} avifSrc={render4Avif} alt="Composition render 4" />
</CenteredRenderSection>


          {/* RUG I */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageSrc={rug} imageWebp={rugWebp} imageAvif={rugAvif} imageAlt="Rug I">
              <ArtHeader>RUG I</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* COMPOSITION III */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={mash1} imageWebp={mash1Webp} imageAvif={mash1Avif} imageAlt="Composition III">
              <ArtHeader>COMPOSITION III</ArtHeader>
              <ArtYear>2019</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* COMPOSITION IV */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={mash2} imageWebp={mash2Webp} imageAvif={mash2Avif} imageAlt="Composition IV">
              <ArtHeader>COMPOSITION IV</ArtHeader>
              <ArtYear>2019</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

                                {/*Render5 FULL SCREEN */}
<CenteredRenderSection>
  <FeatureRender as={ResponsiveImage} src={render5} webpSrc={render5Webp} avifSrc={render5Avif} alt="Composition render 5" />
</CenteredRenderSection>


          {/* COMPOSITION V */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={mash3} imageWebp={mash3Webp} imageAvif={mash3Avif} imageAlt="Composition V">
              <ArtHeader>COMPOSITION V</ArtHeader>
              <ArtYear>2019</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* COMPOSITION VI */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={mash4} imageWebp={mash4Webp} imageAvif={mash4Avif} imageAlt="Composition VI">
              <ArtHeader>COMPOSITION VI</ArtHeader>
              <ArtYear>2019</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* COMPOSITION VII */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={mash5} imageWebp={mash5Webp} imageAvif={mash5Avif} imageAlt="Composition VII">
              <ArtHeader>COMPOSITION VII</ArtHeader>
              <ArtYear>2020</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

                                  {/*MATTOS FULL SCREEN */}
<CenteredRenderSection>
  <FeatureRender as={ResponsiveImage} src={mattos} webpSrc={mattosWebp} avifSrc={mattosAvif} alt="Mattos collage" />
</CenteredRenderSection>


          {/* COMPOSITION I */}
          <NarrativeFeatureSection style={{ padding: '5vh 0' }}>
            <ImageTextSplit imageMode="framed" imageSrc={og} imageWebp={ogWebp} imageAvif={ogAvif} imageAlt="Composition I">
              <ArtHeader>COMPOSITION I</ArtHeader>
              <ArtYear>2018</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

          {/* GRAIN */}
          <NarrativeFeatureSection>
            <ImageTextSplit imageMode="framed" imageSrc={grain} imageWebp={grainWebp} imageAvif={grainAvif} imageAlt="GRAIN mixed-media work from Composition">
              <ArtHeader>GRAIN</ArtHeader>
              <ArtYear>2021</ArtYear>
            </ImageTextSplit>
          </NarrativeFeatureSection>

                            {/*EPHEMERAL I & II SECTION */}
<ArtSectiontwins>
  <Orbital as={ResponsiveImage} src={twin1} webpSrc={twin1Webp} avifSrc={twin1Avif} alt="Ephemeral I" />
  <TwinTwo as={ResponsiveImage} src={twin2} webpSrc={twin2Webp} avifSrc={twin2Avif} alt="Ephemeral II" />

  <TwinsText>
    <ArtHeader>EPHEMERAL I & II</ArtHeader>
    <ArtYear>2021</ArtYear>
  </TwinsText>
</ArtSectiontwins>

<FullHeightTextSection>
  <TextContainer>
    <TextContent>
      Over the course of Composition, I started to understand that the work was pointing me beyond transition itself and toward the more permanent fixtures that shape a life: the homes I have lived in, the people around me, and the hidden histories carried by those spaces. That realization became the foundation for my current body of work, which turns more fully toward quilting, embroidery, collage, painting, and bookmaking as forms of archive. What Composition began to explore through notebooks, photographs, and fragments of place has expanded into a longer investigation of family, memory, identity, and preservation.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>



    </div>
      
    )
}