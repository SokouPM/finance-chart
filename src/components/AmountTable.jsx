import React from "react";
import AmountList from "/src/components/AmountList";

const AmountTable = (props) => {
  return (
    <table className="w-full">
      <thead className="text-left">
        <tr>
          <th className="w-1/2 p-1 border-2">RECETTES</th>
          <th className="w-1/2 p-1 border-2">DÉPENSES</th>
        </tr>
      </thead>
      <tbody>
        <AmountList />
        <tr className="w-full">
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between">
              <p>TOTAL DES RECETTES</p>
              <p>1000</p>
              {/*reduce*/}
            </div>
          </td>
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="w-max">TOTAL DES DÉPENSES</p>
              <p className="w-max">1000</p>
              {/*reduce*/}
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot className="w-full border-2">
        <tr>
          <td colSpan="2" className="w-full p-1 border-2 ">
            <div className="flex flex-row items-center justify-between">
              <p>RÉSULTATS</p>
              <p>0</p>
              {/*reduce*/}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default AmountTable;
