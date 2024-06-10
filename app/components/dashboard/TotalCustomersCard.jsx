import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const TotalCustomersCard = ({ totalCustomers }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-2xl" />
        <div className="ml-4">
          <p className="text-gray-600">Total Customers</p>
          <p className="text-2xl font-semibold">{totalCustomers}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalCustomersCard;
