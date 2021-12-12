export function observeResize(element: HTMLElement, handlers: ((entry: ResizeObserverEntry) => void)[]) {
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      handlers.forEach(handler => handler.call(this, entry))
    });
  });
  resizeObserver.observe(element);
}