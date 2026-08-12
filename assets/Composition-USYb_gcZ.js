import{R as te,b as j,j as e}from"./react-three-BKJczYnz.js";import{S as ge,f as ie,a as ae,b as re,i as ne,c as oe,d as Z,o as me,e as Y,v as fe,N as S,I as w,G as Ve}from"./website-logoresolutions-1200x630-C9kS2TAW.js";import{R as o}from"./ResponsiveImage-ER0KLJEM.js";import{l as d,u as U}from"./index-CJ9-irDe.js";import{i as Je,a as Xe,b as Qe,c as et,d as tt,e as ye,f as st,g as it,h as Se,j as at,k as rt,l as nt,m as je,n as ot,o as lt,p as Ae,q as ct,r as ht,s as dt,t as pt}from"./Mash5-CYe4zDdQ.js";import{N as gt}from"./About-Dw8uezWu.js";var se={exports:{}},mt=se.exports,ke;function ft(){return ke||(ke=1,(function(r,v){(function(b,g){g(v)})(mt,(function(b){class g{constructor(t,s){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=s,this.nowDrawingDensity=this.createdDensity,this.render=t}setDensity(t){this.createdDensity=t,this.nowDrawingDensity=t}setDrawingDensity(t){this.nowDrawingDensity=t}setPosition(t){this.state.position=t}setAngle(t){this.state.angle=t}setArea(t){this.state.area=t}setHardDrawingAngle(t){this.state.hardDrawingAngle=t}setHardAngle(t){this.state.hardAngle=t,this.state.hardDrawingAngle=t}setOrientation(t){this.orientation=t}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class A extends g{constructor(t,s,i){super(t,i),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=s}draw(t){const s=this.render.getContext(),i=this.render.convertToGlobal(this.state.position),a=this.render.getRect().pageWidth,n=this.render.getRect().height;s.save(),s.translate(i.x,i.y),s.beginPath();for(let l of this.state.area)l!==null&&(l=this.render.convertToGlobal(l),s.lineTo(l.x-i.x,l.y-i.y));s.rotate(this.state.angle),s.clip(),this.isLoad?s.drawImage(this.image,0,0,a,n):this.drawLoader(s,{x:0,y:0},a,n),s.restore()}simpleDraw(t){const s=this.render.getRect(),i=this.render.getContext(),a=s.pageWidth,n=s.height,l=t===1?s.left+s.pageWidth:s.left,x=s.top;this.isLoad?i.drawImage(this.image,l,x,a,n):this.drawLoader(i,{x:l,y:x},a,n)}drawLoader(t,s,i,a){t.beginPath(),t.strokeStyle="rgb(200, 200, 200)",t.fillStyle="rgb(255, 255, 255)",t.lineWidth=1,t.rect(s.x+1,s.y+1,i-1,a-1),t.stroke(),t.fill();const n={x:s.x+i/2,y:s.y+a/2};t.beginPath(),t.lineWidth=10,t.arc(n.x,n.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),t.stroke(),t.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class p{constructor(t,s){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=s,this.app=t,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let s=0;s<this.pages.length;s++)this.portraitSpread.push([s]);let t=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([t]),t++);for(let s=t;s<this.pages.length;s+=2)s<this.pages.length-1?this.landscapeSpread.push([s,s+1]):(this.landscapeSpread.push([s]),this.pages[s].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(t){const s=this.getSpread();for(let i=0;i<s.length;i++)if(t===s[i][0]||t===s[i][1])return i;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(t){if(t>=0&&t<this.pages.length)return this.pages[t];throw new Error("Invalid page number")}nextBy(t){const s=this.pages.indexOf(t);return s<this.pages.length-1?this.pages[s+1]:null}prevBy(t){const s=this.pages.indexOf(t);return s>0?this.pages[s-1]:null}getFlippingPage(t){const s=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[s].newTemporaryCopy():this.pages[s-1];{const i=t===0?this.getSpread()[s+1]:this.getSpread()[s-1];return i.length===1||t===0?this.pages[i[0]]:this.pages[i[1]]}}getBottomPage(t){const s=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return t===0?this.pages[s+1]:this.pages[s-1];{const i=t===0?this.getSpread()[s+1]:this.getSpread()[s-1];return i.length===1?this.pages[i[0]]:t===0?this.pages[i[1]]:this.pages[i[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(t=null){if(t===null&&(t=this.currentPageIndex),t<0||t>=this.pages.length)return;const s=this.getSpreadIndexByPage(t);s!==null&&(this.currentSpreadIndex=s,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(t){if(!(t>=0&&t<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=t}showSpread(){const t=this.getSpread()[this.currentSpreadIndex];t.length===2?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(this.pages[t[1]])):this.render.getOrientation()==="landscape"&&t[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[t[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[t[0]])),this.currentPageIndex=t[0],this.app.updatePageIndex(this.currentPageIndex)}}class C extends p{constructor(t,s,i){super(t,s),this.imagesHref=i}load(){for(const t of this.imagesHref){const s=new A(this.render,t,"soft");s.load(),this.pages.push(s)}this.createSpread()}}class u{static GetDistanceBetweenTwoPoint(t,s){return t===null||s===null?1/0:Math.sqrt(Math.pow(s.x-t.x,2)+Math.pow(s.y-t.y,2))}static GetSegmentLength(t){return u.GetDistanceBetweenTwoPoint(t[0],t[1])}static GetAngleBetweenTwoLine(t,s){const i=t[0].y-t[1].y,a=s[0].y-s[1].y,n=t[1].x-t[0].x,l=s[1].x-s[0].x;return Math.acos((i*a+n*l)/(Math.sqrt(i*i+n*n)*Math.sqrt(a*a+l*l)))}static PointInRect(t,s){return s===null?null:s.x>=t.left&&s.x<=t.width+t.left&&s.y>=t.top&&s.y<=t.top+t.height?s:null}static GetRotatedPoint(t,s,i){return{x:t.x*Math.cos(i)+t.y*Math.sin(i)+s.x,y:t.y*Math.cos(i)-t.x*Math.sin(i)+s.y}}static LimitPointToCircle(t,s,i){if(u.GetDistanceBetweenTwoPoint(t,i)<=s)return i;const a=t.x,n=t.y,l=i.x,x=i.y;let h=Math.sqrt(Math.pow(s,2)*Math.pow(a-l,2)/(Math.pow(a-l,2)+Math.pow(n-x,2)))+a;i.x<0&&(h*=-1);let k=(h-a)*(n-x)/(a-l)+n;return a-l+n===0&&(k=s),{x:h,y:k}}static GetIntersectBetweenTwoSegment(t,s,i){return u.PointInRect(t,u.GetIntersectBeetwenTwoLine(s,i))}static GetIntersectBeetwenTwoLine(t,s){const i=t[0].y-t[1].y,a=s[0].y-s[1].y,n=t[1].x-t[0].x,l=s[1].x-s[0].x,x=t[0].x*t[1].y-t[1].x*t[0].y,h=s[0].x*s[1].y-s[1].x*s[0].y,k=i*h-a*x,P=n*h-l*x,R=-(x*l-h*n)/(i*l-a*n),q=-(i*h-a*x)/(i*l-a*n);if(isFinite(R)&&isFinite(q))return{x:R,y:q};if(Math.abs(k-P)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(t,s){const i=Math.abs(t.x-s.x),a=Math.abs(t.y-s.y),n=Math.max(i,a),l=[t];function x(h,k,P,R,q){return k>h?h+q*(P/R):k<h?h-q*(P/R):h}for(let h=1;h<=n;h+=1)l.push({x:x(t.x,s.x,i,n,h),y:x(t.y,s.y,a,n,h)});return l}}class D extends g{constructor(t,s,i){super(t,i),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=s,this.element.classList.add("stf__item"),this.element.classList.add("--"+i)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new D(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(t){const s=t||this.nowDrawingDensity,i=this.render.convertToGlobal(this.state.position),a=this.render.getRect().pageWidth,n=this.render.getRect().height;this.element.classList.remove("--simple");const l=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${a}px;
            height: ${n}px;
        `;s==="hard"?this.drawHard(l):this.drawSoft(i,l)}drawHard(t=""){const s=this.render.getRect().left+this.render.getRect().width/2,i=this.state.hardDrawingAngle,a=t+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${i}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${s}px, 0, 0) rotateY(${i}deg);`);this.element.style.cssText=a}drawSoft(t,s=""){let i="polygon( ";for(const n of this.state.area)if(n!==null){let l=this.render.getDirection()===1?{x:-n.x+this.state.position.x,y:n.y-this.state.position.y}:{x:n.x-this.state.position.x,y:n.y-this.state.position.y};l=u.GetRotatedPoint(l,{x:0,y:0},this.state.angle),i+=l.x+"px "+l.y+"px, "}i=i.slice(0,-2),i+=")";const a=s+`transform-origin: 0 0; clip-path: ${i}; -webkit-clip-path: ${i};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${t.x}px, ${t.y}px);`:`transform: translate3d(${t.x}px, ${t.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=a}simpleDraw(t){const s=this.render.getRect(),i=s.pageWidth,a=s.height,n=t===1?s.left+s.pageWidth:s.left,l=s.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${a}px; 
            left: ${n}px; 
            top: ${l}px; 
            width: ${i}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(t){super.setOrientation(t),this.element.classList.remove("--left","--right"),this.element.classList.add(t===1?"--right":"--left")}setDrawingDensity(t){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+t),super.setDrawingDensity(t)}}class B extends p{constructor(t,s,i,a){super(t,s),this.element=i,this.pagesElement=a}load(){for(const t of this.pagesElement){const s=new D(this.render,t,t.dataset.density==="hard"?"hard":"soft");s.load(),this.pages.push(s)}this.createSpread()}}class T{constructor(t,s,i,a){this.direction=t,this.corner=s,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(i,10),this.pageHeight=parseInt(a,10)}calc(t){try{return this.position=this.calcAngleAndPosition(t),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const t=[];let s=!1;return t.push(this.rect.topLeft),t.push(this.topIntersectPoint),this.sideIntersectPoint===null?s=!0:(t.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(s=!1)),t.push(this.bottomIntersectPoint),(s||this.corner==="bottom")&&t.push(this.rect.bottomLeft),t}getBottomClipArea(){const t=[];return t.push(this.topIntersectPoint),this.corner==="top"?t.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&t.push({x:this.pageWidth,y:0}),t.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?u.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&t.push(this.sideIntersectPoint):this.corner==="top"&&t.push({x:this.pageWidth,y:this.pageHeight}),t.push(this.bottomIntersectPoint),t.push(this.topIntersectPoint),t}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const t=u.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?t:Math.PI-t}calcAngleAndPosition(t){let s=t;if(this.updateAngleAndGeometry(s),s=this.corner==="top"?this.checkPositionAtCenterLine(s,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(s,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(s.x-this.pageWidth)<1&&Math.abs(s.y)<1)throw new Error("Point is too small");return s}updateAngleAndGeometry(t){this.angle=this.calculateAngle(t),this.rect=this.getPageRect(t)}calculateAngle(t){const s=this.pageWidth-t.x+1,i=this.corner==="bottom"?this.pageHeight-t.y:t.y;let a=2*Math.acos(s/Math.sqrt(i*i+s*s));i<0&&(a=-a);const n=Math.PI-a;if(!isFinite(a)||n>=0&&n<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(a=-a),a}getPageRect(t){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],t):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],t)}getRectFromBasePoint(t,s){return{topLeft:this.getRotatedPoint(t[0],s),topRight:this.getRotatedPoint(t[1],s),bottomLeft:this.getRotatedPoint(t[2],s),bottomRight:this.getRotatedPoint(t[3],s)}}getRotatedPoint(t,s){return{x:t.x*Math.cos(this.angle)+t.y*Math.sin(this.angle)+s.x,y:t.y*Math.cos(this.angle)-t.x*Math.sin(this.angle)+s.y}}calculateIntersectPoint(t){const s={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=u.GetIntersectBetweenTwoSegment(s,[t,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=u.GetIntersectBetweenTwoSegment(s,[t,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=u.GetIntersectBetweenTwoSegment(s,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=u.GetIntersectBetweenTwoSegment(s,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=u.GetIntersectBetweenTwoSegment(s,[t,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=u.GetIntersectBetweenTwoSegment(s,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(t,s,i){let a=t;const n=u.LimitPointToCircle(s,this.pageWidth,a);a!==n&&(a=n,this.updateAngleAndGeometry(a));const l=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let x=this.rect.bottomRight,h=this.rect.topLeft;if(this.corner==="bottom"&&(x=this.rect.topRight,h=this.rect.bottomLeft),x.x<=0){const k=u.LimitPointToCircle(i,l,h);k!==a&&(a=k,this.updateAngleAndGeometry(a))}return a}getSegmentToShadowLine(){const t=this.getShadowStartPoint();return[t,t!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class W{constructor(t,s){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=t,this.app=s}fold(t){this.setState("user_fold"),this.calc===null&&this.start(t),this.do(this.render.convertToPage(t))}flip(t){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(t)||(this.calc!==null&&this.render.finishAnimation(),!this.start(t)))return;const s=this.getBoundsRect();this.setState("flipping");const i=s.height/10,a=this.calc.getCorner()==="bottom"?s.height-i:i,n=this.calc.getCorner()==="bottom"?s.height:0;this.calc.calc({x:s.pageWidth-i,y:a}),this.animateFlippingTo({x:s.pageWidth-i,y:a},{x:-s.pageWidth,y:n},!0)}start(t){this.reset();const s=this.render.convertToBook(t),i=this.getBoundsRect(),a=this.getDirectionByPoint(s),n=s.y>=i.height/2?"bottom":"top";if(!this.checkDirection(a))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(a),this.bottomPage=this.app.getPageCollection().getBottomPage(a),this.render.getOrientation()==="landscape")if(a===1){const l=this.app.getPageCollection().nextBy(this.flippingPage);l!==null&&this.flippingPage.getDensity()!==l.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),l.setDrawingDensity("hard"))}else{const l=this.app.getPageCollection().prevBy(this.flippingPage);l!==null&&this.flippingPage.getDensity()!==l.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),l.setDrawingDensity("hard"))}return this.render.setDirection(a),this.calc=new T(a,n,i.pageWidth.toString(10),i.height.toString(10)),!0}catch{return!1}}do(t){if(this.calc!==null&&this.calc.calc(t)){const s=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*s)/100):this.flippingPage.setHardAngle(-90*(200-2*s)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),s,this.calc.getDirection())}}flipToPage(t,s){const i=this.app.getPageCollection().getCurrentSpreadIndex(),a=this.app.getPageCollection().getSpreadIndexByPage(t);try{a>i&&(this.app.getPageCollection().setCurrentSpreadIndex(a-1),this.flipNext(s)),a<i&&(this.app.getPageCollection().setCurrentSpreadIndex(a+1),this.flipPrev(s))}catch{}}flipNext(t){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:t==="top"?1:this.render.getRect().height-2})}flipPrev(t){this.flip({x:10,y:t==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const t=this.calc.getPosition(),s=this.getBoundsRect(),i=this.calc.getCorner()==="bottom"?s.height:0;t.x<=0?this.animateFlippingTo(t,{x:-s.pageWidth,y:i},!0):this.animateFlippingTo(t,{x:s.pageWidth,y:i},!1)}showCorner(t){if(!this.checkState("read","fold_corner"))return;const s=this.getBoundsRect(),i=s.pageWidth;if(this.isPointOnCorners(t))if(this.calc===null){if(!this.start(t))return;this.setState("fold_corner"),this.calc.calc({x:i-1,y:1});const a=50,n=this.calc.getCorner()==="bottom"?s.height-1:1,l=this.calc.getCorner()==="bottom"?s.height-a:a;this.animateFlippingTo({x:i-1,y:n},{x:i-a,y:l},!1,!1)}else this.do(this.render.convertToPage(t));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(t,s,i,a=!0){const n=u.GetCordsFromTwoPoint(t,s),l=[];for(const h of n)l.push(()=>this.do(h));const x=this.getAnimationDuration(n.length);this.render.startAnimation(l,x,()=>{this.calc&&(i&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),a&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(t){this.state!==t&&(this.app.updateState(t),this.state=t)}getDirectionByPoint(t){const s=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(t.x-s.pageWidth<=s.width/5)return 1}else if(t.x<s.width/2)return 1;return 0}getAnimationDuration(t){const s=this.app.getSettings().flippingTime;return t>=1e3?s:t/1e3*s}checkDirection(t){return t===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...t){for(const s of t)if(this.state===s)return!0;return!1}isPointOnCorners(t){const s=this.getBoundsRect(),i=s.pageWidth,a=Math.sqrt(Math.pow(i,2)+Math.pow(s.height,2))/5,n=this.render.convertToBook(t);return n.x>0&&n.y>0&&n.x<s.width&&n.y<s.height&&(n.x<a||n.x>s.width-a)&&(n.y<a||n.y>s.height-a)}}class ${constructor(t,s){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=s,this.app=t;const i=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=i.exec(window.navigator.userAgent)!==null}render(t){if(this.animation!==null){const s=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);s<this.animation.frames.length?this.animation.frames[s]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=t,this.drawFrame()}start(){this.update();const t=s=>{this.render(s),requestAnimationFrame(t)};requestAnimationFrame(t)}startAnimation(t,s,i){this.finishAnimation(),this.animation={frames:t,duration:s,durationFrame:s/t.length,onAnimateEnd:i,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t))}calculateBoundsRect(){let t="landscape";const s=this.getBlockWidth(),i=s/2,a=this.getBlockHeight()/2,n=this.setting.width/this.setting.height;let l=this.setting.width,x=this.setting.height,h=i-l;return this.setting.size==="stretch"?(s<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(t="portrait"),l=t==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,l>this.setting.maxWidth&&(l=this.setting.maxWidth),x=l/n,x>this.getBlockHeight()&&(x=this.getBlockHeight(),l=x*n),h=t==="portrait"?i-l/2-l:i-l):s<2*l&&this.app.getSettings().usePortrait&&(t="portrait",h=i-l/2-l),this.boundsRect={left:h,top:a-x/2,width:2*l,height:x,pageWidth:l},t}setShadowData(t,s,i,a){if(!this.app.getSettings().drawShadow)return;const n=100*this.getSettings().maxShadowOpacity;this.shadow={pos:t,angle:s,width:3*this.getRect().pageWidth/4*i/100,opacity:(100-i)*n/100/100,direction:a,progress:2*i}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(t){this.pageRect=t}setDirection(t){this.direction=t}setRightPage(t){t!==null&&t.setOrientation(1),this.rightPage=t}setLeftPage(t){t!==null&&t.setOrientation(0),this.leftPage=t}setBottomPage(t){t!==null&&t.setOrientation(this.direction===1?0:1),this.bottomPage=t}setFlippingPage(t){t!==null&&t.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=t}convertToBook(t){const s=this.getRect();return{x:t.x-s.left,y:t.y-s.top}}isSafari(){return this.safari}convertToPage(t,s){s||(s=this.direction);const i=this.getRect();return{x:s===0?t.x-i.left-i.width/2:i.width/2-t.x+i.left,y:t.y-i.top}}convertToGlobal(t,s){if(s||(s=this.direction),t==null)return null;const i=this.getRect();return{x:s===0?t.x+i.left+i.width/2:i.width/2-t.x+i.left,y:t.y+i.top}}convertRectToGlobal(t,s){return s||(s=this.direction),{topLeft:this.convertToGlobal(t.topLeft,s),topRight:this.convertToGlobal(t.topRight,s),bottomLeft:this.convertToGlobal(t.bottomLeft,s),bottomRight:this.convertToGlobal(t.bottomRight,s)}}}class O extends ${constructor(t,s,i){super(t,s),this.canvas=i,this.ctx=i.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const t=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(t.left+t.pageWidth,t.top,t.width,t.height),this.ctx.clip())}drawBookShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const s=t.width/20;this.ctx.rect(t.left,t.top,t.width,t.height);const i={x:t.left+t.width/2-s/2,y:0};this.ctx.translate(i.x,i.y);const a=this.ctx.createLinearGradient(0,0,s,0);a.addColorStop(0,"rgba(0, 0, 0, 0)"),a.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),a.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),a.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),a.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=a,this.ctx.fillRect(0,0,s,2*t.height),this.ctx.restore()}drawOuterShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t.left,t.top,t.width,t.height);const s=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(s.x,s.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const i=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),i.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),i.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),i.addColorStop(0,"rgba(0, 0, 0, 0)"),i.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.shadow.width,2*t.height),this.ctx.restore()}drawInnerShadow(){const t=this.getRect();this.ctx.save(),this.ctx.beginPath();const s=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(i.topLeft.x,i.topLeft.y),this.ctx.lineTo(i.topRight.x,i.topRight.y),this.ctx.lineTo(i.bottomRight.x,i.bottomRight.y),this.ctx.lineTo(i.bottomLeft.x,i.bottomLeft.y),this.ctx.translate(s.x,s.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const a=3*this.shadow.width/4,n=this.ctx.createLinearGradient(0,0,a,0);this.shadow.direction===0?(this.ctx.translate(-a,-100),n.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),n.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),n.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),n.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),n.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=n,this.ctx.fillRect(0,0,a,2*t.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class I{constructor(t,s,i){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=n=>{if(this.checkTarget(n.target)){const l=this.getMousePos(n.clientX,n.clientY);this.app.startUserTouch(l),n.preventDefault()}},this.onTouchStart=n=>{if(this.checkTarget(n.target)&&n.changedTouches.length>0){const l=n.changedTouches[0],x=this.getMousePos(l.clientX,l.clientY);this.touchPoint={point:x,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(x)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||n.preventDefault()}},this.onMouseUp=n=>{const l=this.getMousePos(n.clientX,n.clientY);this.app.userStop(l)},this.onMouseMove=n=>{const l=this.getMousePos(n.clientX,n.clientY);this.app.userMove(l,!1)},this.onTouchMove=n=>{if(n.changedTouches.length>0){const l=n.changedTouches[0],x=this.getMousePos(l.clientX,l.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-x.x)>10||this.app.getState()!=="read")&&n.cancelable&&this.app.userMove(x,!0),this.app.getState()!=="read"&&n.preventDefault()):this.app.userMove(x,!0)}},this.onTouchEnd=n=>{if(n.changedTouches.length>0){const l=n.changedTouches[0],x=this.getMousePos(l.clientX,l.clientY);let h=!1;if(this.touchPoint!==null){const k=x.x-this.touchPoint.point.x,P=Math.abs(x.y-this.touchPoint.point.y);Math.abs(k)>this.swipeDistance&&P<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(k>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),h=!0),this.touchPoint=null}this.app.userStop(x,h)}},this.parentElement=t,t.classList.add("stf__parent"),t.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=t.querySelector(".stf__wrapper"),this.app=s;const a=this.app.getSettings().usePortrait?1:2;t.style.minWidth=i.minWidth*a+"px",t.style.minHeight=i.minHeight+"px",i.size==="fixed"&&(t.style.minWidth=i.width*a+"px",t.style.minHeight=i.height+"px"),i.autoSize&&(t.style.width="100%",t.style.maxWidth=2*i.maxWidth+"px"),t.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=i.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(t){this.wrapper.classList.remove("--portrait","--landscape"),t==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(t,s){const i=this.distElement.getBoundingClientRect();return{x:t-i.left,y:s-i.top}}checkTarget(t){return!this.app.getSettings().clickEventForward||!["a","button"].includes(t.tagName.toLowerCase())}}class V extends I{constructor(t,s,i,a){super(t,s,i),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=t.querySelector(".stf__block"),this.items=a;for(const n of a)this.distElement.appendChild(n);this.setHandlers()}clear(){for(const t of this.items)this.parentElement.appendChild(t)}updateItems(t){this.removeHandlers(),this.distElement.innerHTML="";for(const s of t)this.distElement.appendChild(s);this.items=t,this.setHandlers()}update(){this.app.getRender().update()}}class F extends I{constructor(t,s,i){super(t,s,i),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=t.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const t=getComputedStyle(this.canvas),s=parseInt(t.getPropertyValue("width"),10),i=parseInt(t.getPropertyValue("height"),10);this.canvas.width=s,this.canvas.height=i}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class we extends ${constructor(t,s,i){super(t,s),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=i,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
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
        `;i+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=i}drawInnerShadow(){const t=this.getRect(),s=3*this.shadow.width/4,i=this.getDirection()===0?s:0,a=this.getDirection()===0?"to left":"to right",n=this.convertToGlobal(this.shadow.pos),l=this.shadow.angle+3*Math.PI/2,x=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let h="polygon( ";for(const P of x){let R=this.getDirection()===1?{x:-P.x+this.shadow.pos.x,y:P.y-this.shadow.pos.y}:{x:P.x-this.shadow.pos.x,y:P.y-this.shadow.pos.y};R=u.GetRotatedPoint(R,{x:i,y:100},l),h+=R.x+"px "+R.y+"px, "}h=h.slice(0,-2),h+=")";const k=`
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
            transform: translate3d(${n.x-i}px, ${n.y-100}px, 0) rotate(${l}rad);
            clip-path: ${h};
            -webkit-clip-path: ${h};
        `;this.innerShadow.style.cssText=k}drawOuterShadow(){const t=this.getRect(),s=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),i=this.shadow.angle+3*Math.PI/2,a=this.getDirection()===1?this.shadow.width:0,n=this.getDirection()===0?"to right":"to left",l=[{x:0,y:0},{x:t.pageWidth,y:0},{x:t.pageWidth,y:t.height},{x:0,y:t.height}];let x="polygon( ";for(const k of l)if(k!==null){let P=this.getDirection()===1?{x:-k.x+this.shadow.pos.x,y:k.y-this.shadow.pos.y}:{x:k.x-this.shadow.pos.x,y:k.y-this.shadow.pos.y};P=u.GetRotatedPoint(P,{x:a,y:100},i),x+=P.x+"px "+P.y+"px, "}x=x.slice(0,-2),x+=")";const h=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*t.height}px;
            background: linear-gradient(${n}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${a}px 100px;
            transform: translate3d(${s.x-a}px, ${s.y-100}px, 0) rotate(${i}rad);
            clip-path: ${x};
            -webkit-clip-path: ${x};
        `;this.outerShadow.style.cssText=h}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const t=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(t))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const t of this.app.getPageCollection().getPages())t!==this.leftPage&&t!==this.rightPage&&t!==this.flippingPage&&t!==this.bottomPage&&(t.getElement().style.cssText="display: none"),t.getTemporaryCopy()!==this.flippingPage&&t.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class J{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(t){const s=this._default;if(Object.assign(s,t),s.size!=="stretch"&&s.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(s.width<=0||s.height<=0)throw new Error("Invalid width or height");if(s.flippingTime<=0)throw new Error("Invalid flipping time");return s.size==="stretch"?(s.minWidth<=0&&(s.minWidth=100),s.maxWidth<s.minWidth&&(s.maxWidth=2e3),s.minHeight<=0&&(s.minHeight=100),s.maxHeight<s.minHeight&&(s.maxHeight=2e3)):(s.minWidth=s.width,s.maxWidth=s.width,s.minHeight=s.height,s.maxHeight=s.height),s}}(function(c,t){t===void 0&&(t={});var s=t.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",s==="top"&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}})(`.stf__parent {
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
}`),b.PageFlip=class extends class{constructor(){this.events=new Map}on(c,t){return this.events.has(c)?this.events.get(c).push(t):this.events.set(c,[t]),this}off(c){this.events.delete(c)}trigger(c,t,s=null){if(this.events.has(c))for(const i of this.events.get(c))i({data:s,object:t})}}{constructor(c,t){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new J().getSettings(t),this.block=c}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(c){this.ui=new F(this.block,this,this.setting);const t=this.ui.getCanvas();this.render=new O(this,this.setting,t),this.flipController=new W(this.render,this),this.pages=new C(this,this.render,c),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(c){this.ui=new V(this.block,this,this.setting,c),this.render=new we(this,this.setting,this.ui.getDistElement()),this.flipController=new W(this.render,this),this.pages=new B(this,this.render,this.ui.getDistElement(),c),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(c){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new C(this,this.render,c),this.pages.load(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}updateFromHtml(c){const t=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new B(this,this.render,this.ui.getDistElement(),c),this.pages.load(),this.ui.updateItems(c),this.render.reload(),this.pages.show(t),this.trigger("update",this,{page:t,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(c){this.pages.show(c)}flipNext(c="top"){this.flipController.flipNext(c)}flipPrev(c="top"){this.flipController.flipPrev(c)}flip(c,t="top"){this.flipController.flipToPage(c,t)}updateState(c){this.trigger("changeState",this,c)}updatePageIndex(c){this.trigger("flip",this,c)}updateOrientation(c){this.ui.setOrientationStyle(c),this.update(),this.trigger("changeOrientation",this,c)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(c){return this.pages.getPage(c)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(c){this.mousePosition=c,this.isUserTouch=!0,this.isUserMove=!1}userMove(c,t){this.isUserTouch||t||!this.setting.showPageCorners?this.isUserTouch&&u.GetDistanceBetweenTwoPoint(this.mousePosition,c)>5&&(this.isUserMove=!0,this.flipController.fold(c)):this.flipController.showCorner(c)}userStop(c,t=!1){this.isUserTouch&&(this.isUserTouch=!1,t||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(c)))}},Object.defineProperty(b,"__esModule",{value:!0})}))})(se,se.exports)),se.exports}var wt=ft();const ut=te.forwardRef((r,v)=>{const b=j.useRef(null),g=j.useRef([]),A=j.useRef(),[p,C]=j.useState([]);j.useImperativeHandle(v,()=>({pageFlip:()=>A.current}));const u=j.useCallback(()=>{A.current&&A.current.clear()},[]),D=j.useCallback(()=>{const B=A.current;B&&(B.off("flip"),B.off("changeOrientation"),B.off("changeState"),B.off("init"),B.off("update"))},[]);return j.useEffect(()=>{if(g.current=[],r.children){const B=te.Children.map(r.children,T=>te.cloneElement(T,{ref:W=>{W&&g.current.push(W)}}));(!r.renderOnlyPageLengthChange||p.length!==B.length)&&(B.length<p.length&&u(),C(B))}},[r.children]),j.useEffect(()=>{const B=()=>{const T=A.current;T&&(r.onFlip&&T.on("flip",W=>r.onFlip(W)),r.onChangeOrientation&&T.on("changeOrientation",W=>r.onChangeOrientation(W)),r.onChangeState&&T.on("changeState",W=>r.onChangeState(W)),r.onInit&&T.on("init",W=>r.onInit(W)),r.onUpdate&&T.on("update",W=>r.onUpdate(W)))};p.length>0&&g.current.length>0&&(D(),b.current&&!A.current&&(A.current=new wt.PageFlip(b.current,r)),A.current.getFlipController()?A.current.updateFromHtml(g.current):A.current.loadFromHTML(g.current),B())},[p]),te.createElement("div",{ref:b,className:r.className,style:r.style},p)}),xt=te.memo(ut);const Ze=(...r)=>r.filter((v,b,g)=>!!v&&v.trim()!==""&&g.indexOf(v)===b).join(" ").trim();const vt=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const bt=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(v,b,g)=>g?g.toUpperCase():b.toLowerCase());const Ce=r=>{const v=bt(r);return v.charAt(0).toUpperCase()+v.slice(1)};var ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const yt=r=>{for(const v in r)if(v.startsWith("aria-")||v==="role"||v==="title")return!0;return!1},St=j.createContext({}),jt=()=>j.useContext(St),At=j.forwardRef(({color:r,size:v,strokeWidth:b,absoluteStrokeWidth:g,className:A="",children:p,iconNode:C,...u},D)=>{const{size:B=24,strokeWidth:T=2,absoluteStrokeWidth:W=!1,color:$="currentColor",className:O=""}=jt()??{},I=g??W?Number(b??T)*24/Number(v??B):b??T;return j.createElement("svg",{ref:D,...ue,width:v??B??ue.width,height:v??B??ue.height,stroke:r??$,strokeWidth:I,className:Ze("lucide",O,A),...!p&&!yt(u)&&{"aria-hidden":"true"},...u},[...C.map(([V,F])=>j.createElement(V,F)),...Array.isArray(p)?p:[p]])});const le=(r,v)=>{const b=j.forwardRef(({className:g,...A},p)=>j.createElement(At,{ref:p,iconNode:v,className:Ze(`lucide-${vt(Ce(r))}`,`lucide-${r}`,g),...A}));return b.displayName=Ce(r),b};const kt=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],Ct=le("chevron-first",kt);const Pt=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Wt=le("chevron-left",Pt);const Bt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Dt=le("chevron-right",Bt);const Tt=[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]],Mt=le("expand",Tt);const It=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],Rt=le("shrink",It),zt=d.section`
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
`,Et=d.div`
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
`,Lt=d.div`
  overflow: hidden;
  background: #fff;
`,$t=d.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({$isCover:r})=>r?"cover":"contain"};
  object-position: center;
  background: #fff;
  user-select: none;
  -webkit-user-drag: none;
`,Pe=d.div`
  display: grid;
  place-items: center;
  min-height: 180px;
  padding: 2rem;
  color: ${r=>r.theme.pageMuted};
  text-align: center;
`,Ot=d.div`
  display: grid;
  grid-template-columns: 44px 44px minmax(9rem, auto) 44px 44px;
  justify-content: center;
  align-items: center;
  width: ${({$isSinglePage:r,$isFullscreen:v})=>v?r?"min(96vw, 600px)":"min(96vw, 1200px)":r?"min(92vw, 508px)":"min(92vw, 1016px)"};
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
`,ce=d.button`
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
`,Nt=d.div`
  min-width: 9rem;
  color: ${r=>r.theme.pageText};
  font-size: 0.92rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
`,Ht=j.forwardRef(function({page:v,index:b,bookTitle:g},A){const p=b===0||v.isLast;return e.jsx(Lt,{ref:A,"data-density":b===0||v.isLast?"hard":"soft","data-cursor-hover":!0,children:e.jsx($t,{src:v.src,alt:b===0?`${g} front cover`:v.isLast?`${g} back cover`:`${g} page ${b+1}`,width:v.width,height:v.height,loading:b<4?"eager":"lazy",draggable:"false",$isCover:p})})});function Ye({assetDirectory:r="composition-book",bookTitle:v="Composition art book"}){const b=j.useRef(null),g=j.useRef(null),A=j.useRef(null),p=j.useRef(!1),[C,u]=j.useState([]),[D,B]=j.useState(0),[T,W]=j.useState(!1),[$,O]=j.useState(!1),[I,V]=j.useState(!1),[F,we]=j.useState(""),J=D===0,c=C.length>0&&D===C.length-1,t=J&&!T||$;j.useEffect(()=>{const h=new AbortController,k=`/${r}/`;return fetch(`${k}manifest.json`,{signal:h.signal}).then(P=>{if(!P.ok)throw new Error("The book could not be loaded.");return P.json()}).then(P=>{u(P.pages.map((R,q)=>({...R,src:`${k}${R.file}`,isLast:q===P.pages.length-1})))}).catch(P=>{P.name!=="AbortError"&&we(P.message)}),()=>h.abort()},[r]),j.useEffect(()=>{const h=()=>{const k=document.fullscreenElement===g.current,P=p.current&&!k;p.current=k,V(k),P&&requestAnimationFrame(()=>{g.current?.scrollIntoView({block:"center",inline:"nearest"})})};return document.addEventListener("fullscreenchange",h),()=>document.removeEventListener("fullscreenchange",h)},[]);const s=()=>b.current?.pageFlip(),i=()=>s()?.turnToPage(0),a=()=>{D===1&&O(!0),s()?.flipPrev("top")},n=()=>{J&&W(!0),s()?.flipNext("top")},l=h=>{h.key==="ArrowLeft"&&(h.preventDefault(),a()),h.key==="ArrowRight"&&(h.preventDefault(),n())},x=async()=>{document.fullscreenElement?await document.exitFullscreen():await g.current?.requestFullscreen()};return e.jsxs(zt,{ref:g,"aria-label":`${v} flip through`,children:[e.jsxs(Et,{ref:A,tabIndex:0,onKeyDown:l,$isFullscreen:I,$isSinglePage:t||c,$coverPosition:t?"front":c?"back":"open",children:[F&&e.jsx(Pe,{role:"alert",children:F}),!F&&C.length===0&&e.jsx(Pe,{role:"status",children:"Loading book..."}),C.length>0&&e.jsx(xt,{ref:b,startPage:D,width:424,height:600,size:"stretch",minWidth:120,maxWidth:I?600:508,minHeight:170,maxHeight:I?849:719,drawShadow:!1,showCover:!0,usePortrait:!1,mobileScrollSupport:!0,swipeDistance:24,flippingTime:700,onFlip:h=>B(h.data),onChangeState:h=>{h.data==="flipping"&&J&&W(!0),h.data==="read"&&(W(!1),O(!1))},className:"book-flipbook",children:C.map((h,k)=>e.jsx(Ht,{page:h,index:k,bookTitle:v},h.file))},I?"fullscreen":"embedded")]}),C.length>0&&e.jsxs(Ot,{"aria-label":"Book controls",$isFullscreen:I,$isSinglePage:t||c,$coverPosition:t?"front":c?"back":"open",children:[e.jsx(ce,{type:"button",onClick:i,disabled:D===0,"aria-label":"First page",title:"First page",children:e.jsx(Ct,{"aria-hidden":"true",size:22})}),e.jsx(ce,{type:"button",onClick:a,disabled:D===0,"aria-label":"Previous page",title:"Previous page",children:e.jsx(Wt,{"aria-hidden":"true",size:22})}),e.jsxs(Nt,{"aria-live":"polite",children:["Page ",D+1," of ",C.length]}),e.jsx(ce,{type:"button",onClick:n,disabled:D>=C.length-1,"aria-label":"Next page",title:"Next page",children:e.jsx(Dt,{"aria-hidden":"true",size:22})}),e.jsx(ce,{type:"button",onClick:x,"aria-label":I?"Exit fullscreen":"View fullscreen",title:I?"Exit fullscreen":"View fullscreen",children:I?e.jsx(Rt,{"aria-hidden":"true",size:20}):e.jsx(Mt,{"aria-hidden":"true",size:20})})]})]})}const Ft="/assets/Orbital-Me_evN6P.jpg",qt="/assets/Spraypaintwash-BbPvaVYI.png",_t="/assets/Staircases-X99gJTOY.jpg",Gt="/assets/Coney-XynOADlt.jpg",Zt="/assets/Brooklyn-pKXeBM0d.jpg",Yt="/assets/Brooklyn2-BVlZQUhO.jpg",Ut="/assets/Rug-Do3b2lPl.jpg",Kt="/assets/Mash1-C6rAcNzX.png",Vt="/assets/Mash2-Dqi8iSdT.png",Jt="/assets/Mash3-hEAJGZMt.png",Xt="/assets/Mash4-DJRwDavu.png",Qt="/assets/No.3-C03FbQUH.png",es="/assets/Grain-BEUj0pKY.jpg",ts="/assets/52-CdBMq9O9.jpg",We="/assets/52-CNWVMpg7.webp",Be="/assets/52-gE6SiWB9.avif",ss="/assets/52-640-DVvHtSBj.webp",is="/assets/52-960-D1HbUqj2.webp",as="/assets/52-640-C1Dq3XN8.avif",rs="/assets/52-960-BSEOvHB5.avif",ns="/assets/56-7uwBAmvk.jpg",De="/assets/56-BmXQm_hM.webp",Te="/assets/56-BLYjh9ov.avif",os="/assets/56-640-xNBeQLaN.webp",ls="/assets/56-960-CQPxWBRM.webp",cs="/assets/56-640-BmoWNAPR.avif",hs="/assets/56-960-BcZ1KSWH.avif",ds="/assets/1.2-CtmKzDuO.jpg",ps="/assets/1.2-DamqNk7M.webp",gs="/assets/1.2-BnkSwaKb.avif",ms="/assets/6-DhaI76Fh.jpg",fs="/assets/6-TEo7Kp30.webp",ws="/assets/6-Dn8qeIMt.avif",us="/assets/13-Uh30_dkp.jpg",xs="/assets/13-B04sV77o.webp",vs="/assets/13-tyepy0jT.avif",bs="/assets/Artbashmash-D8rHoEfl.jpg",ys="/assets/Artbashmash-qDI_Cdfm.webp",Ss="/assets/Artbashmash-B9MdRtrg.avif",js="/assets/Artbashmash2-p7CJTgnS.jpg",As="/assets/Artbashmash2-DPSCciW8.webp",ks="/assets/Artbashmash2-BTX490IK.avif",Cs="/assets/Artbashmash3-2s-rDM9O.jpg",Ps="/assets/Artbashmash3-CmEwXgCZ.webp",Ws="/assets/Artbashmash3-8M-yWfJJ.avif",Bs="/assets/BFA-DDWe_9dv.jpg",Ds="/assets/BFA-LQoe4czV.webp",Ts="/assets/BFA-CqSJPe2m.avif",Ms="/assets/Reuzes-9siswazn.jpg",Is="/assets/Reuzes-CAHQ9NoS.webp",Rs="/assets/Reuzes-DIY46Trg.avif",zs="/assets/Denver-BBSPF7-m.jpg",Es="/assets/Denver-KS6BPoFH.webp",Ls="/assets/Denver-ccZpPKuP.avif",$s="/assets/Whiteline-DIr6FYSj.jpg",Os="/assets/Whiteline-D6wG4Nvu.webp",Ns="/assets/Whiteline-r4oYJxed.avif",Hs="/assets/Mucha-BsTfchPV.jpg",Fs="/assets/Mucha-CJgtHG0C.webp",qs="/assets/Mucha-GBYkgctP.avif",_s="/assets/Crawford-J6l55Suz.jpg",Gs="/assets/Crawford-BVHnYbtP.webp",Zs="/assets/Crawford-BWuZbUU8.avif",Ys="/assets/Paintlouis-CmuEB8vi.jpg",Us="/assets/Paintlouis-BC3atiMU.webp",Ks="/assets/Paintlouis-_c8uDS3Y.avif",Vs="/assets/riso3-BzC1roHJ.jpg",Js="/assets/riso3-B_Ta2R48.webp",Xs="/assets/riso3-CBJKr72-.avif",Qs="/assets/SushiX-VEFW7gc0.jpg",ei="/assets/SushiX-CWBBXfuH.webp",ti="/assets/SushiX-Bizc045D.avif",si="/assets/rogerrabbit-DZN4cfA1.jpg",ii="/assets/rogerrabbit-BT2ncPfK.webp",ai="/assets/rogerrabbit-dQ7r-14_.avif",ri="/assets/summer16-e0hQKwHj.jpg",ni="/assets/summer16-DHy098K_.webp",oi="/assets/summer16-DXCTH033.avif",li="/assets/SushiX2-CDfmB3k8.jpg",ci="/assets/SushiX2-JRdghSIi.webp",hi="/assets/SushiX2-_QYSWb2X.avif",di="/assets/Enova-CyGiy_cF.jpg",pi="/assets/Enova-D4S8QhSW.webp",gi="/assets/Enova-h7nc4v59.avif",mi="/assets/EU-CYNJcy9u.jpg",fi="/assets/EU-CVxbBzQk.webp",wi="/assets/EU-DbAMMYoW.avif",Me=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],z=d.img`
  width: ${r=>r.$Width||"auto"};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`,ui=d.div`
  display: flex;
  justify-content: center;
  background-color: ${r=>r.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,xi=d.img`
  max-width: 900px;
  width: 65vw;
  height: auto;
 
`,vi=d.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  background-color: var(--surface-primary);
`,X={padding:"5vh 0"};function bi(){return j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{children:[e.jsx(ge,{title:"3D & Graffiti | Zack MacTavish Art & Design",description:"Graffiti roots, Rhino 3D renders, and murals across Chicago, Brooklyn, Denver, and more.",image:me,url:Y(U()),keywords:["3D","graffiti","Rhino","murals","Chicago","Brooklyn","Denver"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Me,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:ie},{rel:"icon",type:"image/png",sizes:"32x32",href:ae},{rel:"apple-touch-icon",sizes:"180x180",href:re},{rel:"icon",type:"image/png",sizes:"192x192",href:ne},{rel:"icon",type:"image/png",sizes:"256x256",href:oe},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"3D & Graffiti Series",url:Y(U()),author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Me}}}),e.jsx("h1",{style:fe,children:"3D and Graffiti by Zack MacTavish"}),e.jsx(de,{as:o,src:ts,webpSrc:We,webpSrcSet:`${ss} 640w, ${is} 960w, ${We} 2200w`,avifSrc:Be,avifSrcSet:`${as} 640w, ${rs} 960w, ${Be} 2200w`,sizes:"100vw",alt:"Rhino render 52",width:4e3,height:2249,loading:"eager",decoding:"sync",fetchPriority:"high"}),e.jsx(de,{as:o,src:ns,webpSrc:De,webpSrcSet:`${os} 640w, ${ls} 960w, ${De} 2200w`,avifSrc:Te,avifSrcSet:`${cs} 640w, ${hs} 960w, ${Te} 2200w`,sizes:"100vw",alt:"Rhino render 56",width:4e3,height:2251,style:{width:"100vw",minHeight:"100vh",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsx(N,{children:e.jsx(G,{children:e.jsx(H,{children:"My artistic roots began in graffiti, where I became interested in letterforms, distortion, and the structure of an image. That practice led me into painting, typography, and eventually Rhino 3D, where I began building architectural lettering, digital forms, and objects for 3D printing. This work continues that technical side of my practice while staying connected to the visual language that first drew me to making art."})})}),e.jsxs(S,{style:X,children:[e.jsxs(w,{imageSrc:ds,imageWebp:ps,imageAvif:gs,imageAlt:"No. 1 Rhino render",children:[e.jsx(m,{children:"No. 1"}),e.jsx(f,{children:"2017"}),e.jsx(y,{children:"Render made in Rhino, and Keyshot."})]}),e.jsxs(w,{imageSrc:ms,imageWebp:fs,imageAvif:ws,imageAlt:"No. 6 Rhino render",children:[e.jsx(m,{children:"No. 6"}),e.jsx(f,{children:"2017"}),e.jsx(y,{children:"Render made in Rhino, and Keyshot."})]}),e.jsxs(w,{imageSrc:us,imageWebp:xs,imageAvif:vs,imageAlt:"No. 13 Rhino render",children:[e.jsx(m,{children:"No. 13"}),e.jsx(f,{children:"2017"}),e.jsx(y,{children:"Render made in Rhino, and Keyshot."})]})]}),e.jsx("div",{style:{backgroundColor:"var(--surface-secondary)",width:"100%",display:"block",padding:"8vh 0"},children:e.jsxs(M,{className:"rounded-corners",style:{backgroundColor:"var(--surface-secondary)"},children:[e.jsx(o,{src:bs,webpSrc:ys,avifSrc:Ss,alt:"Art Bash graffiti collage 1"}),e.jsx(o,{src:js,webpSrc:As,avifSrc:ks,alt:"Art Bash graffiti collage 2"}),e.jsx(o,{src:Cs,webpSrc:Ps,avifSrc:Ws,alt:"Art Bash graffiti collage 3"})]})}),e.jsx(de,{as:o,src:Qe,webpSrc:Xe,avifSrc:Je,alt:"RIP SENSE mural",style:{width:"100%",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsxs(S,{style:X,children:[e.jsxs(w,{imageSrc:Bs,imageWebp:Ds,imageAvif:Ts,imageAlt:"BFA Exhibition mural",children:[e.jsxs(m,{children:["BFA Exhibition ",e.jsx("br",{}),"(Chicago, IL)"]}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on brick veneer."})]}),e.jsxs(w,{imageSrc:Ms,imageWebp:Is,imageAvif:Rs,imageAlt:"Lowbrow graffiti mural",children:[e.jsx(m,{children:"LOWBROW (Brooklyn, NY)"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Spray paint on cement."})]}),e.jsxs(w,{imageSrc:zs,imageWebp:Es,imageAvif:Ls,imageAlt:"Rhino Denver mural",children:[e.jsx(m,{children:"RHINO (Denver, CO)"}),e.jsx(f,{children:"2019"}),e.jsx(y,{children:"Spray paint on cinderblock."})]})]}),e.jsx(S,{children:e.jsxs(gt,{$Backgroundcolor:"transparent",$Backgroundheight:"125vh",children:[e.jsx(vi,{children:e.jsx(xi,{as:o,src:$s,webpSrc:Os,avifSrc:Ns,alt:"Graffiti lettering study"})}),e.jsx(Ke,{"data-narrative-text":!0,children:"This illustration of B’s in different styles was created for a self-published book about the art of graffiti writing."})]})}),e.jsxs(S,{style:X,children:[e.jsxs(w,{imageSrc:Hs,imageWebp:Fs,imageAvif:qs,imageAlt:"Orange Line graffiti piece",children:[e.jsx(m,{children:"ORANGE LINE (Chicago, IL)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cinderblock."})]}),e.jsxs(w,{imageSrc:_s,imageWebp:Gs,imageAvif:Zs,imageAlt:"Crawford graffiti mural",children:[e.jsx(m,{children:"CRAWFORD (Chicago, IL)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cement."})]}),e.jsxs(w,{imageSrc:Ys,imageWebp:Us,imageAvif:Ks,imageAlt:"Paint Louis graffiti mural",children:[e.jsx(m,{children:"PAINT LOUIS (St. Louis, MO)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cement."})]})]}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100%"},children:e.jsx(Ue,{className:"narrow rounded-corners",children:e.jsx(o,{src:Vs,webpSrc:Js,avifSrc:Xs,alt:"Graffiti riso spread"})})}),e.jsxs(S,{style:X,children:[e.jsxs(w,{imageSrc:Qs,imageWebp:ei,imageAvif:ti,imageAlt:"Sushi X graffiti piece",children:[e.jsx(m,{children:"Sushi X"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on brick."})]}),e.jsxs(w,{imageSrc:si,imageWebp:ii,imageAvif:ai,imageAlt:"Roger Rabbit graffiti piece",children:[e.jsx(m,{children:"Crawford"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Spray paint on cement."})]}),e.jsxs(w,{imageSrc:ri,imageWebp:ni,imageAvif:oi,imageAlt:"Summer 2016 graffiti piece",children:[e.jsx(m,{children:"Crawford"}),e.jsx(f,{children:"2019"}),e.jsx(y,{children:"Spray paint on cement."})]})]}),e.jsxs(S,{style:X,children:[e.jsxs(w,{imageSrc:li,imageWebp:ci,imageAvif:hi,imageAlt:"Sushi X collaboration graffiti piece",children:[e.jsx(m,{children:"Sushi X"}),e.jsx(f,{children:"2016"}),e.jsxs(y,{children:["Spray paint on brick. ",e.jsx("br",{}),"(Collaboration with 'Leks')"]})]}),e.jsxs(w,{imageSrc:di,imageWebp:pi,imageAvif:gi,imageAlt:"Enova International Inc graffiti piece",children:[e.jsx(m,{children:"ENOVA INTERNATIONAL INC."}),e.jsx(f,{children:"2015"}),e.jsx(y,{children:"Spray paint on wood."})]}),e.jsxs(w,{imageSrc:mi,imageWebp:fi,imageAvif:wi,imageAlt:"Yarrow's graffiti piece",children:[e.jsx(m,{children:"YARROW'S (Providence, RI)"}),e.jsx(f,{children:"2016"}),e.jsx(y,{children:"Spray paint on cinderblock."})]})]})]})}const ch=Object.freeze(Object.defineProperty({__proto__:null,RisoFlex:ui,RisoItem:z,default:bi},Symbol.toStringTag,{value:"Module"})),yi="/assets/Housequiltfront-DI9B3JyK.jpg",Si="/assets/Housequiltfront-CzYZXtZI.webp",ji="/assets/Housequiltfront-BTxxY6w6.avif",Ai="/assets/Housequiltback-oHSTsYs1.jpg",ki="/assets/Housequiltback-yxymBKcw.webp",Ci="/assets/Housequiltback-CeuocK4N.avif",Pi="/assets/house5-B7nFKE96.jpg",Wi="/assets/house5-EtkpS0fR.webp",Bi="/assets/house5-QZHCbFFi.avif",Di="/assets/house6-CcstOP2D.jpg",Ti="/assets/house6-BR1ZmoeJ.webp",Mi="/assets/house6-402s7PDf.avif",Ii="/assets/EP-BLwrZ_wz.jpg",Ri="/assets/EP-DmYQWfX5.webp",zi="/assets/EP-DTXhFueW.avif",Ei="/assets/westwood-DjKkR8R-.jpg",Li="/assets/westwood-CmjtYf80.webp",$i="/assets/westwood-DNdxyfX6.avif",Oi="/assets/manistee2-JZHXssDK.jpg",Ni="/assets/manistee2-KbbqnZRw.webp",Hi="/assets/manistee2-C-0ArifR.avif",Fi="/assets/albany-D2TVox4k.jpg",qi="/assets/albany-B6SSEOUv.webp",_i="/assets/albany-DxFswwbo.avif",Gi="/assets/maynard-DqdlI59F.jpg",Zi="/assets/maynard-DUoskNk6.webp",Yi="/assets/maynard-BTPXaGVB.avif",Ui="/assets/armistice3-B08ccpdp.jpg",Ki="/assets/armistice3-C9jK5De6.webp",Vi="/assets/armistice3-Dogmhekj.avif",Ji="/assets/house3-Ds6rZWsV.jpg",Xi="/assets/house3-D_rKJWNc.webp",Qi="/assets/house3-D_IFalNo.avif",ea="/assets/house4-Bg5eLcu9.jpg",ta="/assets/house4-BTbGYFEw.webp",sa="/assets/house4-BDmlw8IL.avif",ia="/assets/Olympia-BFbVMvuJ.jpg",aa="/assets/Olympia-D6FgxO1P.webp",ra="/assets/Olympia-D7saTZJ0.avif",na="/assets/manistee1-CRDlmD21.jpg",oa="/assets/manistee1-BD4M_BGK.webp",la="/assets/manistee1-BtTDDVsG.avif",ca="/assets/Pawtucket-iLwtRce2.jpg",ha="/assets/Pawtucket-CnuH2SbX.webp",da="/assets/Pawtucket-D-rCKoOx.avif",pa="/assets/Armistice1-BTLWWtCf.jpg",ga="/assets/Armistice1-BI6APEJU.webp",ma="/assets/Armistice1-CDYqbutH.avif",fa="/assets/rosewood-CIQbdoky.jpg",wa="/assets/rosewood-BON5IOBZ.webp",ua="/assets/rosewood-CFiF8Pc_.avif",xa="/assets/taylor-BfyEL1Uh.jpg",va="/assets/taylor-69hTEv6h.webp",ba="/assets/taylor-CpeDjwMN.avif",ya="/assets/house7-BbArC7Cr.jpg",Sa="/assets/house7-DhRms4bl.webp",ja="/assets/house7-Dg-g7uVN.avif",Aa="/assets/housemash2-Bu9yv1JD.jpg",Ie="/assets/housemash2-B2aULt5q.webp",Re="/assets/housemash2-B2HTxjPM.avif",ka="/assets/housemash2-640-Y-WjV9sP.webp",Ca="/assets/housemash2-960-DtRulYfc.webp",Pa="/assets/housemash2-640-Cp6cKf_h.avif",Wa="/assets/housemash2-960-Bh-JP1j0.avif",Ba="/assets/Manisteeblock-BpsSyKDp.jpg",Da="/assets/Manisteeblock-Dx11K6N8.webp",Ta="/assets/Manisteeblock-CBunJaVw.avif",Ma="/assets/quilt1-BAZmENCx.jpg",Ia="/assets/quilt1-BOz0AhLd.webp",Ra="/assets/quilt1-CBalcmk6.avif",za="/assets/quilt2-19EzvJTi.jpg",Ea="/assets/quilt2-CDotl726.webp",La="/assets/quilt2-B_5hbaVc.avif",$a="/assets/quilt3-DjYkC_es.jpg",Oa="/assets/quilt3-CHkeZlCq.webp",Na="/assets/quilt3-BIEQNY31.avif",Ha="/assets/quilt4-BbuSbN5z.jpg",Fa="/assets/quilt4-DIBhfzww.webp",qa="/assets/quilt4-DsPhW2St.avif",_a="/assets/quilt5-Dcs17e7U.jpg",Ga="/assets/quilt5-Dm-9n-lf.webp",Za="/assets/quilt5-DkyU4Aeb.avif",Ya="/assets/quilt6-wTrYEIRL.jpg",Ua="/assets/quilt6-2Sn7zZ6L.webp",Ka="/assets/quilt6-CgAgelw0.avif",Va="/assets/quilt7-scRYHBZe.jpg",Ja="/assets/quilt7-CWl5PCey.webp",Xa="/assets/quilt7-BVAHdGqN.avif",Qa="/assets/quilt8-Ctrd8deT.jpg",er="/assets/quilt8-D_a0MCo5.webp",tr="/assets/quilt8-BV7SLWwk.avif",sr="/assets/quilt9-BINbJqAJ.jpg",ir="/assets/quilt9-DC8AVt0h.webp",ar="/assets/quilt9-Bj0KW5EN.avif",rr="/assets/JanetDavidDominicMarie-CdcdFHfn.JPG",nr="/assets/JanetDavidDominicMarie-BCVZNGG0.webp",or="/assets/JanetDavidDominicMarie-BBOdJdOs.avif",lr="/assets/JanetDavidGrandpaNana-CRktDgRg.JPG",cr="/assets/JanetDavidGrandpaNana-DXurK0ww.webp",hr="/assets/JanetDavidGrandpaNana-6O0yNDp_.avif",ze=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],dr=d.h1`
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
`,he=d.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
      flex-direction: column;
  }
`,Ee=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
  background-color: var(--surface-secondary);
  flex-direction: column;
`,pr=d.section`
  width: 100vw;
  padding: clamp(5rem, 9vh, 8rem) 0;
  box-sizing: border-box;
  background: var(--surface-secondary);
`,gr=d.div`
  width: min(88vw, 1180px);
  margin: 0 auto clamp(2.5rem, 6vh, 4.5rem);
  color: ${r=>r.theme.pageText};

  @media (max-width: 1320px) {
    width: min(90vw, 1080px);
  }

  @media (max-width: 900px) {
    width: 92vw;
  }
`,mr=d.h2`
  max-width: 24ch;
  margin: 0 0 1.25rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  line-height: 1.08;
  text-wrap: balance;
`,fr=d.p`
  max-width: 70ch;
  margin: 0;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.65;
`;d.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0vw;
  width: 100vw;
  background-color: var(--surface-primary);
  padding: 2vw 0;
  box-sizing: border-box;
`;const M=d.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;   /* container height follows tallest image */
  gap: 64px;
  padding: 100px 40px;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: var(--surface-primary);
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
`,_=d.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: clamp(50px, 8vw, 100px) clamp(60px, 8vw, 120px);
  flex-wrap: wrap;
  overflow: hidden;
  background-color: var(--surface-primary);
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
`,Ue=d.div`
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
`;function wr(){j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),j.useEffect(()=>{const v=g=>{if(!g)return;const A=g.querySelector(".blend-wrapper");if(A){const T=A.querySelector("img");T&&g.insertBefore(T,A),A.remove()}const p=g.querySelector("img");if(!p)return;const C=p.parentElement;C.style.position="relative",C.style.isolation="isolate";let u=C.querySelector(".blend-backdrop");u||(u=document.createElement("div"),u.className="blend-backdrop",u.style.position="absolute",u.style.zIndex="0",u.style.pointerEvents="none",C.insertBefore(u,p));const D=()=>{const T=p.offsetLeft,W=p.offsetTop,$=p.clientWidth,O=p.clientHeight;u.style.left=`${T}px`,u.style.top=`${W}px`,u.style.width=`${$}px`,u.style.height=`${O}px`,u.style.backgroundColor="#f5f5f5",u.style.borderRadius="12px",u.style.setProperty("box-shadow","none","important"),u.style.setProperty("border","none","important"),u.style.setProperty("outline","none","important"),u.style.setProperty("filter","none","important"),p.style.setProperty("box-shadow","none","important"),p.style.setProperty("border","none","important"),p.style.setProperty("outline","none","important"),p.style.setProperty("filter","none","important"),C.style.setProperty("box-shadow","none","important"),C.style.setProperty("border","none","important"),C.style.setProperty("outline","none","important"),C.style.setProperty("filter","none","important"),u.style.overflow="hidden"};p.complete?D():p.addEventListener("load",D,{once:!0}),new ResizeObserver(D).observe(p),p.style.position="relative",p.style.zIndex="1",p.style.mixBlendMode="multiply"};v(document.getElementById("open-house-front")),document.querySelectorAll(".blend-img").forEach(g=>v(g));const b=()=>{v(document.getElementById("open-house-front")),document.querySelectorAll(".blend-img").forEach(g=>v(g))};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const r=Y(U());return e.jsxs("div",{children:[e.jsx(ge,{title:"Dwelling | Zack MacTavish Art & Design",description:"Dwelling is a series of quilts, collages, and mixed media works exploring houses, memories, and storytelling.",image:me,url:r,keywords:["dwelling","quilts","collages","mixed media","houses","memories"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish"],sameAs:ze,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:ie},{rel:"icon",type:"image/png",sizes:"32x32",href:ae},{rel:"apple-touch-icon",sizes:"180x180",href:re},{rel:"icon",type:"image/png",sizes:"192x192",href:ne},{rel:"icon",type:"image/png",sizes:"256x256",href:oe},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Dwelling Series",url:r,author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish"],sameAs:ze}}}),e.jsx("h1",{style:fe,children:"Dwelling by Zack MacTavish"}),e.jsx("style",{children:`
            /* Keep the split root transparent; the measured image backdrop stays neutral. */
            .blend-img { background-color: transparent !important; }

            /* Image should multiply blend to pick up grey background */
            .blend-img img {
              mix-blend-mode: multiply;
              box-sizing: border-box;
              border-radius: 12px;
            }

            /* Backdrop element sits behind the image within the ImageTextSplit container */
            .blend-backdrop { pointer-events: none; }
          `}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(_,{className:"large",children:[e.jsx(o,{src:at,webpSrc:Se,webpSrcSet:`${st} 640w, ${it} 960w, ${Se} 2200w`,avifSrc:ye,avifSrcSet:`${et} 640w, ${tt} 960w, ${ye} 2200w`,sizes:"(max-width: 900px) 92vw, 47vw",alt:"Layered house collage from the Dwelling series",width:4e3,height:3e3,loading:"eager",decoding:"sync",fetchPriority:"high"}),e.jsx(o,{src:Aa,webpSrc:Ie,webpSrcSet:`${ka} 640w, ${Ca} 960w, ${Ie} 2200w`,avifSrc:Re,avifSrcSet:`${Pa} 640w, ${Wa} 960w, ${Re} 2200w`,sizes:"(max-width: 900px) 92vw, 47vw",alt:"Layered house collage with stitched details from the Dwelling series",width:4e3,height:3e3,loading:"lazy",decoding:"async"})]})}),e.jsx(N,{children:e.jsx(G,{children:e.jsxs(H,{children:["Dwelling is a series based on the houses I’ve lived in throughout my life, using those spaces to evoke memory, nostalgia, and lived experience. The body of work includes 21 quilts, a series of collages, and one large mixed-media painting with embroidery, all made while I was learning to sew.",e.jsx("br",{}),e.jsx("br",{}),"The collage-like compositions bring together multiple stories into a single piece."]})})}),e.jsx(S,{style:{paddingTop:"4vh"},children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:yi,imageAlt:"Open House Front mixed-media painting with embroidery",imageAvif:ji,imageWebp:Si,children:[e.jsx(m,{children:"Open House Front"}),e.jsx(f,{children:"2021-22"}),e.jsx(y,{children:"Acrylic, sewing, and embroidery on canvas."})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Ai,imageAlt:"Open House Back mixed-media painting with embroidery",imageAvif:Ci,imageWebp:ki,children:[e.jsx(m,{children:"Open House Back"}),e.jsx(f,{children:"2021-22"}),e.jsx(y,{children:"Acrylic, sewing, and embroidery on canvas."})]})}),e.jsx(S,{children:e.jsxs(w,{className:"blend-img",imageSrc:lr,imageAlt:"David, Janet, Herman, and Nana Tuzio",imageAvif:hr,imageWebp:cr,children:[e.jsx(m,{children:"David, Janet, Herman, and Nana Tuzio"}),e.jsx(f,{children:"July, 1960"}),e.jsx(y,{children:"My uncle, grandmother, and great-great-grandparents who immigrated from Italy."})]})}),e.jsx(S,{children:e.jsxs(w,{className:"blend-img",imageSrc:rr,imageAlt:"David, Janet, Dominic, and Marie Bruzzi",imageAvif:or,imageWebp:nr,children:[e.jsx(m,{children:"David, Janet, Dominic, and Marie Bruzzi"}),e.jsx(y,{children:"My uncle, grandmother, and great-grandparents."})]})}),e.jsxs(pr,{children:[e.jsxs(gr,{children:[e.jsx(mr,{children:"From Then and Now: Conversations with My Grandmother"}),e.jsx(fr,{children:"I interviewed my grandmother, Janet, about her life and the memories she carries from one home and generation to the next. Alongside our conversations, I collected photographs from her family archive and brought the stories and images together in this book."})]}),e.jsx(Ye,{assetDirectory:"dwelling-book",bookTitle:"From Then and Now"})]}),e.jsxs(_,{children:[e.jsx(o,{src:Pi,webpSrc:Wi,avifSrc:Bi,alt:"Dwelling collage of a house exterior",imgStyle:{transform:"scale(0.9)"}}),e.jsx(o,{src:Di,webpSrc:Ti,avifSrc:Mi,alt:"Dwelling collage of a layered house exterior",imgStyle:{transform:"scale(0.9)"}})]}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Ma,imageAlt:"Quilt artwork of my apartment in Logan Square, Chicago",imageAvif:Ra,imageWebp:Ia,children:[e.jsx(m,{children:"Quilt 1"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"My apartment, Logan Square, Chicago"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:za,imageAlt:"Quilt artwork of the dorms in downtown Chicago",imageAvif:La,imageWebp:Ea,children:[e.jsx(m,{children:"Quilt 2"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"Dorms, Downtown, Chicago"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:$a,imageAlt:"Quilt artwork of my grandma's house",imageAvif:Na,imageWebp:Oa,children:[e.jsx(m,{children:"Quilt 3"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"My grandma's house"})]})}),e.jsx(S,{children:e.jsxs(w,{className:"blend-img",imageSrc:Ha,imageAlt:"Quilt artwork of East Providence, Rhode Island",imageAvif:qa,imageWebp:Fa,children:[e.jsx(m,{children:"Quilt 4"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"East Providence, Rhode Island"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:_a,imageAlt:"Quilt artwork of the house with Richie",imageAvif:Za,imageWebp:Ga,children:[e.jsx(m,{children:"Quilt 5"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"House with Richie"})]})}),e.jsx(S,{children:e.jsxs(w,{className:"blend-img",imageSrc:Ya,imageAlt:"Quilt artwork of my grandma's first house",imageAvif:Ka,imageWebp:Ua,children:[e.jsx(m,{children:"Quilt 6"}),e.jsx(f,{children:"2025"}),e.jsx(y,{children:"My grandma's first house"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Va,imageAlt:"Quilt artwork of Armistice Boulevard in Pawtucket, Rhode Island",imageAvif:Xa,imageWebp:Ja,children:[e.jsx(m,{children:"Quilt 7"}),e.jsx(f,{children:"2024"}),e.jsx(y,{children:"Armistice Blvd., Pawtucket, RI"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Qa,imageAlt:"Quilt artwork of the Bruzzi house in Pawtucket, Rhode Island",imageAvif:tr,imageWebp:er,children:[e.jsx(m,{children:"Quilt 8"}),e.jsx(f,{children:"2024"}),e.jsx(y,{children:"Bruzzi house, Pawtucket, RI"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:sr,imageAlt:"Quilt artwork of Olympia Avenue in Pawtucket, Rhode Island",imageAvif:ar,imageWebp:ir,children:[e.jsx(m,{children:"Quilt 9"}),e.jsx(f,{children:"2024"}),e.jsx(y,{children:"Olympia Ave, Pawtucket, RI"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{className:"blend-img",imageSrc:Ba,imageAlt:"Reduction relief woodblock print of Manistee Street",imageAvif:Ta,imageWebp:Da,children:[e.jsx(m,{children:"Manistee Street"}),e.jsx(f,{children:"2022"}),e.jsx(y,{children:"Reduction relief woodblock print."})]})}),e.jsxs(Ee,{children:[e.jsxs(he,{children:[e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:Ii,webpSrc:Ri,avifSrc:zi,alt:"EP house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:Ei,webpSrc:Li,avifSrc:$i,alt:"Westwood house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:Oi,webpSrc:Ni,avifSrc:Hi,alt:"Manistee house print"})]}),e.jsxs(he,{children:[e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:Fi,webpSrc:qi,avifSrc:_i,alt:"Albany house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:Gi,webpSrc:Zi,avifSrc:Yi,alt:"Maynard house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:Ui,webpSrc:Ki,avifSrc:Vi,alt:"Armistice 3 house print"})]})]}),e.jsxs(Ee,{children:[e.jsxs(he,{children:[e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:ia,webpSrc:aa,avifSrc:ra,alt:"Olympia house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:na,webpSrc:oa,avifSrc:la,alt:"Manistee 1 house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:ca,webpSrc:ha,avifSrc:da,alt:"Pawtucket house print"})]}),e.jsxs(he,{children:[e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:pa,webpSrc:ga,avifSrc:ma,alt:"Armistice 1 house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:fa,webpSrc:wa,avifSrc:ua,alt:"Rosewood house print"}),e.jsx(z,{as:o,style:{padding:"2vw"},$Width:"20vw",src:xa,webpSrc:va,avifSrc:ba,alt:"Taylor house print"})]})]}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large roomy",children:[e.jsx(o,{src:Ji,webpSrc:Xi,avifSrc:Qi,alt:"Dwelling collage of a neighborhood house"}),e.jsx(o,{src:ya,webpSrc:Sa,avifSrc:ja,alt:"Dwelling collage of a residential streetscape"}),e.jsx(o,{src:ea,webpSrc:ta,avifSrc:sa,alt:"Dwelling collage of a house with layered architectural details"})]})})]})}const hh=Object.freeze(Object.defineProperty({__proto__:null,SingleImageGrid:Ue,TextSection:dr,ThreeImageGrid:M,TwoImageGrid:_,default:wr},Symbol.toStringTag,{value:"Module"})),ur="/assets/olivia4-U2k2YIWJ.jpg",xr="/assets/olivia4-CbgGYs1V.webp",vr="/assets/olivia4-dv0gWX35.avif",br="/assets/oliviacollab2-DSQB1VCG.jpg",yr="/assets/oliviacollab2-ClUMF2ly.webp",Sr="/assets/oliviacollab2-kzDBRe6j.avif",jr="/assets/Collab-framed-LpQvBx43.jpg",Ar="/assets/Collab-framed-BOdOhfX1.webp",kr="/assets/Collab-framed-CyT4lAOo.avif",Cr="/assets/Collab-framed2-oQkzEAKx.jpg",Pr="/assets/Collab-framed2-D-pZLkjv.webp",Wr="/assets/Collab-framed2-noo4_L9g.avif",Br="/assets/Olivia_3-DBtY4wng.jpg",Dr="/assets/Olivia_3-CrunaD1e.webp",Tr="/assets/Olivia_3-DxV5Wozm.avif",Mr="/assets/Screenprint2-D2lzX2Ex.jpg",Ir="/assets/Screenprint2-BiAzwUCA.webp",Rr="/assets/Screenprint2-Bvg_HGzH.avif",zr="/assets/screenprint2.1-FugTJgBF.jpg",Er="/assets/screenprint2.1-CU8-JQll.webp",Lr="/assets/screenprint2.1-BZGulidI.avif",$r="/assets/Screenprint1-BFFCTLJo.jpg",Or="/assets/Screenprint1-DLRt_ovq.webp",Nr="/assets/Screenprint1-B2-Bu3zG.avif",Hr="/assets/Collab4-Cv02hbpa.jpg",Fr="/assets/Collab4-BbbJ7Iw8.webp",qr="/assets/Collab4-115H_msD.avif",_r="/assets/oliviacollab5-CbWExEiw.jpg",Gr="/assets/oliviacollab5-qYi_pMiP.webp",Zr="/assets/oliviacollab5-CF0Fj4mz.avif",Yr="/assets/oliviacollab6-CHdaq6em.jpg",Ur="/assets/oliviacollab6-IbP0YdiH.webp",Kr="/assets/oliviacollab6-BSoO19z4.avif",Vr="/assets/oliviacollab7-B-5OT4aj.jpg",Jr="/assets/oliviacollab7-hJmY7BEo.webp",Xr="/assets/oliviacollab7-DRZqlZiI.avif",Qr="/assets/oliviacollab8-DoVovPYR.jpg",en="/assets/oliviacollab8-3v0WE-hO.webp",tn="/assets/oliviacollab8-XTq7zq8u.avif",sn="/assets/BearCMYK-SauZzihb.jpg",an="/assets/BearCMYK-epnA0ZGG.webp",rn="/assets/BearCMYK-CuvXOaIv.avif",nn="/assets/GraffitiCollageCMYK-C3UcLhov.jpg",on="/assets/GraffitiCollageCMYK-BiSfxvxr.webp",ln="/assets/GraffitiCollageCMYK-By4PB7rA.avif",cn="/assets/TheTown-BgXT_4nv.jpg",hn="/assets/TheTown-dGIgZ4ay.webp",dn="/assets/TheTown-BlqnKL50.avif",pn="/assets/CapeHouseLg-DsePu3RJ.jpg",Le="/assets/CapeHouseLg-CGZshLY5.webp",$e="/assets/CapeHouseLg-HPzZHrJE.avif",gn="/assets/CapeHouseLg-640-DerA5Ovu.webp",mn="/assets/CapeHouseLg-960-DwLAeLX3.webp",fn="/assets/CapeHouseLg-640-C1e7Bvjw.avif",wn="/assets/CapeHouseLg-960-DpKBHenq.avif",un="/assets/collage50-BgzPhtII.png",xn="/assets/collage50-xzviV4ME.webp",vn="/assets/collage50-BOVtZ2ZW.avif",bn="/assets/collage47-MdYqJbxY.png",yn="/assets/collage47-LYA-gZGC.webp",Sn="/assets/collage47-BFdKXoeT.avif",jn="/assets/collage32-ioVGjuXV.png",An="/assets/collage32-DTxvao-f.webp",kn="/assets/collage32-D8rZtJEw.avif",Cn="/assets/Collage1.2-BdS_r4sI.jpg",Pn="/assets/Collage1.2-DpNq0WKh.webp",Wn="/assets/Collage1.2-BfhRZ02B.avif",Bn="/assets/Collage2.2-Cthz6pVH.png",Dn="/assets/Collage2.2-CK74oF2u.webp",Tn="/assets/Collage2.2-DGnK05Bj.avif",Mn="/assets/Collage3-DFkhf7Dj.png",In="/assets/Collage3-BcNIFg70.webp",Rn="/assets/Collage3-B5d_Mo1C.avif",zn="/assets/Collage4-kCOo8yH3.png",En="/assets/Collage4-CGnx4I1u.webp",Ln="/assets/Collage4-oLfnlHjv.avif",$n="/assets/No4-tWT-naWp.png",On="/assets/No4-C13ToF9v.webp",Nn="/assets/No4-uFvvpHdS.avif",Hn="/assets/collage45-BhcloC8w.png",Fn="/assets/collage45-CTy_oiq3.webp",qn="/assets/collage45-CdGUqhOa.avif",_n="/assets/collage41-xcTaaAgz.jpg",Gn="/assets/collage41-C-iNf1k5.webp",Zn="/assets/collage41-D4UcsnG1.avif",Yn="/assets/collage42-BCF3hgyX.jpg",Un="/assets/collage42-CzXz_Svb.webp",Kn="/assets/collage42-BfNE23bd.avif",Vn="/assets/collage43-nZy0CFhL.jpg",Jn="/assets/collage43-DN4dY8Bj.webp",Xn="/assets/collage43-BbBE-FQy.avif",Qn="/assets/collage44-Dqh87zRf.png",eo="/assets/collage44-DNvwBFSZ.webp",to="/assets/collage44-BF0QiC6x.avif",so="/assets/collage37-DFON43DK.jpg",io="/assets/collage37-DvWdcwSp.webp",ao="/assets/collage37-BAAn49fF.avif",ro="/assets/collage48-DZx6jyEw.jpg",no="/assets/collage48-DB1oUpAQ.webp",oo="/assets/collage48-CwejdiWg.avif",lo="/assets/collage40-Hbcze8Xj.png",co="/assets/collage40-D696NpTE.webp",ho="/assets/collage40-C3yNSSrS.avif",po="/assets/collage39-DBRPTHfZ.png",go="/assets/collage39-DSTjJkqi.webp",mo="/assets/collage39-D3rIZclW.avif",fo="/assets/collage38-aiSX4pAU.jpg",wo="/assets/collage38-B_cIVJ-j.webp",uo="/assets/collage38-CiCFIkmT.avif",xo="/assets/collage34-Bpe5Ya31.jpg",vo="/assets/collage34-Bv7UAK1q.webp",bo="/assets/collage34-BcgInEO8.avif",yo="/assets/collage35-CB2f8L59.jpg",So="/assets/collage35-ChcKkhb1.webp",jo="/assets/collage35-CIqVeiob.avif",Ao="/assets/collage31-D4hcJcHV.jpg",ko="/assets/collage31-CJ5c9XZD.webp",Co="/assets/collage31-Dg9DSk8W.avif",Po="/assets/collage28-whzQrNDJ.jpg",Wo="/assets/collage28-CJNw0J8T.webp",Bo="/assets/collage28-BCEv15vg.avif",Do="/assets/collage29-Cef1i3ul.jpg",To="/assets/collage29-Dr1zGOg5.webp",Mo="/assets/collage29-B-dtKedp.avif",Io="/assets/collage30-BH76F_2f.jpg",Ro="/assets/collage30-C1LbBUuX.webp",zo="/assets/collage30-D9YMew2K.avif",Eo="/assets/collage46-D67OpFQ7.jpg",Lo="/assets/collage46-Bf7jyCsK.webp",$o="/assets/collage46-Dlm_gGAQ.avif",Oo="/assets/collage33-CveGH9BX.jpg",No="/assets/collage33-BYRnMAq5.webp",Ho="/assets/collage33-CsVuYv2x.avif",Fo="/assets/collage49-uF92TWa3.jpg",qo="/assets/collage49-Bfxf8pjs.webp",_o="/assets/collage49-BWyCu52c.avif",Go="/assets/Dabs%E2%80%94Myla%E2%80%94Remix-su3ZBcfN.jpg",Zo="/assets/Dabs%E2%80%94Myla%E2%80%94Remix-DvdXe8aU.webp",Yo="/assets/Dabs%E2%80%94Myla%E2%80%94Remix-DGRBEu_X.avif",Uo="/assets/spread1-D5_fXKeg.png",Ko="/assets/spread1-Ci4o_brL.webp",Vo="/assets/spread1-DPQSQCAJ.avif",Jo="/assets/spread2-BQVy_3SM.png",Xo="/assets/spread2-BpgD9SIo.webp",Qo="/assets/spread2-D5BPv39E.avif",el="/assets/spread3-Dn2JBMtL.png",tl="/assets/spread3-BJkf1f5U.webp",sl="/assets/spread3-BlrntXSw.avif",il="/assets/spread4-ugDB314B.png",al="/assets/spread4-BYB_8OM1.webp",rl="/assets/spread4--gHa4Ob0.avif",nl="/assets/spread5-CYto1tc-.png",ol="/assets/spread5-DBXLi2bD.webp",ll="/assets/spread5-DY-u7Du3.avif",cl="/assets/spread6-Dn-KFSiy.png",hl="/assets/spread6-BeTC-zGE.webp",dl="/assets/spread6-BNMu5Gbe.avif",pl="/assets/airbrush-oMuhi549.jpg",gl="/assets/airbrush-BODkAItm.webp",ml="/assets/airbrush-Bpqmg5y1.avif",fl="/assets/YellowLily-EmUmBW21.jpg",wl="/assets/YellowLily-DogBgBag.webp",ul="/assets/YellowLily-BC7iiL0M.avif",xl="/assets/E-png-rl3CDgky.png",vl="/assets/E-png-CMpzjBAX.webp",bl="/assets/E-png-B-pV04zA.avif",yl="/assets/splashpanel-C_rOgCMq.png",Sl="/assets/splashpanel-DqPymJZI.webp",jl="/assets/splashpanel-BHOw9jTl.avif",Al="/assets/Yellow-Z-CcA6CBNC.png",kl="/assets/Yellow-Z-RFSaRQ1W.webp",Cl="/assets/Yellow-Z-ueflxwtP.avif",Pl="/assets/SelfPortrait-DIGhexpW.jpg",Wl="/assets/SelfPortrait-B-fAcnso.webp",Bl="/assets/SelfPortrait-CZdbEjSz.avif";function Dl(){j.useEffect(()=>{const r=b=>{if(!b)return;const g=b.querySelector("img");if(!g)return;const A=g.parentElement;A.style.position="relative",A.style.isolation="isolate";let p=A.querySelector(".blend-backdrop");p||(p=document.createElement("div"),p.className="blend-backdrop",p.style.position="absolute",p.style.zIndex="0",p.style.pointerEvents="none",A.insertBefore(p,g));const C=()=>{const D=g.offsetLeft,B=g.offsetTop,T=g.clientWidth,W=g.clientHeight;p.style.left=`${D}px`,p.style.top=`${B}px`,p.style.width=`${T}px`,p.style.height=`${W}px`,p.style.backgroundColor="#f5f5f5",p.style.borderRadius="12px",p.style.setProperty("box-shadow","none","important"),p.style.setProperty("border","none","important"),p.style.setProperty("outline","none","important"),p.style.setProperty("filter","none","important"),g.style.setProperty("box-shadow","none","important"),g.style.setProperty("border","none","important"),g.style.setProperty("outline","none","important"),g.style.setProperty("filter","none","important"),A.style.setProperty("box-shadow","none","important"),A.style.setProperty("border","none","important"),A.style.setProperty("outline","none","important"),A.style.setProperty("filter","none","important"),p.style.overflow="hidden"};g.complete?C():g.addEventListener("load",C,{once:!0}),new window.ResizeObserver(C).observe(g),g.style.position="relative",g.style.zIndex="1",g.style.mixBlendMode="multiply"};document.querySelectorAll(".blend-img").forEach(b=>r(b));const v=()=>{document.querySelectorAll(".blend-img").forEach(b=>r(b))};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[])}const Oe=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],E=d.div`
  display: flex;
  justify-content: center;
  background-color: ${r=>r.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`,L=d.img`
  width: ${r=>r.$Width||"auto"};
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
`,N=d.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--surface-secondary);
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
`,G=d.div`
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
`,H=d.p`
  font-family: 'Space Grotesk', sans-serif;
  color: ${r=>r.theme.narrativeText};
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
    color: ${r=>r.theme.narrativeText};
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
`;function Tl(){return Dl(),j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{children:[e.jsx(ge,{title:"Printmaking | Zack MacTavish Art & Design",description:"Screen printing and mixed media works, including collaborations with Olivia Zita Smith and CMYK experiments.",image:me,url:Y(U()),keywords:["printmaking","screenprint","collaboration","CMYK","collage"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Oe,favicons:[{rel:"icon",type:"image/png",sizes:"16x16",href:ie},{rel:"icon",type:"image/png",sizes:"32x32",href:ae},{rel:"apple-touch-icon",sizes:"180x180",href:re},{rel:"icon",type:"image/png",sizes:"192x192",href:ne},{rel:"icon",type:"image/png",sizes:"256x256",href:oe},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Printmaking Series",url:Y(U()),author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Oe}}}),e.jsx("h1",{style:fe,children:"Printmaking by Zack MacTavish"}),e.jsx(o,{src:ct,webpSrc:Ae,webpSrcSet:`${ot} 640w, ${lt} 960w, ${Ae} 2200w`,avifSrc:je,avifSrcSet:`${rt} 640w, ${nt} 960w, ${je} 2200w`,sizes:"100vw",alt:"Cape House exterior",width:3788,height:2015,loading:"eager",decoding:"sync",fetchPriority:"high",style:{width:"100vw",height:"100svh",objectFit:"cover",objectPosition:"bottom",display:"block"}}),e.jsx(o,{src:pn,webpSrc:Le,webpSrcSet:`${gn} 640w, ${mn} 960w, ${Le} 2200w`,avifSrc:$e,avifSrcSet:`${fn} 640w, ${wn} 960w, ${$e} 2200w`,sizes:"100vw",alt:"Cape House large view",width:5424,height:2967,style:{width:"100vw",height:"100svh",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsx(Ve,{children:e.jsxs(_,{className:"one-row",children:[e.jsx(o,{src:ur,webpSrc:xr,avifSrc:vr,alt:"Collaborative Olivia portrait print"}),e.jsx(o,{src:br,webpSrc:yr,avifSrc:Sr,alt:"Framed collaborative Olivia print"})]})})}),e.jsx(N,{children:e.jsxs(H,{children:["My printmaking practice explores screen printing and mixed media techniques, incorporating drawing and painting. I’m drawn to the way I can create multiples and experiment freely with each iteration. Several of these works are collaborative projects with my partner"," ",e.jsxs("a",{href:"https://oliviazitasmith.com",target:"_blank",rel:"noopener noreferrer",className:"inline-link",children:["Olivia Zita Smith",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"})})]}),", who works using relief techniques."]})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw",padding:"8vh 0"},children:e.jsxs(M,{className:"large multiply",style:{width:"min(98vw, 100%)",maxWidth:"1800px",margin:"0 auto"},children:[e.jsx(o,{src:Mr,webpSrc:Ir,avifSrc:Rr,alt:"Abstract layered screen print",imgStyle:{mixBlendMode:"multiply"}}),e.jsx(o,{src:zr,webpSrc:Er,avifSrc:Lr,alt:"Abstract layered screen print variation",imgStyle:{mixBlendMode:"multiply"}}),e.jsx(o,{src:$r,webpSrc:Or,avifSrc:Nr,alt:"Abstract screen print in layered ink",imgStyle:{mixBlendMode:"multiply"}})]})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(_,{className:"one-row",children:[e.jsx(o,{src:jr,webpSrc:Ar,avifSrc:kr,alt:"Collaborative Olivia print"}),e.jsx(o,{src:Cr,webpSrc:Pr,avifSrc:Wr,alt:"Collaborative Olivia print variation"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:Br,webpSrc:Dr,avifSrc:Tr,alt:"Olivia collaboration portrait"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(_,{className:"one-row",children:[e.jsx(o,{src:Yr,webpSrc:Ur,avifSrc:Kr,alt:"Collaborative Olivia print with alternate colorway"}),e.jsx(o,{src:_r,webpSrc:Gr,avifSrc:Zr,alt:"Alternate framed collaborative Olivia print"})]})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(_,{className:"one-row",children:[e.jsx(o,{src:Vr,webpSrc:Jr,avifSrc:Xr,alt:"Olivia collaboration print detail"}),e.jsx(o,{src:Qr,webpSrc:en,avifSrc:tn,alt:"Olivia collaboration print variation"})]})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(o,{src:sn,webpSrc:an,avifSrc:rn,alt:"CMYK bear print"}),e.jsx(o,{src:nn,webpSrc:on,avifSrc:ln,alt:"Graffiti collage print"}),e.jsx(o,{src:cn,webpSrc:hn,avifSrc:dn,alt:"The Town print"})]})}),e.jsx(N,{children:e.jsx(G,{children:e.jsxs(H,{children:["I often look for ways to capture moments from my life. Painting gives me a way to work through shape, color, and atmosphere.",e.jsx("br",{}),e.jsx("br",{}),"I move between realism and abstraction depending on what a piece needs."]})})}),e.jsxs(S,{style:{padding:"4vh 0"},children:[e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Hr,imageWebp:Fr,imageAvif:qr,imageAlt:"Olivia Collaboration print",children:[e.jsx(m,{children:"Olivia Collaboration"}),e.jsx(f,{children:"2022"}),e.jsx(y,{children:"Spraypaint, and relief ink on paper"})]}),e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:yl,imageWebp:Sl,imageAvif:jl,imageAlt:"MILKBONES painting",children:[e.jsx(m,{children:"MILKBONES"}),e.jsx(f,{children:"2021"}),e.jsx(y,{children:"Spray paint and acrylic paint on wood panel."})]}),e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:Al,imageWebp:kl,imageAvif:Cl,imageAlt:"YELLOW TWEED painting",children:[e.jsx(m,{children:"YELLOW TWEED"}),e.jsx(f,{children:"2015-21"}),e.jsx(y,{children:"Spray paint and acrylic paint on wood panel."})]}),e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:fl,imageWebp:wl,imageAvif:ul,imageAlt:"Yellow Lily painting",children:[e.jsx(m,{children:"Yellow Lily"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Airbrush & acrylic on yupo paper."})]}),e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:pl,imageWebp:gl,imageAvif:ml,imageAlt:"SHAPES painting",children:[e.jsx(m,{children:"SHAPES"}),e.jsx(f,{children:"2020"}),e.jsx(y,{children:"Acrylic & spraypaint on yupo paper."})]}),e.jsxs(w,{imageMode:"framed",imageBlendMode:"multiply",imageSrc:xl,imageWebp:vl,imageAvif:bl,imageAlt:"ORANGE CACTI painting",children:[e.jsx(m,{children:"ORANGE CACTI"}),e.jsx(f,{children:"2015-21"}),e.jsx(y,{children:"Spray paint and acrylic paint on wood panel."})]})]}),e.jsx(E,{style:{paddingBottom:"100px"},children:e.jsx(L,{as:o,$Width:"55vw",src:Pl,webpSrc:Wl,avifSrc:Bl,alt:"Self portrait"})}),e.jsx(N,{children:e.jsx(G,{children:e.jsx(H,{children:"Collaging is a playful way for me to explore composition, shape, and color. It lets me experiment freely, test ideas quickly, and discover new directions for the work."})})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(o,{src:jn,webpSrc:An,avifSrc:kn,alt:"Abstract collage artwork 32"}),e.jsx(o,{src:bn,webpSrc:yn,avifSrc:Sn,alt:"Abstract collage artwork 47"}),e.jsx(o,{src:un,webpSrc:xn,avifSrc:vn,alt:"Abstract collage artwork 50"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:Uo,webpSrc:Ko,avifSrc:Vo,alt:"Collage sketchbook spread 1"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(o,{src:Cn,webpSrc:Pn,avifSrc:Wn,alt:"Abstract collage artwork 1"}),e.jsx(o,{src:Bn,webpSrc:Dn,avifSrc:Tn,alt:"Abstract collage artwork 2"}),e.jsx(o,{src:Mn,webpSrc:In,avifSrc:Rn,alt:"Abstract collage artwork 3"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:Jo,webpSrc:Xo,avifSrc:Qo,alt:"Collage sketchbook spread 2"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(o,{src:zn,webpSrc:En,avifSrc:Ln,alt:"Abstract collage artwork 4"}),e.jsx(o,{src:$n,webpSrc:On,avifSrc:Nn,alt:"Abstract collage artwork 4 alternate version"}),e.jsx(o,{src:Hn,webpSrc:Fn,avifSrc:qn,alt:"Abstract collage artwork 45"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:el,webpSrc:tl,avifSrc:sl,alt:"Collage sketchbook spread 3"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(o,{src:Qn,webpSrc:eo,avifSrc:to,alt:"Abstract collage artwork 44"}),e.jsx(o,{src:so,webpSrc:io,avifSrc:ao,alt:"Abstract collage artwork 37"}),e.jsx(o,{src:ro,webpSrc:no,avifSrc:oo,alt:"Abstract collage artwork 48"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:il,webpSrc:al,avifSrc:rl,alt:"Collage sketchbook spread 4"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large portrait-large",children:[e.jsx(o,{src:lo,webpSrc:co,avifSrc:ho,alt:"Abstract collage artwork 40"}),e.jsx(o,{src:po,webpSrc:go,avifSrc:mo,alt:"Abstract collage artwork 39"}),e.jsx(o,{src:fo,webpSrc:wo,avifSrc:uo,alt:"Abstract collage artwork 38"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:nl,webpSrc:ol,avifSrc:ll,alt:"Collage sketchbook spread 5"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(o,{src:xo,webpSrc:vo,avifSrc:bo,alt:"Abstract collage artwork 34"}),e.jsx(o,{src:yo,webpSrc:So,avifSrc:jo,alt:"Abstract collage artwork 35"}),e.jsx(o,{src:Ao,webpSrc:ko,avifSrc:Co,alt:"Abstract collage artwork 31"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:cl,webpSrc:hl,avifSrc:dl,alt:"Collage sketchbook spread 6"})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(o,{src:Po,webpSrc:Wo,avifSrc:Bo,alt:"Abstract collage artwork 28"}),e.jsx(o,{src:Do,webpSrc:To,avifSrc:Mo,alt:"Abstract collage artwork 29"}),e.jsx(o,{src:Io,webpSrc:Ro,avifSrc:zo,alt:"Abstract collage artwork 30"})]})}),e.jsx(E,{children:e.jsx(L,{as:o,$Width:"60vw",src:Go,webpSrc:Zo,avifSrc:Yo,alt:"Collage artwork titled Dabs Myla Remix",imgStyle:{borderRadius:"18px"}})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{className:"large",children:[e.jsx(o,{src:Eo,webpSrc:Lo,avifSrc:$o,alt:"Abstract collage artwork 46"}),e.jsx(o,{src:Oo,webpSrc:No,avifSrc:Ho,alt:"Abstract collage artwork 33"}),e.jsx(o,{src:Fo,webpSrc:qo,avifSrc:_o,alt:"Abstract collage artwork 49"})]})}),e.jsx("div",{style:{backgroundColor:"var(--surface-primary)",width:"100vw"},children:e.jsxs(M,{style:{backgroundColor:"transparent"},children:[e.jsx(o,{src:_n,webpSrc:Gn,avifSrc:Zn,alt:"Abstract collage artwork 41"}),e.jsx(o,{src:Yn,webpSrc:Un,avifSrc:Kn,alt:"Abstract collage artwork 42"}),e.jsx(o,{src:Vn,webpSrc:Jn,avifSrc:Xn,alt:"Abstract collage artwork 43"})]})})]})}const dh=Object.freeze(Object.defineProperty({__proto__:null,FullHeightTextSection:N,TextContainer:G,TextContent:H,default:Tl},Symbol.toStringTag,{value:"Module"})),Ml="/assets/Composition-BackCover-Pt.2-01-CgJGr0YY.jpg",Ne="/assets/Composition-BackCover-Pt.2-01-ClPDHp8f.webp",He="/assets/Composition-BackCover-Pt.2-01-Brw18o1R.avif",Il="/assets/Composition-BackCover-Pt.2-01-640-hLwNqpV9.webp",Rl="/assets/Composition-BackCover-Pt.2-01-960-0YCK3KpW.webp",zl="/assets/Composition-BackCover-Pt.2-01-640-DJc-I_AQ.avif",El="/assets/Composition-BackCover-Pt.2-01-960-DjxWYxI5.avif",Ll="/assets/Render1-DT-g5NKH.png",$l="/assets/Render1-CPYa-0q4.webp",Ol="/assets/Render1-DOs6TUJE.avif",Fe="/assets/Artbook-CTrBke0P.png",qe="/assets/Artbook-4LqNfgyx.webp",_e="/assets/Artbook-qr5jOApA.avif",Nl="/assets/Orbital-MSHexiyD.webp",Hl="/assets/Orbital-kkd1dZ4d.avif",Fl="/assets/Spraypaintwash-BaOYkJyw.webp",ql="/assets/Spraypaintwash-v7LuXuaa.avif",_l="/assets/Render2-BeFVEg4T.png",Gl="/assets/Render2-BFuydU6r.webp",Zl="/assets/Render2-DoNAMUHJ.avif",Yl="/assets/Twin1-D2RWvRgs.jpeg",Ul="/assets/Twin1-Ekj5P1xU.webp",Kl="/assets/Twin1-BsV_5Kc4.avif",Vl="/assets/Twin2-CDf_Ciy4.jpeg",Jl="/assets/Twin2-Ct4ksB9p.webp",Xl="/assets/Twin2-DIgZcP_8.avif",Ql="/assets/Staircases-rPaNQ9T8.webp",ec="/assets/Staircases-CntQHqy2.avif",tc="/assets/heartwhite-hmQhQCSU.jpeg",sc="/assets/heartwhite-BY7Arldd.webp",ic="/assets/heartwhite-Deen9ZYa.avif",ac="/assets/heartblack-BNrbkkGC.jpg",rc="/assets/heartblack-BDj6PpTZ.webp",nc="/assets/heartblack-BM5GOsEM.avif",oc="/assets/Birds-BRR20DEX.jpg",lc="/assets/Birds-BfTLwFSA.webp",cc="/assets/Birds-CpIRV6cj.avif",hc="/assets/Brooklyn-CDo2RsPc.webp",dc="/assets/Brooklyn-B3Xxez07.avif",pc="/assets/Coney-amO18Ojw.webp",gc="/assets/Coney-BbkJzuhU.avif",mc="/assets/Brooklyn2-BOjlmPf4.webp",fc="/assets/Brooklyn2-hysoQXg9.avif",wc="/assets/Render4-CUv_OZcU.png",uc="/assets/Render4-BbP-SCPU.webp",xc="/assets/Render4-czE6f-R8.avif",vc="/assets/Rug-DNTpYrqu.webp",bc="/assets/Rug-qk7_00KP.avif",yc="/assets/Mash1-By186HQs.webp",Sc="/assets/Mash1-CD7JNTpE.avif",jc="/assets/Mash2-BhSatqSs.webp",Ac="/assets/Mash2-DatWVgGz.avif",kc="/assets/Render5-DDVrXzlj.png",Cc="/assets/Render5-8-OqZTM_.webp",Pc="/assets/Render5-D__NT6lp.avif",Wc="/assets/Mash3-CfssUcL-.webp",Bc="/assets/Mash3-BzVVQDAv.avif",Dc="/assets/Mash4-voIqPWzH.webp",Tc="/assets/Mash4-CfZ6Zm83.avif",Mc="/assets/Mattos-cG9NEt7H.png",Ic="/assets/Mattos-DpEAIyko.webp",Rc="/assets/Mattos-CvCWgofy.avif",zc="/assets/No.3-DZfy37SG.webp",Ec="/assets/No.3-DYCAAtZK.avif",Lc="/assets/Grain-gPTL1VTa.webp",$c="/assets/Grain-DXHUqFdd.avif",Ge=["https://dribbble.com/Zmactavish","https://www.instagram.com/zackmichaelmactavish","https://www.linkedin.com/in/zacharymactavish/","https://github.com/ZackMacTavish","https://medium.com/@zmactavish"],Oc=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${r=>r.theme.backgroundTwo};
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
`,Nc=d.img`
  background-color: ${r=>r.theme.backgroundTwo};
  width: 54vw;
  max-width: 90vw; /* prevents overflow on small screens */
  height: auto;

  @media (max-width: 850px) {
    width: 80vw; /* scale up a bit relative to smaller screens */
  }
`,Q=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${r=>r.theme.backgroundTwo};
  padding: 4vh 0;
`,ee=d.img`
  width: min(74vw, 1180px);
  max-width: 92vw;
  height: auto;
  display: block;
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 90vw;
  }
`,Hc=d.a`
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
`,Fc=d.img`
  width: 100%;
  height: 100%;
  min-height: 210px;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 9;
    min-height: 0;
  }
`,qc=d.div`
  padding: clamp(1.4rem, 2.4vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,_c=d.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.18rem, 1.45vw, 1.45rem);
  line-height: 1.12;
  color: ${r=>r.theme.narrativeText};
`,Gc=d.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${r=>r.theme.pageMuted};
`,Zc=d.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${r=>r.theme.narrativeText};
`,K=d.img`
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
`,Yc=d(K)`
  grid-row-start: 3;
`,Uc=d(K)`
  grid-row-start: 5;
`;d.img`
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
`;const pe=d.img`
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
`,xe=d.div`
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
`,de=d.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${r=>r.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`,Ke=d.div`
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
`,Kc=d.div`
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
`,ve=d.div`
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

  & > ${K},
  & > ${pe} {
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
`,Vc=d.div`
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
    padding: 5vh 0 5vh 0; // add padding top for stacked layout
  }
`,Jc=d.div`
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
`,Xc=d.div`
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
`,be=d.div`
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
`,Qc=d(be)`
  grid-row-start: 3;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,eh=d(be)`
  grid-row-start: 5;

  @media (max-width: 830px) {
    grid-row-start: auto;
  }
`,m=d.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1.8rem; }
  @media(max-width: 830px) { font-size: 1.4rem; }
`,f=d.h3`
  font-weight: 500;
  font-size: 2rem;
  margin: 0 0 1rem 0;  // spacing below year
  color: inherit;

  @media(max-width: 1750px) { font-size: 1.5rem; }
  @media(max-width: 830px) { font-size: 1.2rem; }
`,y=d.h2`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.2; // tighter line-height for description
  margin: 0;
  color: inherit;

  @media(max-width: 1750px) { font-size: 1rem; }
  @media(max-width: 830px) { font-size: 0.9rem; }
`,th=d.div`
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
`;function sh(){j.useLayoutEffect(()=>{window.scrollTo(0,0)},[]);const r=Y(U());return e.jsxs("div",{children:[e.jsx("style",{children:`
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
`}),e.jsx(ge,{title:"Composition | Zack MacTavish Art & Design",description:"Composition is Zack MacTavish's first solo show, using the composition notebook as a metaphor for self-reflection through paintings, photographs, collages, rugs, and a self-published book made from 2019 to 2021.",image:me,url:r,keywords:["composition","painting","render","photography"],authorName:"Zack MacTavish",authorAlternateNames:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Ge,favicons:[{rel:"icon",sizes:"16x16",href:ie},{rel:"icon",sizes:"32x32",href:ae},{rel:"icon",sizes:"256x256",href:oe},{rel:"icon",sizes:"512x512",href:Z},{rel:"apple-touch-icon",sizes:"180x180",href:re},{rel:"icon",sizes:"192x192",href:ne},{rel:"icon",sizes:"512x512",href:Z},{rel:"icon",type:"image/png",sizes:"16x16",href:ie},{rel:"icon",type:"image/png",sizes:"32x32",href:ae},{rel:"apple-touch-icon",sizes:"180x180",href:re},{rel:"icon",type:"image/png",sizes:"192x192",href:ne},{rel:"icon",type:"image/png",sizes:"256x256",href:oe},{rel:"icon",type:"image/png",sizes:"512x512",href:Z},{rel:"icon",href:"/favicon.ico"}],jsonLd:{"@context":"https://schema.org","@type":"CreativeWork",name:"Composition Series",url:r,author:{"@type":"Person",name:"Zack MacTavish",alternateName:["Zachary MacTavish","Zack MacTavish Art","Zachary MacTavish Art"],sameAs:Ge}}}),e.jsx("h1",{style:fe,children:"Composition by Zack MacTavish"}),e.jsx(Oc,{children:e.jsx(Nc,{as:o,src:Ml,webpSrc:Ne,webpSrcSet:`${Il} 640w, ${Rl} 960w, ${Ne} 2200w`,avifSrc:He,avifSrcSet:`${zl} 640w, ${El} 960w, ${He} 2200w`,sizes:"(max-width: 850px) 80vw, 54vw",alt:"Composition notebook cover",width:5620,height:3685,loading:"eager",decoding:"sync",fetchPriority:"high"})}),e.jsxs(N,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2rem"},children:[e.jsx(G,{style:{width:"min(88vw, 72ch)",padding:0,alignItems:"stretch"},children:e.jsx(H,{style:{maxWidth:"100%"},children:"Composition was my first solo art show and uses the composition notebook as a metaphor for self-reflection across the places I have lived. The series grew out of moving more than 21 times through Rhode Island, Massachusetts, Illinois, New York, Oregon, and Pennsylvania, and became a way to document how environment, memory, and personal growth accumulate over time. Made between 2019 and 2021, the show brought together paintings, a graphite drawing, hand-tufted rugs, photographs, physical and digital collages, and a self-published book."})}),e.jsxs(Hc,{href:"https://medium.com/@zmactavish/my-first-solo-art-show-de7ac72b054f",target:"_blank",rel:"noreferrer",children:[e.jsx(Fc,{as:o,src:Fe,webpSrc:qe,avifSrc:_e,alt:"Composition art book and blog post preview"}),e.jsxs(qc,{children:[e.jsx(_c,{children:"Read more about Composition"}),e.jsx(Gc,{children:"A short essay on the show, the series, and how it led into my current body of work."}),e.jsx(Zc,{children:"Read on Medium"})]})]})]}),e.jsx(Q,{children:e.jsx(ee,{as:o,src:Ll,webpSrc:$l,avifSrc:Ol,alt:"Composition render one"})}),e.jsxs("div",{style:{backgroundColor:"var(--surface-secondary)",width:"100vw",padding:"8vh 0"},children:[e.jsx(w,{className:"tight-split",imageSrc:Fe,imageWebp:qe,imageAvif:_e,imageAlt:"Composition artist book",children:e.jsx(th,{children:"I self-published a limited edition book for Composition. All 30 copies sold during the run of the series, and the book extended the exhibition's interest in journaling, documentation, and building an archive around the work."})}),e.jsx("div",{style:{width:"100vw",background:"var(--surface-secondary)",padding:"4vh 0"},children:e.jsx(Ye,{})})]}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:Ft,imageWebp:Nl,imageAvif:Hl,imageAlt:"ORBITAL mixed-media work from Composition",children:[e.jsx(m,{children:"ORBITAL"}),e.jsx(f,{children:"2021"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:qt,imageWebp:Fl,imageAvif:ql,imageAlt:"Erasure 1",children:[e.jsx(m,{children:"ERASURE I"}),e.jsx(f,{children:"2021"})]})}),e.jsx(Q,{children:e.jsx(ee,{as:o,src:_l,webpSrc:Gl,avifSrc:Zl,alt:"Composition render 2"})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:_t,imageWebp:Ql,imageAvif:ec,imageAlt:"Staircases",children:[e.jsx(m,{children:"STAIRCASES"}),e.jsx(f,{children:"2021"})]})}),e.jsxs(ve,{children:[e.jsx(K,{as:o,src:tc,webpSrc:sc,avifSrc:ic,alt:"Composition X detail white"}),e.jsx(pe,{as:o,src:ac,webpSrc:rc,avifSrc:nc,alt:"Composition X detail black"}),e.jsxs(xe,{children:[e.jsx(m,{children:"COMPOSITION X"}),e.jsx(f,{children:"2021"})]})]}),e.jsx(o,{src:oc,webpSrc:lc,avifSrc:cc,alt:"Birds composition",style:{width:"100vw",height:"100vh",objectFit:"cover",objectPosition:"center",display:"block"}}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageSrc:Gt,imageWebp:pc,imageAvif:gc,imageAlt:"Coney Island, NY",children:[e.jsx(m,{children:"CONEY ISLAND, NY"}),e.jsx(f,{children:"2021"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageSrc:Zt,imageWebp:hc,imageAvif:dc,imageAlt:"Brooklyn, NY I",children:[e.jsx(m,{children:"BROOKLYN, NY I"}),e.jsx(f,{children:"2021"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageSrc:Yt,imageWebp:mc,imageAvif:fc,imageAlt:"Brooklyn, NY II",children:[e.jsx(m,{children:"BROOKLYN, NY II"}),e.jsx(f,{children:"2021"})]})}),e.jsx(Q,{children:e.jsx(ee,{as:o,src:wc,webpSrc:uc,avifSrc:xc,alt:"Composition render 4"})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageSrc:Ut,imageWebp:vc,imageAvif:bc,imageAlt:"Rug I",children:[e.jsx(m,{children:"RUG I"}),e.jsx(f,{children:"2021"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:Kt,imageWebp:yc,imageAvif:Sc,imageAlt:"Composition III",children:[e.jsx(m,{children:"COMPOSITION III"}),e.jsx(f,{children:"2019"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:Vt,imageWebp:jc,imageAvif:Ac,imageAlt:"Composition IV",children:[e.jsx(m,{children:"COMPOSITION IV"}),e.jsx(f,{children:"2019"})]})}),e.jsx(Q,{children:e.jsx(ee,{as:o,src:kc,webpSrc:Cc,avifSrc:Pc,alt:"Composition render 5"})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:Jt,imageWebp:Wc,imageAvif:Bc,imageAlt:"Composition V",children:[e.jsx(m,{children:"COMPOSITION V"}),e.jsx(f,{children:"2019"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:Xt,imageWebp:Dc,imageAvif:Tc,imageAlt:"Composition VI",children:[e.jsx(m,{children:"COMPOSITION VI"}),e.jsx(f,{children:"2019"})]})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:pt,imageWebp:dt,imageAvif:ht,imageAlt:"Composition VII",children:[e.jsx(m,{children:"COMPOSITION VII"}),e.jsx(f,{children:"2020"})]})}),e.jsx(Q,{children:e.jsx(ee,{as:o,src:Mc,webpSrc:Ic,avifSrc:Rc,alt:"Mattos collage"})}),e.jsx(S,{style:{padding:"5vh 0"},children:e.jsxs(w,{imageMode:"framed",imageSrc:Qt,imageWebp:zc,imageAvif:Ec,imageAlt:"Composition I",children:[e.jsx(m,{children:"COMPOSITION I"}),e.jsx(f,{children:"2018"})]})}),e.jsx(S,{children:e.jsxs(w,{imageMode:"framed",imageSrc:es,imageWebp:Lc,imageAvif:$c,imageAlt:"GRAIN mixed-media work from Composition",children:[e.jsx(m,{children:"GRAIN"}),e.jsx(f,{children:"2021"})]})}),e.jsxs(ve,{children:[e.jsx(K,{as:o,src:Yl,webpSrc:Ul,avifSrc:Kl,alt:"Ephemeral I"}),e.jsx(pe,{as:o,src:Vl,webpSrc:Jl,avifSrc:Xl,alt:"Ephemeral II"}),e.jsxs(xe,{children:[e.jsx(m,{children:"EPHEMERAL I & II"}),e.jsx(f,{children:"2021"})]})]}),e.jsx(N,{children:e.jsx(G,{children:e.jsx(H,{children:"Over the course of Composition, I started to understand that the work was pointing me beyond transition itself and toward the more permanent fixtures that shape a life: the homes I have lived in, the people around me, and the hidden histories carried by those spaces. That realization became the foundation for my current body of work, which turns more fully toward quilting, embroidery, collage, painting, and bookmaking as forms of archive. What Composition began to explore through notebooks, photographs, and fragments of place has expanded into a longer investigation of family, memory, identity, and preservation."})})})]})}const ph=Object.freeze(Object.defineProperty({__proto__:null,ArtDesc:y,ArtHeader:m,ArtSectionThreeone:Xc,ArtSectionThreetwo:Jc,ArtSectionthree:Kc,ArtSectionthreeog:Vc,ArtSectiontwins:ve,ArtText:be,ArtTextthree:eh,ArtTexttwo:Qc,ArtYear:f,FullBg:de,GridRowThree:Uc,GridRowTwo:Yc,Orbital:K,ParagraphFour:Ke,TwinTwo:pe,TwinsText:xe,default:sh},Symbol.toStringTag,{value:"Module"}));export{m as A,ph as C,hh as D,de as F,ch as M,M as T,f as a,y as b,dh as c};
