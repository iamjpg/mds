import{q as e}from"./p-29fb17eb.js";const t={property:"opacity",startValue:"0",endValue:"1",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},r={property:"opacity",startValue:"1",endValue:"0",timing:"ease"},a={property:"transform",startValue:"scale(0.8)",endValue:"scale(1)",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},i=(e,t=150)=>s(e,[r],t),n=(e,r=150,i)=>s(e,[t,a],r,i);function s(t,r,a,i){return new Promise((async n=>{if(e()||"undefined"!=typeof jest)return n();r.forEach((e=>{o(t,e.property,e.startValue)})),i&&(t.style.transformOrigin=i),requestAnimationFrame((()=>{t&&(t.style.transition=r.map((e=>`${e.property} ${a}ms ${e.timing}`)).join(", "),requestAnimationFrame((()=>{r.forEach((e=>{o(t,e.property,e.endValue)}))})))})),setTimeout(n,a)}))}function o(e,t,r){if("transform"!==t)e.style[t]=r;else{let t=e.style.transform.match(/\w*\((-?((\d+)|(\d*\.\d+))\w*,\s*)*(-?(\d+)|(\d*\.\d+))\w*\)/gi)||[],a=/^(\w*)\(/.exec(r)[1];t=t.filter((e=>!e.startsWith(a))),t.push(r),e.style.transform=t.join(" ")}}export{i as a,n as f}