import{r as t,c as s,h as e,H as i,g as a}from"./p-70d5d065.js";import{M as o,m as h}from"./p-8a252c56.js";import{m as r}from"./p-765f57ba.js";import{f as l,b as d,a as n}from"./p-35756385.js";import{l as m,u as c}from"./p-2c153f67.js";import{a as p}from"./p-be1da9df.js";import"./p-0d6b3f5b.js";const u=class{constructor(e){t(this,e),this.mxClose=s(this,"mxClose",7),this.hasCard=!1,this.hasHeader=!1,this.hasHeaderBottom=!1,this.buttons=[],this.closeOnEscape=!0,this.closeOnOutsideClick=!0,this.contentClass="",this.isOpen=!1,this.previousPageTitle="Back",this.previousPageUrl="",this.large=!1,this.minWidths=new o,this.isVisible=!1}toggleModal(){this.isOpen?this.openModal():this.closeModal()}onKeyDown(t){this.isOpen&&"Tab"===t.key&&(t.shiftKey&&document.activeElement===this.firstFocusElement?(this.lastFocusElement.focus(),t.preventDefault()):document.activeElement===this.lastFocusElement&&(this.firstFocusElement.focus(),t.preventDefault()))}onDocumentKeyDown(t){if(this.isOpen&&this.closeOnEscape&&"Escape"===t.key){const t=document.querySelectorAll("mx-modal[is-open]");this.element===t[t.length-1]&&this.mxClose.emit()}}componentWillRender(){this.hasHeader=!!this.element.querySelector('[slot="header-left"]')||!!this.element.querySelector('[slot="header-right"]'),this.hasCard=!!this.element.querySelector('[slot="card"]'),this.hasHeaderBottom=!!this.element.querySelector('[slot="header-bottom"]');const t=this.element.querySelector("mx-tabs");t&&this.headerBottomSlotWrapper&&this.mobilePageHeader&&(this.minWidths.md?this.headerBottomSlotWrapper.appendChild(t):this.mobilePageHeader.appendChild(t))}connectedCallback(){h.subscribeComponent(this)}disconnectedCallback(){h.unsubscribeComponent(this),c(this.element)}async openModal(){r(this.element),m(this.element),this.isVisible=!0,requestAnimationFrame((async()=>{this.getFocusElements(),await Promise.all([l(this.backdrop,250),d(this.modal,250)]),this.mobilePageHeader.resetResizeObserver()}))}getFocusElements(){this.ancestorFocusedElement=document.activeElement,this.focusElements=Array.from(this.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((t=>!!t.offsetParent)),this.focusElements.length&&(this.firstFocusElement=this.focusElements[0],this.lastFocusElement=this.focusElements[this.focusElements.length-1],this.focusElements[0].focus())}async closeModal(){await Promise.all([n(this.backdrop),n(this.modal)]),this.isVisible=!1,c(this.element),this.ancestorFocusedElement&&this.ancestorFocusedElement.focus()}onBackdropClick(){this.closeOnOutsideClick&&this.mxClose.emit()}get hostClass(){let t="mx-modal fixed inset-0 flex pt-24 sm:pt-0 items-stretch sm:items-center justify-center";return this.isVisible||(t+=" hidden"),this.minWidths.sm&&(t+=this.large?" modal-large":" modal-medium"),t}get hasFooter(){return this.minWidths.md&&(!!this.previousPageUrl||this.buttons.length>0)||!!this.element.querySelector('[slot="footer-left"]')||!!this.element.querySelector('[slot="footer-right"]')}get buttonsJsx(){return e("div",{class:"flex py-1 space-x-24 justify-end flex-row-reverse space-x-reverse items-center max-w-full","data-testid":"buttons"},this.buttons.map(((t,s)=>{let{btnType:i}=t;return i||(i=0===s?"contained":1===s?"outlined":"text"),e("mx-button",Object.assign({},t,{xl:!0,"btn-type":i}),t.label)})))}get modalContentClasses(){let t="bg-modal-content order-2 flex-1 px-24 sm:px-40 py-16 sm:py-24 overflow-auto overscroll-none border-b";return this.contentClass&&(t+=" "+this.contentClass),t}render(){return e(i,{class:this.hostClass,"aria-labelledby":this.hasHeader?"headerText":null,"aria-modal":"true",role:"dialog"},e("div",{ref:t=>this.backdrop=t,class:"bg-modal-backdrop absolute inset-0 z-0"+(this.closeOnOutsideClick?" cursor-pointer":""),"data-testid":"backdrop",onClick:this.onBackdropClick.bind(this)}),e("div",{ref:t=>this.modal=t,class:"modal flex flex-col rounded-lg shadow-9 relative overflow-hidden"},e("div",{class:this.modalContentClasses,"data-testid":"modal-content"},this.description&&e("p",{class:"text-4 my-0 mb-16 sm:mb-24","data-testid":"modal-description"},this.description),e("slot",null),this.hasCard&&e("div",null,e("div",{class:"bg-modal-card min-h-full px-24 sm:px-40 py-16 sm:py-24 rounded-2xl","data-testid":"modal-card"},e("slot",{name:"card"})))),e("footer",{class:"bg-modal-footer order-3 flex items-center justify-between h-80 py-20 px-40"+(this.hasFooter?"":" hidden")},e("div",null,e("slot",{name:"footer-left"},this.previousPageUrl&&e("a",{href:this.previousPageUrl,class:"flex items-center uppercase text-4 font-semibold tracking-1-25","data-testid":"previous-page"},e("span",{class:"mr-10",innerHTML:p}),this.previousPageTitle))),e("div",{class:"ml-16"},e("slot",{name:"footer-right"},this.buttons.length>0&&this.buttonsJsx))),e("mx-page-header",{ref:t=>this.mobilePageHeader=t,class:"order-1",buttons:this.buttons,modal:!0,"previous-page-title":this.previousPageTitle,"previous-page-url":this.previousPageUrl},e("span",{id:"headerText","data-testid":"header-text"},e("slot",{name:"header-left"})),this.hasHeaderBottom&&e("div",{slot:"tabs"},e("slot",{name:"header-bottom"})),e("div",{slot:"modal-header-center",class:"flex items-center justify-center"},e("slot",{name:"header-center"})),e("div",{slot:"modal-header-right"},e("slot",{name:"header-right"},e("mx-button",{"btn-type":"text","data-testid":"close-button",onClick:this.mxClose.emit},"Close"))))))}get element(){return a(this)}static get watchers(){return{isOpen:["toggleModal"]}}};export{u as mx_modal}