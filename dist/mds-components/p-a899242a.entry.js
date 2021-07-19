import{r as t,h as e,H as n,g as i}from"./p-252a16a5.js";import{M as r,m as o}from"./p-8a252c56.js";var s,u=[],a="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(s||(s={}));var c,h=function(t){return Object.freeze(t)},f=function(t,e){this.inlineSize=t,this.blockSize=e,h(this)},l=function(){function t(t,e,n,i){return this.x=t,this.y=e,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,h(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),d=function(t){return t instanceof SVGElement&&"getBBox"in t},v=function(t){if(d(t)){var e=t.getBBox();return!e.width&&!e.height}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},m=function(t){var e,n;if(t instanceof Element)return!0;var i=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(i&&t instanceof i.Element)},p="undefined"!=typeof window?window:{},b=new WeakMap,w=/auto|scroll/,x=/^tb|vertical/,y=/msie|trident/i.test(p.navigator&&p.navigator.userAgent),g=function(t){return parseFloat(t||"0")},C=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),new f((n?e:t)||0,(n?t:e)||0)},O=h({devicePixelContentBoxSize:C(),borderBoxSize:C(),contentBoxSize:C(),contentRect:new l(0,0,0,0)}),E=function(t,e){if(void 0===e&&(e=!1),b.has(t)&&!e)return b.get(t);if(v(t))return b.set(t,O),O;var n=getComputedStyle(t),i=d(t)&&t.ownerSVGElement&&t.getBBox(),r=!y&&"border-box"===n.boxSizing,o=x.test(n.writingMode||""),s=!i&&w.test(n.overflowY||""),u=!i&&w.test(n.overflowX||""),a=i?0:g(n.paddingTop),c=i?0:g(n.paddingRight),f=i?0:g(n.paddingBottom),m=i?0:g(n.paddingLeft),p=i?0:g(n.borderTopWidth),E=i?0:g(n.borderRightWidth),M=i?0:g(n.borderBottomWidth),z=m+c,B=a+f,R=(i?0:g(n.borderLeftWidth))+E,T=p+M,j=u?t.offsetHeight-T-t.clientHeight:0,L=s?t.offsetWidth-R-t.clientWidth:0,S=r?z+R:0,k=r?B+T:0,F=i?i.width:g(n.width)-S-L,A=i?i.height:g(n.height)-k-j,D=F+z+L+R,q=A+B+j+T,H=h({devicePixelContentBoxSize:C(Math.round(F*devicePixelRatio),Math.round(A*devicePixelRatio),o),borderBoxSize:C(D,q,o),contentBoxSize:C(F,A,o),contentRect:new l(m,a,F,A)});return b.set(t,H),H},M=function(t,e,n){var i=E(t,n),r=i.borderBoxSize,o=i.contentBoxSize,u=i.devicePixelContentBoxSize;switch(e){case s.DEVICE_PIXEL_CONTENT_BOX:return u;case s.BORDER_BOX:return r;default:return o}},z=function(t){var e=E(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=h([e.borderBoxSize]),this.contentBoxSize=h([e.contentBoxSize]),this.devicePixelContentBoxSize=h([e.devicePixelContentBoxSize])},B=function(t){if(v(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},R=function(){var t=1/0,e=[];u.forEach((function(n){if(0!==n.activeTargets.length){var i=[];n.activeTargets.forEach((function(e){var n=new z(e.target),r=B(e.target);i.push(n),e.lastReportedSize=M(e.target,e.observedBox),r<t&&(t=r)})),e.push((function(){n.callback.call(n.observer,i,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,i=e;n<i.length;n++)(0,i[n])();return t},T=function(t){u.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(B(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},j=[],L=0,S={attributes:!0,characterData:!0,childList:!0,subtree:!0},k=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],F=function(t){return void 0===t&&(t=0),Date.now()+t},A=!1,D=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!A){A=!0;var n,i=F(t);n=function(){var n=!1;try{n=function(){var t,e=0;for(T(e);u.some((function(t){return t.activeTargets.length>0}));)e=R(),T(e);return u.some((function(t){return t.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?t=new ErrorEvent("error",{message:a}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=a),window.dispatchEvent(t)),e>0}()}finally{if(A=!1,t=i-F(),!L)return;n?e.run(1e3):t>0?e.run(t):e.start()}},function(t){if(!c){var e=0,n=document.createTextNode("");new MutationObserver((function(){return j.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),c=function(){n.textContent=""+(e?e--:e++)}}j.push(t),c()}((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,S)};document.body?e():p.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),k.forEach((function(e){return p.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),k.forEach((function(e){return p.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),q=function(t){!L&&t>0&&D.start(),!(L+=t)&&D.stop()},H=function(){function t(t,e){this.target=t,this.observedBox=e||s.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=M(this.target,this.observedBox,!0);return d(t=this.target)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),I=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},P=new WeakMap,V=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},Z=function(){function t(){}return t.connect=function(t,e){var n=new I(t,e);P.set(t,n)},t.observe=function(t,e,n){var i=P.get(t),r=0===i.observationTargets.length;V(i.observationTargets,e)<0&&(r&&u.push(i),i.observationTargets.push(new H(e,n&&n.box)),q(1),D.schedule())},t.unobserve=function(t,e){var n=P.get(t),i=V(n.observationTargets,e);i>=0&&(1===n.observationTargets.length&&u.splice(u.indexOf(n),1),n.observationTargets.splice(i,1),q(-1))},t.disconnect=function(t){var e=this,n=P.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),W=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Z.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!m(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!m(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Z.unobserve(this,t)},t.prototype.disconnect=function(){Z.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();const G=class{constructor(e){t(this,e),this.hasTabs=!1,this.buttons=[],this.previousPageUrl="",this.previousPageTitle="Back",this.pattern=!1,this.minWidths=new r,this.renderTertiaryButtonAsMenu=!1}componentWillLoad(){this.hasTabs=!!this.element.querySelector('[slot="tabs"]')}connectedCallback(){o.subscribeComponent(this)}disconnectedCallback(){o.unsubscribeComponent(this),this.resizeObserver.disconnect()}updateRenderTertiaryButtonAsMenu(){if(this.minWidths.md||this.buttons.length<3)return void(this.renderTertiaryButtonAsMenu=!1);if(!this.tertiaryButtonWrapper)return;const{left:t}=this.tertiaryButtonWrapper.getBoundingClientRect(),e=Math.floor(t+this.tertiaryButtonWrapper.offsetWidth),{right:n}=this.buttonRow.getBoundingClientRect(),i=e>n;this.renderTertiaryButtonAsMenu=i,i&&requestAnimationFrame((()=>{this.tertiaryMenu&&(this.tertiaryMenu.anchorEl=this.menuButton)}))}componentDidLoad(){this.resizeObserver=new W((()=>this.updateRenderTertiaryButtonAsMenu())),this.resizeObserver.observe(this.element),requestAnimationFrame(this.updateRenderTertiaryButtonAsMenu.bind(this))}get hostClass(){let t="mx-page-header flex flex-col px-24 lg:px-72";return this.pattern&&(t+=" bg-pattern"),this.hasTabs&&(t+=" pb-12 md:pb-0"),t+=this.buttons.length&&this.hasTabs?" min-h-176 md:min-h-164":this.buttons.length?" min-h-128":" min-h-80 md:min-h-128",t}get headingClass(){let t="my-0 pr-20 emphasis ";return t+=this.minWidths.md?this.previousPageUrl?"text-h5":"text-h3":this.previousPageUrl?"text-h6":"text-h5",t}get buttonsJsx(){return e("div",{ref:t=>this.buttonRow=t,class:"flex py-1 space-x-8 md:space-x-24 md:justify-end md:flex-row-reverse md:space-x-reverse items-center max-w-full"},this.buttons.map(((t,n)=>{let{btnType:i}=t;i||(i=0===n?"contained":1===n?"outlined":"text");const r=2===n,o=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}(t,["label"]);return e("div",{ref:t=>r&&(this.tertiaryButtonWrapper=t),class:r?"relative !ml-auto md:!ml-0":""},r&&this.renderTertiaryButtonAsMenu&&e("div",{class:"absolute !ml-auto -top-6"},e("mx-icon-button",{ref:t=>this.menuButton=t,innerHTML:'<svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path\n    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"\n    fill="currentColor"\n  />\n  <path\n    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"\n    fill="currentColor"\n  />\n  <path\n    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"\n    fill="currentColor"\n  />\n</svg>\n'}),e("mx-menu",{ref:t=>this.tertiaryMenu=t,"anchor-el":this.menuButton},e("mx-menu-item",Object.assign({},o),t.label))),e("mx-button",Object.assign({},t,{xl:this.minWidths.lg,"btn-type":i,"aria-hidden":r&&this.renderTertiaryButtonAsMenu,class:r&&this.renderTertiaryButtonAsMenu?"opacity-0 pointer-events-none":""}),t.label))})))}render(){return e(n,{class:this.hostClass},e("slot",{name:"previous-page"},this.previousPageUrl&&e("a",{href:this.previousPageUrl,class:"flex items-center pt-16 md:pt-20 uppercase caption1 font-semibold tracking-1-25"},e("span",{class:"mr-10",innerHTML:'<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path\n    d="M11.3327 5.33317H3.21935L6.94602 1.6065L5.99935 0.666504L0.666016 5.99984L5.99935 11.3332L6.93935 10.3932L3.21935 6.6665H11.3327V5.33317Z"\n    fill="currentColor"\n  />\n</svg>\n'}),this.previousPageTitle)),e("div",{class:"flex flex-col py-10 space-y-14 md:space-y-0 md:flex-row flex-grow md:items-center justify-center md:justify-between flex-wrap"},e("h1",{class:this.headingClass},e("slot",null)),this.buttons.length>0&&this.buttonsJsx,e("slot",{name:"buttons"})),e("slot",{name:"tabs"}))}get element(){return i(this)}};export{G as mx_page_header}