export const useContentBlock = (contentBlock: HTMLElement) => {
  let isIntersected = false;
  let options = {
    rootMargin: '0px',
    threshold: 0.5
  }

  contentBlock.classList.add('opacity-0');

  let observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !isIntersected) {
      isIntersected = true;
      contentBlock.classList.add('animate-text-fade-from-bottom');
      contentBlock.classList.add('opacity-100');
    }
  }, options);
  observer.observe(contentBlock);
  return () => {
    observer.unobserve(contentBlock);
  }
}
