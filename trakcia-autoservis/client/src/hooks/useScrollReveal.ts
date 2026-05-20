import { useEffect, useRef, useState } from "react";

/**
 * Hook that triggers visibility when element enters viewport.
 * Starts as visible=true to ensure content always renders.
 * Animation classes should use CSS transitions triggered by the `animated` state.
 */
export function useScrollReveal(threshold = 0.05, rootMargin = "0px 0px -30px 0px") {
  const ref = useRef<HTMLDivElement>(null);
  // Start as true so content is always visible (important for preview/SSR)
  const [visible, setVisible] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Reset to invisible for animation, then observe
    setVisible(false);
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    // Fallback: if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      setAnimated(true);
      observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible, animated };
}
