import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { RisoItem } from '../3d/MergedGraffiti';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
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
import housepainting from '../../assets/House—Pre-Ipad.jpg';
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

  img {
    flex: 1 1 28%;
    max-width: 28%;
    min-width: 200px;
    height: auto;
    max-height: 70vh;       /* slightly smaller vertical size */
    object-fit: contain;    /* preserves aspect ratio */
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

  img {
    flex: 1 1 45%;
    max-width: 45%;
    min-width: 180px;
    height: auto;
    max-height: 70vh;     /* slightly smaller vertical size */
    object-fit: contain;
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
  }
`;

export default function Dwelling() {

  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  return (
      <div>
          {/* Top housemash images horizontally */}
         <TwoImageGrid>
  <img src={housemash} alt="House Mash 1" />
  <img src={housemash2} alt="House Mash 2" />
</TwoImageGrid>

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

          {/* Open House Front/Back Section */}
          <ArtSectionthreeog Backgroundcolor='white'>
              {/* Front image */}
              <Orbital src={housefront} />
              <ArtText> 
                  <ArtHeader>Open House Front</ArtHeader>
                  <ArtYear>2021-22</ArtYear>
                  <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
              </ArtText>

              {/* Back image */}
              <GridRowTwo src={houseback} />
              <ArtTexttwo> 
                  <ArtHeader>Open House Back</ArtHeader>
                  <ArtYear>2021-22</ArtYear>
                  <ArtDesc>Acrylic, sewing, and embroidery on canvas.</ArtDesc>
              </ArtTexttwo>
          </ArtSectionthreeog>

            {/* Tuzio's */}
          <ArtSectionthreeog Backgroundcolor='white'>
              {/* Front image */}
              <Orbital src={greatgrandparents} />
              <ArtText> 
                  <ArtHeader>David, Janet, Herman, and Nana Tuzio</ArtHeader>
                  <ArtYear>July, 1960</ArtYear>
                  <ArtDesc>My uncle, grandmother, and great-great-grandparents who immigrated from Italy.</ArtDesc>
              </ArtText>

              {/* Back image */}
              <GridRowTwo src={grandparents} />
              <ArtTexttwo> 
                  <ArtHeader>David, Janet, Dominic, and Marie Bruzzi</ArtHeader>
               
                  <ArtDesc>My uncle, grandmother, and great-grandparents.</ArtDesc>
              </ArtTexttwo>
          </ArtSectionthreeog>

    

          {/* DWELLING MASH I Section (formerly DWELLING MASH II) */}

<TwoImageGrid>
  <img src={house1} alt="House 1" style={{ transform: "scale(0.9)" }} />
  <img src={house2} alt="House 2" style={{ transform: "scale(0.9)" }} />
</TwoImageGrid>

<ArtSectionthreeog>
  <Orbital src={quilt1} />
  <ArtText>
    <ArtHeader>Quilt 1</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My apartment, Logan Square, Chicago</ArtDesc>
  </ArtText>

  <GridRowTwo src={quilt2} />
  <ArtTexttwo>
    <ArtHeader>Quilt 2</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>Dorms, Downtown, Chicago</ArtDesc>
  </ArtTexttwo>

  <GridRowThree src={quilt3} />
  <ArtTextthree>
    <ArtHeader>Quilt 3</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's house</ArtDesc>
  </ArtTextthree>
</ArtSectionthreeog>


<ArtSectionthreeog>
  <Orbital src={quilt4} />
  <ArtText>
    <ArtHeader>Quilt 4</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>East Providence, Rhode Island</ArtDesc>
  </ArtText>

  <GridRowTwo src={quilt5} />
  <ArtTexttwo>
    <ArtHeader>Quilt 5</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>House with Richie</ArtDesc>
  </ArtTexttwo>

  <GridRowThree src={quilt6} />
  <ArtTextthree>
    <ArtHeader>Quilt 6</ArtHeader>
    <ArtYear>2025</ArtYear>
    <ArtDesc>My grandma's first house</ArtDesc>
  </ArtTextthree>
</ArtSectionthreeog>


<ArtSectionthreeog>
  <Orbital src={quilt7} />
  <ArtText>
    <ArtHeader>Quilt 7</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Armistice Blvd., Pawtucket, RI</ArtDesc>
  </ArtText>

  <GridRowTwo src={quilt8} />
  <ArtTexttwo>
    <ArtHeader>Quilt 8</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Bruzzi house, Pawtucket, RI</ArtDesc>
  </ArtTexttwo>

  <GridRowThree src={quilt9} />
  <ArtTextthree>
    <ArtHeader>Quilt 9</ArtHeader>
    <ArtYear>2024</ArtYear>
    <ArtDesc>Olympia Ave, Pawtucket, RI</ArtDesc>
  </ArtTextthree>
</ArtSectionthreeog>

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
  {/* First image with text stays horizontal */}
<div style={{ width: "100%" }}>
  <style>
    {`
      .manistee-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        flex-wrap: wrap;
      }
      .manistee-image {
        max-width: 30vw;
        height: auto;
      }
      .manistee-text {
        max-width: 30vw;
        color: #5d5d5d;
        text-align: left;
      }

      @media (max-width: 1000px) {
        .manistee-image {
          max-width: 80vw; /* larger on vertical stack */
        }
        .manistee-text {
          max-width: 90vw;
          margin: 0 auto;
          text-align: left;
        }
      }
    `}
  </style>

  <div className="manistee-container">
    <img className="manistee-image" src={manisteeblock} alt="Manistee Street" />
    <div className="manistee-text">
      <ArtHeader>Manistee Street</ArtHeader>
      <ArtYear>2022</ArtYear>
      <ArtDesc>Reduction relief woodblock print.</ArtDesc>
    </div>
  </div>
</div>

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
 <ThreeImageGrid>
      <img src={house3} alt="House 3" />
      <img src={house7} alt="House 7" />
      <img src={house4} alt="House 4" />
    </ThreeImageGrid>
      </div>
  )
}