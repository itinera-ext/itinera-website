import Banner from "@/components/Banner/Banner";
import TutorialStep from "@/components/TutorialStep/TutorialStep";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar showHowToUseButton={true} />
      <div className={styles.mainContainer}>
        <Banner />
        <div className={styles.tutorialContainer} id="tutorial-container">
          <h1 className={styles.tutorialHeader}>
            How it <span className={styles.orange}>works</span>
          </h1>
          <TutorialStep
            title="Step 1"
            text={
              <span>
                Install the Google{" "}
                <span className={styles.boldText}>Chrome extension</span> on
                your device
              </span>
            }
            img={"/images/step-1.png"}
            reverse
          />
          <TutorialStep
            title="Step 2"
            text={
              <span>
                Open Google Calendar in the{" "}
                <span className={styles.boldText}>Google Chrome</span> browser
              </span>
            }
            img={"/images/step-2.png"}
          />
          <TutorialStep
            title="Step 3"
            text={
              <span>
                Click on the{" "}
                <span className={styles.boldText}>extension icon</span> on the
                top right
              </span>
            }
            img={"/images/step-3.png"}
            reverse
          />
          <TutorialStep
            title="Step 4"
            text={
              <span>
                Navigate to the button on the right of the page and click on the
                <span className={styles.boldText}> orange button</span>
              </span>
            }
            img={"/images/step-4.png"}
          />
          <TutorialStep
            title="Step 5"
            text={
              <span>
                Type the <span className={styles.boldText}>destination</span>{" "}
                you are planning to visit
              </span>
            }
            img={"/images/step-5.png"}
            reverse
          />
          <TutorialStep
            title="Step 6"
            addText={
              <span>
                <span className={styles.orange}>AI Feature (OpenAI) </span>🤖
              </span>
            }
            text={
              <span>
                <span className={styles.boldText}>Browse</span> through
                activities and read{" "}
                <span className={styles.boldText}>more details</span> about the
                attractions
              </span>
            }
            img={"/images/step-6.png"}
          />
          <TutorialStep
            title="Step 7"
            text={
              <span>
                <span className={styles.boldText}>Drag</span> the chosen
                activities
              </span>
            }
            img={"/images/step-7.png"}
            reverse
          />
          <TutorialStep
            title="Step 8"
            text={
              <span>
                Here you go - you have a{" "}
                <span className={styles.boldText}>plan for your trip!</span>
              </span>
            }
            img={"/images/step-8.png"}
          />
        </div>
      </div>
    </>
  );
}
