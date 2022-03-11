import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Header/Header";

const LadderPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const players = searchParams.get("players").split(",");
  const rewards = searchParams.get("rewards").split(",");
  console.log(players);
  console.log(rewards);

  const handleNext = () => {
    navigate(`/resultpage?players=${players}&rewards=${rewards}`);
  };

  return (
    <div>
      <Header />
      <h2 style={{ color: "#F05454" }}>Click each name to check the results</h2>
      <div>
        {players.map((player, index) => {
          return <p key={index}>Player Name: {player}</p>;
        })}
      </div>
      <div>
        {rewards.map((reward, index) => {
          return <p key={index}>Reward: {reward}</p>;
        })}
      </div>
      <Button title="Get the result" onClick={handleNext} />
    </div>
  );
};

export default LadderPage;
