import { useEffect, useMemo, useState } from 'react';

export function useOnScreen<T extends Element>(ref: React.RefObject<T>) {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting)),
    [],
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
