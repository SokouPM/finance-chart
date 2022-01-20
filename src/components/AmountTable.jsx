import React from "react";
import TotalAmount from "/src/components/TotalAmount";
import TotalIncoming from "/src/components/TotalIncoming";
import TotalOutgoin from "/src/components/TotalOutgoin";
import AmountList from "/src/components/AmountList";

const AmountTable = (props) => {
  return (
    <table className="w-full">
      <thead className="text-left text-xl">
        <tr>
          <th className="w-1/2 p-1 border-2">RECETTES</th>
          <th className="w-1/2 p-1 border-2">DÉPENSES</th>
        </tr>
      </thead>
      <tbody>
        <AmountList />
        <tr className="w-full text-xl">
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold">TOTAL DES RECETTES</p>
              <TotalIncoming />
            </div>
          </td>
          <td className="w-1/2 p-1 border-2">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold">TOTAL DES DÉPENSES</p>
              <TotalOutgoin />
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot className="w-full border-2">
        <tr>
          <td colSpan="2" className="w-full p-1 border-2 ">
            <div className="flex flex-row items-center justify-between px-5 py-3 text-2xl">
              <p className="font-bold">RÉSULTATS</p>
              <TotalAmount />
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default AmountTable;
