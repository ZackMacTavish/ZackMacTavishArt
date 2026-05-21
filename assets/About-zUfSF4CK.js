const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/three-Dqbyw0Um.js","assets/react-three-BKJczYnz.js","assets/three-BgQdTZ1w.js","assets/index-B7-ssJ06.js","assets/index-zEtQuIES.css","assets/website-logoresolutions-1200x630-ObnWe7A1.js","assets/ResponsiveImage-ER0KLJEM.js"])))=>i.map(i=>d[i]);
import{l as t,u as y,_ as k,p as z}from"./index-B7-ssJ06.js";import{b as a,j as e}from"./react-three-BKJczYnz.js";import{e as j,S as A,f as S,a as T,b as M,i as $,c as P,d as W,o as Z,v as _,I as d}from"./website-logoresolutions-1200x630-ObnWe7A1.js";import{R as B}from"./ResponsiveImage-ER0KLJEM.js";const E="/assets/Me-BEhJ50qd.jpeg",c="/assets/Me-BZTy2liT.webp",m="/assets/Me-BSjk50SP.avif",C="/assets/Me-640-Bi9OgEeh.webp",D="/assets/Me-960-Bw29gW64.webp",G="/assets/Me-640-BmtY4yVB.avif",H="/assets/Me-960-D42P_fb-.avif",I="/assets/BlackTurtleneck-popart-01-Cfcb3PF3.jpg",L="/assets/BlackTurtleneck-popart-01-Daztt7du.webp",q="/assets/BlackTurtleneck-popart-01-BjHX9soD.avif",F="/assets/hangingquilts-CSgyMA7c.jpg",N="/assets/hangingquilts-BTrRmVGW.webp",R="/assets/hangingquilts-D4aaEPK3.avif",O=a.lazy(()=>k(()=>import("./three-Dqbyw0Um.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),l=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"];t.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${i=>i.Backgroundheight};
width: 100vw;
background-color: ${i=>i.theme.backgroundColor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: 10vh;
;}
`;const Y=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${i=>i.Backgroundheight};
  width: 100vw;
  background-color: ${i=>i.Backgroundcolor};

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;     /* center children horizontally */
    justify-content: center; /* stack them centered */
    height: auto;
    padding: 5vh 0 10vh 0;
    text-align: center;      /* also center any text */
  }
`,h=t.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  padding-right: 4vw;
  font-size: 2.5rem;
  width: ${i=>i.Widthsize};
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
`,Q=t(h)`
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
`,V=z`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`,X=t.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${V} 1.5s infinite ease-in-out;
  opacity: ${i=>i.$visible?.8:0};
  transition: opacity 0.6s ease;
  pointer-events: none;
`,J=t.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`;t.img`
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
`;const K=t.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* vertically center content on desktop */
  justify-content: flex-start; /* image on left for desktop */
  width: 100%;
  padding: 5vh 10vw; /* desktop padding */
  gap: 4vw;
  background-color: ${i=>i.theme.backgroundColor};

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0; /* remove horizontal padding on mobile */
    gap: 2vh;
    align-items: center; /* center block horizontally */
  }
`,U=t.img`
  flex: 0 0 auto;
  max-width: 33%; /* desktop size */
  height: auto;
  object-fit: contain;

  @media (max-width: 1000px) {
    max-width: 100%; /* full width on mobile */
    width: 100%;
  }
`,p=t(h)`
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
`,ee=t(p)`
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
`,te=t.div`
  overflow-y: hidden;
  width: 100vw;
`,ie=t.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${i=>i.theme.backgroundColor};
  height: 100vh;
  width: 100vw;

  @media (max-width: 450px) {
    grid-template-rows: auto 1fr;
    height: auto;
  }
`,ae=t.div`
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
`,oe=t.h1`
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
`,ne=t.p`
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
`,re=t.a`
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
`,se=t.div`
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
`,de=()=>{const[i,g]=a.useState(!0),[o,w]=a.useState(!1),[f,x]=a.useState(()=>typeof window>"u"?!1:window.innerWidth>900),[v,u]=a.useState(()=>typeof window>"u"||typeof window.matchMedia!="function"?!0:!window.matchMedia("(prefers-reduced-motion: reduce)").matches),b=y(),n=j(b);return a.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),a.useEffect(()=>{const r=()=>{!o&&window.scrollY>50&&(g(!1),w(!0))};window.addEventListener("scroll",r);const s=()=>{x(window.innerWidth>900),u(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)};return window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",s)}},[o]),e.jsxs("div",{children:[e.jsx("style",{children:`
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
      `}),e.jsx(A,{title:"About | Zack MacTavish Art & Design",description:"About Zack MacTavish, an artist and product designer based in Philadelphia, PA.",image:Z,url:n,keywords:["about","artist","product designer","Philadelphia"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:l,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:S},{rel:"icon",type:"image/png",sizes:"32x32",href:T},{rel:"apple-touch-icon",sizes:"180x180",href:M},{rel:"icon",type:"image/png",sizes:"192x192",href:$},{rel:"icon",type:"image/png",sizes:"256x256",href:P},{rel:"icon",type:"image/png",sizes:"512x512",href:W},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],url:n,sameAs:l}}),e.jsx("h1",{style:_,children:"About Zack MacTavish"}),e.jsxs("div",{style:{backgroundColor:"white",width:"100vw",position:"relative",padding:"8vh 0"},children:[e.jsx(d,{className:"tight-split",imageSrc:E,imageWebp:c,imageWebpSet:`${C} 640w, ${D} 960w, ${c} 2200w`,imageAvif:m,imageAvifSet:`${G} 640w, ${H} 960w, ${m} 2200w`,imageSizes:"(max-width: 900px) 100vw, 40vw",imageAlt:"Portrait of Zack MacTavish",imageWidth:960,imageHeight:960,imageLoading:"eager",imageDecoding:"sync",imageFetchPriority:"high",children:e.jsx(Q,{style:{color:"#5d5d5d"},children:"Zachary MacTavish is a multidisciplinary artist exploring memory, place, and personal history through painting, textile, collage, and print. Having moved over twenty times across six states, his practice is rooted in how displacement and movement shape identity over time. His first solo show, Composition, used the composition notebook as a metaphor for self-reflection across environments and personal growth."})}),!o&&e.jsx(X,{$visible:i,children:e.jsx(J,{})})]}),e.jsx("div",{style:{width:"100vw",padding:"0"},children:e.jsx(d,{className:"tight-split",imageSrc:F,imageWebp:N,imageAvif:R,imageAlt:"Installed quilt from the Dwelling series",children:e.jsx(ee,{style:{color:"white"},children:"His current work shifts focus from transition to permanence: the homes, families, and communities that endure across a life in motion. Working in quilting, embroidery, collage, painting, and an artist book, MacTavish archives personal and familial histories through fiber and stitch, treating the domestic and inherited as subjects worthy of preservation."})})}),e.jsx(te,{children:e.jsxs(ie,{children:[e.jsxs(ae,{children:[e.jsx(oe,{children:"Thanks for stopping by"}),e.jsx(ne,{children:"I built this website. Check out my design portfolio."}),e.jsx(re,{href:"https://mactavish.xyz",target:"_blank",rel:"noopener noreferrer",children:"View Portfolio"})]}),e.jsx(se,{children:f&&v?e.jsx(a.Suspense,{fallback:null,children:e.jsx(O,{})}):e.jsx(B,{style:{width:"100vw",height:"70vh",objectFit:"cover"},imgStyle:{width:"100vw",height:"70vh",objectFit:"cover"},src:I,webpSrc:L,avifSrc:q,alt:"Pop-art portrait",width:3706,height:3706,loading:"lazy",decoding:"async"})})]})})]})},pe=Object.freeze(Object.defineProperty({__proto__:null,NewSection:Y,QuiltContainer:K,QuiltImage:U,QuiltText:p,default:de},Symbol.toStringTag,{value:"Module"}));export{pe as A,Y as N,I as b};
