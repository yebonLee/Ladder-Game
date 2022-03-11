import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Header/Header";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const players = searchParams.get("players").split(",");
  const rewards = searchParams.get("rewards").split(",");
  // players = ["1", "2"]
  // rewards = ["a", "b"]

  // const random = Math.floor(Math.random() * rewards.length);
  // console.log(random, rewards[random]);
  let randomPlayers = players
    .sort(() => 0.5 - Math.random())
    .slice(0, players.length);
  console.log(randomPlayers);
  let randomRewards = rewards
    .sort(() => 0.5 - Math.random())
    .slice(0, rewards.length);
  console.log(randomRewards);
  const handleReset = () => {
    navigate(`/firstpage`);
  };
  return (
    <>
      <Header />
      <h2 style={{ color: "#F05454" }}>The result of the ladder game is...</h2>
      <div className={styles.container}>
        <div className={styles.randomPlayerContainer}>
          {randomPlayers.map((player, index) => {
            return (
              <span className={styles.randomPlayer} key={index}>
                Player: {player}{" "}
              </span>
            );
          })}
        </div>
        <div className={styles.randomRewardContainer}>
          {randomRewards.map((reward, index) => {
            return (
              <span className={styles.randomReward} key={index}>
                Reward: {reward}
              </span>
            );
          })}
        </div>
      </div>
      <Button title="Reset" onClick={handleReset} />
    </>
  );
};

export default ResultPage;
