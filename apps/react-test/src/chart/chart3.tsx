import Chart from "react-apexcharts";

const Chart3 = () => {
  return (
    <Chart
        width="100%"
        height="100%"
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
            plotOptions: {
                pie:{
                    expandOnClick: true,
                    donut:{
                        size: '30%',
                        thickness: [0.5, 1, 0.7, 0.8, 0.2],
                    }
                }
            },
        }}
        series={[44, 55, 41, 17, 15]}
  />
  );
};

export default Chart3;
