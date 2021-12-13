import { Component, Host, h, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { updateCSSVariable } from '@awesome-elements/utils';

@Component({
  tag: 'awesome-ratio-box',
  styleUrl: 'awesome-ratio-box.css',
  shadow: true,
})
export class AwesomeRatioBox implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeRatioBoxElement;

  /**
   * The factor of height.
   */
  @Prop({ reflect: true }) heightFactor = 1;

  @Watch('heightFactor')
  heightFactorChanged(heightFactor: number) {
    updateCSSVariable('--height-factor', heightFactor.toString(), this.hostElement);
  }

  /**
   * The factor of width.
   */
  @Prop({ reflect: true }) widthFactor = 1;

  @Watch('widthFactor')
  widthFactorChanged(widthFactor: number) {
    updateCSSVariable('--width-factor', widthFactor.toString(), this.hostElement);
  }

  connectedCallback() {
    this.heightFactorChanged(this.heightFactor);
    this.widthFactorChanged(this.widthFactor);
  }

  render() {
    return (
      <Host>
        <div id="outer-container">
          <div id="inner-container">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
