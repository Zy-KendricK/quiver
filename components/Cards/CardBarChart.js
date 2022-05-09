import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "USDT",
          "BUSD",
          "USDC",
          "USDP",
          "DAI",
          "HUSD",
          "GUSD",
          "FEI"
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#22c55e",
            borderColor: "#ed64a6",
            borderRadius: 10,
            data: [12, 9, 6, 4, 6, 2.1, 2.1, 2],
            fill: false,
            barThickness: 60,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Loan Request",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Currency",
              },
              gridLines: {
                borderDash: [0],
                borderDashOffset: [0],
                color: "rgba(33, 37, 41, 0)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [0],
                zeroLineBorderDashOffset: [0],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Months",
              },
              gridLines: {
                borderDash: [0],
                drawBorder: false,
                borderDashOffset: [0],
                color: "rgba(33, 37, 41, 0.05)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [0],
                zeroLineBorderDashOffset: [0],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-100 w-full mb-6 border rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Loan Requests
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
