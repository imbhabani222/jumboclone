import { Box, Typography } from "@mui/material"
import React from "react"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Legend,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    subject: "Math",
    A: 120,
    B: 70,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 60,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 40,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 60,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 70,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 35,
    fullMark: 150,
  },
]

export default function Orders() {
  return (
    <Box className="userDataCard">
      <Typography>Orders</Typography>
      <Box width="100%">
        <ResponsiveContainer width={250} aspect={1}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            {/* <PolarAngleAxis dataKey="subject" /> */}
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#3F4FB4"
              fill="#3F4FB4"
              fillOpacity={1}
            />
            <Radar
              name="Karan"
              dataKey="B"
              stroke="#ED417A"
              fill="#ED417A"
              fillOpacity={1}
            />
            <Legend
              iconSize={15}
              width={300}
              height={50}
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ bottom: -20, left: -20 }}
              iconType="circle"
            />
          </RadarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
