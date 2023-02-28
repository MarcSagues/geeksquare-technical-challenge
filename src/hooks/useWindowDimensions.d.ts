import { useState } from 'react';

import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

interface WindowDimensions {
  width: number;
  height: number;
}

function useWindowDimensions(): WindowSize {
  const [windowDimensions, setWindowDimensions] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  const handleSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
