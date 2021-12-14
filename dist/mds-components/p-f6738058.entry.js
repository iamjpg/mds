import{r as t,c as s,h as i,H as e,g as a}from"./p-70d5d065.js";import{l as h,u as n}from"./p-2c153f67.js";import{m as o}from"./p-765f57ba.js";import{f as l,d as r,b as d}from"./p-7ab35d59.js";import"./p-0d6b3f5b.js";const c=class{constructor(i){t(this,i),this.mxClose=s(this,"mxClose",7),this.isSimple=!0,this.hasButtons=!1,this.hasHeading=!1,this.isOpen=!1,this.isVisible=!1}onIsOpenChange(){this.isOpen?this.showDialog():this.closeDialog()}onKeyDown(t){if(!this.isVisible)return;const s=()=>!document.activeElement||!this.focusElements.includes(document.activeElement);"Tab"===t.key?(this.getFocusElements(),t.shiftKey&&document.activeElement===this.firstFocusElement?(this.lastFocusElement.focus(),t.preventDefault()):(s()||document.activeElement===this.lastFocusElement)&&(this.firstFocusElement&&this.firstFocusElement.focus(),t.preventDefault())):"Enter"===t.key?(this.getFocusElements(),s()&&(t.preventDefault(),this.firstFocusElement&&this.firstFocusElement.focus(),this.closeDialog(!0))):"Escape"===t.key&&(this.closeDialog(),t.preventDefault())}async alert(t,{confirmLabel:s="Okay",cancelLabel:i,heading:e}={}){return this.open(t,{heading:e,confirmLabel:s,cancelLabel:i})}async confirm(t,{confirmLabel:s="Okay",cancelLabel:i="Cancel",heading:e}={}){return this.open(t,{heading:e,confirmLabel:s,cancelLabel:i})}componentWillRender(){this.hasHeading=!!this.heading||!!this.element.querySelector('[slot="heading"]'),this.hasButtons=!!this.confirmLabel||!!this.cancelLabel||!!this.element.querySelector('[slot="buttons"]'),this.isSimple=!this.element.innerText}componentDidLoad(){this.isOpen&&this.showDialog()}disconnectedCallback(){n(this.element)}async open(t,{cancelLabel:s,confirmLabel:i,heading:e}={}){return this.heading=e,this.message=t,this.cancelLabel=s,this.confirmLabel=i,this.showDialog(),new Promise((t=>{this.deferredResolve=t}))}async showDialog(){this.isVisible||(this.ancestorFocusedElement=document.activeElement,o(this.element),h(this.element),this.isVisible=!0,await new Promise((t=>requestAnimationFrame(t))),await Promise.all([l(this.backdrop),r(this.modal)]))}async closeDialog(t=!1){this.isVisible&&(await Promise.all([d(this.backdrop),d(this.modal)]),this.isVisible=!1,n(this.element),this.ancestorFocusedElement&&this.ancestorFocusedElement.focus(),this.deferredResolve&&this.deferredResolve(t),this.mxClose.emit())}getFocusElements(){this.focusElements=Array.from(this.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((t=>!!t.offsetParent)),this.focusElements.length&&(this.firstFocusElement=this.focusElements[0],this.lastFocusElement=this.focusElements[this.focusElements.length-1])}get hostClass(){let t="mx-dialog fixed inset-0 flex items-center justify-center";return this.isVisible||(t+=" hidden"),t}get modalClassNames(){let t="modal w-320 m-16 flex flex-col rounded-lg shadow-4 relative overflow-hidden";return this.isSimple&&(t+=" w-320"),this.modalClass&&(t+=" "+this.modalClass),t}render(){return i(e,{class:this.hostClass},i("div",{ref:t=>this.backdrop=t,class:"bg-dialog-backdrop absolute inset-0 z-0"}),i("div",{ref:t=>this.modal=t,role:"alertdialog","aria-labelledby":this.heading?"dialog-heading":null,"aria-describedby":this.message?"dialog-message":null,"aria-modal":"true","data-testid":"modal",class:this.modalClassNames},i("div",{class:"p-24 text-4 flex-grow overflow-auto","data-testid":"modal-content"},this.hasHeading&&i("h1",{id:"dialog-heading",class:"text-h6 emphasis !my-0 pb-16","data-testid":"heading"},this.heading,i("slot",{name:"heading"})),this.message&&i("p",{id:"dialog-message",class:"my-0"},this.message),i("slot",null)),this.hasButtons&&i("div",{class:"flex flex-wrap items-center justify-end p-4","data-testid":"button-tray"},this.confirmLabel&&i("mx-button",{class:"m-4 order-2",btnType:"text",onClick:()=>this.closeDialog(!0)},this.confirmLabel),this.cancelLabel&&i("mx-button",{class:"m-4 order-1",btnType:"text",onClick:()=>this.closeDialog()},this.cancelLabel),i("slot",{name:"buttons"}))))}get element(){return a(this)}static get watchers(){return{isOpen:["onIsOpenChange"]}}};export{c as mx_dialog}