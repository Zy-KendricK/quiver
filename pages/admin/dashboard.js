import React from "react";

// components

import CardBarChart from "components/Cards/CardBarChart.js";
import CardTrending from "components/Cards/CardTrending.js";
import CardTransactions from "components/Cards/CardTransactions.js";
import HeaderStats from "components/Headers/HeaderStats.js";
// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <HeaderStats />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-1/2">
            <CardBarChart />
          </div>
          <div className="w-full xl:w-1/2 mb-12 xl:mb-0 pl-4">
            <CardTrending />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 xl:mb-0">
            <CardTransactions />
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
