import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <h1>Ladder Game</h1>
        <p>{props.content}</p>
      </header>
    </div>
  );
};

export default Header;
