import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const Chart3 = () => {
  const series = [
    { name: "passing_before", data: [{ x: "2024-11-25", y: 4 }] },
    // { name: "passing_in", data: [{ x: "2024-11-25", y: 1 }] },
    // { name: "passing_after", data: [] },
    { name: "non_passing_before", data: [{ x: "2024-11-20", y: 1 }] },
    // { name: "non_passing_in", data: [{ x: "2024-11-20", y: 2 }] },
    // { name: "non_passing_after", data: [] },
  ];

  const options: ApexOptions = {
    series: series,
    chart: {
      stacked: true,

      stackType: "normal",
      zoom: { enabled: false },
    },
    xaxis: { type: "datetime", min: 1732057200000, max: 1734649200000 },
    dataLabels: { enabled: false },
    legend: { show: true },
    colors: ["#86EFAC", "#93C5FD", "#FEF08A", "#f56565", "#c27ba0", "#101a2d"],
  };

  return (
    <Chart
      series={series}
      options={options}
      width="100%"
      height="100%"
      type="bar"
    />
  );
};

export default Chart3;
