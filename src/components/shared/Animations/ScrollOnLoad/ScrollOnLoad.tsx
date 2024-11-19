import React, { useEffect, useState } from "react";
import styles from "./ScrollOnLoad.module.scss";

interface ScrollOnLoadProps {
  children: React.ReactNode;
  className?: string; // İstifadəçinin əlavə xüsusi stili üçün
}

const ScrollOnLoad: React.FC<ScrollOnLoadProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Komponent render olduqda animasiyanı tetiklə
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms sonra görünən vəziyyətə keçsin

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
