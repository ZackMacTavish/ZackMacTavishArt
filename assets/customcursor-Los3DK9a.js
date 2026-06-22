import{b as n,j as l}from"./react-three-BKJczYnz.js";import{h as L,l as y}from"./index-DCfmw8xH.js";import"./three-BgQdTZ1w.js";const w=L`
  * { cursor: none !important; }
`,R=y.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) translate(-50%, -50%) scale(1);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`,j=()=>{const[m,g]=n.useState(!1),[v,E]=n.useState(!1),e=n.useRef(null),f=n.useRef(!1),u=n.useRef({x:0,y:0}),s=n.useRef({x:0,y:0}),d=n.useRef(!1),h=n.useRef(null);return n.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)"),o=window.matchMedia("(pointer: coarse)"),r=()=>{g(window.innerWidth<=900||o.matches),E(i.matches)};return r(),window.addEventListener("resize",r),i.addEventListener("change",r),o.addEventListener("change",r),()=>{window.removeEventListener("resize",r),i.removeEventListener("change",r),o.removeEventListener("change",r)}},[]),n.useEffect(()=>{if(m||v)return;const i=t=>{if(!e.current)return;const a=t.clientX,c=t.clientY;d.current?(u.current={x:a,y:c},e.current.classList.add("visible")):(s.current={x:a,y:c},u.current={x:a,y:c},e.current.classList.add("visible"),d.current=!0)},o=()=>{e.current&&e.current.classList.remove("visible")},r=()=>{document.visibilityState==="hidden"?o():d.current=!1},x=()=>{if(e.current&&d.current){s.current.x+=(u.current.x-s.current.x)*.82,s.current.y+=(u.current.y-s.current.y)*.82;const t=f.current?.3:1;e.current.style.transform=`translate3d(${s.current.x}px, ${s.current.y}px, 0) translate(-50%, -50%) scale(${t})`}h.current=requestAnimationFrame(x)},p=t=>{t.target.closest&&t.target.closest("a, svg, [data-cursor-hover]")&&e.current&&(f.current=!0,e.current.classList.add("hovered"))},b=t=>{if(!(t.target.closest&&t.target.closest("a, svg, [data-cursor-hover]")))return;const c=t.relatedTarget;c&&c.closest&&c.closest("a, svg, [data-cursor-hover]")||e.current&&(f.current=!1,e.current.classList.remove("hovered"))};return document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("mouseleave",o),document.addEventListener("visibilitychange",r),document.addEventListener("mouseover",p),document.addEventListener("mouseout",b),x(),()=>{h.current&&cancelAnimationFrame(h.current),document.removeEventListener("pointermove",i),document.removeEventListener("mouseleave",o),document.removeEventListener("visibilitychange",r),document.removeEventListener("mouseover",p),document.removeEventListener("mouseout",b)}},[m,v]),m||v?null:l.jsxs(l.Fragment,{children:[l.jsx(w,{}),l.jsx(R,{ref:e})]})};export{j as default};
