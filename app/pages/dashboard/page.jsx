"use client";

import React from "react";
import TotalCustomersCard from "../../components/dashboard/TotalCustomersCard";
import TotalRevenueCard from "../../components/dashboard/TotalRevenueCard";
import ActiveRentalsCard from "../../components/dashboard/ActiveRentalsCard";
import AvailableEquipmentCard from "../../components/dashboard/AvailableEquipmentCard";
import RevenueTrendsCard from "../../components/dashboard/RevenueTrendsCard";
import RentalTrendsCard from "../../components/dashboard/RentalTrendsCard";
import StockStatusCard from "../../components/dashboard/StockStatusCard";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Dashboard = () => {
  const totalCustomers = 3;
  const totalRevenue = 325000;
  const activeRentals = 1;
  const availableEquipment = 45;

  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [120000, 190000, 300000, 500000, 200000, 325000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const rentalTrendsData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Rentals",
        data: [15, 25, 20, 30, 40, 35],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const stockStatusData = {
    labels: ["Tenda", "Sleeping Bag", "Kompor Gas"],
    datasets: [
      {
        label: "Stock",
        data: [10, 20, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TotalCustomersCard totalCustomers={totalCustomers} />
        <TotalRevenueCard totalRevenue={totalRevenue} />
        <ActiveRentalsCard activeRentals={activeRentals} />
        <AvailableEquipmentCard availableEquipment={availableEquipment} />
        <RevenueTrendsCard revenueData={revenueData} />
        <RentalTrendsCard rentalTrendsData={rentalTrendsData} />
        <StockStatusCard stockStatusData={stockStatusData} />
      </div>
    </div>
  );
};

export default Dashboard;
