import React, { useLayoutEffect, useState } from "react";

const ScrollEvent = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [isInverted, setIsInverted] = useState(false);

  useLayoutEffect(() => {
    // for show/hide
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    // for color
    const scrollTrigger = 60;

    const handleScroll = () => {
      if (
        window.scrollY >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        setIsInverted(true);
      } else {
        setIsInverted(false);
      }
    };

    window.addEventListener("scroll", updateScrollDirection);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return { scrollDirection, isInverted };
};

export default ScrollEvent;
