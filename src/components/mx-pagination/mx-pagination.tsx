import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import chevronLeftSvg from '../../assets/svg/chevron-left.svg';
import chevronRightSvg from '../../assets/svg/chevron-right.svg';
import pageFirstSvg from '../../assets/svg/page-first.svg';
import pageLastSvg from '../../assets/svg/page-last.svg';
import arrowSvg from '../../assets/svg/arrow-triangle-down.svg';

export type PaginationChangeEventDetail = {
  rowsPerPage: number;
  page: number;
};

@Component({
  tag: 'mx-pagination',
  shadow: false,
})
export class MxPagination {
  rowsMenuAnchor: HTMLElement;
  rowsMenu: HTMLMxMenuElement;

  @Prop() page: number = 0;
  @Prop() rowsPerPageOptions: number[] = [10, 25, 50, 100];
  @Prop() rowsPerPage: number = 100;
  @Prop() simple: boolean = false;
  @Prop() totalRows: number;
  @Prop() disabled: boolean = false;
  @Prop() disableNextPage: boolean = false;

  @Event() mxPageChange: EventEmitter<PaginationChangeEventDetail>;

  componentDidLoad() {
    if (this.rowsMenu && this.rowsMenuAnchor) this.rowsMenu.anchorEl = this.rowsMenuAnchor;
  }

  onClickFirstPage() {
    this.mxPageChange.emit({ page: 0, rowsPerPage: this.rowsPerPage });
  }

  onClickPreviousPage() {
    this.mxPageChange.emit({ page: this.page - 1, rowsPerPage: this.rowsPerPage });
  }

  onClickNextPage() {
    this.mxPageChange.emit({ page: this.page + 1, rowsPerPage: this.rowsPerPage });
  }

  onClickLastPage() {
    this.mxPageChange.emit({ page: this.lastPage, rowsPerPage: this.rowsPerPage });
  }

  onChangeRowsPerPage(rowsPerPage: number) {
    // Return to first page whenever the results-per-page changes
    this.mxPageChange.emit({ page: 0, rowsPerPage });
  }

  get lastPage(): number {
    if (this.totalRows === 0) return 0;
    return Math.ceil(this.totalRows / this.rowsPerPage) - 1;
  }

  get currentRange(): string {
    let start = this.rowsPerPage * this.page + 1;
    let end = Math.min(this.totalRows, start + this.rowsPerPage - 1);
    return start + '–' + end;
  }

  render() {
    return (
      <Host class="mx-pagination block text-4 overflow-hidden select-none">
        {this.simple ? (
          // Simple pagination
          <div class="simple flex items-center justify-center h-48">
            <mx-icon-button
              aria-label="Previous page"
              chevron-left
              disabled={this.page === 0}
              onClick={this.onClickPreviousPage.bind(this)}
            />
            {this.page + 1} of {this.lastPage + 1}
            <mx-icon-button
              aria-label="Next page"
              chevron-right
              disabled={this.page === this.lastPage}
              onClick={this.onClickNextPage.bind(this)}
            />
          </div>
        ) : (
          // Standard pagination
          <div class="flex items-center justify-end h-56 space-x-36 px-4">
            <div class="flex items-center">
              Rows per page: &nbsp;
              <div ref={el => (this.rowsMenuAnchor = el)} class="flex items-center cursor-pointer">
                {this.rowsPerPage}
                <span class="ml-12" innerHTML={arrowSvg}></span>
              </div>
            </div>
            <mx-menu ref={el => (this.rowsMenu = el)}>
              {this.rowsPerPageOptions.map(option => (
                <mx-menu-item disabled={this.disabled} onClick={this.onChangeRowsPerPage.bind(this, option)}>
                  {option}
                </mx-menu-item>
              ))}
            </mx-menu>
            {this.totalRows > 0 && (
              <div>
                {this.currentRange} of {this.totalRows}
              </div>
            )}
            <div class="flex space-x-8">
              <mx-icon-button
                aria-label="First page"
                innerHTML={pageFirstSvg}
                disabled={this.page === 0 || this.disabled}
                onClick={this.onClickFirstPage.bind(this)}
              />
              <mx-icon-button
                aria-label="Previous page"
                innerHTML={chevronLeftSvg}
                disabled={this.page === 0 || this.disabled}
                onClick={this.onClickPreviousPage.bind(this)}
              />
              <mx-icon-button
                aria-label="Next page"
                innerHTML={chevronRightSvg}
                disabled={this.page === this.lastPage || this.disabled || this.disableNextPage}
                onClick={this.onClickNextPage.bind(this)}
              />
              {this.lastPage !== null && (
                <mx-icon-button
                  aria-label="Last page"
                  innerHTML={pageLastSvg}
                  disabled={this.page === this.lastPage || this.disabled}
                  onClick={this.onClickLastPage.bind(this)}
                />
              )}
            </div>
          </div>
        )}
      </Host>
    );
  }
}
