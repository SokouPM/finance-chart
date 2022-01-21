import { useContext } from "react";
import AppContext from "/src/components/AppContext";

const ResetDatasButton = () => {
  const { resetDatas } = useContext(AppContext);

  return (
    <button
      onClick={resetDatas}
      className="w-full p-2 mt-8 text-white bg-gray-700 hover:bg-gray-400"
    >
      Vider le journal
    </button>
  );
};

export default ResetDatasButton;
