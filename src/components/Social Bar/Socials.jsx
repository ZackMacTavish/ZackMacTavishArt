import React from 'react';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';
import styled from 'styled-components';

const Socialbar = styled.div`
position: absolute;
bottom: 2vw;
display: flex;
width: 100vw;
justify-content: center;
align-items: center;

@media (max-width: 450px) { 
    max-width: 320px;
    justify-content: space-between;
    bottom: 10vh;
  }
`
const SocialImages = styled.img`
padding: 1vw;
/* Make icons larger across typical desktop widths while keeping a sensible cap */
width: clamp(52px, 4vw, 84px);
height: auto;
-webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

&:hover{
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
 }
`

export default function Socials() {
    return (
        <Socialbar>

            

            <a href="https://dribbble.com/Zmactavish" target='_blank' rel="noreferrer" >
            <SocialImages src={dribbble} />
            </a>

            
            <a href="https://www.instagram.com/zackmichaelmactavish" target='_blank' rel="noreferrer" >
            <SocialImages src={instagram} />
            </a>

           
            <a href="https://www.linkedin.com/in/zacharymactavish/" target='_blank' rel="noreferrer" >
            <SocialImages src={linkedin} />
            </a>

            <a href="  https://github.com/ZackMacTavish" target='_blank' rel="noreferrer" >
            <SocialImages src={github} />
            </a>

            <a href="https://medium.com/@zmactavish" target='_blank' rel="noreferrer" >
            <SocialImages src={medium} />
            </a>  


            



        </Socialbar>
            

    )
}
