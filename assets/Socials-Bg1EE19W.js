import{j as a}from"./react-three-BKJczYnz.js";import{i as n,d as s,a as l,b as o,g as c,l as i}from"./index-_Iv7ju2r.js";import"./three-BgQdTZ1w.js";const d=i.div`
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
`,e=i.img`
padding: 1vw;
/* Make icons larger across typical desktop widths while keeping a sensible cap */
width: clamp(52px, 4vw, 84px);
height: auto;
filter: ${r=>r.theme.iconFilter};
-webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

&:hover{
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
 }
`,t=i.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: calc(100% - 0.25rem);
    left: 50%;
    transform: translate(-50%, 4px);
    background: rgba(10, 10, 10, 0.92);
    color: #f3f0e8;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.18s ease, transform 0.18s ease;
    z-index: 10;
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;function p(){return a.jsxs(d,{children:[a.jsx(t,{href:"https://www.instagram.com/zackmichaelmactavish",target:"_blank",rel:"noreferrer","data-label":"Instagram","aria-label":"Instagram",children:a.jsx(e,{src:n,alt:"Instagram",loading:"lazy",decoding:"async"})}),a.jsx(t,{href:"https://dribbble.com/Zmactavish",target:"_blank",rel:"noreferrer","data-label":"Dribbble","aria-label":"Dribbble",children:a.jsx(e,{src:s,alt:"Dribbble",loading:"lazy",decoding:"async"})}),a.jsx(t,{href:"https://medium.com/@zmactavish",target:"_blank",rel:"noreferrer","data-label":"Medium","aria-label":"Medium",children:a.jsx(e,{src:l,alt:"Medium",loading:"lazy",decoding:"async"})}),a.jsx(t,{href:"https://www.linkedin.com/in/zacharymactavish/",target:"_blank",rel:"noreferrer","data-label":"LinkedIn","aria-label":"LinkedIn",children:a.jsx(e,{src:o,alt:"LinkedIn",loading:"lazy",decoding:"async"})}),a.jsx(t,{href:"https://github.com/ZackMacTavish",target:"_blank",rel:"noreferrer","data-label":"GitHub","aria-label":"GitHub",children:a.jsx(e,{src:c,alt:"GitHub",loading:"lazy",decoding:"async"})})]})}export{p as default};
