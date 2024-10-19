import React from "react";
import styles from "./Banner.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div>
          <h1 className={styles.bannerHeader}>
            Plan Your Trip <span className={styles.orange}>in Seconds</span>
          </h1>
          <p>
            Discover attractions in cities worldwide and <br />
            seamlessly add them into your Google Calendar
          </p>
          <PrimaryButton
            href="https://chromewebstore.google.com/detail/itinera-%E2%80%93-plan-your-trip/ijkbbldofdehelecdeeomckgccbfebfo?utm_source=ext_app_menu"
            target="_blank"
          >
            Add to Chrome - Its Free{" "}
          </PrimaryButton>
        </div>
        <img
          src={"/images/banner-image.png"}
          alt=""
          className={styles.styledBannerImage}
        />
      </div>
      <div className={styles.blackLine} />
    </>
  );
}

export default Banner;
