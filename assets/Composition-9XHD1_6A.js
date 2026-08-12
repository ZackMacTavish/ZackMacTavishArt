import{R as ee,b as j,j as e}from"./react-three-BKJczYnz.js";import{S as pe,f as se,a as ie,b as ae,i as oe,c as ne,d as Z,o as ge,e as Y,v as me,I as u,G as Ue}from"./website-logoresolutions-1200x630-B7p4nYis.js";import{R as r}from"./ResponsiveImage-ER0KLJEM.js";import{l as p,u as U}from"./index-01WR7sWp.js";import{i as Ke,a as Ve,b as Je,c as Xe,d as Qe,e as be,f as et,g as tt,h as ye,j as st,k as it,l as at,m as Se,n as ot,o as nt,p as je,q as rt,r as lt,s as ct,t as ht}from"./Mash5-CYe4zDdQ.js";import{N as dt}from"./About-Br4qS03R.js";var te={exports:{}},pt=te.exports,Ae;function gt(){return Ae||(Ae=1,(function(l,v){(function(S,m){m(v)})(pt,(function(S){class m{constructor(t,s){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=s,this.nowDrawingDensity=this.createdDensity,this.render=t}setDensity(t){this.createdDensity=t,this.nowDrawingDensity=t}setDrawingDensity(t){this.nowDrawingDensity=t}setPosition(t){this.state.position=t}setAngle(t){this.state.angle=t}setArea(t){this.state.area=t}setHardDrawingAngle(t){this.state.hardDrawingAngle=t}setHardAngle(t){this.state.hardAngle=t,this.state.hardDrawingAngle=t}setOrientation(t){this.orientation=t}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class b extends m{constructor(t,s,i){super(t,i),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=s}draw(t){const s=this.render.getContext(),i=this.render.convertToGlobal(this.state.position),a=this.render.getRect().pageWidth,o=this.render.getRect().height;s.save(),s.translate(i.x,i.y),s.beginPath();for(let n of this.state.area)n!==null&&(n=this.render.convertToGlobal(n),s.lineTo(n.x-i.x,n.y-i.y));s.rotate(this.state.angle),s.clip(),this.isLoad?s.drawImage(this.image,0,0,a,o):this.drawLoader(s,{x:0,y:0},a,o),s.restore()}simpleDraw(t){const s=this.render.getRect(),i=this.render.getContext(),a=s.pageWidth,o=s.height,n=t===1?s.left+s.pageWidth:s.left,d=s.top;this.isLoad?i.drawImage(this.image,n,d,a,o):this.drawLoader(i,{x:n,y:d},a,o)}drawLoader(t,s,i,a){t.beginPath(),t.strokeStyle="rgb(200, 200, 200)",t.fillStyle="rgb(255, 255, 255)",t.lineWidth=1,t.rect(s.x+1,s.y+1,i-1,a-1),t.stroke(),t.fill();const o={x:s.x+i/2,y:s.y+a/2};t.beginPath(),t.lineWidth=10,t.arc(o.x,o.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),t.stroke(),t.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class h{constructor(t,s){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=s,this.app=t,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let s=0;s<this.pages.length;s++)this.portraitSpread.push([s]);let t=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([t]),t++);for(let s=t;s<this.pages.length;s+=2)s<this.pages.length-1?this.landscapeSpread.push([s,s+1]):(this.landscapeSpread.push([s]),this.pages[s].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(t){const s=this.getSpread();for(let i=0;i<s.length;i++)if(t===s[i][0]||t===s[i][1])return i;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(t){if(t>=0&&t<this.pages.length)return this.pages[t];throw new Error("Invalid page number")}nextBy(t){const s=this.pages.indexOf(t);return s<this.pages.length-1?this.pages[s+1]:null}prevBy(t){const s=this.pages.indexOf(t);return s>0?this.pages[s-1]:null}getFlippingPage(t){const s=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[s].newTemporaryCopy():this.pages[s-1];{const i=t===0?this.getSpread()[s+1]:this.getSpread()[s-1];return i.length===1||t===0?this.pages[i[0]]:this.pages[i[1]]}}getBottomPage(t){const s=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[s+1]:this.pages[s-1];{const i=t===0?this.getSpread()[s+1]:this.getSpread()[s-1];return i.length===1?this.pages[i[0]]:t===0?this.pages[i[1]]:this.pages[i[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(t=null){if(t===null&&(t=this.currentPageIndex),t<0||t>=this.pages.length)return;const s=this.getSpreadIndexByPage(t);s!==null&&(this.currentSpreadIndex=s,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(t){if(!(t>=0&&t<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=t}showSpread(){const t=this.getSpread()[this.currentSpreadIndex];t.length===2?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(this.pages[t[1]])):this.render.getOrientation()==="landscape"&&t[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[t[0]])),this.currentPageIndex=t[0],this.app.updatePageIndex(this.currentPageIndex)}}class A extends h{constructor(t,s,i){super(t,s),this.imagesHref=i}load(){for(const t of this.imagesHref){const s=new b(this.render,t,"soft");s.load(),this.pages.push(s)}this.createSpread()}}class x{static GetDistanceBetweenTwoPoint(t,s){return t===null||s===null?1/0:Math.sqrt(Math.pow(s.x-t.x,2)+Math.pow(s.y-t.y,2))}static GetSegmentLength(t){return x.GetDistanceBetweenTwoPoint(t[0],t[1])}static GetAngleBetweenTwoLine(t,s){const i=t[0].y-t[1].y,a=s[0].y-s[1].y,o=t[1].x-t[0].x,n=s[1].x-s[0].x;return Math.acos((i*a+o*n)/(Math.sqrt(i*i+o*o)*Math.sqrt(a*a+n*n)))}static PointInRect(t,s){return s===null?null:s.x>=t.left&&s.x<=t.width+t.left&&s.y>=t.top&&s.y<=t.top+t.height?s:null}static GetRotatedPoint(t,s,i){return{x:t.x*Math.cos(i)+t.y*Math.sin(i)+s.x,y:t.y*Math.cos(i)-t.x*Math.sin(i)+s.y}}static LimitPointToCircle(t,s,i){if(x.GetDistanceBetweenTwoPoint(t,i)<=s)return i;const a=t.x,o=t.y,n=i.x,d=i.y;let w=Math.sqrt(Math.pow(s,2)*Math.pow(a-n,2)/(Math.pow(a-n,2)+Math.pow(o-d,2)))+a;i.x<0&&(w*=-1);let P=(w-a)*(o-d)/(a-n)+o;return a-n+o===0&&(P=s),{x:w,y:P}}static GetIntersectBetweenTwoSegment(t,s,i){return x.PointInRect(t,x.GetIntersectBeetwenTwoLine(s,i))}static GetIntersectBeetwenTwoLine(t,s){const i=t[0].y-t[1].y,a=s[0].y-s[1].y,o=t[1].x-t[0].x,n=s[1].x-s[0].x,d=t[0].x*t[1].y-t[1].x*t[0].y,w=s[0].x*s[1].y-s[1].x*s[0].y,P=i*w-a*d,B=o*w-n*d,R=-(d*n-w*o)/(i*n-a*o),V=-(i*w-a*d)/(i*n-a*o);if(isFinite(R)&&isFinite(V))return{x:R,y:V};if(Math.abs(P-B)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(t,s){const i=Math.abs(t.x-s.x),a=Math.abs(t.y-s.y),o=Math.max(i,a),n=[t];function d(w,P,B,R,V){return P>w?w+V*(B/R):P<w?w-V*(B/R):w}for(let w=1;w<=o;w+=1)n.push({x:d(t.x,s.x,i,o,w),y:d(t.y,s.y,a,o,w)});return n}}class D extends m{constructor(t,s,i){super(t,i),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=s,this.element.classList.add("stf__item"),this.element.classList.add("--"+i)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new D(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(t){const s=t||this.nowDrawingDensity,i=this.render.convertToGlobal(this.state.position),a=this.render.getRect().pageWidth,o=this.render.getRect().height;this.element.classList.remove("--simple");const n=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${a}px;
            height: ${o}px;
        `;s==="hard"?this.drawHard(n):this.drawSoft(i,n)}drawHard(t=""){const s=this.render.getRect().left+this.render.getRect().width/2,i=this.state.hardDrawingAngle,a=t+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${i}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${s}px, 0, 0) rotateY(${i}deg);`);this.element.style.cssText=a}drawSoft(t,s=""){let i="polygon( ";for(const o of this.state.area)if(o!==null){let n=this.render.getDirection()===1?{x:-o.x+this.state.position.x,y:o.y-this.state.position.y}:{x:o.x-this.state.position.x,y:o.y-this.state.position.y};n=x.GetRotatedPoint(n,{x:0,y:0},this.state.angle),i+=n.x+"px "+n.y+"px, "}i=i.slice(0,-2),i+=")";const a=s+`transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${t.x}px, ${t.y}px);`:`transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=a}simpleDraw(t){const s=this.render.getRect(),i=s.pageWidth,a=s.height,o=t===1?s.left+s.pageWidth:s.left,n=s.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${a}px; 
            left: ${o}px; 
            top: ${n}px; 
            width: ${i}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(t){super.setOrientation(t),this.element.classList.remove("--left","--right"),this.element.classList.add(t===1?"--right":"--left")}setDrawingDensity(t){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+t),super.setDrawingDensity(t)}}class C extends h{constructor(t,s,i,a){super(t,s),this.element=i,this.pagesElement=a}load(){for(const t of this.pagesElement){const s=new D(this.render,t,t.dataset.density==="hard"?"hard":"soft");s.load(),this.pages.push(s)}this.createSpread()}}class W{constructor(t,s,i,a){this.direction=t,this.corner=s,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(i,10),this.pageHeight=parseInt(a,10)}calc(t){try{return this.position=this.calcAngleAndPosition(t),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const t=[];let s=!1;return t.push(this.rect.topLeft),t.push(this.topIntersectPoint),this.sideIntersectPoint===null?s=!0:(t.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(s=!1)),t.push(this.bottomIntersectPoint),(s||this.corner==="bottom")&&t.push(this.rect.bottomLeft),t}getBottomClipArea(){const t=[];return t.push(this.topIntersectPoint),this.corner==="top"?t.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&t.push({x:this.pageWidth,y:0}),t.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?x.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&t.push(this.sideIntersectPoint):this.corner==="top"&&t.push({x:this.pageWidth,y:this.pageHeight}),t.push(this.bottomIntersectPoint),t.push(this.topIntersectPoint),t}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const t=x.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?t:Math.PI-t}calcAngleAndPosition(t){let s=t;if(this.updateAngleAndGeometry(s),s=this.corner==="top"?this.checkPositionAtCenterLine(s,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(s,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(s.x-this.pageWidth)<1&&Math.abs(s.y)<1)throw new Error("Point is too small");return s}updateAngleAndGeometry(t){this.angle=this.calculateAngle(t),this.rect=this.getPageRect(t)}calculateAngle(t){const s=this.pageWidth-t.x+1,i=this.corner==="bottom"?this.pageHeight-t.y:t.y;let a=2*Math.acos(s/Math.sqrt(i*i+s*s));i<0&&(a=-a);const o=Math.PI-a;if(!isFinite(a)||o>=0&&o<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(a=-a),a}getPageRect(t){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],t):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],t)}getRectFromBasePoint(t,s){return{topLeft:this.getRotatedPoint(t[0],s),topRight:this.getRotatedPoint(t[1],s),bottomLeft:this.getRotatedPoint(t[2],s),bottomRight:this.getRotatedPoint(t[3],s)}}getRotatedPoint(t,s){return{x:t.x*Math.cos(this.angle)+t.y*Math.sin(this.angle)+s.x,y:t.y*Math.cos(this.angle)-t.x*Math.sin(this.angle)+s.y}}calculateIntersectPoint(t){const s={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=x.GetIntersectBetweenTwoSegment(s,[t,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=x.GetIntersectBetweenTwoSegment(s,[t,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=x.GetIntersectBetweenTwoSegment(s,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=x.GetIntersectBetweenTwoSegment(s,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=x.GetIntersectBetweenTwoSegment(s,[t,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=x.GetIntersectBetweenTwoSegment(s,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(t,s,i){let a=t;const o=x.LimitPointToCircle(s,this.pageWidth,a);a!==o&&(a=o,this.updateAngleAndGeometry(a));const n=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let d=this.rect.bottomRight,w=this.rect.topLeft;if(this.corner==="bottom"&&(d=this.rect.topRight,w=this.rect.bottomLeft),d.x<=0){const P=x.LimitPointToCircle(i,n,w);P!==a&&(a=P,this.updateAngleAndGeometry(a))}return a}getSegmentToShadowLine(){const t=this.getShadowStartPoint();return[t,t!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class k{constructor(t,s){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=t,this.app=s}fold(t){this.setState("user_fold"),this.calc===null&&this.start(t),this.do(this.render.convertToPage(t))}flip(t){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(t)||(this.calc!==null&&this.render.finishAnimation(),!this.start(t)))return;const s=this.getBoundsRect();this.setState("flipping");const i=s.height/10,a=this.calc.getCorner()==="bottom"?s.height-i:i,o=this.calc.getCorner()==="bottom"?s.height:0;this.calc.calc({x:s.pageWidth-i,y:a}),this.animateFlippingTo({x:s.pageWidth-i,y:a},{x:-s.pageWidth,y:o},!0)}start(t){this.reset();const s=this.render.convertToBook(t),i=this.getBoundsRect(),a=this.getDirectionByPoint(s),o=s.y>=i.height/2?"bottom":"top";if(!this.checkDirection(a))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(a),this.bottomPage=this.app.getPageCollection().getBottomPage(a),this.render.getOrientation()==="landscape")if(a===1){const n=this.app.getPageCollection().nextBy(this.flippingPage);n!==null&&this.flippingPage.getDensity()!==n.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),n.setDrawingDensity("hard"))}else{const n=this.app.getPageCollection().prevBy(this.flippingPage);n!==null&&this.flippingPage.getDensity()!==n.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),n.setDrawingDensity("hard"))}return this.render.setDirection(a),this.calc=new W(a,o,i.pageWidth.toString(10),i.height.toString(10)),!0}catch{return!1}}do(t){if(this.calc!==null&&this.calc.calc(t)){const s=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*s)/100):this.flippingPage.setHardAngle(-90*(200-2*s)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),s,this.calc.getDirection())}}flipToPage(t,s){const i=this.app.getPageCollection().getCurrentSpreadIndex(),a=this.app.getPageCollection().getSpreadIndexByPage(t);try{a>i&&(this.app.getPageCollection().setCurrentSpreadIndex(a-1),this.flipNext(s)),a<i&&(this.app.getPageCollection().setCurrentSpreadIndex(a+1),this.flipPrev(s))}catch{}}flipNext(t){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:t==="top"?1:this.render.getRect().height-2})}flipPrev(t){this.flip({x:10,y:t==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const t=this.calc.getPosition(),s=this.getBoundsRect(),i=this.calc.getCorner()==="bottom"?s.height:0;t.x<=0?this.animateFlippingTo(t,{x:-s.pageWidth,y:i},!0):this.animateFlippingTo(t,{x:s.pageWidth,y:i},!1)}showCorner(t){if(!this.checkState("read","fold_corner"))return;const s=this.getBoundsRect(),i=s.pageWidth;if(this.isPointOnCorners(t))if(this.calc===null){if(!this.start(t))return;this.setState("fold_corner"),this.calc.calc({x:i-1,y:1});const a=50,o=this.calc.getCorner()==="bottom"?s.height-1:1,n=this.calc.getCorner()==="bottom"?s.height-a:a;this.animateFlippingTo({x:i-1,y:o},{x:i-a,y:n},!1,!1)}else this.do(this.render.convertToPage(t));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(t,s,i,a=!0){const o=x.GetCordsFromTwoPoint(t,s),n=[];for(const w of o)n.push(()=>this.do(w));const d=this.getAnimationDuration(o.length);this.render.startAnimation(n,d,()=>{this.calc&&(i&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),a&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(t){this.state!==t&&(this.app.updateState(t),this.state=t)}getDirectionByPoint(t){const s=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(t.x-s.pageWidth<=s.width/5)return 1}else if(t.x<s.width/2)return 1;return 0}getAnimationDuration(t){const s=this.app.getSettings().flippingTime;return t>=1e3?s:t/1e3*s}checkDirection(t){return t===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...t){for(const s of t)if(this.state===s)return!0;return!1}isPointOnCorners(t){const s=this.getBoundsRect(),i=s.pageWidth,a=Math.sqrt(Math.pow(i,2)+Math.pow(s.height,2))/5,o=this.render.convertToBook(t);return o.x>0&&o.y>0&&o.x<s.width&&o.y<s.height&&(o.x<a||o.x>s.width-a)&&(o.y<a||o.y>s.height-a)}}class T{constructor(t,s){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=s,this.app=t;const i=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=i.exec(window.navigator.userAgent)!==null}render(t){if(this.animation!==null){const s=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);s<this.animation.frames.length?this.animation.frames[s]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=t,this.drawFrame()}start(){this.update();const t=s=>{this.render(s),requestAnimationFrame(t)};requestAnimationFrame(t)}startAnimation(t,s,i){this.finishAnimation(),this.animation={frames:t,duration:s,durationFrame:s/t.length,onAnimateEnd:i,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t))}calculateBoundsRect(){let t="landscape";const s=this.getBlockWidth(),i=s/2,a=this.getBlockHeight()/2,o=this.setting.width/this.setting.height;let n=this.setting.width,d=this.setting.height,w=i-n;return this.setting.size==="stretch"?(s<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(t="portrait"),n=t==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,n>this.setting.maxWidth&&(n=this.setting.maxWidth),d=n/o,d>this.getBlockHeight()&&(d=this.getBlockHeight(),n=d*o),w=t==="portrait"?i-n/2-n:i-n):s<2*n&&this.app.getSettings().usePortrait&&(t="portrait",w=i-n/2-n),this.boundsRect={left:w,top:a-d/2,width:2*n,height:d,pageWidth:n},t}setShadowData(t,s,i,a){if(!this.app.getSettings().drawShadow)return;const o=100*this.getSettings().maxShadowOpacity;this.shadow={pos:t,angle:s,width:3*this.getRect().pageWidth/4*i/100,opacity:(100-i)*o/100/100,direction:a,progress:2*i}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(t){this.pageRect=t}setDirection(t){this.direction=t}setRightPage(t){t!==null&&t.setOrientation(1),this.rightPage=t}setLeftPage(t){t!==null&&t.setOrientation(0),this.leftPage=t}setBottomPage(t){t!==null&&t.setOrientation(this.direction===1?0:1),this.bottomPage=t}setFlippingPage(t){t!==null&&t.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=t}convertToBook(t){const s=this.getRect();return{x:t.x-s.left,y:t.y-s.top}}isSafari(){return this.safari}convertToPage(t,s){s||(s=this.direction);const i=this.getRect();return{x:s===0?t.x-i.left-i.width/2:i.width/2-t.x+i.left,y:t.y-i.top}}convertToGlobal(t,s){if(s||(s=this.direction),t==null)return null;const i=this.getRect();return{x:s===0?t.x+i.left+i.width/2:i.width/2-t.x+i.left,y:t.y+i.top}}convertRectToGlobal(t,s){return s||(s=this.direction),{topLeft:this.convertToGlobal(t.topLeft,s),topRight:this.convertToGlobal(t.topRight,s),bottomLeft:this.convertToGlobal(t.bottomLeft,s),bottomRight:this.convertToGlobal(t.bottomRight,s)}}}class N extends T{constructor(t,s,i){super(t,s),this.canvas=i,this.ctx=i.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const t=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(t.left+t.pageWidth,t.top,t.width,t.height),this.ctx.clip())}drawBookShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const s=t.width/20;this.ctx.rect(t.left,t.top,t.width,t.height);const i={x:t.left+t.width/2-s/2,y:0};this.ctx.translate(i.x,i.y);const a=this.ctx.createLinearGradient(0,0,s,0);a.addColorStop(0,"rgba(0, 0, 0, 0)"),a.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),a.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),a.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),a.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,s,2*t.height),this.ctx.restore()}drawOuterShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t.left,t.top,t.width,t.height);const s=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(s.x,s.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const i=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),i.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),i.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.shadow.width,2*t.height),this.ctx.restore()}drawInnerShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const s=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(i.topLeft.x,i.topLeft.y),this.ctx.lineTo(i.topRight.x,i.topRight.y),this.ctx.lineTo(i.bottomRight.x,i.bottomRight.y),this.ctx.lineTo(i.bottomLeft.x,i.bottomLeft.y),this.ctx.translate(s.x,s.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const a=3*this.shadow.width/4,o=this.ctx.createLinearGradient(0,0,a,0);this.shadow.direction===0?(this.ctx.translate(-a,-100),o.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),o.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),o.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),o.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),o.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),o.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),o.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),o.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,a,2*t.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class L{constructor(t,s,i){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=o=>{if(this.checkTarget(o.target)){const n=this.getMousePos(o.clientX,o.clientY);this.app.startUserTouch(n),o.preventDefault()}},this.onTouchStart=o=>{if(this.checkTarget(o.target)&&o.changedTouches.length>0){const n=o.changedTouches[0],d=this.getMousePos(n.clientX,n.clientY);this.touchPoint={point:d,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(d)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||o.preventDefault()}},this.onMouseUp=o=>{const n=this.getMousePos(o.clientX,o.clientY);this.app.userStop(n)},this.onMouseMove=o=>{const n=this.getMousePos(o.clientX,o.clientY);this.app.userMove(n,!1)},this.onTouchMove=o=>{if(o.changedTouches.length>0){const n=o.changedTouches[0],d=this.getMousePos(n.clientX,n.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-d.x)>10||this.app.getState()!=="read")&&o.cancelable&&this.app.userMove(d,!0),this.app.getState()!=="read"&&o.preventDefault()):this.app.userMove(d,!0)}},this.onTouchEnd=o=>{if(o.changedTouches.length>0){const n=o.changedTouches[0],d=this.getMousePos(n.clientX,n.clientY);let w=!1;if(this.touchPoint!==null){const P=d.x-this.touchPoint.point.x,B=Math.abs(d.y-this.touchPoint.point.y);Math.abs(P)>this.swipeDistance&&B<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(P>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),w=!0),this.touchPoint=null}this.app.userStop(d,w)}},this.parentElement=t,t.classList.add("stf__parent"),t.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=t.querySelector(".stf__wrapper"),this.app=s;const a=this.app.getSettings().usePortrait?1:2;t.style.minWidth=i.minWidth*a+"px",t.style.minHeight=i.minHeight+"px",i.size==="fixed"&&(t.style.minWidth=i.width*a+"px",t.style.minHeight=i.height+"px"),i.autoSize&&(t.style.width="100%",t.style.maxWidth=2*i.maxWidth+"px"),t.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=i.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(t){this.wrapper.classList.remove("--portrait","--landscape"),t==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(t,s){const i=this.distElement.getBoundingClientRect();return{x:t-i.left,y:s-i.top}}checkTarget(t){return!this.app.getSettings().clickEventForward||!["a","button"].includes(t.tagName.toLowerCase())}}class K extends L{constructor(t,s,i,a){super(t,s,i),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=t.querySelector(".stf__block"),this.items=a;for(const o of a)this.distElement.appendChild(o);this.setHandlers()}clear(){for(const t of this.items)this.parentElement.appendChild(t)}updateItems(t){this.removeHandlers(),this.distElement.innerHTML="";for(const s of t)this.distElement.appendChild(s);this.items=t,this.setHandlers()}update(){this.app.getRender().update()}}class H extends L{constructor(t,s,i){super(t,s,i),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=t.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const t=getComputedStyle(this.canvas),s=parseInt(t.getPropertyValue("width"),10),i=parseInt(t.getPropertyValue("height"),10);this.canvas.width=s,this.canvas.height=i}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class _ extends T{constructor(t,s,i){super(t,s),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=i,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const t=this.getRect(),s=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let i=(100-s)*(2.5*t.pageWidth)/100+20;i>t.pageWidth&&(i=t.pageWidth);let a=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${i}px;
            height: ${t.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*s/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${t.left+t.width/2}px;
            transform-origin: 0 0;
        `;a+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=a}drawHardOuterShadow(){const t=this.getRect();let s=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*t.pageWidth)/100+20;s>t.pageWidth&&(s=t.pageWidth);let i=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${s}px;
            height: ${t.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${t.left+t.width/2}px;
            transform-origin: 0 0;
        `;i+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=i}drawInnerShadow(){const t=this.getRect(),s=3*this.shadow.width/4,i=this.getDirection()===0?s:0,a=this.getDirection()===0?"to left":"to right",o=this.convertToGlobal(this.shadow.pos),n=this.shadow.angle+3*Math.PI/2,d=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let w="polygon( ";for(const B of d){let R=this.getDirection()===1?{x:-B.x+this.shadow.pos.x,y:B.y-this.shadow.pos.y}:{x:B.x-this.shadow.pos.x,y:B.y-this.shadow.pos.y};R=x.GetRotatedPoint(R,{x:i,y:100},n),w+=R.x+"px "+R.y+"px, "}w=w.slice(0,-2),w+=")";const P=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${s}px;
            height: ${2*t.height}px;
            background: linear-gradient(${a},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${i}px 100px;
            transform: translate3d(${o.x-i}px, ${o.y-100}px, 0) rotate(${n}rad);
            clip-path: ${w};
            -webkit-clip-path: ${w};
        `;this.innerShadow.style.cssText=P}drawOuterShadow(){const t=this.getRect(),s=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.shadow.angle+3*Math.PI/2,a=this.getDirection()===1?this.shadow.width:0,o=this.getDirection()===0?"to right":"to left",n=[{x:0,y:0},{x:t.pageWidth,y:0},{x:t.pageWidth,y:t.height},{x:0,y:t.height}];let d="polygon( ";for(const P of n)if(P!==null){let B=this.getDirection()===1?{x:-P.x+this.shadow.pos.x,y:P.y-this.shadow.pos.y}:{x:P.x-this.shadow.pos.x,y:P.y-this.shadow.pos.y};B=x.GetRotatedPoint(B,{x:a,y:100},i),d+=B.x+"px "+B.y+"px, "}d=d.slice(0,-2),d+=")";const w=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*t.height}px;
            background: linear-gradient(${o}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${a}px 100px;
            transform: translate3d(${s.x-a}px, ${s.y-100}px, 0) rotate(${i}rad);
            clip-path: ${d};
            -webkit-clip-path: ${d};
        `;this.outerShadow.style.cssText=w}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const t=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(t))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const t of this.app.getPageCollection().getPages())t!==this.leftPage&&t!==this.rightPage&&t!==this.flippingPage&&t!==this.bottomPage&&(t.getElement().style.cssText="display: none"),t.getTemporaryCopy()!==this.flippingPage&&t.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class G{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(t){const s=this._default;if(Object.assign(s,t),s.size!=="stretch"&&s.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(s.width<=0||s.height<=0)throw new Error("Invalid width or height");if(s.flippingTime<=0)throw new Error("Invalid flipping time");return s.size==="stretch"?(s.minWidth<=0&&(s.minWidth=100),s.maxWidth<s.minWidth&&(s.maxWidth=2e3),s.minHeight<=0&&(s.minHeight=100),s.maxHeight<s.minHeight&&(s.maxHeight=2e3)):(s.minWidth=s.width,s.maxWidth=s.width,s.minHeight=s.height,s.maxHeight=s.height),s}}(function(c,t){t===void 0&&(t={});var s=t.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",s==="top"&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}})(`.stf__parent {
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
}`),S.PageFlip=class extends class{constructor(){this.events=new Map}on(c,t){return this.events.has(c)?this.events.get(c).push(t):this.events.set(c,[t]),this}off(c){this.events.delete(c)}trigger(c,t,s=null){if(this.events.has(c))for(const i of this.events.get(c))i({data:s,object:t})}}{constructor(c,t){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new G().getSettings(t),this.block=c}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(c){this.ui=new H(this.block,this,this.setting);const t=this.ui.getCanvas();this.render=new N(this,this.setting,t),this.flipController=new k(this.render,this),this.pages=new A(this,this.render,c),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(c){this.ui=new K(this.block,this,this.setting,c),this.render=new _(this,this.setting,this.ui.getDistElement()),this.flipController=new k(this.render,this),this.pages=new C(this,this.render,this.ui.getDistElement(),c),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(c){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new A(this,this.render,c),this.pages.load(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}updateFromHtml(c){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new C(this,this.render,this.ui.getDistElement(),c),this.pages.load(),this.ui.updateItems(c),this.render.reload(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(c){this.pages.show(c)}flipNext(c="top"){this.flipController.flipNext(c)}flipPrev(c="top"){this.flipController.flipPrev(c)}flip(c,t="top"){this.flipController.flipToPage(c,t)}updateState(c){this.trigger("changeState",this,c)}updatePageIndex(c){this.trigger("flip",this,c)}updateOrientation(c){this.ui.setOrientationStyle(c),this.update(),this.trigger("changeOrientation",this,c)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(c){return this.pages.getPage(c)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(c){this.mousePosition=c,this.isUserTouch=!0,this.isUserMove=!1}userMove(c,t){this.isUserTouch||t||!this.setting.showPageCorners?this.isUserTouch&&x.GetDistanceBetweenTwoPoint(this.mousePosition,c)>5&&(this.isUserMove=!0,this.flipController.fold(c)):this.flipController.showCorner(c)}userStop(c,t=!1){this.isUserTouch&&(this.isUserTouch=!1,t||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(c)))}},Object.defineProperty(S,"__esModule",{value:!0})}))})(te,te.exports)),te.exports}var mt=gt();const wt=ee.forwardRef((l,v)=>{const S=j.useRef(null),m=j.useRef([]),b=j.useRef(),[h,A]=j.useState([]);j.useImperativeHandle(v,()=>({pageFlip:()=>b.current}));const x=j.useCallback(()=>{b.current&&b.current.clear()},[]),D=j.useCallback(()=>{const C=b.current;C&&(C.off("flip"),C.off("changeOrientation"),C.off("changeState"),C.off("init"),C.off("update"))},[]);return j.useEffect(()=>{if(m.current=[],l.children){const C=ee.Children.map(l.children,W=>ee.cloneElement(W,{ref:k=>{k&&m.current.push(k)}}));(!l.renderOnlyPageLengthChange||h.length!==C.length)&&(C.length<h.length&&x(),A(C))}},[l.children]),j.useEffect(()=>{const C=()=>{const W=b.current;W&&(l.onFlip&&W.on("flip",k=>l.onFlip(k)),l.onChangeOrientation&&W.on("changeOrientation",k=>l.onChangeOrientation(k)),l.onChangeState&&W.on("changeState",k=>l.onChangeState(k)),l.onInit&&W.on("init",k=>l.onInit(k)),l.onUpdate&&W.on("update",k=>l.onUpdate(k)))};h.length>0&&m.current.length>0&&(D(),S.current&&!b.current&&(b.current=new mt.PageFlip(S.current,l)),b.current.getFlipController()?b.current.updateFromHtml(m.current):b.current.loadFromHTML(m.current),C())},[h]),ee.createElement("div",{ref:S,className:l.className,style:l.style},h)}),ft=ee.memo(wt);const Ge=(...l)=>l.filter((v,S,m)=>!!v&&v.trim()!==""&&m.indexOf(v)===S).join(" ").trim();const ut=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const xt=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(v,S,m)=>m?m.toUpperCase():S.toLowerCase());const Ce=l=>{const v=xt(l);return v.charAt(0).toUpperCase()+v.slice(1)};var we={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const vt=l=>{for(const v in l)if(v.startsWith("aria-")||v==="role"||v==="title")return!0;return!1},bt=j.createContext({}),yt=()=>j.useContext(bt),St=j.forwardRef(({color:l,size:v,strokeWidth:S,absoluteStrokeWidth:m,className:b="",children:h,iconNode:A,...x},D)=>{const{size:C=24,strokeWidth:W=2,absoluteStrokeWidth:k=!1,color:T="currentColor",className:N=""}=yt()??{},L=m??k?Number(S??W)*24/Number(v??C):S??W;return j.createElement("svg",{ref:D,...we,width:v??C??we.width,height:v??C??we.height,stroke:l??T,strokeWidth:L,className:Ge("lucide",N,b),...!h&&!vt(x)&&{"aria-hidden":"true"},...x},[...A.map(([K,H])=>j.createElement(K,H)),...Array.isArray(h)?h:[h]])});const le=(l,v)=>{const S=j.forwardRef(({className:m,...b},h)=>j.createElement(St,{ref:h,iconNode:v,className:Ge(`lucide-${ut(Ce(l))}`,`lucide-${l}`,m),...b}));return S.displayName=Ce(l),S};const jt=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],At=le("chevron-first",jt);const Ct=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kt=le("chevron-left",Ct);const Pt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Wt=le("chevron-right",Pt);const Bt=[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]],Dt=le("expand",Bt);const Tt=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],Mt=le("shrink",Tt),It=p.section`
  width: min(92vw, 1240px);
  margin: 0 auto;
  color: #252525;
  font-family: 'Space Grotesk', sans-serif;

  &:fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: none;
    height: 100vh;
    padding: 3vh 2vw;
    background: #e8e8e5;
  }

  &:fullscreen > div:first-child {
    flex: 1;
    height: auto;
  }
`,Rt=p.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$isFullscreen:l})=>l?"min(96vw, 1200px)":"min(92vw, 1016px)"};
  height: clamp(460px, 62vw, 720px);
  margin: 0 auto;
  overflow: hidden;
  outline: none;

  &:focus-visible {
    outline: 3px solid #e88d67;
    outline-offset: 3px;
  }

  .composition-flipbook {
    position: relative;
    z-index: 1;
    transform: translateX(${({$coverPosition:l})=>l==="front"?"-25%":l==="back"?"25%":"0"});
    transition: transform 700ms ease;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1.4133;
  }
`,zt=p.div`
  overflow: hidden;
  background: #fff;
`,Et=p.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({$isCover:l})=>l?"cover":"contain"};
  object-position: center;
  background: #fff;
  user-select: none;
  -webkit-user-drag: none;
`,ke=p.div`
  display: grid;
  place-items: center;
  min-height: 180px;
  padding: 2rem;
  color: #5d5d5d;
  text-align: center;
`,Lt=p.div`
  display: grid;
  grid-template-columns: 44px 44px minmax(9rem, auto) 44px 44px;
  justify-content: center;
  align-items: center;
  width: ${({$isSinglePage:l,$isFullscreen:v})=>v?l?"min(96vw, 600px)":"min(96vw, 1200px)":l?"min(92vw, 508px)":"min(92vw, 1016px)"};
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
`,ce=p.button`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(63, 69, 92, 0.22);
  border-radius: 4px;
  background: #fff;
  color: #3f455c;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: #111;
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
`,Ot=p.div`
  min-width: 9rem;
  color: #5d5d5d;
  font-size: 0.92rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
`,$t=j.forwardRef(function({page:v,index:S},m){const b=S===0||v.isLast;return e.jsx(zt,{ref:m,"data-density":S===0||v.isLast?"hard":"soft","data-cursor-hover":!0,children:e.jsx(Et,{src:v.src,alt:S===0?"Composition book front cover":v.isLast?"Composition book back cover":`Composition book page ${S+1}`,width:v.width,height:v.height,loading:S<4?"eager":"lazy",draggable:"false",$isCover:b})})});function Nt(){const l=j.useRef(null),v=j.useRef(null),S=j.useRef(null),m=j.useRef(!1),[b,h]=j.useState([]),[A,x]=j.useState(0),[D,C]=j.useState(!1),[W,k]=j.useState(!1),[T,N]=j.useState(!1),[L,K]=j.useState(""),H=A===0,_=b.length>0&&A===b.length-1,G=H&&!D||W;j.useEffect(()=>{const n=new AbortController,d="/composition-book/";return fetch(`${d}manifest.json`,{signal:n.signal}).then(w=>{if(!w.ok)throw new Error("The book could not be loaded.");return w.json()}).then(w=>{h(w.pages.map((P,B)=>({...P,src:`${d}${P.file}`,isLast:B===w.pages.length-1})))}).catch(w=>{w.name!=="AbortError"&&K(w.message)}),()=>n.abort()},[]),j.useEffect(()=>{const n=()=>{const d=document.fullscreenElement===v.current,w=m.current&&!d;m.current=d,N(d),w&&requestAnimationFrame(()=>{v.current?.scrollIntoView({block:"center",inline:"nearest"})})};return document.addEventListener("fullscreenchange",n),()=>document.removeEventListener("fullscreenchange",n)},[]);const c=()=>l.current?.pageFlip(),t=()=>c()?.turnToPage(0),s=()=>{A===1&&k(!0),c()?.flipPrev("top")},i=()=>{H&&C(!0),c()?.flipNext("top")},a=n=>{n.key==="ArrowLeft"&&(n.preventDefault(),s()),n.key==="ArrowRight"&&(n.preventDefault(),i())},o=async()=>{document.fullscreenElement?await document.exitFullscreen():await v.current?.requestFullscreen()};return e.jsxs(It,{ref:v,"aria-label":"Composition art book flip through",children:[e.jsxs(Rt,{ref:S,tabIndex:0,onKeyDown:a,$isFullscreen:T,$isSinglePage:G||_,$coverPosition:G?"front":_?"back":"open",children:[L&&e.jsx(ke,{role:"alert",children:L}),!L&&b.length===0&&e.jsx(ke,{role:"status",children:"Loading book..."}),b.length>0&&e.jsx(ft,{ref:l,startPage:A,width:424,height:600,size:"stretch",minWidth:120,maxWidth:T?600:508,minHeight:170,maxHeight:T?849:719,drawShadow:!1,showCover:!0,usePortrait:!1,mobileScrollSupport:!0,swipeDistance:24,flippingTime:700,onFlip:n=>x(n.data),onChangeState:n=>{n.data==="flipping"&&H&&C(!0),n.data==="read"&&(C(!1),k(!1))},className:"composition-flipbook",children:b.map((n,d)=>e.jsx($t,{page:n,index:d},n.file))},T?"fullscreen":"embedded")]}),b.length>0&&e.jsxs(Lt,{"aria-label":"Book controls",$isFullscreen:T,$isSinglePage:G||_,$coverPosition:G?"front":_?"back":"open",children:[e.jsx(ce,{type:"button",onClick:t,disabled:A===0,"aria-label":"First page",title:"First page",children:e.jsx(At,{"aria-hidden":"true",size:22})}),e.jsx(ce,{type:"button",onClick:s,disabled:A===0,"aria-label":"Previous page",title:"Previous page",children:e.jsx(kt,{"aria-hidden":"true",size:22})}),e.jsxs(Ot,{"aria-live":"polite",children:["Page ",A+1," of ",b.length]}),e.jsx(ce,{type:"button",onClick:i,disabled:A>=b.length-1,"aria-label":"Next page",title:"Next page",children:e.jsx(Wt,{"aria-hidden":"true",size:22})}),e.jsx(ce,{type:"button",onClick:o,"aria-label":T?"Exit fullscreen":"View fullscreen",title:T?"Exit fullscreen":"View fullscreen",children:T?e.jsx(Mt,{"aria-hidden":"true",size:20}):e.jsx(Dt,{"aria-hidden":"true",size:20})})]})]})}const Ht="/assets/Orbital-Me_evN6P.jpg",Ft="/assets/Spraypaintwash-BbPvaVYI.png",qt="/assets/Staircases-X99gJTOY.jpg",_t="/assets/Coney-XynOADlt.jpg",Gt="/assets/Brooklyn-pKXeBM0d.jpg",Zt="/assets/Brooklyn2-BVlZQUhO.jpg",Yt="/assets/Rug-Do3b2lPl.jpg",Ut="/assets/Mash1-C6rAcNzX.png",Kt="/assets/Mash2-Dqi8iSdT.png",Vt="/assets/Mash3-hEAJGZMt.png",Jt="/assets/Mash4-DJRwDavu.png",Xt="/assets/No.3-C03FbQUH.png",Qt="/assets/Grain-BEUj0pKY.jpg",es="/assets/52-CdBMq9O9.jpg",Pe="/assets/52-CNWVMpg7.webp",We="/assets/52-gE6SiWB9.avif",ts="/assets/52-640-DVvHtSBj.webp",ss="/assets/52-960-D1HbUqj2.webp",is="/assets/52-640-C1Dq3XN8.avif",as="/assets/52-960-BSEOvHB5.avif",os="/assets/56-7uwBAmvk.jpg",Be="/assets/56-BmXQm_hM.webp",De="/assets/56-BLYjh9ov.avif",ns="/assets/56-640-xNBeQLaN.webp",rs="/assets/56-960-CQPxWBRM.webp",ls="/assets/56-640-BmoWNAPR.avif",cs="/assets/56-960-BcZ1KSWH.avif",hs="/assets/1.2-CtmKzDuO.jpg",ds="/assets/1.2-DamqNk7M.webp",ps="/assets/1.2-BnkSwaKb.avif",gs="/assets/6-DhaI76Fh.jpg",ms="/assets/6-TEo7Kp30.webp",ws="/assets/6-Dn8qeIMt.avif",fs="/assets/13-Uh30_dkp.jpg",us="/assets/13-B04sV77o.webp",xs="/assets/13-tyepy0jT.avif",vs="/assets/Artbashmash-D8rHoEfl.jpg",bs="/assets/Artbashmash-qDI_Cdfm.webp",ys="/assets/Artbashmash-B9MdRtrg.avif",Ss="/assets/Artbashmash2-p7CJTgnS.jpg",js="/assets/Artbashmash2-DPSCciW8.webp",As="/assets/Artbashmash2-BTX490IK.avif",Cs="/assets/Artbashmash3-2s-rDM9O.jpg",ks="/assets/Artbashmash3-CmEwXgCZ.webp",Ps="/assets/Artbashmash3-8M-yWfJJ.avif",Ws="/assets/BFA-DDWe_9dv.jpg",Bs="/assets/BFA-LQoe4czV.webp",Ds="/assets/BFA-CqSJPe2m.avif",Ts="/assets/Reuzes-9siswazn.jpg",Ms="/assets/Reuzes-CAHQ9NoS.webp",Is="/assets/Reuzes-DIY46Trg.avif",Rs="/assets/Denver-BBSPF7-m.jpg",zs="/assets/Denver-KS6BPoFH.webp",Es="/assets/Denver-ccZpPKuP.avif",Ls="/assets/Whiteline-DIr6FYSj.jpg",Os="/assets/Whiteline-D6wG4Nvu.webp",$s="/assets/Whiteline-r4oYJxed.avif",Ns="/assets/Mucha-BsTfchPV.jpg",Hs="/assets/Mucha-CJgtHG0C.webp",Fs="/assets/Mucha-GBYkgctP.avif",qs="/assets/Crawford-J6l55Suz.jpg",_s="/assets/Crawford-BVHnYbtP.webp",Gs="/assets/Crawford-BWuZbUU8.avif",Zs="/assets/Paintlouis-CmuEB8vi.jpg",Ys="/assets/Paintlouis-BC3atiMU.webp",Us="/assets/Paintlouis-_c8uDS3Y.avif",Ks="/assets/riso3-BzC1roHJ.jpg",Vs="/assets/riso3-B_Ta2R48.webp",Js="/assets/riso3-CBJKr72-.avif",Xs="/assets/SushiX-VEFW7gc0.jpg",Qs="/assets/SushiX-CWBBXfuH.webp",ei="/assets/SushiX-Bizc045D.avif",ti="/assets/rogerrabbit-DZN4cfA1.jpg",si="/assets/rogerrabbit-BT2ncPfK.webp",ii="/assets/rogerrabbit-dQ7r-14_.avif",ai="/assets/summer16-e0hQKwHj.jpg",oi="/assets/summer16-DHy098K_.webp",ni="/assets/summer16-DXCTH033.avif",ri="/assets/SushiX2-CDfmB3k8.jpg",li="/assets/SushiX2-JRdghSIi.webp",ci="/assets/SushiX2-_QYSWb2X.avif",hi="/assets/Enova-CyGiy_cF.jpg",di="/assets/Enova-D4S8QhSW.webp",pi="/assets/Enova-h7nc4v59.avif",gi="/assets/EU-CYNJcy9u.jpg",mi="/assets/EU-CVxbBzQk.webp",wi="/assets/EU-DbAMMYoW.avif",Te=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],I=p.img`
  width: ${l=>l.$Width||"auto"};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`,fi=p.div`
  display: flex;
  justify-content: center;
  background-color: ${l=>l.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,ui=p.img`
  max-width: 900px;
  width: 65vw;
  height: auto;
 
`,xi=p.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  background-color: white;
`,J={backgroundColor:"white",width:"100vw",padding:"5vh 0"};function vi(){return j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{children:[e.jsx(pe,{title:"3D & Graffiti | Zack MacTavish Art & Design",description:"Graffiti roots, Rhino 3D renders, and murals across Chicago, Brooklyn, Denver, and more.",image:ge,url:Y(U()),keywords:["3D","graffiti","Rhino","murals","Chicago","Brooklyn","Denver"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Te,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:se},{rel:"icon",type:"image/png",sizes:"32x32",href:ie},{rel:"apple-touch-icon",sizes:"180x180",href:ae},{rel:"icon",type:"image/png",sizes:"192x192",href:oe},{rel:"icon",type:"image/png",sizes:"256x256",href:ne},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"3D & Graffiti Series",url:Y(U()),author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Te}}}),e.jsx("h1",{style:me,children:"3D and Graffiti by Zack MacTavish"}),e.jsx(de,{as:r,src:es,webpSrc:Pe,webpSrcSet:`${ts} 640w, ${ss} 960w, ${Pe} 2200w`,avifSrc:We,avifSrcSet:`${is} 640w, ${as} 960w, ${We} 2200w`,sizes:"100vw",alt:"Rhino render 52",width:4e3,height:2249,loading:"eager",decoding:"sync",fetchPriority:"high"}),e.jsx(de,{as:r,src:os,webpSrc:Be,webpSrcSet:`${ns} 640w, ${rs} 960w, ${Be} 2200w`,avifSrc:De,avifSrcSet:`${ls} 640w, ${cs} 960w, ${De} 2200w`,sizes:"100vw",alt:"Rhino render 56",width:4e3,height:2251,style:{width:"100vw",minHeight:"100vh",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsx(O,{children:e.jsx(q,{children:e.jsx($,{children:"My artistic roots began in graffiti, where I became interested in letterforms, distortion, and the structure of an image. That practice led me into painting, typography, and eventually Rhino 3D, where I began building architectural lettering, digital forms, and objects for 3D printing. This work continues that technical side of my practice while staying connected to the visual language that first drew me to making art."})})}),e.jsxs("section",{style:J,children:[e.jsxs(u,{imageSrc:hs,imageWebp:ds,imageAvif:ps,imageAlt:"No. 1 Rhino render",children:[e.jsx(g,{children:"No. 1"}),e.jsx(f,{children:"2017"}),e.jsx(y,{children:"Render made in Rhino, and Keyshot."})]}),e.jsxs(u,{imageSrc:gs,imageWebp:ms,imageAvif:ws,imageAlt:"No. 6 Rhino render",children:[e.jsx(g,{children:"No. 6"}),e.jsx(f,{children:"2017"}),e.jsx(y,{children:"Render made in Rhino, and Keyshot."})]}),e.jsxs(u,{imageSrc:fs,imageWebp:us,imageAvif:xs,imageAlt:"No. 13 Rhino render",children:[e.jsx(g,{children:"No. 13"}),e.jsx(f,{children:"2017"}),e.jsx(y,{children:"Render made in Rhino, and Keyshot."})]})]}),e.jsx("div",{style:{backgroundColor:"#191919",width:"100%",display:"block",padding:"8vh 0"},children:e.jsxs(M,{className:"rounded-corners",style:{backgroundColor:"#191919"},children:[e.jsx(r,{src:vs,webpSrc:bs,avifSrc:ys,alt:"Art Bash graffiti collage 1"}),e.jsx(r,{src:Ss,webpSrc:js,avifSrc:As,alt:"Art Bash graffiti collage 2"}),e.jsx(r,{src:Cs,webpSrc:ks,avifSrc:Ps,alt:"Art Bash graffiti collage 3"})]})}),e.jsx(de,{as:r,src:Je,webpSrc:Ve,avifSrc:Ke,alt:"RIP SENSE mural",style:{width:"100%",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsxs("section",{style:J,children:[e.jsxs(u,{imageSrc:Ws,imageWebp:Bs,imageAvif:Ds,imageAlt:"BFA Exhibition mural",children:[e.jsxs(g,{children:["BFA Exhibition ",e.jsx("br",{}),"(Chicago, IL)"]}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on brick veneer."})]}),e.jsxs(u,{imageSrc:Ts,imageWebp:Ms,imageAvif:Is,imageAlt:"Lowbrow graffiti mural",children:[e.jsx(g,{children:"LOWBROW (Brooklyn, NY)"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Spray paint on cement."})]}),e.jsxs(u,{imageSrc:Rs,imageWebp:zs,imageAvif:Es,imageAlt:"Rhino Denver mural",children:[e.jsx(g,{children:"RHINO (Denver, CO)"}),e.jsx(f,{children:"2019"}),e.jsx(y,{children:"Spray paint on cinderblock."})]})]}),e.jsxs(dt,{$Backgroundcolor:"white",$Backgroundheight:"125vh",children:[e.jsx(xi,{children:e.jsx(ui,{as:r,src:Ls,webpSrc:Os,avifSrc:$s,alt:"Graffiti lettering study"})}),e.jsx(Ye,{style:{color:"#ffffff"},children:"This illustration of B’s in different styles was created for a self-published book about the art of graffiti writing."})]}),e.jsxs("section",{style:J,children:[e.jsxs(u,{imageSrc:Ns,imageWebp:Hs,imageAvif:Fs,imageAlt:"Orange Line graffiti piece",children:[e.jsx(g,{children:"ORANGE LINE (Chicago, IL)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cinderblock."})]}),e.jsxs(u,{imageSrc:qs,imageWebp:_s,imageAvif:Gs,imageAlt:"Crawford graffiti mural",children:[e.jsx(g,{children:"CRAWFORD (Chicago, IL)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cement."})]}),e.jsxs(u,{imageSrc:Zs,imageWebp:Ys,imageAvif:Us,imageAlt:"Paint Louis graffiti mural",children:[e.jsx(g,{children:"PAINT LOUIS (St. Louis, MO)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cement."})]})]}),e.jsx("div",{style:{backgroundColor:"white",width:"100%"},children:e.jsx(Ze,{className:"narrow rounded-corners",children:e.jsx(r,{src:Ks,webpSrc:Vs,avifSrc:Js,alt:"Graffiti riso spread"})})}),e.jsxs("section",{style:J,children:[e.jsxs(u,{imageSrc:Xs,imageWebp:Qs,imageAvif:ei,imageAlt:"Sushi X graffiti piece",children:[e.jsx(g,{children:"Sushi X"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on brick."})]}),e.jsxs(u,{imageSrc:ti,imageWebp:si,imageAvif:ii,imageAlt:"Roger Rabbit graffiti piece",children:[e.jsx(g,{children:"Crawford"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Spray paint on cement."})]}),e.jsxs(u,{imageSrc:ai,imageWebp:oi,imageAvif:ni,imageAlt:"Summer 2016 graffiti piece",children:[e.jsx(g,{children:"Crawford"}),e.jsx(f,{children:"2019"}),e.jsx(y,{children:"Spray paint on cement."})]})]}),e.jsxs("section",{style:J,children:[e.jsxs(u,{imageSrc:ri,imageWebp:li,imageAvif:ci,imageAlt:"Sushi X collaboration graffiti piece",children:[e.jsx(g,{children:"Sushi X"}),e.jsx(f,{children:"2016"}),e.jsxs(y,{children:["Spray paint on brick. ",e.jsx("br",{}),"(Collaboration with 'Leks')"]})]}),e.jsxs(u,{imageSrc:hi,imageWebp:di,imageAvif:pi,imageAlt:"Enova International Inc graffiti piece",children:[e.jsx(g,{children:"ENOVA INTERNATIONAL INC."}),e.jsx(f,{children:"2015"}),e.jsx(y,{children:"Spray paint on wood."})]}),e.jsxs(u,{imageSrc:gi,imageWebp:mi,imageAvif:wi,imageAlt:"Yarrow's graffiti piece",children:[e.jsx(g,{children:"YARROW'S (Providence, RI)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cinderblock."})]})]})]})}const ah=Object.freeze(Object.defineProperty({__proto__:null,RisoFlex:fi,RisoItem:I,default:vi},Symbol.toStringTag,{value:"Module"})),bi="/assets/Housequiltfront-DI9B3JyK.jpg",yi="/assets/Housequiltfront-CzYZXtZI.webp",Si="/assets/Housequiltfront-BTxxY6w6.avif",ji="/assets/Housequiltback-oHSTsYs1.jpg",Ai="/assets/Housequiltback-yxymBKcw.webp",Ci="/assets/Housequiltback-CeuocK4N.avif",ki="/assets/house5-B7nFKE96.jpg",Pi="/assets/house5-EtkpS0fR.webp",Wi="/assets/house5-QZHCbFFi.avif",Bi="/assets/house6-CcstOP2D.jpg",Di="/assets/house6-BR1ZmoeJ.webp",Ti="/assets/house6-402s7PDf.avif",Mi="/assets/EP-BLwrZ_wz.jpg",Ii="/assets/EP-DmYQWfX5.webp",Ri="/assets/EP-DTXhFueW.avif",zi="/assets/westwood-DjKkR8R-.jpg",Ei="/assets/westwood-CmjtYf80.webp",Li="/assets/westwood-DNdxyfX6.avif",Oi="/assets/manistee2-JZHXssDK.jpg",$i="/assets/manistee2-KbbqnZRw.webp",Ni="/assets/manistee2-C-0ArifR.avif",Hi="/assets/albany-D2TVox4k.jpg",Fi="/assets/albany-B6SSEOUv.webp",qi="/assets/albany-DxFswwbo.avif",_i="/assets/maynard-DqdlI59F.jpg",Gi="/assets/maynard-DUoskNk6.webp",Zi="/assets/maynard-BTPXaGVB.avif",Yi="/assets/armistice3-B08ccpdp.jpg",Ui="/assets/armistice3-C9jK5De6.webp",Ki="/assets/armistice3-Dogmhekj.avif",Vi="/assets/house3-Ds6rZWsV.jpg",Ji="/assets/house3-D_rKJWNc.webp",Xi="/assets/house3-D_IFalNo.avif",Qi="/assets/house4-Bg5eLcu9.jpg",ea="/assets/house4-BTbGYFEw.webp",ta="/assets/house4-BDmlw8IL.avif",sa="/assets/Olympia-BFbVMvuJ.jpg",ia="/assets/Olympia-D6FgxO1P.webp",aa="/assets/Olympia-D7saTZJ0.avif",oa="/assets/manistee1-CRDlmD21.jpg",na="/assets/manistee1-BD4M_BGK.webp",ra="/assets/manistee1-BtTDDVsG.avif",la="/assets/Pawtucket-iLwtRce2.jpg",ca="/assets/Pawtucket-CnuH2SbX.webp",ha="/assets/Pawtucket-D-rCKoOx.avif",da="/assets/Armistice1-BTLWWtCf.jpg",pa="/assets/Armistice1-BI6APEJU.webp",ga="/assets/Armistice1-CDYqbutH.avif",ma="/assets/rosewood-CIQbdoky.jpg",wa="/assets/rosewood-BON5IOBZ.webp",fa="/assets/rosewood-CFiF8Pc_.avif",ua="/assets/taylor-BfyEL1Uh.jpg",xa="/assets/taylor-69hTEv6h.webp",va="/assets/taylor-CpeDjwMN.avif",ba="/assets/house7-BbArC7Cr.jpg",ya="/assets/house7-DhRms4bl.webp",Sa="/assets/house7-Dg-g7uVN.avif",ja="/assets/housemash2-Bu9yv1JD.jpg",Me="/assets/housemash2-B2aULt5q.webp",Ie="/assets/housemash2-B2HTxjPM.avif",Aa="/assets/housemash2-640-Y-WjV9sP.webp",Ca="/assets/housemash2-960-DtRulYfc.webp",ka="/assets/housemash2-640-Cp6cKf_h.avif",Pa="/assets/housemash2-960-Bh-JP1j0.avif",Wa="/assets/Manisteeblock-BpsSyKDp.jpg",Ba="/assets/Manisteeblock-Dx11K6N8.webp",Da="/assets/Manisteeblock-CBunJaVw.avif",Ta="/assets/quilt1-BAZmENCx.jpg",Ma="/assets/quilt1-BOz0AhLd.webp",Ia="/assets/quilt1-CBalcmk6.avif",Ra="/assets/quilt2-19EzvJTi.jpg",za="/assets/quilt2-CDotl726.webp",Ea="/assets/quilt2-B_5hbaVc.avif",La="/assets/quilt3-DjYkC_es.jpg",Oa="/assets/quilt3-CHkeZlCq.webp",$a="/assets/quilt3-BIEQNY31.avif",Na="/assets/quilt4-BbuSbN5z.jpg",Ha="/assets/quilt4-DIBhfzww.webp",Fa="/assets/quilt4-DsPhW2St.avif",qa="/assets/quilt5-Dcs17e7U.jpg",_a="/assets/quilt5-Dm-9n-lf.webp",Ga="/assets/quilt5-DkyU4Aeb.avif",Za="/assets/quilt6-wTrYEIRL.jpg",Ya="/assets/quilt6-2Sn7zZ6L.webp",Ua="/assets/quilt6-CgAgelw0.avif",Ka="/assets/quilt7-scRYHBZe.jpg",Va="/assets/quilt7-CWl5PCey.webp",Ja="/assets/quilt7-BVAHdGqN.avif",Xa="/assets/quilt8-Ctrd8deT.jpg",Qa="/assets/quilt8-D_a0MCo5.webp",eo="/assets/quilt8-BV7SLWwk.avif",to="/assets/quilt9-BINbJqAJ.jpg",so="/assets/quilt9-DC8AVt0h.webp",io="/assets/quilt9-Bj0KW5EN.avif",ao="/assets/JanetDavidDominicMarie-CdcdFHfn.JPG",oo="/assets/JanetDavidDominicMarie-BCVZNGG0.webp",no="/assets/JanetDavidDominicMarie-BBOdJdOs.avif",ro="/assets/JanetDavidGrandpaNana-CRktDgRg.JPG",lo="/assets/JanetDavidGrandpaNana-DXurK0ww.webp",co="/assets/JanetDavidGrandpaNana-6O0yNDp_.avif",Re=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],ho=p.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  font-family: 'Space Grotesk', sans-serif;
  padding-left: 2vw;
  color: white;
  font-size: 2.5rem;
  height: 100vh;
  @media (max-width: 1600px) {
      width: 60vw;
      font-size: 1.8rem;
  }
  @media (max-width: 450px) {
      width: 90vw;
      font-size: 1.5rem;
  }
`,he=p.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
      flex-direction: column;
  }
`,ze=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  background-color: black;
  flex-direction: column;
`;p.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0vw;
  width: 100vw;
  background-color: white;
  padding: 2vw 0;
  box-sizing: border-box;
`;const M=p.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;   /* container height follows tallest image */
  gap: 64px;
  padding: 100px 40px;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;
  height: auto;
  box-sizing: border-box; /* ensure padding doesn't affect centering calculations */

  & > img,
  & > picture {
    flex: 1 1 26%;
    max-width: 26%;
    min-width: 200px;
    height: auto;
    max-height: 64vh;
    object-fit: contain;    /* preserves aspect ratio */
  }

  & picture {
    display: block;
  }

  & picture img {
    width: 100%;
    height: auto;
    max-height: inherit;
    object-fit: contain;
  }

  &.rounded-corners > picture {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
  }

  &.rounded-corners > picture img {
    width: auto;
    max-width: 100%;
    display: block;
  }

  &.rounded-corners > picture img,
  &.rounded-corners > img {
    border-radius: 18px;
  }

  /* blend variant: multiply the images against the section background */
  &.multiply {
    isolation: isolate; /* ensure blend is scoped to this grid */
    background-color: transparent; /* let the wrapper's background show through for blending */
  }
  &.multiply img {
    mix-blend-mode: multiply;
    border-radius: 8px; /* subtle rounding to match site style */
  }

  /* size variant for larger images in the section */
  &.large {
    /* keep all three images in one row */
    flex-wrap: nowrap;
    gap: 16px; /* even tighter gap to allow ~15% larger images while keeping equal spacing */
  }

  &.roomy {
    gap: 32px;
  }

  &.large.roomy > img,
  &.large.roomy > picture {
    flex: 0 0 calc((100% - 64px) / 3);
    max-width: calc((100% - 64px) / 3);
  }

  &.large > img,
  &.large > picture {
    /* each image takes one third minus total gaps (2 * 16px) */
    flex: 0 0 calc((100% - 32px) / 3);
    max-width: calc((100% - 32px) / 3);
    max-height: 85vh;       /* a touch taller for presence */
  }

  /* widen container slightly beyond 60vw for the large variant */
  &.large {
    width: min(96vw, 100%);
    max-width: 1600px;
    margin: 0 auto; /* center within the white wrapper */
    justify-self: center; /* center when parent is display:grid (e.g., Grid60) */
    align-self: center;
  }

  &.portrait-large {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    width: min(94vw, 1500px);
    max-width: 1500px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  &.portrait-large > img,
  &.portrait-large > picture {
    flex: 0 1 auto;
    width: fit-content;
    max-width: min(30vw, 460px);
    min-width: 0;
    max-height: 85vh;
  }

  &.portrait-large picture img,
  &.portrait-large > img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 85vh;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 60px 20px;
    align-items: center;    /* center stacked images horizontally */
    content-visibility: auto;
    contain-intrinsic-size: 1000px;

    & > img,
    & > picture {
      flex: 1 1 auto;
      max-width: 90%;       /* slightly narrower on mobile */
      max-height: 60vh;     /* smaller vertical size for mobile */
    }

    &.large {
      width: min(92vw, 100%);
      justify-self: center;
    }

    &.portrait-large {
      flex-direction: column;
      width: min(92vw, 100%);
      gap: 32px;
      padding-left: 20px;
      padding-right: 20px;
    }

    &.portrait-large img,
    &.portrait-large picture {
      max-width: 100%;
    }
  }
`,F=p.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px);
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;
  height: auto;
  box-sizing: border-box;

  & > img,
  & > picture {
    flex: 1 1 45%;
    max-width: 45%;
    min-width: 180px;
    height: auto;
    max-height: 70vh;     /* slightly smaller vertical size */
    object-fit: contain;
  }

  & picture {
    display: block;
  }

  /* size variant for larger images */
  &.large > img,
  &.large > picture {
    width: 100%;
    max-width: none;
    max-height: 82vh;
  }

  &.large {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    width: min(94vw, 1760px);
    margin: 0 auto;
    padding-left: clamp(24px, 3vw, 48px);
    padding-right: clamp(24px, 3vw, 48px);
  }

  /* force two images to stay on a single row (desktop) */
  &.one-row {
    flex-wrap: nowrap;
    width: min(80vw, 100%);
    max-width: 1400px;
    margin: 0 auto; /* center within the white wrapper */
    justify-self: center; /* center when parent is display:grid (e.g., Grid60) */
    align-self: center;
  }
  &.one-row > img,
  &.one-row > picture {
    flex: 0 0 calc((100% - 40px) / 2); /* gap is 40px */
    max-width: calc((100% - 40px) / 2);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 40px 20px;
    align-items: center;
    content-visibility: auto;
    contain-intrinsic-size: 900px;

    & > img,
    & > picture {
      flex: 1 1 auto;
      max-width: 90%;      /* slightly narrower on mobile */
      max-height: 60vh;    /* smaller vertical size for mobile */
    }

    &.large {
      display: grid;
      grid-template-columns: 1fr;
      width: min(92vw, 100%);
    }

    &.large > img,
    &.large > picture {
      max-width: 100%;
    }

    /* on mobile, allow wrapping/stacking */
    &.one-row {
      flex-direction: column;
      flex-wrap: wrap;
      width: min(92vw, 100%);
    }
  }
`,Ze=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(80vw, 1400px);
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(50px, 8vw, 100px) clamp(20px, 4vw, 40px);
  box-sizing: border-box;

  & > img,
  & > picture {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    display: block;
  }

  & picture img {
    width: 100%;
    height: auto;
    max-height: inherit;
    object-fit: contain;
  }

  &.narrow {
    width: min(72vw, 1180px);
    max-width: 1180px;
  }

  &.rounded-corners > picture {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
  }

  &.rounded-corners > picture img {
    width: auto;
    max-width: 100%;
    display: block;
    border-radius: 18px;
    clip-path: inset(0 round 18px);
  }

  &.rounded-corners > picture img,
  &.rounded-corners > img {
    border-radius: 18px;
  }

  @media (max-width: 900px) {
    width: min(92vw, 100%);
    padding: 40px 20px;

    &.narrow {
      width: min(92vw, 100%);
      max-width: none;
    }

    & > img,
    & > picture {
      max-height: 60vh;
    }
  }
`;function po(){j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),j.useEffect(()=>{const v=m=>{if(!m)return;const b=m.querySelector(".blend-wrapper");if(b){const W=b.querySelector("img");W&&m.insertBefore(W,b),b.remove()}const h=m.querySelector("img");if(!h)return;const A=h.parentElement;A.style.position="relative",A.style.isolation="isolate";let x=A.querySelector(".blend-backdrop");x||(x=document.createElement("div"),x.className="blend-backdrop",x.style.position="absolute",x.style.zIndex="0",x.style.pointerEvents="none",A.insertBefore(x,h));const D=()=>{const W=h.offsetLeft,k=h.offsetTop,T=h.clientWidth,N=h.clientHeight;x.style.left=`${W}px`,x.style.top=`${k}px`,x.style.width=`${T}px`,x.style.height=`${N}px`,x.style.backgroundColor="#f5f5f5",x.style.borderRadius="12px",x.style.setProperty("box-shadow","none","important"),x.style.setProperty("border","none","important"),x.style.setProperty("outline","none","important"),x.style.setProperty("filter","none","important"),h.style.setProperty("box-shadow","none","important"),h.style.setProperty("border","none","important"),h.style.setProperty("outline","none","important"),h.style.setProperty("filter","none","important"),A.style.setProperty("box-shadow","none","important"),A.style.setProperty("border","none","important"),A.style.setProperty("outline","none","important"),A.style.setProperty("filter","none","important"),x.style.overflow="hidden"};h.complete?D():h.addEventListener("load",D,{once:!0}),new ResizeObserver(D).observe(h),h.style.position="relative",h.style.zIndex="1",h.style.mixBlendMode="multiply"};v(document.getElementById("open-house-front")),document.querySelectorAll(".blend-img").forEach(m=>v(m));const S=()=>{v(document.getElementById("open-house-front")),document.querySelectorAll(".blend-img").forEach(m=>v(m))};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const l=Y(U());return e.jsxs("div",{children:[e.jsx(pe,{title:"Dwelling | Zack MacTavish Art & Design",description:"Dwelling is a series of quilts, collages, and mixed media works exploring houses, memories, and storytelling.",image:ge,url:l,keywords:["dwelling","quilts","collages","mixed media","houses","memories"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish"],sameAs:Re,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:se},{rel:"icon",type:"image/png",sizes:"32x32",href:ie},{rel:"apple-touch-icon",sizes:"180x180",href:ae},{rel:"icon",type:"image/png",sizes:"192x192",href:oe},{rel:"icon",type:"image/png",sizes:"256x256",href:ne},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Dwelling Series",url:l,author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish"],sameAs:Re}}}),e.jsx("h1",{style:me,children:"Dwelling by Zack MacTavish"}),e.jsx("style",{children:`
            /* Keep the measured section white */
            .blend-img { background-color: white !important; }

            /* Image should multiply blend to pick up grey background */
            .blend-img img {
              mix-blend-mode: multiply;
              box-sizing: border-box;
              border-radius: 12px;
            }

            /* Backdrop element sits behind the image within the ImageTextSplit container */
            .blend-backdrop { pointer-events: none; }
          `}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(F,{className:"large",children:[e.jsx(r,{src:st,webpSrc:ye,webpSrcSet:`${et} 640w, ${tt} 960w, ${ye} 2200w`,avifSrc:be,avifSrcSet:`${Xe} 640w, ${Qe} 960w, ${be} 2200w`,sizes:"(max-width: 900px) 92vw, 47vw",alt:"Layered house collage from the Dwelling series",width:4e3,height:3e3,loading:"eager",decoding:"sync",fetchPriority:"high"}),e.jsx(r,{src:ja,webpSrc:Me,webpSrcSet:`${Aa} 640w, ${Ca} 960w, ${Me} 2200w`,avifSrc:Ie,avifSrcSet:`${ka} 640w, ${Pa} 960w, ${Ie} 2200w`,sizes:"(max-width: 900px) 92vw, 47vw",alt:"Layered house collage with stitched details from the Dwelling series",width:4e3,height:3e3,loading:"lazy",decoding:"async"})]})}),e.jsx(O,{children:e.jsx(q,{children:e.jsxs($,{children:["Dwelling is a series based on the houses I’ve lived in throughout my life, using those spaces to evoke memory, nostalgia, and lived experience. The body of work includes 21 quilts, a series of collages, and one large mixed-media painting with embroidery, all made while I was learning to sew.",e.jsx("br",{}),e.jsx("br",{}),"The collage-like compositions bring together multiple stories into a single piece."]})})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",paddingTop:"4vh"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:bi,imageAlt:"Open House Front mixed-media painting with embroidery",imageAvif:Si,imageWebp:yi,children:[e.jsx(g,{children:"Open House Front"}),e.jsx(f,{children:"2021-22"}),e.jsx(y,{children:"Acrylic, sewing, and embroidery on canvas."})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:ji,imageAlt:"Open House Back mixed-media painting with embroidery",imageAvif:Ci,imageWebp:Ai,children:[e.jsx(g,{children:"Open House Back"}),e.jsx(f,{children:"2021-22"}),e.jsx(y,{children:"Acrylic, sewing, and embroidery on canvas."})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{className:"blend-img",imageSrc:ro,imageAlt:"David, Janet, Herman, and Nana Tuzio",imageAvif:co,imageWebp:lo,children:[e.jsx(g,{children:"David, Janet, Herman, and Nana Tuzio"}),e.jsx(f,{children:"July, 1960"}),e.jsx(y,{children:"My uncle, grandmother, and great-great-grandparents who immigrated from Italy."})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{className:"blend-img",imageSrc:ao,imageAlt:"David, Janet, Dominic, and Marie Bruzzi",imageAvif:no,imageWebp:oo,children:[e.jsx(g,{children:"David, Janet, Dominic, and Marie Bruzzi"}),e.jsx(y,{children:"My uncle, grandmother, and great-grandparents."})]})}),e.jsxs(F,{children:[e.jsx(r,{src:ki,webpSrc:Pi,avifSrc:Wi,alt:"Dwelling collage of a house exterior",imgStyle:{transform:"scale(0.9)"}}),e.jsx(r,{src:Bi,webpSrc:Di,avifSrc:Ti,alt:"Dwelling collage of a layered house exterior",imgStyle:{transform:"scale(0.9)"}})]}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Ta,imageAlt:"Quilt artwork of my apartment in Logan Square, Chicago",imageAvif:Ia,imageWebp:Ma,children:[e.jsx(g,{children:"Quilt 1"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"My apartment, Logan Square, Chicago"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Ra,imageAlt:"Quilt artwork of the dorms in downtown Chicago",imageAvif:Ea,imageWebp:za,children:[e.jsx(g,{children:"Quilt 2"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"Dorms, Downtown, Chicago"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:La,imageAlt:"Quilt artwork of my grandma's house",imageAvif:$a,imageWebp:Oa,children:[e.jsx(g,{children:"Quilt 3"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"My grandma's house"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{className:"blend-img",imageSrc:Na,imageAlt:"Quilt artwork of East Providence, Rhode Island",imageAvif:Fa,imageWebp:Ha,children:[e.jsx(g,{children:"Quilt 4"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"East Providence, Rhode Island"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:qa,imageAlt:"Quilt artwork of the house with Richie",imageAvif:Ga,imageWebp:_a,children:[e.jsx(g,{children:"Quilt 5"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"House with Richie"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{className:"blend-img",imageSrc:Za,imageAlt:"Quilt artwork of my grandma's first house",imageAvif:Ua,imageWebp:Ya,children:[e.jsx(g,{children:"Quilt 6"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"My grandma's first house"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Ka,imageAlt:"Quilt artwork of Armistice Boulevard in Pawtucket, Rhode Island",imageAvif:Ja,imageWebp:Va,children:[e.jsx(g,{children:"Quilt 7"}),e.jsx(f,{children:"2024"}),e.jsx(y,{children:"Armistice Blvd., Pawtucket, RI"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Xa,imageAlt:"Quilt artwork of the Bruzzi house in Pawtucket, Rhode Island",imageAvif:eo,imageWebp:Qa,children:[e.jsx(g,{children:"Quilt 8"}),e.jsx(f,{children:"2024"}),e.jsx(y,{children:"Bruzzi house, Pawtucket, RI"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:to,imageAlt:"Quilt artwork of Olympia Avenue in Pawtucket, Rhode Island",imageAvif:io,imageWebp:so,children:[e.jsx(g,{children:"Quilt 9"}),e.jsx(f,{children:"2024"}),e.jsx(y,{children:"Olympia Ave, Pawtucket, RI"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{className:"blend-img",imageSrc:Wa,imageAlt:"Reduction relief woodblock print of Manistee Street",imageAvif:Da,imageWebp:Ba,children:[e.jsx(g,{children:"Manistee Street"}),e.jsx(f,{children:"2022"}),e.jsx(y,{children:"Reduction relief woodblock print."})]})}),e.jsxs(ze,{children:[e.jsxs(he,{children:[e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:Mi,webpSrc:Ii,avifSrc:Ri,alt:"EP house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:zi,webpSrc:Ei,avifSrc:Li,alt:"Westwood house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:Oi,webpSrc:$i,avifSrc:Ni,alt:"Manistee house print"})]}),e.jsxs(he,{children:[e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:Hi,webpSrc:Fi,avifSrc:qi,alt:"Albany house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:_i,webpSrc:Gi,avifSrc:Zi,alt:"Maynard house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:Yi,webpSrc:Ui,avifSrc:Ki,alt:"Armistice 3 house print"})]})]}),e.jsxs(ze,{children:[e.jsxs(he,{children:[e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:sa,webpSrc:ia,avifSrc:aa,alt:"Olympia house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:oa,webpSrc:na,avifSrc:ra,alt:"Manistee 1 house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:la,webpSrc:ca,avifSrc:ha,alt:"Pawtucket house print"})]}),e.jsxs(he,{children:[e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:da,webpSrc:pa,avifSrc:ga,alt:"Armistice 1 house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:ma,webpSrc:wa,avifSrc:fa,alt:"Rosewood house print"}),e.jsx(I,{as:r,style:{padding:"2vw"},$Width:"20vw",src:ua,webpSrc:xa,avifSrc:va,alt:"Taylor house print"})]})]}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large roomy",children:[e.jsx(r,{src:Vi,webpSrc:Ji,avifSrc:Xi,alt:"Dwelling collage of a neighborhood house"}),e.jsx(r,{src:ba,webpSrc:ya,avifSrc:Sa,alt:"Dwelling collage of a residential streetscape"}),e.jsx(r,{src:Qi,webpSrc:ea,avifSrc:ta,alt:"Dwelling collage of a house with layered architectural details"})]})})]})}const oh=Object.freeze(Object.defineProperty({__proto__:null,SingleImageGrid:Ze,TextSection:ho,ThreeImageGrid:M,TwoImageGrid:F,default:po},Symbol.toStringTag,{value:"Module"})),go="/assets/olivia4-U2k2YIWJ.jpg",mo="/assets/olivia4-CbgGYs1V.webp",wo="/assets/olivia4-dv0gWX35.avif",fo="/assets/oliviacollab2-DSQB1VCG.jpg",uo="/assets/oliviacollab2-ClUMF2ly.webp",xo="/assets/oliviacollab2-kzDBRe6j.avif",vo="/assets/Collab-framed-LpQvBx43.jpg",bo="/assets/Collab-framed-BOdOhfX1.webp",yo="/assets/Collab-framed-CyT4lAOo.avif",So="/assets/Collab-framed2-oQkzEAKx.jpg",jo="/assets/Collab-framed2-D-pZLkjv.webp",Ao="/assets/Collab-framed2-noo4_L9g.avif",Co="/assets/Olivia_3-DBtY4wng.jpg",ko="/assets/Olivia_3-CrunaD1e.webp",Po="/assets/Olivia_3-DxV5Wozm.avif",Wo="/assets/Screenprint2-D2lzX2Ex.jpg",Bo="/assets/Screenprint2-BiAzwUCA.webp",Do="/assets/Screenprint2-Bvg_HGzH.avif",To="/assets/screenprint2.1-FugTJgBF.jpg",Mo="/assets/screenprint2.1-CU8-JQll.webp",Io="/assets/screenprint2.1-BZGulidI.avif",Ro="/assets/Screenprint1-BFFCTLJo.jpg",zo="/assets/Screenprint1-DLRt_ovq.webp",Eo="/assets/Screenprint1-B2-Bu3zG.avif",Lo="/assets/Collab4-Cv02hbpa.jpg",Oo="/assets/Collab4-BbbJ7Iw8.webp",$o="/assets/Collab4-115H_msD.avif",No="/assets/oliviacollab5-CbWExEiw.jpg",Ho="/assets/oliviacollab5-qYi_pMiP.webp",Fo="/assets/oliviacollab5-CF0Fj4mz.avif",qo="/assets/oliviacollab6-CHdaq6em.jpg",_o="/assets/oliviacollab6-IbP0YdiH.webp",Go="/assets/oliviacollab6-BSoO19z4.avif",Zo="/assets/oliviacollab7-B-5OT4aj.jpg",Yo="/assets/oliviacollab7-hJmY7BEo.webp",Uo="/assets/oliviacollab7-DRZqlZiI.avif",Ko="/assets/oliviacollab8-DoVovPYR.jpg",Vo="/assets/oliviacollab8-3v0WE-hO.webp",Jo="/assets/oliviacollab8-XTq7zq8u.avif",Xo="/assets/BearCMYK-SauZzihb.jpg",Qo="/assets/BearCMYK-epnA0ZGG.webp",en="/assets/BearCMYK-CuvXOaIv.avif",tn="/assets/GraffitiCollageCMYK-C3UcLhov.jpg",sn="/assets/GraffitiCollageCMYK-BiSfxvxr.webp",an="/assets/GraffitiCollageCMYK-By4PB7rA.avif",on="/assets/TheTown-BgXT_4nv.jpg",nn="/assets/TheTown-dGIgZ4ay.webp",rn="/assets/TheTown-BlqnKL50.avif",ln="/assets/CapeHouseLg-DsePu3RJ.jpg",Ee="/assets/CapeHouseLg-CGZshLY5.webp",Le="/assets/CapeHouseLg-HPzZHrJE.avif",cn="/assets/CapeHouseLg-640-DerA5Ovu.webp",hn="/assets/CapeHouseLg-960-DwLAeLX3.webp",dn="/assets/CapeHouseLg-640-C1e7Bvjw.avif",pn="/assets/CapeHouseLg-960-DpKBHenq.avif",gn="/assets/collage50-BgzPhtII.png",mn="/assets/collage50-xzviV4ME.webp",wn="/assets/collage50-BOVtZ2ZW.avif",fn="/assets/collage47-MdYqJbxY.png",un="/assets/collage47-LYA-gZGC.webp",xn="/assets/collage47-BFdKXoeT.avif",vn="/assets/collage32-ioVGjuXV.png",bn="/assets/collage32-DTxvao-f.webp",yn="/assets/collage32-D8rZtJEw.avif",Sn="/assets/Collage1.2-BdS_r4sI.jpg",jn="/assets/Collage1.2-DpNq0WKh.webp",An="/assets/Collage1.2-BfhRZ02B.avif",Cn="/assets/Collage2.2-Cthz6pVH.png",kn="/assets/Collage2.2-CK74oF2u.webp",Pn="/assets/Collage2.2-DGnK05Bj.avif",Wn="/assets/Collage3-DFkhf7Dj.png",Bn="/assets/Collage3-BcNIFg70.webp",Dn="/assets/Collage3-B5d_Mo1C.avif",Tn="/assets/Collage4-kCOo8yH3.png",Mn="/assets/Collage4-CGnx4I1u.webp",In="/assets/Collage4-oLfnlHjv.avif",Rn="/assets/No4-tWT-naWp.png",zn="/assets/No4-C13ToF9v.webp",En="/assets/No4-uFvvpHdS.avif",Ln="/assets/collage45-BhcloC8w.png",On="/assets/collage45-CTy_oiq3.webp",$n="/assets/collage45-CdGUqhOa.avif",Nn="/assets/collage41-xcTaaAgz.jpg",Hn="/assets/collage41-C-iNf1k5.webp",Fn="/assets/collage41-D4UcsnG1.avif",qn="/assets/collage42-BCF3hgyX.jpg",_n="/assets/collage42-CzXz_Svb.webp",Gn="/assets/collage42-BfNE23bd.avif",Zn="/assets/collage43-nZy0CFhL.jpg",Yn="/assets/collage43-DN4dY8Bj.webp",Un="/assets/collage43-BbBE-FQy.avif",Kn="/assets/collage44-Dqh87zRf.png",Vn="/assets/collage44-DNvwBFSZ.webp",Jn="/assets/collage44-BF0QiC6x.avif",Xn="/assets/collage37-DFON43DK.jpg",Qn="/assets/collage37-DvWdcwSp.webp",er="/assets/collage37-BAAn49fF.avif",tr="/assets/collage48-DZx6jyEw.jpg",sr="/assets/collage48-DB1oUpAQ.webp",ir="/assets/collage48-CwejdiWg.avif",ar="/assets/collage40-Hbcze8Xj.png",or="/assets/collage40-D696NpTE.webp",nr="/assets/collage40-C3yNSSrS.avif",rr="/assets/collage39-DBRPTHfZ.png",lr="/assets/collage39-DSTjJkqi.webp",cr="/assets/collage39-D3rIZclW.avif",hr="/assets/collage38-aiSX4pAU.jpg",dr="/assets/collage38-B_cIVJ-j.webp",pr="/assets/collage38-CiCFIkmT.avif",gr="/assets/collage34-Bpe5Ya31.jpg",mr="/assets/collage34-Bv7UAK1q.webp",wr="/assets/collage34-BcgInEO8.avif",fr="/assets/collage35-CB2f8L59.jpg",ur="/assets/collage35-ChcKkhb1.webp",xr="/assets/collage35-CIqVeiob.avif",vr="/assets/collage31-D4hcJcHV.jpg",br="/assets/collage31-CJ5c9XZD.webp",yr="/assets/collage31-Dg9DSk8W.avif",Sr="/assets/collage28-whzQrNDJ.jpg",jr="/assets/collage28-CJNw0J8T.webp",Ar="/assets/collage28-BCEv15vg.avif",Cr="/assets/collage29-Cef1i3ul.jpg",kr="/assets/collage29-Dr1zGOg5.webp",Pr="/assets/collage29-B-dtKedp.avif",Wr="/assets/collage30-BH76F_2f.jpg",Br="/assets/collage30-C1LbBUuX.webp",Dr="/assets/collage30-D9YMew2K.avif",Tr="/assets/collage46-D67OpFQ7.jpg",Mr="/assets/collage46-Bf7jyCsK.webp",Ir="/assets/collage46-Dlm_gGAQ.avif",Rr="/assets/collage33-CveGH9BX.jpg",zr="/assets/collage33-BYRnMAq5.webp",Er="/assets/collage33-CsVuYv2x.avif",Lr="/assets/collage49-uF92TWa3.jpg",Or="/assets/collage49-Bfxf8pjs.webp",$r="/assets/collage49-BWyCu52c.avif",Nr="/assets/Dabs%E2%80%94Myla%E2%80%94Remix-su3ZBcfN.jpg",Hr="/assets/Dabs%E2%80%94Myla%E2%80%94Remix-DvdXe8aU.webp",Fr="/assets/Dabs%E2%80%94Myla%E2%80%94Remix-DGRBEu_X.avif",qr="/assets/spread1-D5_fXKeg.png",_r="/assets/spread1-Ci4o_brL.webp",Gr="/assets/spread1-DPQSQCAJ.avif",Zr="/assets/spread2-BQVy_3SM.png",Yr="/assets/spread2-BpgD9SIo.webp",Ur="/assets/spread2-D5BPv39E.avif",Kr="/assets/spread3-Dn2JBMtL.png",Vr="/assets/spread3-BJkf1f5U.webp",Jr="/assets/spread3-BlrntXSw.avif",Xr="/assets/spread4-ugDB314B.png",Qr="/assets/spread4-BYB_8OM1.webp",el="/assets/spread4--gHa4Ob0.avif",tl="/assets/spread5-CYto1tc-.png",sl="/assets/spread5-DBXLi2bD.webp",il="/assets/spread5-DY-u7Du3.avif",al="/assets/spread6-Dn-KFSiy.png",ol="/assets/spread6-BeTC-zGE.webp",nl="/assets/spread6-BNMu5Gbe.avif",rl="/assets/airbrush-oMuhi549.jpg",ll="/assets/airbrush-BODkAItm.webp",cl="/assets/airbrush-Bpqmg5y1.avif",hl="/assets/YellowLily-EmUmBW21.jpg",dl="/assets/YellowLily-DogBgBag.webp",pl="/assets/YellowLily-BC7iiL0M.avif",gl="/assets/E-png-rl3CDgky.png",ml="/assets/E-png-CMpzjBAX.webp",wl="/assets/E-png-B-pV04zA.avif",fl="/assets/splashpanel-C_rOgCMq.png",ul="/assets/splashpanel-DqPymJZI.webp",xl="/assets/splashpanel-BHOw9jTl.avif",vl="/assets/Yellow-Z-CcA6CBNC.png",bl="/assets/Yellow-Z-RFSaRQ1W.webp",yl="/assets/Yellow-Z-ueflxwtP.avif",Sl="/assets/SelfPortrait-DIGhexpW.jpg",jl="/assets/SelfPortrait-B-fAcnso.webp",Al="/assets/SelfPortrait-CZdbEjSz.avif";function Cl(){j.useEffect(()=>{const l=S=>{if(!S)return;const m=S.querySelector("img");if(!m)return;const b=m.parentElement;b.style.position="relative",b.style.isolation="isolate";let h=b.querySelector(".blend-backdrop");h||(h=document.createElement("div"),h.className="blend-backdrop",h.style.position="absolute",h.style.zIndex="0",h.style.pointerEvents="none",b.insertBefore(h,m));const A=()=>{const D=m.offsetLeft,C=m.offsetTop,W=m.clientWidth,k=m.clientHeight;h.style.left=`${D}px`,h.style.top=`${C}px`,h.style.width=`${W}px`,h.style.height=`${k}px`,h.style.backgroundColor="#f5f5f5",h.style.borderRadius="12px",h.style.setProperty("box-shadow","none","important"),h.style.setProperty("border","none","important"),h.style.setProperty("outline","none","important"),h.style.setProperty("filter","none","important"),m.style.setProperty("box-shadow","none","important"),m.style.setProperty("border","none","important"),m.style.setProperty("outline","none","important"),m.style.setProperty("filter","none","important"),b.style.setProperty("box-shadow","none","important"),b.style.setProperty("border","none","important"),b.style.setProperty("outline","none","important"),b.style.setProperty("filter","none","important"),h.style.overflow="hidden"};m.complete?A():m.addEventListener("load",A,{once:!0}),new window.ResizeObserver(A).observe(m),m.style.position="relative",m.style.zIndex="1",m.style.mixBlendMode="multiply"};document.querySelectorAll(".blend-img").forEach(S=>l(S));const v=()=>{document.querySelectorAll(".blend-img").forEach(S=>l(S))};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[])}const Oe=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],z=p.div`
  display: flex;
  justify-content: center;
  background-color: ${l=>l.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,E=p.img`
  width: ${l=>l.$Width||"auto"};
  max-width: 1000px;
  height: auto;

  @media (max-width: 1000px) {
    width: 90vw;
    padding-top: 3vh;
  }

  @media (max-width: 450px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`,O=p.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  width: 100vw; /* full width */
  min-height: 100vh;
  padding: 5vh 5vw;
  box-sizing: border-box;
  text-align: left;

  /* Prevent section from feeling too tall on short screens */
  @media (max-height: 700px) {
    min-height: 70vh;
    padding: 4vh 5vw;
  }

  @media (max-height: 500px) {
    min-height: 60vh;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    padding: 4vh 4vw;
    content-visibility: auto;
    contain-intrinsic-size: 900px;
  }
`,q=p.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important; /* vertical centering */
  align-items: center !important;     /* horizontal centering */
  width: 100%; /* container takes full width */
  box-sizing: border-box;
  padding: 0 5vw;

  @media (max-width: 850px) {
    padding: 0 4vw;
    justify-content: center !important;
  }
`,$=p.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.2rem, 1.5vw, 1.42rem);
  max-width: 50ch;
  line-height: 1.65;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 1400px) {
    max-width: 50ch;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    max-width: 75vw; /* still shrink width for readability */
  }

  a.inline-link {
    color: #ffffff;
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;

    svg {
      width: 0.8em;
      height: 0.8em;
      vertical-align: middle;
    }
  }
`;function kl(){return Cl(),j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{children:[e.jsx(pe,{title:"Printmaking | Zack MacTavish Art & Design",description:"Screen printing and mixed media works, including collaborations with Olivia Zita Smith and CMYK experiments.",image:ge,url:Y(U()),keywords:["printmaking","screenprint","collaboration","CMYK","collage"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Oe,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:se},{rel:"icon",type:"image/png",sizes:"32x32",href:ie},{rel:"apple-touch-icon",sizes:"180x180",href:ae},{rel:"icon",type:"image/png",sizes:"192x192",href:oe},{rel:"icon",type:"image/png",sizes:"256x256",href:ne},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Printmaking Series",url:Y(U()),author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Oe}}}),e.jsx("h1",{style:me,children:"Printmaking by Zack MacTavish"}),e.jsx(r,{src:rt,webpSrc:je,webpSrcSet:`${ot} 640w, ${nt} 960w, ${je} 2200w`,avifSrc:Se,avifSrcSet:`${it} 640w, ${at} 960w, ${Se} 2200w`,sizes:"100vw",alt:"Cape House exterior",width:3788,height:2015,loading:"eager",decoding:"sync",fetchPriority:"high",style:{width:"100vw",height:"100svh",objectFit:"cover",objectPosition:"bottom",display:"block"}}),e.jsx(r,{src:ln,webpSrc:Ee,webpSrcSet:`${cn} 640w, ${hn} 960w, ${Ee} 2200w`,avifSrc:Le,avifSrcSet:`${dn} 640w, ${pn} 960w, ${Le} 2200w`,sizes:"100vw",alt:"Cape House large view",width:5424,height:2967,style:{width:"100vw",height:"100svh",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsx(Ue,{children:e.jsxs(F,{className:"one-row",children:[e.jsx(r,{src:go,webpSrc:mo,avifSrc:wo,alt:"Collaborative Olivia portrait print"}),e.jsx(r,{src:fo,webpSrc:uo,avifSrc:xo,alt:"Framed collaborative Olivia print"})]})})}),e.jsx(O,{children:e.jsxs($,{children:["My printmaking practice explores screen printing and mixed media techniques, incorporating drawing and painting. I’m drawn to the way I can create multiples and experiment freely with each iteration. Several of these works are collaborative projects with my partner"," ",e.jsxs("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",className:"inline-link",children:["Olivia Zita Smith",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"})})]}),", who works using relief techniques."]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"8vh 0"},children:e.jsxs(M,{className:"large multiply",style:{width:"min(98vw, 100%)",maxWidth:"1800px",margin:"0 auto"},children:[e.jsx(r,{src:Wo,webpSrc:Bo,avifSrc:Do,alt:"Abstract layered screen print",imgStyle:{mixBlendMode:"multiply"}}),e.jsx(r,{src:To,webpSrc:Mo,avifSrc:Io,alt:"Abstract layered screen print variation",imgStyle:{mixBlendMode:"multiply"}}),e.jsx(r,{src:Ro,webpSrc:zo,avifSrc:Eo,alt:"Abstract screen print in layered ink",imgStyle:{mixBlendMode:"multiply"}})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(F,{className:"one-row",children:[e.jsx(r,{src:vo,webpSrc:bo,avifSrc:yo,alt:"Collaborative Olivia print"}),e.jsx(r,{src:So,webpSrc:jo,avifSrc:Ao,alt:"Collaborative Olivia print variation"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:Co,webpSrc:ko,avifSrc:Po,alt:"Olivia collaboration portrait"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(F,{className:"one-row",children:[e.jsx(r,{src:qo,webpSrc:_o,avifSrc:Go,alt:"Collaborative Olivia print with alternate colorway"}),e.jsx(r,{src:No,webpSrc:Ho,avifSrc:Fo,alt:"Alternate framed collaborative Olivia print"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(F,{className:"one-row",children:[e.jsx(r,{src:Zo,webpSrc:Yo,avifSrc:Uo,alt:"Olivia collaboration print detail"}),e.jsx(r,{src:Ko,webpSrc:Vo,avifSrc:Jo,alt:"Olivia collaboration print variation"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(r,{src:Xo,webpSrc:Qo,avifSrc:en,alt:"CMYK bear print"}),e.jsx(r,{src:tn,webpSrc:sn,avifSrc:an,alt:"Graffiti collage print"}),e.jsx(r,{src:on,webpSrc:nn,avifSrc:rn,alt:"The Town print"})]})}),e.jsx(O,{children:e.jsx(q,{children:e.jsxs($,{children:["I often look for ways to capture moments from my life. Painting gives me a way to work through shape, color, and atmosphere.",e.jsx("br",{}),e.jsx("br",{}),"I move between realism and abstraction depending on what a piece needs."]})})}),e.jsxs("section",{style:{background:"white",width:"100vw",padding:"4vh 0"},children:[e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Lo,imageWebp:Oo,imageAvif:$o,imageAlt:"Olivia Collaboration print",children:[e.jsx(g,{children:"Olivia Collaboration"}),e.jsx(f,{children:"2022"}),e.jsx(y,{children:"Spraypaint, and relief ink on paper"})]}),e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:fl,imageWebp:ul,imageAvif:xl,imageAlt:"MILKBONES painting",children:[e.jsx(g,{children:"MILKBONES"}),e.jsx(f,{children:"2021"}),e.jsx(y,{children:"Spray paint and acrylic paint on wood panel."})]}),e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:vl,imageWebp:bl,imageAvif:yl,imageAlt:"YELLOW TWEED painting",children:[e.jsx(g,{children:"YELLOW TWEED"}),e.jsx(f,{children:"2015-21"}),e.jsx(y,{children:"Spray paint and acrylic paint on wood panel."})]}),e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:hl,imageWebp:dl,imageAvif:pl,imageAlt:"Yellow Lily painting",children:[e.jsx(g,{children:"Yellow Lily"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Airbrush & acrylic on yupo paper."})]}),e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:rl,imageWebp:ll,imageAvif:cl,imageAlt:"SHAPES painting",children:[e.jsx(g,{children:"SHAPES"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Acrylic & spraypaint on yupo paper."})]}),e.jsxs(u,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:gl,imageWebp:ml,imageAvif:wl,imageAlt:"ORANGE CACTI painting",children:[e.jsx(g,{children:"ORANGE CACTI"}),e.jsx(f,{children:"2015-21"}),e.jsx(y,{children:"Spray paint and acrylic paint on wood panel."})]})]}),e.jsx(z,{style:{paddingBottom:"100px"},children:e.jsx(E,{as:r,$Width:"55vw",src:Sl,webpSrc:jl,avifSrc:Al,alt:"Self portrait"})}),e.jsx(O,{children:e.jsx(q,{children:e.jsx($,{children:"Collaging is a playful way for me to explore composition, shape, and color. It lets me experiment freely, test ideas quickly, and discover new directions for the work."})})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(r,{src:vn,webpSrc:bn,avifSrc:yn,alt:"Abstract collage artwork 32"}),e.jsx(r,{src:fn,webpSrc:un,avifSrc:xn,alt:"Abstract collage artwork 47"}),e.jsx(r,{src:gn,webpSrc:mn,avifSrc:wn,alt:"Abstract collage artwork 50"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:qr,webpSrc:_r,avifSrc:Gr,alt:"Collage sketchbook spread 1"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(r,{src:Sn,webpSrc:jn,avifSrc:An,alt:"Abstract collage artwork 1"}),e.jsx(r,{src:Cn,webpSrc:kn,avifSrc:Pn,alt:"Abstract collage artwork 2"}),e.jsx(r,{src:Wn,webpSrc:Bn,avifSrc:Dn,alt:"Abstract collage artwork 3"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:Zr,webpSrc:Yr,avifSrc:Ur,alt:"Collage sketchbook spread 2"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(r,{src:Tn,webpSrc:Mn,avifSrc:In,alt:"Abstract collage artwork 4"}),e.jsx(r,{src:Rn,webpSrc:zn,avifSrc:En,alt:"Abstract collage artwork 4 alternate version"}),e.jsx(r,{src:Ln,webpSrc:On,avifSrc:$n,alt:"Abstract collage artwork 45"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:Kr,webpSrc:Vr,avifSrc:Jr,alt:"Collage sketchbook spread 3"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(r,{src:Kn,webpSrc:Vn,avifSrc:Jn,alt:"Abstract collage artwork 44"}),e.jsx(r,{src:Xn,webpSrc:Qn,avifSrc:er,alt:"Abstract collage artwork 37"}),e.jsx(r,{src:tr,webpSrc:sr,avifSrc:ir,alt:"Abstract collage artwork 48"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:Xr,webpSrc:Qr,avifSrc:el,alt:"Collage sketchbook spread 4"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(r,{src:ar,webpSrc:or,avifSrc:nr,alt:"Abstract collage artwork 40"}),e.jsx(r,{src:rr,webpSrc:lr,avifSrc:cr,alt:"Abstract collage artwork 39"}),e.jsx(r,{src:hr,webpSrc:dr,avifSrc:pr,alt:"Abstract collage artwork 38"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:tl,webpSrc:sl,avifSrc:il,alt:"Collage sketchbook spread 5"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(r,{src:gr,webpSrc:mr,avifSrc:wr,alt:"Abstract collage artwork 34"}),e.jsx(r,{src:fr,webpSrc:ur,avifSrc:xr,alt:"Abstract collage artwork 35"}),e.jsx(r,{src:vr,webpSrc:br,avifSrc:yr,alt:"Abstract collage artwork 31"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:al,webpSrc:ol,avifSrc:nl,alt:"Collage sketchbook spread 6"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(r,{src:Sr,webpSrc:jr,avifSrc:Ar,alt:"Abstract collage artwork 28"}),e.jsx(r,{src:Cr,webpSrc:kr,avifSrc:Pr,alt:"Abstract collage artwork 29"}),e.jsx(r,{src:Wr,webpSrc:Br,avifSrc:Dr,alt:"Abstract collage artwork 30"})]})}),e.jsx(z,{children:e.jsx(E,{as:r,$Width:"60vw",src:Nr,webpSrc:Hr,avifSrc:Fr,alt:"Collage artwork titled Dabs Myla Remix",imgStyle:{borderRadius:"18px"}})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(r,{src:Tr,webpSrc:Mr,avifSrc:Ir,alt:"Abstract collage artwork 46"}),e.jsx(r,{src:Rr,webpSrc:zr,avifSrc:Er,alt:"Abstract collage artwork 33"}),e.jsx(r,{src:Lr,webpSrc:Or,avifSrc:$r,alt:"Abstract collage artwork 49"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(M,{style:{backgroundColor:"transparent"},children:[e.jsx(r,{src:Nn,webpSrc:Hn,avifSrc:Fn,alt:"Abstract collage artwork 41"}),e.jsx(r,{src:qn,webpSrc:_n,avifSrc:Gn,alt:"Abstract collage artwork 42"}),e.jsx(r,{src:Zn,webpSrc:Yn,avifSrc:Un,alt:"Abstract collage artwork 43"})]})})]})}const nh=Object.freeze(Object.defineProperty({__proto__:null,FullHeightTextSection:O,TextContainer:q,TextContent:$,default:kl},Symbol.toStringTag,{value:"Module"})),Pl="/assets/Composition-BackCover-Pt.2-01-CgJGr0YY.jpg",$e="/assets/Composition-BackCover-Pt.2-01-ClPDHp8f.webp",Ne="/assets/Composition-BackCover-Pt.2-01-Brw18o1R.avif",Wl="/assets/Composition-BackCover-Pt.2-01-640-hLwNqpV9.webp",Bl="/assets/Composition-BackCover-Pt.2-01-960-0YCK3KpW.webp",Dl="/assets/Composition-BackCover-Pt.2-01-640-DJc-I_AQ.avif",Tl="/assets/Composition-BackCover-Pt.2-01-960-DjxWYxI5.avif",Ml="/assets/Render1-DT-g5NKH.png",Il="/assets/Render1-CPYa-0q4.webp",Rl="/assets/Render1-DOs6TUJE.avif",He="/assets/Artbook-CTrBke0P.png",Fe="/assets/Artbook-4LqNfgyx.webp",qe="/assets/Artbook-qr5jOApA.avif",zl="/assets/Orbital-MSHexiyD.webp",El="/assets/Orbital-kkd1dZ4d.avif",Ll="/assets/Spraypaintwash-BaOYkJyw.webp",Ol="/assets/Spraypaintwash-v7LuXuaa.avif",$l="/assets/Render2-BeFVEg4T.png",Nl="/assets/Render2-BFuydU6r.webp",Hl="/assets/Render2-DoNAMUHJ.avif",Fl="/assets/Twin1-D2RWvRgs.jpeg",ql="/assets/Twin1-Ekj5P1xU.webp",_l="/assets/Twin1-BsV_5Kc4.avif",Gl="/assets/Twin2-CDf_Ciy4.jpeg",Zl="/assets/Twin2-Ct4ksB9p.webp",Yl="/assets/Twin2-DIgZcP_8.avif",Ul="/assets/Staircases-rPaNQ9T8.webp",Kl="/assets/Staircases-CntQHqy2.avif",Vl="/assets/heartwhite-hmQhQCSU.jpeg",Jl="/assets/heartwhite-BY7Arldd.webp",Xl="/assets/heartwhite-Deen9ZYa.avif",Ql="/assets/heartblack-BNrbkkGC.jpg",ec="/assets/heartblack-BDj6PpTZ.webp",tc="/assets/heartblack-BM5GOsEM.avif",sc="/assets/Birds-BRR20DEX.jpg",ic="/assets/Birds-BfTLwFSA.webp",ac="/assets/Birds-CpIRV6cj.avif",oc="/assets/Brooklyn-CDo2RsPc.webp",nc="/assets/Brooklyn-B3Xxez07.avif",rc="/assets/Coney-amO18Ojw.webp",lc="/assets/Coney-BbkJzuhU.avif",cc="/assets/Brooklyn2-BOjlmPf4.webp",hc="/assets/Brooklyn2-hysoQXg9.avif",dc="/assets/Render4-CUv_OZcU.png",pc="/assets/Render4-BbP-SCPU.webp",gc="/assets/Render4-czE6f-R8.avif",mc="/assets/Rug-DNTpYrqu.webp",wc="/assets/Rug-qk7_00KP.avif",fc="/assets/Mash1-By186HQs.webp",uc="/assets/Mash1-CD7JNTpE.avif",xc="/assets/Mash2-BhSatqSs.webp",vc="/assets/Mash2-DatWVgGz.avif",bc="/assets/Render5-DDVrXzlj.png",yc="/assets/Render5-8-OqZTM_.webp",Sc="/assets/Render5-D__NT6lp.avif",jc="/assets/Mash3-CfssUcL-.webp",Ac="/assets/Mash3-BzVVQDAv.avif",Cc="/assets/Mash4-voIqPWzH.webp",kc="/assets/Mash4-CfZ6Zm83.avif",Pc="/assets/Mattos-cG9NEt7H.png",Wc="/assets/Mattos-DpEAIyko.webp",Bc="/assets/Mattos-CvCWgofy.avif",Dc="/assets/No.3-DZfy37SG.webp",Tc="/assets/No.3-DYCAAtZK.avif",Mc="/assets/Grain-gPTL1VTa.webp",Ic="/assets/Grain-DXHUqFdd.avif",_e=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],Rc=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${l=>l.theme.backgroundTwo};
  width: 100vw;
  min-height: 100vh; /* ensures full height but can shrink on smaller screens */
  overflow: hidden;
  padding: 2vh 0;

  @media (max-height: 800px) {
    min-height: 70vh; /* shrink height on smaller viewports */
  }

  @media (max-width: 850px) {
    min-height: 60vh;
  }
`,zc=p.img`
  background-color: ${l=>l.theme.backgroundTwo};
  width: 54vw;
  max-width: 90vw; /* prevents overflow on small screens */
  height: auto;

  @media (max-width: 850px) {
    width: 80vw; /* scale up a bit relative to smaller screens */
  }
`,X=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${l=>l.theme.backgroundTwo};
  padding: 4vh 0;
`,Q=p.img`
  width: min(74vw, 1180px);
  max-width: 92vw;
  height: auto;
  display: block;
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 90vw;
  }
`,Ec=p.a`
  width: min(88vw, 72ch);
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: clamp(16px, 2vw, 24px);
  align-items: center;
  color: inherit;
  text-decoration: none;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,Lc=p.img`
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 9;
    min-height: 0;
  }
`,Oc=p.div`
  padding: clamp(1.4rem, 2.4vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,$c=p.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.18rem, 1.45vw, 1.45rem);
  line-height: 1.12;
  color: #181818;
`,Nc=p.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  line-height: 1.5;
  color: #4f4f4f;
`,Hc=p.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: #111;
`,re=p.img`
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
`,Fc=p(re)`
  grid-row-start: 3;
`,qc=p(re)`
  grid-row-start: 5;
`;p.img`
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
`;const fe=p.img`
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
`,ue=p.div`
  grid-row-start: 2;
  grid-column: 1 / span 2;
  justify-self: start;
  color: ${l=>l.theme.fontColor};
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
`,de=p.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${l=>l.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,Ye=p.div`
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
`,_c=p.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: ${l=>l.Grids};
padding-top: 5vh;
background-color:${l=>l.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    height: auto;
    row-gap: 2ch;
    padding: 0;
}
`,xe=p.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 460px));
  grid-template-rows: auto auto;
  width: 100vw;
  box-sizing: border-box;
  padding-left: max(6vw, calc((100vw - 1180px) / 2));
  padding-right: max(6vw, calc((100vw - 1180px) / 2));
  justify-content: start;
  column-gap: clamp(18px, 2vw, 28px);
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${l=>l.theme.backgroundTwo};

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
`,Gc=p.div`
  display: grid;
  grid-template-columns: 10vw 40vw 40vw 10vw;
  grid-template-rows: auto auto auto auto auto auto;
  row-gap: 3ch;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background-color: ${l=>l.theme.backgroundTwo};

  @media (max-width: 830px) {
    grid-template-columns: 100vw;
    grid-template-rows: auto;
    row-gap: 2ch;
    padding: 5vh 0 5vh 0; // add padding top for stacked layout
  }
`,Zc=p.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color: ${l=>l.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto auto auto;
    height: auto;
    row-gap: 2ch;
}
`,Yc=p.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: auto auto;
row-gap: 3ch;
padding-top: 5vh;
padding-bottom: 5vh;
background-color:${l=>l.theme.backgroundTwo};

@media (max-width: 830px){
    grid-template-columns: 100vw;
    grid-template-rows: auto auto;
    height: auto;
    row-gap: 2ch;
}
`,ve=p.div`
  grid-column-start: 3;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7.5vw;
  padding-right: 6vw;
  color: ${l=>l.theme.fontColor};

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
`,Uc=p(ve)`
  grid-row-start: 3;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,Kc=p(ve)`
  grid-row-start: 5;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,g=p.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: #222;

  @media(max-width: 1750px) { font-size: 1.8rem; }
  @media(max-width: 830px) { font-size: 1.4rem; }
`,f=p.h3`
  font-weight: 500;
  font-size: 2rem;
  margin: 0 0 1rem 0;  // spacing below year
  color: #222;

  @media(max-width: 1750px) { font-size: 1.5rem; }
  @media(max-width: 830px) { font-size: 1.2rem; }
`,y=p.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2; // tighter line-height for description
  margin: 0;
  color: #222;

  @media(max-width: 1750px) { font-size: 1rem; }
  @media(max-width: 830px) { font-size: 0.9rem; }
`,Vc=p.div`
  font-family: 'Space Grotesk', sans-serif;
  color: #5d5d5d;
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
`;function Jc(){j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const l=Y(U());return e.jsxs("div",{children:[e.jsx("style",{children:`
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
`}),e.jsx(pe,{title:"Composition | Zack MacTavish Art & Design",description:"Composition is Zack MacTavish's first solo show, using the composition notebook as a metaphor for self-reflection through paintings, photographs, collages, rugs, and a self-published book made from 2019 to 2021.",image:ge,url:l,keywords:["composition","painting","render","photography"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:_e,favicons:[{rel:"icon",sizes:"16x16",href:se},{rel:"icon",sizes:"32x32",href:ie},{rel:"icon",sizes:"256x256",href:ne},{rel:"icon",sizes:"512x512",href:Z},{rel:"apple-touch-icon",sizes:"180x180",href:ae},{rel:"icon",sizes:"192x192",href:oe},{rel:"icon",sizes:"512x512",href:Z},{rel:"icon",type:"image/png",sizes:"16x16",href:se},{rel:"icon",type:"image/png",sizes:"32x32",href:ie},{rel:"apple-touch-icon",sizes:"180x180",href:ae},{rel:"icon",type:"image/png",sizes:"192x192",href:oe},{rel:"icon",type:"image/png",sizes:"256x256",href:ne},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Composition Series",url:l,author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:_e}}}),e.jsx("h1",{style:me,children:"Composition by Zack MacTavish"}),e.jsx(Rc,{children:e.jsx(zc,{as:r,src:Pl,webpSrc:$e,webpSrcSet:`${Wl} 640w, ${Bl} 960w, ${$e} 2200w`,avifSrc:Ne,avifSrcSet:`${Dl} 640w, ${Tl} 960w, ${Ne} 2200w`,sizes:"(max-width: 850px) 80vw, 54vw",alt:"Composition notebook cover",width:5620,height:3685,loading:"eager",decoding:"sync",fetchPriority:"high"})}),e.jsxs(O,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2rem"},children:[e.jsx(q,{style:{width:"min(88vw, 72ch)",padding:0,alignItems:"stretch"},children:e.jsx($,{style:{maxWidth:"100%"},children:"Composition was my first solo art show and uses the composition notebook as a metaphor for self-reflection across the places I have lived. The series grew out of moving more than 21 times through Rhode Island, Massachusetts, Illinois, New York, Oregon, and Pennsylvania, and became a way to document how environment, memory, and personal growth accumulate over time. Made between 2019 and 2021, the show brought together paintings, a graphite drawing, hand-tufted rugs, photographs, physical and digital collages, and a self-published book."})}),e.jsxs(Ec,{href:"https://medium.com/@zmactavish/my-first-solo-art-show-de7ac72b054f",target:"_blank",rel:"noreferrer",children:[e.jsx(Lc,{as:r,src:He,webpSrc:Fe,avifSrc:qe,alt:"Composition art book and blog post preview"}),e.jsxs(Oc,{children:[e.jsx($c,{children:"Read more about Composition"}),e.jsx(Nc,{children:"A short essay on the show, the series, and how it led into my current body of work."}),e.jsx(Hc,{children:"Read on Medium"})]})]})]}),e.jsx(X,{children:e.jsx(Q,{as:r,src:Ml,webpSrc:Il,avifSrc:Rl,alt:"Composition render one"})}),e.jsxs("div",{style:{backgroundColor:"#f5f5f5",width:"100vw",padding:"8vh 0"},children:[e.jsx(u,{className:"tight-split",imageSrc:He,imageWebp:Fe,imageAvif:qe,imageAlt:"Composition artist book",children:e.jsx(Vc,{children:"I self-published a limited edition book for Composition. All 30 copies sold during the run of the series, and the book extended the exhibition's interest in journaling, documentation, and building an archive around the work."})}),e.jsx("div",{style:{width:"100vw",background:"#f5f5f5",padding:"4vh 0"},children:e.jsx(Nt,{})})]}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Ht,imageWebp:zl,imageAvif:El,imageAlt:"ORBITAL mixed-media work from Composition",children:[e.jsx(g,{children:"ORBITAL"}),e.jsx(f,{children:"2021"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Ft,imageWebp:Ll,imageAvif:Ol,imageAlt:"Erasure 1",children:[e.jsx(g,{children:"ERASURE I"}),e.jsx(f,{children:"2021"})]})}),e.jsx(X,{children:e.jsx(Q,{as:r,src:$l,webpSrc:Nl,avifSrc:Hl,alt:"Composition render 2"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:qt,imageWebp:Ul,imageAvif:Kl,imageAlt:"Staircases",children:[e.jsx(g,{children:"STAIRCASES"}),e.jsx(f,{children:"2021"})]})}),e.jsxs(xe,{children:[e.jsx(re,{as:r,src:Vl,webpSrc:Jl,avifSrc:Xl,alt:"Composition X detail white"}),e.jsx(fe,{as:r,src:Ql,webpSrc:ec,avifSrc:tc,alt:"Composition X detail black"}),e.jsxs(ue,{children:[e.jsx(g,{children:"COMPOSITION X"}),e.jsx(f,{children:"2021"})]})]}),e.jsx(r,{src:sc,webpSrc:ic,avifSrc:ac,alt:"Birds composition",style:{width:"100vw",height:"100vh",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageSrc:_t,imageWebp:rc,imageAvif:lc,imageAlt:"Coney Island, NY",children:[e.jsx(g,{children:"CONEY ISLAND, NY"}),e.jsx(f,{children:"2021"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageSrc:Gt,imageWebp:oc,imageAvif:nc,imageAlt:"Brooklyn, NY I",children:[e.jsx(g,{children:"BROOKLYN, NY I"}),e.jsx(f,{children:"2021"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageSrc:Zt,imageWebp:cc,imageAvif:hc,imageAlt:"Brooklyn, NY II",children:[e.jsx(g,{children:"BROOKLYN, NY II"}),e.jsx(f,{children:"2021"})]})}),e.jsx(X,{children:e.jsx(Q,{as:r,src:dc,webpSrc:pc,avifSrc:gc,alt:"Composition render 4"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageSrc:Yt,imageWebp:mc,imageAvif:wc,imageAlt:"Rug I",children:[e.jsx(g,{children:"RUG I"}),e.jsx(f,{children:"2021"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Ut,imageWebp:fc,imageAvif:uc,imageAlt:"Composition III",children:[e.jsx(g,{children:"COMPOSITION III"}),e.jsx(f,{children:"2019"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Kt,imageWebp:xc,imageAvif:vc,imageAlt:"Composition IV",children:[e.jsx(g,{children:"COMPOSITION IV"}),e.jsx(f,{children:"2019"})]})}),e.jsx(X,{children:e.jsx(Q,{as:r,src:bc,webpSrc:yc,avifSrc:Sc,alt:"Composition render 5"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Vt,imageWebp:jc,imageAvif:Ac,imageAlt:"Composition V",children:[e.jsx(g,{children:"COMPOSITION V"}),e.jsx(f,{children:"2019"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Jt,imageWebp:Cc,imageAvif:kc,imageAlt:"Composition VI",children:[e.jsx(g,{children:"COMPOSITION VI"}),e.jsx(f,{children:"2019"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:ht,imageWebp:ct,imageAvif:lt,imageAlt:"Composition VII",children:[e.jsx(g,{children:"COMPOSITION VII"}),e.jsx(f,{children:"2020"})]})}),e.jsx(X,{children:e.jsx(Q,{as:r,src:Pc,webpSrc:Wc,avifSrc:Bc,alt:"Mattos collage"})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw",padding:"5vh 0"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Xt,imageWebp:Dc,imageAvif:Tc,imageAlt:"Composition I",children:[e.jsx(g,{children:"COMPOSITION I"}),e.jsx(f,{children:"2018"})]})}),e.jsx("div",{style:{backgroundColor:"white",width:"100vw"},children:e.jsxs(u,{imageMode:"framed",imageSrc:Qt,imageWebp:Mc,imageAvif:Ic,imageAlt:"GRAIN mixed-media work from Composition",children:[e.jsx(g,{children:"GRAIN"}),e.jsx(f,{children:"2021"})]})}),e.jsxs(xe,{children:[e.jsx(re,{as:r,src:Fl,webpSrc:ql,avifSrc:_l,alt:"Ephemeral I"}),e.jsx(fe,{as:r,src:Gl,webpSrc:Zl,avifSrc:Yl,alt:"Ephemeral II"}),e.jsxs(ue,{children:[e.jsx(g,{children:"EPHEMERAL I & II"}),e.jsx(f,{children:"2021"})]})]}),e.jsx(O,{children:e.jsx(q,{children:e.jsx($,{children:"Over the course of Composition, I started to understand that the work was pointing me beyond transition itself and toward the more permanent fixtures that shape a life: the homes I have lived in, the people around me, and the hidden histories carried by those spaces. That realization became the foundation for my current body of work, which turns more fully toward quilting, embroidery, collage, painting, and bookmaking as forms of archive. What Composition began to explore through notebooks, photographs, and fragments of place has expanded into a longer investigation of family, memory, identity, and preservation."})})})]})}const rh=Object.freeze(Object.defineProperty({__proto__:null,ArtDesc:y,ArtHeader:g,ArtSectionThreeone:Yc,ArtSectionThreetwo:Zc,ArtSectionthree:_c,ArtSectionthreeog:Gc,ArtSectiontwins:xe,ArtText:ve,ArtTextthree:Kc,ArtTexttwo:Uc,ArtYear:f,FullBg:de,GridRowThree:qc,GridRowTwo:Fc,Orbital:re,ParagraphFour:Ye,TwinTwo:fe,TwinsText:ue,default:Jc},Symbol.toStringTag,{value:"Module"}));export{g as A,rh as C,oh as D,de as F,ah as M,M as T,f as a,y as b,nh as c};
