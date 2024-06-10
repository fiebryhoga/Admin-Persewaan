import React from "react";
import { Bar } from "react-chartjs-2";

const RentalTrendsCard = ({ rentalTrendsData }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 col-span-1 md:col-span-2">
      <h2 className="text-lg font-semibold mb-4">Rental Trends</h2>
      <Bar data={rentalTrendsData} />
    </div>
  );
};

export default RentalTrendsCard;
