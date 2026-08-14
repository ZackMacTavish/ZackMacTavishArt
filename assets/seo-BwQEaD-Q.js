import{b as k,R as d}from"./react-three-BKJczYnz.js";import{c as C,y as T,m as E,l as x}from"./index-B5kQS6qh.js";const G=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],I=C("zoom-in",G);function j({title:e,description:o,image:n,url:l,keywords:m}){return k.useEffect(()=>{const i=document;e&&(i.title=e);const a=(s,p,g)=>{let r=`meta[${s}='${p}']`,h=i.head.querySelector(r);h||(h=i.createElement("meta"),h.setAttribute(s,p),i.head.appendChild(h)),g&&h.setAttribute("content",g)},u=(s,p)=>{let g=`link[rel='${s}']`,r=i.head.querySelector(g);r||(r=i.createElement("link"),r.setAttribute("rel",s),i.head.appendChild(r)),p&&r.setAttribute("href",p)},c=l||(typeof window<"u"?window.location.href:void 0);o&&a("name","description",o),m&&a("name","keywords",Array.isArray(m)?m.join(", "):m),a("property","og:type","website"),e&&a("property","og:title",e),o&&a("property","og:description",o),n&&a("property","og:image",n),c&&a("property","og:url",c),a("name","twitter:card",n?"summary_large_image":"summary"),e&&a("name","twitter:title",e),o&&a("name","twitter:description",o),n&&a("name","twitter:image",n),c&&u("canonical",c)},[e,o,n,l,m]),null}const Z=T||j,N=E||null,Y=x.section.attrs(e=>({"data-narrative-feature":"true","data-preserve-spacing":e.$preserveSpacing?"true":void 0}))`
	width: 100%;
	box-sizing: border-box;
	padding-block: ${e=>e.$spacing==="compact"?"var(--space-section-compact)":e.$spacing==="spacious"?"var(--space-section-spacious)":"var(--space-section)"};
	background-color: ${e=>e.theme.narrativeBackground};
	color: ${e=>e.theme.narrativeText};
	content-visibility: auto;
	contain-intrinsic-size: 1200px;

	&:has(+ [data-narrative-feature]:not([data-preserve-spacing])) {
		padding-bottom: 0;
	}

	[data-narrative-feature] + &:not([data-preserve-spacing]) {
		padding-top: 0;
	}

	h1,
	h2,
	h3,
	[data-narrative-text] {
		color: ${e=>e.theme.narrativeText};
	}
`,q=x.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	padding: var(--space-section) var(--space-page-gutter);
	box-sizing: border-box;
	text-align: left;
	background-color: var(--surface-secondary);

	@media (max-height: 700px) {
		min-height: 70vh;
		padding-block: var(--space-section-compact);
	}

	@media (max-height: 500px) {
		min-height: 60vh;
	}

	@media (max-width: 850px) {
		flex-direction: column;
		justify-content: center;
		min-height: 80vh;
		padding: var(--space-section-compact) var(--space-page-gutter);
		content-visibility: auto;
		contain-intrinsic-size: 900px;
	}
`,O=x.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	padding-inline: var(--space-page-gutter);
`,U=x.p`
	margin: 0;
	max-width: 50ch;
	font-family: 'Space Grotesk', sans-serif;
	font-size: clamp(1.2rem, 1.5vw, 1.42rem);
	font-weight: 500;
	line-height: 1.65;
	text-align: left;
	color: ${e=>e.theme.narrativeText};

	@media (max-width: 850px) {
		max-width: 75vw;
		font-size: 1.4rem;
	}

	a.inline-link {
		display: inline-flex;
		align-items: center;
		gap: 0.3em;
		color: ${e=>e.theme.narrativeText};
		text-decoration: underline;

		svg {
			width: 0.8em;
			height: 0.8em;
			vertical-align: middle;
		}
	}
`,f={default:{},medium:{rootWidth:"86vw",rootMaxWidth:"1120px",rootWidthLg:"88vw",rootMaxWidthLg:"1080px",rootColumns:"minmax(0, 1.02fr) minmax(300px, 0.98fr)",rootColumnsLg:"minmax(0, 1fr) minmax(280px, 1fr)",rootGap:"clamp(20px, 2vw, 32px)",rootMobileGap:"1.15rem",mediaMaxWidth:"580px",mediaMaxWidthLg:"540px",mobilePictureWidth:"96vw",mobileImageMaxWidth:"96vw",textSize:"clamp(1.04rem, 1.18vw, 1.26rem)",textMobileSize:"1.18rem",textMaxWidth:"420px"},wide:{rootWidth:"90vw",rootMaxWidth:"1260px",rootWidthLg:"92vw",rootMaxWidthLg:"1180px",rootColumns:"minmax(0, 1.08fr) minmax(320px, 0.92fr)",rootColumnsLg:"minmax(0, 1.04fr) minmax(300px, 0.96fr)",rootGap:"clamp(24px, 2.2vw, 40px)",rootMobileGap:"1.25rem",mediaMaxWidth:"640px",mediaMaxWidthLg:"600px",mobilePictureWidth:"96vw",mobileImageMaxWidth:"96vw",textSize:"clamp(1.08rem, 1.25vw, 1.3rem)",textMobileSize:"1.2rem",textMaxWidth:"470px"},compact:{rootWidth:"82vw",rootMaxWidth:"1120px",rootWidthLg:"86vw",rootMaxWidthLg:"1040px",rootColumns:"minmax(0, 1.05fr) minmax(240px, 0.9fr)",rootColumnsLg:"minmax(0, 1fr) minmax(220px, 0.95fr)",rootGap:"clamp(18px, 1.8vw, 32px)",rootMobileGap:"1rem",mediaMaxWidth:"560px",mediaMaxWidthLg:"520px",mobilePictureWidth:"96vw",mobileImageMaxWidth:"96vw",textSize:"clamp(1.02rem, 1.2vw, 1.25rem)",textMobileSize:"1.2rem",textMaxWidth:"380px"}},P=x.div`
	width: min(${e=>e.$width||"88vw"}, ${e=>e.$maxWidth||"1180px"});
	margin: 0 auto;
	display: grid;
	grid-template-columns: ${e=>e.$columns||"minmax(0, 1.2fr) minmax(280px, 0.78fr)"};
	gap: ${e=>e.$gap||"clamp(36px, 3vw, 56px)"};
	align-items: center;
	padding: clamp(1.75rem, 2.6vw, 2.1rem) 0;

	@media (max-width: 1320px) {
		width: min(${e=>e.$widthLg||e.$width||"90vw"}, ${e=>e.$maxWidthLg||"1080px"});
		grid-template-columns: ${e=>e.$columnsLg||e.$columns||"minmax(0, 1.1fr) minmax(260px, 0.82fr)"};
	}

	@media (max-width: 900px) {
		width: 100vw;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		gap: ${e=>e.$mobileGap||"1.5rem"};
		align-items: center;
		content-visibility: auto;
		contain-intrinsic-size: 900px;
	}
`,_=x.div`
	width: 100%;
	max-width: ${e=>e.$mediaMaxWidth||"680px"};
	min-width: 0;
	min-height: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-self: end;

	picture {
		display: block;
		width: 100%;
		position: relative;
		isolation: ${e=>e.$imageBlendMode?"isolate":"auto"};
		border-radius: 24px;
		background: ${e=>e.$imageMode==="framed"?"#ececec":"transparent"};
		padding: ${e=>e.$imageMode==="framed"?"clamp(24px, 3vw, 40px) clamp(18px, 2vw, 26px)":"0"};
		box-sizing: border-box;
		overflow: hidden;
	}

	img {
		width: ${e=>e.$imageMode==="framed"?"auto":"100%"};
		max-width: 100%;
		max-height: ${e=>e.$imageMaxHeight||"600px"};
		min-width: 0;
		height: auto;
		min-height: 200px;
		object-fit: ${e=>e.$imageMode==="framed"?"contain":"cover"};
		display: block;
		position: relative;
		z-index: ${e=>e.$imageBlendMode?"1":"auto"};
		margin: 0 auto;
		cursor: zoom-in;
		border-radius: 24px;
		box-shadow: ${e=>e.$imageMode==="framed"?"none":"0 2px 12px 0 rgba(0,0,0,0.06)"};
		mix-blend-mode: ${e=>e.$imageBlendMode||"normal"};
		overflow: hidden;
	}

	@media (max-width: 1200px) {
		max-width: ${e=>e.$mediaMaxWidthLg||e.$mediaMaxWidth||"600px"};

		img {
			min-height: 140px;
		}
	}

	@media (max-width: 900px) {
		width: 100vw;
		max-width: none;
		justify-content: center;
		justify-self: stretch;
		margin-bottom: 1.2rem;

		picture {
			width: ${e=>e.$mobilePictureWidth||"92vw"};
			margin: 0 auto;
			padding: ${e=>e.$imageMode==="framed"?"18px 14px":"0"};
		}

		img {
			width: ${e=>e.$imageMode==="framed"?"auto":"100%"};
			max-width: ${e=>e.$imageMode==="framed"?"100%":e.$mobileImageMaxWidth||e.$mobilePictureWidth||"92vw"};
			max-height: none;
			min-height: 120px;
			border-radius: 16px;
		}
	}
`,B=x.span`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	z-index: 3;
	display: inline-flex;
	align-items: center;
	gap: 0.38rem;
	padding: 0.42rem 0.62rem;
	border: 1px solid ${e=>e.theme.landingControlBorder};
	border-radius: 999px;
	background: ${e=>e.theme.landingControlBackground};
	color: ${e=>e.theme.landingControlText};
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

	picture:hover &,
	picture > img[data-image-zoom='true']:focus-visible + & {
		opacity: 1;
		transform: translateY(0);
	}

	@media (hover: none), (pointer: coarse) {
		opacity: 0.86;
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
`,H=x.div`
	font-family: 'Space Grotesk', sans-serif;
	font-size: ${e=>e.$textSize||"1.4rem"};
	color: ${e=>e.$textColor||"#fff"};
	line-height: 1.4;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	gap: 0.25em;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
	min-width: 0;
	height: 100%;
	max-width: ${e=>e.$textMaxWidth||"420px"};
	justify-self: start;

	@media (max-width: 900px) {
		font-size: ${e=>e.$mobileTextSize||"1.7rem"};
		width: ${e=>e.$mobileTextWidth||"92vw"};
		max-width: none;
		margin: 0 auto;
		min-height: 40px;
	}
`;function V({imageSrc:e,imageAvif:o,imageAvifSet:n,imageWebp:l,imageWebpSet:m,imageAlt:i,imageWidth:a,imageHeight:u,imageSizes:c,imageLoading:s="lazy",imageDecoding:p="async",imageFetchPriority:g,children:r,width:h,imageMaxHeight:$,imageMode:w,imageBlendMode:v,textSize:b,textColor:y,splitSize:M="default",className:W,...z}){const t=f[M]||f.default,S=b||t.textSize,L=y||t.textColor;return d.createElement(P,{$width:h||t.rootWidth,$maxWidth:t.rootMaxWidth,$widthLg:t.rootWidthLg,$maxWidthLg:t.rootMaxWidthLg,$columns:t.rootColumns,$columnsLg:t.rootColumnsLg,$gap:t.rootGap,$mobileGap:t.rootMobileGap,className:W,...z},d.createElement(_,{$imageMaxHeight:$||t.imageMaxHeight,$imageMode:w,$imageBlendMode:v,$mediaMaxWidth:t.mediaMaxWidth,$mediaMaxWidthLg:t.mediaMaxWidthLg,$mobilePictureWidth:t.mobilePictureWidth,$mobileImageMaxWidth:t.mobileImageMaxWidth},d.createElement("picture",null,o||n?d.createElement("source",{srcSet:n||o,sizes:c,type:"image/avif"}):null,l||m?d.createElement("source",{srcSet:m||l,sizes:c,type:"image/webp"}):null,d.createElement("img",{src:e,alt:i,"data-image-zoom":i?"true":void 0,"data-cursor-hover":i?"true":void 0,role:i?"button":void 0,tabIndex:i?0:void 0,"aria-label":i?`View ${i} larger`:void 0,width:a,height:u,sizes:c,loading:s,decoding:p,fetchPriority:g}),d.createElement(B,{"data-image-zoom-cue":!0,"aria-hidden":"true"},d.createElement(I,{size:14,strokeWidth:1.8}),"View larger"))),d.createElement(H,{$textSize:S,$textColor:L,$textMaxWidth:t.textMaxWidth,$mobileTextSize:t.textMobileSize,$mobileTextWidth:t.mobileTextWidth},r))}function D(e){const o=typeof window<"u"?window.location.origin:"https://zackmactavish.com",n=e&&e.pathname?e.pathname:"/",l=e&&e.search?e.search:"";return`${o}${n}${l}`}const J={position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0};export{q as F,N as G,V as I,Y as N,Z as S,U as T,I as Z,O as a,D as c,J as v};
