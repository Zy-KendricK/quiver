import React from "react";


export default function CardLoans() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-white border rounded-lg ml-7">
        <div className="p-4 2xl:p-10 mx-auto w-full md:divide-y">
          <div className="flex-col md:grid md:grid-cols-2 md:divide-x mdb:divide-y divide-gray-300 py-4 px">
            <div className="py-4 items-center">
              <div className="text-center">
                <p className="2xl:text-sm text-xs font-normal text-slate-300 group-hover:text-white">Total Loan Requests</p>
                <p className="2xl:text-2xl text-xl font-medium text-slate-500 group-hover:text-slate-300">$302,923.41</p>
              </div>
            </div>
            <div className="py-4 items-center">
              <div className="text-center">
                <p className="2xl:text-sm text-xs font-normal text-slate-300 group-hover:text-white">NO. of Loan Requests</p>
                <p className="2xl:text-2xl text-xl font-medium text-slate-500 group-hover:text-slate-300">2663</p>
              </div>
            </div>
          </div>
          <div className="flex-col md:grid md:grid-cols-2 md:divide-x mdb:divide-y divide-gray-300 py-4 px">
            <div className="py-4 items-center">
              <div className="text-center">
                <p className="2xl:text-sm text-xs font-normal text-slate-300 group-hover:text-white">Total Loan Repayed</p>
                <p className="2xl:text-2xl text-xl font-medium text-slate-500 group-hover:text-slate-300">$228,635.89</p>
              </div>
            </div>
            <div className="py-4 items-center">
              <div className="text-center">
                <p className="2xl:text-sm text-xs font-normal text-slate-300 group-hover:text-white">NO. of Loan Repayed</p>
                <p className="2xl:text-2xl text-xl font-medium text-slate-500 group-hover:text-slate-300">1536</p>
              </div>
            </div>
          </div>
          <div className="flex-col md:grid md:grid-cols-2 md:divide-x mdb:divide-y divide-gray-300 py-4 px">
            <div className="py-4 items-center">
              <div className="text-center">
                <p className="2xl:text-sm text-xs font-normal text-slate-300 group-hover:text-white">Total Loan Outstanding</p>
                <p className="2xl:text-2xl text-xl font-medium text-slate-500 group-hover:text-slate-300">$74,287.52</p>
              </div>
            </div>
            <div className="py-4 items-center">
              <div className="text-center">
                <p className="2xl:text-sm text-xs font-normal text-slate-300 group-hover:text-white">NO. of Loan Outstanding</p>
                <p className="2xl:text-2xl text-xl font-medium text-slate-500 group-hover:text-slate-300">1127</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
