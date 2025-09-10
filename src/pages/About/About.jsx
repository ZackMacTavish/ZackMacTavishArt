import React, { useLayoutEffect, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Scene from '../../components/Three/three';
import me from '../../assets/Me.jpeg';
import imagereplace from '../../assets/BlackTurtleneck-popart-01.jpg';
import quilthanging from '../../assets/hangingquilts.jpg';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';


/* Writing the first main section in flex, but switching over to grids, with Theme Provider built in for dark-light modes*/
const NewSectionTheme = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${(props) => props.Backgroundheight};
width: 100vw;
background-color: ${(props) => props.theme.backgroundColor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: 10vh;
;}
`

/* Parent container */
export const NewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.Backgroundheight};
  width: 100vw;
  background-color: ${(props) => props.Backgroundcolor};

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;     /* center children horizontally */
    justify-content: center; /* stack them centered */
    height: auto;
    padding: 5vh 0 10vh 0;
    text-align: center;      /* also center any text */
  }
`;

const ParagraphTwo = styled.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  padding-right: 4vw;
  font-size: 2.5rem;
  width: ${(props) => props.Widthsize};
  color: white;

  @media (max-width: 1400px) {  
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {  
    width: 90%;
    padding-right: 0;
    margin-top: 1vh;      /* move text up slightly */
    padding-bottom: 3vh;  /* add space below */
    text-align: left;      /* left-align text */
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

/* ---------- Animations ---------- */
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1.5s infinite ease-in-out;
  opacity: ${(props) => (props.visible ? 0.8 : 0)};
  transition: opacity 0.6s ease;
  pointer-events: none;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`;

/* ---------- About picture ---------- */
const AboutPicture = styled.img`
  width: 40vw;
  padding-left: 2vw;
  padding-top: 6vh;

  @media (max-width: 1000px) {
    width: 100%;       /* full width on mobile */
    padding-left: 0;   /* remove left padding */
    padding-top: 5vh;  /* adjust top padding */
  }

  @media (max-width: 450px) {
    width: 100%;
    padding-top: 6vh;
  }
`;

export const QuiltContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* vertically center content on desktop */
  justify-content: flex-start; /* image on left for desktop */
  width: 100%;
  padding: 5vh 10vw; /* desktop padding */
  gap: 4vw;
  background-color: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0; /* remove horizontal padding on mobile */
    gap: 2vh;
    align-items: center; /* center block horizontally */
  }
`;

export const QuiltImage = styled.img`
  flex: 0 0 auto;
  max-width: 33%; /* desktop size */
  height: auto;
  object-fit: contain;

  @media (max-width: 1000px) {
    max-width: 100%; /* full width on mobile */
    width: 100%;
  }
`;

export const QuiltText = styled(ParagraphTwo)`
  flex: 1;
  max-width: 45%;
  padding-right: 8vw;
  font-size: 2.2rem;
  color: white;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1000px) {
    max-width: 90%;
    padding-right: 0;
    font-size: 1.4rem;
    text-align: left;
    margin-top: 1vh; /* move text up slightly */
    padding-bottom: 3vh; /* add padding below */
  }
`;
/* ---------- Scene Section Styling ---------- */
const ArtDiv = styled.div`
  overflow-y: hidden;
  width: 100vw;
`;


const GridThemes = styled.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
`;

const GridHeader = styled.h1`
  display: grid;
  grid-column-start: 3;
  padding-left: 5vw;
  grid-row-start: 2;
  grid-row-end: 4;
  font-size: clamp(22px, 10vw, 8rem);
  align-self: center;
  line-height: 14vh;
  color: white;
  z-index: 200;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);

  @media (max-width: 1000px) {
    line-height: 7vh;
    font-size: 4rem;
    padding-left: 3vw;
  }
  @media (max-width: 800px) {
    line-height: 5vh;
    font-size: 2.8rem;
    padding-left: 6vw;
  }
`;

const GridImage = styled.div`
  display: grid; 
  grid-column-start: 3;
  grid-row-start: 2;
`;


const About = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [hiddenForever, setHiddenForever] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 450);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hiddenForever && window.scrollY > 50) {
        setShowArrow(false);
        setHiddenForever(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const updateMedia = () => setDesktop(window.innerWidth > 450);
    window.addEventListener('resize', updateMedia);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMedia);
    };
  }, [hiddenForever]);

  return (
    <div>
      {/* ---------- Module 1: About Picture + First Paragraph ---------- */}
      <NewSectionTheme Backgroundheight="100vh" style={{ position: "relative" }}>
        <AboutPicture src={me} />
        <ParagraphTwo Widthsize='47vw'>
          Hi, I’m Zack MacTavish, an artist and product designer based in Philadelphia, PA.
          For the past three years, I’ve been with Microsoft’s Shopping Team, shaping user
          experiences for digital products.
        </ParagraphTwo>
        {!hiddenForever && (
          <ArrowWrapper visible={showArrow}>
            <Arrow />
          </ArrowWrapper>
        )}
      </NewSectionTheme>

      {/* ---------- Module 2: Second Paragraph ---------- */}
      <FullHeightTextSection style={{ backgroundColor: 'white' }}>
        <TextContainer>
          <TextContent style={{ color: '#5d5d5d' }}>
            Some of the agencies I have worked with include Publicis Groupe, Prarie & Forge, 
            and Varfaj Partners. I’ve also lived in New York City, working as a graphic designer 
            in Manhattan for Outsource Consultants, and studied design in Chicago. 
            I’ve collaborated with clients such as Microsoft, Walmart, Seagate Technology 
            on Disney-branded products, and Chip Ganassi Racing.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>

      {/* ---------- Module 3: Quilt + Third Paragraph ---------- */}
      <QuiltContainer>
        <QuiltImage src={quilthanging} alt="Quilt hanging" />
        <QuiltText Widthsize='45%'>
          Outside of work, I live with my partner Olivia, who is also an artist. 
          In my own creative time, I focus on making quilts that combine photography, 
          textile techniques, and mixed media, exploring the intersection of art, 
          design, and storytelling.
        </QuiltText>
      </QuiltContainer>

      {/* ---------- Module 4: Three.js Scene ---------- */}
      <ArtDiv>
        <GridThemes>
          <GridHeader>Thanks for <br/>stopping by</GridHeader>
          <GridImage>
            {isDesktop ? (
              <Scene />
            ) : (
              <img style={{ width: '90vw' }} src={imagereplace} alt="fallback" />
            )}
          </GridImage>
        </GridThemes>
      </ArtDiv>
    </div>
  );
};

export default About;