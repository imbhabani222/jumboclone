import { Box, Typography } from "@mui/material"
import "../userdata.css"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
]
export default function OnlineVisitors() {
  return (
    <Box className="userDataCard onlineVisitors">
      <Typography className="text">Online Visitors</Typography>
      <Typography className="text">Last Updated 30 min ago</Typography>
      <Typography className="text">2855 users online</Typography>
      <Box style={{ width: "100%", height: "100%", paddingTop: "20px" }}>
        <ResponsiveContainer width="100%" height={230}>
          <AreaChart
            width="100%"
            height="100%"
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis hide dataKey="name" tickLine={false} tick={false} />
            <YAxis hide axisLine={false} tickLine={false} tick={false} />
            <Tooltip axisLine={false} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
