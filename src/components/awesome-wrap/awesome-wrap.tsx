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
    return +getComputedStyle(this.hostElement).getPropertyValue(`--awesome-wrap-outer-breakpoint-${name}-in-px-local`);
  }

  private updateContentMaxWidthForViewBreakpoint = (entry: ResizeObserverEntry) => {
    const width = entry.contentRect.width;
    switch (true) {
      case width >= this.getOuterBreakpoint('xxl'):
        updateCSSVariable('--content-max-width', 'var(--awesome-wrap-inner-breakpoint-xxl-local)', this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('xl'):
        updateCSSVariable('--content-max-width', 'var(--awesome-wrap-inner-breakpoint-xl-local)', this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('lg'):
        updateCSSVariable('--content-max-width', 'var(--awesome-wrap-inner-breakpoint-lg-local)', this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('md'):
        updateCSSVariable('--content-max-width', 'var(--awesome-wrap-inner-breakpoint-md-local)', this.hostElement);
        break;
      case width >= this.getOuterBreakpoint('sm'):
        updateCSSVariable('--content-max-width', 'var(--awesome-wrap-inner-breakpoint-sm-local)', this.hostElement);
        break;
      default:
        updateCSSVariable('--content-max-width', 'var(--awesome-wrap-inner-breakpoint-xs-local)', this.hostElement);
    }
  };
}
