import{q as e}from"./p-0d6b3f5b.js";var t;!function(e){e.top="top",e.right="right",e.bottom="bottom",e.left="left"}(t||(t={}));const r={property:"opacity",startValue:"0",endValue:"1",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},a={property:"opacity",startValue:"1",endValue:"0",timing:"ease"},n={property:"transform",startValue:"scale(0.8)",endValue:"scale(1)",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},s=(e,r=!0)=>{const a=[0,0,0];let n=100;[t.top,t.left].includes(e)&&(n*=-1);let s=0;[t.top,t.bottom].includes(e)&&(s=1),a[s]=n;const i=a.map((e=>0===e?e:e+"%")).join(", ");return{property:"transform",startValue:`translate3d(${r?i:"0, 0, 0"})`,endValue:`translate3d(${r?"0, 0, 0":i})`,timing:"cubic-bezier(0.4, 0, 0.2, 1)"}},i=(e,t=180)=>m(e,[r],t),o=(e,t=150)=>m(e,[a],t),u=(e,t=150,a)=>m(e,[r,n],t,a),c=(e,a=250,n=t.right)=>m(e,[s(n),r],a),l=(e,r=200,n=t.right)=>m(e,[s(n,!1),a],r);function m(t,r,a,n){return new Promise((async s=>{if(e()||"undefined"!=typeof jest)return s();r.forEach((e=>{d(t,e.property,e.startValue)})),n&&(t.style.transformOrigin=n),requestAnimationFrame((()=>{t&&(t.style.transition=r.map((e=>`${e.property} ${a}ms ${e.timing}`)).join(", "),requestAnimationFrame((()=>{r.forEach((e=>{d(t,e.property,e.endValue)}))})))})),setTimeout(s,a)}))}function d(e,t,r){if("transform"!==t)e.style[t]=r;else{let t=e.style.transform.match(/\w*\((-?((\d+)|(\d*\.\d+))\w*,\s*)*(-?(\d+)|(\d*\.\d+))\w*\)/gi)||[],a=/^(\w*)\(/.exec(r)[1];t=t.filter((e=>!e.startsWith(a))),t.push(r),e.style.transform=t.join(" ")}}export{t as D,o as a,u as b,c,l as d,i as f}