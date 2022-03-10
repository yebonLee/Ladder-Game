import React from "react";
import styles from "./Reward.module.css";

const Reward = ({ numOfPlayer }) => {
  return (
    // numOfPlayer 받아와서 num만큼 input 생성 가능한지?
    <div className={styles.rewardContainer}>
      <p>Enter the reward</p>
      <input className={styles.rewardInput} type="text" placeholder="Reward" />
    </div>
  );
};

export default Reward;
