import{r as t,h as s,H as i,g as e}from"./p-1ebddf58.js";const r=class{constructor(s){t(this,s),this.squared=!1,this.dot=!1,this.offset=0,this.bottom=!1,this.left=!1}get isStandalone(){return!this.element.firstElementChild}get isIconOnly(){return this.icon&&void 0===this.value}get badgeClassNames(){let t="badge inline-flex items-center justify-center text-sm font-semibold pointer-events-none";return t+=this.dot||this.isIconOnly?" rounded-full":this.squared?" rounded":" rounded-xl",this.dot?t+=" w-12 h-12":this.isStandalone?(t+=" h-24",t+=this.isIconOnly?" w-24":" px-8"):(t+=" h-20",t+=this.isIconOnly?" w-20":" px-6"),this.isStandalone||(t+=" absolute transform",this.bottom?(t+=` bottom-${this.offset} translate-y-1/2`,t+=this.left?" origin-bottom-left":" origin-bottom-right"):(t+=` top-${this.offset} -translate-y-1/2`,t+=this.left?" origin-top-left":" origin-top-right"),t+=this.left?` left-${this.offset} -translate-x-1/2`:` right-${this.offset} translate-x-1/2`),[t,this.badgeClass].join(" ")}render(){return s(i,{class:"mx-badge inline-flex relative"},s("slot",null),s("span",{class:this.badgeClassNames},this.icon&&s("i",{class:this.icon+(this.isIconOnly?"":" mr-4")}),this.value))}get element(){return e(this)}};export{r as mx_badge}