import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnimationImg.module.scss";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimationImg: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollAnimation} ${
        isVisible ? styles.animated : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationImg;
