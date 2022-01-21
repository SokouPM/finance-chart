import { createContext, useCallback, useState, useEffect } from "react";

const AppContext = createContext({});

const save = (datas) => {
  localStorage.setItem("datas", JSON.stringify(datas));
};

export const AppContextProvider = (props) => {
  const [datas, setdatas] = useState([]);
  const [totalIncoming, setTotalIncoming] = useState(0);
  const [totalOutgoing, setTotalOutgoing] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let totalIncome = datas.reduce((total, current) => {
      if (current.amount > 0) {
        return Number(total) + Number(current.amount);
      }
      return Number(total) + 0;
    }, 0);

    setTotalIncoming(totalIncome);
  }, [datas]);

  useEffect(() => {
    let totalOutgone = datas.reduce((total, current) => {
      if (current.amount < 0) {
        return Number(total) + Number(current.amount);
      }
      return Number(total) + 0;
    }, 0);

    setTotalOutgoing(totalOutgone);
  }, [datas]);

  const addDatas = useCallback(
    (data) => setdatas((currentdatas) => [...currentdatas, data]),
    []
  );

  const resetDatas = useCallback(() => localStorage.clear() + setdatas([]), []);

  useEffect(() => {
    const localStorageDatas = localStorage.getItem("datas");

    if (!localStorageDatas) {
      setLoaded(true);

      return;
    }

    const datas = JSON.parse(localStorageDatas);

    setdatas(datas);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    save(datas);
  }, [loaded, datas]);

  return (
    <AppContext.Provider
      {...props}
      value={{ datas, addDatas, resetDatas, totalIncoming, totalOutgoing }}
    />
  );
};

export default AppContext;
