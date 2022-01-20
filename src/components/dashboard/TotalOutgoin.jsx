import { useContext } from "react";
import AppContext from "/src/components/AppContext";

const TotalOutgoin = () => {
  const { totalOutgoing } = useContext(AppContext);

  return <p className="font-bold text-red-500">{totalOutgoing} €</p>;
};

export default TotalOutgoin;
