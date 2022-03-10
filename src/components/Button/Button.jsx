import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const handleClick = (e) => {
    alert("Going to next page");
  };
  return (
    <button className={styles.startBtn} onClick={handleClick}>
      Next
    </button>
  );
};

export default Button;
