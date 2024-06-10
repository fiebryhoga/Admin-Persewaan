"use client";

import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <div className="h-full w-full block bg-white">
      <div className="h-full overflow-y-auto px-2 pt-1 pb-2 w-full text-center">
        <div className="text-gray-100 text-xl border-b border-b-gray-700">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-stripe pl-1 py-1 rounded-md text-gray-700"></i>
            <h1 className="font-bold text-gray-700 text-[15px] ml-3">
              Sewa Sewain
            </h1>
          </div>
        </div>
        
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-speedometer2 text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Dashboard
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-basket3-fill text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Stock
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-receipt text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Transaksi
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-credit-card text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Pembayaran
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-people text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Pelanggan
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-person-badge text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Admin
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 text-white">
          <i className="bi bi-box-arrow-in-right text-gray-700"></i>
          <span className="text-[14px] ml-4 text-gray-700 font-semibold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
