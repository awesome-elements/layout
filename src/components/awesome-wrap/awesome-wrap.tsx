import { Component, Host, h, Element, ComponentInterface } from '@stencil/core';
import { updateCSSVariable, observeResize, unobserveResize } from '@awesome-elements/utils';

/**
 * @part inner - The inner container element that wraps all child elements.
 */
@Component({
  tag: 'awesome-wrap',
  styleUrl: 'awesome-wrap.css',
  shadow: true,
})
export class AwesomeWrap implements ComponentInterface {
  @Element() hostElement: HTMLAwesomeWrapElement;

  connectedCallback() {
    observeResize(this.hostElement, [this.updateContentMaxWidthForViewBreakpoint]);
  }

  disconnectedCallback() {
    unobserveResize(this.hostElement);
  }

  render() {
    return (
      <Host>
        <div part="inner">
          <slot></slot>
        </div>
      </Host>
    );
  }

  private getOuterBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--awesome-outer-${name}`);
  }

  private getViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--awesome-${name}`);
  }

  private updateContentMaxWidthForViewBreakpoint = (entry: ResizeObserverEntry) => {
    const width = entry.contentRect.width;
    switch (true) {
      case width >= this.getOuterBreakpoint('xxl'):
        updateCSSVariable('--content-max-width', `${this.getViewBreakpoint('xxl')}px`, this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('xl'):
        updateCSSVariable('--content-max-width', `${this.getViewBreakpoint('xl')}px`, this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('lg'):
        updateCSSVariable('--content-max-width', `${this.getViewBreakpoint('lg')}px`, this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('md'):
        updateCSSVariable('--content-max-width', `${this.getViewBreakpoint('md')}px`, this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('sm'):
        updateCSSVariable('--content-max-width', `${this.getViewBreakpoint('sm')}px`, this.hostElement);
        break;
      default:
        updateCSSVariable('--content-max-width', `100%`, this.hostElement);
    }
  };
}
