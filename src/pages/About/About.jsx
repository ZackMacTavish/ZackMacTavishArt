import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Seo, ImageTextSplit } from '@zackmactavish/foundation'
import styled, { keyframes } from 'styled-components';
import Scene from '../../components/Three/three';
import me from '../../assets/Me.jpeg';
import imagereplace from '../../assets/BlackTurtleneck-popart-01.jpg';
import quilthanging from '../../assets/hangingquilts.jpg';
// Removed agency/client section; no longer importing text layout components from Printmaking
import { useLocation } from 'react-router-dom';
import { canonicalFromLocation } from '../../utils/seo';
// ===================== SEO/OG/FAVICON ASSETS =====================
import ogImage1200 from '../../assets/og/website-logoresolutions-1200x630.png';
// import faviconIco from '../../assets/favicon.ico';


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

// Smaller text variant for ImageTextSplit sections to avoid oversized copy
const SplitText = styled(ParagraphTwo)`
  width: auto;
  color: #5d5d5d;
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  line-height: 1.6;
  max-width: none;
  padding-right: 0;

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
  opacity: ${(props) => (props.$visible ? 0.8 : 0)};
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
  background-color: ${(props) => props.theme.backgroundColor};

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

// Smaller quilt text when used inside ImageTextSplit
const SplitQuiltText = styled(QuiltText)`
  max-width: none;
  width: auto;
  color: #5d5d5d;
  font-size: clamp(1.15rem, 1.5vw, 1.5rem);
  line-height: 1.6;
  padding-right: 0;

  @media (max-width: 1400px) {
    font-size: 1.35rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
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
  const location = useLocation();
  const canonical = canonicalFromLocation(location);

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
      <style>{`
        /* Reduce the default gap and slightly widen the ImageTextSplit container */
        .tight-split {
          gap: 12px !important;
          width: 80vw;
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .tight-split {
            width: 92vw;
          }
        }
      `}</style>
      <Seo 
        title="About  Zack MacTavish Art & Design" 
        description="About Zack MacTavish, an artist and product designer based in Philadelphia, PA." 
  image={ogImage1200}
        url={canonical}
        keywords={["about", "artist", "product designer", "Philadelphia"]}
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
          "@type": "Person",
          "name": "Zack MacTavish",
          "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
          "url": canonical,
          "sameAs": ["https://instagram.com/yourhandle", "https://github.com/ZackMacTavish"]
        }}
      />
      {/* ---------- Module 1: About Picture + First Paragraph (ImageTextSplit) ---------- */}
      <div style={{ backgroundColor: 'white', width: '100vw', position: 'relative', padding: '8vh 0' }}>
        <ImageTextSplit className="tight-split" imageSrc={me} imageAlt="Portrait of Zack MacTavish">
          <SplitText style={{ color: '#5d5d5d' }}>
            Hi, I’m Zack MacTavish, an artist and product designer based in Philadelphia, PA.
            For the past three years, I’ve been with Microsoft’s Shopping Team, shaping user
            experiences for digital products.
          </SplitText>
        </ImageTextSplit>
        {!hiddenForever && (
          <ArrowWrapper $visible={showArrow}>
            <Arrow />
          </ArrowWrapper>
        )}
      </div>
      {/* ---------- Module 2 removed per request ---------- */}

      {/* ---------- Module 3: Quilt + Third Paragraph (ImageTextSplit) ---------- */}
      <div style={{ width: '100vw', padding: '8vh 0' }}>
        <ImageTextSplit className="tight-split" imageSrc={quilthanging} imageAlt="Quilt hanging">
          <SplitQuiltText style={{ color: 'white' }}>
            Outside of work, I live with my partner Olivia, who is also an artist.
            In my own creative time, I focus on making quilts that combine photography,
            textile techniques, and mixed media, exploring the intersection of art,
            design, and storytelling.
          </SplitQuiltText>
        </ImageTextSplit>
      </div>

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