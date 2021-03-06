import { Component, Host, h, ComponentInterface, Element, Method, Prop } from '@stencil/core';
import { updateCSSVariable } from '@awesome-elements/utils';

export type BreakpointValue = number | 'auto' | `${number}fr`;

@Component({
  tag: 'awesome-flex-item',
  styleUrl: 'awesome-flex-item.css',
  shadow: true,
})
export class AwesomeFlexItem implements ComponentInterface {
  private set fraction(value: BreakpointValue) {
    updateCSSVariable('--awesome-flex-fraction', value?.toString(), this.hostElement);
    this.updateFlexCSSVariable(value);
  }

  private get actualXs() {
    return this.xs;
  }

  private get actualSm() {
    return this.sm ?? this.actualXs;
  }

  private get actualMd() {
    return this.md ?? this.actualSm;
  }

  private get actualLg() {
    return this.lg ?? this.actualMd;
  }

  private get actualXl() {
    return this.xl ?? this.actualLg;
  }

  private get actualXxl() {
    return this.xxl ?? this.actualXl;
  }

  private containerSize = 0;

  @Element() hostElement: HTMLAwesomeFlexItemElement;

  /**
   * The size of the flex item for xs screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If `<number>fr` is passed, it shares remaining space evenly accroding to the `<number>` factor.
   * If nothing or `""` is passed, it works same as `1fr`.
   */
  @Prop({ reflect: true }) xs: BreakpointValue;

  /**
   * The size of the flex item for sm screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If `<number>fr` is passed, it shares remaining space evenly accroding to the `<number>` factor.
   * If `""` is passed, it works same as `1fr`.
   */
  @Prop({ reflect: true }) sm: BreakpointValue;

  /**
   * The size of the flex item for md screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If `<number>fr` is passed, it shares remaining space evenly accroding to the `<number>` factor.
   * If `""` is passed, it works same as `1fr`.
   */
  @Prop({ reflect: true }) md: BreakpointValue;

  /**
   * The size of the flex item for lg screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If `<number>fr` is passed, it shares remaining space evenly accroding to the `<number>` factor.
   * If `""` is passed, it works same as `1fr`.
   */
  @Prop({ reflect: true }) lg: BreakpointValue;

  /**
   * The size of the flex item for xl screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If `<number>fr` is passed, it shares remaining space evenly accroding to the `<number>` factor.
   * If `""` is passed, it works same as `1fr`.
   */
  @Prop({ reflect: true }) xl: BreakpointValue;

  /**
   * The size of the flex item for xxl screens, in terms of how many portions it should take up out of the total available.
   * If `"auto"` is passed, it will be the size of its content.
   * If `<number>fr` is passed, it shares remaining space evenly accroding to the `<number>` factor.
   * If `""` is passed, it works same as `1fr`.
   */
  @Prop({ reflect: true }) xxl: BreakpointValue;

  /** @internal */
  @Method()
  async containerSizeChanged(size: number) {
    this.containerSize = size;
    this.updateFraction();
  }

  connectedCallback() {
    this.fraction = this.actualXs;
  }

  componentWillUpdate() {
    this.updateFraction();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private updateFraction() {
    switch (true) {
      case this.containerSize >= this.getViewBreakpoint('xxl'):
        this.fraction = this.actualXxl;
        break;
      case this.containerSize >= this.getViewBreakpoint('xl'):
        this.fraction = this.actualXl;
        break;
      case this.containerSize >= this.getViewBreakpoint('lg'):
        this.fraction = this.actualLg;
        break;
      case this.containerSize >= this.getViewBreakpoint('md'):
        this.fraction = this.actualMd;
        break;
      case this.containerSize >= this.getViewBreakpoint('sm'):
        this.fraction = this.actualSm;
        break;
      default:
        this.fraction = this.actualXs;
    }
  }

  private getViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${name}-local`);
  }

  private updateFlexCSSVariable(value: string | number) {
    updateCSSVariable('--awesome-flex-item-max-width', 'calc(var(--awesome-flex-fraction) / var(--awesome-flex-base-fraction) * 100%)', this.hostElement);
    switch (true) {
      case value !== '' && !Number.isNaN(+value):
        updateCSSVariable('--awesome-flex-item-flex', '0 0 var(--awesome-flex-item-max-width)', this.hostElement);
        break;
      case value === 'auto':
        updateCSSVariable('--awesome-flex-item-flex', '0 0 auto', this.hostElement);
        break;
      case value?.toString().match(/[0-9]+fr/)?.length > 0:
      default:
        const numericalValue = +value?.toString().match(/[0-9]+/)?.[0] || 1;
        updateCSSVariable('--awesome-flex-item-flex', `${numericalValue} ${1 / numericalValue} 0`, this.hostElement);
        break;
    }
  }
}
