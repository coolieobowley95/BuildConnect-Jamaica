export type StyleInfo = {
  className: string;
  styles: Record<string, string> | null;
};

export type GetStyleInfo = (resolved: { element: Element | null }) => StyleInfo;

function isEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const fromQuery = new URLSearchParams(window.location.search).get('designMode');
    if (fromQuery === '1' || fromQuery === 'true') return true;
    return window.localStorage.getItem('designMode') === '1';
  } catch {
    return false;
  }
}

export function initDesignMode(getStyleInfo: GetStyleInfo): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};
  if (!isEnabled()) return () => {};

  let selected: Element | null = null;

  const panel = document.createElement('div');
  panel.setAttribute('data-design-mode', 'true');
  panel.style.position = 'fixed';
  panel.style.top = '12px';
  panel.style.right = '12px';
  panel.style.zIndex = '2147483647';
  panel.style.maxHeight = 'calc(100vh - 24px)';
  panel.style.overflow = 'auto';
  panel.style.padding = '10px 12px';
  panel.style.borderRadius = '10px';
  panel.style.border = '1px solid rgba(0,0,0,0.12)';
  panel.style.background = 'rgba(255,255,255,0.96)';
  panel.style.fontFamily =
    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"';
  panel.style.fontSize = '12px';
  panel.style.lineHeight = '1.4';
  panel.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
  panel.style.width = '340px';

  const header = document.createElement('div');
  header.textContent = 'Design mode (Alt+Click)';
  header.style.fontWeight = '600';
  header.style.marginBottom = '8px';
  panel.appendChild(header);

  const body = document.createElement('pre');
  body.style.margin = '0';
  body.style.whiteSpace = 'pre-wrap';
  body.style.wordBreak = 'break-word';
  panel.appendChild(body);

  function render() {
    const info = getStyleInfo({ element: selected });
    body.textContent = JSON.stringify(info, null, 2);
  }

  function onClick(e: MouseEvent) {
    if (!e.altKey) return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    e.preventDefault();
    e.stopPropagation();
    selected = target;
    render();
  }

  // Capture phase so we can stop propagation before app handlers run.
  document.addEventListener('click', onClick, true);
  document.body.appendChild(panel);

  render();

  return function reselect() {
    if (!selected) return;
    // If the node was replaced by HMR, try to re-find a similar element.
    if (!document.contains(selected)) {
      selected = null;
    }
    render();
  };
}

