import { useEffect, useRef, useState } from 'react';

export default function useElementDimensions() {
  const elementRef = useRef(null);
  const [dimensions, setDimensions] = useState({});

  function handleResize() {
    const element = elementRef.current;

    setDimensions({
      width: element.clientWidth,
      scrollWidth: element.scrollWidth,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [elementRef]);

  return { elementRef, dimensions };
}
