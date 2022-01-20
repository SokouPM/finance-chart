import { useContext } from "react";
import AppContext from "./AppContext";

const TotalIncoming = () => {
  const { totalIncoming } = useContext(AppContext);

  return <p className="font-bold text-green-500">{totalIncoming} €</p>;
};

export default TotalIncoming;
