import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/dashboard/page";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] bg-gray-200 px-8 py-2">
        <Navbar />
        <div className="">
          <Dashboard />
        </div>
      </div>
    </main>
  );
}
