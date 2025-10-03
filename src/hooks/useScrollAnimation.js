import { useState, useEffect, useCallback } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    setScrollY(currentScrollY);
    setIsScrollingDown(currentScrollY > lastScrollTop && currentScrollY > 100);
    setLastScrollTop(currentScrollY);
  }, [lastScrollTop]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return { scrollY, isScrollingDown };
};
