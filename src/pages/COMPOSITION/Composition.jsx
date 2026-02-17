import React, { useLayoutEffect } from 'react';
import { Seo, Grid60, ImageTextSplit } from '@zackmactavish/foundation'
import { useLocation } from 'react-router-dom'
import { canonicalFromLocation } from '../../utils/seo'
import styled from 'styled-components';

import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';
// Removed QuiltContainer/QuiltImage/QuiltText in favor of foundation ImageTextSplit

// Assets
import fullcover from '../../assets/Composition-BackCover-Pt.2-01.jpg';
import renderone from '../../assets/Render1.png';
import artbook from '../../assets/Artbook.png';
import orbital from '../../assets/Orbital.jpg';
import spraywash from '../../assets/Spraypaintwash.png';
import rendertwo from '../../assets/Render2.png';
import twin1 from '../../assets/Twin1.jpeg';
import twin2 from '../../assets/Twin2.jpeg';
import staircases from '../../assets/Staircases.jpg';
import heartwhite from '../../assets/heartwhite.jpeg';
import heartblack from '../../assets/heartblack.jpg';
import birds from '../../assets/Birds.jpg';
import brooklyn from '../../assets/Brooklyn.jpg';
import coney from '../../assets/Coney.jpg';
import brooklyn2 from '../../assets/Brooklyn2.jpg';
import render4 from '../../assets/Render4.png';
import rug from '../../assets/Rug.jpg';
import mash1 from '../../assets/Mash1.png';
import mash2 from '../../assets/Mash2.png';
import render5 from '../../assets/Render5.png';
import mash3 from '../../assets/Mash3.png';
import mash4 from '../../assets/Mash4.png';
import mash5 from '../../assets/Mash5.png';
import mattos from '../../assets/Mattos.png';
import og from '../../assets/No.3.png';
import grain from '../../assets/Grain.jpg';
import ogImage from '../../assets/og/website-logoresolutions-1200x630.png';
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
  width: 60vw;
  max-width: 90vw; /* prevents overflow on small screens */
  height: auto;

  @media (max-width: 850px) {
    width: 80vw; /* scale up a bit relative to smaller screens */
  }
`;

export const Orbital = styled.img`
  grid-row-start: 1;
  grid-column-start: 2;
  width: 100%;
  max-width: 600px;
  height: auto;
  justify-self: start;

  @media (max-width: 1290px){ max-width: 500px; }
  @media (max-width: 1115px){ max-width: 400px; }

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
  grid-column-start: 3;
  width: 100%;
  max-width: 600px;
  height: auto;
  justify-self: start;

  @media (max-width: 1290px){ max-width: 500px; }
  @media (max-width: 1115px){ max-width: 400px; }

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
  grid-column-start: 2 / span 2;
  justify-self: start;
  color: ${(props) => props.theme.fontColor};
  padding-top: 2rem;
  padding-left: 15vw; /* desktop padding so text isn’t stuck to the edge */
  line-height: 1.3;
  font-family: 'Space Grotesk', sans-serif;
  width: 40vw;

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
background-color:${props => props.theme.backgroundTwo};

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
  grid-template-columns: 10vw 1fr 1fr 10vw;
  grid-template-rows: auto auto;
  column-gap: 2vw;
  padding: 5vh 0;
  background-color: ${props => props.theme.backgroundTwo};

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
  background-color: ${props => props.theme.backgroundTwo};

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
background-color: ${props => props.theme.backgroundTwo};

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
background-color:${props => props.theme.backgroundTwo};

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
  color: ${(props) => props.theme.fontColor};

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

  @media(max-width: 1750px) { font-size: 1.8rem; }
  @media(max-width: 830px) { font-size: 1.4rem; }
`;

export const ArtYear = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  margin: 0 0 1rem 0;  // spacing below year

  @media(max-width: 1750px) { font-size: 1.5rem; }
  @media(max-width: 830px) { font-size: 1.2rem; }
`;

export const ArtDesc = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2; // tighter line-height for description
  margin: 0;

  @media(max-width: 1750px) { font-size: 1rem; }
  @media(max-width: 830px) { font-size: 0.9rem; }
`;

// Slightly larger, consistent text style for ImageTextSplit copy blocks
const SplitTextComp = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  color: #5d5d5d;
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  line-height: 1.6;

  @media (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;


export default function Composition() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const canonical = canonicalFromLocation(useLocation());

    return (<div>
<style>{`
  /* Match About page split spacing and width */
  .tight-split {
    gap: 12px !important;
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    .tight-split { width: 92vw; }
  }
`}</style>
<Seo 
  title="Composition  Art Series by Zack MacTavish" 
  description="Composition uses the familiar design of composition notebooks as a metaphor for self-reflection, with paintings, renders, and photographs." 
  image={ogImage}
  url={canonical}
  keywords={["composition", "painting", "render", "photography"]}
  authorName="Zack MacTavish"
  authorAlternateNames={["Zachary MacTavish"]}
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
      "alternateName": ["Zachary MacTavish"],
      "sameAs": ["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]
    }
  }}
/>

{/*COMPOSITION NOTEBOOK Part 2 Landing */}
  <LanderSection>
            <FullCover src={fullcover} />
        </LanderSection>

{/*RENDER 1 FULL SCREEN */}
<FullHeightTextSection>
  <TextContainer>
    <TextContent>
       Composition uses the familiar design of composition notebooks as a metaphor for self-reflection. 
       Over several years, I created 22 physical paintings as a way to process the experience of moving from New York to Portland. 
       What began as a visual journal of shifting environments became less about the cities themselves and more about the act of recording change. 
       While most of the work shown here is presented as digital representations of the paintings, the series marked a turning point—leading me toward my next body of work, which shifts focus from place to the houses and people that surround me.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>
        
<img
  src={renderone}
  style={{
    width: '100vw',       // fill the width
    height: '100vh',      // fill the viewport height
    objectFit: 'cover',   // crop/zoom in instead of stretching
    objectPosition: 'center', // crop from bottom; keep top visible
    display: 'block'
  }}
/>


{/*Art Book + Text */}
{/* ---------- Art Book + Text Section ---------- */}
{/* ---------- Art Book + Text Section ---------- */}
<div style={{ backgroundColor: '#f5f5f5', width: '100vw', padding: '8vh 0' }}>
  <ImageTextSplit className="tight-split" imageSrc={artbook} imageAlt="Art book">
    <SplitTextComp>
      Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46-page art book for the show.
    </SplitTextComp>
  </ImageTextSplit>
</div>



                    {/* Orbital + Erasure I */}

                    <ArtSectionThreetwo>
                    <Orbital src={orbital} />
                            <ArtText> 

                            <ArtHeader>ORBITAL</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic & spray paint on woodpanel.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={spraywash} />
                            <ArtTexttwo> 

                            <ArtHeader>ERASURE I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc >Acrylic, spray paint, & spray paint remover on woodpanel.</ArtDesc>

                            </ArtTexttwo>
                        
                    </ArtSectionThreetwo>

{/*RENDER 2 FULL SCREEN */}
                    <img
  src={rendertwo}
  style={{
    width: '100vw',       // full width
    height: '100vh',      // full viewport height
    objectFit: 'cover',   // crop/zoom
    objectPosition: 'bottom',// keep top visible, crop bottom
    display: 'block'
  }}
/>



{/*STAIRCASES SINGLE SECTION */}
                    <ArtSectionThreeone>
                    <Orbital src={staircases} />
                    <ArtText> 

                            <ArtHeader>STAIRCASES</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Graphite on heavy paper.</ArtDesc>

                            </ArtText>

                    </ArtSectionThreeone>

                    {/*EPHEMERAL I & II SECTION */}
                    <ArtSectiontwins>
                    <Orbital src={heartwhite} />
                    <TwinTwo src={heartblack} />

                    <TwinsText>
                        <ArtHeader>COMPOSITION X</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic on wood panel.</ArtDesc>

                    </TwinsText>
                    </ArtSectiontwins>

                    {/*BIRDS FULL SCREEN */}
                  <img
  src={birds}
  style={{
    width: '100vw',         // full width
    height: '100vh',        // full viewport height
    objectFit: 'cover',     // crop/zoom without stretching
    objectPosition: 'center', // center both vertically and horizontally
    display: 'block'
  }}
/>
                    


                    {/* 3 photos - Passing Grid-template-row props */}
                    <ArtSectionthreeog>
                    <Orbital src={coney} />
                            <ArtText> 

                            <ArtHeader>CONEY ISLAND, NY</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Film photograph with light leaks.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={brooklyn} />
                            <ArtTexttwo> 

                            <ArtHeader>BROOKLYN, NY I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Double exposure film photograph.</ArtDesc>

                            </ArtTexttwo>

                            <GridRowThree src={brooklyn2} />
                            <ArtTextthree> 

                            <ArtHeader>BROOKLYN, NY II</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Double exposure film photograph.</ArtDesc>

                            </ArtTextthree>

                            </ArtSectionthreeog>

                               {/*Render4 FULL SCREEN */}
                 <img
  src={render4}
  style={{
    width: '100vw',          // full width
    height: '100vh',         // full viewport height
    objectFit: 'cover',      // crop/zoom without stretching
    objectPosition: 'top',   // align to top
    display: 'block'
  }}
/>

                    {/* 3 Mashes - Passing Grid-template-row props*/}
                    <ArtSectionthreeog>
                    <Rug src={rug} />
                            <ArtText> 

                            <ArtHeader>RUG I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>100% Wool & Monks cloth.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={mash1} />
                            <ArtTexttwo> 

                            <ArtHeader>COMPOSITION III</ArtHeader> 
                            <ArtYear>2019</ArtYear> 
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc> 

                            </ArtTexttwo>  

                            <GridRowThree src={mash2} />  
                            <ArtTextthree> 

                            <ArtHeader>COMPOSITION IV</ArtHeader> 
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc> 

                            </ArtTextthree> 

                            </ArtSectionthreeog>

                                {/*Render5 FULL SCREEN */}
                   <img
  src={render5}
  style={{
    width: '100vw',          // full width
    height: '100vh',         // full viewport height
    objectFit: 'cover',      // crop/zoom without stretching
    objectPosition: 'top',   // align to top
    display: 'block'
  }}
/>

                     {/* 3 photos - Passing Grid-template-row props */}
                     <ArtSectionthreeog>
                    <Orbital src={mash3} />
                            <ArtText> 

                            <ArtHeader>COMPOSITION V</ArtHeader>
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={mash4} />
                            <ArtTexttwo> 

                            <ArtHeader>COMPOSITION VI</ArtHeader>
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtTexttwo>

                            <GridRowThree src={mash5} />
                            <ArtTextthree> 

                            <ArtHeader>COMPOSITION VII</ArtHeader>
                            <ArtYear>2020</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtTextthree>

                            </ArtSectionthreeog>

                                  {/*MATTOS FULL SCREEN */}
                                  <img
  src={mattos}
  style={{
    width: '100vw',          // full width
    height: '100vh',         // full viewport height
    objectFit: 'cover',      // crop/zoom without stretching
    objectPosition: 'center',// center the image
    display: 'block'
  }}
/>

                        {/* 3 Pieces - Passing Grid-template-row props */}
                     <ArtSectionthreeog>
                    <Orbital src={og} />
                            <ArtText> 

                            <ArtHeader>COMPOSITION I</ArtHeader>
                            <ArtYear>2018</ArtYear>
                            <ArtDesc>Digital collage (study for a screenprint).</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={grain} />
                            <ArtTexttwo> 

                            <ArtHeader>GRAIN</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>

                            </ArtTexttwo>

                        

                            </ArtSectionthreeog>

                            {/*EPHEMERAL I & II SECTION */}
<ArtSectiontwins>
  <Orbital src={twin1} />
  <TwinTwo src={twin2} />

  <TwinsText>
    <ArtHeader>EPHEMERAL I & II</ArtHeader>
    <ArtYear>2021</ArtYear>
    <ArtDesc>Acrylic & spray paint on wood panels.</ArtDesc>
  </TwinsText>
</ArtSectiontwins>



    </div>
      
    )
}