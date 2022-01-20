import { useContext } from "react";
import AppContext from "./AppContext";

const TotalIncoming = () => {
  const { totalIncoming, totalOutgoing } = useContext(AppContext);
  const totalAmound = totalIncoming + totalOutgoing;
  const totalAmoundStyle = totalAmound > 0 ? "text-green-500" : "text-red-500";

  return (
    <p className={`${totalAmoundStyle} font-bold`}>{totalAmound} €</p>
  );
};

export default TotalIncoming;
