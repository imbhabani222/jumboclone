import { Box } from "@mui/material"
import React from "react"

import "./ecommerce.css"
import SalesStatistics from "./SalesStatistics/SalesStatistics"
import SalesReport from "./SalesReport/SalesReport"
import UserData from "./UserData/UserData"

const Ecommerce = () => {
  return (
    <Box>
      <SalesStatistics />
      <SalesReport />
      <UserData />
    </Box>
  )
}

export default Ecommerce
