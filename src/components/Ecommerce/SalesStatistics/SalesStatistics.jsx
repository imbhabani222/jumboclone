import React from "react"

import StatisticsLineChart from "./StatisticsLineChart/StatisticsLineChart"

import { DateRange } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"

import "./salesstatistics.css"
import StatisticsRadialChart from "./StatisticsRadialChart/StatisticsRadialChart"

const statistics = [
  { key: 1, sales: 48548, name: "Orders Monthly" },
  { key: 2, sales: 6478, name: "Orders Weekly" },
  { key: 3, sales: 210213, name: "Average Revenue" },
  { key: 4, sales: 692874, name: "Total Revenue" },
  { key: 5, sales: 9223, name: "Total Orders" },
  { key: 6, sales: 8543, name: "Past Orders" },
]

const SalesStatistics = () => {
  return (
    <Box className="salesStats">
      <Box className="salesStatsHeader">
        <Stack direction="row" justifyContent="space-between">
          <Typography>Sales Statistics</Typography>
          <Typography className="morebtn">...</Typography>
        </Stack>

        <Stack direction="row" justifyContent="start" gap={10}>
          {statistics.map((stat) => (
            <Box key={stat.key}>
              <Stack direction="row" justifyContent="start" gap={1}>
                <DateRange /> <Typography>{stat.sales}</Typography>
              </Stack>
              <Typography>{stat.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
      <Stack direction="row">
        <Box
          className="chartBox"
          style={{ width: "50%", height: "100%", padding: "30px 35px 20px 0" }}
        >
          <StatisticsLineChart />
        </Box>
        <Box
          className="statsRadialBarChart"
          style={{ width: "50%", height: "100%", padding: "30px 0 20px 0" }}
        >
          <StatisticsRadialChart />
        </Box>
      </Stack>
    </Box>
  )
}

export default SalesStatistics
