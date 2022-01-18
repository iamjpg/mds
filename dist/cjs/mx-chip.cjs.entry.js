'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-54a36eac.js');
const ripple = require('./ripple-93b636e3.js');
const utils = require('./utils-1f7ef40d.js');

const MxChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mxRemove = index.createEvent(this, "mxRemove", 7);
    this.uuid = utils.uuidv4();
    this.outlined = false;
    this.disabled = false;
    /** Display a checkmark on the left side of the chip */
    this.selected = false;
    /** Use the pointer cursor and show a ripple animation.
     * This does not need to be explicitly set for `choice` or `filter` chips. */
    this.clickable = false;
    /** Show the remove icon on the right */
    this.removable = false;
    /** Style as a choice chip when selected.
     * This is set internally when the chip is wrapped with an `mx-chip-group`. */
    this.choice = false;
    /** Style as a filter chip when selected */
    this.filter = false;
  }
  onClick(e) {
    if (this.disabled) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    if (this.isClickable)
      ripple.ripple(e, this.chipElem);
  }
  onKeyDown(e) {
    if (!this.isClickable)
      return;
    // Treat pressing Enter or spacebar as a click (like a button)
    if (['Enter', ' '].includes(e.key)) {
      e.preventDefault();
      this.chipElem.click();
    }
  }
  onRemove(e) {
    e.stopPropagation(); // Do not trigger the chip's onClick
    if (this.disabled)
      return;
    this.mxRemove.emit(e);
  }
  get hasLeftIcon() {
    return this.icon || this.avatarUrl || (this.selected && !this.choice);
  }
  get isClickable() {
    return this.clickable || this.choice || this.filter;
  }
  get chipClass() {
    let str = 'h-32 inline-grid items-center outline-none leading-none gap-8 grid-flow-col relative rounded-full text-4 overflow-hidden';
    if (this.choice)
      str += ' choice';
    if (this.filter)
      str += ' filter';
    if (this.outlined)
      str += ' outlined border';
    if (this.isClickable)
      str += ' clickable transform cursor-pointer disabled:cursor-auto';
    str += this.hasLeftIcon ? ' pl-6' : ' pl-12';
    if (!this.removable)
      str += ' pr-12';
    else
      str += this.hasLeftIcon ? ' pr-32' : ' pr-40';
    return str;
  }
  get removeButtonClass() {
    let str = 'remove inline-flex absolute top-4 items-center justify-center w-24 h-24 cursor-pointer';
    str += this.hasLeftIcon ? ' right-2' : ' right-8';
    return str;
  }
  get ariaRole() {
    if (this.choice)
      return 'radio';
    if (this.filter)
      return 'checkbox';
    if (this.clickable)
      return 'button';
    return null;
  }
  get avatarStyle() {
    if (!this.avatarUrl)
      return null;
    const background = `url(${this.avatarUrl}) no-repeat center center`;
    return { background, backgroundSize: 'cover' };
  }
  render() {
    return (index.h(index.Host, { class: "mx-chip inline-block relative" }, index.h("div", { ref: el => (this.chipElem = el), id: this.uuid, class: this.chipClass, "aria-checked": this.choice || this.filter ? (this.selected ? 'true' : 'false') : null, "aria-disabled": this.disabled ? 'true' : null, role: this.ariaRole, tabindex: this.isClickable ? '0' : '-1', onClick: this.onClick.bind(this), onKeyDown: this.onKeyDown.bind(this) }, this.hasLeftIcon && (index.h("div", { style: this.avatarStyle, role: "presentation", "data-testid": "left-icon", class: "left-icon flex items-center justify-center w-24 h-24 rounded-full relative overflow-hidden" }, this.icon && index.h("i", { class: this.icon + ' text-1' }), this.selected && (index.h("div", { "data-testid": "check", class: "check flex absolute inset-0 items-center justify-center" }, index.h("i", { class: "mds-check" }))))), index.h("span", null, index.h("slot", null))), this.removable && (index.h("button", { type: "button", "data-testid": "remove", "aria-label": "Remove", "aria-controls": this.uuid, class: this.removeButtonClass, onClick: this.onRemove.bind(this) }, index.h("i", { class: "mds-remove text-3" })))));
  }
};

exports.mx_chip = MxChip;
