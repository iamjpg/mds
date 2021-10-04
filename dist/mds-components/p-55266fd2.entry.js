import{r as t,c as s,h as e,H as i,g as r}from"./p-0d0438ba.js";import{f as a,a as h}from"./p-581c8fe7.js";import"./p-29fb17eb.js";const o=[],n=class{constructor(e){t(this,e),this.mxClose=s(this,"mxClose",7),this.duration=6e3,this.isOpen=!1,this.isVisible=!1}async toggleSnackbar(){if(clearTimeout(this.durationTimer),this.isOpen)try{await this.waitForOtherSnackbars(),this.durationTimer=setTimeout(this.close.bind(this),this.duration),this.isVisible=!0,a(this.alertEl,void 0,"center")}catch(t){}else this.removeFromQueue(),this.isVisible=!1,this.mxClose.emit()}waitForOtherSnackbars(){return new Promise(((t,s)=>{if(this.queueItem={resolve:t,reject:s},o.push(this.queueItem),1===o.length)return t()}))}removeFromQueue(){if(!this.queueItem)return;const t=o.indexOf(this.queueItem);o.splice(o.indexOf(this.queueItem),1),0===t&&o.length>0&&o[0].resolve()}componentWillLoad(){this.createSnackbarPortal(),this.portal.append(this.element)}createSnackbarPortal(){this.portal=document.querySelector(".snackbar-portal"),this.portal||(this.portal=document.createElement("div"),this.portal.classList.add("snackbar-portal","mds"),document.body.append(this.portal))}async close(){this.isOpen&&(await h(this.alertEl),this.isOpen=!1)}get alertClass(){return"mx-snackbar-alert flex flex-wrap items-center justify-between rounded-lg text-4 max-w-360 sm:w-360 shadow-6 px-16 py-14"}render(){return e(i,{class:"flex fixed w-full z-50 left-0 bottom-40 px-16 justify-center"+(this.isVisible?"":" hidden")},e("div",{ref:t=>this.alertEl=t,role:"alert",class:this.alertClass},e("p",{class:"my-0"},e("slot",null)),e("div",{class:"ml-auto",onClick:this.close.bind(this)},e("slot",{name:"action"}))))}get element(){return r(this)}static get watchers(){return{isOpen:["toggleSnackbar"]}}};export{n as mx_snackbar}