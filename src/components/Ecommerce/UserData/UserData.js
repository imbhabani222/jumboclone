import { Box, Stack } from "@mui/material"
import React from "react"
import AppUsers from "./AppUsers/AppUsers"
import OnlineVisitors from "./OnlineVisitors/OnlineVisitors"
import WebsiteTraffic from "./WebsiteTraffic/WebsiteTraffic"
import Orders from "./Orders/Orders"

export default function UserData() {
  return (
    <Box style={{ margin: "20px 0 20px 0" }}>
      <Stack direction="row" justifyContent="space-between">
        <AppUsers />
        <OnlineVisitors />
        <WebsiteTraffic />
        <Orders />
      </Stack>
    </Box>
  )
}
