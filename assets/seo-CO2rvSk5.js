import{b as T,R as p}from"./react-three-BKJczYnz.js";import{y as C,m as E,l as s}from"./index-C0yBYRFJ.js";function G({title:e,description:a,image:o,url:x,keywords:m}){return T.useEffect(()=>{const n=document;e&&(n.title=e);const i=(l,c,g)=>{let r=`meta[${l}='${c}']`,h=n.head.querySelector(r);h||(h=n.createElement("meta"),h.setAttribute(l,c),n.head.appendChild(h)),g&&h.setAttribute("content",g)},u=(l,c)=>{let g=`link[rel='${l}']`,r=n.head.querySelector(g);r||(r=n.createElement("link"),r.setAttribute("rel",l),n.head.appendChild(r)),c&&r.setAttribute("href",c)},d=x||(typeof window<"u"?window.location.href:void 0);a&&i("name","description",a),m&&i("name","keywords",Array.isArray(m)?m.join(", "):m),i("property","og:type","website"),e&&i("property","og:title",e),a&&i("property","og:description",a),o&&i("property","og:image",o),d&&i("property","og:url",d),i("name","twitter:card",o?"summary_large_image":"summary"),e&&i("name","twitter:title",e),a&&i("name","twitter:description",a),o&&i("name","twitter:image",o),d&&u("canonical",d)},[e,a,o,x,m]),null}const _=C||G,B=E||null,A=s.section`
	width: 100%;
	box-sizing: border-box;
	padding-block: ${e=>e.$spacing==="compact"?"var(--space-section-compact)":e.$spacing==="spacious"?"var(--space-section-spacious)":"var(--space-section)"};
	background-color: ${e=>e.theme.narrativeBackground};
	color: ${e=>e.theme.narrativeText};
	content-visibility: auto;
	contain-intrinsic-size: 1200px;

	h1,
	h2,
	h3,
	[data-narrative-text] {
		color: ${e=>e.theme.narrativeText};
	}
`,F=s.section`
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
`,R=s.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	padding-inline: var(--space-page-gutter);
`,q=s.p`
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
`,f={default:{},medium:{rootWidth:"86vw",rootMaxWidth:"1120px",rootWidthLg:"88vw",rootMaxWidthLg:"1080px",rootColumns:"minmax(0, 1.02fr) minmax(300px, 0.98fr)",rootColumnsLg:"minmax(0, 1fr) minmax(280px, 1fr)",rootGap:"clamp(20px, 2vw, 32px)",rootMobileGap:"1.15rem",mediaMaxWidth:"580px",mediaMaxWidthLg:"540px",mobilePictureWidth:"96vw",mobileImageMaxWidth:"96vw",textSize:"clamp(1.04rem, 1.18vw, 1.26rem)",textMobileSize:"1.18rem",textMaxWidth:"420px"},wide:{rootWidth:"90vw",rootMaxWidth:"1260px",rootWidthLg:"92vw",rootMaxWidthLg:"1180px",rootColumns:"minmax(0, 1.08fr) minmax(320px, 0.92fr)",rootColumnsLg:"minmax(0, 1.04fr) minmax(300px, 0.96fr)",rootGap:"clamp(24px, 2.2vw, 40px)",rootMobileGap:"1.25rem",mediaMaxWidth:"640px",mediaMaxWidthLg:"600px",mobilePictureWidth:"96vw",mobileImageMaxWidth:"96vw",textSize:"clamp(1.08rem, 1.25vw, 1.3rem)",textMobileSize:"1.2rem",textMaxWidth:"470px"},compact:{rootWidth:"82vw",rootMaxWidth:"1120px",rootWidthLg:"86vw",rootMaxWidthLg:"1040px",rootColumns:"minmax(0, 1.05fr) minmax(240px, 0.9fr)",rootColumnsLg:"minmax(0, 1fr) minmax(220px, 0.95fr)",rootGap:"clamp(18px, 1.8vw, 32px)",rootMobileGap:"1rem",mediaMaxWidth:"560px",mediaMaxWidthLg:"520px",mobilePictureWidth:"96vw",mobileImageMaxWidth:"96vw",textSize:"clamp(1.02rem, 1.2vw, 1.25rem)",textMobileSize:"1.2rem",textMaxWidth:"380px"}},k=s.div`
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
`,j=s.div`
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
			max-width: ${e=>e.$mobileImageMaxWidth||e.$mobilePictureWidth||"92vw"};
			max-height: none;
			min-height: 120px;
			border-radius: 16px;
		}
	}
`,P=s.div`
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
`;function N({imageSrc:e,imageAvif:a,imageAvifSet:o,imageWebp:x,imageWebpSet:m,imageAlt:n,imageWidth:i,imageHeight:u,imageSizes:d,imageLoading:l="lazy",imageDecoding:c="async",imageFetchPriority:g,children:r,width:h,imageMaxHeight:$,imageMode:w,imageBlendMode:v,textSize:b,textColor:M,splitSize:W="default",className:y,...S}){const t=f[W]||f.default,z=b||t.textSize,L=M||t.textColor;return p.createElement(k,{$width:h||t.rootWidth,$maxWidth:t.rootMaxWidth,$widthLg:t.rootWidthLg,$maxWidthLg:t.rootMaxWidthLg,$columns:t.rootColumns,$columnsLg:t.rootColumnsLg,$gap:t.rootGap,$mobileGap:t.rootMobileGap,className:y,...S},p.createElement(j,{$imageMaxHeight:$||t.imageMaxHeight,$imageMode:w,$imageBlendMode:v,$mediaMaxWidth:t.mediaMaxWidth,$mediaMaxWidthLg:t.mediaMaxWidthLg,$mobilePictureWidth:t.mobilePictureWidth,$mobileImageMaxWidth:t.mobileImageMaxWidth},p.createElement("picture",null,a||o?p.createElement("source",{srcSet:o||a,sizes:d,type:"image/avif"}):null,x||m?p.createElement("source",{srcSet:m||x,sizes:d,type:"image/webp"}):null,p.createElement("img",{src:e,alt:n,width:i,height:u,sizes:d,loading:l,decoding:c,fetchPriority:g}))),p.createElement(P,{$textSize:z,$textColor:L,$textMaxWidth:t.textMaxWidth,$mobileTextSize:t.textMobileSize,$mobileTextWidth:t.mobileTextWidth},r))}function O(e){const a=typeof window<"u"?window.location.origin:"https://zackmactavish.com",o=e&&e.pathname?e.pathname:"/",x=e&&e.search?e.search:"";return`${a}${o}${x}`}const U={position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0};export{F,B as G,N as I,A as N,_ as S,q as T,R as a,O as c,U as v};
