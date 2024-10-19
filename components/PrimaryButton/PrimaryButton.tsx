import React from "react";
import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string | undefined;
  target?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  target,
  disabled,
}) => {
  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      className={styles.styledLink}
      aria-disabled={disabled}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
