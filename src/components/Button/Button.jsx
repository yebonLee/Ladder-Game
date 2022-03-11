import React from "react";
import styles from "./Button.module.css";
/*
  재사용가능한 버튼
  1 텍스트 변경하기 위해
  2 클릭했을 떄 동작도 상황에 따라 변경
*/

const Button = ({ title, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
