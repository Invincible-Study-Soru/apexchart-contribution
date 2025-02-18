import Chart from "react-apexcharts";

const Chart1 = () => {
  return (
    <Chart
      width="100%"
      height="100%"
      options={{
        chart: {
          fontFamily: "system",
          background: "pink",
          toolbar: {
            tools: {
              zoom: false,
              zoomin: false,
              zoomout: false,
              download: false,
              selection: false,
            },
            autoSelected: "zoom",
          },
          zoom: {
            enabled: true,
            type: "x",
            autoScaleYaxis: false,
          },
          animations: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (value) => (value === 0 ? "" : formatPrice(Number(value))),
          style: {
            fontSize: "11px",
          },
        },
        fill: {
          type: "solid",
          opacity: 1,
        },
        plotOptions: {
          bar: {},
        },
        grid: {
          padding: {
            left: 20,
            right: 20,
          },
        },
        xaxis: {
          type: "category",
          tickAmount: 14,
          min: 2025,
          max: 2025 + 14,
          labels: {
            style: {
              colors: "#A5A5A5",
              fontSize: "11px",
            },
            formatter: (value) => {
              const age = fullChartData.find(
                (item) => item.year === Number(value)
              )?.age;
              if (age) return [`(${age})`, value];
              else return [value, ""];
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: [
          {
            show: true,
            opposite: true,
            min: 0,
            labels: {
              style: {
                colors: "#A5A5A5",
              },
              formatter: (value) => formatPrice(value),
            },
          },
        ],
      }}
      series={[
        {
          type: "bar",
          name: "Expected Monthly Pension",
          color: "#FB596C",
          data: fullChartData.map((item) => ({
            x: item.year,
            y: item.monthly_pension,
          })),
        },
      ]}
    />
  );
};

export default Chart1;

const fullChartData = [
  {
    year: 2025,
    age: 52,
    monthly_pension: 0,
  },
  {
    year: 2026,
    age: 53,
    monthly_pension: 0,
  },
  {
    year: 2027,
    age: 54,
    monthly_pension: 0,
  },
  {
    year: 2028,
    age: 55,
    monthly_pension: 1747390,
  },
  {
    year: 2029,
    age: 56,
    monthly_pension: 1852390,
  },
  {
    year: 2030,
    age: 57,
    monthly_pension: 1965020,
  },
  {
    year: 2031,
    age: 58,
    monthly_pension: 2097720,
  },
  {
    year: 2032,
    age: 59,
    monthly_pension: 2226450,
  },
  {
    year: 2033,
    age: 60,
    monthly_pension: 2375980,
  },
  {
    year: 2034,
    age: 61,
    monthly_pension: 2472360,
  },
  {
    year: 2035,
    age: 62,
    monthly_pension: 2564740,
  },
  {
    year: 2036,
    age: 63,
    monthly_pension: 2665790,
  },
  {
    year: 2037,
    age: 64,
    monthly_pension: 2775900,
  },
  {
    year: 2038,
    age: 65,
    monthly_pension: 2882690,
  },
  {
    year: 2039,
    age: 66,
    monthly_pension: 3005690,
  },
  {
    year: 2040,
    age: 67,
    monthly_pension: 3126030,
  },
  {
    year: 2041,
    age: 68,
    monthly_pension: 3199720,
  },
  {
    year: 2042,
    age: 69,
    monthly_pension: 3237730,
  },
  {
    year: 2043,
    age: 70,
    monthly_pension: 3278680,
  },
  {
    year: 2044,
    age: 71,
    monthly_pension: 3322870,
  },
  {
    year: 2045,
    age: 72,
    monthly_pension: 3370460,
  },
  {
    year: 2046,
    age: 73,
    monthly_pension: 3421870,
  },
  {
    year: 2047,
    age: 74,
    monthly_pension: 3477700,
  },
  {
    year: 2048,
    age: 75,
    monthly_pension: 3538320,
  },
  {
    year: 2049,
    age: 76,
    monthly_pension: 3604350,
  },
  {
    year: 2050,
    age: 77,
    monthly_pension: 3676620,
  },
  {
    year: 2051,
    age: 78,
    monthly_pension: 3755400,
  },
  {
    year: 2052,
    age: 79,
    monthly_pension: 3843110,
  },
  {
    year: 2053,
    age: 80,
    monthly_pension: 3939340,
  },
];

const formatPrice = (price: number | undefined | null) => {
  if (price === undefined || price === null) return "";
  if (price === 0) return "$0";

  const absPrice = Math.abs(price); // 음수인 경우 절대값 계산
  const sign = price < 0 ? "-" : "";

  if (absPrice >= 1_000_000) {
    return `${sign}${(absPrice / 1_000_000).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}M`;
  }

  if (absPrice >= 1_000) {
    return `${sign}${(absPrice / 1_000).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })}K`;
  }

  return `${sign}$${absPrice.toLocaleString()}`;
};
