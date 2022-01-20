import { useCallback, useContext } from "react";
import AppContext from "./AppContext";

const AmountList = (props) => {
  const { amounts } = useContext(AppContext);

  return (
    <>
      {amounts.map(({ id, amount, description }) => (
        <tr
          key={id}
          className={`${
            id % 2 === 0 ? "bg-slate-100" : "bg-white"
          } w - full text-right`}
        >
          {amount > 0 ? (
            <>
              <td className="w-1/2 p-1 border-x-2">
                <p className="font-bold text-green-500">{amount}</p>
                <p>{description}</p>
              </td>
              <td className="w-1/2 p-1 border-x-2"></td>
            </>
          ) : (
            <>
              <td className="w-1/2 p-1 border-x-2"></td>
              <td className="w-1/2 p-1 border-x-2">
                <p className="font-bold text-red-500">{amount}</p>
                <p>{description}</p>
              </td>
            </>
          )}
        </tr>
      ))}
    </>
  );
};

export default AmountList;
