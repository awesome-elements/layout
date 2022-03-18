import { observeMutation, observeResize, unobserveMutation, unobserveResize } from '@awesome-elements/utils';
import { Component, Host, h, ComponentInterface, Element, State } from '@stencil/core';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

/**
 * @slot xs - Content is displayed for _xs_ breakpoint.
 * @slot sm - Content is displayed for _sm_ breakpoint.
 * @slot md - Content is displayed for _md_ breakpoint.
 * @slot lg - Content is displayed for _lg_ breakpoint.
 * @slot xl - Content is displayed for _xl_ breakpoint.
 * @slot xxl - Content is displayed for _xxl_ breakpoint.
 */
@Component({
  tag: 'awesome-view-break',
  styleUrl: 'awesome-view-break.css',
  shadow: true,
})
export class AwesomeViewBreak implements ComponentInterface {
  private get actualBreakpoint() {
    return this.availableBreakpoints
      ?.filter(breakpoint => breakpoints.indexOf(breakpoint) <= breakpoints.indexOf(this.breakpoint))
      .sort((breakpoint1, breakpoint2) => breakpoints.indexOf(breakpoint2) - breakpoints.indexOf(breakpoint1))[0];
  }

  @Element() hostElement: HTMLAwesomeViewBreakElement;

  @State() breakpoint: Breakpoint;
  @State() availableBreakpoints: Breakpoint[];

  connectedCallback() {
    observeResize(this.hostElement, [this.handleResizing]);
    observeMutation(this.hostElement, [this.handleMutation], { childList: true, attributes: true, subtree: true });
    this.handleMutation();
  }

  disconnectedCallback() {
    unobserveResize(this.hostElement);
    unobserveMutation(this.hostElement);
  }

  render() {
    return (
      <Host>
        <div id="main-container" innerHTML={`<slot name="${this.actualBreakpoint}"></slot>`}></div>
      </Host>
    );
  }

  // TODO consider to make it a util
  private getViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${name}-local`);
  }

  private handleMutation = (record?: MutationRecord) => {
    if (
      record === undefined ||
      record.type === 'childList' ||
      (record.type === 'attributes' && record.target.parentElement === this.hostElement && record.attributeName === 'slot')
    ) {
      this.availableBreakpoints = Array.from(this.hostElement.querySelectorAll('*'))
        .map(element => element.getAttribute('slot') as Breakpoint)
        .filter(Boolean);
    }
  };

  private handleResizing = (entry: ResizeObserverEntry) => {
    const width = entry.contentRect.width;
    switch (true) {
      case width >= this.getViewBreakpoint('xxl'):
        this.breakpoint = 'xxl';
        break;
      case width >= this.getViewBreakpoint('xl'):
        this.breakpoint = 'xl';
        break;
      case width >= this.getViewBreakpoint('lg'):
        this.breakpoint = 'lg';
        break;
      case width >= this.getViewBreakpoint('md'):
        this.breakpoint = 'md';
        break;
      case width >= this.getViewBreakpoint('sm'):
        this.breakpoint = 'sm';
        break;
      default:
        this.breakpoint = 'xs';
    }
  };
}
