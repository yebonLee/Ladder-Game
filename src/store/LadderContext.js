import React, { createContext } from "react";

export const LadderContext = createContext({}); // 기존에 정해둔 값 (read only)

// 쓰기 위해 만듦
const LadderContextProvider = (props) => {
  const context = {};

  return (
    <LadderContext.Provider value={context}>
      {props.children}
    </LadderContext.Provider>
  );
};

export default LadderContextProvider;
