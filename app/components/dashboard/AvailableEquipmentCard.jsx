import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const AvailableEquipmentCard = ({ availableEquipment }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faTools} className="text-red-500 text-2xl" />
        <div className="ml-4">
          <p className="text-gray-600">Available Equipment</p>
          <p className="text-2xl font-semibold">{availableEquipment}</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableEquipmentCard;
