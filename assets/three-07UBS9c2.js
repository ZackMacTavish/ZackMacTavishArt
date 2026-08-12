import{j as e,C as l,b as n,u,c as x}from"./react-three-BKJczYnz.js";import{l as d}from"./index-01WR7sWp.js";import{b as h}from"./About-Br4qS03R.js";import{j as f,k as j}from"./three-BgQdTZ1w.js";import"./website-logoresolutions-1200x630-B7p4nYis.js";import"./ResponsiveImage-ER0KLJEM.js";const g=d.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`,b=()=>{const a=n.useRef();u(({clock:c})=>{if(a.current){const o=c.getElapsedTime(),t=a.current.geometry.attributes.position;for(let s=0;s<t.count;s++){const i=t.getX(s),p=t.getY(s),m=Math.sin(i*3+o)*.15+Math.cos(p*3+o)*.15;t.setZ(s,m)}t.needsUpdate=!0}});const[r]=x(j,[h]);return r.wrapS=r.wrapT=f,r.repeat.set(1,1),e.jsxs("mesh",{ref:a,children:[e.jsx("planeGeometry",{args:[3,3,64,64]}),e.jsx("meshBasicMaterial",{map:r})]})},M=()=>e.jsx(g,{children:e.jsxs(l,{camera:{fov:50,position:[0,0,4]},children:[" ",e.jsx(n.Suspense,{fallback:null,children:e.jsx(b,{})})]})});export{M as default};
