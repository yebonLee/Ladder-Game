import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LadderContext } from "../../store/LadderContext";
import RewardContext from "../../store/RewardContext";
import Button from "../Button/Button";
import Header from "../Header/Header";
import styles from "./LadderPage.module.css";

const LadderPage = (props) => {
  const ladderCtx = useContext(LadderContext);
  const rewardCtx = useContext(RewardContext);

  // const numOfPlayer = rewardCtx.rewards.length;

  const containerRef = useRef();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const players = searchParams.get("players").split(",");
  const rewards = searchParams.get("rewards").split(",");
  // console.log(players);
  // console.log(rewards);

  let randomPlayers = players
    .sort(() => 0.5 - Math.random())
    .slice(0, players.length);
  console.log(randomPlayers);
  let randomRewards = rewards
    .sort(() => 0.5 - Math.random())
    .slice(0, rewards.length);
  console.log(randomRewards);

  // const canvasSize = () => {
  //   const newWidth = containerRef.current.uwidth;
  //   setWidth(newWidth);

  //   const newHeight = containerRef.current.uheight;
  //   const ratio = newWidth / newHeight;
  //   setHeight(newWidth / ratio);
  // };

  // useEffect(() => {
  //   canvasSize();
  // }, []);

  console.log(width);
  console.log(height);

  const createLadder = () => {
    let canvas = document.getElementById("canvas");

    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");

      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";

      console.log(players.length);

      // 기본 ladder
      for (let i = 0; i < players.length; i++) {
        ctx.beginPath(); // 새로운 선 그린다!
        ctx.moveTo(37 + i * 70, 20); //  시작좌표
        ctx.lineTo(37 + i * 70, 350); // 끝나는 좌표
        ctx.stroke();
      }

      // for (let i = 0; i < ladder.length; i++) {
      //   for (let j = 0; j < players.length; j++) {
      //     ladder[i].push(0);
      //     ladder[i].push(1);
      //   }
      // }
    }
  };

  const result = () => {
    for (let i = 0; i < players.length; i++) {
      // let x = 0;
    }
  };

  const clickPlayerHandler = (numOfPlayer) => {
    alert(`clicked`);
    let canvas = document.getElementById("canvas");

    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
    }
  };
  const handleNext = () => {
    navigate(`/resultpage?players=${players}&rewards=${rewards}`);
  };

  useEffect(() => {
    createLadder();
    result();
  }, []);

  return (
    <div>
      <Header />
      <h2 style={{ color: "#F05454" }}>Click each name to check the results</h2>
      <div className={styles.container}>
        <div className={styles.playerNameContainer}>
          {/* {context.players.map((player, index) => { */}
          {randomPlayers.map((player, index) => {
            return (
              // <span className={styles.playerName} key={index}>
              //   {player}{" "}
              // </span>
              <Button
                title={player}
                key={index}
                className={styles.playerName}
                onClick={clickPlayerHandler}
              ></Button>
            );
          })}
        </div>
        <div className={styles.canvasContainer} ref={containerRef}>
          <canvas
            id="canvas"
            height="500"
            width="390"
            // className={styles.canvas}
            // width={width}
            // height={height}
          ></canvas>
        </div>
        <div className={styles.rewardNameContainer}>
          {randomRewards.map((reward, index) => {
            return (
              <span className={styles.rewardName} key={index}>
                {reward}
              </span>
            );
          })}
        </div>
        <Button title="Get the result" onClick={handleNext} />
      </div>
    </div>
  );
};

export default LadderPage;
