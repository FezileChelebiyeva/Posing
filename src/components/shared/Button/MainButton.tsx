import React from "react";
import styles from "./MainButton.module.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  return <button className={styles.main_button}>{text}</button>;
};

export default Button;
