'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const listeMots = ["JAVASCRIPT", "COMPOSANT", "TABLEAU", "VARIABLE", "FONCTION", "INTERFACE", "BOUCLE", "PARAMETRE", "OBJET", "DEPLOIEMENT"];

const graph = [
    [
        "|--------|",
        "|",
        "|",
        "|",
        "|_",
    ],
    [
        "|--------|",
        "|        O",
        "|",
        "|",
        "|_",
    ],
    [
        "|--------|",
        "|        O",
        "|        |",
        "|",
        "|_",
    ],
    [
        "|--------|",
        "|        O",
        "|        |\\",
        "|",
        "|_",
    ],
    [
        "|--------|",
        "|        O",
        "|       /|\\",
        "|",
        "|_",
    ],
    [
        "|--------|",
        "|        O",
        "|       /|\\",
        "|         \\",
        "|_",
    ],
    [
        "|--------|",
        "|        O",
        "|      --|--",
        "|       / \\",
        "|_",
    ]
];

const lettres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export default function Home() {
  const [mot, setMot] = useState("");
  const [motLettre, setMotLettre] = useState([])
  const [erreurs, setErreurs] = useState(0);
  const [perdu, setPerdu] = useState(false);
  const [gagne, setGagne] = useState(false);
  const [lettresTrouvees, setLettresTrouvees] = useState([]);

  function motRandom() {
    const index = Math.floor(Math.random() * listeMots.length);
    const motChoisi = listeMots[index];
    setMot(motChoisi);
    setMotLettre(motChoisi.split(""));
    setErreurs(0);
    setPerdu(false);
    setGagne(false);
    setLettresTrouvees([]);
    console.log("tiens le mot :", motChoisi);
  }

  function affichergraph() {
    return graph[erreurs].map((ligne, index) => (
      <p key={index} className={styles.ligne}>{ligne}</p>
    ));
  }

  function verifLettre(lettre) {
    if (motLettre.includes(lettre)) {
      const nouvelleLettres = [...lettresTrouvees, lettre];
      setLettresTrouvees(nouvelleLettres);
      if (nouvelleLettres.length === motLettre.length) {
        setGagne(true);
      }
    } else {
      if (erreurs + 1 >= 6) {
        setErreurs(6);
        setPerdu(true);
      } else {
        setErreurs(erreurs + 1);
      }
    }
  }

  function afficherMot() {
    return motLettre.map((lettre, index) => (
      <span key={index} className={styles.case}>
        {lettresTrouvees.includes(lettre) ? lettre : "_"}
      </span>
    ))
  }

  function clavier() {
    return lettres.map((lettre, index) => (
      <button key={index} className={styles.touche} onClick={() => verifLettre(lettre)}>
        {lettre}
      </button>
    ))
  }

  useEffect(() => {
    motRandom();
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.titre}>Le Pendu</h1>
      <div className={styles.dessin}>
        {affichergraph()}
      </div>

      <div className={styles.motAffiche}>
        {afficherMot()}
      </div>

      {gagne && (
        <p className={styles.titre}>GGGG MON FREREEEEE</p>
      )}

      {perdu && (
        <p className={styles.titre}>SALE NULLLLL, Le mot était : {mot}</p>
      )}

      {!perdu && !gagne && (
        <div className={styles.clavier}>
          {clavier()}
        </div>
      )}

      <button className={styles.bouton} onClick={motRandom}>Nouvelle partie</button>
    </div>
  );
}