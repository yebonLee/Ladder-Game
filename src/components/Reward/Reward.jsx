import React, { useState } from "react";
import styles from "./Reward.module.css";

const Reward = ({ count, onChange }) => {
  const [rewards, setRewards] = useState(Array(count).fill(""));
  // Array function -> count 수 만큼 array 생성
  // "" 로 채워라.

  const handleChange = (e) => {
    // 여러개 생성된 인풋 중 어떤 인풋에 값을 넣는지 구분
    const index = e.target.id;
    const value = e.target.value;

    // 어떤 인풋인지 알았다면 해당하는 값 변경
    const newRewards = [...rewards];
    newRewards[index] = value;

    onChange(newRewards);
    setRewards(newRewards);
  };
  return (
    <div className={styles.rewardContainer}>
      <p>Enter the reward</p>
      <div>
        {rewards.map((reward, index) => {
          return (
            <input
              key={index}
              id={index}
              className={styles.rewardInput}
              type="text"
              placeholder="Reward"
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reward;
