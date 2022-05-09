import React from "react";
import Image from 'next/image'

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-64 w-11/12 z-10 bg-transparent md:flex-row md:flex-nowrap bg-white md:justify-start flex items-center md:border-b md:flex">
        <div className="flex flex-wrap divide-x w-full">
          <div className="w-full md:w-2/3 p-3.5 items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4  border-r">
            {/* Brand */}
            {/* Search Form */}
            <form className="md:flex hidden w-full flex-row flex-wrap items-center mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-4">
                  <Image src="/icons/search-normal.png" alt="search" width={100} height={100} />
                </span>
                <input
                  type="text"
                  placeholder="Search loans, payout, user, activities, transactions, etc.."
                  className="border-0 px-3 py-4 placeholder-blueGray-300 text-quivercolor relative bg-white rounded text-sm outline-none focus:outline-none focus:ring focus:ring-green-600 w-full pl-10"
                />
              </div>
            </form>
            {/* Notification */}
            <div className="relative flex w-full flex-wrap items-stretch md:justify-end">
              <div className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 -mt-2">
                <Image src="/icons/notification-1.png" alt="search" width={100} height={100} />
              </div>
            </div>
          </div>
          <div>
            {/* User */}
            <ul className="w-full p-3.5 list-none items-center hidden md:flex ml-6">
              <UserDropdown />
              <ul className="px-3">
                <li className="font-bold">Omololu Bamisile</li>
                <li className="text-xs text-gray-400">lolu@quiverfinance.com</li>
              </ul>
              <Image src="/icons/arrow-down-2.png" alt="search" width={16} height={16} />
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
