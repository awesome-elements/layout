import { Component, Host, h, ComponentInterface, Element, Method, Prop } from '@stencil/core';
import { updateCSSVariable } from '../../utils/access-css-variable';

@Component({
  tag: 'awesome-flex-item',
  styleUrl: 'awesome-flex-item.css',
  shadow: true,
})
export class AwesomeFlexItem implements ComponentInterface {
  private set fraction(value: number | 'auto' | '') {
    updateCSSVariable('--fraction', value?.toString(), this.hostElement);
    this.updateFlexCSSVariable(value);
  }

  private get actualXs() {
    return this.xs;
  }

  private get actualSm() {
    return this.sm || this.actualXs;
  }

  private get actualMd() {
    return this.md || this.actualSm;
  }

  private get actualLg() {
    return this.lg || this.actualMd;
  }

  private get actualXl() {
    return this.xl || this.actualLg;
  }

  private get actualXxl() {
    return this.xxl || this.actualXl;
  }

  @Element() hostElement: HTMLAwesomeFlexItemElement;

  /**
   * The size of the flex item for xs screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
   */
  @Prop({ reflect: true }) xs: number | 'auto' | '';

  /**
   * The size of the flex item for sm screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
   */
  @Prop({ reflect: true }) sm: number | 'auto' | '';

  /**
   * The size of the flex item for md screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
   */
  @Prop({ reflect: true }) md: number | 'auto' | '';

  /**
   * The size of the flex item for lg screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
   */
  @Prop({ reflect: true }) lg: number | 'auto' | '';

  /**
   * The size of the flex item for xl screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
   */
  @Prop({ reflect: true }) xl: number | 'auto' | '';

  /**
   * The size of the flex item for xxl screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If nothing or `""` is passed, all flex item without setting the size will share the remaining space equally.
   */
  @Prop({ reflect: true }) xxl: number | 'auto' | '';

  /** @internal */
  @Method()
  async containerSizeChanged(size: number) {
    switch (true) {
      case size >= this.getViewBreakpoint('xxl'):
        this.fraction = this.actualXxl;
        break;
      case size >= this.getViewBreakpoint('xl'):
        this.fraction = this.actualXl;
        break;
      case size >= this.getViewBreakpoint('lg'):
        this.fraction = this.actualLg;
        break;
      case size >= this.getViewBreakpoint('md'):
        this.fraction = this.actualMd;
        break;
      case size >= this.getViewBreakpoint('sm'):
        this.fraction = this.actualSm;
        break;
      default:
        this.fraction = this.actualXs;
    }
  }

  connectedCallback() {
    this.fraction = this.actualXs;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private getViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--${name}`);
  }

  private updateFlexCSSVariable(value: string | number) {
    updateCSSVariable('--max-width', 'calc(var(--fraction) / var(--base-fraction) * 100%)', this.hostElement);
    switch (true) {
      case value !== '' && !Number.isNaN(+value):
        updateCSSVariable('--flex', '0 0 var(--max-width)', this.hostElement);
        break;
      case value === 'auto':
        updateCSSVariable('--flex', '0 0 auto', this.hostElement);
        break;
      case value === '':
      default:
        updateCSSVariable('--flex', '1 1 auto', this.hostElement);
        break;
    }
  }
}
