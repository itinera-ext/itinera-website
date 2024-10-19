import React from "react";
import styles from "./Navbar.module.css";
import ScrollButton from "../ScrollButton/ScrollButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

type NavbarProps = {
  showHowToUseButton?: boolean;
};

function Navbar(props: NavbarProps) {
  const { showHowToUseButton = false } = props;

  return (
    <nav className={styles.navbarContainer}>
      <a href="/">
        <img
          src={"/images/itinera-logo.svg"}
          alt=""
          title="Itinera"
          className={styles.logoImage}
        />
      </a>
      <div className={styles.buttonContainer}>
        {showHowToUseButton && (
          <ScrollButton targetId="tutorial-container">
            How to use it
          </ScrollButton>
        )}
        <PrimaryButton
          href="https://chromewebstore.google.com/detail/itinera-%E2%80%93-plan-your-trip/ijkbbldofdehelecdeeomckgccbfebfo"
          target="_blank"
        >
          Add to Chrome
        </PrimaryButton>
      </div>
    </nav>
  );
}

export default Navbar;
