import{r as t,c as s,h as e,H as i,g as r}from"./p-31bdeba9.js";import{d as a,b as h}from"./p-e821a465.js";import{m as o}from"./p-727e6177.js";import"./p-a8b5b2a2.js";const l=[],n=class{constructor(e){t(this,e),this.mxClose=s(this,"mxClose",7),this.duration=6e3,this.isOpen=!1,this.isVisible=!1}async toggleSnackbar(){if(clearTimeout(this.durationTimer),this.isOpen)try{await this.waitForOtherSnackbars(),this.durationTimer=setTimeout(this.close.bind(this),this.duration),o(this.element),this.isVisible=!0,a(this.alertEl,void 0,"center")}catch(t){}else this.removeFromQueue(),this.isVisible=!1,this.mxClose.emit()}waitForOtherSnackbars(){return new Promise(((t,s)=>{if(this.queueItem={resolve:t,reject:s},l.push(this.queueItem),1===l.length)return t()}))}removeFromQueue(){if(!this.queueItem)return;const t=l.indexOf(this.queueItem);l.splice(l.indexOf(this.queueItem),1),0===t&&l.length>0&&l[0].resolve()}async close(){this.isOpen&&(await h(this.alertEl),this.isOpen=!1)}get alertClass(){return"mx-snackbar-alert flex flex-wrap items-center justify-between rounded-lg text-4 max-w-360 sm:w-360 shadow-6 px-16 py-14"}render(){return e(i,{class:"flex fixed w-full z-50 left-0 bottom-40 px-16 justify-center"+(this.isVisible?"":" hidden")},e("div",{ref:t=>this.alertEl=t,role:"alert",class:this.alertClass},e("p",{class:"my-0"},e("slot",null)),e("div",{class:"ml-auto",onClick:this.close.bind(this)},e("slot",{name:"action"}))))}get element(){return r(this)}static get watchers(){return{isOpen:["toggleSnackbar"]}}};export{n as mx_snackbar}