import React, { useState } from "react";
import styles from "./Player.module.css";

const Player = (props) => {
  let [numOfPlayer, setNumOfPlayer] = useState(2);
  const addPlayer = () => {
    numOfPlayer += 1;
    setNumOfPlayer(numOfPlayer);
    if (numOfPlayer > 6) {
      alert("Players can only be set 2 - 6 people.");
      setNumOfPlayer(6);
    }
  };
  const subtractPlayer = () => {
    numOfPlayer -= 1;
    setNumOfPlayer(numOfPlayer);
    if (numOfPlayer < 2) {
      alert("Players can only be set 2 - 6 people.");
      setNumOfPlayer(2);
    }
  };
  return (
    <div className={styles.container}>
      <p>Set the number of players (2 - 6)</p>
      <div className={styles.setNumber}>
        <button className={styles.subtract} onClick={subtractPlayer}>
          -
        </button>
        <span className={styles.players}>{numOfPlayer}</span>
        <button className={styles.add} onClick={addPlayer}>
          +
        </button>
      </div>
    </div>
  );
};

export default Player;
