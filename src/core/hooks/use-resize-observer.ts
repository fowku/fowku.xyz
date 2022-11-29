import { RefObject, useEffect } from 'react';

export const useResizeObserver = <T extends Element>(
  ref: RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const observer = new ResizeObserver(callback);

    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);
};
