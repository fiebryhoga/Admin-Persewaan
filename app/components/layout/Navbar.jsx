/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent">
      <ul className=" bg-white rounded-lg h-full flex flex-row px-4 py-1 justify-between items-center">
        <li className="cursor-pointer">
          <p className="text-base font-semibold text-gray-700 ">Dashboard</p>
        </li>
        <li>
          <div className="py-2 px-4 flex items-center rounded-lg min-w-[550px] duration-300 cursor-pointer text-gray-700 border border-gray-600 border-opacity-40">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent placeholder:text-semibold placeholder:tracking-wide focus:outline-none"
            />
          </div>
        </li>
        <li className="flex flex-row  justify-between items-center w-[200px]">
          <div className='flex flex-row gap-6'>
            <i class="bi bi-bell-fill text-gray-600 text-xl cursor-pointer hover:text-gray-900"></i>
            <i class="bi bi-envelope-fill text-gray-600 text-xl cursor-pointer hover:text-gray-900"></i>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center cursor-pointer">
            <div className="order-2  w-11 h-11 rounded-full border-4 border-gray-100">
              <img
                className="w-full h-full object-cover rounded-full"
                src="/assets/profile/admin1.jpg"
                alt=""
              />
            </div>
            <h4 className="order-1 text-[12px] font-semibold text-gray-600">
              Admin 1
            </h4>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
