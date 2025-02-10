import Chart from "react-apexcharts";

const Chart2 = () => {
  return (
    <>
    <Chart
      width="100%"
      height="50%"
      options={{
        chart: {
            type: "line",
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: false,
            },
            labels: {
                format: "MMM yyyy",
            },
        },
        tooltip: {
            enabled: true,
              fixed: {
                enabled: true,
            },
        }, 
      }}
      series={[
        {
            name: "series A",
            data: [
                { x: "2018-09-10", y: 112 },
                { x: "2018-09-11", y: 321 },
                { x: "2018-09-12", y: 0 },
                { x: "2018-09-13", y: 180 },
            ],
        },
        ]}
    />
    <Chart
        width="100%"
        height="50%"
        type="donut"
        options={{
            chart: {
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: true,
            },
            tooltip: {
                fixed: {
                    enabled: true,
                },
            },
        }}
        series={[44, 55, 41, 17, 15]}
  />
  </>
  );
};

export default Chart2;
