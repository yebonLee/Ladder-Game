import React from "react";
import { Link } from "react-router-dom";
import Player from "../Player/Player";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./FirstPage.module.css";

const FirstPage = ({ onClick, numOfPlayer }) => {
  return (
    <>
      <Header />
      <Player />
      <Link to="/setpage">
        <Button onClick={onClick} />
      </Link>
    </>
  );
};

export default FirstPage;
