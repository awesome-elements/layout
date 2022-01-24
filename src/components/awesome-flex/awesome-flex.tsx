import { Component, Host, h, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
import { updateCSSVariable, observeResize, unobserveResize } from '@awesome-elements/utils';

@Component({
  tag: 'awesome-flex',
  styleUrl: 'awesome-flex.css',
  shadow: true,
})
export class AwesomeFlex implements ComponentInterface {
  private readonly FLEX_ITEM_TAG_NAME = 'awesome-flex-item';

  @Element() hostElement: HTMLAwesomeFlexElement;

  /**
   * The number of portions that the flex container is split into.
   */
  @Prop({ reflect: true }) baseFraction = 12;

  @Watch('baseFraction')
  baseFractionChanged(value: number) {
    updateCSSVariable('--awesome-flex-base-fraction', value.toString(), this.hostElement);
  }

  connectedCallback() {
    observeResize(this.hostElement, [this.notifySizeChangeToItemElements]);
  }

  disconnectedCallback() {
    unobserveResize(this.hostElement);
  }

  componentWillLoad() {
    this.baseFractionChanged(this.baseFraction);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private notifySizeChangeToItemElements = (entry: ResizeObserverEntry) => {
    const width = entry.contentRect.width;
    this.hostElement.querySelectorAll(this.FLEX_ITEM_TAG_NAME).forEach(itemElement => itemElement.containerSizeChanged(width));
  };
}
