import React from "react";

// components

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-white md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="relative w-full max-w-full flex-grow flex-1 mb-4">
            <h2 className="text-blueGray-700 text-lg font-semibold">
              Statistics
            </h2>
          </div>
          <div>
            {/* Card stats */}
            <div className="flex-col md:grid md:grid-cols-5 md:divide-x mdb:divide-y divide-green-300 bg-green-500 rounded-lg py-4 px">
              <div className="py-4 text-white items-center">
                <div className="text-center">
                  <p className="text-sm font-normal text-slate-300 group-hover:text-white">Total Users</p>
                  <p className="text-2xl font-medium text-slate-500 group-hover:text-slate-300">24,459</p>
                </div>
              </div>
              <div className="py-4 text-white items-center">
                <div className="text-center">
                  <p className="text-sm font-normal text-slate-300 group-hover:text-white">Total Referrals</p>
                  <p className="text-2xl font-medium text-slate-500 group-hover:text-slate-300">1,345</p>
                </div>
              </div>
              <div className="py-4 text-white items-center">
                <div className="text-center">
                  <p className="text-sm font-normal text-slate-300 group-hover:text-white">Total Transactions</p>
                  <p className="text-2xl font-medium text-slate-500 group-hover:text-slate-300">2.523M</p>
                </div>
              </div>
              <div className="py-4 text-white items-center">
                <div className="text-center">
                  <p className="text-sm font-normal text-slate-300 group-hover:text-white">Total Loan Requests</p>
                  <p className="text-2xl font-medium text-slate-500 group-hover:text-slate-300">$302,923.41</p>
                </div>
              </div>
              <div className="py-4 text-white items-center">
                <div className="text-center">
                  <p className="text-sm font-normal text-slate-300 group-hover:text-white">Total ROI per Coin</p>
                  <p className="text-2xl font-medium text-slate-500 group-hover:text-slate-300">$92,923.41</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
