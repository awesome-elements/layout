import { Component, Host, h, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { updateCSSVariable } from '@awesome-elements/utils';

@Component({
  tag: 'awesome-grid',
  styleUrl: 'awesome-grid.css',
  shadow: true,
})
export class AwesomeGrid implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeGridElement;

  /**
   * The row definitions. It receives a string defines the size of each row, split by space.
   * eg. 1fr 2fr 50px 1fr
   */
  @Prop({ reflect: true }) rows: string;

  @Watch('rows')
  rowsChanged(rows: string) {
    updateCSSVariable('--grid-template-rows', rows, this.hostElement);
  }

  /**
   * The column definitions. It receives a string defines the size of each column, split by space.
   * eg. 1fr 2fr 50px 1fr
   */
  @Prop({ reflect: true }) columns: string;

  @Watch('columns')
  columnsChanged(columns: string) {
    updateCSSVariable('--grid-template-columns', columns, this.hostElement);
  }

  /**
   * The gap between each row.
   */
  @Prop({ reflect: true }) rowGap: string;

  @Watch('rowGap')
  rowGapChanged(rowGap: string) {
    updateCSSVariable('--grid-row-gap', rowGap, this.hostElement);
  }

  /**
   * The gap between each column.
   */
  @Prop({ reflect: true }) columnGap: string;

  @Watch('columnGap')
  columnGapChanged(columnGap: string) {
    updateCSSVariable('--grid-column-gap', columnGap, this.hostElement);
  }

  componentDidLoad() {
    this.rowsChanged(this.rows);
    this.columnsChanged(this.columns);
    this.rowGapChanged(this.rowGap);
    this.columnGapChanged(this.columnGap);
  }

  render() {
    return (
      <Host>
        <div id="main-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
