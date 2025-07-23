import { useEffect, useRef, useState } from 'react';

interface UseParallaxProps {
  speed?: number;
  offset?: number;
}

export function useParallax({ speed = 0.5, offset = 0 }: UseParallaxProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate if element is in viewport
      const isInViewport = elementTop < windowHeight && elementTop + elementHeight > 0;

      if (isInViewport) {
        // Calculate parallax offset
        const scrolled = window.scrollY;
        const rate = (scrolled - offset) * -speed;
        setTransform(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, offset]);

  return { ref, transform };
}
