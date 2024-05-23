import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import "./statisticsLineChart.css"

const data = [
  {
    month: "Jan",
    sales: 1000,
  },
  {
    month: "Feb",
    sales: 1900,
  },
  {
    month: "Mar",
    sales: 3000,
  },
  {
    month: "Apr",
    sales: 3800,
  },
  {
    month: "May",
    sales: 5000,
  },
  {
    month: "Jun",
    sales: 4500,
  },
  {
    month: "July",
    sales: 4800,
  },
  {
    month: "Aug",
    sales: 4000,
  },
  {
    month: "Sep",
    sales: 5300,
  },
  {
    month: "Oct",
    sales: 6000,
  },
  {
    month: "Nov",
    sales: 6500,
  },
  {
    month: "Dec",
    sales: 7000,
  },
]

export default function StatisticsLineChart() {
  return (
    <ResponsiveContainer
      width="100%"
      aspect={2}
      className="responsiveStatContainer"
    >
      <LineChart data={data} width={500} height={200} connectNulls={true}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="sales"
          stroke="#82ca9d"
          activeDot={{ stroke: "#82ca9d", strokeWidth: 2, r: 4, fill: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
