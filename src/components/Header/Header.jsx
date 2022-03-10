import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <h1>Ladder Game</h1>
      </header>
    </div>
  );
};

export default Header;
