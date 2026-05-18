import { useLayoutEffect } from 'react';
import ResponsiveImage from '../../components/Images/ResponsiveImage';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { TextSection } from '../Dwelling/Dwelling';
import {
  ArtDesc,
  ArtHeader,
  ArtSectionthreeog,
  ArtText,
  ArtTextthree,
  ArtTexttwo,
  ArtYear,
  GridRowThree,
  GridRowTwo,
  Orbital
} from '../COMPOSITION/Composition';

// Import images from the new 'assets' folder
import airbrush from '/src/assets/airbrush.jpg';
import sarge from '/src/assets/Sarge2.jpg';
import plastictoy from '/src/assets/PlasticToyCrop4.png';
import yellowlily from '/src/assets/YellowLily.jpg';
import yellowlilyWebp from '/src/assets/optimized/YellowLily.webp';
import yellowlilyAvif from '/src/assets/optimized/YellowLily.avif';
import lighthouse from '/src/assets/Lighthouse.jpeg';
import cacti1 from '/src/assets/E-png.png';
import cacti1Webp from '/src/assets/optimized/E-png.webp';
import cacti1Avif from '/src/assets/optimized/E-png.avif';
import splash from '/src/assets/splashpanel.png';
import yellowz from '/src/assets/Yellow-Z.png';
import selfie from '/src/assets/SelfPortrait.jpg';

export default function Painting() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RisoFlex>
        <RisoItem Width="55vw" img src={lighthouse} />
      </RisoFlex>
      <RisoFlex>
        <RisoItem Width="55vw" img src={selfie} />
      </RisoFlex>

      <RisoFlex style={{ backgroundColor: 'black' }}>
        <TextSection>
          I often look to capture moments throughout my life. Painting allows me to express myself through shapes, and color.
          <br />
          <br />
          I love exploring realism, or abstraction.
        </TextSection>
      </RisoFlex>

      {/* Section with 3 photos */}
      <ArtSectionthreeog>
        <Orbital src={plastictoy} />
        <ArtText>
          <ArtHeader>Plastic Toy</ArtHeader>
          <ArtYear>2022</ArtYear>
          <ArtDesc>Oil paint on paper.</ArtDesc>
        </ArtText>

        <GridRowTwo src={splash} />
        <ArtTexttwo>
          <ArtHeader>MILKBONES</ArtHeader>
          <ArtYear>2021</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree src={yellowz} />
        <ArtTextthree>
          <ArtHeader>YELLOW TWEED</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Second set of 3 pieces */}
      <ArtSectionthreeog>
        <Orbital as={ResponsiveImage} src={yellowlily} webpSrc={yellowlilyWebp} avifSrc={yellowlilyAvif} alt="Yellow Lily" />
        <ArtText>
          <ArtHeader>Yellow Lily</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Airbrush & acrylic on yupo paper.</ArtDesc>
        </ArtText>

        <GridRowTwo src={airbrush} />
        <ArtTexttwo>
          <ArtHeader>SHAPES</ArtHeader>
          <ArtYear>2020</ArtYear>
          <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>
        </ArtTexttwo>

        <GridRowThree as={ResponsiveImage} src={cacti1} webpSrc={cacti1Webp} avifSrc={cacti1Avif} alt="Orange Cacti" />
        <ArtTextthree>
          <ArtHeader>ORANGE CACTI</ArtHeader>
          <ArtYear>2015-21</ArtYear>
          <ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>
        </ArtTextthree>
      </ArtSectionthreeog>

      {/* Single piece */}
      <ArtSectionthreeog>
        <Orbital src={sarge} />
        <ArtText>
          <ArtHeader>Sarge</ArtHeader>
          <ArtYear>2016</ArtYear>
          <ArtDesc>Oil paint on wood panel.</ArtDesc>
        </ArtText>
      </ArtSectionthreeog>
    </div>
  );
}