import { r as registerInstance, h, H as Host, g as getElement } from './index-540e1634.js';
import { p as propagateDataAttributes } from './utils-18e3dfde.js';

const MxRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dataAttributes = {};
    this.name = '';
    this.value = '';
    this.labelName = '';
    this.checked = false;
    this.componentWillRender = propagateDataAttributes;
  }
  /** Keep checked prop in sync with input element attribute */
  onInput(e) {
    this.checked = e.target.checked;
  }
  render() {
    return (h(Host, { class: "mx-radio" }, h("label", { class: "relative inline-flex flex-nowrap align-center items-center cursor-pointer text-4" }, h("input", Object.assign({ class: "absolute h-0 w-0 opacity-0", type: "radio", name: this.name, value: this.value, checked: this.checked }, this.dataAttributes, { onInput: this.onInput.bind(this) })), h("span", { class: "flex h-20 w-20 cursor-pointer flex-shrink-0 rounded-full" }), h("div", { class: "ml-16 inline-block", "data-testid": "labelName" }, this.labelName))));
  }
  get element() { return getElement(this); }
};

export { MxRadio as mx_radio };
