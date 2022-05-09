import React from "react";

// layout for page
import Admin from "layouts/Admin.js";

// components
import CardBarChart from "components/Cards/CardBarChart.js";
import CardLoans from "components/Cards/CardLoans";
import LoansTable from "components/Tables/LoansTable";

export default function Loans() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-white md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="relative w-full max-w-full flex-grow flex-1 mb-4">
            <h2 className="text-blueGray-700 text-lg font-semibold">
              Loans
            </h2>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3">
            <CardBarChart />
          </div>
          <div className="w-full md:w-1/3">
            <CardLoans />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 xl:mb-0">
            <LoansTable />
          </div>
        </div>
      </div>
    </>
  );
}

Loans.layout = Admin;
