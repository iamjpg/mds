import{r as s,h as t,H as e,g as i}from"./p-31bdeba9.js";import{p as h}from"./p-0d6b3f5b.js";const l=class{constructor(t){s(this,t),this.dataAttributes={},this.name="",this.value="",this.labelClass="",this.labelName="",this.checked=!1,this.disabled=!1,this.componentWillRender=h}onInput(s){this.checked=s.target.checked}get labelClassNames(){let s="relative inline-flex flex-nowrap align-center items-center text-4";return this.disabled||(s+=" cursor-pointer"),this.labelClass&&(s+=" "+this.labelClass),s}render(){return t(e,{class:"mx-switch"},t("label",{class:this.labelClassNames},t("input",Object.assign({class:"absolute h-0 w-0 opacity-0",role:"switch",type:"checkbox",name:this.name,value:this.value,disabled:this.disabled,checked:this.checked},this.dataAttributes,{onInput:this.onInput.bind(this)})),t("div",{class:"slider relative round w-36 h-14 flex-shrink-0"+(this.disabled?"":" cursor-pointer")}),t("div",{class:"switch-label ml-16 inline-block","data-testid":"labelName"},this.labelName)))}get element(){return i(this)}};export{l as mx_switch}