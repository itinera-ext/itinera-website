"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./ScrollButton.module.css";

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  children,
  targetId,
  onClick,
  disabled,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={styles.styledButton}
    >
      <span>{children}</span>
      <FontAwesomeIcon icon={faArrowDown} width={16.5} />
    </button>
  );
};

export default ScrollButton;
