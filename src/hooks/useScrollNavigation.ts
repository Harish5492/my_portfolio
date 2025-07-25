import { useEffect, useRef } from 'react';

export const useScrollNavigation = (setActiveSection: (section: string) => void) => {
  const sections = ['home', 'about', 'projects', 'resume', 'contact'];
  const sectionIndex = useRef(0);
  const isThrottled = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const sectionContainer = document.querySelector('.min-h-screen');
      if (!sectionContainer) return;

      const { scrollTop, scrollHeight, clientHeight } = sectionContainer as HTMLElement;
      const isScrollable = scrollHeight > clientHeight + 2; // allow for rounding errors
      const atTop = scrollTop === 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (isThrottled.current) return;

      // Only trigger section change if content is scrollable and at top/bottom
      if (isScrollable) {
        if (e.deltaY > 0 && atBottom) {
          if (sectionIndex.current < sections.length - 1) {
            isThrottled.current = true;
            sectionIndex.current += 1;
            setActiveSection(sections[sectionIndex.current]);
            setTimeout(() => { isThrottled.current = false; }, 800);
          }
        } else if (e.deltaY < 0 && atTop) {
          if (sectionIndex.current > 0) {
            isThrottled.current = true;
            sectionIndex.current -= 1;
            setActiveSection(sections[sectionIndex.current]);
            setTimeout(() => { isThrottled.current = false; }, 800);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [setActiveSection]);
};