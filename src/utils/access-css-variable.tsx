export function updateCSSVariable(name: string, value: string, element: HTMLElement) {
  element?.style.setProperty(name, value);
}

export function obtainCSSVariable(name: string, element: HTMLElement, computed = true) {
  let style = element.style;
  if (computed) {
    style = getComputedStyle(element);
  }
  return style.getPropertyValue(name);
}