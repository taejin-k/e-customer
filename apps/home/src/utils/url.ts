export const openNewWindow = (url: string) => {
  if (typeof window === 'undefined') return;

  window.open(url, '_blank', 'noopener,noreferrer');
};
