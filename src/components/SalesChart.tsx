import React from "react";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// components
import { BasicPortlet } from "./Portlet";



const SalesChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    fill: {
      type: "solid",
      opacity: [0.3, 0.3],
    },
    colors: ["#00acc1", "#f1556c"],
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName: string) => {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  const series = [
    {
      type: "area",
      data: [0, 23, 43, 35, 44, 45, 56, 37, 40],
    },
    {
      type: "area",
      data: [25, 23, 26, 24, 25, 32, 30, 24, 19],
    },
  ];

  return (
    <>
      <BasicPortlet cardTitle="Lifetime Sales" titleClass="header-title">
        <div className="text-center">
          <Chart
            options={options}
            series={series}
            height={250}
            className="apex-charts mt-0"
          />

       
        </div>
      </BasicPortlet>
    </>
  );
};

export default SalesChart;
