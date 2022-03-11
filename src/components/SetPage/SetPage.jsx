import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Name from "../Name/Name";
import Reward from "../Reward/Reward";
import "./SetPage.module.css";

const SetPage = () => {
  const [searchParams] = useSearchParams();
  const [playerNames, setPlayerNames] = useState([]);
  const [rewards, setRewards] = useState([]);
  const navigate = useNavigate();

  const num = +searchParams.get("num"); //string을 숫자로

  const handleNameChange = (names) => {
    console.log("handleNameChange: ", names);
    setPlayerNames(names);
  };

  const handleRewardChange = (rewards) => {
    console.log("handleRewardChange: ", rewards);
    setRewards(rewards);
  };

  const handleNext = () => {
    navigate(`/ladderpage?players=${playerNames}&rewards=${rewards}`);
  };

  return (
    <>
      <Header />
      <Name count={num} onChange={handleNameChange} />
      <Reward count={num} onChange={handleRewardChange} />
      <Button title="Next" onClick={handleNext} />
    </>
  );
};

export default SetPage;
