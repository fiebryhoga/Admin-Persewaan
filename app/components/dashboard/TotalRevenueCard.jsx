import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const TotalRevenueCard = ({ totalRevenue }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faDollarSign}
          className="text-green-500 text-2xl"
        />
        <div className="ml-4">
          <p className="text-gray-600">Total Revenue</p>
          <p className="text-2xl font-semibold">
            {totalRevenue.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueCard;
