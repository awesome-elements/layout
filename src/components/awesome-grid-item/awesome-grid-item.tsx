import { Component, Host, h, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-grid-item',
  styleUrl: 'awesome-grid-item.css',
  shadow: true,
})
export class AwesomeGridItem implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeGridItemElement;

  /**
   * The column index of this item.
   */
  @Prop({ reflect: true }) column: number;

  @Watch('column')
  columnChanged(column: number) {
    updateCSSVariable('--grid-column', column?.toString(), this.hostElement);
  }

  /**
   * The number of columns that this item spanning in the grid.
   */
  @Prop({ reflect: true }) columnSpan: number;

  @Watch('columnSpan')
  columnSpanChanged(columnSpan: number) {
    updateCSSVariable('--grid-column-span', columnSpan?.toString(), this.hostElement);
  }

  /**
   * The row index of this item.
   */
  @Prop({ reflect: true }) row: number;

  @Watch('row')
  rowChanged(row: number) {
    updateCSSVariable('--grid-row', row?.toString(), this.hostElement);
  }

  /**
   * The number of rows that this item spanning in the grid.
   */
  @Prop({ reflect: true }) rowSpan: number;

  @Watch('rowSpan')
  rowSpanChanged(rowSpan: number) {
    updateCSSVariable('--grid-row-span', rowSpan?.toString(), this.hostElement);
  }

  componentDidLoad() {
    this.rowChanged(this.row);
    this.rowSpanChanged(this.rowSpan);
    this.columnChanged(this.column);
    this.columnSpanChanged(this.columnSpan);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
