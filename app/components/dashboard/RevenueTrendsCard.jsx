import React from "react";
import { Line } from "react-chartjs-2";

const RevenueTrendsCard = ({ revenueData }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 col-span-1 md:col-span-2">
      <h2 className="text-lg font-semibold mb-4">Revenue Trends</h2>
      <Line data={revenueData} />
    </div>
  );
};

export default RevenueTrendsCard;
