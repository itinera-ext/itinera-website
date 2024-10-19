import React from "react";
import styles from "./impressum.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Impressum() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar showHowToUseButton={false} />
      <div className={styles.impressumContainer}>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Itinera – Plan Your Trip In Seconds <br />
          Victor Coltisor <br />
          Str. Gheorghe Lazar 36 <br />
          Timisoara 300385 <br />
          Romania
        </p>

        <h2>Kontakt:</h2>
        <p>E-Mail: victor@coltisor.com</p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p>
          Itinera – Plan Your Trip In Seconds <br />
          Victor Coltisor <br />
          Str. Gheorghe Lazar 36 <br />
          Timisoara 300385 <br />
          Romania
        </p>

        <h2>Haftungsausschluss (Disclaimer)</h2>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für
          den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>

        <p>&copy; {currentYear} Itinera</p>
      </div>
    </>
  );
}
