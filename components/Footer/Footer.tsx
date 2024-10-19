import React from "react";
import styles from "./Footer.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer} id="footer">
      <img
        src={"/images/itinera-logo.svg"}
        alt=""
        className={styles.logoImage}
      />
      <div className={styles.textContainer}>
        <p className={styles.footerText}>
          Itinera is a free chrome extension, <br />
          plan your trip seamlessly in seconds!
        </p>
        <div>
          <PrimaryButton
            href="https://chromewebstore.google.com/detail/itinera-%E2%80%93-plan-your-trip/ijkbbldofdehelecdeeomckgccbfebfo"
            target="_blank"
          >
            {"Add to Chrome - It's Free"}
          </PrimaryButton>
        </div>
      </div>
      <div>
        <a href="/impressum" className={styles.bottomLink}>
          Impressum
        </a>
        <a href="/privacy-policy" className={styles.bottomLink}>
          Datenschutz
        </a>
      </div>
      <p className={styles.footerText}>&copy; {currentYear} Itinera</p>
    </div>
  );
}

export default Footer;
