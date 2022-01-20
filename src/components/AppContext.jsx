import { createContext, useCallback, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [amounts, setAmounts] = useState([
    {
      id: 1,
      amount: 1200,
      description: "Test 1",
    },
    {
      id: 2,
      amount: -200,
      description: "Test 2",
    },
    {
      id: 3,
      amount: -400,
      description: "Test 3",
    },
    {
      id: 4,
      amount: 600,
      description: "Test 4",
    },
  ]);

  // const addAmount = useCallback(
  //   (amount) => setAmounts((currentAmounts) => [...currentAmounts, amount]),
  //   []
  // );

  return <AppContext.Provider {...props} value={{ amounts /*, addAmount*/ }} />;
};

export default AppContext;
