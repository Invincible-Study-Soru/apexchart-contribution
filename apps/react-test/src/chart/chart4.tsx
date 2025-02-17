import Chart from "react-apexcharts";

const Chart4 = () => {
  return (
    <>
      <Chart
        width="100%"
        height="50%"
        type="bar"
        options={{
          chart: {
            type: "bar",
          },
          xaxis: {
            categories: [
              "this is a long label that keeps going and going and going and going and going",
              "test2",
            ],
            labels: {
              trim: true,
              rotate: 0,
            },
          },
        }}
        series={[
          {
            name: "sales",
            data: [30, 40],
          },
        ]}
      />
    </>
  );
};

export default Chart4;
