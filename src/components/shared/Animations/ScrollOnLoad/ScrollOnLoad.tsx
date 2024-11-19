import React, { useEffect, useState } from "react";
import styles from "./ScrollOnLoad.module.scss";

interface ScrollOnLoadProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollOnLoad: React.FC<ScrollOnLoadProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${styles.scrollOnLoad} ${
        isVisible ? styles.animated : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollOnLoad;
