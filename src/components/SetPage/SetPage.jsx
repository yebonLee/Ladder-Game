import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Name from "../Name/Name";
import Reward from "../Reward/Reward";
import "./SetPage.module.css";

const SetPage = ({ onClick, numOfPlayer }) => {
  return (
    <>
      <Header />
      <Name />
      <Reward />
      <Link to="/ladderpage">
        <Button onClick={onClick} />
      </Link>
    </>
  );
};

export default SetPage;
