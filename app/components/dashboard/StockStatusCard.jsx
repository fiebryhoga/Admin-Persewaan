import React from "react";
import { Pie } from "react-chartjs-2";

const StockStatusCard = ({ stockStatusData }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 col-span-1">
      <h2 className="text-lg font-semibold mb-4">Stock Status</h2>
      <Pie data={stockStatusData} />
    </div>
  );
};

export default StockStatusCard;
