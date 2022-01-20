import { useContext } from "react";
import AppContext from "/src/components/AppContext";

const TotalIncoming = () => {
  const { totalIncoming, totalOutgoing } = useContext(AppContext);
  const totalAmoundStyle =
    totalIncoming + totalOutgoing > 0 ? "text-green-500" : "text-red-500";

  return (
    <p className={`${totalAmoundStyle} font-bold`}>
      {totalIncoming + totalOutgoing} €
    </p>
  );
};

export default TotalIncoming;
