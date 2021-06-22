import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import ripple from '../ripple';
import removeSvg from '../../assets/svg/remove.svg';
import checkSvg from '../../assets/svg/check.svg';

@Component({
  tag: 'mx-chip',
  shadow: false,
})
export class MxChip {
  @Prop() outlined: boolean = false;
  @Prop() disabled: boolean = false;
  /** Display a checkmark on the left side of the chip */
  @Prop() selected: boolean = false;
  /** Use the pointer cursor and show a ripple animation.
   * This does not need to be explicitly set for `choice` or `filter` chips. */
  @Prop() clickable: boolean = false;
  /** Show the remove icon on the right */
  @Prop() removable: boolean = false;
  /** URL of image to show on the left */
  @Prop() avatarUrl: string;
  /** Class name of icon to show on the left */
  @Prop() icon: string;
  /** The value associated with a choice chip (used with `mx-chip-group`) */
  @Prop() value: any;
  /** Style as a choice chip when selected.
   * This is set internally when the chip is wrapped with an `mx-chip-group`. */
  @Prop() choice: boolean = false;
  /** Style as a filter chip when selected */
  @Prop() filter: boolean = false;

  @Element() element: HTMLMxChipElement;

  /** Emitted when the remove icon is clicked */
  @Event() mxRemove: EventEmitter<MouseEvent>;

  onClick(e: MouseEvent) {
    if (this.disabled) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    if (this.isClickable) ripple(e, this.element);
  }

  onRemove(e: MouseEvent) {
    e.stopPropagation(); // Do not trigger the chip's onClick
    if (this.disabled) return;
    this.mxRemove.emit(e);
  }

  get hasLeftIcon() {
    return this.icon || this.avatarUrl || (this.selected && !this.choice);
  }

  get isClickable() {
    return (this.clickable || this.choice || this.filter) && !this.disabled;
  }

  get hostClass() {
    let str =
      'mx-chip h-32 inline-grid items-center leading-none gap-8 grid-flow-col relative rounded-full text-sm overflow-hidden';
    if (this.choice) str += ' choice';
    if (this.filter) str += ' filter';
    if (this.outlined) str += ' outlined border';
    if (this.isClickable) str += ' clickable cursor-pointer transform';
    str += this.hasLeftIcon ? ' pl-6' : ' pl-12';
    if (!this.removable) str += ' pr-12';
    else str += this.hasLeftIcon ? ' pr-2' : ' pr-8';
    return str;
  }

  get ariaRole() {
    if (this.choice) return 'radio';
    if (this.filter) return 'checkbox';
    if (this.clickable) return 'button';
    return null;
  }

  get avatarStyle() {
    if (!this.avatarUrl) return null;
    const background = `url(${this.avatarUrl}) no-repeat center center`;
    return { background, backgroundSize: 'cover' };
  }

  render() {
    return (
      <Host
        class={this.hostClass}
        aria-checked={this.selected}
        aria-disabled={this.disabled}
        role={this.ariaRole}
        tabindex={this.isClickable ? '0' : '-1'}
        onClick={this.onClick.bind(this)}
      >
        {this.hasLeftIcon && (
          <div
            style={this.avatarStyle}
            class="left-icon flex items-center justify-center w-24 h-24 rounded-full relative overflow-hidden"
          >
            {this.icon && <i class={this.icon + ' text-xl'}></i>}
            {this.selected && (
              <div class="check flex absolute inset-0 items-center justify-center">
                <span innerHTML={checkSvg}></span>
              </div>
            )}
          </div>
        )}
        <span>
          <slot></slot>
        </span>
        {this.removable && (
          <button
            type="button"
            data-testid="remove"
            aria-label="Remove"
            class="remove inline-flex items-center justify-center w-24 h-24 cursor-pointer"
            innerHTML={removeSvg}
            onClick={this.onRemove.bind(this)}
          ></button>
        )}
      </Host>
    );
  }
}
