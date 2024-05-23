import { Box, Stack, Typography } from "@mui/material"

import "./salesReport.css"
import MonthlySalesBarGraph from "./MonthlySalesBarGraph/MonthlySalesBarGraph"
import YearlyProfitGraph from "./YearlyProfitGraph/YearlyProfitGraph"

const SalesReport = () => {
  return (
    <Box className="salesReport">
      <Stack direction="row" justifyContent="space-between">
        <Box className="reportBox" style={{ flex: "0 0 calc(50% - 10px)" }}>
          <Typography className="salesReportHeader">
            This year sales report
          </Typography>
          <Stack>
            <Stack
              className="salesReportStats"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography className="revenueAmount">$685k+</Typography>
                <Typography className="timeElapsed" variant="subtitle1">
                  past 9 months
                </Typography>
              </Box>
              <Box
                style={{
                  width: "50%",
                  height: "100%",
                  padding: "10px 0 10px 0",
                }}
              >
                <MonthlySalesBarGraph />
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box className="reportBox" style={{ flex: "0 0 calc(50% - 10px)" }}>
          <Typography className="salesReportHeader">
            Yearly profit report
          </Typography>
          <Stack>
            <Stack
              className="salesReportStats"
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box
                style={{
                  width: "70%",
                  height: "80%",
                  padding: "10px 0 10px 0",
                }}
              >
                <YearlyProfitGraph />
              </Box>
              <Box style={{ width: "20%" }}>
                <Typography className="revenueAmount">$685k+</Typography>
                <Typography className="timeElapsed" variant="subtitle1">
                  past 9 months
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default SalesReport
