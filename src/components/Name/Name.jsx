import React, { useState } from "react";
import styles from "./Name.module.css";

const Name = ({ count, onChange }) => {
  const [playerNames, setPlayerNames] = useState(Array(count).fill(""));

  // 3 => ["", "", ""];

  //   console.log(playerNames);
  const handleChange = (e) => {
    // 1 어떤 인풋에 넣는지 구분
    // console.log(e.target.id); // index가 뭔지
    const index = e.target.id;
    const value = e.target.value;
    // 2 해당 값 변경
    // copy할 배열을 만들고 그 배열에서 값을 바꾼 다음에 그 배열로 set
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = value;

    onChange(newPlayerNames);
    setPlayerNames(newPlayerNames);
  };

  return (
    // numOfPlayer 받아와서 num만큼 input 생성 가능한지?
    <div className={styles.nameContainer}>
      <p>Enter player name</p>
      <div>
        {playerNames.map((playerName, index) => {
          return (
            <input
              key={index}
              id={index}
              className={styles.nameInput}
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Name;
