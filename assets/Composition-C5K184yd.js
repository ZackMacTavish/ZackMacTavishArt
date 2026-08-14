import{R as H,b as g,j as n}from"./react-three-BKJczYnz.js";import{f as st,a as nt,c as at,d as Q,b as ot,i as rt}from"./website-logoresolutions-512px-CshVgYUQ.js";import{c as Pt,S as St,v as Ct,F as ht,a as lt,T as dt,I as k,N as E}from"./seo-BwQEaD-Q.js";import{R as B}from"./ResponsiveImage-BKQq1MaY.js";import{c as N,l as c,u as kt}from"./index-B5kQS6qh.js";import{i as Tt,a as It,b as At}from"./Mash5-Uf3Rc1w8.js";const Rt=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],jt=N("chevron-first",Rt);const Mt=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Dt=N("chevron-left",Mt);const Bt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Wt=N("chevron-right",Bt);const Et=[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]],Lt=N("expand",Et);const $t=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],Ot=N("shrink",$t);var _={exports:{}},zt=_.exports,ct;function Ft(){return ct||(ct=1,(function(o,T){(function(S,f){f(T)})(zt,(function(S){class f{constructor(t,e){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=e,this.nowDrawingDensity=this.createdDensity,this.render=t}setDensity(t){this.createdDensity=t,this.nowDrawingDensity=t}setDrawingDensity(t){this.nowDrawingDensity=t}setPosition(t){this.state.position=t}setAngle(t){this.state.angle=t}setArea(t){this.state.area=t}setHardDrawingAngle(t){this.state.hardDrawingAngle=t}setHardAngle(t){this.state.hardAngle=t,this.state.hardDrawingAngle=t}setOrientation(t){this.orientation=t}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class b extends f{constructor(t,e,i){super(t,i),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=e}draw(t){const e=this.render.getContext(),i=this.render.convertToGlobal(this.state.position),s=this.render.getRect().pageWidth,a=this.render.getRect().height;e.save(),e.translate(i.x,i.y),e.beginPath();for(let r of this.state.area)r!==null&&(r=this.render.convertToGlobal(r),e.lineTo(r.x-i.x,r.y-i.y));e.rotate(this.state.angle),e.clip(),this.isLoad?e.drawImage(this.image,0,0,s,a):this.drawLoader(e,{x:0,y:0},s,a),e.restore()}simpleDraw(t){const e=this.render.getRect(),i=this.render.getContext(),s=e.pageWidth,a=e.height,r=t===1?e.left+e.pageWidth:e.left,l=e.top;this.isLoad?i.drawImage(this.image,r,l,s,a):this.drawLoader(i,{x:r,y:l},s,a)}drawLoader(t,e,i,s){t.beginPath(),t.strokeStyle="rgb(200, 200, 200)",t.fillStyle="rgb(255, 255, 255)",t.lineWidth=1,t.rect(e.x+1,e.y+1,i-1,s-1),t.stroke(),t.fill();const a={x:e.x+i/2,y:e.y+s/2};t.beginPath(),t.lineWidth=10,t.arc(a.x,a.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),t.stroke(),t.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class A{constructor(t,e){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=e,this.app=t,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let e=0;e<this.pages.length;e++)this.portraitSpread.push([e]);let t=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([t]),t++);for(let e=t;e<this.pages.length;e+=2)e<this.pages.length-1?this.landscapeSpread.push([e,e+1]):(this.landscapeSpread.push([e]),this.pages[e].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(t){const e=this.getSpread();for(let i=0;i<e.length;i++)if(t===e[i][0]||t===e[i][1])return i;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(t){if(t>=0&&t<this.pages.length)return this.pages[t];throw new Error("Invalid page number")}nextBy(t){const e=this.pages.indexOf(t);return e<this.pages.length-1?this.pages[e+1]:null}prevBy(t){const e=this.pages.indexOf(t);return e>0?this.pages[e-1]:null}getFlippingPage(t){const e=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[e].newTemporaryCopy():this.pages[e-1];{const i=t===0?this.getSpread()[e+1]:this.getSpread()[e-1];return i.length===1||t===0?this.pages[i[0]]:this.pages[i[1]]}}getBottomPage(t){const e=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[e+1]:this.pages[e-1];{const i=t===0?this.getSpread()[e+1]:this.getSpread()[e-1];return i.length===1?this.pages[i[0]]:t===0?this.pages[i[1]]:this.pages[i[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(t=null){if(t===null&&(t=this.currentPageIndex),t<0||t>=this.pages.length)return;const e=this.getSpreadIndexByPage(t);e!==null&&(this.currentSpreadIndex=e,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(t){if(!(t>=0&&t<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=t}showSpread(){const t=this.getSpread()[this.currentSpreadIndex];t.length===2?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(this.pages[t[1]])):this.render.getOrientation()==="landscape"&&t[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[t[0]])),this.currentPageIndex=t[0],this.app.updatePageIndex(this.currentPageIndex)}}class R extends A{constructor(t,e,i){super(t,e),this.imagesHref=i}load(){for(const t of this.imagesHref){const e=new b(this.render,t,"soft");e.load(),this.pages.push(e)}this.createSpread()}}class m{static GetDistanceBetweenTwoPoint(t,e){return t===null||e===null?1/0:Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}static GetSegmentLength(t){return m.GetDistanceBetweenTwoPoint(t[0],t[1])}static GetAngleBetweenTwoLine(t,e){const i=t[0].y-t[1].y,s=e[0].y-e[1].y,a=t[1].x-t[0].x,r=e[1].x-e[0].x;return Math.acos((i*s+a*r)/(Math.sqrt(i*i+a*a)*Math.sqrt(s*s+r*r)))}static PointInRect(t,e){return e===null?null:e.x>=t.left&&e.x<=t.width+t.left&&e.y>=t.top&&e.y<=t.top+t.height?e:null}static GetRotatedPoint(t,e,i){return{x:t.x*Math.cos(i)+t.y*Math.sin(i)+e.x,y:t.y*Math.cos(i)-t.x*Math.sin(i)+e.y}}static LimitPointToCircle(t,e,i){if(m.GetDistanceBetweenTwoPoint(t,i)<=e)return i;const s=t.x,a=t.y,r=i.x,l=i.y;let d=Math.sqrt(Math.pow(e,2)*Math.pow(s-r,2)/(Math.pow(s-r,2)+Math.pow(a-l,2)))+s;i.x<0&&(d*=-1);let u=(d-s)*(a-l)/(s-r)+a;return s-r+a===0&&(u=e),{x:d,y:u}}static GetIntersectBetweenTwoSegment(t,e,i){return m.PointInRect(t,m.GetIntersectBeetwenTwoLine(e,i))}static GetIntersectBeetwenTwoLine(t,e){const i=t[0].y-t[1].y,s=e[0].y-e[1].y,a=t[1].x-t[0].x,r=e[1].x-e[0].x,l=t[0].x*t[1].y-t[1].x*t[0].y,d=e[0].x*e[1].y-e[1].x*e[0].y,u=i*d-s*l,x=a*d-r*l,j=-(l*r-d*a)/(i*r-s*a),L=-(i*d-s*l)/(i*r-s*a);if(isFinite(j)&&isFinite(L))return{x:j,y:L};if(Math.abs(u-x)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(t,e){const i=Math.abs(t.x-e.x),s=Math.abs(t.y-e.y),a=Math.max(i,s),r=[t];function l(d,u,x,j,L){return u>d?d+L*(x/j):u<d?d-L*(x/j):d}for(let d=1;d<=a;d+=1)r.push({x:l(t.x,e.x,i,a,d),y:l(t.y,e.y,s,a,d)});return r}}class I extends f{constructor(t,e,i){super(t,i),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=e,this.element.classList.add("stf__item"),this.element.classList.add("--"+i)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new I(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(t){const e=t||this.nowDrawingDensity,i=this.render.convertToGlobal(this.state.position),s=this.render.getRect().pageWidth,a=this.render.getRect().height;this.element.classList.remove("--simple");const r=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${s}px;
            height: ${a}px;
        `;e==="hard"?this.drawHard(r):this.drawSoft(i,r)}drawHard(t=""){const e=this.render.getRect().left+this.render.getRect().width/2,i=this.state.hardDrawingAngle,s=t+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${i}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${e}px, 0, 0) rotateY(${i}deg);`);this.element.style.cssText=s}drawSoft(t,e=""){let i="polygon( ";for(const a of this.state.area)if(a!==null){let r=this.render.getDirection()===1?{x:-a.x+this.state.position.x,y:a.y-this.state.position.y}:{x:a.x-this.state.position.x,y:a.y-this.state.position.y};r=m.GetRotatedPoint(r,{x:0,y:0},this.state.angle),i+=r.x+"px "+r.y+"px, "}i=i.slice(0,-2),i+=")";const s=e+`transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${t.x}px, ${t.y}px);`:`transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=s}simpleDraw(t){const e=this.render.getRect(),i=e.pageWidth,s=e.height,a=t===1?e.left+e.pageWidth:e.left,r=e.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${s}px; 
            left: ${a}px; 
            top: ${r}px; 
            width: ${i}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(t){super.setOrientation(t),this.element.classList.remove("--left","--right"),this.element.classList.add(t===1?"--right":"--left")}setDrawingDensity(t){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+t),super.setDrawingDensity(t)}}class P extends A{constructor(t,e,i,s){super(t,e),this.element=i,this.pagesElement=s}load(){for(const t of this.pagesElement){const e=new I(this.render,t,t.dataset.density==="hard"?"hard":"soft");e.load(),this.pages.push(e)}this.createSpread()}}class D{constructor(t,e,i,s){this.direction=t,this.corner=e,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseFloat(i),this.pageHeight=parseFloat(s)}calc(t){try{return this.position=this.calcAngleAndPosition(t),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const t=[];let e=!1;return t.push(this.rect.topLeft),t.push(this.topIntersectPoint),this.sideIntersectPoint===null?e=!0:(t.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(e=!1)),t.push(this.bottomIntersectPoint),(e||this.corner==="bottom")&&t.push(this.rect.bottomLeft),t}getBottomClipArea(){const t=[];return t.push(this.topIntersectPoint),this.corner==="top"?t.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&t.push({x:this.pageWidth,y:0}),t.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?m.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&t.push(this.sideIntersectPoint):this.corner==="top"&&t.push({x:this.pageWidth,y:this.pageHeight}),t.push(this.bottomIntersectPoint),t.push(this.topIntersectPoint),t}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const t=m.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?t:Math.PI-t}calcAngleAndPosition(t){let e=t;if(this.updateAngleAndGeometry(e),e=this.corner==="top"?this.checkPositionAtCenterLine(e,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(e,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(e.x-this.pageWidth)<1&&Math.abs(e.y)<1)throw new Error("Point is too small");return e}updateAngleAndGeometry(t){this.angle=this.calculateAngle(t),this.rect=this.getPageRect(t)}calculateAngle(t){const e=this.pageWidth-t.x+1,i=this.corner==="bottom"?this.pageHeight-t.y:t.y;let s=2*Math.acos(e/Math.sqrt(i*i+e*e));i<0&&(s=-s);const a=Math.PI-s;if(!isFinite(s)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(s=-s),s}getPageRect(t){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],t):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],t)}getRectFromBasePoint(t,e){return{topLeft:this.getRotatedPoint(t[0],e),topRight:this.getRotatedPoint(t[1],e),bottomLeft:this.getRotatedPoint(t[2],e),bottomRight:this.getRotatedPoint(t[3],e)}}getRotatedPoint(t,e){return{x:t.x*Math.cos(this.angle)+t.y*Math.sin(this.angle)+e.x,y:t.y*Math.cos(this.angle)-t.x*Math.sin(this.angle)+e.y}}calculateIntersectPoint(t){const e={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[t,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[t,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[t,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(t,e,i){let s=t;const a=m.LimitPointToCircle(e,this.pageWidth,s);s!==a&&(s=a,this.updateAngleAndGeometry(s));const r=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let l=this.rect.bottomRight,d=this.rect.topLeft;if(this.corner==="bottom"&&(l=this.rect.topRight,d=this.rect.bottomLeft),l.x<=0){const u=m.LimitPointToCircle(i,r,d);u!==s&&(s=u,this.updateAngleAndGeometry(s))}return s}getSegmentToShadowLine(){const t=this.getShadowStartPoint();return[t,t!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class w{constructor(t,e){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=t,this.app=e}fold(t){this.setState("user_fold"),this.calc===null&&this.start(t),this.do(this.render.convertToPage(t))}flip(t){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(t)||(this.calc!==null&&this.render.finishAnimation(),!this.start(t)))return;const e=this.getBoundsRect();this.setState("flipping");const i=e.height/10,s=this.calc.getCorner()==="bottom"?e.height-i:i,a=this.calc.getCorner()==="bottom"?e.height:0;this.calc.calc({x:e.pageWidth-i,y:s}),this.animateFlippingTo({x:e.pageWidth-i,y:s},{x:-e.pageWidth,y:a},!0)}start(t){this.reset();const e=this.render.convertToBook(t),i=this.getBoundsRect(),s=this.getDirectionByPoint(e),a=e.y>=i.height/2?"bottom":"top";if(!this.checkDirection(s))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(s),this.bottomPage=this.app.getPageCollection().getBottomPage(s),this.render.getOrientation()==="landscape")if(s===1){const r=this.app.getPageCollection().nextBy(this.flippingPage);r!==null&&this.flippingPage.getDensity()!==r.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),r.setDrawingDensity("hard"))}else{const r=this.app.getPageCollection().prevBy(this.flippingPage);r!==null&&this.flippingPage.getDensity()!==r.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),r.setDrawingDensity("hard"))}return this.render.setDirection(s),this.calc=new D(s,a,i.pageWidth.toString(10),i.height.toString(10)),!0}catch{return!1}}do(t){if(this.calc!==null&&this.calc.calc(t)){const e=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*e)/100):this.flippingPage.setHardAngle(-90*(200-2*e)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),e,this.calc.getDirection())}}flipToPage(t,e){const i=this.app.getPageCollection().getCurrentSpreadIndex(),s=this.app.getPageCollection().getSpreadIndexByPage(t);try{s>i&&(this.app.getPageCollection().setCurrentSpreadIndex(s-1),this.flipNext(e)),s<i&&(this.app.getPageCollection().setCurrentSpreadIndex(s+1),this.flipPrev(e))}catch{}}flipNext(t){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:t==="top"?1:this.render.getRect().height-2})}flipPrev(t){this.flip({x:10,y:t==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const t=this.calc.getPosition(),e=this.getBoundsRect(),i=this.calc.getCorner()==="bottom"?e.height:0;t.x<=0?this.animateFlippingTo(t,{x:-e.pageWidth,y:i},!0):this.animateFlippingTo(t,{x:e.pageWidth,y:i},!1)}showCorner(t){if(!this.checkState("read","fold_corner"))return;const e=this.getBoundsRect(),i=e.pageWidth;if(this.isPointOnCorners(t))if(this.calc===null){if(!this.start(t))return;this.setState("fold_corner"),this.calc.calc({x:i-1,y:1});const s=50,a=this.calc.getCorner()==="bottom"?e.height-1:1,r=this.calc.getCorner()==="bottom"?e.height-s:s;this.animateFlippingTo({x:i-1,y:a},{x:i-s,y:r},!1,!1)}else this.do(this.render.convertToPage(t));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(t,e,i,s=!0){const a=m.GetCordsFromTwoPoint(t,e),r=[];for(const d of a)r.push(()=>this.do(d));const l=this.getAnimationDuration(a.length);this.render.startAnimation(r,l,()=>{this.calc&&(i&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),s&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(t){this.state!==t&&(this.app.updateState(t),this.state=t)}getDirectionByPoint(t){const e=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(t.x-e.pageWidth<=e.width/5)return 1}else if(t.x<e.width/2)return 1;return 0}getAnimationDuration(t){const e=this.app.getSettings().flippingTime;return t>=1e3?e:t/1e3*e}checkDirection(t){return t===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...t){for(const e of t)if(this.state===e)return!0;return!1}isPointOnCorners(t){const e=this.getBoundsRect(),i=e.pageWidth,s=Math.sqrt(Math.pow(i,2)+Math.pow(e.height,2))/5,a=this.render.convertToBook(t);return a.x>0&&a.y>0&&a.x<e.width&&a.y<e.height&&(a.x<s||a.x>e.width-s)&&(a.y<s||a.y>e.height-s)}}class G{constructor(t,e){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=e,this.app=t;const i=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=i.exec(window.navigator.userAgent)!==null}render(t){if(this.animation!==null){const e=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);e<this.animation.frames.length?this.animation.frames[e]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=t,this.drawFrame()}start(){this.update();const t=e=>{this.render(e),requestAnimationFrame(t)};requestAnimationFrame(t)}startAnimation(t,e,i){this.finishAnimation(),this.animation={frames:t,duration:e,durationFrame:e/t.length,onAnimateEnd:i,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t))}calculateBoundsRect(){let t="landscape";const e=this.getBlockWidth(),i=e/2,s=this.getBlockHeight()/2,a=this.setting.width/this.setting.height;let r=this.setting.width,l=this.setting.height,d=i-r;return this.setting.size==="stretch"?(e<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(t="portrait"),r=t==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,r>this.setting.maxWidth&&(r=this.setting.maxWidth),l=r/a,l>this.getBlockHeight()&&(l=this.getBlockHeight(),r=l*a),d=t==="portrait"?i-r/2-r:i-r):e<2*r&&this.app.getSettings().usePortrait&&(t="portrait",d=i-r/2-r),this.boundsRect={left:d,top:s-l/2,width:2*r,height:l,pageWidth:r},t}setShadowData(t,e,i,s){if(!this.app.getSettings().drawShadow)return;const a=100*this.getSettings().maxShadowOpacity;this.shadow={pos:t,angle:e,width:3*this.getRect().pageWidth/4*i/100,opacity:(100-i)*a/100/100,direction:s,progress:2*i}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(t){this.pageRect=t}setDirection(t){this.direction=t}setRightPage(t){t!==null&&t.setOrientation(1),this.rightPage=t}setLeftPage(t){t!==null&&t.setOrientation(0),this.leftPage=t}setBottomPage(t){t!==null&&t.setOrientation(this.direction===1?0:1),this.bottomPage=t}setFlippingPage(t){t!==null&&t.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=t}convertToBook(t){const e=this.getRect();return{x:t.x-e.left,y:t.y-e.top}}isSafari(){return this.safari}convertToPage(t,e){e||(e=this.direction);const i=this.getRect();return{x:e===0?t.x-i.left-i.width/2:i.width/2-t.x+i.left,y:t.y-i.top}}convertToGlobal(t,e){if(e||(e=this.direction),t==null)return null;const i=this.getRect();return{x:e===0?t.x+i.left+i.width/2:i.width/2-t.x+i.left,y:t.y+i.top}}convertRectToGlobal(t,e){return e||(e=this.direction),{topLeft:this.convertToGlobal(t.topLeft,e),topRight:this.convertToGlobal(t.topRight,e),bottomLeft:this.convertToGlobal(t.bottomLeft,e),bottomRight:this.convertToGlobal(t.bottomRight,e)}}}class U extends G{constructor(t,e,i){super(t,e),this.canvas=i,this.ctx=i.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const t=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(t.left+t.pageWidth,t.top,t.width,t.height),this.ctx.clip())}drawBookShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const e=t.width/20;this.ctx.rect(t.left,t.top,t.width,t.height);const i={x:t.left+t.width/2-e/2,y:0};this.ctx.translate(i.x,i.y);const s=this.ctx.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(0, 0, 0, 0)"),s.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),s.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),s.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),s.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=s,this.ctx.fillRect(0,0,e,2*t.height),this.ctx.restore()}drawOuterShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t.left,t.top,t.width,t.height);const e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(e.x,e.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const i=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),i.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),i.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.shadow.width,2*t.height),this.ctx.restore()}drawInnerShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(i.topLeft.x,i.topLeft.y),this.ctx.lineTo(i.topRight.x,i.topRight.y),this.ctx.lineTo(i.bottomRight.x,i.bottomRight.y),this.ctx.lineTo(i.bottomLeft.x,i.bottomLeft.y),this.ctx.translate(e.x,e.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const s=3*this.shadow.width/4,a=this.ctx.createLinearGradient(0,0,s,0);this.shadow.direction===0?(this.ctx.translate(-s,-100),a.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),a.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),a.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),a.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,s,2*t.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class W{constructor(t,e,i){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=a=>{if(this.checkTarget(a.target)){const r=this.getMousePos(a.clientX,a.clientY);this.app.startUserTouch(r),a.preventDefault()}},this.onTouchStart=a=>{if(this.checkTarget(a.target)&&a.changedTouches.length>0){const r=a.changedTouches[0],l=this.getMousePos(r.clientX,r.clientY);this.touchPoint={point:l,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(l)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||a.preventDefault()}},this.onMouseUp=a=>{const r=this.getMousePos(a.clientX,a.clientY);this.app.userStop(r)},this.onMouseMove=a=>{const r=this.getMousePos(a.clientX,a.clientY);this.app.userMove(r,!1)},this.onTouchMove=a=>{if(a.changedTouches.length>0){const r=a.changedTouches[0],l=this.getMousePos(r.clientX,r.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-l.x)>10||this.app.getState()!=="read")&&a.cancelable&&this.app.userMove(l,!0),this.app.getState()!=="read"&&a.preventDefault()):this.app.userMove(l,!0)}},this.onTouchEnd=a=>{if(a.changedTouches.length>0){const r=a.changedTouches[0],l=this.getMousePos(r.clientX,r.clientY);let d=!1;if(this.touchPoint!==null){const u=l.x-this.touchPoint.point.x,x=Math.abs(l.y-this.touchPoint.point.y);Math.abs(u)>this.swipeDistance&&x<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(u>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),d=!0),this.touchPoint=null}this.app.userStop(l,d)}},this.parentElement=t,t.classList.add("stf__parent"),t.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=t.querySelector(".stf__wrapper"),this.app=e;const s=this.app.getSettings().usePortrait?1:2;t.style.minWidth=i.minWidth*s+"px",t.style.minHeight=i.minHeight+"px",i.size==="fixed"&&(t.style.minWidth=i.width*s+"px",t.style.minHeight=i.height+"px"),i.autoSize&&(t.style.width="100%",t.style.maxWidth=2*i.maxWidth+"px"),t.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=i.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(t){this.wrapper.classList.remove("--portrait","--landscape"),t==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(t,e){const i=this.distElement.getBoundingClientRect();return{x:t-i.left,y:e-i.top}}checkTarget(t){return!this.app.getSettings().clickEventForward||!["a","button"].includes(t.tagName.toLowerCase())}}class X extends W{constructor(t,e,i,s){super(t,e,i),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=t.querySelector(".stf__block"),this.items=s;for(const a of s)this.distElement.appendChild(a);this.setHandlers()}clear(){for(const t of this.items)this.parentElement.appendChild(t)}updateItems(t){this.removeHandlers(),this.distElement.innerHTML="";for(const e of t)this.distElement.appendChild(e);this.items=t,this.setHandlers()}update(){this.app.getRender().update()}}class K extends W{constructor(t,e,i){super(t,e,i),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=t.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const t=getComputedStyle(this.canvas),e=parseInt(t.getPropertyValue("width"),10),i=parseInt(t.getPropertyValue("height"),10);this.canvas.width=e,this.canvas.height=i}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class q extends G{constructor(t,e,i){super(t,e),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=i,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const t=this.getRect(),e=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let i=(100-e)*(2.5*t.pageWidth)/100+20;i>t.pageWidth&&(i=t.pageWidth);let s=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${i}px;
            height: ${t.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*e/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${t.left+t.width/2}px;
            transform-origin: 0 0;
        `;s+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=s}drawHardOuterShadow(){const t=this.getRect();let e=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*t.pageWidth)/100+20;e>t.pageWidth&&(e=t.pageWidth);let i=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${e}px;
            height: ${t.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${t.left+t.width/2}px;
            transform-origin: 0 0;
        `;i+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=i}drawInnerShadow(){const t=this.getRect(),e=3*this.shadow.width/4,i=this.getDirection()===0?e:0,s=this.getDirection()===0?"to left":"to right",a=this.convertToGlobal(this.shadow.pos),r=this.shadow.angle+3*Math.PI/2,l=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let d="polygon( ";for(const x of l){let j=this.getDirection()===1?{x:-x.x+this.shadow.pos.x,y:x.y-this.shadow.pos.y}:{x:x.x-this.shadow.pos.x,y:x.y-this.shadow.pos.y};j=m.GetRotatedPoint(j,{x:i,y:100},r),d+=j.x+"px "+j.y+"px, "}d=d.slice(0,-2),d+=")";const u=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${e}px;
            height: ${2*t.height}px;
            background: linear-gradient(${s},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${i}px 100px;
            transform: translate3d(${a.x-i}px, ${a.y-100}px, 0) rotate(${r}rad);
            clip-path: ${d};
            -webkit-clip-path: ${d};
        `;this.innerShadow.style.cssText=u}drawOuterShadow(){const t=this.getRect(),e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.shadow.angle+3*Math.PI/2,s=this.getDirection()===1?this.shadow.width:0,a=this.getDirection()===0?"to right":"to left",r=[{x:0,y:0},{x:t.pageWidth,y:0},{x:t.pageWidth,y:t.height},{x:0,y:t.height}];let l="polygon( ";for(const u of r)if(u!==null){let x=this.getDirection()===1?{x:-u.x+this.shadow.pos.x,y:u.y-this.shadow.pos.y}:{x:u.x-this.shadow.pos.x,y:u.y-this.shadow.pos.y};x=m.GetRotatedPoint(x,{x:s,y:100},i),l+=x.x+"px "+x.y+"px, "}l=l.slice(0,-2),l+=")";const d=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*t.height}px;
            background: linear-gradient(${a}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${s}px 100px;
            transform: translate3d(${e.x-s}px, ${e.y-100}px, 0) rotate(${i}rad);
            clip-path: ${l};
            -webkit-clip-path: ${l};
        `;this.outerShadow.style.cssText=d}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const t=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(t))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const t of this.app.getPageCollection().getPages())t!==this.leftPage&&t!==this.rightPage&&t!==this.flippingPage&&t!==this.bottomPage&&(t.getElement().style.cssText="display: none"),t.getTemporaryCopy()!==this.flippingPage&&t.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class J{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(t){const e=this._default;if(Object.assign(e,t),e.size!=="stretch"&&e.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(e.width<=0||e.height<=0)throw new Error("Invalid width or height");if(e.flippingTime<=0)throw new Error("Invalid flipping time");return e.size==="stretch"?(e.minWidth<=0&&(e.minWidth=100),e.maxWidth<e.minWidth&&(e.maxWidth=2e3),e.minHeight<=0&&(e.minHeight=100),e.maxHeight<e.minHeight&&(e.maxHeight=2e3)):(e.minWidth=e.width,e.maxWidth=e.width,e.minHeight=e.height,e.maxHeight=e.height),e}}(function(h,t){t===void 0&&(t={});var e=t.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=h:s.appendChild(document.createTextNode(h))}})(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`),S.PageFlip=class extends class{constructor(){this.events=new Map}on(h,t){return this.events.has(h)?this.events.get(h).push(t):this.events.set(h,[t]),this}off(h){this.events.delete(h)}trigger(h,t,e=null){if(this.events.has(h))for(const i of this.events.get(h))i({data:e,object:t})}}{constructor(h,t){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new J().getSettings(t),this.block=h}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(h){this.ui=new K(this.block,this,this.setting);const t=this.ui.getCanvas();this.render=new U(this,this.setting,t),this.flipController=new w(this.render,this),this.pages=new R(this,this.render,h),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(h){this.ui=new X(this.block,this,this.setting,h),this.render=new q(this,this.setting,this.ui.getDistElement()),this.flipController=new w(this.render,this),this.pages=new P(this,this.render,this.ui.getDistElement(),h),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(h){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new R(this,this.render,h),this.pages.load(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}updateFromHtml(h){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new P(this,this.render,this.ui.getDistElement(),h),this.pages.load(),this.ui.updateItems(h),this.render.reload(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(h){this.pages.show(h)}flipNext(h="top"){this.flipController.flipNext(h)}flipPrev(h="top"){this.flipController.flipPrev(h)}flip(h,t="top"){this.flipController.flipToPage(h,t)}updateState(h){this.trigger("changeState",this,h)}updatePageIndex(h){this.trigger("flip",this,h)}updateOrientation(h){this.ui.setOrientationStyle(h),this.update(),this.trigger("changeOrientation",this,h)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(h){return this.pages.getPage(h)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(h){this.mousePosition=h,this.isUserTouch=!0,this.isUserMove=!1}userMove(h,t){this.isUserTouch||t||!this.setting.showPageCorners?this.isUserTouch&&m.GetDistanceBetweenTwoPoint(this.mousePosition,h)>5&&(this.isUserMove=!0,this.flipController.fold(h)):this.flipController.showCorner(h)}userStop(h,t=!1){this.isUserTouch&&(this.isUserTouch=!1,t||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(h)))}},Object.defineProperty(S,"__esModule",{value:!0})}))})(_,_.exports)),_.exports}var Ht=Ft();const _t=H.forwardRef((o,T)=>{const S=g.useRef(null),f=g.useRef([]),b=g.useRef(),[A,R]=g.useState([]);g.useImperativeHandle(T,()=>({pageFlip:()=>b.current}));const m=g.useCallback(()=>{b.current&&b.current.clear()},[]),I=g.useCallback(()=>{const P=b.current;P&&(P.off("flip"),P.off("changeOrientation"),P.off("changeState"),P.off("init"),P.off("update"))},[]);return g.useEffect(()=>{if(f.current=[],o.children){const P=H.Children.map(o.children,D=>H.cloneElement(D,{ref:w=>{w&&f.current.push(w)}}));(!o.renderOnlyPageLengthChange||A.length!==P.length)&&(P.length<A.length&&m(),R(P))}},[o.children]),g.useEffect(()=>{const P=()=>{const D=b.current;D&&(o.onFlip&&D.on("flip",w=>o.onFlip(w)),o.onChangeOrientation&&D.on("changeOrientation",w=>o.onChangeOrientation(w)),o.onChangeState&&D.on("changeState",w=>o.onChangeState(w)),o.onInit&&D.on("init",w=>o.onInit(w)),o.onUpdate&&D.on("update",w=>o.onUpdate(w)))};A.length>0&&f.current.length>0&&(I(),S.current&&!b.current&&(b.current=new Ht.PageFlip(S.current,o)),b.current.getFlipController()?b.current.updateFromHtml(f.current):b.current.loadFromHTML(f.current),P())},[A]),H.createElement("div",{ref:S,className:o.className,style:o.style},A)}),Nt=H.memo(_t),Gt=424/600,gt=()=>typeof window>"u"?719:Math.max(320,Math.min(719,window.innerHeight-129)),Ut=c.section`
  width: min(92vw, 1240px);
  margin: 0 auto;
  color: ${o=>o.theme.pageText};
  font-family: 'Space Grotesk', sans-serif;

  &:fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: none;
    height: 100vh;
    padding: 3vh 2vw;
    background: ${o=>o.theme.surfaceSecondary};
  }

  &:fullscreen > div:first-child {
    flex: 1;
    height: auto;
  }
`,qt=c.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$isFullscreen:o})=>o?"min(96vw, 1200px)":"min(92vw, 1016px)"};
  height: clamp(320px, min(62vw, calc(100svh - 8rem)), 720px);
  margin: 0 auto;
  overflow: ${({$isFlipping:o})=>o?"visible":"hidden"};
  outline: none;

  &:focus-visible {
    outline: 3px solid #e88d67;
    outline-offset: 3px;
  }

  .book-flipbook {
    position: relative;
    left: ${({$pixelOffset:o})=>`${o}px`};
    z-index: 1;
    transform: translateX(${({$coverPosition:o})=>o==="front"?"-25%":o==="back"?"25%":"0"});
    transition: transform 700ms ease;
  }

  ${({$coverPosition:o})=>o==="open"?`
    .book-flipbook .stf__item.--left > img {
      clip-path: inset(0 2px 0 0);
    }

    .book-flipbook .stf__item.--right > img {
      clip-path: inset(0 0 0 2px);
    }
  `:""}

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1.4133;
  }
`,Zt=c.div`
  overflow: hidden;
  background: #fff;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`,Vt=c.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({$isCover:o})=>o?"cover":"contain"};
  object-position: center;
  background: #fff;
  user-select: none;
  -webkit-user-drag: none;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`,pt=c.div`
  display: grid;
  place-items: center;
  min-height: 180px;
  padding: 2rem;
  color: ${o=>o.theme.pageMuted};
  text-align: center;
`,Yt=c.div`
  display: grid;
  grid-template-columns: 44px 44px minmax(9rem, auto) 44px 44px;
  justify-content: center;
  align-items: center;
  width: ${({$isSinglePage:o,$isFullscreen:T})=>T?o?"min(96vw, 600px)":"min(96vw, 1200px)":o?"min(92vw, 508px)":"min(92vw, 1016px)"};
  margin: 0 auto;
  gap: 0.5rem;
  padding-top: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    grid-template-columns: 42px 42px minmax(7.5rem, auto) 42px 42px;
    gap: 0.25rem;
  }
`,V=c.button`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid ${o=>o.theme.controlBorder};
  border-radius: 4px;
  background: ${o=>o.theme.uiSurfaceStrong};
  color: ${o=>o.theme.pageText};
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${o=>o.theme.pageText};
    border-color: #e88d67;
  }

  &:focus-visible {
    outline: 3px solid rgba(232, 141, 103, 0.45);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  @media (max-width: 420px) {
    width: 42px;
    height: 42px;
  }
`,Xt=c.div`
  min-width: 9rem;
  color: ${o=>o.theme.pageText};
  font-size: 0.92rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
`,Kt=g.forwardRef(function({page:T,index:S,bookTitle:f},b){const A=S===0||T.isLast;return n.jsx(Zt,{ref:b,"data-density":S===0||T.isLast?"hard":"soft","data-cursor-hover":!0,children:n.jsx(Vt,{src:T.src,alt:S===0?`${f} front cover`:T.isLast?`${f} back cover`:`${f} page ${S+1}`,width:T.width,height:T.height,loading:S<4?"eager":"lazy",draggable:"false",$isCover:A})})});function Jt({assetDirectory:o="composition-book",bookTitle:T="Composition art book"}){const S=g.useRef(null),f=g.useRef(null),b=g.useRef(null),A=g.useRef(!1),[R,m]=g.useState([]),[I,P]=g.useState(0),[D,w]=g.useState(!1),[G,U]=g.useState(!1),[W,X]=g.useState(!1),[K,q]=g.useState(!1),[J,h]=g.useState(0),[t,e]=g.useState(gt),[i,s]=g.useState(""),a=I===0,r=R.length>0&&I===R.length-1,l=a&&!D||G;g.useEffect(()=>{const p=new AbortController,C=`/${o}/`;return fetch(`${C}manifest.json`,{signal:p.signal}).then(M=>{if(!M.ok)throw new Error("The book could not be loaded.");return M.json()}).then(M=>{m(M.pages.map((O,Z)=>({...O,src:`${C}${O.file}`,isLast:Z===M.pages.length-1})))}).catch(M=>{M.name!=="AbortError"&&s(M.message)}),()=>p.abort()},[o]),g.useLayoutEffect(()=>{const p=b.current;if(!p)return;const C=()=>{const O=p.getBoundingClientRect(),Z=(O.left+O.right)/2;h(Math.round(Z)-Z)};C();const M=new ResizeObserver(C);return M.observe(p),window.addEventListener("resize",C),()=>{M.disconnect(),window.removeEventListener("resize",C)}},[]),g.useEffect(()=>{let p;const C=()=>{window.clearTimeout(p),p=window.setTimeout(()=>e(gt()),120)};return window.addEventListener("resize",C),()=>{window.clearTimeout(p),window.removeEventListener("resize",C)}},[]),g.useEffect(()=>{const p=()=>{const C=document.fullscreenElement===f.current,M=A.current&&!C;A.current=C,X(C),M&&requestAnimationFrame(()=>{f.current?.scrollIntoView({block:"center",inline:"nearest"})})};return document.addEventListener("fullscreenchange",p),()=>document.removeEventListener("fullscreenchange",p)},[]);const d=()=>S.current?.pageFlip(),u=()=>d()?.turnToPage(0),x=()=>{I===1&&U(!0),d()?.flipPrev("top")},j=()=>{a&&w(!0),d()?.flipNext("top")},L=p=>{p.key==="ArrowLeft"&&(p.preventDefault(),x()),p.key==="ArrowRight"&&(p.preventDefault(),j())},bt=async()=>{document.fullscreenElement?await document.exitFullscreen():await f.current?.requestFullscreen()};return n.jsxs(Ut,{ref:f,"aria-label":`${T} flip through`,children:[n.jsxs(qt,{ref:b,tabIndex:0,onKeyDown:L,$isFullscreen:W,$isFlipping:K,$isSinglePage:l||r,$coverPosition:l?"front":r?"back":"open",$pixelOffset:J,children:[i&&n.jsx(pt,{role:"alert",children:i}),!i&&R.length===0&&n.jsx(pt,{role:"status",children:"Loading book..."}),R.length>0&&n.jsx(Nt,{ref:S,startPage:I,width:424,height:600,size:"stretch",minWidth:120,maxWidth:W?600:Math.round(t*Gt),minHeight:170,maxHeight:W?849:t,drawShadow:!1,showCover:!0,usePortrait:!1,mobileScrollSupport:!0,swipeDistance:24,flippingTime:700,onFlip:p=>P(p.data),onChangeState:p=>{p.data==="flipping"&&(q(!0),a&&w(!0)),p.data==="read"&&(q(!1),w(!1),U(!1))},className:"book-flipbook",children:R.map((p,C)=>n.jsx(Kt,{page:p,index:C,bookTitle:T},p.file))},W?"fullscreen":`embedded-${t}`)]}),R.length>0&&n.jsxs(Yt,{"aria-label":"Book controls",$isFullscreen:W,$isSinglePage:l||r,$coverPosition:l?"front":r?"back":"open",children:[n.jsx(V,{type:"button",onClick:u,disabled:I===0,"aria-label":"First page",title:"First page",children:n.jsx(jt,{"aria-hidden":"true",size:22})}),n.jsx(V,{type:"button",onClick:x,disabled:I===0,"aria-label":"Previous page",title:"Previous page",children:n.jsx(Dt,{"aria-hidden":"true",size:22})}),n.jsxs(Xt,{"aria-live":"polite",children:["Page ",I+1," of ",R.length]}),n.jsx(V,{type:"button",onClick:j,disabled:I>=R.length-1,"aria-label":"Next page",title:"Next page",children:n.jsx(Wt,{"aria-hidden":"true",size:22})}),n.jsx(V,{type:"button",onClick:bt,"aria-label":W?"Exit fullscreen":"View fullscreen",title:W?"Exit fullscreen":"View fullscreen",children:W?n.jsx(Ot,{"aria-hidden":"true",size:20}):n.jsx(Lt,{"aria-hidden":"true",size:20})})]})]})}const Qt="/assets/Composition-BackCover-Pt.2-01-CgJGr0YY.jpg",mt="/assets/Composition-BackCover-Pt.2-01-ClPDHp8f.webp",ut="/assets/Composition-BackCover-Pt.2-01-Brw18o1R.avif",te="/assets/Composition-BackCover-Pt.2-01-640-hLwNqpV9.webp",ee="/assets/Composition-BackCover-Pt.2-01-960-0YCK3KpW.webp",ie="/assets/Composition-BackCover-Pt.2-01-640-DJc-I_AQ.avif",se="/assets/Composition-BackCover-Pt.2-01-960-DjxWYxI5.avif",ne="/assets/Render1-DT-g5NKH.png",ae="/assets/Render1-CPYa-0q4.webp",oe="/assets/Render1-DOs6TUJE.avif",ft="/assets/Artbook-CTrBke0P.png",wt="/assets/Artbook-4LqNfgyx.webp",xt="/assets/Artbook-qr5jOApA.avif",re="/assets/Composition-Etching-2026-y8EAzUrN.jpg",he="/assets/Composition-Etching-2026-DRtZwhGl.webp",le="/assets/Composition-Etching-2026-DPeLH0oV.avif",de="/assets/Orbital-Me_evN6P.jpg",ce="/assets/Orbital-MSHexiyD.webp",ge="/assets/Orbital-kkd1dZ4d.avif",pe="/assets/Spraypaintwash-BbPvaVYI.png",me="/assets/Spraypaintwash-BaOYkJyw.webp",ue="/assets/Spraypaintwash-v7LuXuaa.avif",fe="/assets/Render2-BeFVEg4T.png",we="/assets/Render2-BFuydU6r.webp",xe="/assets/Render2-DoNAMUHJ.avif",ve="/assets/Twin1-D2RWvRgs.jpeg",ye="/assets/Twin1-Ekj5P1xU.webp",be="/assets/Twin1-BsV_5Kc4.avif",Pe="/assets/Twin2-CDf_Ciy4.jpeg",Se="/assets/Twin2-Ct4ksB9p.webp",Ce="/assets/Twin2-DIgZcP_8.avif",ke="/assets/Staircases-X99gJTOY.jpg",Te="/assets/Staircases-rPaNQ9T8.webp",Ie="/assets/Staircases-CntQHqy2.avif",Ae="/assets/heartwhite-hmQhQCSU.jpeg",Re="/assets/heartwhite-BY7Arldd.webp",je="/assets/heartwhite-Deen9ZYa.avif",Me="/assets/heartblack-BNrbkkGC.jpg",De="/assets/heartblack-BDj6PpTZ.webp",Be="/assets/heartblack-BM5GOsEM.avif",We="/assets/Birds-BRR20DEX.jpg",Ee="/assets/Birds-BfTLwFSA.webp",Le="/assets/Birds-CpIRV6cj.avif",$e="/assets/Brooklyn-pKXeBM0d.jpg",Oe="/assets/Brooklyn-CDo2RsPc.webp",ze="/assets/Brooklyn-B3Xxez07.avif",Fe="/assets/Coney-XynOADlt.jpg",He="/assets/Coney-amO18Ojw.webp",_e="/assets/Coney-BbkJzuhU.avif",Ne="/assets/Brooklyn2-BVlZQUhO.jpg",Ge="/assets/Brooklyn2-BOjlmPf4.webp",Ue="/assets/Brooklyn2-hysoQXg9.avif",qe="/assets/Render4-CUv_OZcU.png",Ze="/assets/Render4-BbP-SCPU.webp",Ve="/assets/Render4-czE6f-R8.avif",Ye="/assets/Rug-Do3b2lPl.jpg",Xe="/assets/Rug-DNTpYrqu.webp",Ke="/assets/Rug-qk7_00KP.avif",Je="/assets/Mash1-C6rAcNzX.png",Qe="/assets/Mash1-By186HQs.webp",ti="/assets/Mash1-CD7JNTpE.avif",ei="/assets/Mash2-Dqi8iSdT.png",ii="/assets/Mash2-BhSatqSs.webp",si="/assets/Mash2-DatWVgGz.avif",ni="/assets/Render5-DDVrXzlj.png",ai="/assets/Render5-8-OqZTM_.webp",oi="/assets/Render5-D__NT6lp.avif",ri="/assets/Mash3-hEAJGZMt.png",hi="/assets/Mash3-CfssUcL-.webp",li="/assets/Mash3-BzVVQDAv.avif",di="/assets/Mash4-DJRwDavu.png",ci="/assets/Mash4-voIqPWzH.webp",gi="/assets/Mash4-CfZ6Zm83.avif",pi="/assets/Mattos-cG9NEt7H.png",mi="/assets/Mattos-DpEAIyko.webp",ui="/assets/Mattos-CvCWgofy.avif",fi="/assets/No.3-C03FbQUH.png",wi="/assets/No.3-DZfy37SG.webp",xi="/assets/No.3-DYCAAtZK.avif",vi="/assets/Grain-BEUj0pKY.jpg",yi="/assets/Grain-gPTL1VTa.webp",bi="/assets/Grain-DXHUqFdd.avif",vt=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],Pi=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${o=>o.theme.backgroundTwo};
  width: 100vw;
  min-height: 100vh; /* ensures full height but can shrink on smaller screens */
  overflow: hidden;
  padding: var(--space-section-compact) 0;

  @media (max-height: 800px) {
    min-height: 70vh; /* shrink height on smaller viewports */
  }

  @media (max-width: 850px) {
    min-height: 60vh;
  }
`,Si=c.img`
  background-color: ${o=>o.theme.backgroundTwo};
  width: 54vw;
  max-width: 90vw; /* prevents overflow on small screens */
  height: auto;

  @media (max-width: 850px) {
    width: 80vw; /* scale up a bit relative to smaller screens */
  }
`,z=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${o=>o.theme.backgroundTwo};
  padding: var(--space-section-compact) 0;
`,F=c.img`
  width: min(74vw, 1180px);
  max-width: 92vw;
  height: auto;
  display: block;
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 90vw;
  }
`,Ci=c.a`
  width: min(88vw, 72ch);
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: clamp(16px, 2vw, 24px);
  align-items: center;
  color: inherit;
  text-decoration: none;
  background: ${o=>o.theme.narrativeBackground};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,ki=c.img`
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 9;
    min-height: 0;
  }
`,Ti=c.div`
  padding: clamp(1.4rem, 2.4vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,Ii=c.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.18rem, 1.45vw, 1.45rem);
  font-variation-settings: 'SOFT' 45, 'WONK' 1;
  line-height: 1.12;
  color: ${o=>o.theme.narrativeText};
`,Ai=c.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${o=>o.theme.pageMuted};
`,Ri=c.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${o=>o.theme.narrativeText};
`,$=c.img`
  grid-row-start: 1;
  grid-column-start: 1;
  width: min(100%, 460px);
  max-width: 460px;
  height: auto;
  justify-self: end;

  @media (max-width: 1290px){ max-width: 420px; }
  @media (max-width: 1115px){ max-width: 360px; }

  @media (max-width: 830px){
    grid-column-start: 1;
    width: 100%;
    max-width: 100%;
    justify-self: center;
  }
`,ji=c($)`
  grid-row-start: 3;
`,Mi=c($)`
  grid-row-start: 5;
`;c.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: auto;
width: 40vw;
align-self: flex-end;

@media (max-width: 830px){
    max-width: 100vw;
    grid-column-start: 1;
    width: 100vw;
    height: auto;
}
`;const Y=c.img`
  grid-row-start: 1;
  grid-column-start: 2;
  width: min(100%, 460px);
  max-width: 460px;
  height: auto;
  justify-self: start;

  @media (max-width: 1290px){ max-width: 420px; }
  @media (max-width: 1115px){ max-width: 360px; }

  @media (max-width: 830px){
    grid-column-start: 1;
    grid-row-start: 2;
    width: 100%;
    max-width: 100%;
    justify-self: center;
  }
`,tt=c.div`
  grid-row-start: 2;
  grid-column: 1 / span 2;
  justify-self: start;
  color: ${o=>o.theme.narrativeText};
  padding-top: 1.5rem;
  line-height: 1.3;
  font-family: 'Space Grotesk', sans-serif;
  width: min(42rem, 100%);
  text-align: left;

  @media (max-width: 830px){
    grid-column-start: auto;
    grid-row-start: 3;
    width: 90%;
    margin: 16px auto 32px auto;
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }
`,Di=c.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${o=>o.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,Bi=c.div`
  position: relative;
  padding-right: 6vw;       /* desktop padding */
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: 40vw;
  color: #a0a0a0;

  @media (max-width: 1770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;               /* block takes most of the width */
    max-width: 700px;          /* prevents it from being too wide */
    font-size: 1.6rem;
    margin: 4vh auto 0 auto;   /* centers the block horizontally */
    padding-right: 0;          /* remove desktop padding on mobile */
    text-align: left;          /* text stays left-aligned inside the block */
  }
`,Wi=c.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: ${o=>o.Grids};
padding-top: 5vh;
background-color:${o=>o.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`,et=c.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 576px));
  grid-template-rows: auto auto;
  width: 100vw;
  box-sizing: border-box;
  padding-left: max(6vw, calc((100vw - 1180px) / 2));
  padding-right: max(6vw, calc((100vw - 1180px) / 2));
  justify-content: start;
  column-gap: clamp(18px, 2vw, 28px);
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${o=>o.theme.narrativeBackground};

  & > ${$},
  & > ${Y} {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 1320px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  @media (max-width: 830px){
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    row-gap: 2rem;
    padding: 5vh 2vw;
  }
`,Ei=c.div`
  display: grid;
  grid-template-columns: 10vw 40vw 40vw 10vw;
  grid-template-rows: auto auto auto auto auto auto;
  row-gap: 3ch;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${o=>o.theme.narrativeBackground};

  @media (max-width: 830px) {
    grid-template-columns: 100vw;
    grid-template-rows: auto;
    row-gap: 2ch;
    padding: var(--space-section-compact) 0;
  }
`,Li=c.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${o=>o.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
    height: auto;
    row-gap: 2ch;
}
`,$i=c.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color:${o=>o.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto;
    height: auto;
    row-gap: 2ch;
}
`,it=c.div`
  grid-column-start: 3;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7.5vw;
  padding-right: 6vw;
  color: ${o=>o.theme.narrativeText};

  @media (max-width: 830px) {
    /* Remove grid positioning */
    grid-column-start: auto;
    grid-row-start: auto;

    /* Center block horizontally */
    width: 90%;            /* or calc(100% - 32px) */
    margin: 16px auto 32px auto;

    /* Keep internal content left-aligned */
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }
`,Oi=c(it)`
  grid-row-start: 3;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,zi=c(it)`
  grid-row-start: 5;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,v=c.h1`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 2.5rem;
  font-variation-settings: 'SOFT' 55, 'WONK' 1;
  line-height: 1.05;
  margin: 0 0 0.65rem 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1.8rem; }
  @media(max-width: 830px) { font-size: 1.4rem; }
`,y=c.h3`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  margin: 0 0 1rem 0;  // spacing below year
  color: inherit;

  @media(max-width: 830px) { font-size: 0.78rem; }
`,yt=c.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2; // tighter line-height for description
  margin: 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1rem; }
  @media(max-width: 830px) { font-size: 0.9rem; }
`,Fi=c.div`
  font-family: 'Space Grotesk', sans-serif;
  color: ${o=>o.theme.narrativeText};
  font-size: clamp(1.08rem, 1.35vw, 1.35rem);
  line-height: 1.6;

  @media (max-width: 1400px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.08rem;
  }
  @media (max-width: 450px) {
    font-size: 1.05rem;
  }
`;function Hi(){g.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const o=Pt(kt());return n.jsxs("div",{children:[n.jsx("style",{children:`
  /* Match About page split spacing and width */
  .tight-split {
    gap: 28px !important;
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    .tight-split { width: 92vw; }
  }
`}),n.jsx(St,{title:"Composition | Zack MacTavish Art & Design",description:"Composition is Zack MacTavish's first solo show, using the composition notebook as a metaphor for self-reflection through paintings, photographs, collages, rugs, and a self-published book made from 2019 to 2021.",image:"https://zackmactavish.com/og/composition.jpg",url:o,keywords:["composition","painting","render","photography"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:vt,favicons:[{rel:"icon",sizes:"16x16",href:st},{rel:"icon",sizes:"32x32",href:nt},{rel:"icon",sizes:"256x256",href:at},{rel:"icon",sizes:"512x512",href:Q},{rel:"apple-touch-icon",sizes:"180x180",href:ot},{rel:"icon",sizes:"192x192",href:rt},{rel:"icon",sizes:"512x512",href:Q},{rel:"icon",type:"image/png",sizes:"16x16",href:st},{rel:"icon",type:"image/png",sizes:"32x32",href:nt},{rel:"apple-touch-icon",sizes:"180x180",href:ot},{rel:"icon",type:"image/png",sizes:"192x192",href:rt},{rel:"icon",type:"image/png",sizes:"256x256",href:at},{rel:"icon",type:"image/png",sizes:"512x512",href:Q},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Composition Series",url:o,author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:vt}}}),n.jsx("h1",{style:Ct,children:"Composition by Zack MacTavish"}),n.jsx(Pi,{children:n.jsx(Si,{as:B,src:Qt,webpSrc:mt,webpSrcSet:`${te} 640w, ${ee} 960w, ${mt} 2200w`,avifSrc:ut,avifSrcSet:`${ie} 640w, ${se} 960w, ${ut} 2200w`,sizes:"(max-width: 850px) 80vw, 54vw",alt:"Composition notebook cover",width:5620,height:3685,loading:"eager",decoding:"sync",fetchPriority:"high"})}),n.jsxs(ht,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2rem"},children:[n.jsx(lt,{style:{width:"min(88vw, 72ch)",padding:0,alignItems:"stretch"},children:n.jsx(dt,{style:{maxWidth:"100%"},children:"Composition was my first solo art show and uses the composition notebook as a metaphor for self-reflection across the places I have lived. The series grew out of moving more than 21 times through Rhode Island, Massachusetts, Illinois, New York, Oregon, and Pennsylvania, and became a way to document how environment, memory, and personal growth accumulate over time. Made between 2019 and 2021, the show brought together paintings, a graphite drawing, hand-tufted rugs, photographs, physical and digital collages, and a self-published book."})}),n.jsxs(Ci,{href:"https://medium.com/@zmactavish/my-first-solo-art-show-de7ac72b054f",target:"_blank",rel:"noreferrer",children:[n.jsx(ki,{as:B,src:ft,webpSrc:wt,avifSrc:xt,alt:"Composition art book and blog post preview"}),n.jsxs(Ti,{children:[n.jsx(Ii,{children:"Read more about Composition"}),n.jsx(Ai,{children:"A short essay on the show, the series, and how it led into my current body of work."}),n.jsx(Ri,{children:"Read on Medium"})]})]})]}),n.jsx(z,{children:n.jsx(F,{as:B,src:ne,webpSrc:ae,avifSrc:oe,alt:"Composition render one"})}),n.jsxs("div",{style:{backgroundColor:"var(--surface-secondary)",width:"100%",padding:"var(--space-section-spacious) 0"},children:[n.jsx(k,{className:"tight-split",imageSrc:ft,imageWebp:wt,imageAvif:xt,imageAlt:"Composition artist book",children:n.jsx(Fi,{children:"I self-published a limited edition book for Composition. All 30 copies sold during the run of the series, and the book extended the exhibition's interest in journaling, documentation, and building an archive around the work."})}),n.jsx("div",{style:{width:"100%",background:"var(--surface-secondary)",padding:"var(--space-section-compact) 0"},children:n.jsx(Jt,{})})]}),n.jsxs(E,{children:[n.jsxs(k,{imageMode:"framed",imageSrc:re,imageWebp:he,imageAvif:le,imageAlt:"Untitled etching by Zachary MacTavish, 2026",children:[n.jsx(v,{children:"UNTITLED ETCHING"}),n.jsx(y,{children:"2026"}),n.jsx(yt,{children:"Etching"})]}),n.jsxs(k,{imageMode:"framed",imageSrc:de,imageWebp:ce,imageAvif:ge,imageAlt:"ORBITAL mixed-media work from Composition",children:[n.jsx(v,{children:"ORBITAL"}),n.jsx(y,{children:"2021"})]}),n.jsxs(k,{imageMode:"framed",imageSrc:pe,imageWebp:me,imageAvif:ue,imageAlt:"Erasure 1",children:[n.jsx(v,{children:"ERASURE I"}),n.jsx(y,{children:"2021"})]})]}),n.jsx(z,{children:n.jsx(F,{as:B,src:fe,webpSrc:we,avifSrc:xe,alt:"Composition render 2"})}),n.jsx(E,{children:n.jsxs(k,{imageMode:"framed",imageSrc:ke,imageWebp:Te,imageAvif:Ie,imageAlt:"Staircases",children:[n.jsx(v,{children:"STAIRCASES"}),n.jsx(y,{children:"2021"})]})}),n.jsxs(et,{children:[n.jsx($,{as:B,src:Ae,webpSrc:Re,avifSrc:je,alt:"Composition X detail white"}),n.jsx(Y,{as:B,src:Me,webpSrc:De,avifSrc:Be,alt:"Composition X detail black"}),n.jsxs(tt,{children:[n.jsx(v,{children:"COMPOSITION X"}),n.jsx(y,{children:"2021"})]})]}),n.jsx(B,{src:We,webpSrc:Ee,avifSrc:Le,alt:"Birds composition",style:{width:"100vw",height:"100vh",objectFit:"cover",objectPosition:"center",display:"block"}}),n.jsxs(E,{children:[n.jsxs(k,{imageSrc:Fe,imageWebp:He,imageAvif:_e,imageAlt:"Coney Island, NY",children:[n.jsx(v,{children:"CONEY ISLAND, NY"}),n.jsx(y,{children:"2021"})]}),n.jsxs(k,{imageSrc:$e,imageWebp:Oe,imageAvif:ze,imageAlt:"Brooklyn, NY I",children:[n.jsx(v,{children:"BROOKLYN, NY I"}),n.jsx(y,{children:"2021"})]}),n.jsxs(k,{imageSrc:Ne,imageWebp:Ge,imageAvif:Ue,imageAlt:"Brooklyn, NY II",children:[n.jsx(v,{children:"BROOKLYN, NY II"}),n.jsx(y,{children:"2021"})]})]}),n.jsx(z,{children:n.jsx(F,{as:B,src:qe,webpSrc:Ze,avifSrc:Ve,alt:"Composition render 4"})}),n.jsx(E,{children:n.jsxs(k,{imageSrc:Ye,imageWebp:Xe,imageAvif:Ke,imageAlt:"Rug I",children:[n.jsx(v,{children:"RUG I"}),n.jsx(y,{children:"2021"})]})}),n.jsxs(E,{children:[n.jsxs(k,{imageMode:"framed",imageSrc:Je,imageWebp:Qe,imageAvif:ti,imageAlt:"Composition III",children:[n.jsx(v,{children:"COMPOSITION III"}),n.jsx(y,{children:"2019"})]}),n.jsxs(k,{imageMode:"framed",imageSrc:ei,imageWebp:ii,imageAvif:si,imageAlt:"Composition IV",children:[n.jsx(v,{children:"COMPOSITION IV"}),n.jsx(y,{children:"2019"})]})]}),n.jsx(z,{children:n.jsx(F,{as:B,src:ni,webpSrc:ai,avifSrc:oi,alt:"Composition render 5"})}),n.jsxs(E,{children:[n.jsxs(k,{imageMode:"framed",imageSrc:ri,imageWebp:hi,imageAvif:li,imageAlt:"Composition V",children:[n.jsx(v,{children:"COMPOSITION V"}),n.jsx(y,{children:"2019"})]}),n.jsxs(k,{imageMode:"framed",imageSrc:di,imageWebp:ci,imageAvif:gi,imageAlt:"Composition VI",children:[n.jsx(v,{children:"COMPOSITION VI"}),n.jsx(y,{children:"2019"})]}),n.jsxs(k,{imageMode:"framed",imageSrc:At,imageWebp:It,imageAvif:Tt,imageAlt:"Composition VII",children:[n.jsx(v,{children:"COMPOSITION VII"}),n.jsx(y,{children:"2020"})]})]}),n.jsx(z,{children:n.jsx(F,{as:B,src:pi,webpSrc:mi,avifSrc:ui,alt:"Mattos collage"})}),n.jsx(E,{children:n.jsxs(k,{imageMode:"framed",imageSrc:fi,imageWebp:wi,imageAvif:xi,imageAlt:"Composition I",children:[n.jsx(v,{children:"COMPOSITION I"}),n.jsx(y,{children:"2018"})]})}),n.jsx(E,{children:n.jsxs(k,{imageMode:"framed",imageSrc:vi,imageWebp:yi,imageAvif:bi,imageAlt:"GRAIN mixed-media work from Composition",children:[n.jsx(v,{children:"GRAIN"}),n.jsx(y,{children:"2021"})]})}),n.jsxs(et,{children:[n.jsx($,{as:B,src:ve,webpSrc:ye,avifSrc:be,alt:"Ephemeral I"}),n.jsx(Y,{as:B,src:Pe,webpSrc:Se,avifSrc:Ce,alt:"Ephemeral II"}),n.jsxs(tt,{children:[n.jsx(v,{children:"EPHEMERAL I & II"}),n.jsx(y,{children:"2021"})]})]}),n.jsx(ht,{children:n.jsx(lt,{children:n.jsx(dt,{children:"Over the course of Composition, I started to understand that the work was pointing me beyond transition itself and toward the more permanent fixtures that shape a life: the homes I have lived in, the people around me, and the hidden histories carried by those spaces. That realization became the foundation for my current body of work, which turns more fully toward quilting, embroidery, collage, painting, and bookmaking as forms of archive. What Composition began to explore through notebooks, photographs, and fragments of place has expanded into a longer investigation of family, memory, identity, and preservation."})})})]})}const Vi=Object.freeze(Object.defineProperty({__proto__:null,ArtDesc:yt,ArtHeader:v,ArtSectionThreeone:$i,ArtSectionThreetwo:Li,ArtSectionthree:Wi,ArtSectionthreeog:Ei,ArtSectiontwins:et,ArtText:it,ArtTextthree:zi,ArtTexttwo:Oi,ArtYear:y,FullBg:Di,GridRowThree:Mi,GridRowTwo:ji,Orbital:$,ParagraphFour:Bi,TwinTwo:Y,TwinsText:tt,default:Hi},Symbol.toStringTag,{value:"Module"}));export{v as A,Jt as B,Vi as C,Di as F,Bi as P,y as a,yt as b};
