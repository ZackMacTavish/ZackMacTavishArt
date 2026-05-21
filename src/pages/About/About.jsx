import favicon16 from '../../assets/og/website-logoresolutions-16px.png';
import favicon32 from '../../assets/og/website-logoresolutions-32px.png';
import appleTouchIcon from '../../assets/og/website-logoresolutions-180px.png';
import icon192 from '../../assets/og/website-logoresolutions-192px.png';
import icon256 from '../../assets/og/favicon-clean-256.png';
import icon512 from '../../assets/og/website-logoresolutions-512px.png';
import React, { Suspense, lazy, useLayoutEffect, useEffect, useState } from 'react';
import { Seo, ImageTextSplit } from '../../foundation/adapter'
import styled, { keyframes } from 'styled-components';
import me from '../../assets/Me.jpeg';
import meWebp from '../../assets/optimized/Me.webp';
import meAvif from '../../assets/optimized/Me.avif';
import meWebp640 from '../../assets/optimized/Me-640.webp';
import meWebp960 from '../../assets/optimized/Me-960.webp';
import meAvif640 from '../../assets/optimized/Me-640.avif';
import meAvif960 from '../../assets/optimized/Me-960.avif';
import imagereplace from '../../assets/BlackTurtleneck-popart-01.jpg';
import imagereplaceWebp from '../../assets/optimized/BlackTurtleneck-popart-01.webp';
import imagereplaceAvif from '../../assets/optimized/BlackTurtleneck-popart-01.avif';
import quilthanging from '../../assets/hangingquilts.jpg';
import quilthangingWebp from '../../assets/optimized/hangingquilts.webp';
import quilthangingAvif from '../../assets/optimized/hangingquilts.avif';
// Removed agency/client section; no longer importing text layout components from Printmaking
import { useLocation } from 'react-router-dom';
import { canonicalFromLocation, visuallyHiddenHeadingStyle } from '../../utils/seo';
import ResponsiveImage from '../../components/Images/ResponsiveImage';

const Scene = lazy(() => import('../../components/Three/three'));

const AUTHOR_SAME_AS = [
  'https://dribbble.com/Zmactavish',
  'https://www.instagram.com/zackmichaelmactavish',
  'https://www.linkedin.com/in/zacharymactavish/',
  'https://github.com/ZackMacTavish',
  'https://medium.com/@zmactavish',
];
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

  @media (max-width: 450px) {
    grid-template-rows: auto 1fr;
    height: auto;
  }
`;

const GridHeaderContainer = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: center;
  justify-self: start;
  z-index: 200;
  gap: 0.3rem;
  width: fit-content;
  padding-left: 0;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(4px);

  @media (max-width: 1000px) {
    width: 85vw;
    padding: 1.2rem 1.5rem;
  }
  @media (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: -1;
    padding: 1.2rem 1rem 1.2rem 1.5rem;
    width: fit-content;
    margin-left: 2vw;
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (prefers-reduced-motion: reduce) {
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const GridHeader = styled.h1`
  font-size: clamp(16px, 5.5vw, 3.8rem);
  line-height: 1.2;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);
  margin: 0;

  @media (max-width: 1200px) {
    font-size: clamp(14px, 5vw, 3rem);
  }
  @media (max-width: 1000px) {
    font-size: clamp(14px, 4.5vw, 2.8rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(12px, 3.5vw, 2rem);
  }
`;

const GridSubtext = styled.p`
  font-size: clamp(14px, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.8);
  margin: 0;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: clamp(12px, 2.2vw, 1.2rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(14px, 3.5vw, 1.1rem);
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.95), 1px 1px 8px rgba(0, 0, 0, 0.9);
  }
`;

const GridCTA = styled.a`
  display: inline-block;
  width: fit-content;
  padding: 0.85rem 2rem;
  background-color: white;
  color: #1a1a1a;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(13px, 1.8vw, 1.1rem);
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 0.5rem;
  text-shadow: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1000px) {
    padding: 0.75rem 1.8rem;
    font-size: clamp(12px, 1.5vw, 1rem);
  }
  @media (max-width: 800px) {
    padding: 0.7rem 1.6rem;
    font-size: clamp(11px, 1.3vw, 0.9rem);
  }
`;

const GridImage = styled.div`
  display: grid; 
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  
  canvas {
    width: 100vw !important;
    margin-left: calc(-50vw + 50%) !important;
  }
`;


const About = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [hiddenForever, setHiddenForever] = useState(false);
  const [isDesktop, setDesktop] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth > 900;
  });
  const [allowMotion, setAllowMotion] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return true;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
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

    const updateMedia = () => {
      setDesktop(window.innerWidth > 900);
      setAllowMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
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
            width: 100vw;
            max-width: 100vw;
            padding: 0;
            margin: 0;
            gap: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .tight-split img {
            width: 100vw !important;
            max-width: 100vw !important;
            border-radius: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
      <Seo 
        title="About | Zack MacTavish Art & Design" 
        description="About Zack MacTavish, an artist and product designer based in Philadelphia, PA." 
  image={ogImage1200}
        url={canonical}
        keywords={["about", "artist", "product designer", "Philadelphia"]}
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
          "@type": "Person",
          "name": "Zack MacTavish",
          "alternateName": ["Zachary MacTavish", "Zack MacTavish Art", "Zachary MacTavish Art"],
          "url": canonical,
          "sameAs": AUTHOR_SAME_AS
        }}
      />
      <h1 style={visuallyHiddenHeadingStyle}>About Zack MacTavish</h1>
      {/* ---------- Module 1: About Picture + First Paragraph (ImageTextSplit) ---------- */}
      <div style={{ backgroundColor: 'white', width: '100vw', position: 'relative', padding: '8vh 0' }}>
        <ImageTextSplit className="tight-split" imageSrc={me} imageWebp={meWebp} imageWebpSet={`${meWebp640} 640w, ${meWebp960} 960w, ${meWebp} 2200w`} imageAvif={meAvif} imageAvifSet={`${meAvif640} 640w, ${meAvif960} 960w, ${meAvif} 2200w`} imageSizes="(max-width: 900px) 100vw, 40vw" imageAlt="Portrait of Zack MacTavish" imageWidth={960} imageHeight={960} imageLoading="eager" imageDecoding="sync" imageFetchPriority="high">
          <SplitText style={{ color: '#5d5d5d' }}>
       Zachary MacTavish is a multidisciplinary artist exploring memory, place, and personal 
       history through painting, textile, collage, and print. Having moved over twenty times across 
       six states, his practice is rooted in how displacement and movement shape identity over time. 
       His first solo show, Composition, used the composition notebook as a metaphor for 
       self-reflection across environments and personal growth.
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
      <div style={{ width: '100vw', padding: '0' }}>
        <ImageTextSplit className="tight-split" imageSrc={quilthanging} imageWebp={quilthangingWebp} imageAvif={quilthangingAvif} imageAlt="Installed quilt from the Dwelling series">
          <SplitQuiltText style={{ color: 'white' }}>
            His current work shifts focus from transition to permanence: the homes, families, 
            and communities that endure across a life in motion. Working in quilting, embroidery, 
            collage, painting, and an artist book, MacTavish archives personal and familial histories 
            through fiber and stitch, treating the domestic and inherited as subjects worthy of preservation.
          </SplitQuiltText>
        </ImageTextSplit>
      </div>

      {/* ---------- Module 4: Three.js Scene ---------- */}
      <ArtDiv>
        <GridThemes>
          <GridHeaderContainer>
            <GridHeader>Thanks for stopping by</GridHeader>
            <GridSubtext>I built this website. Check out my design portfolio.</GridSubtext>
            <GridCTA href="https://mactavish.xyz" target="_blank" rel="noopener noreferrer">View Portfolio</GridCTA>
          </GridHeaderContainer>
          <GridImage>
            {isDesktop && allowMotion ? (
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            ) : (
              <ResponsiveImage style={{ width: '100vw', height: '70vh', objectFit: 'cover' }} imgStyle={{ width: '100vw', height: '70vh', objectFit: 'cover' }} src={imagereplace} webpSrc={imagereplaceWebp} avifSrc={imagereplaceAvif} alt="Pop-art portrait" width={3706} height={3706} loading="lazy" decoding="async" />
            )}
          </GridImage>
        </GridThemes>
      </ArtDiv>
    </div>
  );
};

export default About;