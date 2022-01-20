import { createContext, useCallback, useState, useEffect } from "react";

const AppContext = createContext({});

const save = (amounts) => {
  localStorage.setItem("amounts", JSON.stringify(amounts));
};

export const AppContextProvider = (props) => {
  const [amounts, setAmounts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const addAmount = useCallback(
    (amount) => setAmounts((currentAmounts) => [...currentAmounts, amount]),
    []
  );

  useEffect(() => {
    const amount = localStorage.getItem("amounts");

    if (!amount) {
      setLoaded(true);

      return;
    }

    const amounts = JSON.parse(amount);

    setAmounts(amounts);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    save(amounts);
  }, [loaded, amounts]);

  return (
    <AppContext.Provider
      {...props}
      value={{ amounts: amounts || [], addAmount }}
    />
  );
};

export default AppContext;
