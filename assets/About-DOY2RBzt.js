const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/three-CMFwDfOM.js","assets/react-three-BKJczYnz.js","assets/three-BgQdTZ1w.js","assets/index-_Iv7ju2r.js","assets/index-YIlnlg-K.css","assets/website-logoresolutions-1200x630-BPEdvRQz.js","assets/seo-Da0DYCYc.js","assets/ResponsiveImage-ER0KLJEM.js"])))=>i.map(i=>d[i]);
import{l as i,u as b,_ as y,p as k}from"./index-_Iv7ju2r.js";import{b as a,j as t}from"./react-three-BKJczYnz.js";import{f as z,a as j,b as S,i as T,c as A,d as M,o as $}from"./website-logoresolutions-1200x630-BPEdvRQz.js";import{c as W,S as P,v as Z,N as d,I as c}from"./seo-Da0DYCYc.js";import{R as _}from"./ResponsiveImage-ER0KLJEM.js";const B="/assets/Me-BEhJ50qd.jpeg",l="/assets/Me-BZTy2liT.webp",p="/assets/Me-BSjk50SP.avif",E="/assets/Me-640-Bi9OgEeh.webp",H="/assets/Me-960-Bw29gW64.webp",G="/assets/Me-640-BmtY4yVB.avif",C="/assets/Me-960-D42P_fb-.avif",D="/assets/BlackTurtleneck-popart-01-Cfcb3PF3.jpg",I="/assets/BlackTurtleneck-popart-01-Daztt7du.webp",L="/assets/BlackTurtleneck-popart-01-BjHX9soD.avif",q="/assets/hangingquilts-CSgyMA7c.jpg",F="/assets/hangingquilts-BTrRmVGW.webp",N="/assets/hangingquilts-D4aaEPK3.avif",O=a.lazy(()=>y(()=>import("./three-CMFwDfOM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),m=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"];i.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${e=>e.Backgroundheight};
width: 100vw;
background-color: ${e=>e.theme.backgroundColor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: var(--space-section-spacious);
;}
`;const R=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${e=>e.Backgroundheight};
  width: 100vw;
  background-color: ${e=>e.Backgroundcolor};

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;     /* center children horizontally */
    justify-content: center; /* stack them centered */
    height: auto;
    padding: var(--space-section-compact) 0 var(--space-section-spacious);
    text-align: center;      /* also center any text */
  }
`,Y=i.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  padding-right: 4vw;
  font-size: 2.5rem;
  width: ${e=>e.Widthsize};
  color: white;

  @media (max-width: 1400px) {  
    font-size: 1.8rem;
    padding: var(--space-section-compact) 0;
    gap: var(--space-grid-gap);

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
`,Q=i.div`
  width: auto;
  color: ${e=>e.theme.narrativeText};
  font-family: 'Space Grotesk', sans-serif;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.6;
  max-width: none;
  margin: 0;
  align-self: center;
`,V=k`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,K=i.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${V} 1.5s infinite ease-in-out;
  opacity: ${e=>e.$visible?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
`,X=i.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`;i.img`
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
`;const J=i.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* vertically center content on desktop */
  justify-content: flex-start; /* image on left for desktop */
  width: 100%;
  padding: var(--space-section) var(--space-page-gutter);
  gap: var(--space-grid-gap);
  background-color: ${e=>e.theme.backgroundColor};

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: var(--space-section-compact) 0;
    gap: var(--space-grid-gap);
    align-items: center; /* center block horizontally */
  }
`,U=i.img`
  flex: 0 0 auto;
  max-width: 33%; /* desktop size */
  height: auto;
  object-fit: contain;

  @media (max-width: 1000px) {
    max-width: 100%; /* full width on mobile */
    width: 100%;
  }
`,ee=i(Y)`
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
`,te=i.div`
  width: auto;
  color: ${e=>e.theme.pageText};
  font-family: 'Space Grotesk', sans-serif;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.6;
  max-width: none;
  margin: 0;
  align-self: center;
`,ie=i.div`
  overflow-y: hidden;
  width: 100vw;
`,ae=i.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${e=>e.theme.backgroundColor};
  height: 100vh;
  width: 100vw;

  @media (max-width: 450px) {
    grid-template-rows: auto 1fr;
    height: auto;
  }
`,oe=i.div`
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
`,re=i.h1`
  font-size: clamp(16px, 5.5vw, 3.8rem);
  line-height: 1.2;
  color: white;
  font-family: var(--font-display);
  font-weight: 600;
  font-variation-settings: 'SOFT' 60, 'WONK' 1;
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
`,ne=i.p`
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
`,se=i.a`
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
`,de=i.div`
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
`,ce=()=>{const[e,h]=a.useState(!0),[o,g]=a.useState(!1),[f,w]=a.useState(()=>typeof window>"u"?!1:window.innerWidth>900),[x,v]=a.useState(()=>typeof window>"u"||typeof window.matchMedia!="function"?!0:!window.matchMedia("(prefers-reduced-motion: reduce)").matches),u=b(),r=W(u);return a.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),a.useEffect(()=>{const n=()=>{!o&&window.scrollY>50&&(h(!1),g(!0))};window.addEventListener("scroll",n);const s=()=>{w(window.innerWidth>900),v(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)};return window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",s)}},[o]),t.jsxs("div",{children:[t.jsx(P,{title:"About | Zack MacTavish Art & Design",description:"About Zack MacTavish, an artist and product designer based in Philadelphia, PA.",image:$,url:r,keywords:["about","artist","product designer","Philadelphia"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:m,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:z},{rel:"icon",type:"image/png",sizes:"32x32",href:j},{rel:"apple-touch-icon",sizes:"180x180",href:S},{rel:"icon",type:"image/png",sizes:"192x192",href:T},{rel:"icon",type:"image/png",sizes:"256x256",href:A},{rel:"icon",type:"image/png",sizes:"512x512",href:M},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],url:r,sameAs:m}}),t.jsx("h1",{style:Z,children:"About Zack MacTavish"}),t.jsxs(d,{$spacing:"spacious",style:{position:"relative"},children:[t.jsx(c,{splitSize:"medium",imageMaxHeight:"500px",imageSrc:B,imageWebp:l,imageWebpSet:`${E} 640w, ${H} 960w, ${l} 2200w`,imageAvif:p,imageAvifSet:`${G} 640w, ${C} 960w, ${p} 2200w`,imageSizes:"(max-width: 900px) 100vw, 40vw",imageAlt:"Portrait of Zack MacTavish",imageWidth:960,imageHeight:960,imageLoading:"eager",imageDecoding:"sync",imageFetchPriority:"high",children:t.jsx(Q,{children:"Zachary MacTavish is a multidisciplinary artist exploring memory, place, and personal history through painting, textile, collage, and print. Having moved over twenty times across six states, his practice is rooted in how displacement and movement shape identity over time. His first solo show, Composition, used the composition notebook as a metaphor for self-reflection across environments and personal growth."})}),!o&&t.jsx(K,{$visible:e,children:t.jsx(X,{})})]}),t.jsx(d,{$preserveSpacing:!0,style:{backgroundColor:"var(--surface-secondary)"},children:t.jsx(c,{splitSize:"medium",imageMaxHeight:"500px",imageSrc:q,imageWebp:F,imageAvif:N,imageAlt:"Installed quilt from the Dwelling series",children:t.jsx(te,{children:"His current work shifts focus from transition to permanence: the homes, families, and communities that endure across a life in motion. Working in quilting, embroidery, collage, painting, and an artist book, MacTavish archives personal and familial histories through fiber and stitch, treating the domestic and inherited as subjects worthy of preservation."})})}),t.jsx(ie,{children:t.jsxs(ae,{children:[t.jsxs(oe,{children:[t.jsx(re,{children:"Thanks for stopping by"}),t.jsx(ne,{children:"I built this website. Check out my design portfolio."}),t.jsx(se,{href:"https://mactavish.xyz",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),t.jsx(de,{children:f&&x?t.jsx(a.Suspense,{fallback:null,children:t.jsx(O,{})}):t.jsx(_,{style:{width:"100vw",height:"70vh",objectFit:"cover"},imgStyle:{width:"100vw",height:"70vh",objectFit:"cover"},src:D,webpSrc:I,avifSrc:L,alt:"Pop-art portrait",width:3706,height:3706,loading:"lazy",decoding:"async"})})]})})]})},fe=Object.freeze(Object.defineProperty({__proto__:null,NewSection:R,QuiltContainer:J,QuiltImage:U,QuiltText:ee,default:ce},Symbol.toStringTag,{value:"Module"}));export{fe as A,R as N,D as b};
