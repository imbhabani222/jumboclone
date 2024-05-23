import React from "react"
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { sales: 10000, name: "Average Revenue", fill: "#7352C7" },
  { sales: 6928, name: "Total Revenue", fill: "#2EB5C9" },
  { sales: 6478, name: "Orders Weekly", fill: "#3DD2A2" },
  { sales: 9223, name: "Total Orders", fill: "#F3970F" },
]

const style = {
  top: 0,
  left: 60,
  lineHeight: "24px",
}

export default function StatisticsRadialChart() {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <RadialBarChart
        cx={320}
        cy={120}
        innerRadius={40}
        outerRadius={120}
        barSize={10}
        data={data}
      >
        <Legend
          iconSize={15}
          width={200}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
          iconType="circle"
        />
        <RadialBar minAngle={15} background={false} clockWise dataKey="sales" />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
