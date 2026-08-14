import{R as y,j as i}from"./react-three-BKJczYnz.js";import{l as m}from"./index-B5kQS6qh.js";import{Z as j}from"./seo-BwQEaD-Q.js";const R=m.picture`
  position: relative;

  &:hover > [data-image-zoom-cue],
  > img[data-image-zoom='true']:focus-visible + [data-image-zoom-cue] {
    opacity: 1;
    transform: translateY(0);
  }

  @media (hover: none), (pointer: coarse) {
    > [data-image-zoom-cue] {
      opacity: 0.86;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    > [data-image-zoom-cue] {
      transition: none;
    }
  }
`,k=m.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.42rem 0.62rem;
  border: 1px solid ${r=>r.theme.landingControlBorder};
  border-radius: 999px;
  background: ${r=>r.theme.landingControlBackground};
  color: ${r=>r.theme.landingControlText};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 160ms ease;
  pointer-events: none;
  backdrop-filter: blur(8px);
`,I=y.forwardRef(function({className:c,src:l,webpSrc:a,webpSrcSet:n,avifSrc:s,avifSrcSet:d,srcSet:u,sizes:t,alt:e,style:p,imgStyle:g,loading:h="lazy",decoding:f="async",fetchPriority:x,zoom:o=!0,...v},b){return i.jsxs(R,{className:c,style:p,children:[s||d?i.jsx("source",{srcSet:d||s,sizes:t,type:"image/avif"}):null,a||n?i.jsx("source",{srcSet:n||a,sizes:t,type:"image/webp"}):null,i.jsx("img",{ref:b,src:l,srcSet:u,sizes:t,alt:e,loading:h,decoding:f,fetchPriority:x,"data-image-zoom":o&&e?"true":void 0,"data-cursor-hover":o&&e?"true":void 0,role:o&&e?"button":void 0,tabIndex:o&&e?0:void 0,"aria-label":o&&e?`View ${e} larger`:void 0,style:{width:"100%",height:"100%",display:"block",objectFit:"inherit",objectPosition:"inherit",cursor:o&&e?"zoom-in":void 0,...g},...v}),o&&e?i.jsxs(k,{"data-image-zoom-cue":!0,"aria-hidden":"true",children:[i.jsx(j,{size:14,strokeWidth:1.8}),"View larger"]}):null]})});export{I as R};
