import{b as t,j as l}from"./react-three-BKJczYnz.js";import{r as w,h as R,l as C}from"./index-01WR7sWp.js";import"./three-BgQdTZ1w.js";var M=w();const k=R`
  * { cursor: none !important; }
`,j=C.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
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
`,A=()=>{const[m,b]=t.useState(!1),[v,E]=t.useState(!1),[L,y]=t.useState(()=>document.fullscreenElement||document.body),e=t.useRef(null),f=t.useRef(!1),i=t.useRef({x:0,y:0}),o=t.useRef({x:0,y:0}),d=t.useRef(!1),h=t.useRef(null);return t.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)"),c=window.matchMedia("(pointer: coarse)"),n=()=>{b(window.innerWidth<=900||c.matches),E(s.matches)};return n(),window.addEventListener("resize",n),s.addEventListener("change",n),c.addEventListener("change",n),()=>{window.removeEventListener("resize",n),s.removeEventListener("change",n),c.removeEventListener("change",n)}},[]),t.useEffect(()=>{const s=()=>{y(document.fullscreenElement||document.body)};return document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s)},[]),t.useEffect(()=>{if(m||v)return;const s=r=>{if(!e.current)return;const u=r.clientX,a=r.clientY;d.current?(i.current={x:u,y:a},e.current.classList.add("visible")):(o.current={x:u,y:a},i.current={x:u,y:a},e.current.classList.add("visible"),d.current=!0)},c=()=>{e.current&&e.current.classList.remove("visible")},n=()=>{document.visibilityState==="hidden"?c():d.current=!1},g=()=>{if(e.current&&d.current){o.current.x+=(i.current.x-o.current.x)*.82,o.current.y+=(i.current.y-o.current.y)*.82;const r=f.current?.3:1;e.current.style.transform=`translate3d(${o.current.x}px, ${o.current.y}px, 0) translate(-50%, -50%) scale(${r})`}h.current=requestAnimationFrame(g)},p=r=>{r.target.closest&&r.target.closest("a, svg, [data-cursor-hover]")&&e.current&&(f.current=!0,e.current.classList.add("hovered"))},x=r=>{if(!(r.target.closest&&r.target.closest("a, svg, [data-cursor-hover]")))return;const a=r.relatedTarget;a&&a.closest&&a.closest("a, svg, [data-cursor-hover]")||e.current&&(f.current=!1,e.current.classList.remove("hovered"))};return document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("mouseleave",c),document.addEventListener("visibilitychange",n),document.addEventListener("mouseover",p),document.addEventListener("mouseout",x),g(),()=>{h.current&&cancelAnimationFrame(h.current),document.removeEventListener("pointermove",s),document.removeEventListener("mouseleave",c),document.removeEventListener("visibilitychange",n),document.removeEventListener("mouseover",p),document.removeEventListener("mouseout",x)}},[m,v]),m||v?null:l.jsxs(l.Fragment,{children:[l.jsx(k,{}),M.createPortal(l.jsx(j,{ref:e}),L)]})};export{A as default};
