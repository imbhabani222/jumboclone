import React from "react"
import { BarChart, XAxis, Bar, ResponsiveContainer } from "recharts"

const data = [
  {
    month: "J",
    sales: 1000,
    revenue: 2000,
  },
  {
    month: "F",
    sales: 1900,
    revenue: 2000,
  },
  {
    month: "M",
    sales: 3000,
    revenue: 2000,
  },
  {
    month: "A",
    sales: 3800,
    revenue: 2000,
  },
  {
    month: "M",
    sales: 5000,
    revenue: 2000,
  },
  {
    month: "J",
    sales: 4500,
    revenue: 2000,
  },
  {
    month: "J",
    sales: 4800,
    revenue: 2000,
  },
  {
    month: "A",
    sales: 4000,
    revenue: 2000,
  },
  {
    month: "S",
    sales: 5300,
    revenue: 2000,
  },
  {
    month: "O",
    sales: 6000,
    revenue: 2000,
  },
  {
    month: "N",
    sales: 6500,
    revenue: 2000,
  },
  {
    month: "D",
    sales: 7000,
    revenue: 2000,
  },
]

export default function MonthlySalesBarGraph() {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart width={100} height={40} data={data} barGap={1}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <Bar dataKey="sales" stackId="a" fill="#8884d8" barSize={4} />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" barSize={4} />
      </BarChart>
    </ResponsiveContainer>
  )
}
