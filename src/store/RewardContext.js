import React, { createContext, useState } from "react";

export const RewardContext = createContext([]);

const RewardContextProvider = (props) => {
  const [rewards, setRewards] = useState([]);
  const [results, setResults] = useState([]);

  const context = {
    rewards: rewards,
    results: results,
  };

  return (
    <RewardContext.Provider value={context}>
      {props.children}
    </RewardContext.Provider>
  );
};

export default RewardContextProvider;
