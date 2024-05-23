import { Box, Typography } from "@mui/material"
import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import "../userdata.css"
const data = [
  { name: "Android", value: 400 },
  { name: "iOS", value: 300 },
  { name: "Web", value: 300 },
]

const COLORS = ["#7352C7", "#E83145", "#3DD2A2"]

export default function AppUsers() {
  return (
    <Box className="userDataCard">
      <Typography>App Users</Typography>
      <Typography>Last updated 30 mins ago</Typography>
      <Box style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width={270} aspect={1}>
          <PieChart>
            <Legend
              iconSize={15}
              width={300}
              height={50}
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ bottom: 5, left: -20 }}
              iconType="circle"
            />
            <Pie
              data={data}
              cx={120}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
