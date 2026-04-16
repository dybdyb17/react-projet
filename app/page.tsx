'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";
 
export default function Home() {
  const [categorie, setCategorie] = useState("");
  const [Prix, setPrix] = useState(0);
  const [userDevine, setUserDevine] = useState("");
  const [message, setMessage] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
  if (categorie === "ordi") {
    setMin(500);
    setMax(2000);
    setPrix(Math.floor(Math.random() * (2000 - 500 + 1)) + 500);
  } else if (categorie === "jeux") {
    setMin(20);
    setMax(120);
    setPrix(Math.floor(Math.random() * (120 - 20 + 1)) + 20);
  } else if (categorie === "montre") {
    setMin(100);
    setMax(1000);
    setPrix(Math.floor(Math.random() * (1000 - 100 + 1)) + 100);
  }
}, [categorie]);
 
  function handleChange(event) {
    setCategorie(event.target.value);
  }

  function handleRetour() {
    setCategorie("");
    setUserDevine("");
    setMessage("");
  }

  function handleClick() {
  if (Number(userDevine) < min || Number(userDevine) > max) {
    setMessage("ehhh ehhh met un bon chiffre entre 20 et 120 depeche toi");
    return;
  }
  if (Number(userDevine) > Prix) {
    setMessage("-");
  } else if (Number(userDevine) < Prix) {
    setMessage("+");
  } else {
    setMessage("GG");
  }
}

  return (
    <div className={styles.page}>
      <h1 className={styles.titre}>Le Juste Prix</h1>

      {categorie === "" && (
        <div className={styles.choix}>
          <p className={styles.description}>Choisis une catégorie :</p>
          <label>
            <input type="radio" name="categorie" value="ordi" onChange={handleChange} /> 
            <span className={styles.label}>Ordi entre 500 et 2000</span>
          </label>
          <br />
          <label>
            <input type="radio" name="categorie" value="jeux" onChange={handleChange} />
            <span className={styles.label}>jeu vidéos entre 20 et 120</span>
          </label>
          <br />
          <label>
            <input type="radio" name="categorie" value="montre" onChange={handleChange} /> 
            <span className={styles.label}>Montres entre 100 et 1000</span>
          </label>
        </div>
      )}

      {categorie !== "" && (
        <div className = {styles.jeu}>
          <button className={styles.bouton} onClick={handleRetour}>
            Retour
          </button>
          <p className = {styles.description}>Catégorie : {categorie}</p>
          <input
            className = {styles.input}
            type="number"
            value={userDevine}
            onChange={(e) => setUserDevine(e.target.value)}
            placeholder="met un nombre vite"
          />
          <button className={styles.bouton} onClick={handleClick}>
            Valider
          </button>
          {message !== "" && (
            <p className={styles.message}>{message}</p>
          )}
        </div>
      )}

    </div>
  );
}