import React from "react";
import styles from "./PrivacyPolicy.module.css";
import Navbar from "@/components/Navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar showHowToUseButton={false} />
      <div className={styles.privacyPolicyContainer}>
        <h1>Privacy Policy</h1>
        <p>Last updated: 9 Sep. 2024</p>

        <p>
          This Privacy Policy outlines the types of personal information we
          receive and collect when you use &quot;Itinera&quot;, as well as some
          of the steps we take to safeguard information. We aim to maintain your
          confidence and trust in the privacy and security of the personal data
          we collect from you.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information in order to provide better services to our
          users and improve our application.
        </p>
        <p>
          <strong>Log Information:</strong> When you use &quot;Itinera&quot;, we
          automatically collect and store certain information in server logs,
          which includes details of how you used our extension.
        </p>
        <p>
          <strong>Location Information:</strong> We use various technologies,
          including IP address, to determine location.
        </p>
        <p>
          <strong>Google Analytics:</strong> We use Google Analytics to collect
          data about your interactions with our extension. This may include
          pages you visit, the time spent on those pages, and the actions you
          take. The information collected through Google Analytics is used to
          enhance the user experience and improve the functionality of our
          extension.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use the information we collect from &quot;Itinera&quot; to provide,
          maintain, improve our services, and to develop new ones. The data
          collected through Google Analytics helps us understand user behavior
          and trends to better cater to your needs.
        </p>

        <h2>3. Information Sharing</h2>
        <p>
          We do not share personal information with companies, organisations, or
          individuals outside of &quot;Itinera&quot; unless one of the following
          circumstances applies:
        </p>
        <ul>
          <li>
            <strong>For legal reasons:</strong> We will share personal
            information outside of &quot;Itinera&quot; if we have a good faith
            belief that access, use, preservation, or disclosure of the
            information is reasonably necessary to meet any applicable law,
            regulation, legal process, or enforceable government request.
          </li>
        </ul>

        <h2>4. Information Security</h2>
        <p>
          We take appropriate security measures to protect against unauthorised
          access to or unauthorised alteration, disclosure, or destruction of
          data.
        </p>

        <h2>5. Third-Party Sites</h2>
        <p>
          This Privacy Policy does not apply to services offered by other
          companies or individuals, including products or sites that may be
          displayed as search results in our extension.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          Our Privacy Policy may change from time to time. We will not reduce
          your rights under this Privacy Policy without your explicit consent.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or its
          implementation, you may contact us at{" "}
          <a href="mailto:victor@coltisor.com">victor@coltisor.com</a>.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
