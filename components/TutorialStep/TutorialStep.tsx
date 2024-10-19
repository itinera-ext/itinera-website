import React, { ReactNode } from "react";
import styles from "./TutorialStep.module.css";

interface TutorialStepProps {
  addText?: string | ReactNode;
  title: string;
  text: string | ReactNode;
  img: string;
  reverse?: boolean;
}

const TutorialStep: React.FC<TutorialStepProps> = ({
  title,
  text,
  img,
  addText,
  reverse,
}) => {
  return (
    <div
      className={`${styles.stepContainer} ${
        reverse ? styles.stepContainerReverse : styles.stepContainerNormal
      }`}
    >
      <img src={img} alt="" className={styles.stepImage} />
      <div>
        {addText && (
          <div className={styles.additionalTextContainer}>
            <p className={styles.additionalText}>{addText}</p>
          </div>
        )}
        <div>
          <h3 className={styles.stepTitle}>{title}</h3>
          <p className={styles.stepText}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TutorialStep;
