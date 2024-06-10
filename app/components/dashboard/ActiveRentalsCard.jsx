import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const ActiveRentalsCard = ({ activeRentals }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faClipboardList}
          className="text-yellow-500 text-2xl"
        />
        <div className="ml-4">
          <p className="text-gray-600">Active Rentals</p>
          <p className="text-2xl font-semibold">{activeRentals}</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveRentalsCard;
