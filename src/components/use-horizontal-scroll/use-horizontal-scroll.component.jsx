import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (event) => {
        const toLeft = event.deltaY < 0 && el.scrollLeft > 0;
        const toRight =
          event.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth;

        if (toLeft || toRight) {
          event.preventDefault();
          event.stopPropagation();

          el.scrollLeft += event.deltaY;
        }
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
};

export default useHorizontalScroll;
