import{R as F,b as u,j as n}from"./react-three-BKJczYnz.js";import{f as J,a as Q,c as tt,d as V,b as et,i as it,o as ut}from"./website-logoresolutions-1200x630-BPEdvRQz.js";import{c as wt,S as ft,v as xt,F as st,a as nt,T as at,I as P,N as D}from"./seo-CO2rvSk5.js";import{R as j}from"./ResponsiveImage-ER0KLJEM.js";import{l as c,u as vt}from"./index-C0yBYRFJ.js";import{c as z}from"./createLucideIcon-BLj1Zo3d.js";import{i as yt,a as bt,b as St}from"./Mash5-Uf3Rc1w8.js";var H={exports:{}},Pt=H.exports,ot;function Ct(){return ot||(ot=1,(function(r,C){(function(b,w){w(C)})(Pt,(function(b){class w{constructor(t,e){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=e,this.nowDrawingDensity=this.createdDensity,this.render=t}setDensity(t){this.createdDensity=t,this.nowDrawingDensity=t}setDrawingDensity(t){this.nowDrawingDensity=t}setPosition(t){this.state.position=t}setAngle(t){this.state.angle=t}setArea(t){this.state.area=t}setHardDrawingAngle(t){this.state.hardDrawingAngle=t}setHardAngle(t){this.state.hardAngle=t,this.state.hardDrawingAngle=t}setOrientation(t){this.orientation=t}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class S extends w{constructor(t,e,i){super(t,i),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=e}draw(t){const e=this.render.getContext(),i=this.render.convertToGlobal(this.state.position),s=this.render.getRect().pageWidth,a=this.render.getRect().height;e.save(),e.translate(i.x,i.y),e.beginPath();for(let o of this.state.area)o!==null&&(o=this.render.convertToGlobal(o),e.lineTo(o.x-i.x,o.y-i.y));e.rotate(this.state.angle),e.clip(),this.isLoad?e.drawImage(this.image,0,0,s,a):this.drawLoader(e,{x:0,y:0},s,a),e.restore()}simpleDraw(t){const e=this.render.getRect(),i=this.render.getContext(),s=e.pageWidth,a=e.height,o=t===1?e.left+e.pageWidth:e.left,d=e.top;this.isLoad?i.drawImage(this.image,o,d,s,a):this.drawLoader(i,{x:o,y:d},s,a)}drawLoader(t,e,i,s){t.beginPath(),t.strokeStyle="rgb(200, 200, 200)",t.fillStyle="rgb(255, 255, 255)",t.lineWidth=1,t.rect(e.x+1,e.y+1,i-1,s-1),t.stroke(),t.fill();const a={x:e.x+i/2,y:e.y+s/2};t.beginPath(),t.lineWidth=10,t.arc(a.x,a.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),t.stroke(),t.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class I{constructor(t,e){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=e,this.app=t,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let e=0;e<this.pages.length;e++)this.portraitSpread.push([e]);let t=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([t]),t++);for(let e=t;e<this.pages.length;e+=2)e<this.pages.length-1?this.landscapeSpread.push([e,e+1]):(this.landscapeSpread.push([e]),this.pages[e].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(t){const e=this.getSpread();for(let i=0;i<e.length;i++)if(t===e[i][0]||t===e[i][1])return i;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(t){if(t>=0&&t<this.pages.length)return this.pages[t];throw new Error("Invalid page number")}nextBy(t){const e=this.pages.indexOf(t);return e<this.pages.length-1?this.pages[e+1]:null}prevBy(t){const e=this.pages.indexOf(t);return e>0?this.pages[e-1]:null}getFlippingPage(t){const e=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[e].newTemporaryCopy():this.pages[e-1];{const i=t===0?this.getSpread()[e+1]:this.getSpread()[e-1];return i.length===1||t===0?this.pages[i[0]]:this.pages[i[1]]}}getBottomPage(t){const e=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[e+1]:this.pages[e-1];{const i=t===0?this.getSpread()[e+1]:this.getSpread()[e-1];return i.length===1?this.pages[i[0]]:t===0?this.pages[i[1]]:this.pages[i[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(t=null){if(t===null&&(t=this.currentPageIndex),t<0||t>=this.pages.length)return;const e=this.getSpreadIndexByPage(t);e!==null&&(this.currentSpreadIndex=e,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(t){if(!(t>=0&&t<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=t}showSpread(){const t=this.getSpread()[this.currentSpreadIndex];t.length===2?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(this.pages[t[1]])):this.render.getOrientation()==="landscape"&&t[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[t[0]])),this.currentPageIndex=t[0],this.app.updatePageIndex(this.currentPageIndex)}}class T extends I{constructor(t,e,i){super(t,e),this.imagesHref=i}load(){for(const t of this.imagesHref){const e=new S(this.render,t,"soft");e.load(),this.pages.push(e)}this.createSpread()}}class m{static GetDistanceBetweenTwoPoint(t,e){return t===null||e===null?1/0:Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}static GetSegmentLength(t){return m.GetDistanceBetweenTwoPoint(t[0],t[1])}static GetAngleBetweenTwoLine(t,e){const i=t[0].y-t[1].y,s=e[0].y-e[1].y,a=t[1].x-t[0].x,o=e[1].x-e[0].x;return Math.acos((i*s+a*o)/(Math.sqrt(i*i+a*a)*Math.sqrt(s*s+o*o)))}static PointInRect(t,e){return e===null?null:e.x>=t.left&&e.x<=t.width+t.left&&e.y>=t.top&&e.y<=t.top+t.height?e:null}static GetRotatedPoint(t,e,i){return{x:t.x*Math.cos(i)+t.y*Math.sin(i)+e.x,y:t.y*Math.cos(i)-t.x*Math.sin(i)+e.y}}static LimitPointToCircle(t,e,i){if(m.GetDistanceBetweenTwoPoint(t,i)<=e)return i;const s=t.x,a=t.y,o=i.x,d=i.y;let l=Math.sqrt(Math.pow(e,2)*Math.pow(s-o,2)/(Math.pow(s-o,2)+Math.pow(a-d,2)))+s;i.x<0&&(l*=-1);let g=(l-s)*(a-d)/(s-o)+a;return s-o+a===0&&(g=e),{x:l,y:g}}static GetIntersectBetweenTwoSegment(t,e,i){return m.PointInRect(t,m.GetIntersectBeetwenTwoLine(e,i))}static GetIntersectBeetwenTwoLine(t,e){const i=t[0].y-t[1].y,s=e[0].y-e[1].y,a=t[1].x-t[0].x,o=e[1].x-e[0].x,d=t[0].x*t[1].y-t[1].x*t[0].y,l=e[0].x*e[1].y-e[1].x*e[0].y,g=i*l-s*d,p=a*l-o*d,A=-(d*o-l*a)/(i*o-s*a),B=-(i*l-s*d)/(i*o-s*a);if(isFinite(A)&&isFinite(B))return{x:A,y:B};if(Math.abs(g-p)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(t,e){const i=Math.abs(t.x-e.x),s=Math.abs(t.y-e.y),a=Math.max(i,s),o=[t];function d(l,g,p,A,B){return g>l?l+B*(p/A):g<l?l-B*(p/A):l}for(let l=1;l<=a;l+=1)o.push({x:d(t.x,e.x,i,a,l),y:d(t.y,e.y,s,a,l)});return o}}class k extends w{constructor(t,e,i){super(t,i),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=e,this.element.classList.add("stf__item"),this.element.classList.add("--"+i)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new k(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(t){const e=t||this.nowDrawingDensity,i=this.render.convertToGlobal(this.state.position),s=this.render.getRect().pageWidth,a=this.render.getRect().height;this.element.classList.remove("--simple");const o=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${s}px;
            height: ${a}px;
        `;e==="hard"?this.drawHard(o):this.drawSoft(i,o)}drawHard(t=""){const e=this.render.getRect().left+this.render.getRect().width/2,i=this.state.hardDrawingAngle,s=t+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${i}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${e}px, 0, 0) rotateY(${i}deg);`);this.element.style.cssText=s}drawSoft(t,e=""){let i="polygon( ";for(const a of this.state.area)if(a!==null){let o=this.render.getDirection()===1?{x:-a.x+this.state.position.x,y:a.y-this.state.position.y}:{x:a.x-this.state.position.x,y:a.y-this.state.position.y};o=m.GetRotatedPoint(o,{x:0,y:0},this.state.angle),i+=o.x+"px "+o.y+"px, "}i=i.slice(0,-2),i+=")";const s=e+`transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${t.x}px, ${t.y}px);`:`transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=s}simpleDraw(t){const e=this.render.getRect(),i=e.pageWidth,s=e.height,a=t===1?e.left+e.pageWidth:e.left,o=e.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${s}px; 
            left: ${a}px; 
            top: ${o}px; 
            width: ${i}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(t){super.setOrientation(t),this.element.classList.remove("--left","--right"),this.element.classList.add(t===1?"--right":"--left")}setDrawingDensity(t){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+t),super.setDrawingDensity(t)}}class y extends I{constructor(t,e,i,s){super(t,e),this.element=i,this.pagesElement=s}load(){for(const t of this.pagesElement){const e=new k(this.render,t,t.dataset.density==="hard"?"hard":"soft");e.load(),this.pages.push(e)}this.createSpread()}}class R{constructor(t,e,i,s){this.direction=t,this.corner=e,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(i,10),this.pageHeight=parseInt(s,10)}calc(t){try{return this.position=this.calcAngleAndPosition(t),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const t=[];let e=!1;return t.push(this.rect.topLeft),t.push(this.topIntersectPoint),this.sideIntersectPoint===null?e=!0:(t.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(e=!1)),t.push(this.bottomIntersectPoint),(e||this.corner==="bottom")&&t.push(this.rect.bottomLeft),t}getBottomClipArea(){const t=[];return t.push(this.topIntersectPoint),this.corner==="top"?t.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&t.push({x:this.pageWidth,y:0}),t.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?m.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&t.push(this.sideIntersectPoint):this.corner==="top"&&t.push({x:this.pageWidth,y:this.pageHeight}),t.push(this.bottomIntersectPoint),t.push(this.topIntersectPoint),t}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const t=m.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?t:Math.PI-t}calcAngleAndPosition(t){let e=t;if(this.updateAngleAndGeometry(e),e=this.corner==="top"?this.checkPositionAtCenterLine(e,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(e,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(e.x-this.pageWidth)<1&&Math.abs(e.y)<1)throw new Error("Point is too small");return e}updateAngleAndGeometry(t){this.angle=this.calculateAngle(t),this.rect=this.getPageRect(t)}calculateAngle(t){const e=this.pageWidth-t.x+1,i=this.corner==="bottom"?this.pageHeight-t.y:t.y;let s=2*Math.acos(e/Math.sqrt(i*i+e*e));i<0&&(s=-s);const a=Math.PI-s;if(!isFinite(s)||a>=0&&a<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(s=-s),s}getPageRect(t){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],t):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],t)}getRectFromBasePoint(t,e){return{topLeft:this.getRotatedPoint(t[0],e),topRight:this.getRotatedPoint(t[1],e),bottomLeft:this.getRotatedPoint(t[2],e),bottomRight:this.getRotatedPoint(t[3],e)}}getRotatedPoint(t,e){return{x:t.x*Math.cos(this.angle)+t.y*Math.sin(this.angle)+e.x,y:t.y*Math.cos(this.angle)-t.x*Math.sin(this.angle)+e.y}}calculateIntersectPoint(t){const e={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[t,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[t,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[t,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=m.GetIntersectBetweenTwoSegment(e,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(t,e,i){let s=t;const a=m.LimitPointToCircle(e,this.pageWidth,s);s!==a&&(s=a,this.updateAngleAndGeometry(s));const o=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let d=this.rect.bottomRight,l=this.rect.topLeft;if(this.corner==="bottom"&&(d=this.rect.topRight,l=this.rect.bottomLeft),d.x<=0){const g=m.LimitPointToCircle(i,o,l);g!==s&&(s=g,this.updateAngleAndGeometry(s))}return s}getSegmentToShadowLine(){const t=this.getShadowStartPoint();return[t,t!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class f{constructor(t,e){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=t,this.app=e}fold(t){this.setState("user_fold"),this.calc===null&&this.start(t),this.do(this.render.convertToPage(t))}flip(t){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(t)||(this.calc!==null&&this.render.finishAnimation(),!this.start(t)))return;const e=this.getBoundsRect();this.setState("flipping");const i=e.height/10,s=this.calc.getCorner()==="bottom"?e.height-i:i,a=this.calc.getCorner()==="bottom"?e.height:0;this.calc.calc({x:e.pageWidth-i,y:s}),this.animateFlippingTo({x:e.pageWidth-i,y:s},{x:-e.pageWidth,y:a},!0)}start(t){this.reset();const e=this.render.convertToBook(t),i=this.getBoundsRect(),s=this.getDirectionByPoint(e),a=e.y>=i.height/2?"bottom":"top";if(!this.checkDirection(s))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(s),this.bottomPage=this.app.getPageCollection().getBottomPage(s),this.render.getOrientation()==="landscape")if(s===1){const o=this.app.getPageCollection().nextBy(this.flippingPage);o!==null&&this.flippingPage.getDensity()!==o.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),o.setDrawingDensity("hard"))}else{const o=this.app.getPageCollection().prevBy(this.flippingPage);o!==null&&this.flippingPage.getDensity()!==o.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),o.setDrawingDensity("hard"))}return this.render.setDirection(s),this.calc=new R(s,a,i.pageWidth.toString(10),i.height.toString(10)),!0}catch{return!1}}do(t){if(this.calc!==null&&this.calc.calc(t)){const e=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*e)/100):this.flippingPage.setHardAngle(-90*(200-2*e)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),e,this.calc.getDirection())}}flipToPage(t,e){const i=this.app.getPageCollection().getCurrentSpreadIndex(),s=this.app.getPageCollection().getSpreadIndexByPage(t);try{s>i&&(this.app.getPageCollection().setCurrentSpreadIndex(s-1),this.flipNext(e)),s<i&&(this.app.getPageCollection().setCurrentSpreadIndex(s+1),this.flipPrev(e))}catch{}}flipNext(t){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:t==="top"?1:this.render.getRect().height-2})}flipPrev(t){this.flip({x:10,y:t==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const t=this.calc.getPosition(),e=this.getBoundsRect(),i=this.calc.getCorner()==="bottom"?e.height:0;t.x<=0?this.animateFlippingTo(t,{x:-e.pageWidth,y:i},!0):this.animateFlippingTo(t,{x:e.pageWidth,y:i},!1)}showCorner(t){if(!this.checkState("read","fold_corner"))return;const e=this.getBoundsRect(),i=e.pageWidth;if(this.isPointOnCorners(t))if(this.calc===null){if(!this.start(t))return;this.setState("fold_corner"),this.calc.calc({x:i-1,y:1});const s=50,a=this.calc.getCorner()==="bottom"?e.height-1:1,o=this.calc.getCorner()==="bottom"?e.height-s:s;this.animateFlippingTo({x:i-1,y:a},{x:i-s,y:o},!1,!1)}else this.do(this.render.convertToPage(t));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(t,e,i,s=!0){const a=m.GetCordsFromTwoPoint(t,e),o=[];for(const l of a)o.push(()=>this.do(l));const d=this.getAnimationDuration(a.length);this.render.startAnimation(o,d,()=>{this.calc&&(i&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),s&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(t){this.state!==t&&(this.app.updateState(t),this.state=t)}getDirectionByPoint(t){const e=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(t.x-e.pageWidth<=e.width/5)return 1}else if(t.x<e.width/2)return 1;return 0}getAnimationDuration(t){const e=this.app.getSettings().flippingTime;return t>=1e3?e:t/1e3*e}checkDirection(t){return t===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...t){for(const e of t)if(this.state===e)return!0;return!1}isPointOnCorners(t){const e=this.getBoundsRect(),i=e.pageWidth,s=Math.sqrt(Math.pow(i,2)+Math.pow(e.height,2))/5,a=this.render.convertToBook(t);return a.x>0&&a.y>0&&a.x<e.width&&a.y<e.height&&(a.x<s||a.x>e.width-s)&&(a.y<s||a.y>e.height-s)}}class _{constructor(t,e){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=e,this.app=t;const i=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=i.exec(window.navigator.userAgent)!==null}render(t){if(this.animation!==null){const e=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);e<this.animation.frames.length?this.animation.frames[e]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=t,this.drawFrame()}start(){this.update();const t=e=>{this.render(e),requestAnimationFrame(t)};requestAnimationFrame(t)}startAnimation(t,e,i){this.finishAnimation(),this.animation={frames:t,duration:e,durationFrame:e/t.length,onAnimateEnd:i,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t))}calculateBoundsRect(){let t="landscape";const e=this.getBlockWidth(),i=e/2,s=this.getBlockHeight()/2,a=this.setting.width/this.setting.height;let o=this.setting.width,d=this.setting.height,l=i-o;return this.setting.size==="stretch"?(e<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(t="portrait"),o=t==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,o>this.setting.maxWidth&&(o=this.setting.maxWidth),d=o/a,d>this.getBlockHeight()&&(d=this.getBlockHeight(),o=d*a),l=t==="portrait"?i-o/2-o:i-o):e<2*o&&this.app.getSettings().usePortrait&&(t="portrait",l=i-o/2-o),this.boundsRect={left:l,top:s-d/2,width:2*o,height:d,pageWidth:o},t}setShadowData(t,e,i,s){if(!this.app.getSettings().drawShadow)return;const a=100*this.getSettings().maxShadowOpacity;this.shadow={pos:t,angle:e,width:3*this.getRect().pageWidth/4*i/100,opacity:(100-i)*a/100/100,direction:s,progress:2*i}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(t){this.pageRect=t}setDirection(t){this.direction=t}setRightPage(t){t!==null&&t.setOrientation(1),this.rightPage=t}setLeftPage(t){t!==null&&t.setOrientation(0),this.leftPage=t}setBottomPage(t){t!==null&&t.setOrientation(this.direction===1?0:1),this.bottomPage=t}setFlippingPage(t){t!==null&&t.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=t}convertToBook(t){const e=this.getRect();return{x:t.x-e.left,y:t.y-e.top}}isSafari(){return this.safari}convertToPage(t,e){e||(e=this.direction);const i=this.getRect();return{x:e===0?t.x-i.left-i.width/2:i.width/2-t.x+i.left,y:t.y-i.top}}convertToGlobal(t,e){if(e||(e=this.direction),t==null)return null;const i=this.getRect();return{x:e===0?t.x+i.left+i.width/2:i.width/2-t.x+i.left,y:t.y+i.top}}convertRectToGlobal(t,e){return e||(e=this.direction),{topLeft:this.convertToGlobal(t.topLeft,e),topRight:this.convertToGlobal(t.topRight,e),bottomLeft:this.convertToGlobal(t.bottomLeft,e),bottomRight:this.convertToGlobal(t.bottomRight,e)}}}class N extends _{constructor(t,e,i){super(t,e),this.canvas=i,this.ctx=i.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const t=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(t.left+t.pageWidth,t.top,t.width,t.height),this.ctx.clip())}drawBookShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const e=t.width/20;this.ctx.rect(t.left,t.top,t.width,t.height);const i={x:t.left+t.width/2-e/2,y:0};this.ctx.translate(i.x,i.y);const s=this.ctx.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(0, 0, 0, 0)"),s.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),s.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),s.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),s.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=s,this.ctx.fillRect(0,0,e,2*t.height),this.ctx.restore()}drawOuterShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t.left,t.top,t.width,t.height);const e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(e.x,e.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const i=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),i.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),i.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.shadow.width,2*t.height),this.ctx.restore()}drawInnerShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(i.topLeft.x,i.topLeft.y),this.ctx.lineTo(i.topRight.x,i.topRight.y),this.ctx.lineTo(i.bottomRight.x,i.bottomRight.y),this.ctx.lineTo(i.bottomLeft.x,i.bottomLeft.y),this.ctx.translate(e.x,e.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const s=3*this.shadow.width/4,a=this.ctx.createLinearGradient(0,0,s,0);this.shadow.direction===0?(this.ctx.translate(-s,-100),a.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),a.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),a.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),a.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),a.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,s,2*t.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class M{constructor(t,e,i){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=a=>{if(this.checkTarget(a.target)){const o=this.getMousePos(a.clientX,a.clientY);this.app.startUserTouch(o),a.preventDefault()}},this.onTouchStart=a=>{if(this.checkTarget(a.target)&&a.changedTouches.length>0){const o=a.changedTouches[0],d=this.getMousePos(o.clientX,o.clientY);this.touchPoint={point:d,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(d)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||a.preventDefault()}},this.onMouseUp=a=>{const o=this.getMousePos(a.clientX,a.clientY);this.app.userStop(o)},this.onMouseMove=a=>{const o=this.getMousePos(a.clientX,a.clientY);this.app.userMove(o,!1)},this.onTouchMove=a=>{if(a.changedTouches.length>0){const o=a.changedTouches[0],d=this.getMousePos(o.clientX,o.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-d.x)>10||this.app.getState()!=="read")&&a.cancelable&&this.app.userMove(d,!0),this.app.getState()!=="read"&&a.preventDefault()):this.app.userMove(d,!0)}},this.onTouchEnd=a=>{if(a.changedTouches.length>0){const o=a.changedTouches[0],d=this.getMousePos(o.clientX,o.clientY);let l=!1;if(this.touchPoint!==null){const g=d.x-this.touchPoint.point.x,p=Math.abs(d.y-this.touchPoint.point.y);Math.abs(g)>this.swipeDistance&&p<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(g>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),l=!0),this.touchPoint=null}this.app.userStop(d,l)}},this.parentElement=t,t.classList.add("stf__parent"),t.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=t.querySelector(".stf__wrapper"),this.app=e;const s=this.app.getSettings().usePortrait?1:2;t.style.minWidth=i.minWidth*s+"px",t.style.minHeight=i.minHeight+"px",i.size==="fixed"&&(t.style.minWidth=i.width*s+"px",t.style.minHeight=i.height+"px"),i.autoSize&&(t.style.width="100%",t.style.maxWidth=2*i.maxWidth+"px"),t.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=i.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(t){this.wrapper.classList.remove("--portrait","--landscape"),t==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(t,e){const i=this.distElement.getBoundingClientRect();return{x:t-i.left,y:e-i.top}}checkTarget(t){return!this.app.getSettings().clickEventForward||!["a","button"].includes(t.tagName.toLowerCase())}}class q extends M{constructor(t,e,i,s){super(t,e,i),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=t.querySelector(".stf__block"),this.items=s;for(const a of s)this.distElement.appendChild(a);this.setHandlers()}clear(){for(const t of this.items)this.parentElement.appendChild(t)}updateItems(t){this.removeHandlers(),this.distElement.innerHTML="";for(const e of t)this.distElement.appendChild(e);this.items=t,this.setHandlers()}update(){this.app.getRender().update()}}class E extends M{constructor(t,e,i){super(t,e,i),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=t.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const t=getComputedStyle(this.canvas),e=parseInt(t.getPropertyValue("width"),10),i=parseInt(t.getPropertyValue("height"),10);this.canvas.width=e,this.canvas.height=i}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class Z extends _{constructor(t,e,i){super(t,e),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=i,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
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
        `;i+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=i}drawInnerShadow(){const t=this.getRect(),e=3*this.shadow.width/4,i=this.getDirection()===0?e:0,s=this.getDirection()===0?"to left":"to right",a=this.convertToGlobal(this.shadow.pos),o=this.shadow.angle+3*Math.PI/2,d=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let l="polygon( ";for(const p of d){let A=this.getDirection()===1?{x:-p.x+this.shadow.pos.x,y:p.y-this.shadow.pos.y}:{x:p.x-this.shadow.pos.x,y:p.y-this.shadow.pos.y};A=m.GetRotatedPoint(A,{x:i,y:100},o),l+=A.x+"px "+A.y+"px, "}l=l.slice(0,-2),l+=")";const g=`
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
            transform: translate3d(${a.x-i}px, ${a.y-100}px, 0) rotate(${o}rad);
            clip-path: ${l};
            -webkit-clip-path: ${l};
        `;this.innerShadow.style.cssText=g}drawOuterShadow(){const t=this.getRect(),e=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.shadow.angle+3*Math.PI/2,s=this.getDirection()===1?this.shadow.width:0,a=this.getDirection()===0?"to right":"to left",o=[{x:0,y:0},{x:t.pageWidth,y:0},{x:t.pageWidth,y:t.height},{x:0,y:t.height}];let d="polygon( ";for(const g of o)if(g!==null){let p=this.getDirection()===1?{x:-g.x+this.shadow.pos.x,y:g.y-this.shadow.pos.y}:{x:g.x-this.shadow.pos.x,y:g.y-this.shadow.pos.y};p=m.GetRotatedPoint(p,{x:s,y:100},i),d+=p.x+"px "+p.y+"px, "}d=d.slice(0,-2),d+=")";const l=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*t.height}px;
            background: linear-gradient(${a}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${s}px 100px;
            transform: translate3d(${e.x-s}px, ${e.y-100}px, 0) rotate(${i}rad);
            clip-path: ${d};
            -webkit-clip-path: ${d};
        `;this.outerShadow.style.cssText=l}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const t=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(t))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const t of this.app.getPageCollection().getPages())t!==this.leftPage&&t!==this.rightPage&&t!==this.flippingPage&&t!==this.bottomPage&&(t.getElement().style.cssText="display: none"),t.getTemporaryCopy()!==this.flippingPage&&t.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class L{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(t){const e=this._default;if(Object.assign(e,t),e.size!=="stretch"&&e.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(e.width<=0||e.height<=0)throw new Error("Invalid width or height");if(e.flippingTime<=0)throw new Error("Invalid flipping time");return e.size==="stretch"?(e.minWidth<=0&&(e.minWidth=100),e.maxWidth<e.minWidth&&(e.maxWidth=2e3),e.minHeight<=0&&(e.minHeight=100),e.maxHeight<e.minHeight&&(e.maxHeight=2e3)):(e.minWidth=e.width,e.maxWidth=e.width,e.minHeight=e.height,e.maxHeight=e.height),e}}(function(h,t){t===void 0&&(t={});var e=t.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=h:s.appendChild(document.createTextNode(h))}})(`.stf__parent {
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
}`),b.PageFlip=class extends class{constructor(){this.events=new Map}on(h,t){return this.events.has(h)?this.events.get(h).push(t):this.events.set(h,[t]),this}off(h){this.events.delete(h)}trigger(h,t,e=null){if(this.events.has(h))for(const i of this.events.get(h))i({data:e,object:t})}}{constructor(h,t){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new L().getSettings(t),this.block=h}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(h){this.ui=new E(this.block,this,this.setting);const t=this.ui.getCanvas();this.render=new N(this,this.setting,t),this.flipController=new f(this.render,this),this.pages=new T(this,this.render,h),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(h){this.ui=new q(this.block,this,this.setting,h),this.render=new Z(this,this.setting,this.ui.getDistElement()),this.flipController=new f(this.render,this),this.pages=new y(this,this.render,this.ui.getDistElement(),h),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(h){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new T(this,this.render,h),this.pages.load(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}updateFromHtml(h){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new y(this,this.render,this.ui.getDistElement(),h),this.pages.load(),this.ui.updateItems(h),this.render.reload(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(h){this.pages.show(h)}flipNext(h="top"){this.flipController.flipNext(h)}flipPrev(h="top"){this.flipController.flipPrev(h)}flip(h,t="top"){this.flipController.flipToPage(h,t)}updateState(h){this.trigger("changeState",this,h)}updatePageIndex(h){this.trigger("flip",this,h)}updateOrientation(h){this.ui.setOrientationStyle(h),this.update(),this.trigger("changeOrientation",this,h)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(h){return this.pages.getPage(h)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(h){this.mousePosition=h,this.isUserTouch=!0,this.isUserMove=!1}userMove(h,t){this.isUserTouch||t||!this.setting.showPageCorners?this.isUserTouch&&m.GetDistanceBetweenTwoPoint(this.mousePosition,h)>5&&(this.isUserMove=!0,this.flipController.fold(h)):this.flipController.showCorner(h)}userStop(h,t=!1){this.isUserTouch&&(this.isUserTouch=!1,t||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(h)))}},Object.defineProperty(b,"__esModule",{value:!0})}))})(H,H.exports)),H.exports}var kt=Ct();const It=F.forwardRef((r,C)=>{const b=u.useRef(null),w=u.useRef([]),S=u.useRef(),[I,T]=u.useState([]);u.useImperativeHandle(C,()=>({pageFlip:()=>S.current}));const m=u.useCallback(()=>{S.current&&S.current.clear()},[]),k=u.useCallback(()=>{const y=S.current;y&&(y.off("flip"),y.off("changeOrientation"),y.off("changeState"),y.off("init"),y.off("update"))},[]);return u.useEffect(()=>{if(w.current=[],r.children){const y=F.Children.map(r.children,R=>F.cloneElement(R,{ref:f=>{f&&w.current.push(f)}}));(!r.renderOnlyPageLengthChange||I.length!==y.length)&&(y.length<I.length&&m(),T(y))}},[r.children]),u.useEffect(()=>{const y=()=>{const R=S.current;R&&(r.onFlip&&R.on("flip",f=>r.onFlip(f)),r.onChangeOrientation&&R.on("changeOrientation",f=>r.onChangeOrientation(f)),r.onChangeState&&R.on("changeState",f=>r.onChangeState(f)),r.onInit&&R.on("init",f=>r.onInit(f)),r.onUpdate&&R.on("update",f=>r.onUpdate(f)))};I.length>0&&w.current.length>0&&(k(),b.current&&!S.current&&(S.current=new kt.PageFlip(b.current,r)),S.current.getFlipController()?S.current.updateFromHtml(w.current):S.current.loadFromHTML(w.current),y())},[I]),F.createElement("div",{ref:b,className:r.className,style:r.style},I)}),Tt=F.memo(It);const At=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],Rt=z("chevron-first",At);const jt=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Mt=z("chevron-left",jt);const Dt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Bt=z("chevron-right",Dt);const Wt=[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]],Et=z("expand",Wt);const Lt=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],$t=z("shrink",Lt),Ot=c.section`
  width: min(92vw, 1240px);
  margin: 0 auto;
  color: ${r=>r.theme.pageText};
  font-family: 'Space Grotesk', sans-serif;

  &:fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: none;
    height: 100vh;
    padding: 3vh 2vw;
    background: ${r=>r.theme.surfaceSecondary};
  }

  &:fullscreen > div:first-child {
    flex: 1;
    height: auto;
  }
`,Ft=c.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$isFullscreen:r})=>r?"min(96vw, 1200px)":"min(92vw, 1016px)"};
  height: clamp(460px, 62vw, 720px);
  margin: 0 auto;
  overflow: hidden;
  outline: none;

  &:focus-visible {
    outline: 3px solid #e88d67;
    outline-offset: 3px;
  }

  .book-flipbook {
    position: relative;
    z-index: 1;
    transform: translateX(${({$coverPosition:r})=>r==="front"?"-25%":r==="back"?"25%":"0"});
    transition: transform 700ms ease;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1.4133;
  }
`,Ht=c.div`
  overflow: hidden;
  background: #fff;
`,zt=c.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({$isCover:r})=>r?"cover":"contain"};
  object-position: center;
  background: #fff;
  user-select: none;
  -webkit-user-drag: none;
`,rt=c.div`
  display: grid;
  place-items: center;
  min-height: 180px;
  padding: 2rem;
  color: ${r=>r.theme.pageMuted};
  text-align: center;
`,_t=c.div`
  display: grid;
  grid-template-columns: 44px 44px minmax(9rem, auto) 44px 44px;
  justify-content: center;
  align-items: center;
  width: ${({$isSinglePage:r,$isFullscreen:C})=>C?r?"min(96vw, 600px)":"min(96vw, 1200px)":r?"min(92vw, 508px)":"min(92vw, 1016px)"};
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
`,G=c.button`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid ${r=>r.theme.controlBorder};
  border-radius: 4px;
  background: ${r=>r.theme.uiSurfaceStrong};
  color: ${r=>r.theme.pageText};
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${r=>r.theme.pageText};
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
`,Nt=c.div`
  min-width: 9rem;
  color: ${r=>r.theme.pageText};
  font-size: 0.92rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
`,Gt=u.forwardRef(function({page:C,index:b,bookTitle:w},S){const I=b===0||C.isLast;return n.jsx(Ht,{ref:S,"data-density":b===0||C.isLast?"hard":"soft","data-cursor-hover":!0,children:n.jsx(zt,{src:C.src,alt:b===0?`${w} front cover`:C.isLast?`${w} back cover`:`${w} page ${b+1}`,width:C.width,height:C.height,loading:b<4?"eager":"lazy",draggable:"false",$isCover:I})})});function Ut({assetDirectory:r="composition-book",bookTitle:C="Composition art book"}){const b=u.useRef(null),w=u.useRef(null),S=u.useRef(null),I=u.useRef(!1),[T,m]=u.useState([]),[k,y]=u.useState(0),[R,f]=u.useState(!1),[_,N]=u.useState(!1),[M,q]=u.useState(!1),[E,Z]=u.useState(""),L=k===0,h=T.length>0&&k===T.length-1,t=L&&!R||_;u.useEffect(()=>{const l=new AbortController,g=`/${r}/`;return fetch(`${g}manifest.json`,{signal:l.signal}).then(p=>{if(!p.ok)throw new Error("The book could not be loaded.");return p.json()}).then(p=>{m(p.pages.map((A,B)=>({...A,src:`${g}${A.file}`,isLast:B===p.pages.length-1})))}).catch(p=>{p.name!=="AbortError"&&Z(p.message)}),()=>l.abort()},[r]),u.useEffect(()=>{const l=()=>{const g=document.fullscreenElement===w.current,p=I.current&&!g;I.current=g,q(g),p&&requestAnimationFrame(()=>{w.current?.scrollIntoView({block:"center",inline:"nearest"})})};return document.addEventListener("fullscreenchange",l),()=>document.removeEventListener("fullscreenchange",l)},[]);const e=()=>b.current?.pageFlip(),i=()=>e()?.turnToPage(0),s=()=>{k===1&&N(!0),e()?.flipPrev("top")},a=()=>{L&&f(!0),e()?.flipNext("top")},o=l=>{l.key==="ArrowLeft"&&(l.preventDefault(),s()),l.key==="ArrowRight"&&(l.preventDefault(),a())},d=async()=>{document.fullscreenElement?await document.exitFullscreen():await w.current?.requestFullscreen()};return n.jsxs(Ot,{ref:w,"aria-label":`${C} flip through`,children:[n.jsxs(Ft,{ref:S,tabIndex:0,onKeyDown:o,$isFullscreen:M,$isSinglePage:t||h,$coverPosition:t?"front":h?"back":"open",children:[E&&n.jsx(rt,{role:"alert",children:E}),!E&&T.length===0&&n.jsx(rt,{role:"status",children:"Loading book..."}),T.length>0&&n.jsx(Tt,{ref:b,startPage:k,width:424,height:600,size:"stretch",minWidth:120,maxWidth:M?600:508,minHeight:170,maxHeight:M?849:719,drawShadow:!1,showCover:!0,usePortrait:!1,mobileScrollSupport:!0,swipeDistance:24,flippingTime:700,onFlip:l=>y(l.data),onChangeState:l=>{l.data==="flipping"&&L&&f(!0),l.data==="read"&&(f(!1),N(!1))},className:"book-flipbook",children:T.map((l,g)=>n.jsx(Gt,{page:l,index:g,bookTitle:C},l.file))},M?"fullscreen":"embedded")]}),T.length>0&&n.jsxs(_t,{"aria-label":"Book controls",$isFullscreen:M,$isSinglePage:t||h,$coverPosition:t?"front":h?"back":"open",children:[n.jsx(G,{type:"button",onClick:i,disabled:k===0,"aria-label":"First page",title:"First page",children:n.jsx(Rt,{"aria-hidden":"true",size:22})}),n.jsx(G,{type:"button",onClick:s,disabled:k===0,"aria-label":"Previous page",title:"Previous page",children:n.jsx(Mt,{"aria-hidden":"true",size:22})}),n.jsxs(Nt,{"aria-live":"polite",children:["Page ",k+1," of ",T.length]}),n.jsx(G,{type:"button",onClick:a,disabled:k>=T.length-1,"aria-label":"Next page",title:"Next page",children:n.jsx(Bt,{"aria-hidden":"true",size:22})}),n.jsx(G,{type:"button",onClick:d,"aria-label":M?"Exit fullscreen":"View fullscreen",title:M?"Exit fullscreen":"View fullscreen",children:M?n.jsx($t,{"aria-hidden":"true",size:20}):n.jsx(Et,{"aria-hidden":"true",size:20})})]})]})}const qt="/assets/Composition-BackCover-Pt.2-01-CgJGr0YY.jpg",ht="/assets/Composition-BackCover-Pt.2-01-ClPDHp8f.webp",lt="/assets/Composition-BackCover-Pt.2-01-Brw18o1R.avif",Zt="/assets/Composition-BackCover-Pt.2-01-640-hLwNqpV9.webp",Vt="/assets/Composition-BackCover-Pt.2-01-960-0YCK3KpW.webp",Yt="/assets/Composition-BackCover-Pt.2-01-640-DJc-I_AQ.avif",Xt="/assets/Composition-BackCover-Pt.2-01-960-DjxWYxI5.avif",Kt="/assets/Render1-DT-g5NKH.png",Jt="/assets/Render1-CPYa-0q4.webp",Qt="/assets/Render1-DOs6TUJE.avif",dt="/assets/Artbook-CTrBke0P.png",ct="/assets/Artbook-4LqNfgyx.webp",gt="/assets/Artbook-qr5jOApA.avif",te="/assets/Composition-Etching-2026-y8EAzUrN.jpg",ee="/assets/Composition-Etching-2026-DRtZwhGl.webp",ie="/assets/Composition-Etching-2026-DPeLH0oV.avif",se="/assets/Orbital-Me_evN6P.jpg",ne="/assets/Orbital-MSHexiyD.webp",ae="/assets/Orbital-kkd1dZ4d.avif",oe="/assets/Spraypaintwash-BbPvaVYI.png",re="/assets/Spraypaintwash-BaOYkJyw.webp",he="/assets/Spraypaintwash-v7LuXuaa.avif",le="/assets/Render2-BeFVEg4T.png",de="/assets/Render2-BFuydU6r.webp",ce="/assets/Render2-DoNAMUHJ.avif",ge="/assets/Twin1-D2RWvRgs.jpeg",pe="/assets/Twin1-Ekj5P1xU.webp",me="/assets/Twin1-BsV_5Kc4.avif",ue="/assets/Twin2-CDf_Ciy4.jpeg",we="/assets/Twin2-Ct4ksB9p.webp",fe="/assets/Twin2-DIgZcP_8.avif",xe="/assets/Staircases-X99gJTOY.jpg",ve="/assets/Staircases-rPaNQ9T8.webp",ye="/assets/Staircases-CntQHqy2.avif",be="/assets/heartwhite-hmQhQCSU.jpeg",Se="/assets/heartwhite-BY7Arldd.webp",Pe="/assets/heartwhite-Deen9ZYa.avif",Ce="/assets/heartblack-BNrbkkGC.jpg",ke="/assets/heartblack-BDj6PpTZ.webp",Ie="/assets/heartblack-BM5GOsEM.avif",Te="/assets/Birds-BRR20DEX.jpg",Ae="/assets/Birds-BfTLwFSA.webp",Re="/assets/Birds-CpIRV6cj.avif",je="/assets/Brooklyn-pKXeBM0d.jpg",Me="/assets/Brooklyn-CDo2RsPc.webp",De="/assets/Brooklyn-B3Xxez07.avif",Be="/assets/Coney-XynOADlt.jpg",We="/assets/Coney-amO18Ojw.webp",Ee="/assets/Coney-BbkJzuhU.avif",Le="/assets/Brooklyn2-BVlZQUhO.jpg",$e="/assets/Brooklyn2-BOjlmPf4.webp",Oe="/assets/Brooklyn2-hysoQXg9.avif",Fe="/assets/Render4-CUv_OZcU.png",He="/assets/Render4-BbP-SCPU.webp",ze="/assets/Render4-czE6f-R8.avif",_e="/assets/Rug-Do3b2lPl.jpg",Ne="/assets/Rug-DNTpYrqu.webp",Ge="/assets/Rug-qk7_00KP.avif",Ue="/assets/Mash1-C6rAcNzX.png",qe="/assets/Mash1-By186HQs.webp",Ze="/assets/Mash1-CD7JNTpE.avif",Ve="/assets/Mash2-Dqi8iSdT.png",Ye="/assets/Mash2-BhSatqSs.webp",Xe="/assets/Mash2-DatWVgGz.avif",Ke="/assets/Render5-DDVrXzlj.png",Je="/assets/Render5-8-OqZTM_.webp",Qe="/assets/Render5-D__NT6lp.avif",ti="/assets/Mash3-hEAJGZMt.png",ei="/assets/Mash3-CfssUcL-.webp",ii="/assets/Mash3-BzVVQDAv.avif",si="/assets/Mash4-DJRwDavu.png",ni="/assets/Mash4-voIqPWzH.webp",ai="/assets/Mash4-CfZ6Zm83.avif",oi="/assets/Mattos-cG9NEt7H.png",ri="/assets/Mattos-DpEAIyko.webp",hi="/assets/Mattos-CvCWgofy.avif",li="/assets/No.3-C03FbQUH.png",di="/assets/No.3-DZfy37SG.webp",ci="/assets/No.3-DYCAAtZK.avif",gi="/assets/Grain-BEUj0pKY.jpg",pi="/assets/Grain-gPTL1VTa.webp",mi="/assets/Grain-DXHUqFdd.avif",pt=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],ui=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${r=>r.theme.backgroundTwo};
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
`,wi=c.img`
  background-color: ${r=>r.theme.backgroundTwo};
  width: 54vw;
  max-width: 90vw; /* prevents overflow on small screens */
  height: auto;

  @media (max-width: 850px) {
    width: 80vw; /* scale up a bit relative to smaller screens */
  }
`,$=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${r=>r.theme.backgroundTwo};
  padding: var(--space-section-compact) 0;
`,O=c.img`
  width: min(74vw, 1180px);
  max-width: 92vw;
  height: auto;
  display: block;
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 90vw;
  }
`,fi=c.a`
  width: min(88vw, 72ch);
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: clamp(16px, 2vw, 24px);
  align-items: center;
  color: inherit;
  text-decoration: none;
  background: ${r=>r.theme.narrativeBackground};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,xi=c.img`
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 9;
    min-height: 0;
  }
`,vi=c.div`
  padding: clamp(1.4rem, 2.4vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,yi=c.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.18rem, 1.45vw, 1.45rem);
  font-variation-settings: 'SOFT' 45, 'WONK' 1;
  line-height: 1.12;
  color: ${r=>r.theme.narrativeText};
`,bi=c.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${r=>r.theme.pageMuted};
`,Si=c.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${r=>r.theme.narrativeText};
`,W=c.img`
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
`,Pi=c(W)`
  grid-row-start: 3;
`,Ci=c(W)`
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
`;const U=c.img`
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
`,Y=c.div`
  grid-row-start: 2;
  grid-column: 1 / span 2;
  justify-self: start;
  color: ${r=>r.theme.narrativeText};
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
`,ki=c.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${r=>r.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,Ii=c.div`
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
`,Ti=c.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: ${r=>r.Grids};
padding-top: 5vh;
background-color:${r=>r.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`,X=c.div`
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
  background-color: ${r=>r.theme.narrativeBackground};

  & > ${W},
  & > ${U} {
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
`,Ai=c.div`
  display: grid;
  grid-template-columns: 10vw 40vw 40vw 10vw;
  grid-template-rows: auto auto auto auto auto auto;
  row-gap: 3ch;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${r=>r.theme.narrativeBackground};

  @media (max-width: 830px) {
    grid-template-columns: 100vw;
    grid-template-rows: auto;
    row-gap: 2ch;
    padding: var(--space-section-compact) 0;
  }
`,Ri=c.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${r=>r.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
    height: auto;
    row-gap: 2ch;
}
`,ji=c.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color:${r=>r.theme.narrativeBackground};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto;
    height: auto;
    row-gap: 2ch;
}
`,K=c.div`
  grid-column-start: 3;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7.5vw;
  padding-right: 6vw;
  color: ${r=>r.theme.narrativeText};

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
`,Mi=c(K)`
  grid-row-start: 3;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,Di=c(K)`
  grid-row-start: 5;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,x=c.h1`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 2.5rem;
  font-variation-settings: 'SOFT' 55, 'WONK' 1;
  line-height: 1.05;
  margin: 0 0 0.65rem 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1.8rem; }
  @media(max-width: 830px) { font-size: 1.4rem; }
`,v=c.h3`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  margin: 0 0 1rem 0;  // spacing below year
  color: inherit;

  @media(max-width: 830px) { font-size: 0.78rem; }
`,mt=c.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2; // tighter line-height for description
  margin: 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1rem; }
  @media(max-width: 830px) { font-size: 0.9rem; }
`,Bi=c.div`
  font-family: 'Space Grotesk', sans-serif;
  color: ${r=>r.theme.narrativeText};
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
`;function Wi(){u.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const r=wt(vt());return n.jsxs("div",{children:[n.jsx("style",{children:`
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
`}),n.jsx(ft,{title:"Composition | Zack MacTavish Art & Design",description:"Composition is Zack MacTavish's first solo show, using the composition notebook as a metaphor for self-reflection through paintings, photographs, collages, rugs, and a self-published book made from 2019 to 2021.",image:ut,url:r,keywords:["composition","painting","render","photography"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:pt,favicons:[{rel:"icon",sizes:"16x16",href:J},{rel:"icon",sizes:"32x32",href:Q},{rel:"icon",sizes:"256x256",href:tt},{rel:"icon",sizes:"512x512",href:V},{rel:"apple-touch-icon",sizes:"180x180",href:et},{rel:"icon",sizes:"192x192",href:it},{rel:"icon",sizes:"512x512",href:V},{rel:"icon",type:"image/png",sizes:"16x16",href:J},{rel:"icon",type:"image/png",sizes:"32x32",href:Q},{rel:"apple-touch-icon",sizes:"180x180",href:et},{rel:"icon",type:"image/png",sizes:"192x192",href:it},{rel:"icon",type:"image/png",sizes:"256x256",href:tt},{rel:"icon",type:"image/png",sizes:"512x512",href:V},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Composition Series",url:r,author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:pt}}}),n.jsx("h1",{style:xt,children:"Composition by Zack MacTavish"}),n.jsx(ui,{children:n.jsx(wi,{as:j,src:qt,webpSrc:ht,webpSrcSet:`${Zt} 640w, ${Vt} 960w, ${ht} 2200w`,avifSrc:lt,avifSrcSet:`${Yt} 640w, ${Xt} 960w, ${lt} 2200w`,sizes:"(max-width: 850px) 80vw, 54vw",alt:"Composition notebook cover",width:5620,height:3685,loading:"eager",decoding:"sync",fetchPriority:"high"})}),n.jsxs(st,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2rem"},children:[n.jsx(nt,{style:{width:"min(88vw, 72ch)",padding:0,alignItems:"stretch"},children:n.jsx(at,{style:{maxWidth:"100%"},children:"Composition was my first solo art show and uses the composition notebook as a metaphor for self-reflection across the places I have lived. The series grew out of moving more than 21 times through Rhode Island, Massachusetts, Illinois, New York, Oregon, and Pennsylvania, and became a way to document how environment, memory, and personal growth accumulate over time. Made between 2019 and 2021, the show brought together paintings, a graphite drawing, hand-tufted rugs, photographs, physical and digital collages, and a self-published book."})}),n.jsxs(fi,{href:"https://medium.com/@zmactavish/my-first-solo-art-show-de7ac72b054f",target:"_blank",rel:"noreferrer",children:[n.jsx(xi,{as:j,src:dt,webpSrc:ct,avifSrc:gt,alt:"Composition art book and blog post preview"}),n.jsxs(vi,{children:[n.jsx(yi,{children:"Read more about Composition"}),n.jsx(bi,{children:"A short essay on the show, the series, and how it led into my current body of work."}),n.jsx(Si,{children:"Read on Medium"})]})]})]}),n.jsx($,{children:n.jsx(O,{as:j,src:Kt,webpSrc:Jt,avifSrc:Qt,alt:"Composition render one"})}),n.jsxs("div",{style:{backgroundColor:"var(--surface-secondary)",width:"100%",padding:"var(--space-section-spacious) 0"},children:[n.jsx(P,{className:"tight-split",imageSrc:dt,imageWebp:ct,imageAvif:gt,imageAlt:"Composition artist book",children:n.jsx(Bi,{children:"I self-published a limited edition book for Composition. All 30 copies sold during the run of the series, and the book extended the exhibition's interest in journaling, documentation, and building an archive around the work."})}),n.jsx("div",{style:{width:"100%",background:"var(--surface-secondary)",padding:"var(--space-section-compact) 0"},children:n.jsx(Ut,{})})]}),n.jsxs(D,{children:[n.jsxs(P,{imageMode:"framed",imageSrc:te,imageWebp:ee,imageAvif:ie,imageAlt:"Untitled etching by Zachary MacTavish, 2026",children:[n.jsx(x,{children:"UNTITLED ETCHING"}),n.jsx(v,{children:"2026"}),n.jsx(mt,{children:"Etching"})]}),n.jsxs(P,{imageMode:"framed",imageSrc:se,imageWebp:ne,imageAvif:ae,imageAlt:"ORBITAL mixed-media work from Composition",children:[n.jsx(x,{children:"ORBITAL"}),n.jsx(v,{children:"2021"})]}),n.jsxs(P,{imageMode:"framed",imageSrc:oe,imageWebp:re,imageAvif:he,imageAlt:"Erasure 1",children:[n.jsx(x,{children:"ERASURE I"}),n.jsx(v,{children:"2021"})]})]}),n.jsx($,{children:n.jsx(O,{as:j,src:le,webpSrc:de,avifSrc:ce,alt:"Composition render 2"})}),n.jsx(D,{children:n.jsxs(P,{imageMode:"framed",imageSrc:xe,imageWebp:ve,imageAvif:ye,imageAlt:"Staircases",children:[n.jsx(x,{children:"STAIRCASES"}),n.jsx(v,{children:"2021"})]})}),n.jsxs(X,{children:[n.jsx(W,{as:j,src:be,webpSrc:Se,avifSrc:Pe,alt:"Composition X detail white"}),n.jsx(U,{as:j,src:Ce,webpSrc:ke,avifSrc:Ie,alt:"Composition X detail black"}),n.jsxs(Y,{children:[n.jsx(x,{children:"COMPOSITION X"}),n.jsx(v,{children:"2021"})]})]}),n.jsx(j,{src:Te,webpSrc:Ae,avifSrc:Re,alt:"Birds composition",style:{width:"100vw",height:"100vh",objectFit:"cover",objectPosition:"center",display:"block"}}),n.jsxs(D,{children:[n.jsxs(P,{imageSrc:Be,imageWebp:We,imageAvif:Ee,imageAlt:"Coney Island, NY",children:[n.jsx(x,{children:"CONEY ISLAND, NY"}),n.jsx(v,{children:"2021"})]}),n.jsxs(P,{imageSrc:je,imageWebp:Me,imageAvif:De,imageAlt:"Brooklyn, NY I",children:[n.jsx(x,{children:"BROOKLYN, NY I"}),n.jsx(v,{children:"2021"})]}),n.jsxs(P,{imageSrc:Le,imageWebp:$e,imageAvif:Oe,imageAlt:"Brooklyn, NY II",children:[n.jsx(x,{children:"BROOKLYN, NY II"}),n.jsx(v,{children:"2021"})]})]}),n.jsx($,{children:n.jsx(O,{as:j,src:Fe,webpSrc:He,avifSrc:ze,alt:"Composition render 4"})}),n.jsx(D,{children:n.jsxs(P,{imageSrc:_e,imageWebp:Ne,imageAvif:Ge,imageAlt:"Rug I",children:[n.jsx(x,{children:"RUG I"}),n.jsx(v,{children:"2021"})]})}),n.jsxs(D,{children:[n.jsxs(P,{imageMode:"framed",imageSrc:Ue,imageWebp:qe,imageAvif:Ze,imageAlt:"Composition III",children:[n.jsx(x,{children:"COMPOSITION III"}),n.jsx(v,{children:"2019"})]}),n.jsxs(P,{imageMode:"framed",imageSrc:Ve,imageWebp:Ye,imageAvif:Xe,imageAlt:"Composition IV",children:[n.jsx(x,{children:"COMPOSITION IV"}),n.jsx(v,{children:"2019"})]})]}),n.jsx($,{children:n.jsx(O,{as:j,src:Ke,webpSrc:Je,avifSrc:Qe,alt:"Composition render 5"})}),n.jsxs(D,{children:[n.jsxs(P,{imageMode:"framed",imageSrc:ti,imageWebp:ei,imageAvif:ii,imageAlt:"Composition V",children:[n.jsx(x,{children:"COMPOSITION V"}),n.jsx(v,{children:"2019"})]}),n.jsxs(P,{imageMode:"framed",imageSrc:si,imageWebp:ni,imageAvif:ai,imageAlt:"Composition VI",children:[n.jsx(x,{children:"COMPOSITION VI"}),n.jsx(v,{children:"2019"})]}),n.jsxs(P,{imageMode:"framed",imageSrc:St,imageWebp:bt,imageAvif:yt,imageAlt:"Composition VII",children:[n.jsx(x,{children:"COMPOSITION VII"}),n.jsx(v,{children:"2020"})]})]}),n.jsx($,{children:n.jsx(O,{as:j,src:oi,webpSrc:ri,avifSrc:hi,alt:"Mattos collage"})}),n.jsx(D,{children:n.jsxs(P,{imageMode:"framed",imageSrc:li,imageWebp:di,imageAvif:ci,imageAlt:"Composition I",children:[n.jsx(x,{children:"COMPOSITION I"}),n.jsx(v,{children:"2018"})]})}),n.jsx(D,{children:n.jsxs(P,{imageMode:"framed",imageSrc:gi,imageWebp:pi,imageAvif:mi,imageAlt:"GRAIN mixed-media work from Composition",children:[n.jsx(x,{children:"GRAIN"}),n.jsx(v,{children:"2021"})]})}),n.jsxs(X,{children:[n.jsx(W,{as:j,src:ge,webpSrc:pe,avifSrc:me,alt:"Ephemeral I"}),n.jsx(U,{as:j,src:ue,webpSrc:we,avifSrc:fe,alt:"Ephemeral II"}),n.jsxs(Y,{children:[n.jsx(x,{children:"EPHEMERAL I & II"}),n.jsx(v,{children:"2021"})]})]}),n.jsx(st,{children:n.jsx(nt,{children:n.jsx(at,{children:"Over the course of Composition, I started to understand that the work was pointing me beyond transition itself and toward the more permanent fixtures that shape a life: the homes I have lived in, the people around me, and the hidden histories carried by those spaces. That realization became the foundation for my current body of work, which turns more fully toward quilting, embroidery, collage, painting, and bookmaking as forms of archive. What Composition began to explore through notebooks, photographs, and fragments of place has expanded into a longer investigation of family, memory, identity, and preservation."})})})]})}const _i=Object.freeze(Object.defineProperty({__proto__:null,ArtDesc:mt,ArtHeader:x,ArtSectionThreeone:ji,ArtSectionThreetwo:Ri,ArtSectionthree:Ti,ArtSectionthreeog:Ai,ArtSectiontwins:X,ArtText:K,ArtTextthree:Di,ArtTexttwo:Mi,ArtYear:v,FullBg:ki,GridRowThree:Ci,GridRowTwo:Pi,Orbital:W,ParagraphFour:Ii,TwinTwo:U,TwinsText:Y,default:Wi},Symbol.toStringTag,{value:"Module"}));export{x as A,Ut as B,_i as C,ki as F,Ii as P,v as a,mt as b};
