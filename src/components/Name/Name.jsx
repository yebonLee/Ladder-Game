import React, { useState } from "react";
import styles from "./Name.module.css";

const Name = ({ numOfPlayer }) => {
  const [playerName, setPlayerName] = useState([]);

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    // numOfPlayer 받아와서 num만큼 input 생성 가능한지?
    <div className={styles.nameContainer}>
      <p>Enter player name</p>
      <form>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <p>{playerName}</p>
      </form>
    </div>
  );
};

export default Name;
