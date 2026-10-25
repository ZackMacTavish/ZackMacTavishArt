const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/three-B6-WZcFl.js","assets/react-three-BKJczYnz.js","assets/three-BgQdTZ1w.js","assets/index-Dw-E1ofS.js","assets/index-YIlnlg-K.css","assets/website-logoresolutions-512px-CshVgYUQ.js","assets/seo-B4vub4F-.js","assets/ResponsiveImage-Cekydfre.js"])))=>i.map(i=>d[i]);
import{l as i,u,_ as v}from"./index-Dw-E1ofS.js";import{b as a,j as e}from"./react-three-BKJczYnz.js";import{f as b,a as y,b as k,i as z,c as T,d as j}from"./website-logoresolutions-512px-CshVgYUQ.js";import{c as S,S as A,v as $,N as s,I as P}from"./seo-B4vub4F-.js";import{R as d}from"./ResponsiveImage-Cekydfre.js";const M="/assets/Portrait-COvTiiE7.jpg",_="/assets/Portrait-640-BUzA_a-A.webp",I="/assets/Portrait-960-IzSMRird.webp",E="/assets/Portrait-1200-CV5Tr9uE.webp",Z="/assets/Portrait-640-DBs20y0B.avif",D="/assets/Portrait-960-HZ7cEyzy.avif",W="/assets/Portrait-1200-DSvysyks.avif",H="/assets/BlackTurtleneck-popart-01-Cfcb3PF3.jpg",C="/assets/BlackTurtleneck-popart-01-Daztt7du.webp",G="/assets/BlackTurtleneck-popart-01-BjHX9soD.avif",L="/assets/hangingquilts-CSgyMA7c.jpg",B="/assets/hangingquilts-BTrRmVGW.webp",q="/assets/hangingquilts-D4aaEPK3.avif",N=a.lazy(()=>v(()=>import("./three-B6-WZcFl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),c=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"];i.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${t=>t.Backgroundheight};
width: 100vw;
background-color: ${t=>t.theme.backgroundColor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: var(--space-section-spacious);
;}
`;const O=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${t=>t.Backgroundheight};
  width: 100vw;
  background-color: ${t=>t.Backgroundcolor};

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;     /* center children horizontally */
    justify-content: center; /* stack them centered */
    height: auto;
    padding: var(--space-section-compact) 0 var(--space-section-spacious);
    text-align: center;      /* also center any text */
  }
`,R=i.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  padding-right: 4vw;
  font-size: 2.5rem;
  width: ${t=>t.Widthsize};
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
`,F=i.div`
  width: auto;
  color: ${t=>t.theme.narrativeText};
  font-family: 'Space Grotesk', sans-serif;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.6;
  max-width: none;
  margin: 0;
  align-self: center;
`,l="min(86vw, 1120px)",m="clamp(1.5rem, 3.5vw, 3.5rem)",r="min(26vw, 28rem)",h="min(32vw, 34rem)",p="clamp(1.04rem, 1.18vw, 1.26rem)",Q=i.div`
  width: ${l};
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 7rem) 0 clamp(1.75rem, 2.6vw, 2.1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${m};

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 700px) {
    padding-bottom: 3.5vh;
  }
`,V=i(d)`
  display: block;
  flex-shrink: 0;
  width: ${r};
  height: ${r};
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;

  @media (max-width: 700px) {
    width: 44vw;
    height: 44vw;
  }
`,X=i(F)`
  width: ${h};
  font-size: ${p};

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 36rem;
    font-size: 1.18rem;
    text-align: center;
  }
`,K=i(P)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${l};
    max-width: none;
    gap: ${m};
  }

  && > div:first-child {
    flex: 0 0 ${r};
    width: ${r};
    max-width: none;
    margin-bottom: 0;
  }

  && picture {
    width: 100%;
  }

  && > div:last-child {
    flex: 0 0 auto;
    width: ${h};
    max-width: none;
    height: auto;
    font-size: ${p};
  }

  @media (max-width: 1000px) {
    && {
      flex-direction: column;
      gap: 1.5rem;
    }

    && > div:first-child {
      flex: 0 0 auto;
      width: 100%;
    }

    && > div:last-child {
      width: 100%;
      max-width: 36rem;
      margin: 0 auto;
      font-size: 1.18rem;
      text-align: center;
      align-items: center;
    }
  }
`,U=i.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* vertically center content on desktop */
  justify-content: flex-start; /* image on left for desktop */
  width: 100%;
  padding: var(--space-section) var(--space-page-gutter);
  gap: var(--space-grid-gap);
  background-color: ${t=>t.theme.backgroundColor};

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: var(--space-section-compact) 0;
    gap: var(--space-grid-gap);
    align-items: center; /* center block horizontally */
  }
`,Y=i.img`
  flex: 0 0 auto;
  max-width: 33%; /* desktop size */
  height: auto;
  object-fit: contain;

  @media (max-width: 1000px) {
    max-width: 100%; /* full width on mobile */
    width: 100%;
  }
`,J=i(R)`
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
`,ee=i.div`
  width: auto;
  color: ${t=>t.theme.pageText};
  font-family: 'Space Grotesk', sans-serif;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.6;
  max-width: none;
  margin: 0;
  align-self: center;
`,te=i.div`
  overflow-y: hidden;
  width: 100vw;
`,ie=i.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${t=>t.theme.backgroundColor};
  height: 100vh;
  width: 100vw;

  @media (max-width: 450px) {
    grid-template-rows: auto 1fr;
    height: auto;
  }
`,ae=i.div`
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
`,oe=i.p`
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
`,ne=i.a`
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
`,se=i.div`
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
`,ce=()=>{const[t,g]=a.useState(()=>typeof window>"u"?!1:window.innerWidth>900),[f,w]=a.useState(()=>typeof window>"u"||typeof window.matchMedia!="function"?!0:!window.matchMedia("(prefers-reduced-motion: reduce)").matches),x=u(),o=S(x);return a.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),a.useEffect(()=>{const n=()=>{g(window.innerWidth>900),w(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e.jsxs("div",{children:[e.jsx(A,{title:"About | Zack MacTavish Art & Design",description:"About Zack MacTavish, an artist and product designer based in Philadelphia, PA.",image:"https://zackmactavish.com/og/about.jpg",url:o,keywords:["about","artist","product designer","Philadelphia"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:c,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:b},{rel:"icon",type:"image/png",sizes:"32x32",href:y},{rel:"apple-touch-icon",sizes:"180x180",href:k},{rel:"icon",type:"image/png",sizes:"192x192",href:z},{rel:"icon",type:"image/png",sizes:"256x256",href:T},{rel:"icon",type:"image/png",sizes:"512x512",href:j},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],url:o,sameAs:c}}),e.jsx("h1",{style:$,children:"About Zack MacTavish"}),e.jsx(s,{$spacing:"spacious",style:{position:"relative"},children:e.jsxs(Q,{children:[e.jsx(V,{src:M,avifSrcSet:`${Z} 640w, ${D} 960w, ${W} 1200w`,webpSrcSet:`${_} 640w, ${I} 960w, ${E} 1200w`,sizes:"(max-width: 700px) 44vw, 21vw",alt:"Portrait of Zack MacTavish",width:960,height:960,loading:"eager",decoding:"sync",fetchPriority:"high",zoom:!1}),e.jsx(X,{children:"Zachary MacTavish is a multidisciplinary artist exploring memory, place, and personal history through painting, textile, collage, and print. Having moved over twenty times across six states, his practice is rooted in how displacement and movement shape identity over time. His first solo show, Composition, used the composition notebook as a metaphor for self-reflection across environments and personal growth."})]})}),e.jsx(s,{$preserveSpacing:!0,style:{backgroundColor:"var(--surface-secondary)"},children:e.jsx(K,{splitSize:"medium",imageMaxHeight:"500px",imageSrc:L,imageWebp:B,imageAvif:q,imageAlt:"Installed quilt from the Dwelling series",children:e.jsx(ee,{children:"His current work shifts focus from transition to permanence: the homes, families, and communities that endure across a life in motion. Working in quilting, embroidery, collage, painting, and an artist book, MacTavish archives personal and familial histories through fiber and stitch, treating the domestic and inherited as subjects worthy of preservation."})})}),e.jsx(te,{children:e.jsxs(ie,{children:[e.jsxs(ae,{children:[e.jsx(re,{children:"Thanks for stopping by"}),e.jsx(oe,{children:"I built this website. Check out my design portfolio."}),e.jsx(ne,{href:"https://mactavish.xyz",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),e.jsx(se,{children:t&&f?e.jsx(a.Suspense,{fallback:null,children:e.jsx(N,{})}):e.jsx(d,{style:{width:"100vw",height:"70vh",objectFit:"cover"},imgStyle:{width:"100vw",height:"70vh",objectFit:"cover"},src:H,webpSrc:C,avifSrc:G,alt:"Pop-art portrait",width:3706,height:3706,loading:"lazy",decoding:"async"})})]})})]})},ge=Object.freeze(Object.defineProperty({__proto__:null,NewSection:O,QuiltContainer:U,QuiltImage:Y,QuiltText:J,default:ce},Symbol.toStringTag,{value:"Module"}));export{ge as A,O as N,H as b};
