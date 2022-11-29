import { useCallback, useEffect, useRef } from 'react';

export const useIsMounted = (): { isMounted: () => boolean } => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const isMounted = useCallback(() => isMountedRef.current, [isMountedRef]);

  return { isMounted };
};
