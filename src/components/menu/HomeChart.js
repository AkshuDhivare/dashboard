import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 600],
  ["2015", 1200, 460, 700],
  ["2016", 1300, 1120, 800],
  ["2017", 1400, 540, 900],
  ["2018", 1500, 400, 1000],
  ["2019", 1600, 460, 1100],
  ["2020", 1700, 1120, 1200],
  ["2021", 1800, 540, 1300],
  ["2022", 1900, 1120, 1400],
  ["2023", 2000, 540, 1500],
  ["2024", 2200, 1120, 2000],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export default function HomeChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="270px"
      data={data}
      options={options}
    />
  );
}
